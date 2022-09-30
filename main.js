/* En esta seccion se realiza la modificación que permite realizar el despliegue
del menu que se encuentra asociado al correo es la parte superior derecha de la pantalla
en la version desktop */

const menuEmail = document.querySelector(".navbar-email");
menuEmail.addEventListener("click", activarMenu);

const desktopMenu = document.querySelector(".desktop-menu");

const inact = document.querySelector(".inactive");

function activarMenu() {
    let isMenuCarritoInactivo = shoppingCartContainer.classList.contains("containerInactive");

    if (!isMenuCarritoInactivo) {
        shoppingCartContainer.classList.add("containerInactive")
    }
    desktopMenu.classList.toggle("inactive");
}

desktopMenu.addEventListener("mouseleave", desactivarMenu);

function desactivarMenu() {
    desktopMenu.classList.toggle("inactive");
}

/* En esta seccion se activa e inactiva el menu "hamburguesa" de la parte superior 
izquierda de la pantalla en donde se encuentran las categorías */


const menuMobileCategorias = document.querySelector(".mobile-menu");

const menuIconoMobile = document.querySelector(".menu");

menuIconoMobile.addEventListener("click", activarMenu2);

function activarMenu2() {
    let isMenuCarritoInactivo = shoppingCartContainer.classList.contains("containerInactive");

    if (!isMenuCarritoInactivo) {
        shoppingCartContainer.classList.add("containerInactive")
    }
    menuMobileCategorias.classList.toggle("containerInactive");
}

/* En esta seccion se activa e inactiva el menu del carrito de la parte superior 
derecha de la pantalla en donde se encuentran los productos que han sido agregados */


const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const iconoCarrito = document.querySelector(".navbar-shopping-cart");
iconoCarrito.addEventListener("click", mostrarMenuCarrito);

