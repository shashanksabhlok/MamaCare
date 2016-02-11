Mothers = new Mongo.Collection('mothers');

Mothers.helpers({

});

Mothers.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

