# Given a 2D array of a schedule where each index represents
# an offering for a particular course, return a valid schedule
# if one can be built, otherwise return False.
# Ex [[days t1-t2], [days t3-t4]]

def is_valid_schedule(schedule):
    print(schedule)
    monday_courses = []
    tuesday_courses = []
    wednesday_courses = []
    thursday_courses = []
    friday_courses = []
    saturday_courses = []
    sunday_courses = []

    for course in schedule:
        split_course = course.split(" ")
        days_of_week = split_course[0]
        time_range = split_course[1].split('-')
        add = 12 if ('p' in time_range[1]) else 0

        time_range[1] = time_range[1].replace('a', "").replace('p', "")
        time_range = [time_to_minutes(time_range[0], add), time_to_minutes(time_range[1], add)]

        for day in days_of_week:
            if day == 'M':
                monday_courses.append(time_range)
            elif day == 'T':
                tuesday_courses.append(time_range)
            elif day == 'W':
                wednesday_courses.append(time_range)
            elif day == 'R':
                thursday_courses.append(time_range)
            elif day == 'F':
                friday_courses.append(time_range)
            elif day == 'S':
                saturday_courses.append(time_range)
            elif day == 'U':
                sunday_courses.append(time_range)

        week_schedule = [monday_courses, tuesday_courses, wednesday_courses, 
        thursday_courses, friday_courses, saturday_courses, sunday_courses]

    print(week_schedule)

def time_to_minutes(time, pm): # time e.g 10 or 10:50, pm True or False
    try:
        time = int(time)
    except:
        pass
    if isinstance(time, int):
        if pm:
            return (int(time)+12)*60
        else:
            return int(time)*60
    elif ':' in time:
        time = time.split(":")
        if pm:
            return (int(time[0])+12)*60 + int(time[1])
        else:
            return (int(time[0]))*60 + int(time[1])