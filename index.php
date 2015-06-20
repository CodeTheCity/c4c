<?php
	//https://github.com/lunaroverlord/c4c.git
	$mysqli = new mysqli("lunaroverlord.cn3imgfeosz7.eu-west-1.rds.amazonaws.com", "maksis", "esmugejs", "c4c");
	$skills = array("pump", "shower");
	array_walk($skills, function (&$v, $k) { $v = "'" . $v . "'"; });
	$skillsQuery = implode($skills, ',');
	$query = "SELECT * FROM users, links, services WHERE users.id=links.uid AND services.id=links.sid AND services.name IN ($skillsQuery)";
	$res = mysqli_query("SELECT * FROM users WHERE users.id=links.uid AND services.id=links.sid AND services.name IN ($skillsQuery)");
	while($row = mysql_fetch_assoc($res))
	{
		echo $row["name"];
	}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Case</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="c4c.css">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>


</head>
<body>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">cyclists4cyclists</a>
    </div>
    <div>
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">About <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">About</a></li>
            <li><a href="#">Page 1-2</a></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li>
        <li><a href="#">Contacts</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><i class="fa fa-user"></i> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
  
<div class="container">
<img src="http://i62.tinypic.com/23kpx0z.png" width="100%">

    
    <h1>Welcome to cyclists4cyclists!</h1>
<br>
 
<div id="demo"></div>

  <div class="row">
<div class="col-md-5">
      <ul class="nav nav-pills nav-stacked">
        <li class="active"><a href="#">What you need!</a></li>
            <div class="checkbox">
      <label> <label class="checkbox-inline"><input type="checkbox" value="">Shower</label>
<label class="checkbox-inline"><input type="checkbox" value="">Bike Toolkit</label>
<label class="checkbox-inline"><input type="checkbox" value="">Air Pump</label> </label>
    </div>
    <div class="checkbox">
      <label> <label class="checkbox-inline"><input type="checkbox" value="">Spare tire</label>
<label class="checkbox-inline"><input type="checkbox" value="">Shelter</label>
<label class="checkbox-inline"><input type="checkbox" value="">Hospitality</label> </label>
    </div>
    
      </ul>
    </div>

    <div class="col-md-7">      <ul class="nav nav-pills nav-stacked">
        <li class="active"><a href="#">Find your cycle buddy!</a></li>
    
      </ul>

    </div>

</div>


</body>

    <footer class="footer">
      <div class="container">
        <p class="text-muted">Place sticky footer content here.</p>
      </div>
    </footer>
</html>

