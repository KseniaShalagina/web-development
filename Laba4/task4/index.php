<?php
$mas = [
    [
        'name' => 'Ksenia',
        'age' => '20',
        'city' => 'Yoshkar-Ola'
    ],
    [
        'name' => 'Diana',
        'age' => '21',
        'city' => 'Kazan'
    ],
    [
        'name' => 'Kate',
        'age' => '25',
        'city' => 'Cheboksary'
    ],
    [
        'name' => 'Ann',
        'age' => '30',
        'city' => 'Moscow'
    ]
];

$html = "<ul>";
foreach ($mas as $user) {
    $html .= "<li>" . "Name: " . $user['name'] . "; Age: " . $user['age'] . "; City: " . $user['city'] . "</li>";
}
$html .= "</ul>";
echo $html;