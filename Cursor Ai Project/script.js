// Demo product catalog
const products = [
  {
    id: 1,
    name: "I Phone",
    price: 249.99,
    description: "With an all-new design powered by A19 Pro, iPhone 17 Pro features the best-ever performance, camera systems, and battery life in an iPhone.",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSTt6YHOYP51j6LNWmaIM0amCV6WJ5_fxfhedT_F8ZgrQFwUNzMqhAiM9XGXi_yK_B4ptNJq3sI",
    rating: 4.8,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 99.99,
    description: "Apple Watch Series 11 GPS 46mm Jet Black Aluminium Case with Sport Band",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ8JmMAb-3OSmPa5yQr_gLLSa8kJrEYDe91e0HtkM7JQXoBc39R-QVvxJUYmRIEuZWtUSGbsHg-zQ",
    rating: 4.1,
    category: "Electronics"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 32.5,
    description: "Portable, powerful, and waterproof bluetooth speaker.",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTS7ZaXF0UKJabGRg_hwtROmreqbRrm8rz5cOrSvHlCRQYnzxbOUuFU4vDKKsCr7fQd2a3ZZVixwA",
    rating: 3.7,
    category: "Electronics"
  },
  {
    id: 4,
    name: "VR Headset",
    price: 145.0,
    description: "Immersive virtual reality experience for gaming and media.",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSvC_TilOFKJ7gfw4AdpXPv9-G6_8EuVwo7tzrJupVTAXaSwYGHW4GaLo579TFyXEXpxUIkgso",
    rating: 4.5,
    category: "Electronics"
  },
  {
    id: 5,
    name: "Gaming Phone",
    price: 449.99,
    description: "The GT 30 Pro 5G+ is an esports gaming phone with GT Gaming Triggers,  and comes in Dark Flare and Blade White with 8GB/256GB or 12GB/256GB",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQyXZ7GgUKZCs-RVdLI8xClaVOcHqsvhh68nQDlxmMmaQS8f_54SHexlcpB_x8Bucz6p74qJYULPQ",
    rating: 4.4,
    category: "Electronics"
  },
  {
    id: 6,
    name: "GT Gaming Kit",
    price: 68.99,
    description: "Buy Infinix XG03 + X6873 Gaming Accessory Kit , which include Gaming Kit Box , GT MagCase , GT Cooling Fan  & Type C Cable ",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS_1b3sb5IGyDq8HkA3jYAdtrJFgJnvayhb8bGFzeneywdXoF9M7EGxhGTq5BsHxvXp_R0t_vXV",
    rating: 4.0,
    category: "Electronics"
  },
  {
    id: 7,
    name: "Apple Ipad Pro",
    price: 1299.99,
    description: "Apple IPad Pro 6th Gen (2022) 32.77 cm (12.9 inch) Wi - Fi Tablet 256 GB , Only Sliver ",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNIatgrtZ2tsqOCTpo24OD_gxkIl6dp7yKI-vXQLw4K5iZVH_UnpkNEmPn-RWxp5vtWzGibZ0r",
    rating: 4.7,
    category: "Electronics"
  },
  {
    id: 8,
    name: "Men's Casual Shirt",
    price: 29.99,
    description: "Premium cotton men's casual shirt with modern fit and comfortable design.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80",
    rating: 4.2,
    category: "Fashion",
    type: "Men's Wear"
  },
  {
    id: 9,
    name: "Women's Summer Dress",
    price: 45.50,
    description: "Elegant summer dress for women with floral pattern and breathable fabric.",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    category: "Fashion",
    type: "Women's Wear"
  },
  {
    id: 10,
    name: "Kids T-Shirt",
    price: 15.99,
    description: "Comfortable cotton t-shirt for kids with fun graphics and soft material.",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=400&q=80",
    rating: 4.3,
    category: "Fashion",
    type: "Men's Wear"
  },
  {
    id: 11,
    name: "Fresh Organic Apples",
    price: 3.99,
    description: "Crisp and juicy organic apples, perfect for healthy snacking.",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80",
    rating: 4.4,
    category: "Grocery"
  },
  {
    id: 12,
    name: "Whole Wheat Bread",
    price: 2.49,
    description: "Freshly baked whole wheat bread with natural ingredients.",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=400&q=80",
    rating: 4.1,
    category: "Grocery"
  },
  {
    id: 13,
    name: "Organic Milk",
    price: 4.99,
    description: "Fresh organic milk from grass-fed cows, rich in nutrients.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80",
    rating: 4.5,
    category: "Grocery"
  },
  // Fruits
  {
    id: 23,
    name: "Fresh Mango",
    price: 2.99,
    description: "Sweet and juicy mangoes, perfect for summer treats and smoothies.",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTRx_mHAk6cNa37mVJKbtGEIJZ3Fy9YjPwhyWjW20XJpj5hyMld2whIRVk2dJA4QCNBld1jHUaU3Q",
    rating: 4.7,
    category: "Grocery"
  },
  {
    id: 24,
    name: "Fresh Guava",
    price: 3.49,
    description: "Tropical guava fruit with sweet and tangy flavor, rich in vitamin C.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpi9fKirLmockGXJCCbgB-sPERO23z845MaA&s",
    rating: 4.4,
    category: "Grocery"
  },
  {
    id: 25,
    name: "Fresh Grapes",
    price: 4.99,
    description: "Crisp and sweet green grapes, perfect for snacking or wine making.",
    image: "https://extension.psu.edu/media/catalog/product/i/m/image_3777_1_2_1_262_1_23_1_28_2_11_2_2_2_38_1_94_7_2_24_46_6_414_49_21_45_2_25_15_1_9_1_18_9_6_5_1_21_3_29_8_2_1_13_5_1_2232.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=336&width=504&canvas=504:336",
    rating: 4.5,
    category: "Grocery"
  },
  {
    id: 26,
    name: "Watermelon",
    price: 6.99,
    description: "Large, juicy watermelon perfect for hot summer days and hydration.",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/natural-fresh-watermelon-50-kg-2226460779-ssns83j1.jpg",
    rating: 4.6,
    category: "Grocery"
  },
  {
    id: 27,
    name: "Muskmelon",
    price: 3.99,
    description: "Sweet and fragrant muskmelon with orange flesh and refreshing taste.",
    image: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/05/18150019/shutterstock_1376235665-1.jpg",
    rating: 4.3,
    category: "Grocery"
  },
  {
    id: 28,
    name: "Fresh Banana",
    price: 1.99,
    description: "Naturally sweet bananas, rich in potassium and perfect for energy.",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    category: "Grocery"
  },
  {
    id: 29,
    name: "Black Grapes",
    price: 5.49,
    description: "Premium black grapes with intense flavor and antioxidant properties.",
    image: "https://images.healthshots.com/healthshots/en/uploads/2022/01/18163418/black-grapes.jpg",
    rating: 4.6,
    category: "Grocery"
  },
  {
    id: 30,
    name: "Fresh Papaya",
    price: 3.99,
    description: "Tropical papaya fruit with sweet orange flesh and digestive enzymes.",
    image: "https://www.dreamfoodscaribe.com/wp-content/uploads/2024/07/papaya-fruit.webp",
    rating: 4.4,
    category: "Grocery"
  },
  // Vegetables
  {
    id: 31,
    name: "Fresh Broccoli",
    price: 2.49,
    description: "Nutrient-rich broccoli florets, perfect for stir-fries and salads.",
    image: "https://cdn.dotpe.in/longtail/store-items/8243872/e6h5rU52.webp",
    rating: 4.3,
    category: "Grocery"
  },
  {
    id: 32,
    name: "Fresh Carrots",
    price: 1.99,
    description: "Crisp and sweet carrots, excellent source of beta-carotene and vitamin A.",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80",
    rating: 4.5,
    category: "Grocery"
  },
  {
    id: 33,
    name: "Cauliflower",
    price: 2.99,
    description: "Fresh white cauliflower heads, versatile for cooking and low-carb recipes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXo1pTXhMFZ52F1Ydkf5Qd7yrdSOrGfYMIQA&s",
    rating: 4.2,
    category: "Grocery"
  },
  {
    id: 34,
    name: "Fresh Onions",
    price: 1.49,
    description: "Essential cooking ingredient, adds flavor to countless dishes and recipes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_c4mzTsqYoLWHNziM4mHQEEp6-qCek6H7bQ&s",
    rating: 4.4,
    category: "Grocery"
  },
  {
    id: 35,
    name: "Fresh Potatoes",
    price: 2.29,
    description: "Versatile potatoes, perfect for baking, frying, mashing, and roasting.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    category: "Grocery"
  },
  {
    id: 36,
    name: "Fresh Tomatoes",
    price: 3.99,
    description: "Ripe and juicy tomatoes, essential for salads, sauces, and cooking.",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80",
    rating: 4.5,
    category: "Grocery"
  },
  {
    id: 37,
    name: "Fresh Cabbage",
    price: 1.79,
    description: "Crisp green cabbage, perfect for coleslaw, stir-fries, and soups.",
    image: "https://i0.wp.com/live.staticflickr.com/65535/54473906289_30bdfbe1a2_z.jpg?resize=640%2C427&ssl=1",
    rating: 4.3,
    category: "Grocery"
  },
  {
    id: 38,
    name: "Fresh Cucumber",
    price: 1.99,
    description: "Cool and refreshing cucumbers, great for salads and healthy snacking.",
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=400&q=80",
    rating: 4.4,
    category: "Grocery"
  },
  {
    id: 39,
    name: "Bell Pepper",
    price: 2.99,
    description: "Colorful bell peppers in red, yellow, and green, rich in vitamin C.",
    image: "https://cdn.britannica.com/12/147312-050-BEC6A59E/Bell-peppers.jpg",
    rating: 4.5,
    category: "Grocery"
  },
  {
    id: 40,
    name: "Fresh Spinach",
    price: 2.49,
    description: "Nutrient-dense spinach leaves, perfect for salads, smoothies, and cooking.",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    category: "Grocery"
  },
  {
    id: 41,
    name: "Fresh Garlic",
    price: 1.29,
    description: "Aromatic garlic bulbs, essential for flavoring countless dishes and recipes.",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRziCY9BxVMX_tIGrTh3hGeuClUaWbaZIZMTc2SOgYnCORM5yo4RsKBTEpL7Q",
    rating: 4.7,
    category: "Grocery"
  },
  {
    id: 14,
    name: "ZARA's Men Shirt",
    price: 39.99,
    description: "Zara Mens Irregular Fit Shirt",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR0EujFD7IFm_dAyb0F5loL-DYcDQVCGK0UmsV94llCI_TC5g7SWOFt7DbMPRf404oCkIW8OB7qog",
    rating: 4.3,
    category: "Fashion",
    type: "Men's Wear",
    sizes: ["S","M","L"],
    sizePrices: { S: 34.99, M: 39.99, L: 44.99 }
  },
  {
    id: 15,
    name: "Calvin Klein Casual Shirt",
    price: 59.99,
    description: "Calvin Klein Men's Slim Fit Casual Shirt , Color: White",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQvc_r0bF2i9_RnOGMPZ-wOAGzIL4Lmc5YglW48zmU9H48dPPD2SlnB2fStSYE",
    rating: 4.4,
    category: "Fashion",
    type: "Men's Wear",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 16,
    name: "Rare Rabbit Men's Shirt",
    price: 49.99,
    description: "REGULAR FIT PLAIN SHIRT COMO - PURPLE",
    image: "https://thehouseofrare.com/cdn/shop/products/1_26728941-baa4-4c03-b8d8-062ee5008c72.jpg?v=1738909048&width=600",
    rating: 4.6,
    category: "Fashion",
    type: "Men's Wear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizePrices: { S: 44.99, M: 49.99, L: 54.99, XL: 59.99, XXL: 64.99 }
  },
  {
    id: 17,
    name: "Women's Summer Maxi Dress",
    price: 52.99,
    description: "Lightweight floral summer maxi dress, breathable fabric for hot days.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    category: "Fashion",
    type: "Women's Wear",
    sizes: ["S", "M", "L", "XL"]
  },
  
  {
    id: 19,
    name: "Women's Winter Sweater Dress",
    price: 64.99,
    description: "Cozy knit sweater dress for winter with ribbed cuffs and warm feel.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    category: "Fashion",
    type: "Women's Wear",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 20,
    name: "Women's Winter Wool Coat Dress",
    price: 89.99,
    description: "Elegant wool-blend coat dress for cold weather, tailored silhouette.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    category: "Fashion",
    type: "Women's Wear",
    sizes: ["S", "M", "L"]
  },
  {
    id: 21,
    name: "Allen Solly Women Striped Round Neck",
    price: 39.99,
    description: "Step into style with the Allen Solly women`s dress in a chic navy hue. Crafted from soft viscose, this sleeveless design features a trendy stripe pattern that effortlessly elevates casual outings.",
    image: "https://imagescdn.allensolly.com/img/app/product/3/39748210-15741036.jpg?auto=format&w=390",
    rating: 4.4,
    category: "Fashion",
    type: "Women's Wear",
    sizes: ["S", "M", "L"]
  },
  {
    id: 22,
    name: "Roslight Dress for Women Casual Wear",
    price: 44.99,
    description: "Floral V-Neck Summer Dress 2023 with Pockets | Casual Short Sleeve Midi Party Dress for Women.",
    image: "https://images-cdn.ubuy.co.in/66f4fc82887be5542b6e54b4-dresses-for-women-casual-dresses-v-neck.jpg",
    rating: 4.3,
    category: "Fashion",
    type: "Women's Wear",
    sizes: ["S", "M", "L", "XL"]
  }
];

