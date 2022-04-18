from app import app
from flask import Flask, render_template, request, flash
from flask_sqlalchemy import SQLAlchemy
from os import environ

app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://shutterflydemo:password123@localhost/shutterfly_demo"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True if environ.get(
    'ENVIRONMENT') == 'prod' else False

db = SQLAlchemy(app)
