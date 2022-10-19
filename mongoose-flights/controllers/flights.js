const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    dynamicSort
};

function newFlight(req, res) {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departsDate = dt.toISOString().slice(0, 16);

    res.render('flights/new', {departsDate});
};

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
        res.render('flights/index.ejs', { flights });
    }
)};