//宣告
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth(); //1月是0
let currentIndex;
let monthString;

//DOM 物件宣告
const yearMonthText = document.querySelector("#year-month");
const dateArea = document.querySelector("tbody");

const addEventModal = document.querySelector("#add-event-modal");
const addDateInput = document.querySelector("#add-date");
const addValueInput = document.querySelector("#add-value");

const editEventModal = document.querySelector("#edit-event-modal");
const editDateInput = document.querySelector("#edit-date");
const editValueInput = document.querySelector("#edit-value");

//window.onload
window.onload = function () {
    RenderDate();
}

//function
function SetMonthString() {
    let monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for (let m = 0; m < 12; m++) {
        if ((month + 1) == m + 1) {
            monthString = monthArr[m];
        }
    }
    return monthString;
}

function RenderDate() {
    dateArea.innerHTML = "";
    yearMonthText.innerText = `${SetMonthString()} . ${year}`;

    //這個月第一天禮拜幾 ex:2月
    let firstWeekDay = new Date(year, month, 1).getDay(); //3
    //這個月有幾天?
    let daysOfMonth = new Date(year, month + 1, 0).getDate(); //28

    let rows = Math.ceil((daysOfMonth + firstWeekDay) / 7); //無條件進位有五行row
    let day = 1;

    //dateArea的表格
    for (let row = 0; row < rows; row++) {
        let tr = document.createElement("tr");

        for (let col = 0; col < 7; col++) {
            let d = day; //迴圈跑完day會顯示36,所以這邊再宣告一個d
            let td = document.createElement("td");
            if (row == 0 && col < firstWeekDay) {
                //上個月格子
            }
            else {
                if (day <= daysOfMonth) {
                    //這個月的格子
                    td.innerText = day;

                    // 如果已有輸入行程的話
                    if (localStorage.getItem(`${year}-${month + 1}-${day}`) != null) {
                        let ul = document.createElement("ul");
                        ul.setAttribute("style", "list-style:none")
                        let eventTodoList = JSON.parse(localStorage.getItem(`${year}-${month + 1}-${day}`));

                        eventTodoList.forEach((eventItem, index) => {
                            let li = document.createElement("li");
                            li.setAttribute("style", "list-style:none")
                            li.innerText = eventItem.title;

                            //click li 會跳出editEventModal
                            li.onclick = function (e) {
                                editDateInput.value = `${year}-${month + 1}-${d}`;
                                editValueInput.value = eventItem.title;

                                currentIndex = index;

                                bootstrap.Modal.getOrCreateInstance(editEventModal).show();
                                //阻止li的事件冒泡
                                e.stopPropagation();
                            }

                            ul.appendChild(li);
                        })
                        td.appendChild(ul);
                    }

                    td.onclick = function () {
                        addDateInput.value = `${year}-${month + 1}-${d}`;
                        bootstrap.Modal.getOrCreateInstance(addEventModal).show();
                    }
                }
                else {
                    //下個月的格子
                }
                day++;
            }
            tr.appendChild(td);
        }
        dateArea.appendChild(tr);
    }
}

//換下個月
function ToNextMonth() {
    month++;
    if (month == 12) {
        year++;
        month = 0;
    }

    RenderDate();
}

//換上個月
function ToLastMonth() {
    month--;
    if (month < 0) {
        year--;
        month = 11;
    }

    RenderDate();
}

//Add Event
function AddEvent() {
    let date = addDateInput.value; //key是date
    let event = addValueInput.value;

    let eventObj = {
        title: event
    };

    let eventList = [];

    if (localStorage.getItem(date) == null) {
        //該天沒有行程
        eventList.push(eventObj);
    }
    else {
        //已有行程
        eventList = JSON.parse(localStorage.getItem(date)); //要把原本行程先從字串轉成物件
        eventList.push(eventObj);
    }

    //再把物件轉成字串才能存在localStorage
    localStorage.setItem(date, JSON.stringify(eventList));

    bootstrap.Modal.getOrCreateInstance(addEventModal).hide();

    RenderDate();

    // let eventList = [
    //     {
    //         title: "同事聚餐",
    //         startTime: "18:00",
    //         endTime: "20:00"
    //     },
    // ]
}

//Edit Event
function EditEvent() {
    let date = editDateInput.value;
    let eventItem = editValueInput.value;

    let eventList = JSON.parse(localStorage.getItem(date));

    eventList[currentIndex] = {
        title: eventItem
    };

    localStorage.setItem(date, JSON.stringify(eventList));

    bootstrap.Modal.getOrCreateInstance(editEventModal).hide();

    RenderDate();
}

//Delete Event
function DeleteEvent() {
    let date = editDateInput.value;

    let eventList = JSON.parse(localStorage.getItem(date));
    eventList.splice(currentIndex, 1);

    localStorage.setItem(date, JSON.stringify(eventList));

    bootstrap.Modal.getOrCreateInstance(editEventModal).hide();

    RenderDate();
}
