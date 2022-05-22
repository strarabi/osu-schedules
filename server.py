import csv
from flask import Flask, render_template
app = Flask(__name__)

curr_classes = []

@app.route("/")
@app.route("/main")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

app.run()