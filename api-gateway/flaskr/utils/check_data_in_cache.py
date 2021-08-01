import requests

def check_all_data_in_cache(cache, key, url):
    cached_data = cache.get(key) 

    if not cached_data:
        new_data = requests.get(url)
        cache.set(key, new_data.text)
        return new_data.text
    return cached_data
