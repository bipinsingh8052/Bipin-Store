
onload();
function onload(){
    displaycart();
}
function displaycart(){

    let card=document.querySelector(".carts");
    card.innerHTML=`
    <div class="card_list">
                    <div class="img">
                        <img src="https://d2fy0k1bcbbnwr.cloudfront.net/Designs_Inners_and_Outers/Tshirts/Men/Men_Plain_Sunset_Orange_1.jpg" alt="">
                    </div>
                    <div class="paragraph">
                        <p class="pname">Addidas</p>
                        <p class="pdetail">Men Printed polo Collar Indian Cricket ODi Jersey</p>
                        <div class="price">
                            <p class="first_price">Rs 999</p>
                            <P class="second_price"><del>Rs 99999</del></P>
                            <p class="last_price"><span>(0%off)</span></p>
                        </div>
                        <p class="days"><span>14 days </span> return Avaliable</p>
                        <p class="Delivery">Delivery in <span>10 days</span></p>
                    </div>
                    <div class="button">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>`;
    // console.error("vbjkl;");
    // console.log(arr_bag);
    
}
let a=localStorage.getItem("arr_bag");
console.log(a);