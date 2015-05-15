$(document).ready(function( ){
	var currentDay = 1;
	var dayVal = 1;
	var Day = function(){
		this.hotels = [];
		this.restaurants = [];
		this.toDo = [];
	};
	var daysArray = [new Day()];
	// console.log(daysArray);


// adding to itinerary

	$('#add-hotel').click(function() {
		var selectedH = $("#selectedHotel :selected").text();
		Day.hotels.push(selectedH);
		console.log(Day)
		$("#addedHotel").append("<p>" + selectedH + "  " + "<span id= 'removeH'><button class= 'btn btn-xs btn-danger remove btn-circle'>x</button></span></p>");
	})

	$('#add-rest').click(function() {
		var selectedR = $("#selectedRestaurant :selected").text();
		Day.restaurants.push(selectedR);
		console.log(Day)
		$("#addedRest").append("<p>" + selectedR + "  " + "<span id= 'removeR'><button class= 'btn btn-xs btn-danger remove btn-circle'>x</button></span></p>");
	})

	$('#add-todo').click(function() {
		var selectedT = $("#selectedToDo :selected").text();
		Day.toDo.push(selectedT);
		console.log(Day)
		$("#addedToDo").append("<p>" + selectedT + "  " + "<span id= 'removeT'><button class= 'btn btn-xs btn-danger remove btn-circle'>x</button></span></p>");
	})

// removing from itinerary


//select parent div, click assigned to button's id, remove parent and remove self
	$('#addedHotel').delegate('#removeH', 'click', function () {
	    $(this).parent().remove();
	    var nameArr = $(this).parent().html().split("");
	    var slicedName = nameArr.slice(0, nameArr.indexOf("<")-2).join('');
	    for (var i=0; i<Day.hotels.length; i++){
	    	if(Day.hotels[i] === slicedName){
	    		Day.hotels.splice(i,1);
	    		return;
	    	}
	    }
	    
	    
	    $(this).remove(); //THIS is #removeH (button)

	});

	$('#addedRest').delegate('#removeR', 'click', function () {
	    $(this).parent().remove();
	    var nameArr = $(this).parent().html().split("");
	    var slicedName = nameArr.slice(0, nameArr.indexOf("<")-2).join('');
	    for (var i=0; i<Day.restaurants.length; i++){
	    	if(Day.restaurants[i] === slicedName){
	    		Day.restaurants.splice(i,1);
	    		// console.log(Day.restaurants);
	    		return;
	    	}
	    }
	    $(this).remove();
	});

	$('#addedToDo').delegate('#removeT', 'click', function () {
	    $(this).parent().remove();
	    var nameArr = $(this).parent().html().split("");
	    var slicedName = nameArr.slice(0, nameArr.indexOf("<")-2).join('');
	    for (var i=0; i<Day.toDo.length; i++){
	    	if(Day.toDo[i] === slicedName){
	    		Day.toDo.splice(i,1);
	    		// console.log(Day.toDo);
	    		return;
	    	}
	    }
	    $(this).remove();
	});

$('#days').delegate('.buttonDays', 'click', function(){
	// console.log("clicked!");
		// $('#day-title').first().text("Day "+dayNumber);
		dayVal = +$(this).text();
		console.log(dayVal);
		$("#selectedDay").text("Day " + dayVal);
	$('#addedHotel, #addedRest, #addedToDo').empty();
})



	$('#add-day').click(function(){
		daysArray.push(new Day());
		// console.log(daysArray);
		currentDay++;
		$('<button type="button" class="btn btn-circle buttonDays" id= "Day '+currentDay+'">'+ currentDay+'</button>').insertBefore($(this));
	})


});