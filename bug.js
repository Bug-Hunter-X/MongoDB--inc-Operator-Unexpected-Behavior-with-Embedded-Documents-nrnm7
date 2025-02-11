```javascript
// Incorrect usage of $inc operator for updating embedded document fields
db.collection.updateOne( { _id: 1 }, { $inc: { 'address.zipcode': 1 } } );
```