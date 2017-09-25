
/*var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(9.916800199999999, 78.1437976);
    // 39.399872
    // -8.224454
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['S. V. S. V. Subramaniam Pushpavalli Kalyana Mahal'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png'
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);*/

// 4. Пишем скрипт который создаст и отобразит карту Google Maps на странице.

// Определяем переменную map Rightblog.ru
var map;

// Функция initMap которая отрисует карту на странице
function initMap() {

	// В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
	map = new google.maps.Map(document.getElementById('map'), {
		// При создании объекта карты необходимо указать его свойства
		// center - определяем точку на которой карта будет центрироваться
		center: {lat: 9.917091880291503, lng: 78.1424909802915},
		// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
		zoom: 15,

		// Добавляем свои стили для отображения карты
		styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
	});

	// Создаем маркер на карте
	var marker = new google.maps.Marker({

		// Определяем позицию маркера
	    position: {lat: 9.9157429, lng: 78.141142},

	    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
	    map: map,

	    // Пишем название маркера - появится если навести на него курсор и немного подождать
	    title: 'Sabareesh Weds Sharmili Here!',

	    // Укажем свою иконку для маркера
	    icon: 'images/loc.png'
	});

	// Создаем наполнение для информационного окна
	var contentString = '<div id="content">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h1 id="firstHeading" class="firstHeading">You are Invited!</h1>'+
	      '<div id="bodyContent">'+
	      '<p>S. V. S. V. Subramaniam Pushpavalli Kalyana Mahal,' +
	      'Behind Ganesh Theatre, D. D. Road, Pankajam Colony,' +
		  'Kamarajar Salai, Madurai, Tamil Nadu 625009, India</p>'+
	      '<p><b>Веб-сайт:</b> <a href="#" target="_blank">Sa-Sha</a>'+
	      '</p>'+
	      '</div>'+
	      '</div>';

	// Создаем информационное окно
	var infowindow = new google.maps.InfoWindow({
	   content: contentString,
	   maxWidth: 400
	});

	// Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});

}