function mostrarMenuCarrito() {
    let isMenuCategoriasInactivo = menuMobileCategorias.classList.contains("containerInactive");
    let isMenuDesktopInactivo = desktopMenu.classList.contains("inactive");

    if (!isMenuCategoriasInactivo) {
        menuMobileCategorias.classList.add("containerInactive");
    } if (!isMenuDesktopInactivo) {
        desktopMenu.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("containerInactive");
}


let productList = [];
let productosLista;
let seccionTarjetas = document.querySelector(".cards-container");

class Productos {
    constructor(imagen, precio, nombre, agregar, clase) {
        this.imagen = imagen;
        this.precio = precio;
        this.nombre = nombre;
        this.agregar = agregar;
        this.clase = clase;
    }
}

let producto1 = new Productos("https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_SX679_.jpg", "334,99", "AMD Ryzen 7 5800X 8-core, 16-Thread Unlocked Desktop Processor", "icons/bt_add_to_cart.svg", "imagen");

let producto2 = new Productos("https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_SX679_.jpg", "217,99", "AMD Ryzen 5 5600X 6-core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler", "icons/bt_add_to_cart.svg", "imagen2");

let producto3 = new Productos("https://m.media-amazon.com/images/I/616VM20+AzL._AC_SX679_.jpg", "389,87", "AMD Ryzen 9 5900X 12-core, 24-Thread Unlocked Desktop Processor", "icons/bt_add_to_cart.svg", "imagen3");

let producto4 = new Productos("https://m.media-amazon.com/images/I/51f2hkWjTlL._AC_SX679_.jpg", "179,97", "AMD Ryzen 5 5600G 6-Core 12-Thread Unlocked Desktop Processor with Radeon Graphics", "icons/bt_add_to_cart.svg", "imagen4");

let producto5 = new Productos("https://m.media-amazon.com/images/I/61THc9DLMCL._AC_SX679_.jpg", "89,95", "AMD Athlon 3000G 2-Core, 4-Thread Unlocked Desktop Processor with Radeon Graphics", "icons/bt_add_to_cart.svg", "imagen5");

let producto6 = new Productos("https://m.media-amazon.com/images/I/51p5BjKPc1L._AC_SX679_.jpg", "290,99", "AMD Ryzen 7 5700G 8-Core, 16-Thread Unlocked Desktop Processor with Radeon Graphics", "icons/bt_add_to_cart.svg", "imagen6");

let producto7 = new Productos("https://m.media-amazon.com/images/I/61RnzuOIOoL._AC_SX679_.jpg", "599,97", "Intel Core i9-12900K Desktop Processor 16 (8P+8E) Cores up to 5.2 GHz Unlocked LGA1700 600 Series Chipset 125W", "icons/bt_add_to_cart.svg", "imagen7");

let producto8 = new Productos("https://m.media-amazon.com/images/I/71idAEIDhvL._AC_SX679_.jpg", "319,99", "Intel® Core™ i7-11700K Desktop Processor 8 Cores up to 5.0 GHz Unlocked LGA1200 (Intel 500 Series & Select 400 Series Chipset) 125W", "icons/bt_add_to_cart.svg", "imagen8");

let producto9 = new Productos("https://m.media-amazon.com/images/I/71TxeMiYJSL._AC_SX679_.jpg", "174,21", "Intel® Core™ i5-11400 Desktop Processor 6 Cores up to 4.4 GHz LGA1200 (Intel® 500 Series & Select 400 Series Chipset) 65W", "icons/bt_add_to_cart.svg", "imagen9");

let producto10 = new Productos("https://m.media-amazon.com/images/I/61nCY30R4iL._AC_SX679_.jpg", "479,99", "MSI Gaming GeForce RTX 3060 12GB 15 Gbps GDRR6 192-Bit HDMI/DP PCIe 4 Torx Triple Fan Ampere OC Graphics Card (RTX 3060 Ventus 3X 12G OC)", "icons/bt_add_to_cart.svg", "imagen10");

let producto11 = new Productos("https://m.media-amazon.com/images/I/715UuCH5OES._AC_SX679_.jpg", "599,99", "GIGABYTE GeForce RTX 3060 Gaming OC 12G (REV2.0) Graphics Card, 3X WINDFORCE Fans, 12GB 192-bit GDDR6, GV-N3060GAMING OC-12GD REV2.0 Video Card", "icons/bt_add_to_cart.svg", "imagen11");

let producto12 = new Productos("https://m.media-amazon.com/images/I/811LI-isyPL._AC_SX679_.jpg", "$589,00", "ASUS ROG Strix NVIDIA GeForce RTX 3060 V2 OC Edition Gaming Graphics Card (PCIe 4.0, 12GB GDDR6, HDMI 2.1, DisplayPort 1.4a, Axial-tech Fan Design, 2.7-Slot, Super Alloy Power II, GPU Tweak II)", "icons/bt_add_to_cart.svg", "imagen12");

let producto13 = new Productos("https://m.media-amazon.com/images/I/71A5jcQ289S._AC_SX679_.jpg", "$634,00", "MSI Gaming GeForce RTX 3060 Ti LHR 8GB GDRR6 256-Bit HDMI/DP Nvlink Torx Fan 3 Ampere Architecture OC Graphics Card (RTX 3060 Ti Ventus 2X 8G OCV1 LHR)", "icons/bt_add_to_cart.svg", "imagen13");

let producto14 = new Productos("https://m.media-amazon.com/images/I/61gvkwjyXLS._AC_SX679_.jpg", "$789,19", "EVGA GeForce RTX 3070 XC3 Ultra Gaming, 08G-P5-3755-KL, 8GB GDDR6, iCX3 Cooling, ARGB LED, Metal Backplate, LHR", "icons/bt_add_to_cart.svg", "imagen14");

let producto15 = new Productos("https://m.media-amazon.com/images/I/81t7Ga7nyxS._AC_SX679_.jpg", "$825,99", "ASUS TUF Gaming NVIDIA GeForce RTX 3070 Ti OC Edition Graphics Card (PCIe 4.0, 8GB GDDR6X, HDMI 2.1, DisplayPort 1.4a, Dual Ball Fan Bearings, Military-Grade Certification, GPU Tweak II)", "icons/bt_add_to_cart.svg", "imagen15");

let producto16 = new Productos("https://m.media-amazon.com/images/I/81itlzbyzIL._AC_SX679_.jpg", "$1,088.00", "EVGA GeForce RTX 3080 12GB FTW3 Ultra Gaming, 12G-P5-4877-KL, 12GB GDDR6X, iCX3 Technology, ARGB LED, Metal Backplate, LHR", "icons/bt_add_to_cart.svg", "imagen16");

let producto17 = new Productos("https://m.media-amazon.com/images/I/71t5WWhtLTL._AC_SX679_.jpg", "$999,00", "MSI Gaming GeForce RTX 3080 LHR 10GB GDRR6X 320-Bit HDMI/DP Nvlink Torx Fan 3 Ampere Architecture OC Graphics Card (RTX 3080 Ventus 3X Plus 10G OC LHR)", "icons/bt_add_to_cart.svg", "imagen17");

let producto18 = new Productos("https://m.media-amazon.com/images/I/81+VQfLlOGS._AC_SX679_.jpg", "$1,428.36", "ASUS TUF Gaming NVIDIA GeForce RTX 3080 Ti OC Edition Graphics Card (PCIe 4.0, 12GB GDDR6X, HDMI 2.1, DisplayPort 1.4a, Dual Ball Fan Bearings, Military-Grade Certification, GPU Tweak II)", "icons/bt_add_to_cart.svg", "imagen18");

let producto19 = new Productos("https://m.media-amazon.com/images/I/81-GWj0nEkL._AC_SX679_.jpg", "$1,799.99", "EVGA GeForce RTX 3090 FTW3 Ultra Gaming, 24GB GDDR6X, iCX3 Technology, ARGB LED, Metal Backplate, 24G-P5-3987-KR", "icons/bt_add_to_cart.svg", "imagen19");

let producto20 = new Productos("https://m.media-amazon.com/images/I/61-7uGhZfQL._AC_SX679_.jpg", "$2,279.06", "MSI Gaming GeForce RTX 3090 24GB GDRR6X 384-Bit HDMI/DP Nvlink Tri-Frozr 2 Ampere Architecture OC Graphics Card (RTX 3090 GAMING X TRIO 24G)", "icons/bt_add_to_cart.svg", "imagen20");

let producto21 = new Productos("https://m.media-amazon.com/images/I/910jyKG9QlL._AC_SX679_.jpg", "$168,50", "MSI MAG B550 TOMAHAWK Gaming Motherboard (AMD AM4, DDR4, PCIe 4.0, SATA 6Gb/s, M.2, USB 3.2 Gen 2, HDMI/DP, ATX, AMD Ryzen 5000 Series processors)", "icons/bt_add_to_cart.svg", "imagen21");

let producto22 = new Productos("https://m.media-amazon.com/images/I/81x069mwcbL._AC_SX679_.jpg", "$209,99", "ASUS ROG Strix B550-F Gaming (WiFi 6) AMD AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Gaming Motherboard (PCIe 4.0, 2.5Gb LAN, BIOS Flashback, HDMI 2.1, Addressable Gen 2 RGB Header and Aura Sync)", "icons/bt_add_to_cart.svg", "imagen22");

let producto23 = new Productos("https://m.media-amazon.com/images/I/81cjC6qipzL._AC_SX679_.jpg", "$680,80", "GIGABYTE X570 AORUS Xtreme (AMD Ryzen 5000/X570/E-ATX/PCIe4.0/DDR4/Aqantia 10GbE LAN/RGB Fusion 2.0/Fins-Array Heatsink/3xM.2 Thermal Guard/USB3.1/Gaming Motherboard)", "icons/bt_add_to_cart.svg", "imagen23");

let producto24 = new Productos("https://m.media-amazon.com/images/I/81IPvOEkCqS._AC_SX679_.jpg", "$362,18", "GIGABYTE X570S AORUS Master (AMD/ X570S/ Ryzen 5000/ ATX/PCIe 4.0/ SATA 20Gb/s/USB 3.2/ Motherboard)", "icons/bt_add_to_cart.svg", "imagen24");

let producto25 = new Productos("https://m.media-amazon.com/images/I/71yyY+Y29WL._AC_SX679_.jpg", "$139,99", "TEAMGROUP T-Force Delta RGB DDR4 32GB (2x16GB) 3600MHz (PC4-28800) CL18 Desktop Gaming Memory Module Ram TF3D432G3600HC18JDC01 - Black", "icons/bt_add_to_cart.svg", "imagen25");

let producto26 = new Productos("https://m.media-amazon.com/images/I/61GpY38PAWL._AC_SX679_.jpg", "$152,99", "CORSAIR VENGEANCE RGB PRO 32GB (2x16GB) DDR4 3600 (PC4-28800) C18 Desktop Memory Black", "icons/bt_add_to_cart.svg", "imagen26");

let producto27 = new Productos("https://m.media-amazon.com/images/I/61l4EStxhnL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg", "$145,99", "G.Skill Trident Z RGB Series 32GB (2 x 16GB) 288-Pin SDRAM PC4-28800 DDR4 3600 CL18-22-22-42 1.35V Dual Channel Desktop Memory Model F4-3600C18D-32GTZR", "icons/bt_add_to_cart.svg", "imagen27");

let producto28 = new Productos("https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_SX679_.jpg", "$216,47", "Kingston 1.92TB A400 SATA 3 2.5 Internal SSD SA400S37/1920G - HDD Replacement for Increase Performance", "icons/bt_add_to_cart.svg", "imagen28");

let producto29 = new Productos("https://m.media-amazon.com/images/I/8176dGPvOKL._AC_SX679_.jpg", "$169,99", "Samsung Electronics 980 PRO SSD with Heatsink 1TB PCIe Gen 4 NVMe M.2 Internal Solid State Hard Drive, Heat Control, Max Speed, PS5 Compatible, MZ-V8P1T0CW", "icons/bt_add_to_cart.svg", "imagen29");

let producto30 = new Productos("https://m.media-amazon.com/images/I/51e41U32IWL._AC_SX679_.jpg", "$169,99", "Corsair iCUE H150i Elite Capellix Liquid CPU Cooler, RGB Pump + Fans, 360mm", "icons/bt_add_to_cart.svg", "imagen30");

let producto31 = new Productos("https://m.media-amazon.com/images/I/61vEo1W5RzL._AC_SX679_.jpg", "$129,99", "Corsair H115i RGB Platinum AIO Liquid CPU Cooler,280mm,Dual ML140 PRO RGB PWM Fans,Intel 115x/2066,AMD AM4/TR4", "icons/bt_add_to_cart.svg", "imagen31");

let producto32 = new Productos("https://m.media-amazon.com/images/I/71w59zv59KL._AC_SX679_.jpg", "$78,99", "Cooler Master MasterLiquid ML240L RGB V2, Close-Loop AIO CPU Liquid Cooler, 240 Radiator, Dual SickleFlow 120mm, RGB Lighting, 3rd Gen Dual Chamber Pump for AMD Ryzen/Intel LGA1151", "icons/bt_add_to_cart.svg", "imagen32");

let producto33 = new Productos("https://m.media-amazon.com/images/I/71DvivF-oPS._AC_SX679_.jpg", "$124,99", "MSI MAG Series CORELIQUID 360R, aRGB CPU Liquid Cooler (AIO): Rotatable Blockhead Design, 360mm Radiator, Triple 120mm aRGB PWM Fans", "icons/bt_add_to_cart.svg", "imagen33");

let producto34 = new Productos("https://m.media-amazon.com/images/I/811hUZ6znwL._AC_SY450_.jpg", "$82,99", "Seagate IronWolf HDD NAS 4TB - Unidad de disco duro interna CMR 3.5 pulgadas, SATA 6Gb/s 5900 RPM caché de 64MB para almacenamiento en la red RAID, empaque sin frustración (ST4000VN008)", "icons/bt_add_to_cart.svg", "imagen34");

let producto35 = new Productos("https://m.media-amazon.com/images/I/714xDSJWrkL._AC_SX679_.jpg", "$79,79", "WD Unidad de disco duro para computadora de escritorio de rendimiento de 2TB negro, Negro", "icons/bt_add_to_cart.svg", "imagen35");

let producto36 = new Productos("https://m.media-amazon.com/images/I/51JMJC17q-L._AC_SX679_.jpg", "$84,99", "Western Digital 2TB WD RED PRO NAS Duro interno HDD - 7200 RPM, SATA 6 GB / S, CMR, Cache de 64 MB, 3.5 - WD2002FFSX", "icons/bt_add_to_cart.svg", "imagen36");

let producto37 = new Productos("https://m.media-amazon.com/images/I/710giQRHyQS._AC_SX679_.jpg", "$168,99", "Corsair RMX Series (2021), RM1000x, 1000 Watt, Gold, Fully Modular Power Supply", "icons/bt_add_to_cart.svg", "imagen37");

let producto38 = new Productos("https://m.media-amazon.com/images/I/71779G+G+YL._AC_SX679_.jpg", "$149,99", "EVGA 210-GQ-1000-V1,1000 GQ, 80+ GOLD 1000W, Semi Modular, EVGA ECO Mode, 5 Year Warranty, Power Supply,Black", "icons/bt_add_to_cart.svg", "imagen38");

let producto39 = new Productos("https://m.media-amazon.com/images/I/61IZzsExFYL._AC_SX679_.jpg", "$69,99", "Gigabyte GP-P750GM (80 Plus Gold 750W, Modular, Smart Fan, Smart Power Protection, Power Supply)", "icons/bt_add_to_cart.svg", "imagen39");

let producto40 = new Productos("https://m.media-amazon.com/images/I/71SuWMR-yZL._AC_SX679_.jpg", "$35,99", "Thermaltake Smart RGB 500W 80+ 256-Color RGB Fan ATX 12V 2.3 Kaby Lake Ready Power Supply 5 Yr Warranty Power Supply PS-SPR-0500NHFAWU-1", "icons/bt_add_to_cart.svg", "imagen40");

let producto41 = new Productos("https://m.media-amazon.com/images/I/718THDeCWFL._AC_SX679_.jpg", "$109,99", "NZXT C750 - NP-C750M - 750 Watt PSU - 80+ Gold Certified - Hybrid Silent Fan Control - Fluid Dynamic Bearings - Modular Design - Sleeved Cables - ATX Gaming Power Supply - 10 Year Warranty", "icons/bt_add_to_cart.svg", "imagen41");

let producto42 = new Productos("https://m.media-amazon.com/images/I/816uztcVLkS._AC_SX679_.jpg", "$138,99", "Cooler Master V850 SFX Gold Full Modular, 850W, 80+ Gold Efficiency, ATX Bracket Included, Quiet FDB Fan, SFX Form Factor, 10 Year Warranty", "icons/bt_add_to_cart.svg", "imagen42");

let producto43 = new Productos("https://m.media-amazon.com/images/I/91rKBZ6KIJL._AC_SX679_.jpg", "$109,99", "MUSETEX ATX PC Case with 6 Pcs 120mm ARGB Fans, Computer Gaming Case Mid-Tower Phantom Black, Tempered Glass Computer Chassis, USB 3.0, MN6-B", "icons/bt_add_to_cart.svg", "imagen43");

let producto44 = new Productos("https://m.media-amazon.com/images/I/81EYYNlBjUL._AC_SX679_.jpg", "$144,99", "Corsair iCUE 4000X RGB Mid-Tower ATX PC Case - White (CC-9011205-WW)", "icons/bt_add_to_cart.svg", "imagen44");

let producto45 = new Productos("https://m.media-amazon.com/images/I/71awibljSrL._AC_SX679_.jpg", "$239,99", "CORSAIR Crystal Series 680X RGB High Airflow Tempered Glass ATX Smart Case, White", "icons/bt_add_to_cart.svg", "imagen45");

let producto46 = new Productos("https://m.media-amazon.com/images/I/81qvqy9qsqL._AC_SX679_.jpg", "$99,99", "MSI MPG Series GUNGNIR 110R, Premium Mid-Tower Gaming PC Case: Tempered Glass Side Panel, ARGB 120mm Fans, Liquid Cooling Support up to 360mm Radiator, Two-Tone Design", "icons/bt_add_to_cart.svg", "imagen46");

let producto47 = new Productos("https://m.media-amazon.com/images/I/71avaDYui+L._AC_SX679_.jpg", "$60,99", "Bgears b-Voguish Gaming PC with Tempered Glass ATX Mid Tower, USB3.0, Support E-ATX, ATX, mATX, ITX. (Note: Fan NOT Included in This Model. Only b-Voguish-RGB (ASIN# B08W2MXBQJ) Come with ARGB Fans)", "icons/bt_add_to_cart.svg", "imagen47");

let producto48 = new Productos("https://m.media-amazon.com/images/I/91yWAMadd5L._AC_SX679_.jpg", "$109,99", "MUSETEX ATX PC Case with 6pcs ARGB Fans, Computer Gaming Cases with Type-C Port and USB 3.0, Mid Tower Case with Mesh Front Panel and Tempered Glass Side Door, Y4", "icons/bt_add_to_cart.svg", "imagen48");

let producto49 = new Productos("https://m.media-amazon.com/images/I/81PP556ClsL._AC_SX679_.jpg", "$159,99", "KEDIERS PC Case - ATX Tower Tempered Glass Gaming Computer Open Frame Case with 7 RGB Fans,C570", "icons/bt_add_to_cart.svg", "imagen49");

let producto50 = new Productos("https://m.media-amazon.com/images/I/511w09QJEVL._AC_SX679_.jpg", "$9,99", "Large RGB Gaming Mouse Pad, 14 Multilight Modes Oversize Glowing Led Mouse Pad, Non-Slip Rubber Base - Waterproof, Computer Keyboard Pad Mat 31.5X11.8IN", "icons/bt_add_to_cart.svg", "imagen50");

let producto51 = new Productos("https://m.media-amazon.com/images/I/61El3EaxB2L._AC_SY879_.jpg", "$18,99", "NPET MP02-SP Gaming Mouse Pad, Cloth Mouse Pad, Anti-Slip Base, RGB Backlit, Stitched Edges, Water-Resistant, Optimized for Gaming Sensors, XL", "icons/bt_add_to_cart.svg", "imagen51");

let producto52 = new Productos("https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SX679_.jpg", "$49,99", "Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC / Mac", "icons/bt_add_to_cart.svg", "imagen52");

let producto53 = new Productos("https://m.media-amazon.com/images/I/51ySu55JzAL._AC_SX679_.jpg", "$107,40", "Logitech G Pro Wireless Gaming Mouse with Esports Grade Performance", "icons/bt_add_to_cart.svg", "imagen53");

let producto54 = new Productos("https://m.media-amazon.com/images/I/713siPvPt1L._AC_SX679_.jpg", "$199,99", "Corsair K100 RGB Optical-Mechanical Gaming Keyboard - Corsair OPX RGB Optical-Mechanical Keyswitches - AXON Hyper-Processing Technology for 4X Faster Throughput", "icons/bt_add_to_cart.svg", "imagen54");

productList.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21, producto22, producto23, producto24, producto25, producto26, producto27, producto28, producto29, producto30, producto31, producto32, producto33, producto34, producto35, producto36, producto37, producto38, producto39, producto40, producto41, producto42, producto43, producto44, producto45, producto46, producto47, producto48, producto49, producto50, producto51, producto52, producto53, producto54);

