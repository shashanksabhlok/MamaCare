
MAMA = new Mongo.Collection('MAMA')

MAMA = new SimpleSchema({
      Month: {
       type: Number,
       label: "Number of Months",
       max:9
   },
   Week: {
       type: String,
       label: "Number of Weeks",
       max: 5
   },
   Text_Message: {
       type: String,
       label: "Message to be sent"
   }

   // Phone_number: {
   //    type: Integer,
   //    number: +1
   // }
});

Texts = new Mongo.Collection('Texts');

//DONT UNCOMMENT. WILL INSERT INTO DATABASE AGAIN

 // Texts.insert({week:"26",message:"Regular clinic visits help detect problems early"})
// Texts.insert({week: 5,message:"Regular clinic visits help detect problems early. They keep you healthy and your baby free from HIV. Find out where your nearest clinic is."});
// Texts.insert({week:"6",message:"Regular clinic visits help detect problems early. They keep you healthy and your baby free from HIV. Find out where your nearest clinic is."});
// Texts.insert({week:"7",message:"Lots of pregnant women have HIV. You are not alone. With the right care you can still have a healthy pregnancy and a healthy baby."});
// Texts.insert({week:"8",message:"You can get free HIV medicine, called ARVs, at the clinic. This will help prevent transmission of HIV to your baby and keep you healthy."});
// Texts.insert({week:"9",message:"You are at higher risk of malaria. Stay safe with insecticide-treated nets. Tuck yourself in at night to keep mosquitoes away."});
// Texts.insert({week:"10",message:"It can be hard to accept you have HIV, but accepting it helps you live a normal life. Talk to someone you trust, in the clinic or at home."});
// Texts.insert({week:"11",message:"Look after yourself and protect your baby from HIV. Continue your HIV medicine (ARV) or start it right away. Get it free at the clinic."});
// Texts.insert({week:"12",message:"ARVs help keep you healthy. If you feel sick, nibble on dry biscuits and try having small meals but plenty of them. Don't stop taking ARV."});
// Texts.insert({week:"13",message:"Continue your HIV medicines or start them next week. Remember to take them every day to help you stay well for your baby."});
// Texts.insert({week:"14",message:"Your baby can suck his thumb now! He's getting ready to breastfeed as soon as he is born. Make sure you continue taking your ARVs."});
// Texts.insert({week:"15",message:"HIV medicine fights the HIV virus and protects your baby. You will have fewer side effects  as your body gets used to the medicine"});
// Texts.insert({week:"16",message:"Your partner needs to get an HIV test, too. If you haven't told him, tell him you both need to get tested. You can plan your care together."});
// Texts.insert({week:"17",message:"Tell a friend or someone you trust about your HIV. They can help you stick to the treatment. It's important to take your medicine every day."});
// Texts.insert({week:"18",message:"Your baby is moving more. You will feel him soon. Take iron and folic-acid pills as well as ARVs to keep you and your baby healthy."});
// Texts.insert({week:"19",message:"Your baby has her major organs now; her heart, her lungs and her liver. If you feel too sick to take ARV, ask your health worker for help"});
// Texts.insert({week:"20",message:"Condoms stop the transmission of HIV and other diseases. So even though you are pregnant, you still need to use them. Ask at the clinic."});
// Texts.insert({week:"21",message:"Your baby can hear your voice, so talk to him! Try to eat lots of fruits, vegetables and meat. This will help with ARV side-effects."});
// Texts.insert({week:"22",message:"To prevent TB, you can get free pills at the clinic to protect yourself. As at the clinic about other ways to look after yourself."});
// Texts.insert({week:"23",message:"It's not too early to think about feeding your baby. Talk to your health care worker about the right choices for you and your baby."});
// Texts.insert({week:"24",message:"Create a support network of people who will help you cope with living with HIV. This way, you will always have help when you need it."});
// Texts.insert({week:"25",message:"A sore mouth is a common problem if you have HIV. Try rinsing with warm salt water. If it doesn't work, head to the clinic for treatment."});

// // // Profile Images Collection
// ProfileImages = new FS.Collection("ProfileImages", {
//     stores: [new FS.Store.GridFS("ProfileImages")]
// });

// ProfileImages.allow({
//   insert:function(userId,doc){
//     return true;
//   },
//   update:function(userId,doc,fields,modifier){
//    return true;
//   },
//   download:function(){
//     return true;
//   }
// });

// UserImages = new Mongo.Collection("UserImages");

// Posts = new Mongo.Collection("posts");

// Posts.attachSchema(new SimpleSchema({
//     body: {
//         type: String,
//         max: 500
//     },
//     userId: {
//         type: String,
//         autoValue: function(){return Meteor.userId()}
//     },
//     username:{
//         type: String,
//         autoValue: function(){return Meteor.users.findOne({_id: this.userId}).username}
//     },
//     createdAt: {
//         type: Date,
//         autoValue: function(){return new Date()}
//     }
// }));

// Posts.allow({
//   insert:function(userId,doc){
//     return true;
//   }
// });

// UserImages.allow({
// insert: function(){
// return true;
// },
// update: function(userId, doc, fields, modifier){
// return true;
// }
// });

