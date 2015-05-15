$(document).ready(function( ){
	var dayVal = 1;
	var currentDay = dayVal;
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
		daysArray[currentDay-1].hotels.push(selectedH);
		console.log(daysArray);
		$("#addedHotel").append("<p>" + selectedH + "  " + "<span id= 'removeH'><button class= 'btn btn-xs btn-danger remove btn-circle'>x</button></span></p>");
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
	    for (var i=0; i<daysArray[dayVal-1].hotels.length; i++){
	    	// console.log(dayVal);
	    	if(daysArray[dayVal-1].hotels[i] === slicedName){
	    		console.log(daysArray[dayVal-1].hotels[i]);
	    		daysArray[dayVal-1].hotels.splice(i,1);
	    		return;
	    	}
	    }
	    
	    
	    $(this).remove(); //THIS is #removeH (button)

	});

	$('#addedRest').delegate('#removeR', 'click', function () {
	    $(this).parent().remove();
	    var nameArr = $(this).parent().html().split("");
	    var slicedName = nameArr.slice(0, nameArr.indexOf("<")-2).join('');
	    for (var i=0; i<daysArray[dayVal-1].restaurants.length; i++){
	    	if(daysArray[dayVal-1].restaurants[i] === slicedName){
	    		daysArray[dayVal-1].restaurants.splice(i,1);
	    		console.log(daysArray[dayVal-1].restaurants);
	    		return;
	    	}
	    }
	    $(this).remove();
	});

	$('#addedToDo').delegate('#removeT', 'click', function () {
	    $(this).parent().remove();
	    var nameArr = $(this).parent().html().split("");
	    var slicedName = nameArr.slice(0, nameArr.indexOf("<")-2).join('');
	    for (var i=0; i<daysArray[dayVal-1].toDo.length; i++){
	    	if(daysArray[dayVal-1].toDo[i] === slicedName){
	    		daysArray[dayVal-1].toDo.splice(i,1);
	    		console.log(daysArray[dayVal-1].toDo);
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
	for (var i=0; i<daysArray[dayVal-1].hotels.length; i++){ //bring back hotel
		$("#addedHotel").append("<p>" + daysArray[dayVal-1].hotels[i] + "  " + "<span id= 'removeH'><button class= 'btn btn-xs btn-danger remove btn-circle'>x</button></span></p>");
	}
	for (var i=0; i<daysArray[dayVal-1].restaurants.length; i++){// bring back restaurant
		console.log(daysArray[dayVal-1].restaurants[i]);
		$("#addedRest").append("<p>" + daysArray[dayVal-1].restaurants[i] + "  " + "<span id= 'removeR'><button class= 'btn btn-xs btn-danger remove btn-circle'>x</button></span></p>");
	}
	for (var i=0; i<daysArray[dayVal-1].toDo.length; i++){ //bring back todo
		console.log(daysArray[dayVal-1].toDo[i]);
		$("#addedToDo").append("<p>" + daysArray[dayVal-1].toDo[i] + "  " + "<span id= 'removeT'><button class= 'btn btn-xs btn-danger remove btn-circle'>x</button></span></p>");
	}

})



	$('#add-day').click(function(){
		daysArray.push(new Day());
		currentDay++;
		$('<button type="button" class="btn btn-circle buttonDays" id= "Day '+currentDay+'">'+ currentDay+'</button>').insertBefore($(this));
	})

	function reNumberArr(arr, index){
    var splicedNum = arr.splice(index, 1);
    var splicedArr = arr;
    
    for (var i=index; i<splicedArr.length; i++){
        splicedArr[i] = splicedNum[0];
        splicedNum[0]++;
    }
    return splicedArr;
}

	$('#remove-day').click(function(){
		daysArray.splice(dayVal-1, 1);
		console.log(daysArray);

	})


});



