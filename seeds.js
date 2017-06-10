var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Spicy jalapeno bacon ipsum dolor amet eiusmod filet mignon shankle dolore, cupidatat dolor lorem culpa flank id ut short loin. Labore pork loin porchetta, voluptate turducken ham hock jerky eiusmod non elit velit shoulder landjaeger id. Cillum bacon cupidatat qui pastrami. Capicola deserunt pig ut prosciutto in. Do eiusmod cow meatloaf picanha id jowl doner kielbasa proident tail capicola mollit cupim chicken. Swine doner hamburger andouille ham ipsum shankle. Jerky hamburger commodo swine venison, ad leberkas brisket nulla cow bresaola aliqua."
    },
    {
        name: "Desert Mesa", 
        image: "http://pickwick-dam.com/wp-content/uploads/2015/08/17991101764_fcb19c7311_k.jpg",
        description: "Spicy jalapeno bacon ipsum dolor amet eiusmod filet mignon shankle dolore, cupidatat dolor lorem culpa flank id ut short loin. Labore pork loin porchetta, voluptate turducken ham hock jerky eiusmod non elit velit shoulder landjaeger id. Cillum bacon cupidatat qui pastrami. Capicola deserunt pig ut prosciutto in. Do eiusmod cow meatloaf picanha id jowl doner kielbasa proident tail capicola mollit cupim chicken. Swine doner hamburger andouille ham ipsum shankle. Jerky hamburger commodo swine venison, ad leberkas brisket nulla cow bresaola aliqua."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Spicy jalapeno bacon ipsum dolor amet eiusmod filet mignon shankle dolore, cupidatat dolor lorem culpa flank id ut short loin. Labore pork loin porchetta, voluptate turducken ham hock jerky eiusmod non elit velit shoulder landjaeger id. Cillum bacon cupidatat qui pastrami. Capicola deserunt pig ut prosciutto in. Do eiusmod cow meatloaf picanha id jowl doner kielbasa proident tail capicola mollit cupim chicken. Swine doner hamburger andouille ham ipsum shankle. Jerky hamburger commodo swine venison, ad leberkas brisket nulla cow bresaola aliqua."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(camp){
            Campground.create(camp, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;
