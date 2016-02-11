if (Meteor.isServer) {

	Meteor.methods({
		'sendMessage' : function(message) {
			var accountSid = "ACa1cacba9c697c09c9fb8354f029d1c04";
			var authToken = "b6c8e323efb601645db8eb76df762f0e";
			var recipient = "+16472618819";
			var sender = "+19022001061";
			twilio = Twilio(accountSid, authToken);
			Meteor.wrapAsync(
			twilio.sendSms({
				to: recipient,
				from: sender,
				body: "Regular clinic visits help detect problems early. They keep you healthy and your baby free from HIV"
			}, function(err, responseData) {
				if (!err) {
					console.log(responseData.from);
					console.log(responseData.body);
				}
			}));
		},
		'startCron': function() {
			console.log("backend called");
			Meteor.functions.cronjob();
		}
	});
}