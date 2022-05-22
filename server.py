import csv
from flask import Flask, render_template
app = Flask(__name__)

dict_out = {}

with open('fa22_data.csv', mode='r') as inp:
    reader = csv.reader(inp)
    dict_out = {rows[0]:rows[1] for rows in reader}

@app.route("/")
@app.route("/main")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

app.run()