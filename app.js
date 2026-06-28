// AERIS E-Commerce Application State and Controllers

// --- DATA DEFINITIONS ---
const PRODUCTS = {
  aero_flow_guard: {
    id: 'aero_flow_guard',
    name: 'Aero-Flow Guard',
    price: 500,
    badge: 'Most Popular',
    weight: '400g',
    formula: '70% Zeolite + 20% Charcoal + 10% Silica',
    placement: 'Near AC vents, window sills, near coolers',
    bestFor: 'Main rooms',
    desc: 'Natural air filter for living rooms, bedrooms & near AC vents. Absorbs humidity, musty odors, and stale air.'
  },
  tail_wag_fresh: {
    id: 'tail_wag_fresh',
    name: 'Tail-Wag Fresh',
    price: 400,
    badge: 'Pet Lovers',
    weight: '500g',
    formula: '85% Zeolite + 15% Active Carbon',
    placement: 'Pet corners, kennels, kitty litter areas',
    bestFor: 'Pet dander smells',
    desc: 'Powerful pet odor absorber in a fabric bag. Eliminates pet dander smells naturally.'
  },
  deo_pod: {
    id: 'deo_pod',
    name: 'Deo-Pod',
    price: 300,
    badge: 'Compact',
    weight: '250g-300g',
    formula: '100% Zeolite Mineral Pouch',
    placement: 'Wardrobes, shoe cabinets, luggage bags',
    bestFor: 'Drawers, clothes closets',
    desc: 'Small cotton pouch for closets, shoe racks, and drawers. Keeps clothes and shoes fresh.'
  },
  pure_flow: {
    id: 'pure_flow',
    name: 'Pure Flow',
    price: null, // Coming soon
    badge: 'Coming Soon',
    weight: '600g',
    formula: 'Tech-Enhanced Purifier/Dehumidifier',
    placement: 'Medium spaces, high-moisture rooms',
    bestFor: 'Coming Soon',
    desc: 'Tech-enhanced air filter + dehumidifier combination. Advanced room purification.'
  }
};

const BOXES = {
  box_leaf_pattern: {
    id: 'box_leaf_pattern',
    name: 'Leaf Pattern (#1)',
    priceMod: 0,
    desc: 'Dark walnut wooden box with carved leaf/branch pattern, hinged front panel',
    colors: [
      { name: 'Walnut Brown', code: '#5c4033' },
      { name: 'Pine Natural', code: '#967b33ff' },
    ]
  },
  box_lotus_round: {
    id: 'box_lotus_round',
    name: 'Lotus Round (#2)',
    priceMod: 50,
    desc: 'Cylindrical round box with carved lotus pattern on lid, drawer pull-out base',
    colors: [
      { name: 'Teak Brown', code: '#8b5a2b' },
      { name: 'Sandalwood', code: '#c29d6d' }
    ]
  },
  box_butterfly_garden: {
    id: 'box_butterfly_garden',
    name: 'Butterfly Garden (#3)',
    priceMod: 0,
    desc: 'Rectangular box, lavender/purple painted, carved butterfly and flower pattern',
    colors: [
      { name: 'Lavender', code: '#b487c6ff' },
      { name: 'Blue Saga', code: '#8abed0ff' },
    ]
  },
  box_tropical_leaves: {
    id: 'box_tropical_leaves',
    name: 'Tropical Leaves (#4)',
    priceMod: 0,
    desc: 'Square box, matte green painted, large monstera/tropical leaf cutout',
    colors: [
      { name: 'Forest Green', code: '#33722bff' },
      { name: 'Olive', code: '#617e29ff' },
      { name: 'Sage', code: '#657a69ff' }
    ]
  },
  box_sunburst: {
    id: 'box_sunburst',
    name: 'Sunflower (#5)',
    priceMod: 0,
    desc: 'Rectangular dark walnut box, carved sunflower pattern on front',
    colors: [
      { name: 'Walnut', code: '#ead247ff' },
    ]
  },
  box_fretwork: {
    id: 'box_fretwork',
    name: 'Fretwork (#14)',
    priceMod: 0,
    desc: 'Square bamboo box, ornate Moroccan-style lattice carved pattern',
    colors: [
            { name: 'Honey', code: '#f3c67eff' },
      { name: 'Natural Bamboo', code: '#cf9d47ff' }
    ]
  },
  box_sea_turtle: {
    id: 'box_sea_turtle',
    name: 'Sea Turtle (Round)',
    priceMod: 80,
    desc: 'Round blue cylinder box, carved sea turtle pattern with pull-out drawer',
    colors: [
      { name: 'Ocean Blue', code: '#006994' },
      { name: 'Teal', code: '#008080' }
    ]
  }
};

