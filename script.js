// Script buat ganti warna
const bodyElement = document.body;
    
    function gantiWarnaRandom() {
        const warnaList = ["lightblue","lightgreen","pink","silver","white"];
        const randomIndex = Math.floor(Math.random() * warnaList.length);
        const warnaRandom = warnaList[randomIndex];
        bodyElement.style.backgroundColor = warnaRandom;
    }

    const tombolGantiWarna = document.getElementById('tombolGantiWarna');
    tombolGantiWarna.addEventListener('click', gantiWarnaRandom);



// Script buat ganti tulisan header
const headerElement = document.querySelector('.header h1');

    function gantiTeks() {
        const teksList = ["Hello World!", "Coding is Fun!", "I love JS!", "Welcome to My WebPage!", "Enjoy Your Visit!"];
        const randomIndex = Math.floor(Math.random() * teksList.length);
        const teksBaru = teksList[randomIndex];
        headerElement.textContent = teksBaru;
    }

    const tombolGantiTeks = document.getElementById('tombolGantiTeks');
    tombolGantiTeks.addEventListener('click', gantiTeks)

    

            