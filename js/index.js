import { createElement } from "./function.js";

import(createElement)

let card = document.getElementById('button__image');
let like = document.getElementById('button__like');

let buttonFilter = document.getElementById('filter2');
let costFilter = document.getElementById('filter__cost');
let priceFilter = document.getElementById('filter__price');

let changeWeb = document.getElementById('image__change');

let wrappwr = document.getElementById('covers');
let wrapper2 = document.getElementById('wrapper2')

let filter = document.getElementById('select__info');





document.addEventListener('DOMContentLoaded', function () {
    fetch('https://cars-pagination.onrender.com/products')
        .then(res => res.json())
        .then(data => {
            if (data.length) {
                let cut = data.slice(0, 15)
                cut.forEach(produc => {
                    let card = createElement(produc)
                    wrappwr.innerHTML += card
                })

                


                let cards = this.querySelectorAll('.cover_wrapper');
                cards.length && cards.forEach(card => {
                    card.addEventListener('click', function () {
                        let id = this.getAttribute('data-id');
                        let cut = window.location.href.split('/html')[0];
                        window.location.assign(`${cut}/html/price.html?id=${id}`)
                    })
                })

            }

        })
        .catch(err => {
            console.log(err);
        })

})
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://cars-pagination.onrender.com/products')
        .then(res => res.json())
        .then(data => {
            if (data.length) {
                const cut = data.slice(0, 4);
                cut.forEach(el => {
                    let card = createElement(el)
                    wrapper2.innerHTML += card
                })



            }

            let cards = this.querySelectorAll('.cover_wrapper');
            cards.length && cards.forEach(card => {
                card.addEventListener('click', function () {
                    let id = this.getAttribute('data-id');
                    window.location.assign(`http://127.0.0.1:5501/html/price.html?id=${id}`)
                })
            })

        })
        .catch(err => {
            console.log(err);
        })

})

card && card.addEventListener('click', function (event) {
    event.preventDefault();
    let cut = window.location.href.split('/index')[0];
    window.location.assign(`${cut}/html/card.html`)

})









filter && filter.addEventListener('change', function () {
    fetch('https://cars-pagination.onrender.com/products/filter?minPrice=20000&maxPrice=40000')
        .then(res => res.json())
        .then(data => {
            let select = this.value;
            let res = data.filter(el => {
                if (select == 'mashur') {
                    return el.star == 5;
                }
                if (select == 'urtacha') {
                    return el.star == 3;
                }
                if (select == 'past') {
                    return el.star == 2;
                }
                if (select == 'all') {
                    //confirm('Bilmaganlikka olamiz')
                }
            })
            wrappwr.innerHTML = '';
            res.length && res.forEach(el => {
                let card = createElement(el);
                wrappwr.innerHTML += card
            })
        })
        .catch(err => {
            console.log(err);
        })
})


