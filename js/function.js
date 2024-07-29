function createElement(data) {
    return `
             <div class="cover_wrapper" data-id= "${data.id}">
                        <div id="image__change"
                            style="background-image: url(${data.image}); width: 100%; height: 320px; padding: 17px 12px; cursor: pointer;">
                            <div class="sale">
                                <div class="gifts__cover">
                                    <img src="./image/galichka.svg" width="12" height="12" alt="">
                                    <h5>Нет в наличии</h5>
                                </div>
                                <span>SALE</span>
                            </div>
                            <div class="ptodact">
                                <img src="./image/gift.svg" width="12" height="12" alt="">
                                <p id="jkj"></p>
                            </div>
                        </div>
                        <div class="three">
                            <img id="change__img" src="./image/рейтинг.svg" width="104" alt="reyting">
                            <p>(12) отзывов</p>
                        </div>
                        <h6>${data.name}</h6>
                        <h3>$${data.newPrice}/<span id="old__sum">$${data.oldPrice}</span> </h3>
                    </div>
    `;
}
function createElements(data) {
    return `
             <div class="cover_wrapper" data-id= "${data.id}">
                        <div id="image__change"
                            style="background-image: url(${data.image});  width: 100%; height: 320px; padding: 17px 12px; cursor: pointer; backround-size: cover;">
                            <div class="sale">
                                <div class="gifts__cover">
                                    <img src="../image/galichka.svg" width="12" height="12" alt="">
                                    <h5>Нет в наличии</h5>
                                </div>
                                <span>SALE</span>
                            </div>
                            <div class="ptodact">
                                <img src="../image/gift.svg" width="12" height="12" alt="">
                                <p id="jkj">Подарок</p>
                            </div>
                        </div>
                        <div class="three">
                            <img id="change__img" src="../image/рейтинг.svg" width="104" alt="reyting">
                            <p>(12) отзывов</p>
                        </div>
                        <h6>${data.name}</h6>
                        <h3>$${data.newPrice}/<span id="old__sum">$${data.oldPrice}</span> </h3>
                    </div>
    `;
}

function createNewCard(data){
    return `
      <div id="cover">
            <img src="${data.image}" alt="">
            <div class="infos">
                <h3>${data.name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae quos sapiente culpa qui fugit tenetur quis vitae molestiae. Esse.</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <h5 class="sum">Cost</h5>
                <span id="new">${data.newPrice}/</span> <span id="old">${data.oldPrice}</span>
                <button class="button" id="button2">КОРЗИНКА</button>
            </div>
        </div>
    `;
}
function getIfo(){
    let info = [];
    if(localStorage.getItem('info')){
        info = JSON.parse(localStorage.getItem('info'));
    }
    return info;
}

export {createElement, createNewCard, getIfo, createElements}