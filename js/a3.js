// JavaScript Document



function sendRequest(query) {
		
	//console.log("Query term: " + query);
	
	/*var url = "https://maps.googleapis.com/maps/api/place/search/xml?";
	url += "location=28.600479,-81.2013";
	url += "&rankby=distance";
	url += "&type=food";|cafe|restaurant
	url += "&keyword=$action";
	url += "&sensor=false";
	url += "&key=$apiKey";
	
	var xhr = $.ajax({
	  url: url,
	  dataType: "xml",
	  success: function(){
		  if( console && console.log ){
		  console.log(xhr.responseXML);
	  }}
	}).done(function() { 
	  $('#view').append(responseXML);
});*/
	/**/
	var url = "maps.php";
	
	var xhr = new XMLHttpRequest();

	if (xhr) {
		xhr.onreadystatechange = function() { 
			displayResponses(xhr);
		}
		xhr.open("GET", url + "?" + "find=" + query, true);
		xhr.send(null);
	}
}


function displayResponses(xhr) {
	if (xhr.readyState == 4) {
		if (xhr.status == 200 || xhr.status == 304) {
			
			console.log("responseText is: " + xhr.responseText);
			
			var responseDiv = document.getElementById('view');
			
			responseDiv.innerHTML=xhr.responseText;

			
		}
	else if (xhr.status == 404) {
			console.log("Oops, file not found!");
		}
	}
}



/*window.onload = function() {
	var anchor = document.getElementsByTagName('a');
	
	for(var i=0; i<anchor.length; i++)
	{
		anchor[i].addEventListener('click', function(event) {
			event.preventDefault();
			sendRequested(this.firstChild.getAttribute('alt'));
			
			}	
		, false);
	}
	
}*/