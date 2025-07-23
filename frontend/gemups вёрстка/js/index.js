// // intro__swiper
// const swiper = new Swiper(".intro__swiper", {
//   slidesPerView: 1,
//   spaceBetween: 15,
//   navigation: {
//     nextEl: ".next-btn",
//     prevEl: ".prev-btn",
//   },
// });

// const filterBoxes = document.querySelectorAll('.filter-boxes');

// filterBoxes.forEach(box => {
//   const filterBoxItems = box.querySelectorAll('.filter-box');

//   filterBoxItems.forEach(item => {
//     item.addEventListener('click', () => {
//       item.classList.toggle('active');
//     });
//   });
// });


// // product__card-swiper
// const productCardSwiper = new Swiper(".product__card-swiper", {
//   slidesPerView: 3.4,
//   spaceBetween: 6,
// });


// //
// const productsParent = document.querySelectorAll('.products__list');

// productsParent.forEach(productParent => {
//   const products = productParent.querySelectorAll(".product__card");

//   products.forEach(product => {
//     const showContentBtn = product.querySelector(".show__content-btn");

//     if (showContentBtn) {
//       showContentBtn.addEventListener('click', () => {
//         product.classList.toggle('content-show');
//         console.log('sa');

//       });
//     }
//   });
// });


// // profile__market-swiper
// const profileMarketSwiper = new Swiper(".profile__market-swiper", {
//   slidesPerView: 3,
//   spaceBetween: 16,
//   navigation: {
//     nextEl: ".next-btn",
//     prevEl: ".prev-btn",
//   },
//   breakpoints: {
//     1200: {
//       slidesPerView: 3,
//     },
//     870: {
//       slidesPerView: 2,
//     },
//     0: {
//       slidesPerView: 1,
//     },
//   }
// });

// // tabs
// const tabs = document.querySelectorAll('.tabs');

// tabs.forEach(tab => {
//   const tabItems = tab.querySelectorAll('.tab-item');
//   const tabContents = tab.querySelectorAll('.tab-content');

//   tabItems.forEach(item => {
//     item.addEventListener('click', () => {
//       const targetId = item.dataset.target;

//       tabItems.forEach(i => i.classList.remove('active'));
//       tabContents.forEach(c => c.classList.remove('active'));

//       item.classList.add('active');
//       tab.querySelector(`#${targetId}`).classList.add('active');
//     });
//   });
// });


// // Simple JavaScript to toggle dropdown
// const dropdownToggle = document.querySelector('.dropdown-toggle');
// const dropdown = document.querySelector(".dropdown");
// if (dropdown && dropdownToggle) {
//   dropdownToggle.addEventListener('click', () => {
//     dropdown.classList.toggle('active');
//     dropdownToggle.classList.toggle('show')
//   })
// }


// // sidebar
// const openSidebarBtn = document.querySelector(".sidebar__btn");
// const closeSidebarBtn = document.querySelector(".sidebar__open-btn");
// const headerMenuBtn = document.querySelector(".header__menu-btn")
// const sidebar = document.querySelector(".sidebar");
// const closeSidebarBtn2 = document.querySelector(".close__sidebar-btn");
// openSidebarBtn.addEventListener("click", () => {
//   sidebar.classList.add("hide");
// })
// closeSidebarBtn.addEventListener("click", () => {
//   sidebar.classList.remove("hide");
// })
// closeSidebarBtn2.addEventListener("click", () => {
//   sidebar.classList.remove("show");
// })
// headerMenuBtn.addEventListener("click", () => {
//   sidebar.classList.add("show");
// })


// // lang

// const allLangBlocks = document.querySelectorAll('.header__language');

// allLangBlocks.forEach(langBlock => {
//   const langText = langBlock.querySelector('.lang__text');
//   const langItems = langBlock.querySelectorAll('.lang__item');
//   const langDropdown = langBlock.querySelector('.lang');

//   // Dropdownni ochish/tanlash
//   langBlock.addEventListener('click', (e) => {
//     e.stopPropagation();

//     // Boshqa drop va block'lardan show va active'ni olib tashlaymiz
//     allLangBlocks.forEach(block => {
//       if (block !== langBlock) {
//         block.querySelector('.lang').classList.remove('show');
//         block.classList.remove('active');
//       }
//     });

