//Menu i navigacja

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const sections = document.querySelectorAll(".circleNav")
console.log(sections);

burger.addEventListener('click', function () {
	menu.classList.toggle('show');
	nav.classList.toggle('show');
	this.classList.toggle('animate');
});


// Kropki do przewijania
const circles = document.querySelectorAll(".circle")
console.log(circles);




const scrollTo = (index) => {
	sections[index].scrollIntoView({
		behavior: 'smooth',
		block: "start"
	})
}
circles.forEach((circle)=>{
	let sectionIndex = 0
	circle.addEventListener("click", () => {
		const index = circle.getAttribute("data-index")
		scrollTo(index)
	})
})

//przesuwanie sie napisu (źółty pasek usługi wykonywane stacjornarnei i mobilnie)

const text = document.querySelector(".yellowDiv p")
console.log(text);


let count = -306.97
console.log(window.innerWidth);

const slideText = () => {
	count++
	if(count > window.innerWidth) count = -306.97
	text.style.transform = `translateX( ${count}px)`
}

setInterval(slideText,10)

//Galeria zdjęć

const photos = document.querySelectorAll(".galeria img")
const activeGallery = document.querySelector(".activeGallery")
const close = document.querySelector(".close")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const wrapper = document.querySelector(".wrapper")

let photoArray = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png','13.png','14.png','15.png','16.png']



const closeGallery = () => {
	activeGallery.classList.remove('active')
	photos.forEach((photo)=>{
		photo.style.opacity = '1'
	})
}

const showBigPhoto = (e) => {
	const src = e.target.getAttribute('src')
	activeGallery.classList.add('active')
	photos.forEach((photo)=>{
		photo.style.opacity = '0.2'
	})
	activeGallery.style.backgroundImage = `url('${src}')`
	
}
const checkSlide = () => {

	let src = activeGallery.style.backgroundImage
	src = src.substring(5).slice(0,-2)
	index = photoArray.indexOf(src)
}
const nextSlide = () => {
	checkSlide()
	index++
	if(index === photoArray.length){
		index = 0
	}
	activeGallery.style.backgroundImage = `url('${photoArray[index]}')`
}

const previousSlide = () => {

	checkSlide()
	index--
	if(index<0){
		index = photoArray.length - 1
	}
	activeGallery.style.backgroundImage = `url('${photoArray[index]}')`
}

photos.forEach((photo,index)=>{
	let attr = `${photoArray[index]}`
	photo.setAttribute('src', attr)
	photo.addEventListener("click", showBigPhoto)
})

close.addEventListener("click", closeGallery)
right.addEventListener("click", nextSlide)
left.addEventListener("click",previousSlide)

// Sekcja metody czyszczenia 

const typesDiv = document.querySelectorAll(".typesBox")


const obserwator = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
        entry.target.classList.toggle("on",entry.isIntersecting)
        //if(entry.isIntersecting) obserwator.unobserve(entry.target)
    })
    console.log(entries);
},{
    root: null,
   
   threshold: 1,
})


typesDiv.forEach(card=>{
    obserwator.observe(card)
})



console.log(window.innerWidth);
