const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
};

function newFlight(req, res) {
    res.render('flights/new');
};

function create(req, res) {
    console.log(req.body);
    const flight = new Flight(req.body);
    flight.save(function(err){
        if (err) return res.send('There was an error');
        console.log(flight);
        res.redirect('/flights/new');
    })
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
      });
}