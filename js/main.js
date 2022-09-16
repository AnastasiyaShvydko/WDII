const myArray = [{label: 'Week01',
url: 'week1/index.html'}, {label: 'Week02',
url: 'https://www.w3schools.com/'}]

function loadLinks(){




//element.setAttribute(attribute, value)
// Create a text node:
//var text = myArray.label;
for (var i = 0; i < myArray.length; i++){
const weekNum = document.createElement("li");
const weekLink = document.createElement('a');


//const label = document.createTextNode(myArray[i].label);
const url = myArray[i].url;
//weekLink.setAttribute(href, url);
// Append the text node to the "li" node:
//weekNum.appendChild(label);
//weekLink.appendChild(url);
var OrdList = document.getElementById('link_list').appendChild(weekNum);

weekNum.style.color = "blue";
weekNum.appendChild(weekLink)
//weekNum.setAttribute = ("href", "https://www.byui.edu/canvas-authentication")
weekLink.setAttribute("href",myArray[i].url);
weekLink.innerHTML = myArray[i].label;
 //document.getElementsByTagName('li').id = "week" + i;

 //document.getElementById('week').appendChild(weekNum);
//ol.innerHTML = "UUUUUUU";

   
   



}
}