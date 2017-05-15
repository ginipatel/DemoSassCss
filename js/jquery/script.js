$(document).ready(function() {
	var chatList = [
		{
			"id": 1,
			"name": "Juan Melengue",
			"image": "./../images/profile-picture.jpg",
			"discription":"online"
		},
		{
			"id": 2,
			"name": "gini",
			"image": "../images/profile-picture.jpg"
		},
		{
			"id": 3,
			"name": "andy",
			"image": "../images/profile-picture.jpg"
		},
		{
			"id": 4,
			"name": "Juan Melengue",
			"image": "../images/profile-picture.jpg"
		}

	];

	$('.contact_btn').click(function(event) {
		console.log($(chatList).val());
	});

	function displayData(){
		
		$.map(chatList, function (value, index) {
				
				console.log('$("li").prepend("<div> "+ value.name + "</div>" ) ');
	
		
					
			
		})

	}
	displayData();
	
});