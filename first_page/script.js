let arr_bag;

onload();

function onload(){
    let bagItemStr=localStorage.getItem("arr_bag");
    arr_bag=bagItemStr ? JSON.parse(bagItemStr) : [];
    
    console.log(arr_bag);
    displayItem();
    displayBagIcon();
    // arr_bag.preventDefault();
    // console.log(arr_bag);
}

function displayBagIcon(){
    
    let a=document.querySelector("nav ul .last a span");  
    a.innerHTML=arr_bag.length;
    // console.log(arr_bag)
}
function addtoBag(itemid){
    arr_bag.push(itemid);
    // console.log(arr_bag)
    localStorage.setItem("arr_bag",JSON.stringify(arr_bag));
    console.log(arr_bag);
    displayBagIcon();
    
}

function displayItem(){
    
let cards=document.querySelector(".all_cards");

console.log(cards);
if(!cards){
    return;
}

let card_info=[
    {
        id:"001",
        imgSrc:'https://d2fy0k1bcbbnwr.cloudfront.net/Designs_Inners_and_Outers/Tshirts/Men/Men_Plain_Sunset_Orange_1.jpg',
        star: {
            rating:4.5,
            noofReviews:1400,
        },
        companyname:'VeBNoR',
        itemName:"Men Printed  Polo ck Polyeoem",
        price:{
            fixedprice:299,
            originalprice:499,
            offer:72
        },
        button:"Add to Cart"
    },
    {
        id:"002",
        imgSrc:'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/j/h/c/m-29555138-roadster-original-imah4tf8mhjrsxsu.jpeg?q=70',
        star: {
            rating:4.1,
            noofReviews:1400,
        },
        companyname:'Roadster',
        itemName:"Men Printed Round Neck pure",
        price:{
            fixedprice:408,
            originalprice:799,
            offer:48
        },
        button:"Add to Cart"

    },
    {
        id:"003",
        imgSrc:'https://rukminim2.flixcart.com/image/1337/1337/xif0q/sweatshirt/a/j/n/m-sweetsweat-eagle-america-original-imagnfymfj5bs3eg.jpeg?q=70&crop=false',
        star: {
            rating:4.1,
            noofReviews:1400,
        },
        companyname:'Eagle America',
        itemName:"Men Full Sleeve Solid Sweatshit",
        price:{
            fixedprice:389,
            originalprice:999,
            offer:61
        },
        button:"Add to Cart"

    }

    ,
    {
        id:"004",
        imgSrc:'https://rukminim2.flixcart.com/image/369/369/kst9gnk0/jean/l/b/a/32-m-j-bl-kr-comfits-original-imag6aykmjba7vhq.jpeg?q=70&crop=false',
        star: {
            rating:4.1,
            noofReviews:1400,
        },
        companyname:'comfits',
        itemName:"Men slim Mid Rise Black Jeans",
        price:{
            fixedprice:379,
            originalprice:1299,
            offer:71
        },
        button:"Add to Cart"

    }

    ,
    {
        id:"005",
        imgSrc:'https://rukminim2.flixcart.com/image/1337/1337/xif0q/sweatshirt/a/j/n/m-sweetsweat-eagle-america-original-imagnfymfj5bs3eg.jpeg?q=70&crop=false',
        star: {
            rating:4.1,
            noofReviews:1400,
        },
        companyname:'WILLEY',
        itemName:"Men  Striped Round T-shirt",
        price:{
            fixedprice:494,
            originalprice:1645,
            offer:69
        },
        button:"Add to Cart"

    }

    ,
    {
        id:"006",
        imgSrc:'https://rukminim2.flixcart.com/image/2000/2000/xif0q/track-pant/e/f/b/30-site-button-darkgreen-size-30-wild-magic-original-imagwj4btc7matbs.jpeg?q=70&crop=false',
        star: {
            rating:4.1,
            noofReviews:1400,
        },
        companyname:'Wild Magic',
        itemName:"Men Self Design pant",
        price:{
            fixedprice:469,
            originalprice:1499,
            offer:68
        },
        button:"Add to Cart"

    }

    ,
    {
        id:"007",
        imgSrc:'https://rukminim2.flixcart.com/image/312/312/xif0q/sweatshirt/a/j/n/m-sweetsweat-eagle-america-original-imagnfymfj5bs3eg.jpeg?q=70&crop=false',
        star: {
            rating:4.1,
            noofReviews:1400,
        },
        companyname:'Eagle',
        itemName:"Roated printed Men Round Neck ",
        price:{
            fixedprice:408,
            originalprice:899,
            offer:61
        },
        button:"Add to Cart"

    }
]

let innerhtml=" ";
card_info.map((item)=>
    innerhtml+=
`<div class="card  ${item.id}" >
<div class="img">
    <img src="${item.imgSrc}" alt="">
</div>
<div class="heading">
    <p>${item.star.rating} ⭐ | ${item.star.noofReviews}k</p>
</div>
<div class="product_name">
    <h5>${item.companyname}</h5>
    <p>${item.itemName}</p>
</div>
<div class="price">
    <div class="fixed_price">₹${item.price.fixedprice}</div>
    <div class="main_price"><del>₹${item.price.originalprice}</del></div>
    <div class="offer">${item.price.offer}% off</div>
</div>
<div class="button">
    <button onclick="addtoBag(${item.id})">${item.button}</button>
</div>
</div> 
`
);
cards.innerHTML=`${innerhtml}`;
}




