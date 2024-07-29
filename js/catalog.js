import { createElements } from "./function.js";

let wrappwr = document.getElementById('covers');
let card = document.getElementById('button__image');



document.addEventListener('DOMContentLoaded', function () {
    fetch('https://cars-pagination.onrender.com/products/category?category=%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B8%D0%B9')
        .then(res => res.json())
        .then(data => {
            if (data.length) {
                data.forEach(produc => {
                    let card = createElements(produc)
                    wrappwr.innerHTML += card
                })
            }

            let cards = this.querySelectorAll('.cover_wrapper');
            cards.length && cards.forEach(card =>{
                card.addEventListener('click', function(){
                    let id = this.getAttribute('data-id');
                    window.location.assign(`http://127.0.0.1:5501/html/price.html?id=${id}`)
                })
            })
        })
        .catch(err => {
            console.log(err);
        })

})

card && card.addEventListener('click', function(event){
    event.preventDefault();
     window.location.assign('http://127.0.0.1:5501/html/card.html')
})