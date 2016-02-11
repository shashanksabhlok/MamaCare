if (Meteor.isClient) {

	Template.page2.helpers({
	});

	Template.page2.events({
		'click #button1' : function() {
			//Meteor.call("sendMessage");
		},
		'click #cron' : function() {
			Meteor.call("startCron");
		}
	});
}

