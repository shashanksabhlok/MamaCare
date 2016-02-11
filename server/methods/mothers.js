Meteor.methods({
  'addMother': function (params) {
    Mothers.insert(params);
  },
  'updateMother': function(id, params){
  	Mothers.update({
  		_id: id
  	},{ $set:params });
  },
  'removeMother': function(id){
  	Mothers.remove(id);
  }
});
