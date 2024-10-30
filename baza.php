<?php
    $baza = "dane";
    $link = new mysqli('localhost', 'root', '');
    if($link->connect_errno) echo "Błąd połączenia " . $link->connect_error;

    $sql = "DROP DATABASE IF EXISTS $baza";

    $link->query($sql);
    if($link->errno) echo "Błą połączenia " . $link->error;
    $sql = "CREATE DATABASE $baza";
    $link->query($sql);
    $link->select_db($baza);
    $sql = "CREATE TABLE dane (
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
        nazwisko TEXT NOT NULL,
        imie TEXT NOT NULL,
        data DATE
        );";

    $link->query($sql);
    $sql = <<<EOT
        INSERT INTO dane (nazwisko, imie, data) 
        VALUES ('Iksinski', 'Jan', '2019-12-11'),
        ('Nowak', 'Adam', '2019-12-12'),
        ('Kowalski', 'Piotr', '2019-12-13');
EOT;
    if ($link->query($sql)) echo "Dane dodane";
    else echo "Błąd dodawania danych " . $link->error;

    $link->close();

?>