//     langDropdown.classList.toggle('show');
//     langBlock.classList.toggle('active');
//   });

//   // Lang item tanlansa
//   langItems.forEach(item => {
//     item.addEventListener('click', (e) => {
//       e.stopPropagation();
//       langText.textContent = item.textContent;
//       langItems.forEach(el => el.classList.remove('active'));
//       item.classList.add('active');
//       langDropdown.classList.remove('show');
//       langBlock.classList.remove('active');
//     });
//   });
// });

// // Tashqariga bosilganda barcha ochiq dropdown'larni yopish
// window.addEventListener('click', () => {
//   allLangBlocks.forEach(block => {
//     block.querySelector('.lang').classList.remove('show');
//     block.classList.remove('active');
//   });
// });


// // Ekranda boshqa joy bosilsa — hamma dropdownni yopamiz
// window.addEventListener('click', () => {
//   document.querySelectorAll('.header__language .lang').forEach(drop => {
//     drop.classList.remove('show');
//   });
// });




// const filters = document.querySelectorAll(".filter");

// filters.forEach(filter => {
//   const filterBoxes = filter.querySelectorAll(".filter__box");

//   filterBoxes.forEach(filterBox => {
//     const filterBoxOption = filterBox.querySelector(".filter__options");
//     const filterBoxText = filterBox.querySelector('.filter__box-text');
//     const options = filterBoxOption.querySelectorAll('.filter__option');

//     // FilterBox bosilganda
//     filterBox.addEventListener('click', (e) => {
//       e.stopPropagation(); // window ga ketmasin

//       // Boshqa ochiq optionlarni yopish va active'larni olib tashlash
//       filters.forEach(f => {
//         f.querySelectorAll(".filter__options").forEach(opt => {
//           if (opt !== filterBoxOption) opt.classList.remove('show');
//         });
//         f.querySelectorAll(".filter__box").forEach(box => {
//           if (box !== filterBox) box.classList.remove('active');
//         });
//       });

//       // Shu optionni toggle qilish va active qo‘shish
//       filterBoxOption.classList.toggle('show');
//       filterBox.classList.toggle('active');
//     });

//     // Ichki option tanlanganda
//     options.forEach(option => {
//       option.addEventListener('click', (e) => {
//         e.stopPropagation();
//         filterBoxText.textContent = option.textContent;
//         filterBoxOption.classList.remove('show');
//         filterBox.classList.remove('active');
//       });
//     });
//   });
// });

// // Window bosilganda barcha optionlar yopilsin
// window.addEventListener('click', () => {
//   document.querySelectorAll(".filter__options.show").forEach(opt => {
//     opt.classList.remove('show');
//   });
//   document.querySelectorAll(".filter__box.active").forEach(box => {
//     box.classList.remove('active');
//   });
// });

// // modal
// const modalBtns = document.querySelectorAll('.modal-btn');
// const modalOverlay = document.querySelector('.modal-overlay');
// let currentModal = null;

// // Modalni ochish
// modalBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const targetId = btn.getAttribute('data-target');
//     currentModal = document.querySelector(targetId);

//     if (currentModal) {
//       currentModal.classList.add('show');
//       modalOverlay.classList.add('show');
//       document.body.classList.add('no-scroll');
//     }
//   });
// });

// // Modalni yopish (close__modal bosilsa)
// document.addEventListener('click', (e) => {
//   if (e.target.closest('.close__modal')) {
//     closeModal();
//   }

//   // Modal contentdan tashqariga bossak ham yopiladi
//   if (
//     e.target.classList.contains('modal-overlay') ||
//     (e.target.classList.contains('modal') && !e.target.closest('.modal__content'))
//   ) {
//     closeModal();
//   }
// });

// // Yopish funksiyasi
// function closeModal() {
//   if (currentModal) {
//     currentModal.classList.remove('show');
//     modalOverlay.classList.remove('show');
//     document.body.classList.remove('no-scroll');
//     currentModal = null;
//   }
// }

// const countParents = document.querySelectorAll('.count__parent');

// if (countParents) {
//   countParents.forEach(parent => {
//     const counter = parent.querySelector('.counter');
//     if (!counter) return;

