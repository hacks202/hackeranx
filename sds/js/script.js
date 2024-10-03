function addToCart(productName) {
    alert(productName + " به سبد خرید اضافه شد!");
}

function showSection(sectionId) {
    // مخفی کردن همه بخش‌ها
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // نمایش بخش انتخاب شده
    document.getElementById(sectionId).style.display = 'block';
}

// نمایش بخش محصولات به طور پیش‌فرض
showSection('products');