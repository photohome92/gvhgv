let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ================= PRODUCTS ================= */
const products = {
frames:{name:"Frames",price:1599,desc:"Premium quality wall frames.\nPerfect for home & office decoration."},

mirrorframes:{name:"Mirror Frames",price:2000,desc:"Elegant mirror finish frames.\nAdds luxury and modern look to space."},

magicmirrorframes:{name:"Magic Mirror Frames",price:2000,desc:"Smart magic mirror effect frames.\nChanges look with lighting and angle."},

whitemug:{name:"White Mug",price:799,desc:"Classic white ceramic mug.\nPerfect for daily tea & coffee use."},

colourmug:{name:"Colour Mug",price:1099,desc:"Bright and stylish colored mugs.\nMakes every sip more fun and vibrant."},

heartmug:{name:"Heart Mug",price:1199,desc:"Romantic heart-shaped design mug.\nBest for gifting your loved ones."},

magicmug:{name:"Magic Mug",price:1199,desc:"Heat sensitive magic mug.\nReveals hidden design when hot liquid is added."},

shirtwhite:{name:"White Shirt",price:799,desc:"Simple and classy white shirt.\nComfortable fabric for daily wear."},

shirtcolour:{name:"Colour Shirt",price:1499,desc:"Trendy colorful shirts for all occasions.\nStylish look with premium comfort."},

wallet:{name:"Wallet",price:1299,desc:"Premium quality leather wallet.\nDurable design with multiple card slots."},

keyring:{name:"Keyring",price:499,desc:"Stylish metal keyring design.\nPerfect small gift for everyday use."},

chain:{name:"Chain",price:499,desc:"Elegant fashion chain for style lovers.\nLightweight and comfortable to wear."},

ring:{name:"Ring",price:245,desc:"Affordable stylish finger ring.\nSimple design for daily fashion use."},

album:{name:"Album",price:999,desc:"High-quality photo memory album.\nSafely store your precious moments."},

cushion:{name:"Cushion",price:749,desc:"Soft and comfortable cushion.\nPerfect for sofa, bed, or gifting."}
};

/* ================= LOAD PRODUCTS ================= */
window.addEventListener("DOMContentLoaded", () => {

let grid = document.getElementById("productGrid");

/* SAFETY CHECK */
if(!grid) return;

for(let id in products){
let p = products[id];

grid.innerHTML += `
<div class="card">
<img src="images/${id}1.jpg">

<div class="info">
<h3>${p.name}</h3>
<p class="price">Rs ${p.price}</p>
<p class="desc">${p.desc}</p>

<button class="view-btn" onclick="openProduct('${id}')">View</button>
<button class="cart-btn2" onclick="addToCart('${p.name}',${p.price})">Add To Cart</button>

</div>
</div>
`;
}

/* PRODUCT PAGE LOAD */
let current = localStorage.getItem("product");

if(current && products[current]){
let p = products[current];

let nameEl = document.getElementById("name");
let descEl = document.getElementById("desc");
let priceEl = document.getElementById("price");

if(nameEl) nameEl.innerText = p.name;
if(descEl) descEl.innerText = p.desc;
if(priceEl) priceEl.innerText = "Rs " + p.price;

/* IMAGES */
window.images = [
"images/" + current + "1.jpg",
"images/" + current + "2.jpg",
"images/" + current + "3.jpg"
];

window.index = 0;
showImg();
}

});

/* ================= FUNCTIONS ================= */
function openProduct(id){
localStorage.setItem("product",id);
location.href="product.html";
}

function addToCart(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
alert("Added 🛒");
}

function addToCartSingle(){
let id = localStorage.getItem("product");

if(!products[id]) return;

let p = products[id];
cart.push({name:p.name,price:p.price});
localStorage.setItem("cart",JSON.stringify(cart));
alert("Added 🛒");
}

/* ================= IMAGE SLIDER ================= */
function showImg(){
let img = document.getElementById("mainImg");
if(img && window.images){
img.src = window.images[window.index];
}
}

function nextImg(){
if(!window.images) return;
window.index++;
if(window.index >= window.images.length) window.index = 0;
showImg();
}

function prevImg(){
if(!window.images) return;
window.index--;
if(window.index < 0) window.index = window.images.length - 1;
showImg();
}