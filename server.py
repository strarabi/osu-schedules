import csv
from flask import Flask, redirect, render_template, request
from schedule_tools import is_valid_schedule
import itertools
import numpy as np
import json

app = Flask(__name__)

csv_dict = {}


with open('./data/fa22/fa22_data.csv', mode='r') as inp:
    reader = csv.reader(inp)
    csv_dict = {rows[0]:rows[1] for rows in reader}

curr_classes = []

all_times = []

@app.route("/")
@app.route("/main")
def index():
    global all_times, curr_classes
    all_times = []
    curr_classes = []

    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route('/postmethod', methods=['POST'])
def get_ajax_data():
    js_data = request.form['javascript_data']
    curr_classes.append(js_data)
    return render_template('index.html')

@app.route("/generate", methods=['POST'])
def generate_schedule():
    all_courses_list = []
    for course in curr_classes:
        all_courses_list.append((csv_dict[course.rstrip()]).replace("'", "").strip('][').split(', '))
    
    all_combinations = list(itertools.product(*all_courses_list))


    for combination in all_combinations:
        if is_valid_schedule(combination):
            pass
        else:
            pass

    return render_template('index.html')

@app.route("/clear", methods=['POST'])
def clear_schedule():
    global all_times, curr_classes
    all_times = []
    curr_classes = []
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)