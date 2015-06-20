<?php
	//https://github.com/lunaroverlord/c4c.git
	$mysqli = new mysqli("lunaroverlord.cn3imgfeosz7.eu-west-1.rds.amazonaws.com", "maksis", "esmugejs", "c4c");
	$skills = array("pump", "shower");
	array_walk($skills, function (&$v, $k) { $v = "'" . $v . "'"; });
	$skillsQuery = implode($skills, ',');
	$query = "SELECT * FROM users, links, services WHERE users.id=links.uid AND services.id=links.sid AND services.name IN ($skillsQuery)";
	echo $query;
	//$res = mysqli_query("SELECT * FROM users WHERE users.id=links.uid AND services.id=links.sid AND services.name IN ($skillsQuery)");
?>
<!doctype html>
<html>
<head>
	<title>Cyclists 4 Cyclists</title>
</head>
<body>
	<div class="top">
		<div class="logo">logo</div>
		<div class="login">Login</div>
	</div>	
	<div class="map">map</div>
</body>
</html>
<?
	echo "Cyclists 4 Cyclists is a community service by cyclists for cyclists. Find anything you need on the road from the fellow cyclist near you.";

?>
