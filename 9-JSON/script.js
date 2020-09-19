
/*alert("funciona");*/
//console.log(bands[2].description);
/* creamos una etiqueta div*/
var card = document.createElement("div");
/*le colocamos una clase card*/
card.className = "card col-4";
//codigo para el contenedor
var cardContainer = document.getElementById('card-container');
cardContainer.appendChild(card);
//codigo para la imagen
var img = document.createElement('img');
img.className = "card-img-top"
img.src ="https://www.binaural.es/wp-content/uploads/2020/02/daft.jpg";
card.appendChild(img);

//codigo para el cared body
var cardBody = document.createElement('div');
cardBody.className = "card-body";


//codigo para el titulo
var title = document.createElement('h5');
title.className = "card-title"
title.innerHTML = "fui creado por JS";

//codigo de la descripcion
var descripction = document.createElement('p');
descripction.className = 'card.text';
descripction.innerHTML = "texto generico";

//al card metemos como hijo el cardbody
card.appendChild(cardBody);
//al card body metemos como hijo al title
cardBody.appendChild(title);
//al card body metemos como hijo la description
cardBody.appendChild(descripction);

//console.log(bands);

for(var i = 0; i <= bands.length; i++){
    console.log(bands[i]);
}