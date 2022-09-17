// Creates a dropdown HTML datalist from the provided
// array of courses using native JS methods.
function create_courses_datalist(courses_array) {
    var datalist = document.getElementById('courses')

    courses_array.forEach(function(item) {
        var option = document.createElement('option')
        option.value = item
        datalist.appendChild(option)
    })
}

window.onload = function() {
    // When the user adds a new class, send it to the backend
    document.querySelector('input').onchange = function() {
        var datalist = document.getElementById('courses').childNodes
        for (var i = 0; i < datalist.length; i++) {
            if (datalist[i].value == this.value) {
                $.post("/addcourse", {
                    course: this.value
                })
                // Display the new class that the user has added on the page
                var new_div = document.createElement('div')
                new_div.classList.add('classes-info')
                new_div.textContent = (" " + this.value)
                new_div.addEventListener('click', function() {
                    $.post("/removecourse", {
                        course: this.textContent
                    })
                    this.remove()
                })
                var div_container = document.getElementsByClassName('classes-container')[0]
                div_container.appendChild(new_div)
            }
        }
    }

    // Attach event listeners to generate and clear buttons,
    // making appropriate requests to the backend.
    generate_button = document.getElementById('generate-button')
    generate_button.addEventListener('click', function() {
        response = $.post('/generate', {
            term: document.getElementById('term-selection').value
        })
        alert(response.responseText)
    })

    clear_button = document.getElementById('clear-button')
    clear_button.addEventListener('click', function() {
        $.post("/clear")
        var courses_picked = document.querySelectorAll(".classes-info")
        courses_picked.forEach(course => {
            course.remove()
        })
    })

    select_term_dropdown = document.getElementById('term-selection')
    select_term_dropdown.addEventListener('change', function() {
        $.post("/clear")
        $.ajaxSetup({async: false})
        var courses_array = $.post("/offerings", {
            term: this.value
        })
        create_courses_datalist(courses_array.responseJSON)
    })
}
