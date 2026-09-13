// js/index.js (เวอร์ชันสมบูรณ์)

// ฟังก์ชันสำหรับสร้างและดึง Session ID จาก localStorage
function initializeSession() {
    let sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
        sessionId = 'sess-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
}

// เรียกใช้ฟังก์ชันนี้เพื่อให้แน่ใจว่าเรามี sessionId พร้อมใช้เสมอ
const userSessionId = initializeSession();


// --- ส่วนจัดการ UI ทั่วไป (โค้ดเดิมของคุณ) ---

// ดึง element ออกมา
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// เปิดเมนู
openMenu.addEventListener("click", function () {
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

// ปิดเมนูเมื่อกด X
closeMenu.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

// ปิดเมนูเมื่อคลิก overlay
overlay.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

// ส่วนของการเลื่อนลงทำให้ head เปลี่ยน background
window.addEventListener("scroll", function () {
    const header = document.querySelector(".head");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// --- จบส่วน UI ทั่วไป ---


// --- ส่วนจัดการตะกร้าสินค้า (Heart Icon) ---
const overlayHeart = document.getElementById("overlay-heart");
const toast = document.getElementById("toast");
// PROJECT LOUIS VUITTON/js/index.js

function attachHeartEventListeners() {
    document.querySelectorAll(".heart").forEach(heart => {
        heart.addEventListener("click", async () => {
            const card = heart.closest(".card");
            const productId = card.getAttribute('data-product-id');
            const isAlreadyActive = heart.classList.contains('active');

            const endpoint = isAlreadyActive ? '/api/cart/remove' : '/api/cart/add';
            const method = isAlreadyActive ? 'DELETE' : 'POST';

            try {
                const response = await fetch(`http://localhost:3001${endpoint}`, {
                    method: method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        sessionId: userSessionId,
                        productId: parseInt(productId)
                    })
                });

                const result = await response.json();

                if (result.success) {
                    // --- ส่วนแก้ไข เริ่มตรงนี้ ---

                    // 1. สลับสถานะปุ่ม
                    heart.classList.toggle("active");
                    heart.textContent = heart.classList.contains("active") ? "❤" : "♡";

                    // 2. ดึงข้อมูลสินค้าสำหรับแสดงผล
                    const productName = card.querySelector(".product-name").textContent;
                    const productImg = card.querySelector("img").src;

                    // 3. สร้าง Toast ตามสถานะ (เพิ่ม หรือ ลบ)
                    if (heart.classList.contains("active")) { // สถานะใหม่คือ "เพิ่ม"
                        toast.innerHTML = `
                            <img src="${productImg}" alt="product">
                            <div class="toast-text">
                                <span>เพิ่ม "${productName}" ไปยังตะกร้าสินค้าแล้ว</span> <br>
                                <a href="#" style="color:black;" onclick="showCart(); return false;">ดูตะกร้าสินค้า</a>
                            </div>
                            <button class="close-btn">&times;</button>
                        `;
                    } else { // สถานะใหม่คือ "เอาออก"
                        toast.innerHTML = `
                            <div class="toast-text">
                                <span>เอา "${productName}" ออกจากตะกร้าสินค้าแล้ว</span>
                            </div>
                            <button class="close-btn">&times;</button>
                        `;
                    }

                    // 4. แสดง Toast และ Overlay
                    toast.classList.add("show");
                    overlayHeart.classList.add("active");

                    // 5. เพิ่ม Logic การปิด
                    const closeBtn = toast.querySelector(".close-btn");
                    closeBtn.onclick = () => {
                        toast.classList.remove("show");
                        overlayHeart.classList.remove("active");
                    };

                    // (Optional) ทำให้ Toast หายไปเองใน 5 วินาที
                    setTimeout(() => {
                        toast.classList.remove("show");
                        overlayHeart.classList.remove("active");
                    }, 5000);

                    // --- จบส่วนแก้ไข ---

                } else {
                    alert('มีปัญหา: ' + result.message);
                }
            } catch (error) {
                console.error('Error toggling cart item:', error);
                alert('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้');
            }
        });
    });
}


// --- ส่วน Login, Search, Accordion, Chat (โค้ดเดิมของคุณ) ---
// (ส่วนนี้ผมตัดโค้ดส่วนอื่นของคุณมาวางให้ครบถ้วน)
const userIcon = document.getElementById("userIcon");
const loginPopup = document.getElementById("login-popup");
if (loginPopup) {
    const closeLogin = loginPopup.querySelector(".close-login");
    userIcon.addEventListener("click", () => {
        loginPopup.classList.add("active");
        overlay.classList.add("active");
    });
    closeLogin.addEventListener("click", () => {
        loginPopup.classList.remove("active");
        overlay.classList.remove("active");
    });
}
overlay.addEventListener("click", () => {
    loginPopup.classList.remove("active");
});
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const toggle = header.querySelector('.toggle');
        if (content.style.display === 'block') {
            content.style.display = 'none';
            toggle.textContent = '+';
        } else {
            content.style.display = 'block';
            toggle.textContent = '-';
        }
    });
});
document.getElementById('chatBtn').addEventListener('click', () => {
    document.getElementById('chatBox').style.display = 'block';
});
document.getElementById('closeChat').addEventListener('click', () => {
    document.getElementById('chatBox').style.display = 'none';
});
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const chatBtn = document.getElementById('chatBtn');
        chatBtn.classList.add('show');
    }, 3000);
});
// --- จบส่วน Login, Search, Accordion, Chat ---


