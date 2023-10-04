const myButton = document.getElementById('myButton');


const newText = (element, text) => {
  element.innerHTML = text;
}


const handleMouseEnter = (event) => {
  element = event.target;
  newText(element, 'New Click')  
}

const handleMouseLeave = (event) => {
  element = event.target;
  newText(element, 'Click')  
}

myButton.addEventListener ('mouseenter', handleMouseEnter)
myButton.addEventListener ('mouseleave', handleMouseLeave)


