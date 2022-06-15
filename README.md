# Beaver Builder
Web app that builds schedules based on user inputted classes.

Avaliable at [osuschedules.com.](http://www.osuschedules.com/)

# How does it work?
All the data in the `data` folder was scraped from the OSU Scheduler using Selenium.
The schedule builder works in the following way:
Given a list of classes a user wants to take, create a 2D array of course listing, where each index is an array of all times a course is offered. Compute the [cartesian product](https://en.wikipedia.org/wiki/Cartesian_product) of this 2D array, then for each generated subset, create a 2D array of course listings where each index corresponds to a different day of the week. Sort this 2D array, then loop through it and assert that each index is less than the one before it. If this holds true for the entire array, we have a valid schedule.
