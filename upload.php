<?php
if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["file"])) {
    $uploadDir = "uploads/";
    $uploadFile = $uploadDir . basename($_FILES["file"]["name"]);

    $filetype = pathinfo($uploadFile, PATHINFO_EXTENSION);
    if($filetype != "docx") {
        echo "Only .docx files are allowed!";
        exit;
    }

    if(move_uploaded_file($_FILES["file"]["temp_name"], $uploadFile)) {
        echo "File uploaded successfully: " . $uploadFile;
    } else {
        echo "Error uploading file!";
    }
}
?>