var app = angular.module("redditApp", []);
app.controller('hipster', function($scope){

    $scope.master = {};
    $scope.newComment = {};

	$scope.posts = [
		{id:0, picture:"http://assets.creativity-online.com/images/work/full/l/e/n/Lenovo_MultimodeMoustacheLenovoYOGA90015.jpg",
		 title:"Master Stache", rating:0, date:1459442009693, author:"Timmy IPA Jones", post:"Pork belly deep v aesthetic artisan fixie, thundercats hoodie blue bottle humblebrag. Fap ugh cred banh mi slow-carb, cray meditation letterpress austin drinking vinegar organic selfies. Ethical master cleanse street art kogi meditation. Cray small batch brunch drinking vinegar, helvetica put a bird on it shabby chic. Butcher tattooed XOXO, iPhone vegan readymade typewriter. Salvia YOLO DIY microdosing, swag XOXO narwhal ramps messenger bag four loko fingerstache. Retro quinoa fap synth portland.",
		 comments: [{name: "LowRider Jenkins", post:"Mad Twists"}]},
		 {id:1, picture:"https://pbs.twimg.com/profile_images/3650441196/ff411189a50ed10be479906f0704684b.jpeg",
		 title:"Yahweh", rating:0, date:1459542302653, author:"Jebraldo Huggins", post:"Pork belly deep v aesthetic artisan fixie, thundercats hoodie blue bottle humblebrag. Fap ugh cred banh mi slow-carb, cray meditation letterpress austin drinking vinegar organic selfies. Ethical master cleanse street art kogi meditation. Cray small batch brunch drinking vinegar, helvetica put a bird on it shabby chic. Butcher tattooed XOXO, iPhone vegan readymade typewriter. Salvia YOLO DIY microdosing, swag XOXO narwhal ramps messenger bag four loko fingerstache. Retro quinoa fap synth portland.",
		 comments: [{name: "HandleMybar Stache", post:"Thou Shalt drink IPA and rest on the sabbath"}]},
		  {id:2, picture:"https://s-media-cache-ak0.pinimg.com/236x/00/b3/7f/00b37f65119a7f066e1c22223f9e0e5a.jpg",
		 title:"Deer Me Bro", rating:0, date:1459608738435, author:"Bambi Assassin", post:"Pork belly deep v aesthetic artisan fixie, thundercats hoodie blue bottle humblebrag. Fap ugh cred banh mi slow-carb, cray meditation letterpress austin drinking vinegar organic selfies. Ethical master cleanse street art kogi meditation. Cray small batch brunch drinking vinegar, helvetica put a bird on it shabby chic. Butcher tattooed XOXO, iPhone vegan readymade typewriter. Salvia YOLO DIY microdosing, swag XOXO narwhal ramps messenger bag four loko fingerstache. Retro quinoa fap synth portland.",
		 comments: [{name: "ShaveWhen?", post:"Sweater game 100!!"}]},
		 {id:3, picture:"http://ak1.polyvoreimg.com/cgi/img-set/cid/154096439/id/4oruynDX5BGgwQGcZFZllw/size/y.jpg",
		 title:"HipsteR GirL StarteR PacK", rating:0, date:1459805718435, author:"Chic Chick", post:"Pork belly deep v aesthetic artisan fixie, thundercats hoodie blue bottle humblebrag. Fap ugh cred banh mi slow-carb, cray meditation letterpress austin drinking vinegar organic selfies. Ethical master cleanse street art kogi meditation. Cray small batch brunch drinking vinegar, helvetica put a bird on it shabby chic. Butcher tattooed XOXO, iPhone vegan readymade typewriter. Salvia YOLO DIY microdosing, swag XOXO narwhal ramps messenger bag four loko fingerstache. Retro quinoa fap synth portland.",
		 comments: [{name: "BeanieMan Forever", post:"Are those my girls clothes?"}]}
	]

    $scope.update = function(data) {
	 	data.rating = 0;
	 	data.date = new Date();
        // $scope.master = angular.copy(data, {rating:0, date: Date()});
        $scope.posts.push(data)
        $scope.data = null;
        console.log($scope.posts)
      }; 

    $scope.makeComment = function(post){
    	if ( post.comments ) {
    		console.log(post.comments);
    	} else {
    		post.comments = [];
    	}
        post.comments.push($scope.newComment)
        $scope.newComment = {};
    }  


})