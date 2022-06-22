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
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