const BAGS = {
  bag_daisy_dreams: {
    id: 'bag_daisy_dreams',
    name: 'Daisy Dreams',
    style: 'Cottagecore / Feminine',
    desc: 'Cream linen bag, embroidered daisies, lace trim, cream ribbon, Zeolite tag',
    tags: ['Zeolite', 'Deo-Pod', 'Aero-Guard']
  },
  bag_tree_of_life: {
    id: 'bag_tree_of_life',
    name: 'Tree of Life',
    style: 'Earthy / Botanical',
    desc: 'Natural burlap bag, printed tree illustration, cream ribbon, kraft tag',
    tags: ['Zeolite', 'Deo-Pod', 'Aero-Guard']
  },
  bag_celestial_night: {
    id: 'bag_celestial_night',
    name: 'Celestial Night',
    style: 'Celestial / Premium',
    desc: 'Navy bag, gold foil stars/moon, gold bead tassel, parchment label',
    tags: ['Zeolite', 'Deo-Pod', 'Aero-Guard']
  },
  bag_blue_dreams: {
    id: 'bag_blue_dreams',
    name: 'Bear Embroidery',
    style: 'Playful / For Pets',
    desc: 'Soft linen fabric bag, cute bear face embroidery, ideal for pet spaces',
    tags: ['Zeolite', 'Deo-Pod', 'Aero-Guard']
  },
  bag_teal_polka: {
    id: 'bag_teal_polka',
    name: 'Teal Polka Heart',
    style: 'Vintage / Cute',
    desc: 'Teal cotton bag, white polka dots, lace trim, heart wood button, rope tie',
    tags: ['Zeolite', 'Deo-Pod', 'Aero-Guard']
  },
  bag_stargazer_navy: {
    id: 'bag_stargazer_navy',
    name: 'Stargazer Navy',
    style: 'Premium / Gift',
    desc: 'Navy velvet-look bag, gold star/moon print, bronze bead tassels, parchment label',
    tags: ['Zeolite', 'Deo-Pod', 'Aero-Guard']
  }
};

// --- INITIAL STATE ---
const state = {
  productId: 'aero_flow_guard',
  packagingType: 'wood_box', // 'wood_box' | 'fabric_bag'
  boxId: 'box_leaf_pattern',
  boxColor: 'Walnut Brown',
  bagId: 'bag_daisy_dreams',
  bagTag: 'Zeolite',
  quantity: 1,
  addons: {
    giftWrapping: false,
    rechargeCard: true // Free, on by default
  }
};

