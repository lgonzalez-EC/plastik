<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $asunto = htmlspecialchars(trim($_POST["subject"]));
    $mensaje = htmlspecialchars(trim($_POST["message"]));

    $to = "plastikgto@gmail.com"; // Cambia por tu correo real
    $subject = "Nuevo mensaje de contacto: $asunto";
    $body = "Nombre: $nombre\nCorreo: $email\nAsunto: $asunto\nMensaje:\n$mensaje";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "ok";
    } else {
        echo "error";
    }
} else {
    echo "Solo se aceptan peticiones POST";
}

?>