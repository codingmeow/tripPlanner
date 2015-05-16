

$(document).ready(function( ){
	var currentDay = 1;
	var Day = function(){
		this.hotels = [];
		this.restaurants = [];
		this.toDo = [];
	};
	var daysArray = [new Day()];









// adding to itinerary

	$('#add-hotel').click(function() {
		var selectedH = $("#selectedHotel :selected").text();
		
		// daysArray[currentDay-1].hotels.push(selectedH);
		// $("#addedHotel").append("<p>" + selectedH + "  " + "<span id= 'removeH'><button class= 'btn btn-xs btn-danger remove btn-circle'>x</button></span></p>");
		
		// var marker = new google.maps.Marker({
  //       position: new google.maps.LatLng(thisLocation[0],thisLocation[1]),
  //       title: selectedH
  //   });
    // Add the marker to the map by calling setMap()
    // marker.setMap(map);
    addElement(selectedH, "hotels", "#addedHotel", "removeH", all_hotels, daysArray, currentDay);


	})

	$('#add-rest').click(function() {
		var selectedR = $("#selectedRestaurant :selected").text();
		daysArray[currentDay-1].restaurants.push(selectedR);
		console.log(daysArray);
		$("#addedRest").append("<p>" + selectedR + "  " + "<span id= 'removeR'><button class= 'btn btn-xs btn-danger remove btn-circle'>x</button></span></p>");
	})

	$('#add-todo').click(function() {
		var selectedT = $("#selectedToDo :selected").text();
		daysArray[currentDay-1].toDo.push(selectedT);
		console.log(daysArray);
		$("#addedToDo").append("<p>" + selectedT + "  " + "<span id= 'removeT'><button class= 'btn btn-xs btn-danger remove btn-circle'>x</button></span></p>");
	})

// removing from itinerary
//select parent div, click assigned to button's id, remove parent and remove self
	$('#addedHotel').delegate('#removeH', 'click', function () {
	    $(this).parent().remove();

	    var nameArr = $(this).parent().html().split("");
	    var slicedName = nameArr.slice(0, nameArr.indexOf("<")-2).join('');

	    for (var i=0; i<daysArray[currentDay-1].hotels.length; i++){
	    	if(daysArray[currentDay-1].hotels[i] === slicedName){
	    		console.log(daysArray[currentDay-1].hotels[i]);
	    		daysArray[currentDay-1].hotels.splice(i,1);
	    		return;
	    	}
	    }
	    
	    
	    $(this).remove(); //THIS is #removeH (button)

	});

	$('#addedRest').delegate('#removeR', 'click', function () {
	    $(this).parent().remove();

	    var nameArr = $(this).parent().html().split("");
	    var slicedName = nameArr.slice(0, nameArr.indexOf("<")-2).join('');

	    for (var i=0; i<daysArray[currentDay-1].restaurants.length; i++){
	    	if(daysArray[currentDay-1].restaurants[i] === slicedName){
	    		daysArray[currentDay-1].restaurants.splice(i,1);
	    		console.log(daysArray[currentDay-1].restaurants);
	    		return;
	    	}
	    }
	    $(this).remove();
	});

	$('#addedToDo').delegate('#removeT', 'click', function () {
	    $(this).parent().remove();

	    var nameArr = $(this).parent().html().split("");
	    var slicedName = nameArr.slice(0, nameArr.indexOf("<")-2).join('');

	    for (var i=0; i<daysArray[currentDay-1].toDo.length; i++){
	    	if(daysArray[currentDay-1].toDo[i] === slicedName){
	    		daysArray[currentDay-1].toDo.splice(i,1);
	    		console.log(daysArray[currentDay-1].toDo);
	    		return;
	    	}
	    }
	    $(this).remove();
	});


// switching days
$('#days').delegate('.buttonDays', 'click', function(){
		currentDay = +$(this).text();
		console.log(currentDay);
		$("#selectedDay").text("Day " + currentDay);
	$('#addedHotel, #addedRest, #addedToDo').empty();
	for (var i=0; i<daysArray[currentDay-1].hotels.length; i++){ //bring back hotel
		$("#addedHotel").append("<p>" + daysArray[currentDay-1].hotels[i] + "  " + "<span id= 'removeH'><button class= 'btn btn-xs btn-danger remove btn-circle'>x</button></span></p>");
	}
	for (var i=0; i<daysArray[currentDay-1].restaurants.length; i++){// bring back restaurant
		console.log(daysArray[currentDay-1].restaurants[i]);
		$("#addedRest").append("<p>" + daysArray[currentDay-1].restaurants[i] + "  " + "<span id= 'removeR'><button class= 'btn btn-xs btn-danger remove btn-circle'>x</button></span></p>");
	}
	for (var i=0; i<daysArray[currentDay-1].toDo.length; i++){ //bring back todo
		console.log(daysArray[currentDay-1].toDo[i]);
		$("#addedToDo").append("<p>" + daysArray[currentDay-1].toDo[i] + "  " + "<span id= 'removeT'><button class= 'btn btn-xs btn-danger remove btn-circle'>x</button></span></p>");
	}

})


//add a day
	$('#add-day').click(function(){
		daysArray.push(new Day());
		currentDay++;
		$('<button type="button" class="btn btn-circle buttonDays" id= "Day '+currentDay+'">'+ currentDay+'</button>').insertBefore($(this));
		$('#add-day').prev().trigger('click');
	})

//remove a day
	$('#day-title').delegate('#remove-day', 'click', function () {
		daysArray.splice(currentDay-1, 1);
		console.log(daysArray);
		$("#add-day").prev().prev().trigger('click');
		$("#add-day").prev().remove();

	});

});



