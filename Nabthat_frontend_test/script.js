function dane(){
    document.getElementById("dane").innerHTML = "Zadanie <strong>rekrutacyjne</strong> <br> Kamil Chabowski"
}
function refresh(){
    location.reload();
}

function zastap(){
    fetch('content.json')
    .then(res => res.json())
    .then(data =>{
        const contents = data.contents;
        const wybranaOpcja = document.querySelector('input[name="option"]:checked').value;
        const wynik = document.getElementById("content");

        if(wybranaOpcja === 'first'){
            wynik.innerHTML = contents[0];
        } else if (wybranaOpcja === 'second'){
            wynik.innerHTML = contents[2];
        } else if (wybranaOpcja === 'random'){
            wynik.innerHTML = contents[Math.floor(Math.random() * 5)];
        } else{
            alert("Wybierz jedną z trzech opcji.")
        }
    })
    .catch(error => console.error("Błąd: ",error));
}

function doklej(){
    fetch('content.json')
        .then(res => res.json())
        .then(data =>{
            const contents = data.contents;
            const wybranaOpcja = document.querySelector('input[name="option"]:checked').value;
            const wynik = document.getElementById("content");

            if(wybranaOpcja === 'first'){
                wynik.insertAdjacentHTML('beforeend', contents[0]);
            } else if (wybranaOpcja === 'second'){
                wynik.insertAdjacentHTML('beforeend', contents[2]);
            } else if (wybranaOpcja === 'random'){
                wynik.insertAdjacentHTML('beforeend', contents[Math.floor(Math.random() * 5)]);
            } else{
                alert("Wybierz jedną z trzech opcji!")
            }
        })
        .catch(error => console.error("Błąd: ",error));
}