const cart = [];
let filteredProducts = products.slice();
let currentCategory = "All";

// Sorting state
let currentSort = ""; // "price-asc" | "price-desc" | "rating-desc" | ""

// Wishlist state with localStorage persistence
const wishlistKey = 'wishlistIds';
let wishlistIds = new Set(JSON.parse(localStorage.getItem(wishlistKey) || '[]'));
let isWishlistView = false;
function saveWishlist() {
  localStorage.setItem(wishlistKey, JSON.stringify(Array.from(wishlistIds)));
}
function updateWishlistButtonLabel() {
  const btn = document.getElementById('wishlist-toggle');
  if (!btn) return;
  const count = wishlistIds.size;
  btn.textContent = isWishlistView ? `Show All` : `Wishlist (${count})`;
}
function toggleWishlist(id) {
  if (wishlistIds.has(id)) wishlistIds.delete(id); else wishlistIds.add(id);
  saveWishlist();
  const heart = document.querySelector(`[data-heart-id="${id}"]`);
  if (heart) {
    const active = wishlistIds.has(id);
    heart.textContent = active ? '❤' : '♡';
    heart.style.color = active ? '#e53935' : '#777';
  }
  updateWishlistButtonLabel();
  if (isWishlistView) filterProducts();
}

function applySort(list) {
  const arr = list.slice();
  if (currentSort === 'price-asc') arr.sort((a,b)=>a.price-b.price);
  if (currentSort === 'price-desc') arr.sort((a,b)=>b.price-a.price);
  if (currentSort === 'rating-desc') arr.sort((a,b)=>b.rating-a.rating);
  return arr;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = (rating - full) >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  let stars = '';
  for (let i = 0; i < full; i++) stars += '<span class="star full">★</span>';
  if (half) stars += '<span class="star half">★</span>';
  for (let i = 0; i < empty; i++) stars += '<span class="star empty">★</span>';
  return `<span class="stars-wrap">${stars} <span class="rating-number">${rating.toFixed(1)}</span></span>`;
}

