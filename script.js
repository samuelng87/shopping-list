var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul')
var li = document.getElementsByTagName('li')


function inputLength () {
return input.value.length;
}

function createListElement () {
	var li = document.createElement('li');
		li.appendChild(document.createTextNode(input.value))
		ul.appendChild(li)
		input.value = ''


	var button = document.createElement('button')	
	button.appendChild(document.createTextNode('Done~'))
	li.appendChild(button)
button.onclick = underLinewords

var button = document.createElement('button')	
button.appendChild(document.createTextNode('Delete'))
li.appendChild(button)
button.onclick = removeList

var button = document.createElement('button')	
button.appendChild(document.createTextNode('hold'))
li.appendChild(button)
button.onclick = holdList

}

function holdList () {
	event.target.parentNode.classList.add("holdon")
}


function underLinewords () {
	event.target.parentNode.classList.toggle('done')
}


function removeList (clear) {
	clear.target.parentNode.remove()
}


function addListAfterClick () {
	if (inputLength() > 0) {
		createListElement();
		}
}

function addListAfterKeypress (event) {
	if (inputLength() > 0 && event.keyCode === 13) {
	createListElement();
	}
}



button.addEventListener('click', addListAfterClick)
input.addEventListener('keypress',addListAfterKeypress)

 



var h1 = document.querySelector('h1')

h1.className = 'coolTitle'














/**
var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul')
var li = document.getElementsByTagName('li')

function inputLength() {
	return input.value.length;
}

function createListElement () {
	var li = document.createElement('li')
	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li)
	input.value = '';

//Done 
var button = document.createElement('button')
button.appendChild(document.createTextNode('Done!'))
li.appendChild(button)
button.onclick = underlineParent

//delete
var button = document.createElement('button')
button.appendChild(document.createTextNode('Delete'))
li.appendChild(button)
button.onclick = removeParent
 

}

//Done with line through 
li.onclick = function(event) {
	var target = event.target;
target.classList.toggle("done"); 
}


//Done
function underlineParent () {
	event.target.parentNode.classList.toggle('done')
}

//Delete
function removeParent (dlt) {
	dlt.target.parentNode.remove()
}

// click button
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement ()
	}

}
// enter button
function addListAfterKeypress (event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement()
}
}


var button =document.createElement("button");

	

button.addEventListener('click', addListAfterClick)

input.addEventListener('keypress', addListAfterKeypress)


var h1 = document.querySelector('h1')

h1.className = 'coolTitle'
 */