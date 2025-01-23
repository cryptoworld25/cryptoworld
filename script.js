// EmailJS configuration
emailjs.init('YOUR_PUBLIC_KEY'); // Remplacez par votre clé publique Email.js

document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Email envoyé avec succès !');
        }, function(error) {
            alert('Erreur lors de l\'envoi : ' + error.text);
        });
});

// Animation de la roue et pourcentage
document.addEventListener('DOMContentLoaded', function() {
    const percentageEl = document.getElementById('percentage');
    let percentage = 10;

    const interval = setInterval(() => {
        if (percentage < 70) {
            percentage += 10;
            percentageEl.textContent = percentage + '%';
        } else {
            clearInterval(interval);
        }
    }, 1000); // Augmente tous les 1s
});