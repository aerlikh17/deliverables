const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToFlight
};

function addToFlight(req, res) {
    
};

function create(req, res) {

};

function newTicket(req, res) {
    Ticket.find({}, function(err, tickets) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            tickets
        })
    })
}