//     const decrementBtn = counter.querySelectorAll('.counter__btn')[0];
//     const incrementBtn = counter.querySelectorAll('.counter__btn')[1];
//     const countDisplay = counter.querySelector('.count');

//     decrementBtn.addEventListener('click', () => {
//       let value = parseInt(countDisplay.textContent.trim());
//       if (value > 0) {
//         countDisplay.textContent = value - 1;
//       }
//     });

//     incrementBtn.addEventListener('click', () => {
//       let value = parseInt(countDisplay.textContent.trim());
//       countDisplay.textContent = value + 1;
//     });
//   });
// }


// document.querySelectorAll('.input__container input').forEach(input => {
//   input.addEventListener('input', function () {
//     if (this.value.trim() !== '') {
//       this.classList.add('has-value');
//     } else {
//       this.classList.remove('has-value');
//     }
//   });

//   input.addEventListener('blur', function () {
//     if (this.value.trim() !== '') {
//       this.classList.add('has-value');
//     } else {
//       this.classList.remove('has-value');
//     }
//   });

//   if (input.value.trim() !== '') {
//     input.classList.add('has-value');
//   }
// });


// document.addEventListener('DOMContentLoaded', function () {
//   // Provider selection
//   const providers = document.querySelectorAll('.provider');
//   providers.forEach(provider => {
//     provider.addEventListener('click', function () {
//       // For this demo, we'll just toggle the active class
//       // In a real app, you might want to handle mutual exclusivity
//       this.classList.toggle('active');
//     });
//   });

//   // Protocol selection
//   const protocols = document.querySelectorAll('.protocol');
//   protocols.forEach(protocol => {
//     protocol.addEventListener('click', function () {
//       protocols.forEach(p => p.classList.remove('active'));
//       this.classList.add('active');
//     });
//   });

//   // Location selection
//   const locations = document.querySelectorAll('.location');
//   locations.forEach(location => {
//     location.addEventListener('click', function () {
//       locations.forEach(l => l.classList.remove('active'));
//       this.classList.add('active');
//     });
//   });

//   // Session type selection
//   const sessions = document.querySelectorAll('.session');
//   sessions.forEach(session => {
//     session.addEventListener('click', function () {
//       sessions.forEach(s => s.classList.remove('active'));
//       this.classList.add('active');
//     });
//   });

//   // Dropdown functionality (simplified for demo)
//   const dropdowns = document.querySelectorAll('.dropdown');
//   dropdowns.forEach(dropdown => {
//     dropdown.addEventListener('click', function () {
//       // In a real app, you would show dropdown options here
//       console.log('Dropdown clicked');
//     });
//   });
// });


// const copyButton = document.querySelector(".copy-btn");

// if (copyButton) {
//   copyButton.addEventListener("click", function () {
//     const links = document.querySelectorAll(".copy__box-content ul li a");
//     let allText = "";

//     links.forEach(link => {
//       allText += link.textContent + "\n";
//     });

//     // Clipboardga yozish
//     navigator.clipboard.writeText(allText.trim())
//       .then(() => {
//         // Muvoffaqiyatli nusxalanganida xabar
//         copyButton.querySelector("span").textContent = "Copied!";
//         setTimeout(() => {
//           copyButton.querySelector("span").textContent = "Copy";
//         }, 2000);
//       })
//       .catch(err => {
//         console.error("Copy failed:", err);
//       });
//   });
// }
// // ==================================================== progress ==============================================================================
// const progressCircle = document.querySelector('.progress-circle');
// const indicator = document.querySelector('.indicator');
// const svg = document.querySelector('.progresss');

// if (svg) {
//   const percent = parseFloat(svg.getAttribute('data-percent')) || 0;
//   updateProgress(percent);
// }

// function updateProgress(percent) {
//   const radius = 45;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (percent / 100) * circumference;

//   progressCircle.style.strokeDashoffset = offset;

//   const angle = (percent / 100) * 360;
//   const radians = (angle - 90) * (Math.PI / 180);
//   const center = 50;
//   const x = center + radius * Math.cos(radians);
//   const y = center + radius * Math.sin(radians);