// --- UI UPDATE FUNCTIONS ---
function updateUI() {
  // Update Step 1 Selected Card Styling
  document.querySelectorAll('.product-card').forEach(card => {
    const pid = card.getAttribute('data-product-id');
    if (pid === state.productId) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });

  // Update Step 2 Toggles
  document.querySelectorAll('.pack-toggle-btn').forEach(btn => {
    const type = btn.getAttribute('data-pack-type');
    if (type === state.packagingType) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Show/Hide packaging options subgrids
  const boxPane = document.getElementById('wood-box-pane');
  const bagPane = document.getElementById('fabric-bag-pane');
  if (state.packagingType === 'wood_box') {
    boxPane.classList.add('active');
    bagPane.classList.remove('active');
  } else {
    boxPane.classList.remove('active');
    bagPane.classList.add('active');
  }

  // Update Step 2 Box selection highlights
  document.querySelectorAll('.box-card').forEach(card => {
    const bid = card.getAttribute('data-box-id');
    if (bid === state.boxId) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });

  // Update Box 1 Image based on selected color
  const box1Img = document.querySelector('.box-card[data-box-id="box_leaf_pattern"] img');
  if (box1Img && state.boxId === 'box_leaf_pattern') {
    if (state.boxColor === 'Walnut Brown') {
      box1Img.src = 'BOX1dark.jpeg';
    } else if (state.boxColor === 'Pine Natural') {
      box1Img.src = 'BOX1light.jpeg';
    }
  }

  // Update Box 2 Image based on selected color
  const box2Img = document.querySelector('.box-card[data-box-id="box_lotus_round"] img');
  if (box2Img && state.boxId === 'box_lotus_round') {
    if (state.boxColor === 'Teak Brown') {
      box2Img.src = 'BOX2dark.jpeg';
    } else if (state.boxColor === 'Sandalwood') {
      box2Img.src = 'BOX2light.jpeg';
    }
  }

  // Update Box 3 Image based on selected color
  const box3Img = document.querySelector('.box-card[data-box-id="box_butterfly_garden"] img');
  if (box3Img && state.boxId === 'box_butterfly_garden') {
    if (state.boxColor === 'Lavender') {
      box3Img.src = 'butterflyLILAC.jpeg';
    } else if (state.boxColor === 'Blue Saga') {
      box3Img.src = 'BUTTERFLYBLUE.JPEG';
    }
  }

  // Update Box 4 Image based on selected color
  const box4Img = document.querySelector('.box-card[data-box-id="box_tropical_leaves"] img');
  if (box4Img && state.boxId === 'box_tropical_leaves') {
    if (state.boxColor === 'Forest Green') {
      box4Img.src = 'leaf1.jpeg';
    } else if (state.boxColor === 'Olive') {
      box4Img.src = 'leaf2.jpeg';
    } else if (state.boxColor === 'Sage') {
      box4Img.src = 'leaf3.jpeg';
    }
  }

  // Update Box 6 Image based on selected color
  const box6Img = document.querySelector('.box-card[data-box-id="box_fretwork"] img');
  if (box6Img && state.boxId === 'box_fretwork') {
    if (state.boxColor === 'Natural Bamboo') {
      box6Img.src = 'fretdark.jpeg';
    } else if (state.boxColor === 'Honey') {
      box6Img.src = 'fretlight.jpeg';
    }
  }

  // Update Box 7 Image based on selected color
  const box7Img = document.querySelector('.box-card[data-box-id="box_sea_turtle"] img');
  if (box7Img && state.boxId === 'box_sea_turtle') {
    if (state.boxColor === 'Ocean Blue') {
      box7Img.src = 'turtBLUE.jpeg';
    } else if (state.boxColor === 'Teal') {
      box7Img.src = 'turtGREEN.jpeg';
    }
  }

  // Update Step 2 Bag selection highlights
  document.querySelectorAll('.bag-card').forEach(card => {
    const bid = card.getAttribute('data-bag-id');
    if (bid === state.bagId) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });

  // Refresh Color Swatches list for the currently selected box (in active cards)
  document.querySelectorAll('.box-card').forEach(card => {
    const bid = card.getAttribute('data-box-id');
    const swatchesContainer = card.querySelector('.swatches-list');
    if (!swatchesContainer) return;
    
    const boxData = BOXES[bid];
    swatchesContainer.innerHTML = '';
    boxData.colors.forEach(col => {
      const swatch = document.createElement('button');
      swatch.type = 'button';
      swatch.className = 'color-swatch';
      if (bid === state.boxId && col.name === state.boxColor) {
        swatch.classList.add('active');
      }
      swatch.style.backgroundColor = col.code;
      swatch.title = col.name;
      
      const tooltip = document.createElement('span');
      tooltip.className = 'color-swatch-tooltip';
      tooltip.innerText = col.name;
      swatch.appendChild(tooltip);

      swatch.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent card selection trigger
        state.boxId = bid;
        state.boxColor = col.name;
        updateUI();
      });
      swatchesContainer.appendChild(swatch);
    });
  });

  // Refresh Dropdown tag list for bags
  document.querySelectorAll('.bag-card').forEach(card => {
    const bid = card.getAttribute('data-bag-id');
    const select = card.querySelector('.bag-select-dropdown');
    if (!select) return;
    
    // Select value synchronization
    if (bid === state.bagId) {
      select.value = state.bagTag;
    }
    
    // Listen for select updates
    select.onchange = (e) => {
      e.stopPropagation();
      state.bagId = bid;
      state.bagTag = e.target.value;
      updateUI();
    };
  });

  // Update Step 3 Quantity
  document.getElementById('qty-number').innerText = state.quantity;

  // Add-ons Sync
  document.getElementById('opt-gift').checked = state.addons.giftWrapping;
  document.getElementById('opt-recharge').checked = state.addons.rechargeCard;

  // Calculate prices
  const product = PRODUCTS[state.productId];
  const prodPrice = product ? product.price : 0;
  
  let packPriceMod = 0;
  let packName = '';
  let packDetail = '';
  
  if (state.packagingType === 'wood_box') {
    const box = BOXES[state.boxId];
    packPriceMod = box ? box.priceMod : 0;
    packName = box ? box.name : '';
    packDetail = `Box - Color: ${state.boxColor}`;
  } else {
    const bag = BAGS[state.bagId];
    packPriceMod = 0; // bags have zero price modifier
    packName = bag ? bag.name : '';
    packDetail = `Bag - Tag: ${state.bagTag}`;
  }

  const addonGiftPrice = state.addons.giftWrapping ? 50 : 0;

  const basePricePerUnit = prodPrice + packPriceMod;
  const subtotal = basePricePerUnit * state.quantity;
  const totalAmount = subtotal + addonGiftPrice;

  // Update Summary Side Panel
  document.getElementById('sum-pname').innerText = product ? product.name : '';
  document.getElementById('sum-pprice').innerText = `₹${prodPrice}`;
  document.getElementById('sum-packname').innerText = packName;
  document.getElementById('sum-packdetail').innerText = packDetail;
  document.getElementById('sum-qty').innerText = state.quantity;
  document.getElementById('sum-subtotal').innerText = `₹${subtotal}`;
  
  const sumAddons = document.getElementById('sum-addons');
  const sumAddonsVal = document.getElementById('sum-addons-val');
  if (addonGiftPrice > 0) {
    sumAddons.innerText = 'Gift Wrapping';
    sumAddonsVal.innerText = `₹${addonGiftPrice}`;
  } else {
    sumAddons.innerText = 'Add-ons';
    sumAddonsVal.innerText = '—';
  }
  
  // Total display
  document.querySelectorAll('.sum-total-val').forEach(el => {
    el.innerText = `₹${totalAmount}`;
  });

  // Header Nav Cart Badge
  document.getElementById('nav-cart-badge').innerText = state.quantity;

  // Update Checkout Modal Recap
  document.getElementById('recap-prod-desc').innerText = `${product ? product.name : ''} x ${state.quantity}`;
  document.getElementById('recap-prod-price').innerText = `₹${subtotal}`;
  document.getElementById('recap-pack-desc').innerText = packName + ` (${packDetail})`;
  document.getElementById('recap-pack-price').innerText = packPriceMod > 0 ? `+₹${packPriceMod * state.quantity}` : '₹0';
  document.getElementById('recap-gift-desc').innerText = state.addons.giftWrapping ? 'Gift Wrapping' : 'No wrapping';
  document.getElementById('recap-gift-price').innerText = state.addons.giftWrapping ? '₹50' : '₹0';
}