function filterProducts() {
  const searchValue = document.getElementById('search-bar').value.toLowerCase();
  const filtered = products.filter(p => {
    const nameMatch = p.name.toLowerCase().includes(searchValue);
    const catMatch = (currentCategory === 'All') || (p.category === currentCategory);
    const wishlistMatch = !isWishlistView || wishlistIds.has(p.id);
    return nameMatch && catMatch && wishlistMatch;
  });
  filteredProducts = filtered;
  renderProducts();
}

function renderProducts(list = filteredProducts) {
  const prodSection = document.getElementById('products');
  prodSection.innerHTML = '';

  const toRender = applySort(list);

  toRender.forEach(prod => {
    const prodDiv = document.createElement('div');
    prodDiv.className = 'product';

    const hasSize = !!prod.sizes && prod.sizes.length > 0;
    const sizeHtml = hasSize ? `
      <div style="display:flex; align-items:center; gap:8px; margin: 0.2rem 0 0.6rem 0;">
        <label for="size-${prod.id}" style="font-size:0.95rem;color:#555;">Size</label>
        <select id="size-${prod.id}" style="padding:0.35rem 0.6rem; border:1px solid #e3e8f0; border-radius:8px; background:#fff;">
          <option value="" selected disabled>Select size</option>
          ${(prod.sizes || []).map(s => `<option value="${s}">${s}</option>`).join('')}
        </select>
      </div>
    ` : '';

    const priceId = `price-${prod.id}`;
    const addBtnId = `add-${prod.id}`;

    const initialPriceText = prod.sizePrices ? 'Select size to see price' : `$${prod.price.toFixed(2)}`;
    const heartActive = wishlistIds.has(prod.id);

    prodDiv.innerHTML = `
      <div class="category-label">${prod.category}</div>
      <div style="position:relative; width:100%;">
        <img src="${prod.image}" alt="${prod.name}" style="width:100%; max-height:158px; object-fit:contain; margin-bottom:0.68rem; border-radius:1rem; background:#f6f7fa;">
        <button data-heart-id="${prod.id}" title="Wishlist" style="position:absolute; top:6px; right:6px; background:#fff; border:1px solid #e9eef6; border-radius:999px; width:34px; height:34px; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.06); color:${heartActive ? '#e53935' : '#777'}; font-size:16px;">${heartActive ? '❤' : '♡'}</button>
      </div>
      <h3>${prod.name}</h3>
      <div class="stars-row">${renderStars(prod.rating)}</div>
      <p class="prod-desc">${prod.description}</p>
      ${sizeHtml}
      <p id="${priceId}">${initialPriceText}</p>
      <button id="${addBtnId}" ${hasSize ? 'disabled' : ''} onclick="addToCart(${prod.id})">Add to Cart</button>
    `;

    prodSection.appendChild(prodDiv);

    const heartBtn = prodDiv.querySelector(`[data-heart-id="${prod.id}"]`);
    heartBtn.addEventListener('click', () => toggleWishlist(prod.id));

    if (hasSize) {
      const sizeSelect = document.getElementById(`size-${prod.id}`);
      const priceEl = document.getElementById(priceId);
      const addBtn = document.getElementById(addBtnId);
      sizeSelect.addEventListener('change', function() {
        const sel = this.value;
        if (prod.sizePrices && sel in prod.sizePrices) {
          priceEl.textContent = `$${prod.sizePrices[sel].toFixed(2)}`;
        }
        addBtn.disabled = !sel;
      });
    }
  });

  // Empty state when wishlist view has no items
  if (toRender.length === 0) {
    prodSection.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:#666; font-size:1.1rem;">No products to show.</p>';
  }
}

