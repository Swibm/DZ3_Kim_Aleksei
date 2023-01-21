// 1)сделать слайдер автоматическим и добавить анимации к картинкам 

const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabsContent = document.querySelectorAll(".tabcontent")
let counter = 0

const autoSlider = () => {
    tabsContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
    
    if(counter<=3) {
        tabsContent[counter].style.display = "block"
        tabs[counter].classList.add("tabheader__item_active")
        counter++
    }
    else {
        counter = 0
        tabsContent[counter].style.display = "block"
        tabs[counter].classList.add("tabheader__item_active")
        counter++
    }
    setTimeout(autoSlider, 3000)
}

autoSlider()

//Вызов модалки по нажатию

const modalTrigger = document.querySelector(".btn_white")

const modal = document.querySelector(".modal")

const modalCLoseBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow =""
}

modalTrigger.addEventListener("click", openModal)
modalCLoseBtn.addEventListener("click", closeModal)

modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")) {
        closeModal()
    }
})

//dz2 открывать модальное окно как только пользователь будет доскроливать до конца сайта

const openModalEndOfSite = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        window.scrollBy(0, -300);
    }
};

window.addEventListener("scroll", openModalEndOfSite)