const  Twit = require('twit');
const T = new Twit(require('./secret'));
const stream = T.stream('user');

var myFirstPublishSearch = {q: "#myfirstpublish", count: 10, result_type: "recent"}; 

stream.on('tweet', function (message) {
  const screenName = message.user.screen_name;
  const congrats = "🌹 roses are red, 🔵 violets are blue, 📦 published your first package? 😎 welcome to the cool crew";

  if (message.in_reply_to_screen_name === 'myfirstpublish') {
    T.post('statuses/update', { status: '@' + screenName + ' ' + congrats }, function(err, data, response) {
      console.log(err);
    })
  }
})
