from flask import jsonify
from app import app

@app.route("/hello")
def hello():
    return jsonify("Returned from Shutterfly Demo API")