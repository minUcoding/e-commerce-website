document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartLayout = document.getElementById('cartLayout');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const modalClose = document.getElementById('modalClose');
    const checkoutFormElement = document.getElementById('checkoutFormElement');
    const checkoutForm = document.getElementById('checkoutForm');
    const orderSuccess = document.getElementById('orderSuccess');
    const applyCouponBtn = document.getElementById('applyCoupon');
    const couponInput = document.getElementById('couponInput');

    let couponApplied = false;
    let couponDiscount = 0;

    function renderCart() {
        const cart = getCart();

        if (cart.length === 0) {
            if (emptyCart) emptyCart.style.display = 'block';
            if (cartLayout) cartLayout.style.display = 'none';
            return;
        }

        if (emptyCart) emptyCart.style.display = 'none';
        if (cartLayout) cartLayout.style.display = 'grid';

        // Render items
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-image">
                        <a href="product-detail.html?id=${item.id}">
                            <img src="${item.image}" alt="${item.name}">
                        </a>
                    </div>
                    <div class="cart-item-details">
                        <h4><a href="product-detail.html?id=${item.id}">${item.name}</a></h4>
                        <p class="cart-item-brand">${item.brand}</p>
                        <p class="cart-item-price">₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}</p>
                    </div>
                    <div class="cart-item-actions">
                        <div class="cart-quantity">
                            <button onclick="updateCartItem(${item.id}, ${item.quantity - 1})">−</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateCartItem(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                        <button class="remove-item" onclick="removeCartItem(${item.id})">
                            <i class="fas fa-trash-alt"></i> Remove
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Calculate totals
        updateSummary(cart);
    }

    function updateSummary(cart) {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const totalOriginal = cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
        const productDiscount = totalOriginal - subtotal;
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        let additionalDiscount = 0;
        if (couponApplied) {
            additionalDiscount = Math.round(subtotal * couponDiscount);
        }

        const afterCoupon = subtotal - additionalDiscount;
        const tax = Math.round(afterCoupon * 0.18);
        const delivery = afterCoupon >= 499 ? 0 : 50;
        const total = afterCoupon + tax + delivery;
        const totalSavings = productDiscount + additionalDiscount;

        document.getElementById('totalItems').textContent = totalItems;
        document.getElementById('subtotal').textContent = `₹${subtotal}`;
        document.getElementById('discount').textContent = `-₹${productDiscount + additionalDiscount}`;
        document.getElementById('tax').textContent = `₹${tax}`;
        document.getElementById('delivery').textContent = delivery === 0 ? 'FREE' : `₹${delivery}`;
        document.getElementById('delivery').className = delivery === 0 ? 'free-delivery' : '';
        document.getElementById('total').textContent = `₹${total}`;
        document.getElementById('savings').textContent = `₹${totalSavings}`;

        const checkoutTotal = document.getElementById('checkoutTotal');
        if (checkoutTotal) checkoutTotal.textContent = `₹${total}`;
    }

    // Expose functions globally
    window.updateCartItem = function(productId, newQty) {
        if (newQty <= 0) {
            removeCartItem(productId);
            return;
        }
        updateQuantity(productId, newQty);
        renderCart();
        showToast('Cart updated!');
    };

    window.removeCartItem = function(productId) {
        removeFromCart(productId);
        renderCart();
        showToast('Item removed from cart');
    };

    // Coupon
    if (applyCouponBtn) {
        applyCouponBtn.addEventListener('click', () => {
            const code = couponInput.value.trim().toUpperCase();
            if (code === 'GLAM10') {
                couponApplied = true;
                couponDiscount = 0.10;
                showToast('Coupon GLAM10 applied! 10% off');
                applyCouponBtn.textContent = 'Applied ✓';
                applyCouponBtn.disabled = true;
                couponInput.disabled = true;
                renderCart();
            } else if (code === 'GLAM20') {
                couponApplied = true;
                couponDiscount = 0.20;
                showToast('Coupon GLAM20 applied! 20% off');
                applyCouponBtn.textContent = 'Applied ✓';
                applyCouponBtn.disabled = true;
                couponInput.disabled = true;
                renderCart();
            } else {
                showToast('Invalid coupon code');
            }
        });
    }

    // Checkout
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (checkoutModal) checkoutModal.style.display = 'flex';
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            if (checkoutModal) checkoutModal.style.display = 'none';
        });
    }

    if (checkoutModal) {
        checkoutModal.addEventListener('click', (e) => {
            if (e.target === checkoutModal) checkoutModal.style.display = 'none';
        });
    }

    if (checkoutFormElement) {
        checkoutFormElement.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate order placement
            const orderId = Math.floor(100000 + Math.random() * 900000);
            document.getElementById('orderId').textContent = orderId;

            if (checkoutForm) checkoutForm.style.display = 'none';
            if (orderSuccess) orderSuccess.style.display = 'block';

            // Clear cart
            localStorage.removeItem('glamcart_cart');
            updateCartCount();
        });
    }

    // Initial render
    renderCart();
});