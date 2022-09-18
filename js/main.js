const myArray = [{label: 'Week01',
url: 'week1/index.html'}, {label: 'Week02',
url: 'https://www.w3schools.com/'}]

function loadLinks(){
for (var i = 0; i < myArray.length; i++){
const weekNum = document.createElement("li");
const weekLink = document.createElement('a');
const url = myArray[i].url;

var OrdList = document.getElementById('link_list').appendChild(weekNum);

weekNum.style.color = "blue";
weekNum.appendChild(weekLink)
weekLink.setAttribute("href",myArray[i].url);
weekLink.innerHTML = myArray[i].label;
 
   
   



}
}