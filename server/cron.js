Meteor.functions = {
  cronjob: function() {
    SyncedCron.add({
      name: 'Crunch some important numbers for the marketing department',
      schedule: function(parser) {
        // parser is a later.parse object
        return parser.recur().every(5).second();
      },
      job: function() {
        var mothers = Mothers.find().fetch()
        for (var i = mothers.length - 1; i >= 0; i--) {
          var number = "+1".concat(mothers[i].phoneNumber.split(" ").join(""));
          var week = mothers[i].numWeeksPreggo;
          var message = Texts.find({week: week}).fetch()[1];

          console.log(number);
          console.log(week);
          console.log(message);
        };
        Meteor.call("sendMessage", message);
      }
    });
    SyncedCron.start();
  }
}