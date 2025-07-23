 // Utility: Get cart from localStorage
 function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
  // Utility: Save cart to localStorage
  function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Cart saved to localStorage:', cart); // Log cart data
  }
  // Utility: Find product index in cart
  function findProductIndex(cart, product) {
    return cart.findIndex(item => item.title === product.title && item.seller === product.seller);
  }
  // Utility: Format price
  function formatPrice(price, qty) {
    return `$${(parseFloat(price) * qty).toFixed(2)}`;
  }
  // Render cart in modal
  function renderCart() {
    const cart = getCart();
    const modalProducts = document.querySelector('.modal__products');
    const productCount = document.querySelector('.product__count');
    let total = 0;
    modalProducts.innerHTML = '';
    cart.forEach((item, idx) => {
      total += parseFloat(item.price) * item.qty;
      const div = document.createElement('div');
      div.className = 'modal__product count__parent';
      div.innerHTML = `
        <img class="logo" src="${item.image}" alt="">
        <div>
          <div class="satatus__box">
            <p>${item.title}</p>
            <span>${item.seller}</span>
          </div>
          <h3 class="product__name">${item.desc}</h3>
          <div class="product__footer">
            <div class="counter">
              <button class="counter__btn decrement" data-idx="${idx}" data-action="decrement">
                <img src="images/icon/minus.svg" alt="">
              </button>
              <div class="count">${item.qty}</div>
              <button class="counter__btn increment" data-idx="${idx}" data-action="increment">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#7A8895" />
                </svg>
              </button>
            </div>
            <div class="right__box">
              <div class="price">${formatPrice(item.price, item.qty)}</div>
              <button class="delete__btn" data-idx="${idx}">
                <img src="images/icon/trash.svg" alt="">
              </button>
            </div>
          </div>
        </div>
      `;
      modalProducts.appendChild(div);
    });
    // Update product count and total
    if (productCount) productCount.textContent = cart.length;
    // Show total price
    let priceElem = document.querySelector('.bottom__price');
    if (!priceElem) {
      priceElem = document.createElement('span');
      priceElem.className = 'bottom__price';
      document.querySelector('.modal__footer-bottom h4').after(priceElem);
    }
    priceElem.textContent = `$${total.toFixed(2)}`;
  }
  // Open cart modal using .show and .no-scroll (matches js/script.js)
  function openCartModal() {
    const modal = document.getElementById('modal2');
    const overlay = document.querySelector('.modal-overlay');
    if (modal && !modal.classList.contains('show')) {
      modal.classList.add('show');
      if (overlay) overlay.classList.add('show');
      document.body.classList.add('no-scroll');
    }
    renderCart();
  }
  // Close cart modal
  function closeCartModal() {
    const modal = document.getElementById('modal2');
    const overlay = document.querySelector('.modal-overlay');
    if (modal) modal.classList.remove('show');
    if (overlay) overlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
  }
  // Add to cart handler
  function handleAddToCart(e) {
    const btn = e.currentTarget;
    const card = btn.closest('.product__card');
    if (!card) return;
    const product = {
      title: card.getAttribute('data-title'),
      desc: card.getAttribute('data-desc'),
      price: card.getAttribute('data-price'),
      seller: card.getAttribute('data-seller'),
      image: card.getAttribute('data-image'),
      qty: 1
    };
    let cart = getCart();
    const idx = findProductIndex(cart, product);
    if (idx === -1) {
      cart.push(product);
      setCart(cart);
    }
    // If already in cart, do not change qty, just open modal and render
    openCartModal();
  }
  // Quantity and delete handlers
  document.addEventListener('click', function(e) {
    // Add to cart
    if (e.target.closest('.cart.modal-btn[data-action="add-to-cart"]')) {
      handleAddToCart({ currentTarget: e.target.closest('.cart.modal-btn') });
    }
    // Increment/decrement
    if (e.target.closest('.counter__btn')) {
      const btn = e.target.closest('.counter__btn');
      const idx = +btn.getAttribute('data-idx');
      let cart = getCart();
      if (btn.getAttribute('data-action') === 'increment') {
        cart[idx].qty += 1;
      } else if (btn.getAttribute('data-action') === 'decrement') {
        if (cart[idx].qty > 1) cart[idx].qty -= 1;
      }
      setCart(cart);
      renderCart();
    }
    // Delete
    if (e.target.closest('.delete__btn')) {
      const btn = e.target.closest('.delete__btn');
      const idx = +btn.getAttribute('data-idx');
      let cart = getCart();
      cart.splice(idx, 1);
      setCart(cart);
      renderCart();
    }
    // Close modal (matches js/script.js logic)
    if (e.target.closest('.close__modal')) {
      closeCartModal();
    }
    if (
      e.target.classList.contains('modal-overlay') ||
      (e.target.classList.contains('modal') && !e.target.closest('.modal__content'))
    ) {
      closeCartModal();
    }
  });
  // Ensure all add-to-cart buttons open the cart modal
  document.querySelectorAll('.cart.modal-btn[data-action="add-to-cart"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      handleAddToCart({ currentTarget: btn });
    });
  });
  // Also open cart modal when clicking the cart icon in the header
  document.querySelectorAll('.cart__box.modal-btn[data-target="#empty-modal"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      openCartModal();
    });
  });
  // On page load, render cart count
  document.addEventListener('DOMContentLoaded', function() {
    renderCart();
  });




