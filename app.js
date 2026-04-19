// ===== CART MANAGEMENT (localStorage) =====
function getCart() {
    return JSON.parse(localStorage.getItem('glamcart_cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('glamcart_cart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId, quantity = 1) {
    const cart = getCart();
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.image,
            quantity: quantity
        });
    }

    saveCart(cart);
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
}

function updateQuantity(productId, newQuantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart(cart);
        }
    }
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartItemCount() {
    const cart = getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
}

function updateCartCount() {
    const countElements = document.querySelectorAll('#cartCount');
    const count = getCartItemCount();
    countElements.forEach(el => {
        el.textContent = count;
        if (count > 0) {
            el.style.display = 'flex';
        } else {
            el.style.display = count > 0 ? 'flex' : 'flex';
        }
    });
}

// ===== TOAST NOTIFICATION =====
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== GENERATE STARS HTML =====
function generateStars(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }
    if (hasHalf) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }
    return starsHtml;
}

// ===== GENERATE PRODUCT CARD HTML =====
function generateProductCard(product) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    let badges = '';
    if (discount > 0) badges += `<span class="badge badge-sale">${discount}% Off</span>`;
    if (product.bestSeller) badges += '<span class="badge badge-best">Bestseller</span>';
    if (product.newArrival) badges += '<span class="badge badge-new">New</span>';

    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-badge">${badges}</div>
            <div class="product-image">
                <a href="product-detail.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </a>
                <div class="product-actions">
                    <button class="action-btn" onclick="window.location.href='product-detail.html?id=${product.id}'" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn" onclick="addToCart(${product.id})" title="Add to Cart">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">
                    <a href="product-detail.html?id=${product.id}">${product.name}</a>
                </h3>
                <div class="product-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">₹${product.price}</span>
                    ${product.originalPrice > product.price ? `<span class="original-price">₹${product.originalPrice}</span>` : ''}
                    ${discount > 0 ? `<span class="discount-percent">${discount}% off</span>` : ''}
                </div>
            </div>
            <div class="product-card-footer">
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-bag"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
}

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const backToTop = document.getElementById('backToTop');

    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// ===== HAMBURGER MENU =====
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close on link click
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Back to top
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `products.html?search=${encodeURIComponent(query)}`;
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    window.location.href = `products.html?search=${encodeURIComponent(query)}`;
                }
            }
        });
    }

    // Newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Subscribed successfully! (Demo)');
            newsletterForm.reset();
        });
    }

    // Update cart count on page load
    updateCartCount();

    // ===== HOMEPAGE SPECIFIC =====
    // Best Sellers Grid
    const bestSellerGrid = document.getElementById('bestSellerGrid');
    if (bestSellerGrid) {
        const bestSellers = productsData.filter(p => p.bestSeller).slice(0, 8);
        bestSellerGrid.innerHTML = bestSellers.map(p => generateProductCard(p)).join('');
    }

    // New Arrivals Grid
    const newArrivalGrid = document.getElementById('newArrivalGrid');
    if (newArrivalGrid) {
        const newArrivals = productsData.filter(p => p.newArrival);
        newArrivalGrid.innerHTML = newArrivals.map(p => generateProductCard(p)).join('');
    }

    // Testimonials
    const testimonialGrid = document.getElementById('testimonialGrid');
    if (testimonialGrid && typeof testimonialsData !== 'undefined') {
        testimonialGrid.innerHTML = testimonialsData.map(t => `
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <img src="${t.image}" alt="${t.name}" class="testimonial-avatar">
                    <div class="testimonial-info">
                        <h4>${t.name}</h4>
                        <p>${t.location}</p>
                    </div>
                </div>
                <div class="testimonial-rating">${generateStars(t.rating)}</div>
                <p class="testimonial-text">"${t.text}"</p>
            </div>
        `).join('');
    }
});