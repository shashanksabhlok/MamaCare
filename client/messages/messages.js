if (Meteor.isClient) {
	Template.messages.events({


	});

	Template.messages.helpers({
		messages: function() {
            var messages = [{message:"test1"}, {message:"test2"}, {message:"test3"}, {message:"test4"}];
            return messages;


        }

	});


}