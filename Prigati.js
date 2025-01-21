let arr_bag;

function addtoBag(itemid){
    arr_bag.push(itemid);
    // console.log(arr_bag)
    localStorage.setItem("add_to_bag",JSON.stringify(arr_bag));
    console.log(arr_bag);
    displayBagIcon();
    
}


function displayBagIcon(){
    
    let a=document.querySelector("nav ul .last a span");  
    a.innerHTML=arr_bag.length;
    // console.log(arr_bag)
}

displayBagIcon();

// this is in the card script in the add to cart button

function displaycart(){
    let a=JSON.parse(localStorage.getItem("add_to_bag"));
    console.log(a);
    let c =document.querySelector("nav ul .last a span")
    c.innerHTML=a.length;
    // let i=0;
    let filter_me=0;
    for(let i=0;i<=a.length-1;i++){
          match(a[i]);
          
        // console.log(i);
    }
    filter_me=("JSON data url").filter((e)=>{return e.id==a[i]})
}

let data =0;
function match(id){
    data=data + {card_info}.map((e)=>{

}

