<?php
	//https://github.com/lunaroverlord/c4c.git
	$keywords = $_GET["keywords"];
	$mysqli = new mysqli("lunaroverlord.cn3imgfeosz7.eu-west-1.rds.amazonaws.com", "maksis", "esmugejs", "c4c");
	//$kwList = array("pump", "shower");
	$kwList = explode(",",$keywords);
	array_walk($kwList, function (&$v, $k) { $v = "'" . $v . "'"; });
	$housesQuery = implode($kwList, ',');
	$query = "SELECT u.name, u.location FROM users u, links, services s WHERE u.id=links.uid AND s.id=links.sid AND s.name IN ($housesQuery)";
	//echo $query;
	$res = $mysqli->query("SELECT u.name, u.location FROM users u,links,services s WHERE u.id=links.uid AND s.id=links.sid AND s.name IN ($housesQuery)");
	$results = array();
	while($row = mysqli_fetch_assoc($res))
	{
		$results[] = array($row["name"], $row["location"]);
	}
	echo json_encode($results);
?>
