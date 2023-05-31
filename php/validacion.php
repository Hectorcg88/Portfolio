<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Con esto recogemos los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Estos sirve para comprobar que los campos requeridos estan completos
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        echo "Por favor, completa todos los campos del formulario.";
    } else {
        // Este if es para ver si el email tiene un formato correcto
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "El correo electrónico no es válido, por favor utiliza uno correcto.";
        } else {
            echo "<h2>Formulario enviado correctamente</h2>";
            echo "<p>Nombre: " . $nombre . "</p>";
            echo "<p>Email: " . $email . "</p>";
            echo "<p>Mensaje: " . $mensaje . "</p>";
        }
    }
}
?>