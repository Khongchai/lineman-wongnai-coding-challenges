from flask import Flask, request
import requests
import json
from flask_caching import Cache
from .utils.match_keyword_to_data import match_keyword_to_data
from .utils.check_data_in_cache import check_all_data_in_cache
from flask_cors import CORS

config = {
    "DEBUG": True,          # some Flask specific configs
    "CACHE_TYPE": "SimpleCache",  # Flask-Caching related configs
    "CACHE_DEFAULT_TIMEOUT": 60 * 1.5
}
app = Flask(__name__)
# tell Flask to use the above defined config
app.config.from_mapping(config)
cache = Cache(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


#query all results
@app.route("/")
def get_all_data():
    data = check_all_data_in_cache(cache, "all_data_text", "http://localhost:9000/trips")
    return f"<pre>{data}</pre>"

@app.route("/api/trips")
def queried_data():
    #before moving on, check against cache first if key exist 
    keyword = request.args.get("keyword")
    cached_entity = cache.get(keyword)
    if cached_entity: return json.dumps(cached_entity, indent=4,  ensure_ascii=False)

    #else begin looking up for the cached all_data then search from the returned list of objs
    data = check_all_data_in_cache(cache, "all_data_text", "http://localhost:9000/trips")
    if data and keyword:
        objs = json.loads(data)
        matched_objs = match_keyword_to_data(objs, keyword, cache)
        return json.dumps(matched_objs, indent=4,  ensure_ascii=False)

    #no keyword = return everything
    if data and not keyword:
        return data
        
    return "no data"


