# Given a 2D array of a schedule where each index represents
# an offering for a particular course, return a valid schedule
# if one can be built, otherwise return False.
# Ex [[days t1-t2], [days t3-t4]]

def is_valid_schedule(schedule):
    # These lists represent the schedule of courses for each day
    monday_courses = []
    tuesday_courses = []
    wednesday_courses = []
    thursday_courses = []
    friday_courses = []
    saturday_courses = []
    sunday_courses = []

    for course in schedule:
        # Parse the strings and turn them into minute ranges
        split_course = course.split(" ")
        days_of_week = split_course[0]
        time_range = split_course[1].split('-')
        add = 12 if ('p' in time_range[1]) else 0

        time_range[1] = time_range[1].replace('a', "").replace('p', "")
        time_range = [time_to_minutes(time_range[0], add), time_to_minutes(time_range[1], add)]

        # Append minute ranges to daily schedules
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

    # Create 2D array where each index is an array of minute ranges for a particular day.
    week_schedule = [monday_courses, tuesday_courses, wednesday_courses, 
    thursday_courses, friday_courses, saturday_courses, sunday_courses]

    for day in week_schedule:
        day.sort()

    # In a valid schedule, it should hold that day[i] < day[i+1]
    # in all cases, since we cannot be in two classes at once.
    # Thus, if for any day day[i] >= day[i+1], we can remove this combination.
    for day in week_schedule:
        for i in range(0, len(day)-1):
            if day[i] >= day[i+1]:
                return False

    return week_schedule

# Simple helper function for turning OSU time ranges into minute ranges.
# Ex. 10-10:50a becomes 600-650.
def time_to_minutes(time, pm):
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