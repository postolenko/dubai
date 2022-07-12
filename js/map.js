if($("#map").length > 0) {
    var lang = $("#map").attr("data-lang");
    var lat = $("#map").attr("data-lat");
    var zoom = parseInt($("#map").attr("data-zoom"));
    ymaps.ready(function () {        
        var myMap = new ymaps.Map('map', {
            center: [37.7875487, -122.4471158],
            zoom: zoom
        }, {
            searchControlProvider: 'yandex#search'
        });
        myPlacemark1 = new ymaps.Placemark([37.7875487, -122.4471158], {
            hintContent: ''
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/map.svg',
            iconImageSize: [62, 62],
            iconImageOffset: [20, -20]
        });
        myMap.geoObjects.add(myPlacemark1);        
    });
}