const div= document.getElementById('product')

function getBasket() {
    div.innerHTML=''
    div.innerHTML=''

    let cart=JSON.parse(localStorage.getItem('cart'))||[]
    cart.map((item,index)=>{
        
        const box=document.createElement('div');
        box.className ='boxDiv col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12';
        box.innerHTML=`
        <img src="${item.image}" alt="">
        <p class="title">${item.name}</p>
        <button onclick="remove (${index})">remove</button> `;
        div.appendChild(box);

    })
}

function remove(index) {
    let cart=JSON.parse(localStorage.getItem('cart'))||[];
    cart.splice(index,1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getBasket()
}
window.onload=()=>{
    getBasket()
}