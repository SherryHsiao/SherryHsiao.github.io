const appleList = [
    {
        "product": "iPhone 14 Pro",
        "mainpic": "apple-pics/iphone14pro_pic0.jpg",
        "color": [
            {
                "colorName": "Deep Purle",
                "colorHashtag": "#635A6D",
                "colorImg": "apple-pics/iphone14pro_pic1.webp"
            },
            {
                "colorName": "Gold",
                "colorHashtag": "#F4E8CE",
                "colorImg": "apple-pics/iphone14pro_pic2.webp"
            },
            {
                "colorName": "Silver",
                "colorHashtag": "#F1F3F2",
                "colorImg": "apple-pics/iphone14pro_pic3.webp"
            },
            {
                "colorName": "Space Black",
                "colorHashtag": "#504F4D",
                "colorImg": "apple-pics/iphone14pro_pic4.webp"
            }
        ],
        "storage": [
            { "128GB": "$34900" },
            { "256GB": "$38400" },
            { "512GB": "$45400" },
            { "1TB": "$52400" }
        ],
        // "other":""
    },

    {
        "product": "iPad Pro",
        "mainpic": "apple-pics/ipad_pic0.webp",
        "color": [
            {
                "colorName": "Silver",
                "colorHashtag": "#E3E4E5",
                "colorImg": "apple-pics/ipad_pic1.webp"
            },
            {
                "colorName": "Space Gray",
                "colorHashtag": "#706E73",
                "colorImg": "apple-pics/ipad_pic2.webp"
            },
        ],
        "storage": [
            { "128GB": "$27900" },
            { "256GB": "$31400" },
            { "512GB": "$38400" },
            { "1TB": "$52400" },

        ],
        // "other": [
        //   "Wi-Fi", "Wi-Fi + Cellular"
        // ]
    },

    {
        "product": "MacBook Pro",
        "mainpic": "apple-pics/mac_pic0.webp",
        "color": [
            {
                "colorName": "Silver",
                "colorHashtag": "#E3E4E5",
                "colorImg": "apple-pics/mac_pic1.webp"
            },
            {
                "colorName": "Space Gray",
                "colorHashtag": "#706E73",
                "colorImg": "apple-pics/mac_pic2.webp"
            },
        ],
        "storage": [
            { "512GB": "$59900" },
            { "1TB": "$65900" },
            { "2TB": "$77900" },
            { "4TB": "$95900" }

        ],
        // "other": [
        //   "16GB", "32GB"
        // ]
    }
]

const btnIphone = document.querySelector("#iphone-btn");
const btnIpad = document.querySelector("#ipad-btn");
const btnMac = document.querySelector("#mac-btn");
const displayProducts = document.querySelector(".display-products");
const displayImg = document.querySelector("#main-pic");
const productImg = document.querySelector("#product-img");
const colorBlock = document.querySelector(".btns-color");
const storageBlock = document.querySelector(".btns-storage");
// const otherBlock = document.querySelector(".btns-other");
const displayPrice = document.querySelector(".display-price");

window.onload = function () {
    setWebPage(0);
    btnIphone.addEventListener("click", function () { setWebPage(0) });
    btnIpad.addEventListener("click", function () { setWebPage(1) });
    btnMac.addEventListener("click", function () { setWebPage(2) });
}

function setWebPage(productIdx) {
    colorBlock.innerHTML = "";
    storageBlock.innerHTML = "";
    // otherBtns.innerHTML = "";
    displayPrice.innerText = "";

    productImg.setAttribute("src", appleList[productIdx].mainpic)

    //設定color按鈕區域
    let colorRow = document.createElement("div");
    colorRow.setAttribute("class", "row");

    appleList[productIdx].color.forEach((colorItem) => {
        let colorCol = document.createElement("div");
        colorCol.setAttribute("class", "col-3");
        colorCol.classList.add("col-md-3");
        colorCol.classList.add("col-lg-3");

        let colorBtn = document.createElement("button");
        colorBtn.setAttribute("class", "btn");
        colorBtn.classList.add("btn-outline-secondary");
        colorBtn.classList.add("btn-sm");

        let colorBox = document.createElement("div");
        colorBox.setAttribute("class", "color-box");
        colorBox.setAttribute("style", `background-color:${colorItem.colorHashtag}`);
        let colorName = document.createElement("div");
        colorName.setAttribute("class", "color-name");
        colorName.innerText = colorItem.colorName;


        colorBtn.append(colorBox, colorName);
        colorCol.append(colorBtn);
        colorRow.append(colorCol);

        colorBlock.append(colorRow);

        colorBtn.addEventListener("click", function () {
            productImg.src = "";
            // console.log(colorItem.colorImg);
            productImg.src = `${colorItem.colorImg}`;
            // console.log(`${productImg.src}`)
        })

    })

    //設定storage按鈕區域
    let storageRow = document.createElement("div");
    storageRow.setAttribute("class", "row");

    appleList[productIdx].storage.forEach((storageItem) => {
        let storageCol = document.createElement("div");
        storageCol.setAttribute("class", "col-3");
        storageCol.classList.add("col-md-3");
        storageCol.classList.add("col-lg-3");

        let storageBtn = document.createElement("button");
        storageBtn.setAttribute("class", "btn");
        storageBtn.classList.add("btn-outline-secondary")
        storageBtn.classList.add("btn-sm");

        let gb = document.createElement("div");
        gb.setAttribute("class", "gb");
        let gbH2 = document.createElement("h2");
        gbH2.innerText = Object.keys(storageItem);

        let gbPrice = document.createElement("div");
        gbPrice.setAttribute("class", "gb-price");
        gbPrice.innerText = Object.values(storageItem);


        gb.append(gbH2);
        storageBtn.append(gb, gbPrice);
        storageCol.append(storageBtn);
        storageRow.append(storageCol);

        storageBlock.append(storageRow);


        //點擊storageBtn會秀價格
        storageBtn.addEventListener("click", function () {
            displayPrice.innerText = Object.values(storageItem);
        })

    })

}