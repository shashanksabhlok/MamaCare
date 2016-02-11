DashboardController = AppController.extend({
  waitOn: function() {
    return this.subscribe('mymothers');
  }
});

DashboardController.helpers({
  'mymothers': function(){
    return Mothers.find({user: Meteor.userId()});
  }
});



DashboardController.events({
 'submit .update-mother-form': function(event){
      var name = event.target.name.value;
        var phoneNumber = event.target.phoneNumber.value;
        var address = event.target.address.value;
        var country = event.target.country.value;
        var city = event.target.city.value;
        var zipcode = event.target.zipcode.value;
        var datevisit = event.target.datevisit.value;
        var numWeeksPreggo = event.target.numWeeksPreggo.value;
        var familyPhoneNumber = event.target.familyPhoneNumber.value;


        var id = event.target.id.value;

        var params = {
            name: name,
            phoneNumber: phoneNumber,
            address: address,
            country: country,
            city: city,
            zipcode: zipcode,
            datevisit: datevisit,
            numWeeksPreggo: numWeeksPreggo,
            familyPhoneNumber: familyPhoneNumber,

            updatedAt: new Date()
        }

            //       name: name,
            // phoneNumber: phoneNumber,
            // address: address,
            // country: country,
            // city: city,
            // zipcode: zipcode,
            // datevisit: datevisit,
            // numWeeksPreggo: numWeeksPreggo,
            // familyPhoneNumber: familyPhoneNumber,
            // updatedAt: new Date()

        // Insert Mother
        Meteor.call('updateMother', id, params);

        toastr.success('Mother Updated');
        $('#modal'+id).modal('hide');
        Router.go('/dashboard');

        return false;
  },
  'click .remove-mother': function(event){
     if (confirm("Are you sure?")) {
            // Delete Mother
            Meteor.call("removeMother", event.currentTarget.id);
            toastr.success('Mother Removed');
            return false;
        }
        return false;
  }
});