productList.forEach((producto) => {
    productosLista = `

    <div class="product-card">
    <img src= ${producto.imagen} class = ${producto.clase} id="general" alt="">
    <div class="product-info">
        <div>
            <p>${producto.precio}</p>
            <p>${producto.nombre}</p>
        </div>
        <figure>
        <img src= ${producto.agregar} alt="add to cart">
        </figure>
    </div>
</div>
    `

    seccionTarjetas.innerHTML += productosLista;

})


let productDetail = document.querySelector("#productDetail");

let imagenProducto = document.querySelector(".imagen"); let imagenProducto2 = document.querySelector(".imagen2"); let imagenProducto3 = document.querySelector(".imagen3"); let imagenProducto4 = document.querySelector(".imagen4"); let imagenProducto5 = document.querySelector(".imagen5"); let imagenProducto6 = document.querySelector(".imagen6"); let imagenProducto7 = document.querySelector(".imagen7"); let imagenProducto8 = document.querySelector(".imagen8"); let imagenProducto9 = document.querySelector(".imagen9"); let imagenProducto10 = document.querySelector(".imagen10"); let imagenProducto11 = document.querySelector(".imagen11"); let imagenProducto12 = document.querySelector(".imagen12"); let imagenProducto13 = document.querySelector(".imagen13"); let imagenProducto14 = document.querySelector(".imagen14"); let imagenProducto15 = document.querySelector(".imagen15"); let imagenProducto16 = document.querySelector(".imagen16"); let imagenProducto17 = document.querySelector(".imagen17"); let imagenProducto18 = document.querySelector(".imagen18"); let imagenProducto19 = document.querySelector(".imagen19"); let imagenProducto20 = document.querySelector(".imagen20"); let imagenProducto21 = document.querySelector(".imagen21"); let imagenProducto22 = document.querySelector(".imagen22"); let imagenProducto23 = document.querySelector(".imagen23"); let imagenProducto24 = document.querySelector(".imagen24"); let imagenProducto25 = document.querySelector(".imagen25"); let imagenProducto26 = document.querySelector(".imagen26"); let imagenProducto27 = document.querySelector(".imagen27"); let imagenProducto28 = document.querySelector(".imagen28"); let imagenProducto29 = document.querySelector(".imagen29"); let imagenProducto30 = document.querySelector(".imagen30"); let imagenProducto31 = document.querySelector(".imagen31"); let imagenProducto32 = document.querySelector(".imagen32"); let imagenProducto33 = document.querySelector(".imagen33"); let imagenProducto34 = document.querySelector(".imagen34"); let imagenProducto35 = document.querySelector(".imagen35"); let imagenProducto36 = document.querySelector(".imagen36"); let imagenProducto37 = document.querySelector(".imagen37"); let imagenProducto38 = document.querySelector(".imagen38"); let imagenProducto39 = document.querySelector(".imagen39"); let imagenProducto40 = document.querySelector(".imagen40"); let imagenProducto41 = document.querySelector(".imagen41"); let imagenProducto42 = document.querySelector(".imagen42");
let imagenProducto43 = document.querySelector(".imagen43"); let imagenProducto44 = document.querySelector(".imagen44"); let imagenProducto45 = document.querySelector(".imagen45"); let imagenProducto46 = document.querySelector(".imagen46"); let imagenProducto47 = document.querySelector(".imagen47"); let imagenProducto48 = document.querySelector(".imagen48"); let imagenProducto49 = document.querySelector(".imagen49"); let imagenProducto50 = document.querySelector(".imagen50"); let imagenProducto51 = document.querySelector(".imagen51"); let imagenProducto52 = document.querySelector(".imagen52"); let imagenProducto53 = document.querySelector(".imagen53"); let imagenProducto54 = document.querySelector(".imagen54");




