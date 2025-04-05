document.addEventListener("DOMContentLoaded", function () {
    // Browse button navigation
    document.querySelector(".browse-btn").addEventListener("click", function () {
        window.location.href = "shirt.html";
    });

    // View All button navigation
    document.querySelectorAll(".view-btn").forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".shop-modern").scrollIntoView({ behavior: "smooth" });
        });
    });
    document.querySelectorAll(".box").forEach(product => {
        product.addEventListener("click", function () {
            window.location.href = "shirt.html"; // Change this URL as needed
        });
    });

    // Product container navigation (redirect to product page or section)
    document.querySelectorAll(".product-box").forEach(product => {
        product.addEventListener("click", function () {
            window.location.href = "product.html"; // Change this URL as needed
        });
    });
});