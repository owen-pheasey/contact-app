exports.contacts = [
  {id: 'a4vhAoFG', name: "Joe Bloggs", address: "1 Bank Lane", phone_number: "051-123456 "},
  {id: 'hwX6aOr7', name: "Ellen Bliggs", address: "2 River Road", phone_number: "051-123457"}
]
// Update an existing contact in datastore.
exports.update = function(req, res) {
    var index = datastore.contacts.map(function(x) {return x.id; }).indexOf(req.params.id);
    if (index != -1) {
       var contact = datastore.contacts[index]
       contact.name =  req.body.name
       contact.address = req.body.address
       contact.phone_number = req.body.phone_number
       return res.send(200, contact)
    } else {
        return res.send(404)
    }
};
// delete an existing contact in datastore.
exports.delete = function(req, res) {
    var index = datastore.contacts.map(function(x) {return x.id; }).indexOf(req.params.id);
    if (index != -1) {
       var contact = datastore.contacts.splice(index,1);
       return res.send(200, contact)
    } else {
        return res.send(404)
    }
};
