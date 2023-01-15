//宣告
//格子資料
let brickData = [
    {
        id: "1",
        color: "#940000",
        icon: "fa-solid fa-envelope",
        target: function () {
            return "獲得購物金 $80";
        }
    },
    {
        id: "2",
        color: "#EBB466",
        icon: "fa-solid fa-sack-dollar",
        target: function () {
            return "結帳享 88 折優惠";
        }
    },
    {
        id: "3",
        color: "#560000",
        icon: "fa-solid fa-coins",
        target: function () {
            return "紅利點數 2 倍送";
        }
    },
    {
        id: "4",
        color: "#940000",
        icon: "fa-solid fa-envelope",
        target: function () {
            return "獲得購物金 $100";
        }
    },
    {
        id: "5",
        color: "#EBB466",
        icon: "fa-solid fa-sack-dollar",
        target: function () {
            return "結帳享 8 折優惠";
        }
    },
    {
        id: "6",
        color: "#560000",
        icon: "fa-solid fa-coins",
        target: function () {
            return "紅利點數 3 倍送";
        }
    },
    {
        id: "7",
        color: "#940000",
        icon: "fa-solid fa-envelope",
        target: function () {
            return "獲得購物金 $88";
        }
    },
    {
        id: "8",
        color: "#EBB466",
        icon: "fa-solid fa-sack-dollar",
        target: function () {
            return "結帳享 9 折優惠";
        }
    },
    {
        id: "9",
        color: "#560000",
        icon: "fa-solid fa-coins",
        target: function () {
            return "紅利點數 3 倍送";
        }
    },
    {
        id: "10",
        color: "#940000",
        icon: "fa-solid fa-envelope",
        target: function () {
            return "獲得購物金 $200";
        }
    },
    {
        id: "11",
        color: "#EBB466",
        icon: "fa-solid fa-sack-dollar",
        target: function () {
            return "結帳享 95 折優惠";
        }
    },
    {
        id: "12",
        color: "#560000",
        icon: "fa-solid fa-coins",
        target: function () {
            return "紅利點數 2 倍送";
        }
    },
    {
        id: "13",
        color: "#940000",
        icon: "fa-solid fa-envelope",
        target: function () {
            return "獲得購物金 $88";
        }
    },
    {
        id: "14",
        color: "#EBB466",
        icon: "fa-solid fa-sack-dollar",
        target: function () {
            return "結帳享 85 折優惠";
        }
    },
    {
        id: "15",
        color: "#560000",
        icon: "fa-solid fa-coins",
        target: function () {
            return "紅利點數 2 倍送";
        }
    },
    {
        id: "16",
        color: "#940000",
        icon: "fa-solid fa-envelope",
        target: function () {
            return "獲得購物金 $100";
        }
    },
    {
        id: "17",
        color: "#EBB466",
        icon: "fa-solid fa-sack-dollar",
        target: function () {
            return "結帳享 9 折優惠";
        }
    },
    {
        id: "18",
        color: "#560000",
        icon: "fa-solid fa-coins",
        target: function () {
            return "紅利點數 3 倍送";
        }
    },
    {
        id: "19",
        color: "#940000",
        icon: "fa-solid fa-envelope",
        target: function () {
            return "獲得購物金 $50";
        }
    },
    {
        id: "20",
        color: "#EBB466",
        icon: "fa-solid fa-sack-dollar",
        target: function () {
            return "結帳享 95 折優惠";
        }
    },
    {
        id: "21",
        color: "#560000",
        icon: "fa-solid fa-coins",
        target: function () {
            return "紅利點數 3 倍送";
        }
    },
    {
        id: "22",
        color: "#940000",
        icon: "fa-solid fa-envelope",
        target: function () {
            return "獲得購物金 $66";
        }
    },
    {
        id: "23",
        color: "#EBB466",
        icon: "fa-solid fa-sack-dollar",
        target: function () {
            return "結帳享 8 折優惠";
        }
    },
    {
        id: "24",
        color: "#560000",
        icon: "fa-solid fa-coins",
        target: function () {
            return "紅利點數 2 倍送";
        }
    },
    {
        id: "25",
        color: "#940000",
        icon: "fa-solid fa-envelope",
        target: function () {
            return "獲得購物金 $88";
        }
    },
    {
        id: "26",
        color: "#EBB466",
        icon: "fa-solid fa-sack-dollar",
        target: function () {
            return "結帳享 88 折優惠";
        }
    },
    {
        id: "27",
        color: "#560000",
        icon: "fa-solid fa-coins",
        target: function () {
            return "獲得 50 點紅利點數";
        }
    },
    {
        id: "28",
        color: "#940000",
        icon: "fa-solid fa-envelope",
        target: function () {
            return "獲得購物金 $50";
        }
    },
    {
        id: "29",
        color: "#EBB466",
        icon: "fa-solid fa-sack-dollar",
        target: function () {
            return "結帳享 9 折優惠";
        }
    },
    {
        id: "30",
        color: "#560000",
        icon: "fa-solid fa-coins",
        target: function () {
            return "獲得 100 點紅利點數";
        }
    },
    {
        id: "31",
        color: "#940000",
        icon: "fa-solid fa-envelope",
        target: function () {
            return "獲得購物金 $100";
        }
    },
    {
        id: "32",
        color: "#EBB466",
        icon: "fa-solid fa-sack-dollar",
        target: function () {
            return "結帳享 88 折優惠";
        }
    }
]