imagenProducto.addEventListener("click", imprimirDetalle.bind(null, imagenProducto)); imagenProducto2.addEventListener("click", imprimirDetalle.bind(null, imagenProducto2)); imagenProducto3.addEventListener("click", imprimirDetalle.bind(null, imagenProducto3)); imagenProducto4.addEventListener("click", imprimirDetalle.bind(null, imagenProducto4)); imagenProducto5.addEventListener("click", imprimirDetalle.bind(null, imagenProducto5)); imagenProducto6.addEventListener("click", imprimirDetalle.bind(null, imagenProducto6)); imagenProducto7.addEventListener("click", imprimirDetalle.bind(null, imagenProducto7)); imagenProducto8.addEventListener("click", imprimirDetalle.bind(null, imagenProducto8)); imagenProducto9.addEventListener("click", imprimirDetalle.bind(null, imagenProducto9)); imagenProducto10.addEventListener("click", imprimirDetalle.bind(null, imagenProducto10)); imagenProducto11.addEventListener("click", imprimirDetalle.bind(null, imagenProducto11)); imagenProducto12.addEventListener("click", imprimirDetalle.bind(null, imagenProducto12)); imagenProducto13.addEventListener("click", imprimirDetalle.bind(null, imagenProducto13)); imagenProducto14.addEventListener("click", imprimirDetalle.bind(null, imagenProducto14)); imagenProducto15.addEventListener("click", imprimirDetalle.bind(null, imagenProducto15)); imagenProducto16.addEventListener("click", imprimirDetalle.bind(null, imagenProducto16)); imagenProducto17.addEventListener("click", imprimirDetalle.bind(null, imagenProducto17)); imagenProducto18.addEventListener("click", imprimirDetalle.bind(null, imagenProducto18)); imagenProducto19.addEventListener("click", imprimirDetalle.bind(null, imagenProducto19)); imagenProducto20.addEventListener("click", imprimirDetalle.bind(null, imagenProducto20)); imagenProducto21.addEventListener("click", imprimirDetalle.bind(null, imagenProducto21)); imagenProducto22.addEventListener("click", imprimirDetalle.bind(null, imagenProducto22)); imagenProducto23.addEventListener("click", imprimirDetalle.bind(null, imagenProducto23)); imagenProducto24.addEventListener("click", imprimirDetalle.bind(null, imagenProducto24)); imagenProducto25.addEventListener("click", imprimirDetalle.bind(null, imagenProducto25)); imagenProducto26.addEventListener("click", imprimirDetalle.bind(null, imagenProducto26)); imagenProducto27.addEventListener("click", imprimirDetalle.bind(null, imagenProducto27)); imagenProducto28.addEventListener("click", imprimirDetalle.bind(null, imagenProducto28));
imagenProducto29.addEventListener("click", imprimirDetalle.bind(null, imagenProducto29)); imagenProducto30.addEventListener("click", imprimirDetalle.bind(null, imagenProducto30)); imagenProducto31.addEventListener("click", imprimirDetalle.bind(null, imagenProducto31)); imagenProducto32.addEventListener("click", imprimirDetalle.bind(null, imagenProducto32)); imagenProducto33.addEventListener("click", imprimirDetalle.bind(null, imagenProducto33)); imagenProducto34.addEventListener("click", imprimirDetalle.bind(null, imagenProducto34)); imagenProducto35.addEventListener("click", imprimirDetalle.bind(null, imagenProducto35)); imagenProducto36.addEventListener("click", imprimirDetalle.bind(null, imagenProducto36)); imagenProducto37.addEventListener("click", imprimirDetalle.bind(null, imagenProducto37)); imagenProducto38.addEventListener("click", imprimirDetalle.bind(null, imagenProducto38)); imagenProducto39.addEventListener("click", imprimirDetalle.bind(null, imagenProducto39)); imagenProducto40.addEventListener("click", imprimirDetalle.bind(null, imagenProducto40)); imagenProducto41.addEventListener("click", imprimirDetalle.bind(null, imagenProducto41)); imagenProducto42.addEventListener("click", imprimirDetalle.bind(null, imagenProducto42));
imagenProducto43.addEventListener("click", imprimirDetalle.bind(null, imagenProducto43));
imagenProducto44.addEventListener("click", imprimirDetalle.bind(null, imagenProducto44)); imagenProducto45.addEventListener("click", imprimirDetalle.bind(null, imagenProducto45)); imagenProducto46.addEventListener("click", imprimirDetalle.bind(null, imagenProducto46)); imagenProducto47.addEventListener("click", imprimirDetalle.bind(null, imagenProducto47)); imagenProducto48.addEventListener("click", imprimirDetalle.bind(null, imagenProducto48)); imagenProducto49.addEventListener("click", imprimirDetalle.bind(null, imagenProducto49)); imagenProducto50.addEventListener("click", imprimirDetalle.bind(null, imagenProducto50)); imagenProducto51.addEventListener("click", imprimirDetalle.bind(null, imagenProducto51)); imagenProducto52.addEventListener("click", imprimirDetalle.bind(null, imagenProducto52)); imagenProducto53.addEventListener("click", imprimirDetalle.bind(null, imagenProducto53)); imagenProducto54.addEventListener("click", imprimirDetalle.bind(null, imagenProducto54));




