const Flight = require('../models/flight');
const ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    dynamicSort, 
    show
};

function newFlight(req, res) {
    res.render('flights/new', { title: "Add Flight" });
};

function show (req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
        if (err) console.log(err);
        res.render('flights/show', {title: 'Flight Detail', flight, tickets});
        });
    });
}

function create(req, res) {
    console.log(req.body);
    const flight = new Flight(req.body);
    flight.save(function(err){
        if (err) return res.send('There was an error');
        console.log(flight);
        res.redirect('/flights');
    })
};

function dynamicSort(property) {
    let sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function index(req, res) {
    Flight.find({}, function(err, flights){
    flights.sort(dynamicSort('-departs'))
        if (err) res.send(err.message);
        res.render('flights/index.ejs', { title: "All Flights", flights });
    }
)};