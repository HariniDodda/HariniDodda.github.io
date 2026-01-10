const products=[
 {name:"product-1", desc:"This is a sample description",
    price:45,
    imgUrl:"https://picsum.photos/id/1/300/300"},
    {name:"product-2", desc:"This is a sample description",
        price:65,
        imgUrl:"https://picsum.photos/id/2/300/300"},
        {name:"product-3", desc:"This is a sample description",
            price:75,
            imgUrl:"https://picsum.photos/id/3/300/300"},
            {name:"product-4", desc:"This is a sample description",
                price:85,
                imgUrl:"https://picsum.photos/id/1/300/300"},
                {name:"product-5", desc:"This is a sample description",
                    price:95,
                    imgUrl:"https://picsum.photos/id/2/300/300"},
                    {name:"product-6", desc:"This is a sample description",
                        price:105,
                        imgUrl:"https://picsum.photos/id/3/300/300"}
                

]
function showProducts(){
    let str=` <div class="row"> `
    products.map((e)=> {
        str=str+
        `<div class="box1">
        <img src="${e.imgUrl}"/>
         <h3>${e.name}</h3>
         <p>${e.desc}</p>
         <h5>${e.price}</h5>
         <p><button class="box">Add to Cart</button></p>
         </div>
         `
       

    })
    str=str+`</div>`
    root.innerHTML=str
}