var EmployeeView = function(employee) {
		
	this.initialize = function() {
		this.el = $('<div/>');
		this.el.on('click', '.add-location-btn', this.addMap);
		// google.maps.event.addDomListener(window, 'load', this.addMap);
	};
	
	this.render = function() {
		this.el.html(EmployeeView.template(employee));
		return this;
	};
	
	// var map;
	// 	this.addMap = function() {
	// 		event.preventDefault();
	// 		console.log('map loaded');
	// 		var mapOptions = {
	// 			zoom: 8,
	// 			center: new google.maps.LatLng(-34.397, 150.644),
	// 			disableDefaultUI: true
	// 		};
	// 		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	// 	};
	
	this.initialize();
	// google.maps.event.addDomListener(window, 'load', this.addMap);

}


EmployeeView.template = Handlebars.compile($('#employee-tpl').html());


function initialize() {
	console.log("she's loaded");
	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(-34.397, 150.644),
		disableDefaultUI: true
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'),
	mapOptions);
}

function loadScript() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
	'callback=initialize';
	document.body.appendChild(script);
}

window.onload = loadScript;