//progress

// intro__swiper
const swiper = new Swiper(".intro__swiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
});

const filterBoxes = document.querySelectorAll('.filter-boxes');

filterBoxes.forEach(box => {
  const filterBoxItems = box.querySelectorAll('.filter-box');

  filterBoxItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
});


// product__card-swiper
const productCardSwiper = new Swiper(".product__card-swiper", {
  slidesPerView: 3.4,
  spaceBetween: 6,
});


//
const productsParent = document.querySelectorAll('.products__list');

productsParent.forEach(productParent => {
  const products = productParent.querySelectorAll(".product__card");

  products.forEach(product => {
    const showContentBtn = product.querySelector(".show__content-btn");

    if (showContentBtn) {
      showContentBtn.addEventListener('click', () => {
        product.classList.toggle('content-show');
        console.log('sa');

      });
    }
  });
});


// profile__market-swiper
const profileMarketSwiper = new Swiper(".profile__market-swiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    870: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  }
});

// tabs
const tabs = document.querySelectorAll('.tabs');

tabs.forEach(tab => {
  const tabItems = tab.querySelectorAll('.tab-item');
  const tabContents = tab.querySelectorAll('.tab-content');

  tabItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.dataset.target;

      tabItems.forEach(i => i.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      item.classList.add('active');
      tab.querySelector(`#${targetId}`).classList.add('active');
    });
  });
});


// Simple JavaScript to toggle dropdown
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector(".dropdown");
if (dropdown && dropdownToggle) {
  dropdownToggle.addEventListener('click', () => {
    dropdown.classList.toggle('active');
    dropdownToggle.classList.toggle('show')
  })
}


// sidebar
const openSidebarBtn = document.querySelector(".sidebar__btn");
const closeSidebarBtn = document.querySelector(".sidebar__open-btn");
const headerMenuBtn = document.querySelector(".header__menu-btn")
const sidebar = document.querySelector(".sidebar");
const closeSidebarBtn2 = document.querySelector(".close__sidebar-btn");
openSidebarBtn.addEventListener("click", () => {
  sidebar.classList.add("hide");
})
closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("hide");
})
closeSidebarBtn2.addEventListener("click", () => {
  sidebar.classList.remove("show");
})
headerMenuBtn.addEventListener("click", () => {
  sidebar.classList.add("show");
})

//function for header chevron
const proxyToggle = document.getElementById("proxy-toggle");

