<?php

$file = file_get_contents("index.html");

$last_head = "";
$array = array();
foreach (explode("\n", $file) as $row){
    if(empty(trim($row)) || strlen(trim($row)) < 5){
        continue;
    }
    $row = trim($row);
    if(strlen($row) < 50){
        $row = strtolower($row);
        $x = explode(" ", $row);
        $last_head = ucwords($x[0])."-".ucwords($x[2]);
    }else{
        $array[$last_head] = $row;
    }

}

foreach($array as $key => $val){
    print "\"$key\": \"$val\", ";
}


exit;
print preg_match_all('/<TextView android:id="false" android:layout_width="-2" android:layout_height="-2" android:text="(.*)"/', $file, $matches);
print preg_match_all('/<TextView android:textColor="resourceId:0x106000c" android:layout_width="-1" android:layout_height="-1" android:text="(.*)"/', $file, $matches2);

print_r($matches[1]);
print_r($matches2[1]);
foreach($matches[1] as $row){
    if(strpos($row, "\"") !== false){
        $row = substr($row,0, strpos($row, "\""));
    }
    print "\"$row\", ";
}
foreach($matches2[1] as $row){
    if(strpos($row, "\"") !== false){
        $row = substr($row,0, strpos($row, "\""));
    }
    $row = trim(substr($row, 2));
    print "\"$row\", ";
}