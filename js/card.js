import { getIfo } from "./function.js";

let image = document.getElementById('image');
let wrapper = document.getElementById('wrapper');
let name = document.getElementById('name');
let newPrice = document.getElementById('new');
let button = document.getElementById('button');
let select = document.getElementById('select')
let allSum = document.getElementById('allsum')
const buttonFirstPage = document.getElementById('button3')

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
                allSum.innerHTML = data.newPrice
                
                button && button.addEventListener('click', function(event){
                    event.preventDefault();
                    if (select.value){
                        let all = allSum;
                        const price = select.value * all;

                        return price
                    }

                })

                buttonFirstPage && buttonFirstPage.addEventListener('click', function(){
                    let cut = window.location.href.split('/html')[0];
                    window.location.assign(`${cut}/index.html`)
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