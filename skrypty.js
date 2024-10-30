const dane = {
    imie: 'Jerzy',
    nazwisko: 'Abecki',
}

baseURL = 'http://localhost/GR1_AJAX_prosty/';

window.onload = function(){
    document.querySelector('#get_plik').addEventListener("click", ajax_get_plik);
    document.querySelector('#get_ob').addEventListener("click", ajax_get_ob);
    document.querySelector('#post_ob').addEventListener("click", ajax_post_ob);          
}

function ajax_get_plik(){
    const random = Math.random() * 10000;
    let url = `plik.txt?rand=${random}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = () => {
        if(xhr.status != 200){
            console.log(`Błąd ${xhr.status}: ${xhr.statusText}`);
        }
        else{
            document.querySelector('#wynik').innerHTML = xhr.response;
        }
    }

    xhr.onerror = function(){
        console.log('Żądanie nie wykonalne');
    }
    xhr.send();
}


function ajax_get_ob(){
    let random = Math.random() * 10000;
    let url = new URL('get.php', baseURL);
    url.searchParams.set('imie', dane.imie);
    url.searchParams.set('nazwisko', dane.nazwisko);
    url.searchParams.set('rand', random);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = () => {
        if(xhr.status != 200){
            console.log(`Błąd ${xhr.status}: ${xhr.statusText}`);
        }
        else{
            document.querySelector('#wynik').innerHTML = xhr.response;
        }
    }
    xhr.onerror = function(){
        console.log('Żądanie nie wykonalne');
    }
    xhr.send();
}    

function ajax_post_ob(){
    let url = "post.php";
    
}