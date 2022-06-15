import csv
from flask import Flask, render_template, request
from schedule_tools import is_valid_schedule
import itertools
import numpy as np
import json

app = Flask(__name__)

csv_dict = {}

# Read CSV data and create dict
with open('./data/fa22/fa22_data.csv', mode='r') as inp:
    reader = csv.reader(inp)
    csv_dict = {rows[0]:rows[1] for rows in reader}

curr_classes = []

# Main route for the app, this displays the page where a user
# can build a schedule.
@app.route("/")
@app.route("/main")
def index():
    global curr_classes
    curr_classes = []

    return render_template("index.html")

# Redirects the user to the about page.
@app.route("/about")
def about():
    return render_template("about.html")

# This post method is sent from the browser when
# a user adds a course, and it appends this course
# to curr_classes.
@app.route('/addcourse', methods=['POST'])
def get_ajax_data():
    course = request.form['course']
    curr_classes.append(course)
    return render_template('index.html')

# This post request is fired when the user clicks the 
# Generate Schedule button. It uses the cartesian product
# to find all possible schedule combinations, then uses the
# is_valid_schedule() function to find a valid one.
@app.route("/generate", methods=['GET'])
def generate_schedule():
    all_courses_list = []
    for course in curr_classes:
        all_courses_list.append((csv_dict[course.rstrip()]).replace("'", "").strip('][').split(', '))
    
    all_combinations = list(itertools.product(*all_courses_list))

    for combination in all_combinations:
        if is_valid_schedule(combination):
            schedule_str = ""
            for i in range(0, len(combination)):
                schedule_str += (curr_classes[i] + " at " + combination[i] + '\n')
            print(schedule_str.rstrip())
            return schedule_str.rstrip()
    return "Could not generate a schedule from the selected courses."

# Clears the curr_classes list.
@app.route("/clear", methods=['POST'])
def clear_schedule():
    global curr_classes
    curr_classes = []
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)