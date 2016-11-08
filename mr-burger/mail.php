<?php

header('Content-Type: application/json');

$name = $_POST['name'];
$phone = $_POST['phone'];
$street = $_POST['street'];
$message = "Сообщение от пользователя: $name";

$result = mail('lovelaw@yandex.ru', 'Тема письма', $message);

echo json_encode(array(
	'status' => $result
));