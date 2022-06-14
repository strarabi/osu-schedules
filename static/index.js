var all_courses = ['AED553 lecture','AED555 lecture ','AED557 lecture ','LEAD443 lecture','ANS121 lecture ','ANS220 lecture ','ANS311 lecture ','ANS341 lecture ','ANS378 lecture ','ANS420 lecture ','ANS435 lecture ','RNG121 lecture','RNG341 lecture','RNG355 lecture','AEC121 lecture','AEC251 lecture','AEC352 lecture','AEC465 lecture','AEC512 lecture','AEC525 lecture','BRR100 lecture','BOT220 lecture','BOT350 lecture','BOT461 lecture','BOT550 lecture','CROP200 lecture','CROP300 lecture','SOIL205 lecture','SOIL316 lecture','SUS102 lecture','SUS304 lecture','SUS350 lecture','TOX530 lecture','FW255 lecture','FW312 lecture','FW315 lecture','FW316 lecture','FW350 lecture','FW454 lecture','FW464 lecture','FW599 lecture','FST101 lecture','FST422 lecture','FST460 lecture','FST522 lecture','HORT112 lecture','HORT226 lecture','HORT251 lecture','HORT300 lecture','HORT301 lecture','HORT314 lecture','HORT452 lecture','HORT463 lecture','ACTG317 lecture','ACTG417 lecture','ACTG420 lecture','BA160 lecture','BA211 lecture','BA213 lecture','BA223 lecture','BA230 lecture','BA240 lecture','BA260 lecture','BA270 lecture','BA272 lecture','BA275 lecture','BA280 lecture','BA281 lecture','BA315 lecture','BA347 lecture','BA351 lecture','BA352 lecture','BA354 lecture','BA357 lecture','BA370 lecture','BA375 lecture','BA381 lecture','BA390 lecture','BA460 lecture','BA466 lecture','BA540 lecture','BA550 lecture','BA555 lecture','BA569 lecture','BA590 lecture','DSGN226 lecture','DSGN255 lecture','DSGN330 lecture','DSGN341 lecture','DSGN427 lecture','DSGN464 lecture','MGMT364 lecture','MGMT453 lecture','MRKT396 lecture','MRKT489 lecture','MRKT495 lecture','ED219 lecture','ED483 lecture','FES240 lecture','FES241 lecture','FES341 lecture','FES445 lecture','NR201 lecture','NR202 lecture','TRAL251 lecture','TRAL353 lecture','TRAL357 lecture','FE208 lecture','FE370 lecture','FE434 lecture','FE457 lecture','FE460 lecture','FOR111 lecture','FOR321 lecture','FOR413 lecture','FOR436 lecture','FOR457 lecture','WSE320 lecture','WSE321 lecture','PHAR210 lecture','PHAR720 lecture','PHAR729 lecture','PHAR735 lecture','PHAR738 lecture','PHAR740 lecture','PHAR752 lecture','PHAR761 lecture','ART100 lecture','ART204 lecture','ART320 lecture','ART367 lecture','ART462 lecture','COMM111 lecture','COMM114 lecture','COMM218 lecture','COMM312 lecture','COMM320 lecture','COMM321 lecture','COMM326 lecture','COMM372 lecture','COMM399 lecture','COMM414 lecture','COMM440 lecture','COMM540 lecture','MUS111 lecture','MUS121 lecture','MUS221 lecture','MUS315 lecture','MUS324 lecture','MUS399 lecture','NMC100 lecture','NMC101 lecture','NMC255 lecture','NMC301 lecture','NMC322 lecture','NMC330 lecture','NMC421 lecture','TA147 lecture','TA242 lecture','TA244 lecture','TA247 lecture','TA330 lecture','TA351 lecture','HST101 lecture','HST102 lecture','HST104 lecture','HST105 lecture','HST106 lecture','HST201 lecture','HST202 lecture','HST203 lecture','HST310 lecture','HST317 lecture','HST340 lecture','HST387 lecture','HST391 lecture','PHL121 lecture','PHL150 lecture','PHL160 lecture','PHL205 lecture','PHL208 lecture','PHL316 lecture','PHL443 lecture','PHL444 lecture','PHL543 lecture','REL160 lecture','REL208 lecture','REL443 lecture','ANTH101 lecture','ANTH230 lecture','ANTH332 lecture','ANTH345 lecture','ANTH370 lecture','ANTH383 lecture','CSSA548 lecture','CSSA574 lecture','ES101 lecture','ES223 lecture','ES241 lecture','ES260 lecture','FR111 lecture','FR211 lecture','FR311 lecture','GER111 lecture','JPN111 lecture','JPN211 lecture','JPN311 lecture','QS262 lecture','SPAN111 lecture','SPAN211 lecture','SPAN311 lecture','SPAN314 lecture','SPAN317 lecture','SPAN331 lecture','SPAN336 lecture','WGSS223 lecture','WGSS262 lecture','WGSS280 lecture','WGSS325 lecture','WGSS340 lecture','WGSS360 lecture','WGSS414 lecture','WLC335 lecture','PSY201 lecture','PSY202 lecture','PSY301 lecture','PSY340 lecture','PSY350 lecture','PSY360 lecture','PSY370 lecture','PSY381 lecture','PSY426 lecture','PSY456 lecture','PSY460 lecture','PSY480 lecture','PSY482 lecture','PSY485 lecture','PSY499 lecture','ECON201 lecture','ECON202 lecture','ECON311 lecture','ECON315 lecture','ECON330 lecture','ECON352 lecture','ECON411 lecture','ECON423 lecture','ECON424 lecture','ECON435 lecture','ECON439 lecture','ECON517 lecture','PPOL521 lecture','PPOL523 lecture','PPOL622 lecture','PS201 lecture','PS204 lecture','PS205 lecture','PS300 lecture','PS313 lecture','PS345 lecture','PS348 lecture','SOC204 lecture','SOC206 lecture','SOC315 lecture','SOC437 lecture','SOC441 lecture','ENG104 lecture','ENG106 lecture','ENG204 lecture','WR121 lecture','WR201 lecture','WR214 lecture','WR222 lecture','WR224 lecture','WR240 lecture','WR241 lecture','WR327 lecture','BB314 lecture','BB317 lecture','BB332 lecture','BB450 lecture','BB481 lecture','BB490 lecture','BB493 lecture','BOT325 lecture','CH121 lecture','CH201 lecture','CH331 lecture','CH334 lecture','CH361 lecture','CH411 lecture','CH421 lecture','CH440 lecture','CH461 lecture','CH511 lecture','CH535 lecture','CH616 lecture','CH630 lecture','BI101 lecture','BI231 lecture','BI311 lecture','BI319 lecture','BI331 lecture','BI370 lecture','BI445 lecture','Z349 lecture','Z371 lecture','Z422 lecture','Z423 lecture','Z425 lecture','MTH103 lecture','MTH111 lecture','MTH112 lecture','MTH211 lecture','MTH228 lecture','MTH231 lecture','MTH241 lecture','MTH251 lecture','MTH252 lecture','MTH254 lecture','MTH255 lecture','MTH256 lecture','MTH306 lecture','MTH311 lecture','MTH341 lecture','MTH342 lecture','MTH343 lecture','MTH351 lecture','MTH361 lecture','MTH427 lecture','MTH440 lecture','MTH451 lecture','MTH463 lecture','MTH481 lecture','MTH511 lecture','MTH543 lecture','MTH551 lecture','MTH581 lecture','MTH654 lecture','MB230 lecture','MB302 lecture','MB416 lecture','PH104 lecture','PH201 lecture','PH211 lecture','PH212 lecture','PH213 lecture','PH313 lecture','PH423 lecture','PH431 lecture','PH562 lecture','PH651 lecture','ST201 lecture','ST314 lecture','ST351 lecture','ST352 lecture','ST411 lecture','ST421 lecture','ST511 lecture','ST521 lecture','ST531 lecture','ST541 lecture','ST551 lecture','ST561 lecture','ST623 lecture','GRAD560 lecture','ALS140 lecture','ALS141 lecture','ALS150 lecture','ALS151 lecture','ALS162 lecture','ALS165 lecture','ALS166 lecture','ALS174 lecture','GEO101 lecture','GEO201 lecture','GEO295 lecture','GEO307 lecture','GEO308 lecture','GEO310 lecture','GEO322 lecture','GEO481 lecture','GEO487 lecture','GEOG100 lecture','GEOG105 lecture','GEOG201 lecture','GEOG323 lecture','GEOG340 lecture','GEOG360 lecture','GEOG560 lecture','GEOG580 lecture','ATS201 lecture','ATS301 lecture','ATS310 lecture','OC201 lecture','OC430 lecture','OC434 lecture','OC512 lecture','OEAS540 lecture','BEE311 lecture','BEE512 lecture','BEE542 lecture','ENGR201 lecture','ENGR203 lecture','ENGR211 lecture','ENGR212 lecture','ENGR213 lecture','ENGR248 lecture','ENGR390 lecture','BIOE491 lecture','CBEE211 lecture','CBEE320 lecture','CBEE414 lecture','CHE311 lecture','CHE320 lecture','CHE331 lecture','CHE411 lecture','CHE443 lecture','CHE445 lecture','CHE525 lecture','CHE599 lecture','ENVE421 lecture','ENVE532 lecture','ENVE536 lecture','CCE321 lecture','CE311 lecture','CE361 lecture','CE373 lecture','CE381 lecture','CE383 lecture','CE412 lecture','CE420 lecture','CE481 lecture','CE491 lecture','CE520 lecture','CE531 lecture','CE590 lecture','CE630 lecture','CE640 lecture','CEM383 lecture','CEM431 lecture','CEM471 lecture','CS101 lecture','CS162 lecture','CS261 lecture','CS290 lecture','CS321 lecture','CS325 lecture','CS340 lecture','CS344 lecture','CS361 lecture','CS370 lecture','CS372 lecture','CS391 lecture','CS444 lecture','CS450 lecture','CS468 lecture','CS472 lecture','CS491 lecture','CS550 lecture','CS568 lecture','CS578 lecture','ECE271 lecture','ECE322 lecture','ECE351 lecture','ECE372 lecture','ECE375 lecture','ECE390 lecture','ECE416 lecture','ECE422 lecture','ECE433 lecture','ECE451 lecture','ECE461 lecture','ECE468 lecture','ECE472 lecture','ECE473 lecture','ECE499 lecture','ECE516 lecture','ECE522 lecture','ECE530 lecture','ECE561 lecture','ECE565 lecture','ECE580 lecture','ECE614 lecture','IE355 lecture','IE367 lecture','IE412 lecture','IE425 lecture','IE475 lecture','IE512 lecture','IE521 lecture','MATS321 lecture','MATS322 lecture','MATS570 lecture','MATS581 lecture','ME311 lecture','ME316 lecture','ME317 lecture','ME332 lecture','ME373 lecture','ME382 lecture','ME383 lecture','ME430 lecture','ME460 lecture','ME461 lecture','ME480 lecture','ME484 lecture','ME526 lecture','ME560 lecture','ME580 lecture','MFGE436 lecture','MFGE535 lecture','MFGE536 lecture','ROB456 lecture','ROB514 lecture','ROB538 lecture','NSE234 lecture','NSE311 lecture','NSE415 lecture','NSE451 lecture','NSE455 lecture','NSE467 lecture','NSE481 lecture','NSE531 lecture','VMB674 lecture','VMB711 lecture','VMB714 lecture','VMB717 lecture','VMB750 lecture','VMB753 lecture','VMB759 lecture','VMB760 lecture','VMB761 lecture','VMC770 lecture','VMC776 lecture','VMC783 lecture','VMC785 lecture','AS111 lecture','AS211 lecture','AS311 lecture','AS411 lecture','MS111 lecture','NS111 lecture','NS211 lecture','HHS231 lecture','KIN132 lecture','KIN311 lecture','KIN321 lecture','KIN324 lecture','KIN325 lecture','KIN370 lecture','KIN394 lecture','KIN395 lecture','KIN422 lecture','KIN423 lecture','KIN425 lecture','KIN432 lecture','KIN434 lecture','KIN483 lecture','KIN586 lecture','NUTR235 lecture','NUTR240 lecture','NUTR417 lecture','NUTR430 lecture','H220 lecture','H225 lecture','H312 lecture','H320 lecture','H344 lecture','H457 lecture','H476 lecture','H560 lecture','H562 lecture','H576 lecture','H581 lecture','HDFS240 lecture','HDFS311 lecture','HDFS312 lecture','HDFS313 lecture','HDFS314 lecture','HDFS431 lecture','HDFS447 lecture','KIN481 lecture','BA160H lecture','BA211H lecture','CH231H lecture','CH361H lecture','ENGR211H lecture','HC299 lecture','MTH251H lecture','MTH252H lecture','MTH254H lecture','CBEE211H lecture','ME382H lecture','WR121H lecture','BOT550 recitation','CROP300 recitation','FST522 recitation','HORT300 recitation','BA101 recitation','BA160 recitation','FES241 recitation','COMM111 recitation','COMM114 recitation','ANTH101 recitation','JPN111 recitation','JPN211 recitation','BB314 recitation','BB450 recitation','CH121 recitation','CH233 recitation','CH331 recitation','BI241 recitation','BI311 recitation','MTH111 recitation','MTH112 recitation','MTH228 recitation','MTH231 recitation','MTH241 recitation','MTH251 recitation','MTH252 recitation','MTH254 recitation','MTH255 recitation','MTH256 recitation','MTH306 recitation','MTH311 recitation','MTH342 recitation','MTH343 recitation','PH201 recitation','ST201 recitation','ST421 recitation','ST521 recitation','ST561 recitation','GEOG100 recitation','GEOG105 recitation','ENGR211 recitation','CBEE211 recitation','CBEE320 recitation','CHE320 recitation','CHE411 recitation','CHE445 recitation','CE311 recitation','CE373 recitation','CE381 recitation','CE491 recitation','CEM383 recitation','CS261 recitation','CS444 recitation','BA160H recitation','CH231H recitation','ENGR211H recitation','CBEE211H recitation','ANS121 lab','ANS220 lab','ANS445 lab','RNG121 lab','RNG355 lab','AEC465 lab','BOT220 lab','BOT350 lab','BOT461 lab','BOT550 lab','SOIL206 lab','SOIL316 lab','SUS102 lab','SUS103 lab','FW255 lab','FW312 lab','FW316 lab','FW454 lab','FW599 lab','FST422 lab','FST522 lab','HORT112 lab','HORT251 lab','HORT314 lab','HORT452 lab','FES240 lab','FES241 lab','FE208 lab','FE370 lab','FE434 lab','FE457 lab','FOR111 lab','FOR321 lab','FOR413 lab','FOR436 lab','FOR457 lab','WSE320 lab','WSE321 lab','PHAR720 lab','PHAR740 lab','ART340 lab','TA244 lab','PPOL622 lab','BB493 lab','CH261 lab','CH263 lab','CH271 lab','CH324 lab','CH337 lab','CH361 lab','CH461 lab','BI101 lab','BI241 lab','BI341 lab','Z372 lab','Z422 lab','Z425 lab','MB230 lab','MB303 lab','MB417 lab','PH104 lab','PH201 lab','PH211 lab','PH212 lab','PH213 lab','PH411 lab','ST351 lab','ST352 lab','ST411 lab','ST511 lab','ST541 lab','ST551 lab','GEO101 lab','GEO201 lab','GEO310 lab','GEO322 lab','GEO481 lab','GEO487 lab','GEOG201 lab','GEOG323 lab','GEOG360 lab','GEOG560 lab','GEOG580 lab','ATS201 lab','ATS301 lab','ATS310 lab','OC201 lab','OC430 lab','OEAS540 lab','ENGR201 lab','ENGR248 lab','CBEE414 lab','CHE445 lab','ENVE421 lab','ENVE536 lab','CCE321 lab','CE361 lab','CE383 lab','CE566 lab','CEM342 lab','CEM343 lab','CS162 lab','ECE272 lab','ECE375 lab','ECE473 lab','IE355 lab','IE412 lab','IE512 lab','MATS322 lab','ME382 lab','ME383 lab','MFGE436 lab','MFGE536 lab','VMB711 lab','VMB714 lab','VMB750 lab','VMB759 lab','VMB760 lab','VMC773 lab','VMC783 lab','VMC785 lab','MS111 lab','KIN325 lab','KIN394 lab','KIN395 lab','KIN423 lab','KIN425 lab','KIN444 lab','KIN586 lab','NUTR235 lab','NUTR430 lab','H581 lab','CH361H lab','ME382H lab'];

