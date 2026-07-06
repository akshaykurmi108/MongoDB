use('ecommerce');

// Delete One data
db.contacts.deleteOne({ name: "Alice" })

// Delete Many data
db.orders.deleteMany({ status: "Delivered" })
