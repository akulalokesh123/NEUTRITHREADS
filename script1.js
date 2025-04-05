document.addEventListener("DOMContentLoaded", function () {
    
    // Product container navigation (redirect to product page or section)
    document.querySelectorAll(".product-box").forEach(product => {
        product.addEventListener("click", function () {
            window.location.href = "product.html"; // Change this URL as needed
        });
    });
});