function imprimirDetalle(imagenP) {

    for (i = 0; i < productList.length; i++) {
        if (productList[i].clase === imagenP.className) {
            productosLista = `
        
            <div class="product-detail-close">
            <img src="icons/icon_close.png" class="close-icon" alt="close">
            
            </div>
            <img src= ${productList[i].imagen} alt="">
            <div class="product-info2">
            <p>${productList[i].precio}</p>
            <p>${productList[i].nombre}</p>
            <p>The latest iteration of MSI’s iconic GAMING series once again brings performance, low-noise efficiency,
                and aesthetics that hardcore gamers have come to recognize and trust. Now you too can enjoy all your
                favorite games with a powerful graphics card that stays cool and silent. Just the way you like it. The
                GeForce RTX 3080 delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA's 2nd gen
                RTX architecture. It's built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and
                superfast G6X memory for an amazing gaming experience. This GeForce RTX 3080 graphics card with LHR
                (lite hash rate) delivers 43 MH/s ETH hash rate.</p>
                <button class="primary-button add-to-cart-button">
                    <img src=${productList[i].agregar} alt="addtocart">
                    Add to cart
                </button>
            </div>
            `

            productDetail.innerHTML = productosLista;
            break;
        }
    }

}
let seleccionador = document.querySelectorAll("#general");
seleccionador.forEach(function (p, g) {
    p.addEventListener("click", function () {
        productDetail.classList.remove("inactive");
        let seleccionadorCerrar = document.querySelector(".close-icon");
        console.log(seleccionadorCerrar)
        seleccionadorCerrar.addEventListener("click", function () {
            productDetail.classList.add("inactive");
        });
    });
});




