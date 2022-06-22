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
