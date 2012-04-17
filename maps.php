<?php
		include 'apiKey.php';
		
		$action = $_GET['find'];
		print '<p>';
		if(!$action){
			print 'The search term isnt available';
		}
		else {
			print 'Search Term: '.$action;
		}
		print '</p>';
		
		
			
		$url  = "https://maps.googleapis.com/maps/api/place/search/xml?";
		$url .= "location=28.600479,-81.2013"; 
		$url .= "&rankby=distance";
		$url .= "&type=food";/*|cafe|restaurant*/
		$url .= "&keyword=$action";
		$url .= "&sensor=false";
		$url .= "&key=$apiKey";


		$ch = curl_init();
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		$curlResponse = curl_exec($ch);
		
		if(curl_exec($ch) === false)
		{
			echo 'Curl error: ' . curl_error($ch);
		}
		else
		{
			echo 'Operation completed without any errors';
		}
		curl_close($ch);
    
    	$xmlObject = simplexml_load_string($curlResponse);
		
		if (!$xmlObject){
			print "No Response Found";
		}
		else{
			print "<pre>".htmlentities($xmlObject->asXML())."</pre>";
		}

?>