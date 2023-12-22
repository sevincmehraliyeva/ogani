const div=document.getElementById('product')
const btn=document.getElementById('btn')

let page=1
let limit=3

async function getProduct() {
    
    let skip=(page-1)*limit;
    const res=await axios.get(`https://655c30f2ab37729791aa0509.mockapi.io/basket?page=${page}&limit=${limit}&skip${skip}`);
    const data=res.data;
    db=data;
    console.log(db);

    db.map(item=>{
        const box=document.createElement('div');
        box.className ='boxDiv col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12';
        box.innerHTML=`
        <img src="${item.image}" alt="">
        <p class="title">${item.name}</p>
        <p class="title">${item.price}</p>
        <button onclick="addtobasket ${item.id}">Ad to basket</button> `;
        div.appendChild(box);
    });
    page++;
}

btn.addEventListener ('click', getProduct);

const input=document.getElementById('inptext')
const loadbetn=document.getElementById('loadbtn')
const loadDiv=document.getElementById('loadDiv')

function getSearch() {

    div.style.display="none"
    btn.style.display="none"
    loadDiv.style.display="block"

    axios.get('https://655c30f2ab37729791aa0509.mockapi.io/basket')
    .then(res=>{
        db=res.data
        const filterdata=db.filter(item=>item.name.toLowerCase().startsWith(input.value.toLowerCase()))
        console.log(filterdata);
        filterdata.map(item=>{
        const box=document.createElement('div');
        box.className ='boxDiv col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12';
        box.innerHTML=`
        <img src="${item.image}" alt="">
        <p class="title">${item.name}</p>
        <p class="title">${item.price}</p>
        `;
        loadDiv.appendChild(box);
        })
    })
}
loadbetn.addEventListener('click', getSearch)

getProduct();


let max=document.getElementById('max');
let min=document.getElementById('min');

max.addEventListener("click",maxFunc )
min.addEventListener("click", minFunc)

async function maxFunc() {
    loadDiv.innerHTML=""
    await axios.get('https://655c30f2ab37729791aa0509.mockapi.io/basket')
    .then(res=>{
        let data=res.data;
        let maxS=data.sort((a,b)=>(b.price-a.price))
        maxS.map(item=>{
        const box=document.createElement('div');
        box.className ='boxDiv col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12';
        box.innerHTML=`
        <img src="${item.image}" alt="">
        <p class="title">${item.name}</p>
        <p class="title">${item.price}$</p>
        `;
        loadDiv.appendChild(box);
        })
    })
}

async function maxFunc() {
    loadDiv.innerHTML=""
    await axios.get('https://655c30f2ab37729791aa0509.mockapi.io/basket')
    .then(res=>{
        let data=res.data;
        let maxS=data.sort((a,b)=>(a.price-b.price))
        maxS.map(item=>{
        const box=document.createElement('div');
        box.className ='boxDiv col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12';
        box.innerHTML=`
        <img src="${item.image}" alt="">
        <p class="title">${item.name}</p>
        <p class="title">${item.price}$</p>
        `;
        loadDiv.appendChild(box);
        })
    })
}