proxyToggle.addEventListener("click", (e) => {
  e.preventDefault();
  proxyToggle.classList.toggle("open");
});



// lang

const allLangBlocks = document.querySelectorAll('.header__language');

allLangBlocks.forEach(langBlock => {
  const langText = langBlock.querySelector('.lang__text');
  const langItems = langBlock.querySelectorAll('.lang__item');
  const langDropdown = langBlock.querySelector('.lang');

  // Dropdownni ochish/tanlash
  langBlock.addEventListener('click', (e) => {
    e.stopPropagation();

    // Boshqa drop va block'lardan show va active'ni olib tashlaymiz
    allLangBlocks.forEach(block => {
      if (block !== langBlock) {
        block.querySelector('.lang').classList.remove('show');
        block.classList.remove('active');
      }
    });

    langDropdown.classList.toggle('show');
    langBlock.classList.toggle('active');
  });

  // Lang item tanlansa
  langItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      langText.textContent = item.textContent;
      langItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      langDropdown.classList.remove('show');
      langBlock.classList.remove('active');
    });
  });
});

// Tashqariga bosilganda barcha ochiq dropdown'larni yopish
window.addEventListener('click', () => {
  allLangBlocks.forEach(block => {
    block.querySelector('.lang').classList.remove('show');
    block.classList.remove('active');
  });
});


// Ekranda boshqa joy bosilsa — hamma dropdownni yopamiz
window.addEventListener('click', () => {
  document.querySelectorAll('.header__language .lang').forEach(drop => {
    drop.classList.remove('show');
  });
});




const filters = document.querySelectorAll(".filter");

filters.forEach(filter => {
  const filterBoxes = filter.querySelectorAll(".filter__box");

  filterBoxes.forEach(filterBox => {
    const filterBoxOption = filterBox.querySelector(".filter__options");
    const filterBoxText = filterBox.querySelector('.filter__box-text');
    const options = filterBoxOption.querySelectorAll('.filter__option');

    // FilterBox bosilganda
    filterBox.addEventListener('click', (e) => {
      e.stopPropagation(); // window ga ketmasin

      // Boshqa ochiq optionlarni yopish va active'larni olib tashlash
      filters.forEach(f => {
        f.querySelectorAll(".filter__options").forEach(opt => {
          if (opt !== filterBoxOption) opt.classList.remove('show');
        });
        f.querySelectorAll(".filter__box").forEach(box => {
          if (box !== filterBox) box.classList.remove('active');
        });
      });

      // Shu optionni toggle qilish va active qo‘shish
      filterBoxOption.classList.toggle('show');
      filterBox.classList.toggle('active');
    });

    // Ichki option tanlanganda
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        filterBoxText.textContent = option.textContent;
        filterBoxOption.classList.remove('show');
        filterBox.classList.remove('active');
      });
    });
  });
});

// Window bosilganda barcha optionlar yopilsin
window.addEventListener('click', () => {
  document.querySelectorAll(".filter__options.show").forEach(opt => {
    opt.classList.remove('show');
  });
  document.querySelectorAll(".filter__box.active").forEach(box => {
    box.classList.remove('active');
  });
});

// modal
const modalBtns = document.querySelectorAll('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
let currentModal = null;

// Modalni ochish
modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    currentModal = document.querySelector(targetId);

    if (currentModal) {
      currentModal.classList.add('show');
      modalOverlay.classList.add('show');
      document.body.classList.add('no-scroll');
    }
  });
});

// Modalni yopish (close__modal bosilsa)
document.addEventListener('click', (e) => {
  if (e.target.closest('.close__modal')) {
    closeModal();
  }

  // Modal contentdan tashqariga bossak ham yopiladi
  if (
    e.target.classList.contains('modal-overlay') ||
    (e.target.classList.contains('modal') && !e.target.closest('.modal__content'))
  ) {
    closeModal();
  }
});

