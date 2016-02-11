Meteor.publish('mothers', function(){
	return Mothers.find();
});

Meteor.publish('mymothers', function(){
	return Mothers.find({user: this.userId});
});