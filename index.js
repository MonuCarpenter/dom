var tt = document.querySelector('h2');
tt.style.font = 'solid 3px ###2';
tt.style.color = "green";
var items = document.getElementsByClassName('list-group-item');
items[3].style.backgroundColor = 'green';
items[0].textContent='MONU';

items[1].textContent='VINOD';

items[2].textContent='TADAS';

items[3].textContent='WARDHA';
 var li = document.getElementsByTagName('li');
 for( let i=0;i<li.length;i++)
 {
    li[i].textContent = 'MONU';
    li[i].style.fontWeight = 'bold';
 }
var secondItem = document.querySelector('.list-group-item:nth-child(1)');
secondItem.style.backgroundColor = 'green';
var thirdItem = document.querySelector('.list-group-item:nth-child(2)');
thirdItem.style.visibility = 'hidden';
var secondItem = document.querySelectorAll('li:nth-child(1)');
secondItem[1].style.color = 'green';
var odd  = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'green';
}
var odd  = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'green';
}
var ss = document.querySelectorAll('li');
ss[1].style.color  = 'green';
var itemList = document.querySelector('#items');
itemList.parentNode.style.backgroundColor = '#f4f4f4';

// parent Element is same thing
var itemList = document.querySelector('#items');
itemList.parentElement.style.backgroundColor = '#f4f4f4';
// //Child items ;;
// for all childs 
itemList.children.style.backgroundColor = '#f4f4f4';
//first child ;;
itemList.firstChild.style.backgroundColor = 'yellow';
//firstElement child ;; 
itemList.firstElementChild.textContent = 'Hello';
//last chlast;
itemList.lastChild.style.backgroundColor = 'yellow';
//lastElement;; 
itemList.lastElementChild.textContent = 'Hello';
//nextsibling ;;
itemList.nextSibling.textContent =  'Monu';
//nextElement sibling ;;
itemList.nextElementSibling.style.backgroundColor = 'black';
//previoussibling ;;
itemListList.previousElementSibling.style.color = 'yellow';
//create element ;;
var newDiv = document.createElement('div');
// add classs 
newDiv.className = 'hello';
//add id ;
newDiv.id = 'hello1';
//add atr.
newDiv.setAttribute('title','Hello Div');
//creating text node ;;
var newDivText = document.createTextNode('Hello World');
// add text to div ;
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = documetn.querySelector(' header h1');
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1);
