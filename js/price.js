import {  getIfo } from "./function.js";

let image = document.getElementById('image');
let wrapper = document.getElementById('wrapper');
let name = document.getElementById('name');
let newPrice = document.getElementById('new');
let oldPrice = document.getElementById('old');
let korzinki = document.getElementById('button2');



document.addEventListener('DOMContentLoaded', function () {
    let url = window.location.href;
    let id = url.split('id=')[1];

    if (url) {
        fetch(`https://cars-pagination.onrender.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
               if(data.id){
                  
                image.setAttribute('src', data.image);
                name.innerHTML = data.name;
                newPrice.innerHTML = data.newPrice;
                oldPrice.innerHTML = data.oldPrice;
                 
          
                
                korzinki.addEventListener('click', function(event){
                    event.preventDefault();
                   
                    let infos = {
                        id: data.id,
                        newPrice: data.newPrice,
                        name: data.name,
                        image: data.image,
                        count: 1
                    }
                    let detaInfo = getIfo();
                    detaInfo.push(infos);
                    localStorage.setItem('info', JSON.stringify(detaInfo))
                    let cut = window.location.href.split('/html')[0];
                    window.location.assign(`${cut}/html/card.html?id=${id}`)

                })

               }
            })
            .catch(err => {
                console.log(err);
            })
            .finally(function(){
                wrapper.style.display = 'flex';
            })
    } else {
        window.location.assign('http://127.0.0.1:5501/index.html#')
    }

})