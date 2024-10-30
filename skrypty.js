const dane = {
    imie: 'Jerzy',
    nazwisko: 'Abecki',
}

window.onload = function(){
    document.querySelector('#get_plik').addEventListener("click", ajax_get_plik);   
}

ajax_get_plik = function(){
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
}