function calculateTotal() {
    // Prices in USD
    var curryPrice = parseFloat(document.getElementById("curry").value);
    var biryaniPrice = parseFloat(document.getElementById("biryani").value);
    var breakfastPrice = parseFloat(document.getElementById("breakfast").value);
    var lunchPrice = parseFloat(document.getElementById("lunch").value);
    var dinnerPrice = parseFloat(document.getElementById("dinner").value);

    // Quantities
    var curryQuantity = parseInt(document.getElementById("quantityCurry").value);
    var biryaniQuantity = parseInt(document.getElementById("quantitybiriyani").value);
    var breakfastQuantity = parseInt(document.getElementById("quantitybreakfast").value);
    var lunchQuantity = parseInt(document.getElementById("quantitylunch").value);
    var dinnerQuantity = parseInt(document.getElementById("quantitydinner").value);

    // Delivery charge and tip
    var deliveryCharge = parseFloat(document.getElementById("delivery").value);
    var tipPercentage = parseFloat(document.getElementById("tip").value);

    // Total items and subtotal in USD
    var totalItems = curryQuantity + biryaniQuantity + breakfastQuantity + lunchQuantity + dinnerQuantity;
    var subtotalUSD = (curryPrice * curryQuantity) + (biryaniPrice * biryaniQuantity) + (breakfastPrice * breakfastQuantity) + (lunchPrice * lunchQuantity) + (dinnerPrice * dinnerQuantity);

    // Currency conversion rates
    var exchangeRate = 1.0; // Default to USD
    var currency = document.getElementById("currency").value;
    switch(currency) {
        case "EUR":
            exchangeRate = 0.89; // Example exchange rate for EUR
            break;
        case "GBP":
            exchangeRate = 0.78; // Example exchange rate for GBP
            break;
        case "INR":
            exchangeRate = 74.2; // Example exchange rate for INR
            break;
        
    }

    // Calculate subtotal in selected currency
    var subtotal = subtotalUSD * exchangeRate;

    // Calculate tip amount and total amount in selected currency
    var tipAmount = (subtotal * tipPercentage) / 100;
    var totalAmount = subtotal + deliveryCharge + tipAmount;

    // Update HTML elements with calculated values
    document.getElementById("totalItems").innerHTML = totalItems;
    document.getElementById("subtotal").innerHTML = subtotal.toFixed(2) + " " + currency;
    document.getElementById("deliveryCharge").innerHTML = deliveryCharge.toFixed(2) + " " + currency;
    document.getElementById("tipAmount").innerHTML = tipAmount.toFixed(2) + " " + currency;
    document.getElementById("totalAmount").innerHTML = totalAmount.toFixed(2) + " " + currency;

    // Show "Proceed to Checkout" button
    document.getElementById("checkoutButton").style.display = "block";
    
}








