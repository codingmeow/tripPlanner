var express = require('express');
var router = express.Router();
var models = require('../models');
var Place = models.Place;
var Hotel = models.Hotel;
var ThingToDo = models.ThingToDo;
var Restaurant = models.Restaurant;

/* GET home page. */
router.get('/', function(req, res, next) {
	Hotel.find({}, function(err, hotels) {
		if (err){
        		console.log(err.message);
        	}
    Restaurant.find({}, function(err, restaurants) {
    	if (err){
        		console.log(err.message);
        	}
        ThingToDo.find({}, function(err, thingsToDo) {
        	if (err){
        		console.log(err.message);
        	}
            res.render('index', {
                all_hotels: hotels,
                all_restaurants: restaurants,
                all_things_to_do: thingsToDo
            });
        });
    });
	});
});

module.exports = router;
