
const productsData = [
    // ====== LIPSTICKS ======
    {
        id: 1,
        name: "Velvet Matte Lipstick - Ruby Red",
        brand: "Lakme",
        category: "lips",
        type: "lipstick",
        price: 499,
        originalPrice: 699,
        rating: 4.5,
        reviews: 128,
        image: "Velvet Matte Lipstick - Ruby Red.png",
        images: [
            "Velvet Matte Lipstick - Ruby Red.png",
            "Velvet Matte Lipstick - Ruby Red2.png",
            "Velvet Matte Lipstick - Ruby Red3.png"
        ],
        description: "A rich, velvety matte lipstick that glides on smoothly and stays put for up to 12 hours. The Ruby Red shade is perfect for bold, statement looks.",
        features: ["12-hour long wear", "Hydrating formula", "Cruelty-free", "Paraben-free"],
        shades: ["Ruby Red", "Berry Pink", "Nude Brown", "Coral Peach"],
        inStock: true,
        bestSeller: true,
        newArrival: false
    },
    {
        id: 2,
        name: "Creamy Lip Gloss - Pink Shimmer",
        brand: "Maybelline",
        category: "lips",
        type: "lip-gloss",
        price: 349,
        originalPrice: 499,
        rating: 4.2,
        reviews: 95,
        image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=400",
        images: [
            "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=600",
            "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=600"
        ],
        description: "High-shine lip gloss with shimmer particles that make your lips look plump and glossy. Non-sticky formula with a sweet vanilla scent.",
        features: ["High-shine finish", "Non-sticky", "Vitamin E enriched", "Sweet vanilla scent"],
        shades: ["Pink Shimmer", "Clear Gloss", "Mauve Magic", "Berry Burst"],
        inStock: true,
        bestSeller: false,
        newArrival: true
    },
    {
        id: 3,
        name: "Liquid Matte Lipstick - Burgundy",
        brand: "MAC",
        category: "lips",
        type: "lipstick",
        price: 899,
        originalPrice: 1200,
        rating: 4.8,
        reviews: 210,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600",
        images: [
            "https://images.unsplash.com/photo-1631214503851-4adb77515934?w=600",
            "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600"
        ],
        description: "Iconic liquid matte lipstick in a stunning Burgundy shade. Provides full coverage in a single swipe with a comfortable matte finish.",
        features: ["Full coverage", "Transfer-proof", "Lightweight feel", "Precision applicator"],
        shades: ["Burgundy", "Classic Red", "Taupe", "Plum"],
        inStock: true,
        bestSeller: true,
        newArrival: false
    },
    {
        id: 4,
        name: "Lip Liner Pencil - Natural",
        brand: "Lakme",
        category: "lips",
        type: "lip-liner",
        price: 249,
        originalPrice: 350,
        rating: 4.0,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400",
        images: [
            "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=600"
        ],
        description: "Define and shape your lips with this creamy lip liner. The Natural shade works perfectly with any lip color for a polished look.",
        features: ["Creamy texture", "Long-lasting", "Smudge-proof", "Easy to sharpen"],
        shades: ["Natural", "Deep Rose", "Brown", "Clear"],
        inStock: true,
        bestSeller: false,
        newArrival: false
    },

    // ====== EYES ======
    {
        id: 5,
        name: "Smoky Eye Shadow Palette",
        brand: "Maybelline",
        category: "eyes",
        type: "eyeshadow",
        price: 799,
        originalPrice: 1099,
        rating: 4.6,
        reviews: 185,
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400",
        images: [
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600",
            "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=600"
        ],
        description: "12-shade eyeshadow palette with matte and shimmer finishes. Perfect for creating everything from natural day looks to dramatic smoky eyes.",
        features: ["12 versatile shades", "Highly pigmented", "Blendable formula", "Mirror included"],
        shades: ["Smoky Collection"],
        inStock: true,
        bestSeller: true,
        newArrival: false
    },
    {
        id: 6,
        name: "Waterproof Kajal - Intense Black",
        brand: "Lakme",
        category: "eyes",
        type: "kajal",
        price: 199,
        originalPrice: 299,
        rating: 4.3,
        reviews: 320,
        image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400",
        images: [
            "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=600"
        ],
        description: "Ultra-black waterproof kajal that defines your eyes with intense color. Smudge-proof formula lasts all day without fading.",
        features: ["Waterproof", "Smudge-proof", "Ophthalmologist tested", "24-hour wear"],
        shades: ["Intense Black"],
        inStock: true,
        bestSeller: true,
        newArrival: false
    },
    {
        id: 7,
        name: "Precision Liquid Eyeliner",
        brand: "MAC",
        category: "eyes",
        type: "eyeliner",
        price: 599,
        originalPrice: 799,
        rating: 4.7,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400",
        images: [
            "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600"
        ],
        description: "Ultra-fine tip liquid eyeliner for precise lines and perfect wings. The jet-black formula is quick-drying and stays put all day.",
        features: ["Ultra-fine tip", "Quick-drying", "Waterproof", "Jet-black pigment"],
        shades: ["Black", "Brown", "Blue"],
        inStock: true,
        bestSeller: false,
        newArrival: true
    },
    {
        id: 8,
        name: "Volume Express Mascara",
        brand: "Maybelline",
        category: "eyes",
        type: "mascara",
        price: 449,
        originalPrice: 599,
        rating: 4.4,
        reviews: 245,
        image: "volume mascara.png",
        images: [
            "volume mascara.png"
        ],
        description: "Volumizing mascara with a unique brush that coats every lash for dramatic, clump-free volume. Builds easily from natural to bold.",
        features: ["Clump-free formula", "Buildable volume", "Easy to remove", "Curved brush"],
        shades: ["Black", "Brown-Black"],
        inStock: true,
        bestSeller: true,
        newArrival: false
    },
    {
        id: 9,
        name: "Nude Eyeshadow Palette",
        brand: "Colorbar",
        category: "eyes",
        type: "eyeshadow",
        price: 650,
        originalPrice: 850,
        rating: 4.1,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400",
        images: [
            "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=600"
        ],
        description: "A curated palette of 8 nude shades perfect for everyday wear. Silky smooth texture with excellent color payoff.",
        features: ["8 nude shades", "Silky texture", "Long-lasting", "Everyday wear"],
        shades: ["Nude Collection"],
        inStock: true,
        bestSeller: false,
        newArrival: true
    },

    // ====== FACE ======
    {
        id: 10,
        name: "Flawless Foundation - Natural Beige",
        brand: "Lakme",
        category: "face",
        type: "foundation",
        price: 699,
        originalPrice: 999,
        rating: 4.5,
        reviews: 178,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
        images: [
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600",
            "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=600"
        ],
        description: "Lightweight liquid foundation that provides buildable medium-to-full coverage with a natural satin finish. Blends seamlessly for a flawless complexion.",
        features: ["Buildable coverage", "Satin finish", "SPF 15", "Oil-free formula"],
        shades: ["Natural Beige", "Ivory", "Warm Sand", "Honey", "Caramel"],
        inStock: true,
        bestSeller: true,
        newArrival: false
    },
    {
        id: 11,
        name: "HD Compact Powder",
        brand: "Maybelline",
        category: "face",
        type: "compact",
        price: 399,
        originalPrice: 549,
        rating: 4.2,
        reviews: 134,
        image: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?w=400",
        images: [
            "https://images.unsplash.com/photo-1599733594230-6b823276abcc?w=600"
        ],
        description: "Ultra-fine compact powder that sets makeup and controls shine. Provides a smooth, matte finish that lasts all day.",
        features: ["Ultra-fine texture", "Shine control", "Portable mirror", "Buildable coverage"],
        shades: ["Light", "Medium", "Medium-Dark", "Dark"],
        inStock: true,
        bestSeller: false,
        newArrival: false
    },
    {
        id: 12,
        name: "Highlighter Palette - Glow Kit",
        brand: "MAC",
        category: "face",
        type: "highlighter",
        price: 1199,
        originalPrice: 1599,
        rating: 4.9,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400",
        images: [
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600"
        ],
        description: "4-shade highlighter palette for an ethereal glow. Each shade is buttery soft and delivers intense luminosity for all skin tones.",
        features: ["4 stunning shades", "Buttery soft texture", "Intense glow", "Suitable for all skin tones"],
        shades: ["Glow Kit"],
        inStock: true,
        bestSeller: true,
        newArrival: true
    },
    {
        id: 13,
        name: "Blushing Cheeks - Rose Pink",
        brand: "Colorbar",
        category: "face",
        type: "blush",
        price: 549,
        originalPrice: 750,
        rating: 4.3,
        reviews: 76,
        image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400",
        images: [
            "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=600"
        ],
        description: "Silky smooth blush in a beautiful Rose Pink shade. Buildable color for a natural flush that lasts all day.",
        features: ["Silky texture", "Buildable color", "Long-lasting", "Natural finish"],
        shades: ["Rose Pink", "Peach", "Coral", "Berry"],
        inStock: true,
        bestSeller: false,
        newArrival: false
    },
    {
        id: 14,
        name: "Concealer Stick - Medium",
        brand: "Lakme",
        category: "face",
        type: "concealer",
        price: 399,
        originalPrice: 550,
        rating: 4.1,
        reviews: 112,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
        images: [
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600"
        ],
        description: "Full-coverage concealer stick that hides dark circles, blemishes, and imperfections. Creamy, blendable formula for a seamless finish.",
        features: ["Full coverage", "Creamy formula", "Easy to blend", "Long-wearing"],
        shades: ["Fair", "Light", "Medium", "Medium-Dark", "Dark"],
        inStock: true,
        bestSeller: false,
        newArrival: false
    },
    {
        id: 15,
        name: "Setting Spray - Matte Finish",
        brand: "MAC",
        category: "face",
        type: "setting-spray",
        price: 850,
        originalPrice: 1100,
        rating: 4.6,
        reviews: 143,
        image: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?w=400",
        images: [
            "https://images.unsplash.com/photo-1599733594230-6b823276abcc?w=600"
        ],
        description: "Professional setting spray that locks in your makeup for up to 16 hours. Fine mist provides a matte finish without disturbing your look.",
        features: ["16-hour wear", "Matte finish", "Fine mist nozzle", "Lightweight formula"],
        shades: ["Universal"],
        inStock: true,
        bestSeller: true,
        newArrival: false
    },

    // ====== NAILS ======
    {
        id: 16,
        name: "Gel Nail Polish - Cherry Red",
        brand: "Colorbar",
        category: "nails",
        type: "nail-polish",
        price: 299,
        originalPrice: 399,
        rating: 4.4,
        reviews: 87,
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
        images: [
            "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600"
        ],
        description: "Gel-finish nail polish that provides salon-quality shine without UV light. The Cherry Red shade adds a pop of color to any look.",
        features: ["Gel finish", "No UV needed", "Chip-resistant", "Quick-dry formula"],
        shades: ["Cherry Red", "Nude Pink", "Midnight Blue", "Glitter Gold", "Plum"],
        inStock: true,
        bestSeller: false,
        newArrival: true
    },
    {
        id: 17,
        name: "Matte Nail Polish Set (6 Pack)",
        brand: "Maybelline",
        category: "nails",
        type: "nail-polish",
        price: 599,
        originalPrice: 899,
        rating: 4.2,
        reviews: 65,
        image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400",
        images: [
            "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600"
        ],
        description: "Set of 6 trendy matte nail polishes in assorted colors. Long-lasting formula provides smooth, even coverage with a velvety matte finish.",
        features: ["6 trendy shades", "Matte finish", "Long-lasting", "Smooth application"],
        shades: ["Assorted Set"],
        inStock: true,
        bestSeller: true,
        newArrival: false
    },

    // ====== SKINCARE/TOOLS ======
    {
        id: 18,
        name: "Makeup Brush Set (12 Pieces)",
        brand: "Generic",
        category: "tools",
        type: "brushes",
        price: 899,
        originalPrice: 1299,
        rating: 4.5,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400",
        images: [
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600"
        ],
        description: "Professional 12-piece makeup brush set with synthetic bristles. Includes brushes for foundation, powder, blush, eyeshadow, and more. Comes with a faux leather case.",
        features: ["12 essential brushes", "Synthetic bristles", "Faux leather case", "Professional quality"],
        shades: ["Rose Gold Set", "Black Set"],
        inStock: true,
        bestSeller: true,
        newArrival: false
    },
    {
        id: 19,
        name: "Beauty Blender Sponge Set",
        brand: "Generic",
        category: "tools",
        type: "sponge",
        price: 249,
        originalPrice: 399,
        rating: 4.0,
        reviews: 178,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
        images: [
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600"
        ],
        description: "Set of 3 beauty blender sponges for flawless foundation and concealer application. Use damp for a dewy finish or dry for full coverage.",
        features: ["3-piece set", "Latex-free", "Reusable", "Works with all formulas"],
        shades: ["Pink Set"],
        inStock: true,
        bestSeller: false,
        newArrival: false
    },
    {
        id: 20,
        name: "Primer - Pore Minimizing",
        brand: "Lakme",
        category: "face",
        type: "primer",
        price: 550,
        originalPrice: 750,
        rating: 4.4,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?w=400",
        images: [
            "https://images.unsplash.com/photo-1599733594230-6b823276abcc?w=600"
        ],
        description: "Silky primer that minimizes the appearance of pores and creates a smooth canvas for makeup application. Extends makeup wear time.",
        features: ["Pore minimizing", "Silky smooth", "Extends makeup wear", "Oil-free"],
        shades: ["Universal"],
        inStock: true,
        bestSeller: false,
        newArrival: true
    },
    {
        id: 21,
        name: "Contour Kit - Light to Medium",
        brand: "MAC",
        category: "face",
        type: "contour",
        price: 1399,
        originalPrice: 1799,
        rating: 4.7,
        reviews: 92,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400",
        images: [
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600"
        ],
        description: "Professional contour and highlight kit with 6 shades for sculpting and defining facial features. Blendable powder formula for natural-looking contour.",
        features: ["6 versatile shades", "Blendable powder", "Professional quality", "Includes guide"],
        shades: ["Light to Medium", "Medium to Dark"],
        inStock: true,
        bestSeller: true,
        newArrival: false
    },
    {
        id: 22,
        name: "Micellar Cleansing Water",
        brand: "Maybelline",
        category: "skincare",
        type: "cleanser",
        price: 349,
        originalPrice: 450,
        rating: 4.3,
        reviews: 267,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
        images: [
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600"
        ],
        description: "Gentle micellar water that removes makeup, cleanses, and soothes skin in one step. No rinsing needed. Suitable for all skin types.",
        features: ["All-in-one cleanser", "No rinse needed", "Gentle formula", "For all skin types"],
        shades: ["Universal"],
        inStock: true,
        bestSeller: false,
        newArrival: false
    },
    {
        id: 23,
        name: "Eyebrow Pencil - Dark Brown",
        brand: "Colorbar",
        category: "eyes",
        type: "eyebrow",
        price: 299,
        originalPrice: 450,
        rating: 4.1,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400",
        images: [
            "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600"
        ],
        description: "Ultra-fine eyebrow pencil with a spoolie brush for natural-looking brows. The retractable design makes it perfect for on-the-go touch-ups.",
        features: ["Ultra-fine tip", "Built-in spoolie", "Retractable", "Natural finish"],
        shades: ["Dark Brown", "Medium Brown", "Black", "Blonde"],
        inStock: true,
        bestSeller: false,
        newArrival: false
    },
    {
        id: 24,
        name: "Makeup Remover Wipes (25 Pack)",
        brand: "Lakme",
        category: "skincare",
        type: "wipes",
        price: 199,
        originalPrice: 299,
        rating: 3.9,
        reviews: 145,
        image: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?w=400",
        images: [
            "https://images.unsplash.com/photo-1599733594230-6b823276abcc?w=600"
        ],
        description: "Pre-moistened makeup remover wipes that gently remove all traces of makeup including waterproof mascara. Enriched with aloe vera.",
        features: ["25 wipes per pack", "Removes waterproof makeup", "Aloe vera enriched", "Gentle on skin"],
        shades: ["Universal"],
        inStock: true,
        bestSeller: false,
        newArrival: false
    }
];

// Testimonials Data
const testimonialsData = [
    {
        id: 1,
        name: "Priya Sharma",
        location: "Meerut, UP",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
        rating: 5,
        text: "Amazing collection of makeup products! The prices are so affordable compared to local stores. My go-to site for all beauty needs!"
    },
    {
        id: 2,
        name: "Ananya Singh",
        location: "Delhi, NCR",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
        rating: 4,
        text: "Love the variety of lipstick shades available. The product descriptions are very helpful. Wish they had more skincare options!"
    },
    {
        id: 3,
        name: "Ritu Gupta",
        location: "Noida, UP",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
        rating: 5,
        text: "The website is so easy to use and the filters make finding products a breeze. Got my favorite MAC lipstick at a great price!"
    },
    {
        id: 4,
        name: "Sneha Verma",
        location: "Meerut, UP",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        rating: 4,
        text: "Great experience shopping here. The product images are very accurate and the cart feature works smoothly."
    }
];