// --- COMING SOON NOTIFIER ---
function initComingSoonNotifier() {
  const form = document.getElementById('coming-soon-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('coming-soon-email').value.trim();
    if (!email) return;
    
    // Simulate API registration
    alert(`Thank you! We will notify you at ${email} once Pure Flow is available.`);
    document.getElementById('coming-soon-email').value = '';
  });
}

// --- QUANTITY EVENT HANDLERS ---
function initQuantityHandlers() {
  document.getElementById('qty-dec').addEventListener('click', () => {
    if (state.quantity > 1) {
      state.quantity--;
      updateUI();
    }
  });

  document.getElementById('qty-inc').addEventListener('click', () => {
    state.quantity++;
    updateUI();
  });

  document.getElementById('opt-gift').addEventListener('change', (e) => {
    state.addons.giftWrapping = e.target.checked;
    updateUI();
  });

  document.getElementById('opt-recharge').addEventListener('change', (e) => {
    state.addons.rechargeCard = e.target.checked;
    updateUI();
  });
}

// --- INITIALIZE SELECTIONS FROM STATIC RENDERS ---
function initCustomizerClicks() {
  // Product Selector
  document.querySelectorAll('.product-card').forEach(card => {
    const pid = card.getAttribute('data-product-id');
    if (pid === 'pure_flow') return; // disabled card
    
    card.addEventListener('click', () => {
      state.productId = pid;
      updateUI();
    });
  });

  // Packaging Toggles
  document.querySelectorAll('.pack-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.packagingType = btn.getAttribute('data-pack-type');
      updateUI();
    });
  });

  // Box Selection
  document.querySelectorAll('.box-card').forEach(card => {
    const bid = card.getAttribute('data-box-id');
    card.addEventListener('click', () => {
      state.boxId = bid;
      // Select default color of this box if color is not valid for this box
      const boxData = BOXES[bid];
      if (boxData && boxData.colors.length > 0) {
        state.boxColor = boxData.colors[0].name;
      }
      updateUI();
    });
  });

  // Bag Selection
  document.querySelectorAll('.bag-card').forEach(card => {
    const bid = card.getAttribute('data-bag-id');
    card.addEventListener('click', () => {
      state.bagId = bid;
      updateUI();
    });
  });
}

