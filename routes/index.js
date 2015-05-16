var express = require('express');
var router = express.Router();
var models = require('../models');
var Place = models.Place;
var Hotel = models.Hotel;
var ThingToDo = models.ThingToDo;
var Restaurant = models.Restaurant;

/* GET home page. */

//promises

// router.get('/slowPromises', function(req, res, next){
//     Hotel
//     .find()
//     .exec()
//     .then(function(hotels){
//         res.locals.hotels = hotels;
//         return Restaurant.find().exec();
//     })
//     .then(function(restaurants){
//         res.locals.restaurants = restaurants;
//         return ThingToDo.find().exec();
//     })
//     .then(function(thingsToDo){
//         res.locals.thingsToDo = thingsToDo;
//         // console.log(res.locals);
//         res.json(res.locals);
//     })
// })

// router.get('/', function(req, res, next) {
//   Promise.join(
//     Restaurant.find().exec(),
//     ThingToDo.find().exec(),
//     Hotel.find().exec()
//   )
//   .spread(function(restaurants, thingToDo, hotels) {
//     res.render('index', {
//       all_hotels: hotels,
//       all_restaurants: restaurants,
//       all_things_to_do: thingToDo
//     })
//   })
// })

//async

// var async = require('async')
// router.get('/', function(req, res, next){
//     async.parallel({
//         hotels: function(done){
//             Hotel.find(done);
//         },
//         restaurants: function(done){
//             Restaurant.find(done)
//         },
//         thingsToDo: function(done){
//             ThingToDo.find(done)
//         }
//     }, function(err, resultHash){
//         res.json(resultHash);
//     });
// });

// sync version

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