//   const svgSize = 200;
//   const px = (x / 100) * svgSize;
//   const py = (y / 99) * svgSize;

//   indicator.style.left = `${px}px`;
//   indicator.style.top = `${py}px`;
// }

// // --- CART LOGIC START ---
// // const CART_KEY = 'gemups_cart';



// // function getCart() {
// //   return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
// // }
// // function setCart(cart) {
// //   localStorage.setItem(CART_KEY, JSON.stringify(cart));
// // }
// // function findCartItem(cart, title, seller) {
// //   return cart.find(item => item.title === title && item.seller === seller);
// // }
// // function renderCart() {
// //   const cart = getCart();
// //   const modalProducts = document.querySelector('.modal__products');
// //   const productCount = document.querySelector('.product__count');
// //   let totalPriceEl = document.querySelector('.bottom__price');
// //   if (!modalProducts) return;
// //   modalProducts.innerHTML = '';
// //   if (cart.length === 0) {
// //     modalProducts.innerHTML = '<div style="padding:2rem;text-align:center;">Cart is empty</div>';
// //   }
// //   let total = 0;
// //   cart.forEach((item, idx) => {
// //     total += item.price * item.count;
// //     modalProducts.innerHTML += `
// //       <div class="modal__product count__parent" data-idx="${idx}">
// //         <img class="logo" src="${item.image}" alt="">
// //         <div>
// //           <div class="satatus__box">
// //             <p>${item.category || ''}</p>
// //             <span>${item.seller}</span>
// //           </div>
// //           <h3 class="product__name">${item.title}</h3>
// //           <div class="product__footer">
// //             <div class="counter">
// //               <button class="counter__btn decrement">-</button>
// //               <div class="count">${item.count}</div>
// //               <button class="counter__btn increment">+</button>
// //             </div>
// //             <div class="right__box">
// //               <div class="price">${(item.price * item.count).toFixed(2)} $</div>
// //               <button class="delete__btn">🗑️</button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     `;
// //   });
// //   if (productCount) productCount.textContent = cart.reduce((sum, item) => sum + item.count, 0);
// //   // If .bottom__price does not exist, create it in the modal footer
// //   if (!totalPriceEl) {
// //     const modalFooter = document.querySelector('.modal__footer-bottom > div');
// //     if (modalFooter) {
// //       totalPriceEl = document.createElement('span');
// //       totalPriceEl.className = 'bottom__price';
// //       modalFooter.appendChild(totalPriceEl);
// //     }
// //   }
// //   if (totalPriceEl) totalPriceEl.textContent = `$${total.toFixed(2)}`;
// // }

// // function addToCart(product) {
// //   const cart = getCart();
// //   const existing = findCartItem(cart, product.title, product.seller);
// //   if (existing) {
// //     existing.count += 1;
// //   } else {
// //     cart.push({ ...product, count: 1 });
// //   }
// //   setCart(cart);
// //   renderCart();
// // }

// // // Attach event listeners to cart buttons
// // function setupCartButtons() {
// //   document.querySelectorAll('.cart[data-action="add-to-cart"]').forEach(btn => {
// //     btn.addEventListener('click', function(e) {
// //       const card = btn.closest('.product__card');
// //       if (!card) return;
// //       const product = {
// //         title: card.getAttribute('data-title'),
// //         desc: card.getAttribute('data-desc'),
// //         price: parseFloat(card.getAttribute('data-price')),
// //         seller: card.getAttribute('data-seller'),
// //         image: card.getAttribute('data-image'),
// //         category: card.closest('.products')?.querySelector('.title__lg')?.textContent || '',
// //       };
// //       addToCart(product);
// //       // Open the modal if not already open
// //       const targetId = btn.getAttribute('data-target');
// //       const modal = document.querySelector(targetId);
// //       if (modal && !modal.classList.contains('show')) {
// //         modal.classList.add('show');
// //         const modalOverlay = document.querySelector('.modal-overlay');
// //         if (modalOverlay) modalOverlay.classList.add('show');
// //         document.body.classList.add('no-scroll');
// //       }
// //       renderCart();
// //       // Prevent default modal-btn logic if needed
// //       e.stopPropagation();
// //     });
// //   });
// // }