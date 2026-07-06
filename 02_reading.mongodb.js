use('ecommerce');

// /to find a product 
db.products.find()  //to find all in product

// find by applying filter 
db.products.find({category:"Electronics"})

db.contacts.find({name:"Alice"})

//search by preety point
db.products.find().pretty()

// search by comparision operator
//1
db.products.find({ price: { $gt: 1000 } }) // greater than 1000
//2
db.products.find({ price: { $gte: 1000, $lte: 50000 } })  //greater then 1000 and less the 50000

// Using Logical operator
// or operator
db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })

// and operator
db.products.find({ $and: [{ category: "Electronics" }, { stock: { $gt: 50 } }] })

// nor operator : for inverse search
db.products.find({ $nor: [{ category: "Electronics" }] })

// by projection ( Select Specific Fields)
// to show/find specific part of data 
db.products.find({}, { name: 1, price: 1, _id: 0 })

// another one
db.products.find({category: "Electronics"}, { name: 1, price: 1, _id: 0 })

//Sorting and Limiting
db.products.find().sort({ price: -1 }).limit(2)
// sort order batata hai either increasing or decrising 
// limit batata hai kitna data bstana hai means show karna hai
