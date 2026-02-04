<?php
// Simple email test script
// Upload this to your cPanel and visit: https://shreejangamajyothi.com/test-email.php

$to = 'support@shreejangamajyothi.com';
$subject = 'Email Test from Website';
$message = 'This is a test email to verify that PHP mail is working correctly on your server.';
$headers = 'From: noreply@shreejangamajyothi.com' . "\r\n" .
           'Reply-To: noreply@shreejangamajyothi.com' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo '<h2>✅ Email Test Successful!</h2>';
    echo '<p>Test email sent to: ' . $to . '</p>';
    echo '<p>Check your email inbox.</p>';
} else {
    echo '<h2>❌ Email Test Failed!</h2>';
    echo '<p>There might be an issue with the server mail configuration.</p>';
    echo '<p>Contact your hosting provider for assistance.</p>';
}

// Display server info
echo '<hr>';
echo '<h3>Server Information:</h3>';
echo '<p><strong>PHP Version:</strong> ' . phpversion() . '</p>';
echo '<p><strong>Server:</strong> ' . $_SERVER['SERVER_SOFTWARE'] . '</p>';
echo '<p><strong>Mail Function:</strong> ' . (function_exists('mail') ? 'Available' : 'Not Available') . '</p>';
?>