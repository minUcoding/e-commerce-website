document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('productsGrid');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');
    const sortSelect = document.getElementById('sortSelect');
    const priceSlider = document.getElementById('priceSlider');
    const priceValue = document.getElementById('priceValue');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const resetFiltersBtn = document.getElementById('resetFiltersBtn');
    const filterToggleMobile = document.getElementById('filterToggleMobile');
    const filtersSidebar = document.getElementById('filtersSidebar');
    const applyFiltersMobile = document.getElementById('applyFiltersMobile');
    const pageTitle = document.getElementById('pageTitle');
    const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');

    if (!productsGrid) return;

    // Get URL params
    const urlParams = new URLSearchParams(window.location.search);
    const urlCategory = urlParams.get('category');
    const urlBrand = urlParams.get('brand');
    const urlSearch = urlParams.get('search');
    const urlFilter = urlParams.get('filter');

    // Set initial filter from URL
    if (urlCategory) {
        const categoryRadio = document.querySelector(`input[name="category"][value="${urlCategory}"]`);
        if (categoryRadio) categoryRadio.checked = true;
        if (pageTitle) pageTitle.textContent = urlCategory.charAt(0).toUpperCase() + urlCategory.slice(1) + ' Products';
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = urlCategory.charAt(0).toUpperCase() + urlCategory.slice(1);
    }

    if (urlBrand) {
        const brandCheckbox = document.querySelector(`input[name="brand"][value="${urlBrand}"]`);
        if (brandCheckbox) brandCheckbox.checked = true;
        if (pageTitle) pageTitle.textContent = urlBrand + ' Products';
    }

    if (urlSearch) {
        if (pageTitle) pageTitle.textContent = `Search: "${urlSearch}"`;
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = 'Search Results';
    }

    if (urlFilter === 'new') {
        if (pageTitle) pageTitle.textContent = 'New Arrivals';
    }

    // Filter and render products
    function filterAndRender() {
        let filtered = [...productsData];

        // Category filter
        const selectedCategory = document.querySelector('input[name="category"]:checked')?.value;
        if (selectedCategory && selectedCategory !== 'all') {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }

        // Brand filter
        const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(cb => cb.value);
        if (selectedBrands.length > 0) {
            filtered = filtered.filter(p => selectedBrands.includes(p.brand));
        }

        // Price filter
        const maxPrice = parseInt(priceSlider?.value || 1500);
        filtered = filtered.filter(p => p.price <= maxPrice);

        // Rating filter
        const minRating = parseFloat(document.querySelector('input[name="rating"]:checked')?.value || 0);
        if (minRating > 0) {
            filtered = filtered.filter(p => p.rating >= minRating);
        }

        // Search filter
        if (urlSearch) {
            const query = urlSearch.toLowerCase();
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.brand.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query) ||
                p.type.toLowerCase().includes(query)
            );
        }

        // New arrivals filter
        if (urlFilter === 'new') {
            filtered = filtered.filter(p => p.newArrival);
        }

        // Sort
        const sortBy = sortSelect?.value || 'default';
        switch (sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        // Render
        if (filtered.length === 0) {
            productsGrid.style.display = 'none';
            if (noResults) noResults.style.display = 'block';
        } else {
            productsGrid.style.display = 'grid';
            if (noResults) noResults.style.display = 'none';
            productsGrid.innerHTML = filtered.map(p => generateProductCard(p)).join('');
        }

        if (resultsCount) resultsCount.textContent = `${filtered.length} Product${filtered.length !== 1 ? 's' : ''}`;
    }

    // Event listeners
    document.querySelectorAll('input[name="category"]').forEach(radio => {
        radio.addEventListener('change', filterAndRender);
    });

    document.querySelectorAll('input[name="brand"]').forEach(cb => {
        cb.addEventListener('change', filterAndRender);
    });

    document.querySelectorAll('input[name="rating"]').forEach(radio => {
        radio.addEventListener('change', filterAndRender);
    });

    if (priceSlider) {
        priceSlider.addEventListener('input', () => {
            if (priceValue) priceValue.textContent = `₹${priceSlider.value}`;
            filterAndRender();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', filterAndRender);
    }

    // Clear filters
    function clearAllFilters() {
        document.querySelector('input[name="category"][value="all"]').checked = true;
        document.querySelectorAll('input[name="brand"]').forEach(cb => cb.checked = false);
        document.querySelector('input[name="rating"][value="0"]').checked = true;
        if (priceSlider) {
            priceSlider.value = 1500;
            if (priceValue) priceValue.textContent = '₹1500';
        }
        if (sortSelect) sortSelect.value = 'default';
        filterAndRender();
    }

    if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', clearAllFilters);
    if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', clearAllFilters);

    // Mobile filter toggle
    if (filterToggleMobile && filtersSidebar) {
        filterToggleMobile.addEventListener('click', () => {
            filtersSidebar.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (applyFiltersMobile && filtersSidebar) {
        applyFiltersMobile.addEventListener('click', () => {
            filtersSidebar.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Initial render
    filterAndRender();
});