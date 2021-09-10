
<?php
$data = $_POST['inputs'];
$csv = array_map('str_getcsv', file('../csv/databse.csv'));
if (in_array($data, $csv)) {
    echo "welcome to your acount";

} else {
    $fp = fopen('../csv/databse.csv', 'a');
    fputcsv($fp, $data);
    fclose($fp);
}
?>