// --- ฟังก์ชันหลักในการดึงและแสดงผลสินค้า ---
// --- ฟังก์ชันหลักในการดึงและแสดงผลสินค้า (เวอร์ชันอัปเกรด) ---
async function displayProducts() {
    try {
        // 1. ยิง API 2 เส้นทางพร้อมกันเพื่อขอ "สินค้าทั้งหมด" และ "สินค้าในตะกร้า"
        const [productsResponse, cartResponse] = await Promise.all([
            fetch('http://localhost:3001/api/products'),
            fetch(`http://localhost:3001/api/cart/${userSessionId}`)
        ]);

        const productsResult = await productsResponse.json();
        const cartResult = await cartResponse.json();

        // 2. เตรียมข้อมูลสินค้าในตะกร้าเพื่อใช้เช็คได้ง่ายๆ โดยเก็บแค่ ID
        const cartProductIds = new Set(cartResult.data.map(item => item.product_id));

        if (productsResult.success && productsResult.data.length > 0) {
            const container1 = document.getElementById('product-list-1');
            const container2 = document.getElementById('product-list-2');
            if (container1) container1.innerHTML = '';
            if (container2) container2.innerHTML = '';

            productsResult.data.forEach(product => {
                // 3. เช็คว่าสินค้าชิ้นนี้อยู่ในตะกร้าหรือไม่
                const isInCart = cartProductIds.has(product.product_id);

                // 4. กำหนด class และไอคอนของหัวใจตามสถานะที่เช็คได้
                const heartClass = isInCart ? 'heart active' : 'heart';
                const heartIcon = isInCart ? '❤' : '♡';

                const productCard = `
                    <div class="card" data-product-id="${product.product_id}">
                        <div class="piccard">
                            <img src="${product.image_url}" alt="${product.name}">
                            <p class="${heartClass}">${heartIcon}</p>
                        </div>
                        <div class="textcard">
                            <p class="product-name">${product.name}</p>
                            <p class="pcard">฿${parseFloat(product.price).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                        </div>
                    </div>
                `;

                if (product.category_id === 1 && container1) {
                    container1.innerHTML += productCard;
                } else if (product.category_id === 2 && container2) {
                    container2.innerHTML += productCard;
                }
            });

            attachHeartEventListeners();
        }
    } catch (error) {
        console.error('Error fetching initial page data:', error);
    }
}
// --- จุดเริ่มต้นการทำงานของเว็บ ---
// เมื่อหน้าเว็บโหลดเสร็จ ให้เรียกฟังก์ชัน displayProducts()
document.addEventListener('DOMContentLoaded', displayProducts);

// js/index.js


// --- ส่วนแสดงผลตะกร้าสินค้า ---
const viewCartBtn = document.getElementById('viewCartBtn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartSidebar = document.getElementById('closeCartSidebar');
const cartItemsContainer = document.getElementById('cart-items-container');

async function showCart() {
    if (!cartSidebar || !cartItemsContainer) return;

    try {
        const response = await fetch(`http://localhost:3001/api/cart/${userSessionId}`);
        const result = await response.json();

        if (result.success && result.data) {
            cartItemsContainer.innerHTML = ''; // เคลียร์ของเก่าก่อน

            if (result.data.length === 0) {
                cartItemsContainer.innerHTML = '<p style="text-align: center; margin-top: 20px;">ตะกร้าของคุณว่างเปล่า</p>';
            } else {
                result.data.forEach(item => {
                    const itemHTML = `
                        <div class="cart-item" style="display: flex; padding: 10px; border-bottom: 1px solid #eee;">
                            <img src="${item.image_url}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; margin-right: 10px;">
                            <div>
                                <p style="font-weight: bold;">${item.name}</p>
                                <p>จำนวน: ${item.quantity}</p>
                                <p style="opacity: 0.7;">฿${parseFloat(item.price).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                            </div>
                        </div>
                    `;
                    cartItemsContainer.innerHTML += itemHTML;
                });
            }

            // แสดง Sidebar
            cartSidebar.classList.add('active');
            overlay.classList.add('active');
        }
    } catch (error) {
        console.error('Error fetching cart:', error);
        alert('ไม่สามารถดึงข้อมูลตะกร้าได้');
    }
}

// ผูก Event ให้ปุ่ม
if (viewCartBtn) {
    viewCartBtn.addEventListener('click', showCart);
}
if (closeCartSidebar) {
    closeCartSidebar.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
}
// ทำให้ overlay ปิด sidebar ของตะกร้าได้ด้วย (ต้องวางไว้หลัง event เดิมของ overlay)
overlay.addEventListener('click', () => {
    if (cartSidebar && cartSidebar.classList.contains('active')) {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
});
