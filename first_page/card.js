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

let data =0;
onload();
function onload(){
    displaycart();
}

function displaycart(){
    let a=JSON.parse(localStorage.getItem("arr_bag"));
    console.log(a);
    let c =document.querySelector("nav ul .last a span")
    c.innerHTML=a.length;
    let i=0;
    for(let i=0;i<=a.length-1;i++){
          bag(a[i]);
        // console.log(i);
    }
    
    function bag (a){
        // card_info.filter((e,a)=>{
        //     if(e.id == a){
        //         all_data =``
        //     }
        // })
       data=data + card_info.map((e)=>{
        // let numb =e.id;
        // console.log(numb);
        // card_display_all_in(e.id ,e.imgSrc ,e.companyname,e.itemName ,e.price.fixedprice ,e.price.originalprice ,e.price.offer ,e.star.rating ,e.star.noofReviews)
        if(e.id == a){
            
          return `<div class="card_list  ${e.id}" >
                    <div class="img">
                        <img src='${e.imgSrc}' alt="">
                    </div>
                    <div class="paragraph">
                        <p class="pname">${e.companyname}</p>
                        <p class="pdetail">${e.itemName}</p>
                        <div class="price">
                            <p class="first_price">Rs ${e.price.fixedprice}</p>
                            <P class="second_price"><del>Rs ${e.price.originalprice}</del></P>
                            <p class="last_price"><span>(${e.price.offer}%off)</span></p>
                        </div>
                        <p class="days"><span>14 days </span> return Avaliable</p>
                        <p class="Delivery">Delivery in <span>10 days</span></p>
                    </div>
                    <div class="button">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>`;
          
            // console.log(e);
           
            // console.log(e.id ,e.imgSrc ,e.companyname,e.itemName ,e.price.fixedprice ,e.price.originalprice ,e.price.offer ,e.star.rating ,e.star.noofReviews)
        }
        
     
        // else{
        //     console.log("jjn");
        // }
        
    }).join("")
}
// console.log(data);
    
   
    // console.error("vbjkl;");
    // console.log(arr_bag);
    // console.log(card);
    
}
// function card_display_all_in (id ,img , bname,pDetail ,First_price ,Second_price ,offer ,rating,review){
//     // console.log(id);
//     // console.log()

//     console.log(id,img,bname,pDetail,First_price,Second_price)
//     let card=document.querySelector(".carts");
//     card.innerHTML=`
//     <div class="card_list  ${id}" >
//                     <div class="img">
//                         <img src='${img}' alt="">
//                     </div>
//                     <div class="paragraph">
//                         <p class="pname">${bname}</p>
//                         <p class="pdetail">${pDetail}</p>
//                         <div class="price">
//                             <p class="first_price">Rs ${First_price}</p>
//                             <P class="second_price"><del>Rs ${Second_price}</del></P>
//                             <p class="last_price"><span>(${offer}%off)</span></p>
//                         </div>
//                         <p class="days"><span>14 days </span> return Avaliable</p>
//                         <p class="Delivery">Delivery in <span>10 days</span></p>
//                     </div>
//                     <div class="button">
//                         <i class="fa-solid fa-xmark"></i>
//                     </div>
//                 </div>
                
                
                
                
//                  <div class="card_list  ${id}" >
//                     <div class="img">
//                         <img src='${img}' alt="">
//                     </div>
//                     <div class="paragraph">
//                         <p class="pname">${bname}</p>
//                         <p class="pdetail">${pDetail}</p>
//                         <div class="price">
//                             <p class="first_price">Rs ${First_price}</p>
//                             <P class="second_price"><del>Rs ${Second_price}</del></P>
//                             <p class="last_price"><span>(${offer}%off)</span></p>
//                         </div>
//                         <p class="days"><span>14 days </span> return Avaliable</p>
//                         <p class="Delivery">Delivery in <span>10 days</span></p>
//                     </div>
//                     <div class="button">
//                         <i class="fa-solid fa-xmark"></i>
//                     </div>
//                 </div>`;



// }

// console.log("dat")
// console.log(all_data);
let add_data=document.querySelector(".main_body .carts").innerHTML=data;
console.log(data)