function renderCart() {
  const itemsList = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  itemsList.innerHTML = '';
  let total = 0;

  cart.forEach((item, idx) => {
    total += item.price * item.qty;
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item.name}${item.size ? ` (${item.size})` : ''} x${item.qty}</span>
      <span>$${(item.price * item.qty).toFixed(2)}</span>
      <button onclick="removeFromCart(${idx})">Remove</button>
    `;
    itemsList.appendChild(li);
  });
  cartCount.textContent = `Cart (${cart.reduce((sum, i) => sum + i.qty, 0)})`;
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function renderCartModal() {
  const itemsList = document.getElementById('cart-items-modal');
  const cartTotalModal = document.getElementById('cart-total-modal');
  if (!itemsList || !cartTotalModal) return;

  itemsList.innerHTML = '';
  let total = 0;
  cart.forEach((item, idx) => {
    total += item.price * item.qty;
    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    li.style.marginBottom = '0.7rem';
    li.innerHTML = `
      <span>${item.name}${item.size ? ` (${item.size})` : ''} x${item.qty}</span>
      <span style="display:flex; align-items:center; gap:8px;">
        <span>$${(item.price * item.qty).toFixed(2)}</span>
        <button style="background:#ffeaee;color:#d02b41;border:none;border-radius:6px;padding:0.22rem 0.7rem;cursor:pointer;" onclick="removeFromCart(${idx})">Remove</button>
      </span>
    `;
    itemsList.appendChild(li);
  });
  cartTotalModal.textContent = `Total: $${total.toFixed(2)}`;
}

function openCartModal() {
  const modal = document.getElementById('cart-modal');
  if (!modal) return;
  renderCartModal();
  modal.style.display = 'flex';
}

function closeCartModal() {
  const modal = document.getElementById('cart-modal');
  if (!modal) return;
  modal.style.display = 'none';
}

(function setupCartModalEvents(){
  const headerCart = document.getElementById('cart-count');
  const closeBtn = document.getElementById('close-cart-modal');
  const modal = document.getElementById('cart-modal');
  if (headerCart) headerCart.style.cursor = 'pointer';
  if (headerCart) headerCart.onclick = openCartModal;
  if (closeBtn) closeBtn.onclick = closeCartModal;
  if (modal) modal.onclick = (e) => { if (e.target === modal) closeCartModal(); };
})();

const originalRenderCart = renderCart;
renderCart = function() {
  originalRenderCart();
  renderCartModal();
};

(function setupModalCheckout(){
  const btn = document.getElementById('checkout-btn-modal');
  if (!btn) return;
  btn.onclick = function() {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert('Order placed!\nThank you for shopping!');
    cart.length = 0;
    renderCart();
    closeCartModal();
  };
})();

window.addToCart = function(prodId) {
  const prod = products.find(p => p.id === prodId);
  const sizeSelect = document.getElementById(`size-${prodId}`);
  const selectedSize = sizeSelect ? sizeSelect.value : undefined;

  if (prod.sizePrices) {
    if (!selectedSize) {
      alert('Please select a size first.');
      return;
    }
  }

  const priceToUse = prod.sizePrices && selectedSize ? prod.sizePrices[selectedSize] : prod.price;

  const cartItem = cart.find(item => item.id === prodId && item.size === selectedSize);
  if (cartItem) {
    cartItem.qty += 1;
  } else {
    const itemToAdd = { id: prod.id, name: prod.name, price: priceToUse, qty: 1 };
    if (selectedSize) itemToAdd.size = selectedSize;
    cart.push(itemToAdd);
  }
  renderCart();
};

window.removeFromCart = function(idx) {
  cart.splice(idx, 1);
  renderCart();
};

document.getElementById('checkout-btn').onclick = function() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  alert('Order placed!\nThank you for shopping!');
  cart.length = 0;
  renderCart();
};

function setupFeedbackModal() {
  const modal = document.getElementById('feedback-modal');
  const openBtn = document.getElementById('open-feedback');
  const closeBtn = document.getElementById('close-feedback');
  const form = document.getElementById('feedback-form');
  const msg = document.getElementById('fb-message');
  openBtn.onclick = () => {
    modal.style.display = 'flex';
    form.reset();
    msg.style.display = 'none';
  };
  closeBtn.onclick = () => {
    modal.style.display = 'none';
    form.reset();
    msg.style.display = 'none';
  };
  modal.onclick = e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      form.reset();
      msg.style.display = 'none';
    }
  };
  form.onsubmit = e => {
    e.preventDefault();
    // Collect the feedback data
    const data = {
      name: form.elements['name'].value,
      email: form.elements['email'].value,
      comments: form.elements['comments'].value
    };
    // Send to n8n webhook
    fetch('https://farhankhan.app.n8n.cloud/webhook-test/c2db0418-0c94-4e89-85dd-8499cec7ede5', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).catch(() => {});
    msg.textContent = 'Thank you for your feedback!';
    msg.style.display = 'block';
    setTimeout(() => {
      modal.style.display = 'none';
      msg.style.display = 'none';
      form.reset();
    }, 1800);
  };
}

// Enhance UI on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
  renderCart();
  
  const searchBar = document.getElementById('search-bar');
  searchBar.addEventListener('input', filterProducts);
  
  const categoryButtons = document.querySelectorAll('.category-filter-btn');
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      categoryButtons.forEach(b => {
        b.style.background = '#f4f4f5';
        b.style.color = '#444';
      });
      this.style.background = 'linear-gradient(90deg,#3178ff 0,#56cfff 100%)';
      this.style.color = '#fff';
      currentCategory = this.dataset.category;
      isWishlistView = false;
      filterProducts();
      updateWishlistButtonLabel();
    });
  });

  // Insert Sort dropdown and Wishlist toggle in toolbar
  const toolbar = document.querySelector('section > div');
  if (toolbar) {
    const sortWrap = document.createElement('div');
    sortWrap.style.display = 'flex';
    sortWrap.style.alignItems = 'center';
    sortWrap.style.gap = '8px';
    sortWrap.innerHTML = `<label style="color:#555;">Sort</label>
      <select id="sort-select" style="padding:0.45rem 0.6rem; border:1.5px solid #e3e8f0; border-radius:10px; background:#fff;">
        <option value="">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Rating: High to Low</option>
      </select>`;
    toolbar.appendChild(sortWrap);
    const select = document.getElementById('sort-select');
    select.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });

    const wishBtn = document.createElement('button');
    wishBtn.id = 'wishlist-toggle';
    wishBtn.style.cssText = 'background:#f4f4f5; color:#222; border:none; padding:0.6rem 1.0rem; border-radius:10px; cursor:pointer; font-weight:500;';
    toolbar.appendChild(wishBtn);
    wishBtn.onclick = () => {
      isWishlistView = !isWishlistView;
      filterProducts();
      updateWishlistButtonLabel();
    };
    updateWishlistButtonLabel();
  }

  setupFeedbackModal();
});
