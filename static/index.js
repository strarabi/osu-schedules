var all_courses = ['AED 553','AED 555','AED 557','AG 111','AG 199','AG 301','AG 391','AG 421','AG 435','AG 499','LEAD 342','LEAD 443','ANS 121','ANS 220','ANS 311','ANS 315','ANS 327','ANS 341','ANS 378','ANS 380','ANS 420','ANS 434','ANS 435','ANS 439','ANS 445','ANS 599','RNG 121','RNG 341','RNG 353','RNG 355','RNG 421','AEC 121','AEC 250','AEC 251','AEC 351','AEC 352','AEC 388','AEC 460','AEC 465','AEC 512','AEC 525','BRR 100','BOT 220','BOT 324','BOT 341','BOT 350','BOT 461','BOT 550','CROP 200','CROP 300','CROP 310','CROP 330','CROP 440','CROP 460','CSS 205','CSS 305','CSS 306','SOIL 205','SOIL 206','SOIL 316','SOIL 388','SOIL 395','SOIL 466','SUS 102','SUS 103','SUS 304','SUS 350','SUS 420','ENT 300','ENT 311','ENT 322','ENT 331','TOX 360','TOX 530','FW 251','FW 255','FW 289','FW 302','FW 303','FW 311','FW 312','FW 315','FW 316','FW 317','FW 320','FW 321','FW 323','FW 325','FW 328','FW 340','FW 341','FW 350','FW 360','FW 370','FW 426','FW 435','FW 439','FW 451','FW 452','FW 454','FW 458','FW 464','FW 475','FW 479','FW 488','FW 497','FW 523','FW 551','FW 558','FW 575','FW 579','FW 583','FW 597','FW 599','FW 620','FST 101','FST 251','FST 385','FST 407','FST 422','FST 460','FST 499','FST 522','HORT 112','HORT 217','HORT 226','HORT 251','HORT 300','HORT 301','HORT 314','HORT 316','HORT 318','HORT 330','HORT 331','HORT 350','HORT 380','HORT 410','HORT 452','HORT 463','ACTG 317','ACTG 378','ACTG 417','ACTG 420','ACTG 424','BA 101','BA 140','BA 160','BA 211','BA 213','BA 223','BA 230','BA 240','BA 253','BA 260','BA 270','BA 272','BA 275','BA 280','BA 281','BA 282','BA 290','BA 311','BA 314','BA 315','BA 330','BA 333','BA 347','BA 351','BA 352','BA 354','BA 357','BA 360','BA 362','BA 365','BA 370','BA 375','BA 376','BA 381','BA 390','BA 405','BA 406','BA 407','BA 451','BA 460','BA 464','BA 466','BA 516','BA 528','BA 540','BA 550','BA 551','BA 555','BA 562','BA 569','BA 573','BA 590','DSGN 121','DSGN 226','DSGN 244','DSGN 255','DSGN 276','DSGN 281','DSGN 282','DSGN 287','DSGN 330','DSGN 333','DSGN 341','DSGN 427','DSGN 428','DSGN 464','DSGN 472','DSGN 475','FIN 340','FIN 342','FIN 441','FIN 443','FIN 444','FIN 445','FIN 499','HM 101','MGMT 364','MGMT 448','MGMT 453','MRKT 390','MRKT 396','MRKT 484','MRKT 486','MRKT 489','MRKT 492','MRKT 493','MRKT 495','AHE 553','AHE 611','AHE 643','COUN 441','COUN 533','COUN 550','COUN 562','COUN 662','ED 219','ED 253','ED 411','ED 420','ED 472','ED 476','ED 479','ED 483','ED 510','ED 520','ED 551','ED 566','ED 572','FES 240','FES 241','FES 341','FES 342','FES 350','FES 355','FES 430','FES 435','FES 444','FES 445','FES 452','FES 455','FES 555','NR 201','NR 202','NR 312','NR 455','SNR 511','SNR 521','SNR 540','TRAL 130','TRAL 251','TRAL 352','TRAL 353','TRAL 357','TRAL 375','TRAL 493','FE 208','FE 257','FE 370','FE 430','FE 434','FE 457','FE 460','FE 532','FOR 111','FOR 321','FOR 413','FOR 436','FOR 457','FOR 462','FOR 562','FOR 599','WSE 210','WSE 266','WSE 320','WSE 321','WSE 392','WSE 461','PHAR 210','PHAR 714','PHAR 720','PHAR 729','PHAR 735','PHAR 738','PHAR 740','PHAR 752','PHAR 761','PHAR 764','PHAR 770','AMS 311','EAH 411','ART 100','ART 101','ART 115','ART 117','ART 121','ART 131','ART 199','ART 204','ART 205','ART 234','ART 263','ART 264','ART 271','ART 281','ART 320','ART 322','ART 339','ART 340','ART 345','ART 347','ART 367','ART 379','ART 399','ART 432','ART 444','ART 462','ART 481','COMM 111','COMM 114','COMM 211','COMM 218','COMM 312','COMM 316','COMM 320','COMM 321','COMM 322','COMM 324','COMM 326','COMM 328','COMM 372','COMM 380','COMM 385','COMM 399','COMM 414','COMM 422','COMM 425','COMM 437','COMM 440','COMM 458','COMM 540','GD 200','GD 226','GD 326','GD 328','GD 424','GD 426','MUED 277','MUP 193','MUS 101','MUS 102','MUS 111','MUS 121','MUS 171','MUS 221','MUS 234','MUS 271','MUS 315','MUS 324','MUS 371','MUS 399','MUS 442','NMC 100','NMC 101','NMC 255','NMC 301','NMC 302','NMC 306','NMC 311','NMC 321','NMC 322','NMC 330','NMC 351','NMC 380','NMC 399','NMC 409','NMC 418','NMC 419','NMC 421','NMC 440','NMC 481','NMC 484','NMC 498','NMC 499','TA 147','TA 242','TA 244','TA 247','TA 330','TA 351','HST 101','HST 102','HST 103','HST 104','HST 105','HST 106','HST 201','HST 202','HST 203','HST 210','HST 310','HST 317','HST 318','HST 321','HST 322','HST 325','HST 328','HST 340','HST 348','HST 350','HST 362','HST 369','HST 387','HST 391','HST 399','HST 407','HST 416','HST 425','HST 470','HST 481','HSTS 417','HSTS 419','HSTS 451','PHL 121','PHL 150','PHL 160','PHL 201','PHL 205','PHL 207','PHL 208','PHL 210','PHL 251','PHL 301','PHL 316','PHL 407','PHL 443','PHL 444','PHL 543','REL 160','REL 208','REL 210','REL 378','REL 415','REL 443','ANTH 101','ANTH 110','ANTH 210','ANTH 230','ANTH 251','ANTH 261','ANTH 284','ANTH 311','ANTH 313','ANTH 330','ANTH 332','ANTH 345','ANTH 350','ANTH 352','ANTH 361','ANTH 370','ANTH 374','ANTH 380','ANTH 383','ANTH 433','ANTH 449','ANTH 475','ANTH 477','ANTH 478','ANTH 490','ASL 111','ASL 211','CHN 111','CHN 211','CHN 311','CSSA 548','CSSA 574','CSSA 599','ES 101','ES 223','ES 231','ES 241','ES 243','ES 260','ES 351','FCSJ 261','FCSJ 454','FR 111','FR 211','FR 311','FR 340','GER 111','GER 211','GER 311','GER 411','IT 111','IT 211','JPN 111','JPN 211','JPN 311','KOR 111','KOR 211','QS 262','SPAN 111','SPAN 112','SPAN 211','SPAN 311','SPAN 314','SPAN 317','SPAN 318','SPAN 327','SPAN 331','SPAN 336','SPAN 438','WGSS 223','WGSS 224','WGSS 230','WGSS 240','WGSS 262','WGSS 280','WGSS 325','WGSS 340','WGSS 360','WGSS 414','WGSS 440','WLC 231','WLC 320','WLC 331','WLC 335','PSY 201','PSY 202','PSY 301','PSY 330','PSY 340','PSY 350','PSY 360','PSY 370','PSY 381','PSY 399','PSY 426','PSY 433','PSY 437','PSY 440','PSY 442','PSY 444','PSY 456','PSY 460','PSY 468','PSY 480','PSY 482','PSY 485','PSY 493','PSY 496','PSY 499','PSY 561','ECON 201','ECON 202','ECON 311','ECON 315','ECON 330','ECON 340','ECON 352','ECON 411','ECON 423','ECON 424','ECON 428','ECON 435','ECON 439','ECON 460','ECON 491','ECON 517','PPOL 512','PPOL 521','PPOL 523','PPOL 622','PS 110','PS 201','PS 204','PS 205','PS 206','PS 300','PS 312','PS 313','PS 321','PS 331','PS 345','PS 346','PS 348','PS 362','PS 363','PS 371','PS 399','PS 455','PS 458','PS 475','PS 477','PS 478','PS 577','PS 578','SOC 204','SOC 205','SOC 206','SOC 241','SOC 312','SOC 315','SOC 340','SOC 345','SOC 350','SOC 355','SOC 360','SOC 381','SOC 413','SOC 437','SOC 439','SOC 441','SOC 442','SOC 450','SOC 452','SOC 454','SOC 480','SOC 481','ENG 104','ENG 106','ENG 107','ENG 200','ENG 201','ENG 204','ENG 210','ENG 211','ENG 213','ENG 222','ENG 253','ENG 275','ENG 319','ENG 320','ENG 330','ENG 362','ENG 375','ENG 386','ENG 418','ENG 425','FILM 245','FILM 445','WR 121','WR 201','WR 214','WR 222','WR 224','WR 230','WR 240','WR 241','WR 303','WR 323','WR 324','WR 327','WR 362','WR 407','WR 411','WR 448','WR 449','WR 497','BB 314','BB 317','BB 332','BB 350','BB 450','BB 451','BB 481','BB 490','BB 493','BB 497','BOT 325','CH 101','CH 110','CH 121','CH 122','CH 123','CH 201','CH 231','CH 233','CH 261','CH 263','CH 271','CH 324','CH 331','CH 334','CH 337','CH 361','CH 411','CH 421','CH 440','CH 461','CH 511','CH 535','CH 607','CH 616','CH 630','GS 399','BI 101','BI 204','BI 206','BI 211','BI 231','BI 241','BI 311','BI 319','BI 331','BI 341','BI 347','BI 351','BI 370','BI 445','Z 349','Z 371','Z 372','Z 422','Z 423','Z 425','MTH 065','MTH 103','MTH 105','MTH 111','MTH 112','MTH 211','MTH 228','MTH 231','MTH 241','MTH 245','MTH 251','MTH 252','MTH 254','MTH 255','MTH 256','MTH 306','MTH 311','MTH 321','MTH 338','MTH 341','MTH 342','MTH 343','MTH 351','MTH 355','MTH 361','MTH 390','MTH 427','MTH 440','MTH 451','MTH 463','MTH 481','MTH 511','MTH 543','MTH 551','MTH 581','MTH 621','MTH 654','MB 230','MB 302','MB 303','MB 416','MB 417','MB 420','PH 104','PH 201','PH 205','PH 211','PH 212','PH 213','PH 313','PH 332','PH 403','PH 411','PH 423','PH 425','PH 431','PH 562','PH 631','PH 651','ST 201','ST 202','ST 314','ST 351','ST 352','ST 411','ST 421','ST 506','ST 511','ST 516','ST 521','ST 525','ST 531','ST 541','ST 551','ST 558','ST 561','ST 591','ST 623','GRAD 420','GRAD 542','GRAD 560','WRP 521','MCB 699','ALS 108','ALS 114','ALS 116','ALS 140','ALS 141','ALS 150','ALS 151','ALS 161','ALS 162','ALS 165','ALS 166','ALS 173','ALS 174','ALS 199','UEXP 399','GEO 101','GEO 201','GEO 221','GEO 295','GEO 305','GEO 306','GEO 307','GEO 308','GEO 310','GEO 322','GEO 380','GEO 481','GEO 487','GEOG 100','GEOG 102','GEOG 105','GEOG 106','GEOG 201','GEOG 203','GEOG 240','GEOG 300','GEOG 313','GEOG 323','GEOG 331','GEOG 340','GEOG 350','GEOG 360','GEOG 370','GEOG 450','GEOG 480','GEOG 560','GEOG 564','GEOG 580','ATS 201','ATS 301','ATS 310','OC 103','OC 201','OC 333','OC 430','OC 434','OC 512','OEAS 540','BEE 101','BEE 311','BEE 320','BEE 469','BEE 472','BEE 512','BEE 542','ENGR 101','ENGR 111','ENGR 112','ENGR 201','ENGR 203','ENGR 211','ENGR 212','ENGR 213','ENGR 248','ENGR 350','ENGR 390','ENGR 391','BIOE 491','CBEE 101','CBEE 211','CBEE 320','CBEE 414','CHE 311','CHE 320','CHE 331','CHE 411','CHE 443','CHE 445','CHE 525','CHE 551','CHE 599','ENVE 421','ENVE 499','ENVE 532','ENVE 536','CCE 101','CCE 201','CCE 321','CE 311','CE 361','CE 373','CE 381','CE 383','CE 412','CE 420','CE 481','CE 491','CE 520','CE 531','CE 534','CE 566','CE 590','CE 630','CE 640','CEM 342','CEM 343','CEM 383','CEM 431','CEM 442','CEM 471','CS 101','CS 160','CS 161','CS 162','CS 165','CS 175','CS 225','CS 261','CS 271','CS 290','CS 321','CS 325','CS 340','CS 344','CS 352','CS 361','CS 370','CS 372','CS 391','CS 419','CS 444','CS 450','CS 461','CS 466','CS 468','CS 472','CS 491','CS 493','CS 506','CS 515','CS 519','CS 534','CS 550','CS 568','CS 578','CS 581','ECE 111','ECE 271','ECE 272','ECE 322','ECE 351','ECE 372','ECE 375','ECE 390','ECE 416','ECE 422','ECE 433','ECE 451','ECE 461','ECE 468','ECE 472','ECE 473','ECE 499','ECE 516','ECE 522','ECE 530','ECE 550','ECE 561','ECE 565','ECE 580','ECE 599','ECE 614','AAE 412','ESE 450','ESE 470','ESE 497','IE 212','IE 255','IE 285','IE 355','IE 367','IE 412','IE 425','IE 475','IE 497','IE 512','IE 521','IE 582','IE 599','MATS 321','MATS 322','MATS 499','MATS 570','MATS 581','ME 311','ME 316','ME 317','ME 331','ME 332','ME 373','ME 382','ME 383','ME 413','ME 420','ME 430','ME 460','ME 461','ME 480','ME 484','ME 497','ME 520','ME 526','ME 531','ME 560','ME 580','MFGE 436','MFGE 438','MFGE 535','MFGE 536','MIME 101','ROB 456','ROB 514','ROB 538','ROB 599','NSE 114','NSE 234','NSE 311','NSE 415','NSE 451','NSE 455','NSE 467','NSE 481','NSE 531','NSE 588','PAC 139','VMB 674','VMB 711','VMB 714','VMB 717','VMB 736','VMB 750','VMB 753','VMB 759','VMB 760','VMB 761','VMB 795','VMC 719','VMC 729','VMC 732','VMC 734','VMC 735','VMC 770','VMC 773','VMC 776','VMC 783','VMC 785','VMC 791','VMC 793','VMC 796','AS 111','AS 211','AS 311','AS 411','MS 111','NS 111','NS 211','ENSC 479','OAPI 188','OAPI 288','OAPI 388','OEEE 188','OEEE 288','OEEE 388','OEEE 488','OSAB 188','OSAB 388','OSAR 488','OSIT 388','H 513','H 622','HHS 231','HHS 241','HHS 513','KIN 132','KIN 230','KIN 306','KIN 307','KIN 311','KIN 312','KIN 314','KIN 321','KIN 324','KIN 325','KIN 341','KIN 343','KIN 360','KIN 370','KIN 394','KIN 395','KIN 422','KIN 423','KIN 425','KIN 432','KIN 434','KIN 437','KIN 444','KIN 475','KIN 483','KIN 510','KIN 547','KIN 567','KIN 586','NUTR 216','NUTR 225','NUTR 235','NUTR 240','NUTR 312','NUTR 325','NUTR 417','NUTR 430','PAC 102','PAC 108','PAC 110','PAC 111','PAC 114','PAC 117','PAC 120','PAC 121','PAC 122','PAC 123','PAC 126','PAC 129','PAC 130','PAC 136','PAC 140','PAC 145','PAC 148','PAC 151','PAC 178','PAC 184','PAC 188','PAC 190','PAC 194','PAC 201','PAC 212','PAC 215','PAC 231','PAC 233','PAC 248','PAC 250','PAC 252','PAC 253','PAC 254','PAC 256','PAC 265','PAC 273','PAC 274','PAC 275','PAC 278','PAC 286','PAC 287','PAC 292','PAC 294','PAC 295','PAC 296','PAC 298','PAC 300','PAC 301','PAC 316','PAC 322','H 100','H 210','H 220','H 225','H 312','H 319','H 320','H 333','H 344','H 385','H 425','H 432','H 434','H 457','H 476','H 512','H 518','H 524','H 560','H 562','H 576','H 581','H 598','HDFS 107','HDFS 201','HDFS 240','HDFS 311','HDFS 312','HDFS 313','HDFS 314','HDFS 330','HDFS 341','HDFS 360','HDFS 361','HDFS 431','HDFS 432','HDFS 444','HDFS 447','HDFS 461','HDFS 462','HDFS 501','HDFS 630','KIN 409','KIN 481','ANS 121H','BB 314H','BA 160H','BA 211H','BA 281H','BA 375H','CH 231H','CH 361H','ENGR 211H','HC 299','BI 211H','MTH 251H','MTH 252H','MTH 254H','HHS 231H','PAC 293H','CBEE 101H','CBEE 211H','HST 390H','PHL 443H','ME 382H','MIME 101H','ENG 201H','WR 121H'];

function create_courses_datalist() {
    var datalist = document.getElementById('courses')

    all_courses.forEach(function(item) {
        var option = document.createElement('option')
        option.value = item
        datalist.appendChild(option)
    })
}

function handle_search_input() {
    var search_input = document.getElementById('class-search-input').value
    var curr_courses = []
}

window.onload = function() {
    create_courses_datalist()
    var search_input = document.getElementById('class-search-input')
    search_input.addEventListener('input', handle_search_input)
}