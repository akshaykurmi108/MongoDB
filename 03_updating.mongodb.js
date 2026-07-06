use('ecommerce');

// to update one data
// at only one place
db.products.updateOne(
{ name: "Wireless Mouse" },
{ $set: { price: 899 } }
)
// jaha kahi bhee sabse pahle name : wireless mouse hoga vha par price ko change karke 899 set kar dega

// at many place
db.products.updateMany(
{ category: "Electronics" },
{ $inc: { stock: 10 } }
)
// jaha kahi bhee category : Electronics hogi vha par stock ko 10 increse kar dega
// many placess par apply hoga

// Using $push to Add to Arrays
// array me kuch bhee add karne ke liye
db.products.updateOne(
{ name: "Wireless Mouse" },
{ $push: { tags: "new tag" } }
)