const myNodelist = document.getElementsByClassName("sub");
for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

const close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

const list = document.querySelector('#div2');
list.addEventListener('click', function (ev) {
    if (ev.target.className === 'sub' || 'sub checked') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    let li1 = document.createElement("div");
    li1.className = "sub";
    let inputValue = document.getElementById("title").value;
    let t = document.createTextNode(inputValue);
    li1.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let list1 = document.getElementById("div2");
        list1.insertBefore(li1, list1.childNodes[0]);
    }
    document.getElementById("title").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li1.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}