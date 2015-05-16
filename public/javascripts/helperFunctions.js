function getLocation (placeType, name){
	for (var i=0; i<placeType.length; i++){
		if (placeType[i].name === name){
			return placeType[i].place[0].location;
		}
	}
};

// console.log(getLocation(all_hotels, "Andaz Wall Street")[0] + "," + getLocation(all_hotels, "Andaz Wall Street")[1]);

function addElement (name, placeType, div, buttonId, all_,daysArray, currentDay){
	// placeType = Object.keys(Day);
	// console.log(placeType)
	$(div).append("<p>" + name + "  " + "<span id= '"+buttonId+"'><button class= 'btn btn-xs btn-danger remove btn-circle'>x</button></span></p>");
	var thisLocation = getLocation(all_, name);
	var marker = new google.maps.Marker({
        position: new google.maps.LatLng(thisLocation[0],thisLocation[1]),
        title: name
    });
    // Add the marker to the map by calling setMap()
  	marker.setMap(map);
		daysArray[currentDay-1].placeType.push({"name": name, "marker": marker});
		console.log(daysArray);
}