// Yopish funksiyasi
function closeModal() {
  if (currentModal) {
    currentModal.classList.remove('show');
    modalOverlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
    currentModal = null;
  }
}

const countParents = document.querySelectorAll('.count__parent');

if (countParents) {
  countParents.forEach(parent => {
    const counter = parent.querySelector('.counter');
    if (!counter) return;

    const decrementBtn = counter.querySelectorAll('.counter__btn')[0];
    const incrementBtn = counter.querySelectorAll('.counter__btn')[1];
    const countDisplay = counter.querySelector('.count');

    decrementBtn.addEventListener('click', () => {
      let value = parseInt(countDisplay.textContent.trim());
      if (value > 0) {
        countDisplay.textContent = value - 1;
      }
    });

    incrementBtn.addEventListener('click', () => {
      let value = parseInt(countDisplay.textContent.trim());
      countDisplay.textContent = value + 1;
    });
  });
}


document.querySelectorAll('.input__container input').forEach(input => {
  input.addEventListener('input', function () {
    if (this.value.trim() !== '') {
      this.classList.add('has-value');
    } else {
      this.classList.remove('has-value');
    }
  });

  input.addEventListener('blur', function () {
    if (this.value.trim() !== '') {
      this.classList.add('has-value');
    } else {
      this.classList.remove('has-value');
    }
  });

  if (input.value.trim() !== '') {
    input.classList.add('has-value');
  }
});


document.addEventListener('DOMContentLoaded', function () {
  // Provider selection
  const providers = document.querySelectorAll('.provider');
  providers.forEach(provider => {
    provider.addEventListener('click', function () {
      // For this demo, we'll just toggle the active class
      // In a real app, you might want to handle mutual exclusivity
      this.classList.toggle('active');
    });
  });

  // Protocol selection
  const protocols = document.querySelectorAll('.protocol');
  protocols.forEach(protocol => {
    protocol.addEventListener('click', function () {
      protocols.forEach(p => p.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Location selection
  const locations = document.querySelectorAll('.location');
  locations.forEach(location => {
    location.addEventListener('click', function () {
      locations.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Session type selection
  const sessions = document.querySelectorAll('.session');
  sessions.forEach(session => {
    session.addEventListener('click', function () {
      sessions.forEach(s => s.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Dropdown functionality (simplified for demo)
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function () {
      // In a real app, you would show dropdown options here
      console.log('Dropdown clicked');
    });
  });
});


const copyButton = document.querySelector(".copy-btn");

if (copyButton) {
  copyButton.addEventListener("click", function () {
    const links = document.querySelectorAll(".copy__box-content ul li a");
    let allText = "";

    links.forEach(link => {
      allText += link.textContent + "\n";
    });

    // Clipboardga yozish
    navigator.clipboard.writeText(allText.trim())
      .then(() => {
        // Muvoffaqiyatli nusxalanganida xabar
        copyButton.querySelector("span").textContent = "Copied!";
        setTimeout(() => {
          copyButton.querySelector("span").textContent = "Copy";
        }, 2000);
      })
      .catch(err => {
        console.error("Copy failed:", err);
      });
  });
}
// ==================================================== progress ==============================================================================
const progressCircle = document.querySelector('.progress-circle');
const indicator = document.querySelector('.indicator');
const svg = document.querySelector('.progresss');

if (svg) {
  const percent = parseFloat(svg.getAttribute('data-percent')) || 0;
  updateProgress(percent);
}

function updateProgress(percent) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  progressCircle.style.strokeDashoffset = offset;

  const angle = (percent / 100) * 360;
  const radians = (angle - 90) * (Math.PI / 180);
  const center = 50;
  const x = center + radius * Math.cos(radians);
  const y = center + radius * Math.sin(radians);

  const svgSize = 200;
  const px = (x / 100) * svgSize;
  const py = (y / 99) * svgSize;

  indicator.style.left = `${px}px`;
  indicator.style.top = `${py}px`;
}