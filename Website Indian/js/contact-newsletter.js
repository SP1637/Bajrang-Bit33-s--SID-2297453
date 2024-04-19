// JavaScript for Contact Form Submission Confirmation and Newsletter Subscription
$(document).ready(function() {
    // Contact Form Submission Confirmation
    $("#form-wrap").submit(function(event) {
        event.preventDefault();
        $("#form-confirmation").css("display", "block");

        // Clear the contact form after submission
        $(this).trigger("reset");
    });

    // Newsletter Subscription Confirmation
    $(".newsletter__form").submit(function(event) {
        event.preventDefault();
        var email = $(".newsletter__input").val();
        alert("Thank you for subscribing! You will receive updates at " + email);

        // Clear the newsletter subscription form after submission
        $(this).trigger("reset");
    });
});
