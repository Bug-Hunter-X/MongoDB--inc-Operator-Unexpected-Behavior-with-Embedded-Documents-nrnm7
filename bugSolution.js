```javascript
// Correct usage of $inc operator with $setOnInsert to handle missing embedded documents
db.collection.updateOne( { _id: 1 }, {
  $set: {
    'address.zipcode': { $inc: { $ifNull: ['$address.zipcode', 0], 1}}
  },
  $setOnInsert: {
    address: {}
  }
} );
```