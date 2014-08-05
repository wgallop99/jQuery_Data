var myArr = [

{
  "login": "wgallop99",
  "id": 7799207,
  "avatar_url": "https://avatars.githubusercontent.com/u/7799207?v=2",
  "name": "William Gallop",
  "company": "The Iron Yard",
  "location": "Charleston, SC ",
  "email": "wgallop99@gmail.com",
  "public_repos": 14,
  "followers": 6,
  "following": 0
},

{
  "login": "lapty",
  "id": 8241367,
  "avatar_url": "https://avatars.githubusercontent.com/u/8241367?v=2",
  "name": "Charles Nguyen",
  "location": "Charleston, SC",
  "public_repos": 9,
  "followers": 7,
  "following": 16,

},

{
  "login": "ansleyjones",
  "id": 8247044,
  "avatar_url": "https://avatars.githubusercontent.com/u/8247044?v=2",
  "name": "Ansley Jones",
  "location": "",
  "public_repos": 6,
  "followers": 8,
  "following": 9

},

{
  "login": "natalie03",
  "id": 8239005,
  "avatar_url": "https://avatars.githubusercontent.com/u/8239005?v=2",
  "name": "Natalie Miller",
  "location": "Charleston, SC / Louisville, KY",
  "public_repos": 5,
  "followers": 5,
  "following": 0
},

{
  "login": "calweb",
  "id": 115030,
  "avatar_url": "https://avatars.githubusercontent.com/u/115030?v=2",
  "name": "Calvin Webster",
  "location": "Charleston, SC",
  "public_repos": 37,
  "followers": 64,
  "following": 96
}

];

$(document).ready(function() {

  var github = function(data, $domelement){
    var fragment = "";


      for (var i = 0; i < data.length; i++) {

        fragment += "<div class=\"profile\">"
          + "<img src=\"" + data[i].avatar_url + "\" alt=\"\">"
          + "<h3>" + data[i].name + "</h3>"
          + "<ul>"
          + "<li>" + "Location: " + data[i].location + "</p>"
          + "<li>" + "Followers: " + data[i].followers + "</li>"
          + "<li>" + "Following: " + data[i].following + "</li>"
          + "<li>" + "Public Repos: " + data[i].public_repos + "</li>"
          + "</ul>"
          + "</div>"
          }

        $domelement.append(fragment);

      }

      github(myArr, $('.container'))

});


//picture, name, login, followers, following, #ofrepos
////on a jquery document with 30 events
//.live(), .bind(), .delegate()
//when in doubt always use .on

//https://api.github.com/users/wgallop99
//use 5 users and iterate over the date
//make 5 profiles
