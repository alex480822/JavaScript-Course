const arrowButton = document.querySelector('.arrow')
const fasIcon = document.querySelector('.fa-solid')
const img = document.querySelector('.item1')

//Nasłuchowanie na click
//dowawanie klasy hide
//obracać strzałkę

const showImg = () => {
    img.classList.toggle('hide')
    if (img.classList.contains('hide')){
        arrowButton.style.transform = 'rotate(180deg'
    }else{
        arrowButton.style.transform = 'rotate(0deg)'
    }
}
arrowButton.addEventListener('click', showImg)

