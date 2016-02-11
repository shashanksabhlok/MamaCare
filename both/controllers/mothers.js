MothersController = AppController.extend({
  waitOn: function() {
    return this.subscribe('mothers');
  },
  data: {
    mothers: Mothers.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Mothers');
  }
});

MothersController.events({
  'submit .add-mother-form': function(event){
  		var name = event.target.name.value;
        var phoneNumber = event.target.phoneNumber.value;
        var address = event.target.address.value;
        var village = event.target.village.value;
        var pobox = event.target.pobox.value;
        var datevisit = event.target.datevisit.value;
        var numWeeksPreggo = event.target.numWeeksPreggo.value;
        var familyPhoneNumber = event.target.familyPhoneNumber.value;



        var params = {
        	name: name,
            phoneNumber: phoneNumber,
            address: address,
            village: village,
            pobox: pobox,
            datevisit: datevisit,
            numWeeksPreggo: numWeeksPreggo,
            familyPhoneNumber: familyPhoneNumber,

            user: Meteor.userId(),
            username: Meteor.user().username,
            createdAt: new Date()
        }


        //         var params = {
        //   name: name,
        //     phoneNumber: phoneNumber,
        //     address: address,
        //     village: village,
        //     pobox: pobox,
        //     datevisit: datevisit,
        //     numWeeksPreggo: numWeeksPreggo,
        //     familyPhoneNumber: familyPhoneNumber,
        //     user: Meteor.userId(),
        //     username: Meteor.user().username,
        //     createdAt: new Date()
        // }

        // Insert Mother
        Meteor.call('addMother', params);

        toastr.success('Mother Added');
        Router.go('/mothers');

        return false;
  }
});
