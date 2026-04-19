document.addEventListener('DOMContentLoaded', () => {
    const productDetail = document.getElementById('productDetail');
    const relatedGrid = document.getElementById('relatedGrid');
    const breadcrumb = document.getElementById('detailBreadcrumb');

    if (!productDetail) return;

    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    const product = productsData.find(p => p.id === productId);

    if (!product) {
        productDetail.innerHTML = '<p style="text-align:center; padding:60px;">Product not found. <a href="products.html" style="color:var(--primary)">Browse Products</a></p>';
        return;
    }

    // Update page title
    document.title = `${product.name} - GlamCart`;
    if (breadcrumb) breadcrumb.textContent = product.name;

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    // Generate thumbnails
    const thumbnailsHtml = product.images.map((img, index) => `
        <div class="detail-thumb ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
            <img src="${img}" alt="${product.name}">
        </div>
    `).join('');

    // Generate shade options
    const shadesHtml = product.shades.map((shade, index) => `
        <span class="shade-option ${index === 0 ? 'active' : ''}" onclick="selectShade(this)">${shade}</span>
    `).join('');

    // Generate features
    const featuresHtml = product.features.map(f => `
        <li><i class="fas fa-check-circle"></i> ${f}</li>
    `).join('');

    productDetail.innerHTML = `
        <div class="detail-gallery">
            <div class="detail-main-image" id="mainImageContainer">
                <img src="${product.images[0]}" alt="${product.name}" id="mainImage">
            </div>
            <div class="detail-thumbnails">
                ${thumbnailsHtml}
            </div>
        </div>
        <div class="detail-info">
            <div class="detail-brand">${product.brand}</div>
            <h1>${product.name}</h1>
            <div class="detail-rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span>${product.rating} (${product.reviews} reviews)</span>
            </div>
            <div class="detail-price">
                <span class="current-price">₹${product.price}</span>
                ${product.originalPrice > product.price ? `<span class="original-price">₹${product.originalPrice}</span>` : ''}
                ${discount > 0 ? `<span class="discount-percent">${discount}% off</span>` : ''}
            </div>
            <div class="detail-description">
                <h3>Description</h3>
                <p>${product.description}</p>
            </div>
            <div class="detail-features">
                <h3>Key Features</h3>
                <ul>${featuresHtml}</ul>
            </div>
            ${product.shades.length > 1 ? `
                <div class="detail-shades">
                    <h3>Available Shades</h3>
                    <div class="shade-options">${shadesHtml}</div>
                </div>
            ` : ''}
            <div class="detail-quantity">
                <span>Quantity:</span>
                <div class="quantity-controls">
                    <button onclick="changeDetailQty(-1)">−</button>
                    <input type="number" value="1" min="1" max="10" id="detailQty" readonly>
                    <button onclick="changeDetailQty(1)">+</button>
                </div>
            </div>
            <div class="detail-actions">
                <button class="btn btn-primary" onclick="addDetailToCart(${product.id})">
                    <i class="fas fa-shopping-bag"></i> Add to Cart
                </button>
                <button class="btn btn-outline" onclick="buyNow(${product.id})">
                    <i class="fas fa-bolt"></i> Buy Now
                </button>
            </div>
            <div class="stock-status">
                ${product.inStock ? '<i class="fas fa-check-circle"></i> In Stock' : '<i class="fas fa-times-circle" style="color:var(--danger)"></i> Out of Stock'}
            </div>
        </div>
    `;

    // Related Products
    if (relatedGrid) {
        const related = productsData
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4);
        relatedGrid.innerHTML = related.map(p => generateProductCard(p)).join('');
    }
});

// ===== DETAIL PAGE FUNCTIONS =====
function changeMainImage(src, thumbEl) {
    document.getElementById('mainImage').src = src;
    document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
    thumbEl.classList.add('active');
}

function selectShade(el) {
    document.querySelectorAll('.shade-option').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
}

function changeDetailQty(change) {
    const input = document.getElementById('detailQty');
    let val = parseInt(input.value) + change;
    if (val < 1) val = 1;
    if (val > 10) val = 10;
    input.value = val;
}

function addDetailToCart(productId) {
    const qty = parseInt(document.getElementById('detailQty').value);
    addToCart(productId, qty);
}

function buyNow(productId) {
    const qty = parseInt(document.getElementById('detailQty').value);
    addToCart(productId, qty);
    window.location.href = 'cart.html';
}