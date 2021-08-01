import pytest
from flask_caching import Cache
from flaskr.main import config as app_cache_config
from flask import Flask
from flaskr.utils.check_data_in_cache import check_all_data_in_cache
from flaskr.utils.match_keyword_to_data import compare_terms, compare_words
from typing import List, Tuple


class ReturnedDataInterface:
    title: str
    eid: str
    url: str
    description: str
    photos: Tuple[str, str, str, str]
    tags: List[str]


@pytest.fixture
def cache_and_entities():

    app = Flask(__name__)
    app.config.from_mapping(app_cache_config)
    cache = Cache(app)

    testEntities = []
    for i in range(10):
        testEntities.append(dict(
            title=f"title{i}",
            eid=f"{i}",
            url=f"url{i}",
            description=f"description{i}",
            photos=tuple([f"photo{i}" for i in range (4)]),
            tags=[f"tag{i}" for i in range(10)]
        ))
    return {
        "cache": cache, 
        "testEntities": testEntities
    }


@pytest.fixture
def word_pairs():

    group_true = {
        "khong": "kho",
        "super": "supercalifragilisticexpialidocious",
        "khong": "chaikhong",
    }
    group_false = {
        "khong": "supercalli",
        "kh": "hk"
    }

    return {
        "group_true": group_true,
        "group_false": group_false
    }
    

def test_data_in_cache(cache_and_entities):

    cache, testEntities = cache_and_entities.values()

    for i in range(len(testEntities)):

        #Act
        cache.set(f"entities{i}", testEntities[i])
        returned_entity = check_all_data_in_cache(cache=cache, key=f"entities{i}", url="https://google.com")

        #Assert
        assert(cache.get(f"entities{i}") == returned_entity)

    #Teardown
    cache.clear()
    

def test_data_not_in_cache(cache_and_entities):

    cache, testEntities = cache_and_entities.values()

    for i in range(len(testEntities)):

        #Act
        cache.set(f"entity{i}", testEntities[i])
        returned_entity = check_all_data_in_cache(cache=cache, key="entity1", url="https://google.com")

        #Assert
        assert(cache.get("entity100") != returned_entity)
    
    #Teardown
    cache.clear()


def test_word_comparison_algo(word_pairs):

    group_true, group_false = word_pairs.values()
    for key in group_true:
        assert(compare_words(key, group_true[key]))
    for key in group_false:
        assert not(compare_words(key, group_false[key]))


def test_terms_comparison(cache_and_entities):
    
    _, testEntities = cache_and_entities.values()


    #Maybe refactor and loop through all instead?

    assert(compare_terms(lookup_terms=["title", "description"],keyword="title",obj=testEntities[0]))
    assert(compare_terms(lookup_terms=["title", "description"],keyword="title0",obj=testEntities[0]))
    assert(compare_terms(lookup_terms=["title"],keyword="titl",obj=testEntities[5]))
    assert(compare_terms(lookup_terms=["tags"], keyword="tag",obj=testEntities[6]))
    assert(compare_terms(lookup_terms=["description"], keyword="description9",obj=testEntities[9]))

    assert not (compare_terms(lookup_terms=["tags"],keyword="title0",obj=testEntities[6]))
    assert not (compare_terms(lookup_terms=["tags"],keyword="tags1",obj=testEntities[6]))
    assert not (compare_terms(lookup_terms=["description"], keyword="description6",obj=testEntities[7]))
    assert not (compare_terms(lookup_terms=["description"], keyword="descrpton",obj=testEntities[4]))
