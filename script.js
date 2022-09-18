// cost of all burgers in the cart
var total = 0;
//index
var i = 1;
//list of amount of every products in the cart
var itemCost = [];
//add to cart
function add(n){
sort = "sort" + n;
priceId = "price" + n;
quantityId = "quantity" + n;

title=document.getElementById(sort).innerHTML;
price=document.getElementById(priceId).innerHTML;
quantity=document.getElementById(quantityId).value;
var node=document.createElement("LI");
item = "item"+i;
node.setAttribute("id",item);
itemCost[i-1]=Number(price) * Number(quantity);
i +=1;
var textnode =document.createTextNode(title+""+quantity+"x"+price+"shkl");
node.appendChild(textnode);
document.getElementById("items").appendChild(node);

total += Number(price) * Number(quantity) ;
document.getElementById("total").innerHTML = "Total:"+total.toFixed(2)+ "shkl";

document.getElementById(item).innerHTML += '<button onclick=deleItem('+"'"+item+"'"+')">x</button>';
}

function deleItem(eId){
    document.getElementById(eId).remove();
    n=Number(eId.slice(-1))-1;
    total -=itemCost[n];
    document.getElementById("total").innerHTML="Total:"+total.toFixed(2)+ "shkl";
}