// --- NAVIGATION DRAWER (MOBILE) ---
function initMobileNav() {
  const burger = document.getElementById('menu-burger');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('active');
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
  }

  burger.addEventListener('click', openDrawer);
  backdrop.addEventListener('click', closeDrawer);
  
  drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// --- SCROLL ANIMATIONS ---
function initScrollShadow() {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initIntersectionAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.15
  });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// --- MODALS AND CHECKOUT FLOW ---
const checkoutModal = document.getElementById('checkout-modal');

function openCheckout() {
  // Check if Razorpay script is present
  if (!window.Razorpay) {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.head.appendChild(script);
  }
  checkoutModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // lock background scrolling
}

function closeCheckout() {
  checkoutModal.classList.remove('active');
  document.body.style.overflow = '';
}

function initCheckoutTriggers() {
  document.getElementById('btn-proceed-checkout').addEventListener('click', openCheckout);
  document.getElementById('close-checkout').addEventListener('click', closeCheckout);
  document.getElementById('checkout-backdrop').addEventListener('click', closeCheckout);
}

// --- FORM VALIDATION ---
function validateForm() {
  let isValid = true;

  // Select input and error spans
  const nameInput = document.getElementById('customer-name');
  const phoneInput = document.getElementById('customer-phone');
  const emailInput = document.getElementById('customer-email');
  const addr1Input = document.getElementById('customer-address1');
  const cityInput = document.getElementById('customer-city');
  const stateInput = document.getElementById('customer-state');
  const pinInput = document.getElementById('customer-pin');

  // Helper reset error
  function setError(input, message) {
    input.classList.add('error');
    const parent = input.parentElement;
    let errSpan = parent.querySelector('.form-error-msg');
    if (!errSpan) {
      errSpan = document.createElement('span');
      errSpan.className = 'form-error-msg';
      parent.appendChild(errSpan);
    }
    errSpan.innerText = message;
    isValid = false;
  }

  function clearError(input) {
    input.classList.remove('error');
    const parent = input.parentElement;
    const errSpan = parent.querySelector('.form-error-msg');
    if (errSpan) {
      errSpan.remove();
    }
  }

  // Name
  if (!nameInput.value.trim()) {
    setError(nameInput, 'Full Name is required.');
  } else {
    clearError(nameInput);
  }

  // Phone (10 digits)
  const phoneVal = phoneInput.value.trim().replace(/\s+/g, '');
  const phonePattern = /^[6-9]\d{9}$/;
  if (!phoneVal) {
    setError(phoneInput, 'Phone number is required.');
  } else if (!phonePattern.test(phoneVal)) {
    setError(phoneInput, 'Please enter a valid 10-digit Indian phone number.');
  } else {
    clearError(phoneInput);
  }

  // Email
  const emailVal = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailVal) {
    setError(emailInput, 'Email address is required.');
  } else if (!emailPattern.test(emailVal)) {
    setError(emailInput, 'Please enter a valid email address.');
  } else {
    clearError(emailInput);
  }

  // Address Line 1
  if (!addr1Input.value.trim()) {
    setError(addr1Input, 'Delivery Address is required.');
  } else {
    clearError(addr1Input);
  }

  // City
  if (!cityInput.value.trim()) {
    setError(cityInput, 'City is required.');
  } else {
    clearError(cityInput);
  }

  // State
  if (!stateInput.value) {
    setError(stateInput, 'Please select your State.');
  } else {
    clearError(stateInput);
  }

  // Pin Code (6 digits)
  const pinVal = pinInput.value.trim().replace(/\s+/g, '');
  if (!pinVal) {
    setError(pinInput, 'PIN Code is required.');
  } else if (!/^\d{6}$/.test(pinVal)) {
    setError(pinInput, 'Enter a valid 6-digit PIN Code.');
  } else {
    clearError(pinInput);
  }

  return isValid;
}

