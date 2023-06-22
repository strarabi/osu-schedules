from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import pymongo
import re

mongo_client = pymongo.MongoClient("mongodb://localhost:27017/")
db = mongo_client["osu-schedules"]
col = db["courses"]

browser = webdriver.Chrome()


def get_all_courses(output_path: str = "allcourses.txt") -> None:
    """
    Creates line-break delimited text file of all courses offered at OSU.

    Parameters:
        output_path: string path to text file to output course list to
    """
    all_courses = []
    base_url = "https://catalog.oregonstate.edu/courses/"
    subjects = open('course_subjects.txt').read().splitlines()

    for subject in subjects:
        browser.get(f"{base_url}{subject.lower()}/")
        div = browser.find_elements(By.CLASS_NAME, "courseblocktitle")
        course_title_regex = subject + ' \d{3}'
        for course in div:
            match = re.match(course_title_regex, course.text)
            if match:
                match = match.group(0)
                match = match.replace("[", "").replace("]", "").replace("'", "") # remove OSU formatting
                all_courses.append(match)

    with open(output_path, 'w') as file:
        for course in all_courses:
            file.write(f"{course}\n")


def get_course_times(course_name: str, term: str, schedule_type: str) -> list:
    """
    Given a course name, term, and schedule type, this function
    returns the dates and times the course is offered.

    Parameters:
        course_name: OSU course name, e.g CS 162

        term: OSU term code -- year followed by 00 for summer,
        01 for fall, 02 for winter, or 03 for spring, e.g winter 2022 is 202202

        schedule_type: OSU schedule type - A is lecture, C is recitation, D is lab

    Returns:
        List of dates and times the course is offered - e.g ['MWF 10-10:50a', 'TR 10-10:50a']
    """
    url = f"https://classes.oregonstate.edu/?keyword={course_name}&srcdb={term}&camp=C&schd={schedule_type}"
    browser.get(url)
    time.sleep(0.6)  # wait for page to load
    div = browser.find_elements(By.CLASS_NAME, "result")

    course_times = []
    for course in div:
        if 'Meets' not in course.text:
            continue
        split_course = course.text.split('\n')
        course_time_idx = split_course.index("Meets:") + 1
        course_time = split_course[course_time_idx]
        course_times.append(course_time)
        course_times = [item for item in course_times if item != "Instructor:"]

    return course_times


def populate_db() -> None:
    """
    Populates MongoDB database with course offerings.
    """
    all_courses = open('allcourses.txt').read().splitlines()  # get list of courses offered at OSU
    for term in ["202400", "202401", "202402"]:
        for schedule_type in ["A", "C", "D"]:
            for course_name in all_courses:
                times_offered = get_course_times(course_name, term, schedule_type)
                if not times_offered:
                    continue  # no need to log a course that doesn't exist
                datapoint = {'course_name': course_name,
                             'term': term, 'schedule_type': schedule_type,
                             'times_offered': times_offered}
                col.insert_one(datapoint)
