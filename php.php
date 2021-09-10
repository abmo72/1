<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/jqery.css">
</head>
<body>



<div class="main-block">

    <form id="form" method="post" action="php/process.php" target="_blank">
        <h1>pesrsonal information</h1>
        <div class="info">
            <input class="fname" type="text" name="inputs[]" placeholder="Full name" id="name">
            <input type="email" name="inputs[]" placeholder="Email" id="email">
            <input type="number" name="inputs[]" placeholder="Phone number" id="phone">
            <input type="text" name="inputs[]" placeholder="Website" id="web">
        </div>
        <p>Message</p>
        <div>
            <textarea rows="4"></textarea>
        </div>
        <button type="submit" id="save" name="sub">Submit</button>
    </form>
</div>
</body>
</html>

<?php
echo "<html><body><table>\n\n";
echo "<thead><tr><th>"."Today is ". date("Y/m/d")."</th>";
echo "</tr></thead>";
$f = fopen("csv/databse.csv", "r");
    while (($line = fgetcsv($f)) !== false) {
    echo "<tr>";
        foreach ($line as $cell) {
        echo "<td>" . htmlspecialchars($cell) . "</td>";
        }
        echo "</tr>\n";
    }
    fclose($f);
    echo "\n</table></body></html>";
?>



