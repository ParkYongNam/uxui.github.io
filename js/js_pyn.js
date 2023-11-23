// import data from '../data/app.json';

$(function () {


    var cityinfo = "";
    var subcityinfo = "";
    var infonum = 0;

    const mapinfo = [
        {
            "city": "서울",
            "subcity": [
                {
                    "name": "논현점",
                    "mapinfo": [
                        37.5160790812474,
                        127.020346472276
                    ]
                },
                {
                    "name": "삼성점",
                    "mapinfo": [
                        37.507992111879894,
                        127.06283928846423
                    ]
                },
                {
                    "name": "강남점",
                    "mapinfo": [
                        37.4977701156608,
                        127.02786445383165
                    ]
                },
                {
                    "name": "잠실점",
                    "mapinfo": [
                        37.51429322755146,
                        127.10328180865707
                    ]
                },
                {
                    "name": "종로점",
                    "mapinfo": [
                        37.571524544725044,
                        126.99187240643235
                    ]
                },
                {
                    "name": "관악봉천점",
                    "mapinfo": [
                        37.48242838398804,
                        126.94172161101514
                    ]
                },
                {
                    "name": "신길점",
                    "mapinfo": [
                        37.48402123455122,
                        126.92987110793592
                    ]
                },
                {
                    "name": "가산점",
                    "mapinfo": [
                        37.480236078669655,
                        126.88315834074805
                    ]
                },
                {
                    "name": "상봉점",
                    "mapinfo": [
                        37.59634806003357,
                        127.08507931628826
                    ]
                },
                {
                    "name": "구로점",
                    "mapinfo": [
                        37.503391156578424,
                        126.88235322230464
                    ]
                },
                {
                    "name": "양천점",
                    "mapinfo": [
                        37.51216739359294,
                        126.86587093735115
                    ]
                },
                {
                    "name": "신림점",
                    "mapinfo": [
                        37.48413825805982,
                        126.92969009345667
                    ]
                },
                {
                    "name": "이수점",
                    "mapinfo": [
                        37.48516689766854,
                        126.98174529108383
                    ]
                },
                {
                    "name": "신촌점",
                    "mapinfo": [
                        37.5596310010359,
                        126.94211425188617
                    ]
                }
            ]
        },
        {
            "city": "경기도",
            "subcity": [
                {
                    "name": "성남점",
                    "mapinfo": [
                        37.43679386539377,
                        127.13768934818924
                    ]
                },
                {
                    "name": "평택점",
                    "mapinfo": [
                        37.000083238154964,
                        127.11145177795056
                    ]
                },
                {
                    "name": "수원점",
                    "mapinfo": [
                        37.296934996415104,
                        127.01234430803872
                    ]
                },
                {
                    "name": "용인점",
                    "mapinfo": [
                        37.241257839603456,
                        127.18053144734569
                    ]
                },
                {
                    "name": "화성점",
                    "mapinfo": [
                        37.199302959217405,
                        126.83023545894436
                    ]
                },
                {
                    "name": "안성점",
                    "mapinfo": [
                        37.007637417869034,
                        127.27926628717098
                    ]
                },
                {
                    "name": "광주점",
                    "mapinfo": [
                        37.42895821534798,
                        127.25508639804566
                    ]
                }
            ]
        },
        {
            "city": "강원도",
            "subcity": [
                {
                    "name": "강릉점",
                    "mapinfo": [
                        37.42895821534798,
                        127.25508639804566
                    ]
                },
                {
                    "name": "속초점",
                    "mapinfo": [
                        38.20763285228859,
                        128.59248098010076
                    ]
                },
                {
                    "name": "양양점",
                    "mapinfo": [
                        38.075390806422,
                        128.61990453897522
                    ]
                },
                {
                    "name": "평창점",
                    "mapinfo": [
                        37.36961212115593,
                        128.39035580878183
                    ]
                },
                {
                    "name": "양구점",
                    "mapinfo": [
                        38.10879195864625,
                        127.98934939597216
                    ]
                },
                {
                    "name": "인제점",
                    "mapinfo": [
                        38.068024163638555,
                        128.17098899208153
                    ]
                },
                {
                    "name": "춘천점",
                    "mapinfo": [
                        37.88211324375472,
                        127.73023720432393
                    ]
                }
            ]
        },
        {
            "city": "충청도",
            "subcity": [
                {
                    "name": "천안점",
                    "mapinfo": [
                        36.8146933024844,
                        127.11455583945435
                    ]
                },
                {
                    "name": "아산점",
                    "mapinfo": [
                        36.78985968400611,
                        127.00403894302156
                    ]
                },
                {
                    "name": "논산점",
                    "mapinfo": [
                        36.187807639402,
                        127.09933914646496
                    ]
                },
                {
                    "name": "충주점",
                    "mapinfo": [
                        36.987749270647114,
                        127.92631978111945
                    ]
                },
                {
                    "name": "대전광역시점",
                    "mapinfo": [
                        36.987749270647114,
                        127.92631978111945
                    ]
                },
                {
                    "name": "공주점",
                    "mapinfo": [
                        36.446861099728125,
                        127.1203650113829
                    ]
                },
                {
                    "name": "보령점",
                    "mapinfo": [
                        36.334241561191135,
                        126.60836201258817
                    ]
                }
            ]
        },
        {
            "city": "경상북도",
            "subcity": [
                {
                    "name": "문경점",
                    "mapinfo": [
                        36.58654059882537,
                        128.18544246489387
                    ]
                },
                {
                    "name": "상주점",
                    "mapinfo": [
                        36.41103079005899,
                        128.15998255905671
                    ]
                },
                {
                    "name": "구미점",
                    "mapinfo": [
                        36.120279197690394,
                        128.34680857947657
                    ]
                },
                {
                    "name": "포항점",
                    "mapinfo": [
                        36.021193757003736,
                        129.3412333108821
                    ]
                },
                {
                    "name": "안동점",
                    "mapinfo": [
                        36.56768830108199,
                        128.7287994170467
                    ]
                },
                {
                    "name": "경주점",
                    "mapinfo": [
                        35.856083647099965,
                        129.22077124767094
                    ]
                },
                {
                    "name": "김천점",
                    "mapinfo": [
                        36.138388787150646,
                        128.11670512344298
                    ]
                }
            ]
        },
        {
            "city": "경상남도",
            "subcity": [
                {
                    "name": "창원점",
                    "mapinfo": [
                        35.22937213161193,
                        128.68278625276915
                    ]
                },
                {
                    "name": "진주점",
                    "mapinfo": [
                        35.18002383311698,
                        128.1066014718697
                    ]
                },
                {
                    "name": "거제점",
                    "mapinfo": [
                        34.87998193460383,
                        128.622894665096
                    ]
                },
                {
                    "name": "부산광역시점",
                    "mapinfo": [
                        35.18056315648099,
                        129.07579129239744
                    ]
                },
                {
                    "name": "김해점",
                    "mapinfo": [
                        35.22759638217711,
                        128.88977953989507
                    ]
                },
                {
                    "name": "양산점",
                    "mapinfo": [
                        35.34554513570319,
                        129.03605521848965
                    ]
                },
                {
                    "name": "밀양점",
                    "mapinfo": [
                        35.50341323073836,
                        128.74837090565183
                    ]
                },
                {
                    "name": "남해점",
                    "mapinfo": [
                        34.83776921916621,
                        127.88956657276151
                    ]
                }
            ]
        },
        {
            "city": "전라북도",
            "subcity": [
                {
                    "name": "익산점",
                    "mapinfo": [
                        35.94717562144336,
                        126.96212196013694
                    ]
                },
                {
                    "name": "전주점",
                    "mapinfo": [
                        35.82818489438983,
                        127.14352212747606
                    ]
                },
                {
                    "name": "군산점",
                    "mapinfo": [
                        35.96687132927267,
                        126.73583028641276
                    ]
                },
                {
                    "name": "남원점",
                    "mapinfo": [
                        35.4149708188519,
                        127.3916041286642
                    ]
                },
                {
                    "name": "고창점",
                    "mapinfo": [
                        35.43562843041744,
                        126.71048496505516
                    ]
                },
                {
                    "name": "김제점",
                    "mapinfo": [
                        35.80449205053319,
                        126.88258655296046
                    ]
                }
            ]
        },
        {
            "city": "전라남도",
            "subcity": [
                {
                    "name": "목포점",
                    "mapinfo": [
                        34.81117727227059,
                        126.39310682514653
                    ]
                },
                {
                    "name": "나주점",
                    "mapinfo": [
                        35.01547027674292,
                        126.71228028290776
                    ]
                },
                {
                    "name": "영광점",
                    "mapinfo": [
                        35.27703552954145,
                        126.51147394918684
                    ]
                },
                {
                    "name": "광양점",
                    "mapinfo": [
                        34.94053274315376,
                        127.69714889032144
                    ]
                },
                {
                    "name": "여수점",
                    "mapinfo": [
                        34.75991649860578,
                        127.66441134824879
                    ]
                },
                {
                    "name": "해남점",
                    "mapinfo": [
                        34.57260497723585,
                        126.59809529045081
                    ]
                },
                {
                    "name": "광주광역시점",
                    "mapinfo": [
                        35.15829823359728,
                        126.85451429994995
                    ]
                },
                {
                    "name": "고흥점",
                    "mapinfo": [
                        34.604663729528106,
                        127.27756282702322
                    ]
                }
            ]
        },
        {
            "city": "제주도",
            "subcity": [
                {
                    "name": "제주점",
                    "mapinfo": [
                        33.5002991543597,
                        126.5300768190236
                    ]
                },
                {
                    "name": "서귀포점",
                    "mapinfo": [
                        33.48724210923683,
                        126.49740491237252
                    ]
                },
            ]
        }

    ]


    /*  var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
     var options = { //지도를 생성할 때 필요한 기본 옵션
         center: new kakao.maps.LatLng(mapinfo[infonum].subcity[0].mapinfo[0], mapinfo[infonum].subcity[0].mapinfo[1]), //지도의 중심좌표.
         level: 3 //지도의 레벨(확대, 축소 정도)
     };
  */

    /* 
        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴 */


    for (x in mapinfo) {
        cityinfo += `<li class='col-2'>${mapinfo[x].city}</li>`;

    }

    $(".citynm").html(cityinfo);


    $("#addressMap .secondad").on('click', 'li', function () {
        $(this).toggleClass("on").siblings().removeClass("on") //제이쿼리 동적 개체 , 정적개체 봐야함
        options.center = new kakao.maps.LatLng(mapinfo[infonum].subcity[$(this).index()].mapinfo[0], mapinfo[infonum].subcity[$(this).index()].mapinfo[1]), //지도의 중심좌표.
            map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    })





    $(".citynm>li").click(function () {
        $(this).toggleClass("on").siblings().removeClass("on");

        infonum = $(this).index();

        subcityinfo = "";
        for (j in mapinfo[infonum].subcity) {
            subcityinfo += `<li class='col-1'>${mapinfo[infonum].subcity[j].name}</li>`;
        }
        $(".subnm").html(subcityinfo);

        //큰지역선택시 첫번째 지점 지도 노출하기
        options.center = new kakao.maps.LatLng(mapinfo[infonum].subcity[0].mapinfo[0], mapinfo[infonum].subcity[0].mapinfo[1]), //지도의 중심좌표.
            map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


    })

    $(".citynm>li").eq(infonum).click();







    const btnnm = ["Mini", "Small", "Medium", "Large"]
    const swiperSize = new Swiper("#sizeBanner .swiper", {
        loop: true,
        spaceBetween: 30,
        effect: "fade",
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: "#sizeBanner .swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + btnnm[index] + "</span>";
            },
        },
        navigation: {
            nextEl: "#sizeBanner .swiper-button-next",
            prevEl: "#sizeBanner .swiper-button-prev",
        },
        on: {
            init: function () {
                document.querySelector(".targetDiv").innerHTML = document.querySelector("#sizeBanner .scon0").innerHTML
            },
            realIndexChange: function () {
                document.querySelector(".targetDiv").innerHTML = document.querySelector("#sizeBanner .scon" + this.realIndex).innerHTML
            }
        }
    })
})