let steps = 0; //剩餘要走幾步
let allSteps = 0; //全部的步數
let current = 0; //目前走到哪一格

let speed; //速率

//DOM
const startBtn = document.querySelector("#btn-start");
const gotoWebBtn = document.querySelector("#btn-toweb");
let bricks;

//canvas DOM&資料
let w = 300;
let h = 200;
let bottomCanvas = document.querySelector("#canvas-bottom");
let topCanvas = document.querySelector("#canvas-top");
topCanvas.width = bottomCanvas.width = w;
topCanvas.height = bottomCanvas.height = h;
let ctxBottom = bottomCanvas.getContext("2d");
let ctxTop = topCanvas.getContext("2d");
bottomCanvas.style.background = "url(slotpics/card03.jpg)";
ctxBottom.font = "bold 20px Arial";
//上層刮刮卡圖片
const cardImage = new Image();
cardImage.src = "slotpics/card1.jpg";


//window.onload
window.onload = function () {
    RenderBrick();
    gotoWebBtn.disabled = true;
    startBtn.onclick = function () {
        Go();
        DrawTop();
        startBtn.disabled = true;
    }
}

//function
function RenderBrick() {
    bricks = document.querySelectorAll("[box-id]");
    //要先把NodeList轉成Array才能.sort()
    bricks = Array.from(bricks).sort((a, b) => {
        return a.getAttributeNode("box-id").value - b.getAttributeNode("box-id").value;
    })
    // console.log(bricks);

    bricks.forEach(x => {
        let id = x.getAttributeNode("box-id").value;
        let data = brickData.find(x => x.id == id);

        let icon = document.createElement("i");
        icon.setAttribute("class", data.icon);
        icon.style.color = data.color;
        x.appendChild(icon);
    })
}

function Go() {
    speed = 50;

    let random = Math.floor(Math.random() * brickData.length) + 1; //Math.floor無條件捨去可能是0所以+1
    // console.log(random); 
    // 假設random甩出來是16

    // steps = random; //剩餘要走幾步 = 16 
    steps = random + (2 * bricks.length); //多跑幾圈
    allSteps = steps; //總共要走的步數 = 16
    TurnAround();
}

function TurnAround() {
    bricks[current].classList.remove("active");
    current++;

    if (current >= bricks.length) {
        current = 0;
    }

    bricks[current].classList.add("active");
    steps--; //剩餘要走幾步

    if (steps > 0) {
        //還沒走完
        setTimeout(TurnAround, speed);

        //當剩餘步數勝1/3,會減速
        if (steps < Math.floor((allSteps / 3))) {
            speed += 7; //變速效果
        }
    }
    else {
        //走完了
        DrawBottom();
        topCanvas.setAttribute("class", "d-block");
        bottomCanvas.setAttribute("class", "d-block");
    }
}

//----------刮刮卡function----------
//畫底層刮刮卡
function DrawBottom() {
    ctxBottom.fillText(brickData[current].target(), 74, 110);
}


//畫上層刮刮卡
function DrawTop() {
    ctxTop.drawImage(cardImage, 0, 0, w, h);

    //如果不是第一次刮開清除上一次區域
    if (ctxTop.globalCompositeOperation != "destination-out") {
        ctxTop.globalCompositeOperation = "destination-out";
    } else {
        ctxTop.drawImage(cardImage, 0, 0, w, h);
    }
}

//滑鼠移動開始刮圖層
topCanvas.addEventListener("touchstart", eventDown);
topCanvas.addEventListener("touchend", eventUp);
topCanvas.addEventListener("touchmove", eventMove);
topCanvas.addEventListener("mousedown", eventDown);
document.addEventListener("mouseup", eventUp);
topCanvas.addEventListener("mousemove", eventMove);

function eventDown(e) {
    e = e || event;
    e.preventDefault();
    mousedown = true;
}

function eventUp(e) {
    e = e || event;
    e.preventDefault();
    mousedown = false;
}

function eventMove(e) {
    e = e || event;
    e.preventDefault();
    if (mousedown) {
        if (e.changedTouches) {
            e = e.changedTouches[e.changedTouches.length - 1];
        }
        gotoWebBtn.disabled = false;
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        ctxTop.beginPath();
        ctxTop.arc(x, y, 15, 0, Math.PI * 2);
        ctxTop.fill();
        TopVanish();

    }

}

//刮開區域大於20% 上層canvas消失
function TopVanish() {
    var data = ctxTop.getImageData(0, 0, w, h).data;
    var n = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i] == 0) {
            n++;
        };
    };
    if (n >= data.length * 0.2) {
        ctxTop.globalCompositeOperation = "destination-over";
        ctxTop.canvas.style.opacity = 0;
    }
}