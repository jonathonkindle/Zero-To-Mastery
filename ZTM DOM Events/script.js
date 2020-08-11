var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var btn = document.querySelectorAll("span");

function deleteItem() {
	event.target.parentElement.remove()
}

var deleteBtn = function() {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	span.addEventListener("click", deleteItem);
	return span;
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var text = document.createTextNode(input.value)
	li.appendChild(text);
	li.appendChild(deleteBtn());
	ul.appendChild(li);
	li.addEventListener("click", event => {
		li.classList.toggle("done");
	})
	input.value = "";
}

li.forEach(item => {
	item.appendChild(deleteBtn());
	item.addEventListener("click", event => {
		item.classList.toggle("done");
	})
})


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);