// --- RAZORPAY INTEGRATION AND SIMULATION ---
function initPaymentProcessor() {
  const payBtn = document.getElementById('pay-submit-btn');
  
  payBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // scroll to the first error
      const firstErr = document.querySelector('.form-group input.error, .form-group select.error');
      if (firstErr) {
        firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Capture customer info
    const customerName = document.getElementById('customer-name').value.trim();
    const customerPhone = document.getElementById('customer-phone').value.trim();
    const customerEmail = document.getElementById('customer-email').value.trim();

    // Calculate total amount
    const product = PRODUCTS[state.productId];
    const prodPrice = product ? product.price : 0;
    const packPriceMod = state.packagingType === 'wood_box' ? BOXES[state.boxId].priceMod : 0;
    const addonGiftPrice = state.addons.giftWrapping ? 50 : 0;
    const totalAmount = (prodPrice + packPriceMod) * state.quantity + addonGiftPrice;

    const selectedDesign = state.packagingType === 'wood_box' ? BOXES[state.boxId].name : BAGS[state.bagId].name;

    // Use simulated or Live Razorpay Checkouts
    if (window.Razorpay) {
      const options = {
        key: "rzp_test_samplekey123", // Replaced with customizer key. For prod, developer will configure their key.
        amount: totalAmount * 100, // INR in paise
        currency: "INR",
        name: "AERIS",
        description: `${product.name} — ${selectedDesign}`,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23C8E6C0'/%3E%3Ctext x='50%25' y='60%25' font-family='serif' font-size='30' font-weight='bold' fill='%232D5A27' text-anchor='middle'%3EAR%3C/text%3E%3C/svg%3E",
        handler: function(response) {
          showOrderSuccess(response.razorpay_payment_id || `PAY-${Math.floor(100000 + Math.random() * 900000)}`);
        },
        prefill: {
          name: customerName,
          email: customerEmail,
          contact: customerPhone
        },
        notes: {
          address: document.getElementById('customer-address1').value.trim(),
          city: document.getElementById('customer-city').value.trim(),
          pin: document.getElementById('customer-pin').value.trim()
        },
        theme: { color: "#2D5A27" }
      };

      try {
        const rzp = new Razorpay(options);
        rzp.on('payment.failed', function (response){
          alert(`Payment failed: ${response.error.description}`);
        });
        rzp.open();
      } catch (err) {
        console.warn("Razorpay initialization error, fallback to simulated checkout", err);
        runSimulatedCheckout();
      }
    } else {
      console.warn("Razorpay script not loaded, running simulated secure checkout.");
      runSimulatedCheckout();
    }
  });

  function runSimulatedCheckout() {
    const payBtn = document.getElementById('pay-submit-btn');
    payBtn.disabled = true;
    payBtn.innerText = "Connecting to Secure Gateway...";
    
    setTimeout(() => {
      payBtn.innerText = "Authorizing Payment...";
      setTimeout(() => {
        const randomPayId = `pay_sim_${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
        showOrderSuccess(randomPayId);
        payBtn.disabled = false;
        payBtn.innerText = "Pay Now";
      }, 1500);
    }, 1000);
  }
}

// --- SUCCESS SCREEN MODAL ---
function showOrderSuccess(paymentId) {
  // Hide checkout drawer
  closeCheckout();

  // Create customized display code
  document.getElementById('success-order-id').innerText = paymentId;

  // Activate overlay
  const successOverlay = document.getElementById('success-overlay');
  successOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Back button event
  document.getElementById('success-home-btn').onclick = function() {
    // Reset configurations to defaults
    state.quantity = 1;
    state.addons.giftWrapping = false;
    state.addons.rechargeCard = true;
    updateUI();

    // Reset Form fields
    document.querySelectorAll('.checkout-form input, .checkout-form select, .checkout-form textarea').forEach(el => {
      el.value = '';
    });
    
    // Hide overlay
    successOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };
}

// --- ACCORDION HANDLER ---
function initAccordion() {
  document.querySelectorAll('.faq-question-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const pane = item.querySelector('.faq-answer-pane');
      const isOpen = item.classList.contains('open');

      // Close all other accordions first
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          otherItem.querySelector('.faq-answer-pane').style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        pane.style.maxHeight = null;
      } else {
        item.classList.add('open');
        pane.style.maxHeight = pane.scrollHeight + "px";
      }
    });
  });
}

// --- RUN ENGINE ---
document.addEventListener('DOMContentLoaded', () => {
  initCustomizerClicks();
  initQuantityHandlers();
  initComingSoonNotifier();
  initMobileNav();
  initScrollShadow();
  initIntersectionAnimations();
  initCheckoutTriggers();
  initPaymentProcessor();
  initAccordion();
  
  // Set initial rendering parameters
  updateUI();
});
