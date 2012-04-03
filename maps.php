<?php
$action=$_GET['query'];

	if(!$action){
		print 'The search term isnt available';
	}
	else {
		print $action;
	}
	
	
	

?>