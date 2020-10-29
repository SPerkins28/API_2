document.body.onload = addElements;

const baseRandomUrl = "https://api.giphy.com/v1/gifs/random";
const key = "FVfDEAy6YlIhJMFpdrl8vJjcKUoEmqeL"
let randomUrl;

function addElements() {
    const containerDiv = document.createElement('div');
    containerDiv.className = "container";
    containerDiv.id = "onLoad";
    const rowDiv = document.createElement('div');
    rowDiv.className = "row";
    const colDiv = document.createElement('div');
    colDiv.className = "col-sm-12";
    colDiv.id = "rdmGif1"
    containerDiv.appendChild(rowDiv);
    rowDiv.appendChild(colDiv);

    document.body.appendChild(containerDiv);

    randomUrl = `${baseRandomUrl}?api_key=${key}&tag=thor&rating=g`;
    randomUrl2 = `${baseRandomUrl}?api_key=${key}&tag=groot&rating=g`;
    randomUrl3 = `${baseRandomUrl}?api_key=${key}&tag=captain america&rating=g`;
    randomUrl4 = `${baseRandomUrl}?api_key=${key}&tag=ant man&rating=g`;

    fetch(randomUrl)
        .then(function(result) {
            return result.json();
        }) .then (function(json) {
            displayRdmGif(json);
        });

    function displayRdmGif(json) {
        let rGif = document.getElementById('rdmGif1');

        let rdmGif = json.data;

        let rdmGifImg = document.createElement('img');
        rdmGifImg.src = rdmGif.images.original.url;
        rdmGifImg.id = "rdmGifResult";
        rGif.appendChild(rdmGifImg);

    }

    fetch(randomUrl2)
        .then(function(result) {
            return result.json();
        }) .then (function(json) {
            displayRdmGif2(json);
        });

        function displayRdmGif2(json) {
            let rGif2 = document.getElementById('rdmGif1');
    
            let rdmGif2 = json.data;
    
            let rdmGifImg2 = document.createElement('img');
            rdmGifImg2.src = rdmGif2.images.original.url;
            rdmGifImg2.id = "rdmGifResult";
            rGif2.appendChild(rdmGifImg2);        
        }

    fetch(randomUrl3)
    .then(function(result) {
        return result.json();
    }) .then (function(json) {
        displayRdmGif3(json);
    });

    function displayRdmGif3(json) {
        let rGif3 = document.getElementById('rdmGif1');

        let rdmGif3 = json.data;

        let rdmGifImg3 = document.createElement('img');
        rdmGifImg3.src = rdmGif3.images.original.url;
        rdmGifImg3.id = "rdmGifResult";
        rGif3.appendChild(rdmGifImg3);        
    }

    fetch(randomUrl4)
    .then(function(result) {
        return result.json();
    }) .then (function(json) {
        displayRdmGif4(json);
    });

    function displayRdmGif4(json) {
        let rGif4 = document.getElementById('rdmGif1');

        let rdmGif4 = json.data;

        let rdmGifImg4 = document.createElement('img');
        rdmGifImg4.src = rdmGif4.images.original.url;
        rdmGifImg4.id = "rdmGifResult";
        rGif4.appendChild(rdmGifImg4);        
    }
}

const baseSearchURL = "https://api.giphy.com/v1/gifs/search";
let searchUrl;

//! SEARCH FORM
const searchTerm = document.querySelector('.form-control');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//! RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

searchForm.addEventListener('submit', searchResults);

function searchResults(e) {
    e.preventDefault();
    document.getElementById("onLoad").style.display = "none";

    searchUrl = `${baseSearchURL}?api_key=${key}&q=${searchTerm.value}&limit=12&offset=12&rating=g&lang=en`;
    console.log(searchUrl);
    
    fetch(searchUrl)
        .then(function(result) {
            return result.json(); //? jsonifying the data result from url
        }) .then (function(json) {
            displayResults(json);
            console.log(json);
        });
}

function displayResults(json) {
    let gifs = document.getElementById('searchResults');
    while (gifs.firstChild) {
        gifs.removeChild(gifs.firstChild);
    }

    let gifData = json.data;

    for(i = 0; i < gifData.length; i++) {
        let gifPlace = document.createElement('img');
        gifPlace.src = gifData[i].images.original.url;
        gifPlace.id = "gifResult";
        gifs.appendChild(gifPlace);
    }
};