// Creates a dropdown HTML datalist from the provided
// all_courses list using native JS methods.
function create_courses_datalist() {
    var datalist = document.getElementById('courses')

    all_courses.forEach(function(item) {
        var option = document.createElement('option')
        option.value = item
        datalist.appendChild(option)
    })
}

window.onload = function() {
    create_courses_datalist()
    // When the user adds a new class, send it to the backend
    document.querySelector('input').oninput = function() {
        if (all_courses.includes(this.value)) {
            $.post("/postmethod", {
                javascript_data: this.value
            })
            // Display the new class that the user has added on the page
            var new_div = document.createElement('div')
            new_div.classList.add('classes-info')
            new_div.textContent = (" " + this.value)
            new_div.addEventListener('click', function() {
                console.log("Clicked") // TODO: remove from DOM, remove from backend curr_classes
            })
            var div_container = document.getElementsByClassName('classes-container')[0]
            div_container.appendChild(new_div)
        }
    }
    // Attach event listeners to generate and clear buttons,
    // making appropriate requests to the backend.
    generate_button = document.getElementById('generate-button')
    generate_button.addEventListener('click', function() {
        $.post("/generate")
    })

    clear_button = document.getElementById('clear-button')
    clear_button.addEventListener('click', function() {
        $.post("/clear")
        var courses_picked = document.querySelectorAll(".classes-info")
        courses_picked.forEach(course => {
            course.remove()
        })
    })
}