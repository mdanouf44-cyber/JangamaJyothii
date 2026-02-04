<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get form data
$input = json_decode(file_get_contents('php://input'), true);

$firstName = isset($input['firstName']) ? trim($input['firstName']) : '';
$lastName = isset($input['lastName']) ? trim($input['lastName']) : '';
$email = isset($input['email']) ? trim($input['email']) : '';
$phone = isset($input['phone']) ? trim($input['phone']) : '';
$subject = isset($input['subject']) ? trim($input['subject']) : '';
$message = isset($input['message']) ? trim($input['message']) : '';

// Validation
if (empty($firstName) || empty($lastName) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Please fill in all required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Please enter a valid email address']);
    exit;
}

// Email configuration - UPDATE THESE WITH YOUR DETAILS
$to = 'support@shreejangamajyothi.com'; // Your email address
$from = 'noreply@shreejangamajyothi.com'; // From address (use your domain)
$replyTo = $email; // Customer's email for replies

// Email content
$emailSubject = "New Contact Form Submission: " . $subject;
$emailBody = "
New contact form submission from your website:

Name: $firstName $lastName
Email: $email
Phone: $phone
Subject: $subject

Message:
$message

---
Sent from: shreejangamajyothi.com
Time: " . date('Y-m-d H:i:s') . "
IP Address: " . $_SERVER['REMOTE_ADDR'] . "
";

// Email headers
$headers = array(
    'From' => $from,
    'Reply-To' => $replyTo,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8'
);

// Send email
if (mail($to, $emailSubject, $emailBody, implode("\r\n", array_map(function($k, $v) {
    return "$k: $v";
}, array_keys($headers), $headers)))) {
    
    // Success response
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for contacting us! We will get back to you within 24 hours.'
    ]);
} else {
    // Error response
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send email. Please try again or contact us directly.'
    ]);
}
?>