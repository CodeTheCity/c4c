<?php
    //https://github.com/lunaroverlord/c4c.git
    /*
    $mysqli = new mysqli("lunaroverlord.cn3imgfeosz7.eu-west-1.rds.amazonaws.com", "maksis", "esmugejs", "c4c");
    $skills = array("pump", "shower");
    array_walk($skills, function (&$v, $k) { $v = "'" . $v . "'"; });
    $skillsQuery = implode($skills, ',');
    //$query = "SELECT u.name, u.location FROM users u, links, services s WHERE u.id=links.uid AND s.id=links.sid AND s.name IN ($skillsQuery)";
    $res = $mysqli->query("SELECT u.name, u.location FROM users u,links,services s WHERE u.id=links.uid AND s.id=links.sid AND s.name IN ($skillsQuery)");
    $results = "";
    while($row = mysqli_fetch_assoc($res))
    {
    	$results .= $row["name"] . " - " . $row["location"];
    	$results .= "<br/>";
    }
    */
    ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <title>Cyclists4Cyclists</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="c4c.css">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
  <link rel="stylesheet" href="bootstrap.min.css">
  <link rel="stylesheet" href="http://openlayers.org/en/v3.1.1/css/ol.css" type="text/css">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <script src="http://openlayers.org/en/v3.1.1/build/ol.js" type="text/javascript"></script>
  <script src="c4c.js"></script>


</head>
<body>
<div id="demo"><?=$results?></div>

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

    <div id="cbp-fbscroller" class="cbp-fbscroller">
	<section id="fbsection1"></section>
	<section id="fbsection2"></section>
</div>
  
<div class="container">

    
    <h1>Welcome to cyclists4cyclists!</h1>
<br>
 
<div class="container">
        <br>
        <div class="row">
            <div class="col-md-5">
                <ul class="nav nav-pills nav-stacked">
                    <li class="active"><a href="#">What you need!</a></li> <br>


                    <div class="container-fluid">
                             <div class="col-xs-4" option>
                            <i class="fa fa-home fa-5x"></i>

                        <div class="checkbox">
                        <label class="checkbox-inline"><input type="checkbox" value="shelter">Shelter</label>
                        </div> </div>
                        <div class="col-xs-4" option>
                            <i class="fa fa-cutlery fa-5x"></i>

                        <div class="checkbox">
                        <label class="checkbox-inline"><input type="checkbox" value="house">Hospitality</label>
                        </div> </div>

                        <div class="col-xs-4" option>
                            <i class="fa fa-wrench fa-5x"></i>

                        <div class="checkbox">

                        <label class="checkbox-inline"><input type="checkbox" value="kit">Toolkit</label>
                        </div> </div>
                    </div>

                    <div class="container-fluid">
                        <div class="col-xs-4" option>
                            <i class="fa fa-comments fa-5x"></i>
                        <div class="checkbox">
                        <label class="checkbox-inline"><input type="checkbox" value="chat">Chatter</label>
                        </div> </div>

                        <div class="col-xs-4" option>
                            <img src="shower.png" width="60%">
                        <div class="checkbox">
                        <label class="checkbox-inline option"><input type="checkbox" value="shower">Shower</label>
                        </div> </div>

                        <div class="col-xs-4" option>
                            <i class="fa fa-signal fa-5x"></i>
                        <div class="checkbox">
                        <label class="checkbox-inline option"><input type="checkbox" value="wifi">Wifi</label>
                        </div> </div>
                    </div>

                                        <div class="container-fluid">
                        <div class="col-xs-4" option>
                            <i class="fa fa-bed fa-5x"></i>
                        <div class="checkbox">
                        <label class="checkbox-inline"><input type="checkbox" value="bed">Rest</label>
                        </div> </div>

                        <div class="col-xs-4" option>
                            <i class="fa fa-birthday-cake fa-5x"></i>
                        <div class="checkbox">
                        <label class="checkbox-inline option"><input type="checkbox" value="cake">Celebrate</label>
                        </div> </div>

                        <div class="col-xs-4" option>
                            <i class="fa fa-bicycle fa-5x"></i>
                        <div class="checkbox">
                        <label class="checkbox-inline option"><input type="checkbox" value="bicycle">Bicycle</label>
                        </div> </div>
                    </div>

<div class="container-fluid">
                        <div class="col-xs-4" option>
                            <i class="fa fa-futbol-o fa-5x"></i>
                        <div class="checkbox">
                        <label class="checkbox-inline"><input type="checkbox" value="soccer">Sports</label>
                        </div> </div>

                        <div class="col-xs-4" option>
                            <i class="fa fa-umbrella fa-5x"></i>
                        <div class="checkbox">
                        <label class="checkbox-inline option"><input type="checkbox" value="umbrella">Umbrella</label>
                        </div> </div>

                        <div class="col-xs-4" option>
                            <i class="fa fa-unlock-alt fa-5x"></i>
                        <div class="checkbox">
                        <label class="checkbox-inline option"><input type="checkbox" value="locks">Locks</label>
                        </div> </div>
                    </div>

                </ul>
            </div>
            <div class="col-md-7">

                <ul class="nav nav-pills nav-stacked">
                    <li class="active"><a href="#">Find your cycle buddy!</a></li>
                </ul>
	    <div id="map" class="map"><div id="popup"></div></div>
	    <script src="js.js"></script>
            </div>
        </div>
            </div>


    </body>
