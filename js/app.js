/*--------- PreLoader init ---------*/
function initPreLoader() {
    jQuery('.loader-container').delay(800).fadeOut();
}
jQuery(window).on('load', function () {
    "use strict";
    initPreLoader();
});

/*--------- Fixed menu ---------*/
$(window).scroll(function () {
    var bodyScroll = $(window).scrollTop(),
        header = $(".header");
    if (bodyScroll > 500) {
        header.addClass("fixed fadeInDown animated");
    } else {
        header.removeClass("fixed fadeInDown animated");
    }
});

/*--------- Menu Scroller ---------*/
$(".scroller").on("click", function () {
    "use strict";
    var the_id = $(this).attr("href");
    $("html, body").animate({
            scrollTop: $(the_id).offset().top + 1
        },
        "slow"
    );
    return false;
});

/*--------- Navbar Scrolling  ---------*/
$(".header-nav__menu").singlePageNav({
    speed: 1e3,
    currentClass: "active",
    offset: 80
});

/*--------- Mobile menu ---------*/
$('.hamburger, .header-nav__menu a, .header-nav__btn a').on("click", function () {
    $(".hamburger").toggleClass("is-active");
    $(".header-nav").toggleClass("open");
});

/*--------- Animation on Scrolling ---------*/
new WOW().init();


/*--------- Countdown timer ---------*/
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;


let countDown = new Date('Dec 7, 2019 11:00:00').getTime(),
    x = setInterval(function () {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        // do something later when date is reached
        // if (distance < 0) {
        //  clearInterval(x);

        //  alert('ITS MY BIRTHDAY!')
        // }

    }, second)



/*--------- Map ---------*/
google.maps.event.addDomListener(window, 'load', init);

function init() {
    var markerImage = {
        url: "../img/marker.png", // url
        scaledSize: new google.maps.Size(40, 37),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };
    var mapOptions = {
        zoom: 14,
        scrollwheel: false,
        center: new google.maps.LatLng(46.43558385, 30.75832244),
        disableDefaultUI: true,
        zoomControl: false,
        panControl: false,
        scaleControl: false,
        styles: [{
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#a7a7a7"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "color": "#737373"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "color": "#efefef"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "poi.government",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "poi.medical",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "poi.place_of_worship",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "poi.school",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#696969"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "color": "#b3b3b3"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#d6d6d6"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "weight": 1.8
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#d7d7d7"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                        "color": "#808080"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#d3d3d3"
                }]
            }
        ]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(46.435649, 30.758570),
        map: map,
        icon: markerImage
    });
}

/*--------- Gallery open ---------*/
$('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    }
});

/*--------- Video open ---------*/
$('.popup-youtube').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});

