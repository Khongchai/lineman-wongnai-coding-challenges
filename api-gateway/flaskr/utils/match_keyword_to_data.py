from typing import List, Dict

def match_keyword_to_data(objs: List[Dict], keyword: str, cache: any):
    lookup_terms = ["title", "description", "tags"]
    returned_obj = [x for x in objs if compare_terms(lookup_terms, keyword, x)]

    print(f"returned_obj length: {len(returned_obj)}")

    #if object found, cache it
    if returned_obj: cache.set(keyword, returned_obj)
    return returned_obj


def compare_terms(lookup_terms: List[str], keyword: str, obj: Dict):
    """
    Python "in" returns true if a word is similar to any in the string, 
    but only return true if said word matches 100% to a string from an array.
    We therefore have to check each separately.

    For example, using "in" would return true for:
        return "hello" in "come, say helo to your mom!"
        return "hello" in "hel"
    but not:
        return "hello" in ["hel", "brain", "แมว"]
        return "แม" in ["hell", "brain", "แมว"]
    """
    #Loop through to check separately
    for term in lookup_terms:
        if isinstance(obj[term], list):
            for item in obj[term]:
                if compare_words(keyword, item):
                # if keyword in item: 
                    return True
        # elif keyword in obj[term]:
        elif compare_words(keyword, obj[term]):
            return True
    return False

def compare_words(word1: str, word2: str):
    # optimize comparison algorithm here
    return word1 in word2