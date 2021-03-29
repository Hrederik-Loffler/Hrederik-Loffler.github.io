// Get the elements with class="column"
var elements = document.getElementsByClassName("product-card")
var elementsList = document.getElementsByClassName("product-card--list")

var productImage = document.getElementsByClassName("product-card__image")
var productImageList = document.getElementsByClassName("product-card__image--list")

var wraper = document.getElementsByClassName("wraper")
var wraperList = document.getElementsByClassName("wraper--list")

var productTitle = document.getElementsByClassName("product-card__title")
var productTitleList = document.getElementsByClassName("product-card__title--list")

var productDesc = document.getElementsByClassName("product-card__desc")
var productDescList = document.getElementsByClassName("product-card__desc--list")

var productPrice = document.getElementsByClassName("product-card__price")
var productPriceList = document.getElementsByClassName("product-card__price--list")

var productPriceCost = document.getElementsByClassName("product-card__price__cost")
var productPriceCostList = document.getElementsByClassName("product-card__price__cost--list")

var btn = document.getElementsByClassName("btn")
var btnList = document.getElementsByClassName("btn--list")


let i;

function listView() {
    for (i = 0; i < elements.length; i * 2) {
        elements[i].className = "product-card--list"
        productImage[i].className = "product-card__image--list"
        wraper[i].className = "wraper--list"
        productTitle[i].className = "product-card__title--list"
        productDesc[i].className = "product-card__desc--list"
        productPrice[i].className = "product-card__price--list"
        productPriceCost[i].className = "product-card__price__cost--list"
        btn[i].className = "btn--list"
    }
}

function gridView() {
    for (i = 0; i < elementsList.length; i * 2) {
        elementsList[i].className = "product-card"
        productImageList[i].className = "product-card__image"
        wraperList[i].className = "wraper"
        productTitleList[i].className = "product-card__title"
        productDescList[i].className = "product-card__desc"
        productPriceList[i].className = "product-card__price"
        productPriceCostList[i].className = "product-card__price__cost"
        btnList[i].className = "btn"
    }
}



const ulTag = document.getElementById("paginationList")
const paginationDiv = document.getElementById("pagination")
let totalPages = 231
let prevPaginationBtn = document.getElementById("paginationPrev")
let nextPaginationBtn = document.getElementById("paginationNext")

function element(totalPages, page) {
    let liTag = ''
    let btnTag = ''
    let activeLi = ''
    let beforePages = page - 1
    let afterPages = page + 1

    if (page > 1) {
        liTag += `<li class="btn-prev" onclick="element(totalPages, ${page - 1})"><span><i class="fas fa-arrow-left"></i></span></li>`;
        // paginationDiv.innerHTML = btnTag
    }
    if (page > 2) {
        liTag += `<li class="numb" onclick="element(totalPages, 1)"><span>1</span></li>`
    }
    if (page > 3) {
        liTag += `<li class="dots"><span>...</span></li>`
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
        if(pageLength > totalPages) {
            continue;
        }
        if (page == pageLength) {
            activeLi = "active"
        } else {
            activeLi = ""
        }
        liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
    }

    if (page < totalPages - 1) {
        if (page < totalPages - 2) {
            liTag += `<li class="dots"><span>...</span></li>`
        }
        liTag += `<li class="numb" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`
    }


    if (page < totalPages) {
        liTag += `<li class="btn-next" onclick="element(totalPages, ${page + 1})"><span><i class="fas fa-arrow-right"></i></span></li>`;
        // paginationDiv.innerHTML = btnTag
    }

    // paginationDiv.innerHTML = btnTag + liTag
    ulTag.innerHTML = liTag
}
element(totalPages, 4)


const toggle = document.getElementById("toggle")
const overlay = document.getElementById("overlay")

function toggleToggle() {
    toggle.classList.toggle("active")
}

function toggleMenu() {
    overlay.classList.toggle("open")
}

toggle.addEventListener("click", toggleToggle)
toggle.addEventListener("click", toggleMenu, false)

// ======================================================================================================================

document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
    this.querySelector('.custom-select').classList.toggle('open');
})


for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}

// window.addEventListener('click', function(e) {
//     const select = document.querySelector('.custom-select')
//     if (!select.contains(e.target)) {
//         select.classList.remove('open');
//     }
// });

// for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
//     dropdown.addEventListener('click', function() {
//         this.querySelector('.custom-select').classList.toggle('open');
//     })
// }

// window.addEventListener('click', function(e) {
//     for (const select of document.querySelectorAll('.custom-select')) {
//         if (!select.contains(e.target)) {
//             select.classList.remove('open');
//         }
//     }
// });
