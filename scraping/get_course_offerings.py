# This script is not used by the web app. It was used to collect the data
# in the /data folder. It is provided here in case somebody wants to 
# scrape OSU course offering data.

import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import re
import csv

osu_term_codes = {"su": "00", "fa": "01", "wi": "02", "sp": "03"}
osu_type_codes = {"lec": "A", "rec": "C", "lab": "D"}

course_regex = '[A-Z]{1,4} \d{2,3}'
time_regex = '[M,T,W,R,F,S,U]{1,7} \d{1,4}-\d{1,4}[a,p]{1}'

def get_course_offerings_by_term(term, year, type):
    """
    Gets the course offerings for a given term.
    term: Either 'fa', 'wi', 'sp', or 'su' (fall, winter, spring, or summer)
    year: The year to get as a string
    type: Either 'lec', 'rec', or 'lab' (Lecture, Recitation, or Labaratory)
    """

    if term not in ['fa', 'wi', 'sp', 'su']:
        return None

    if type not in ['lec', 'rec', 'lab']:
        return None
        
    courses_map = {}

    # Convert the term & year to the OSU scheduler's format
    formatted_term = year + osu_term_codes[term]

    url = "https://classes.oregonstate.edu/?srcdb=" + formatted_term + "&camp=C" + "&schd=" + osu_type_codes[type]
    driver = webdriver.Chrome('chromedriver.exe')
    driver.get(url)
    time.sleep(3) # Wait until the page fully loads

    # Add a space to the type so the CSV is properly formatted
    if type == 'lec':
        type = ' lecture'
    elif type == 'rec':
        type = ' recitation'
    elif type == 'lab':
        type = ' lab'

    courses = driver.find_elements(By.CLASS_NAME, "panel__body")
    for i in courses: # Sometimes multiple elements have this class, so this finds the correct one
        if "Meets" in i.text:
            meeting_times = i.text
    
    meeting_times = meeting_times.split("Instructor:")

    prev_course = None

    for i in range(1, len(meeting_times)):
        course = meeting_times[i].split('\n')
        for token in course:
            if not (token.startswith('MW ') or token.startswith('WF ') or
                    token.startswith('M ') or token.startswith('T ') or token.startswith('W') or
                    token.startswith('F ') or token.startswith('R ') or token.startswith('Meets')
                    and 'TR' not in str(token) and 'MW' not in str(token) and '.' not in str(token)
                    and not (str(token).startswith('TR')) and not (str(token).startswith('THE'))
                    ):

                course_code = re.findall(course_regex, str(token))
                if course_code and str('THE') not in str(course_code[0]) and (not (str(course_code[0]).startswith('TR'))):
                    prev_course = course_code[0]
            if prev_course and re.findall(time_regex, str(token.replace(':', ''))):
                if (prev_course + type) in courses_map:
                    courses_map[prev_course + type].append(token)
                else:
                    courses_map[prev_course + type] = [token]
    return courses_map

def csv_from_dict(dict, path_to_csv):
    with open(path_to_csv, 'a') as csv_file:  
        writer = csv.writer(csv_file)
        for key, value in dict.items():
            writer.writerow([key, value])


def generate_csv_by_term(term, year):
    shortened_year = year[-2:]
    csv_from_dict(get_course_offerings_by_term(term, year, 'lec'), '../data/{}{}_data.csv'.format(term, shortened_year))
    csv_from_dict(get_course_offerings_by_term(term, year, 'rec'), '../data/{}{}_data.csv'.format(term, shortened_year))
    csv_from_dict(get_course_offerings_by_term(term, year, 'lab'), '../data/{}{}_data.csv'.format(term, shortened_year))

# Ex: generate winter 2023 data file
generate_csv_by_term('wi', '2023')
