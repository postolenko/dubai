// if( document.getElementById("map") ) {
//     var lang = $("#map").attr("data-lang");
//     var lat = $("#map").attr("data-lat");
//     var zoom = parseInt($("#map").attr("data-zoom"));
//     ymaps.ready(function () {
//         var myMap = new ymaps.Map('map', {
//             center: [lang, lat],
//             zoom: zoom
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),
//         myPlacemark1 = new ymaps.Placemark([lang, lat], {
//             hintContent: ''
//         }, {
//             iconLayout: 'default#imageWithContent',
//             // iconImageHref: 'img/pin.png',
//             // iconImageSize: [55, 73],
//             // iconImageOffset: [55, -30]
//         });
//         myMap.geoObjects.add(myPlacemark1);
//     });
// }