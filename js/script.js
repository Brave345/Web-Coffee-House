const slideContainer = document.querySelector(".slider")
const sliderText = document.querySelector(".text")
const btnLeft = document.querySelector(".btn-left")
const btnRight = document.querySelector(".btn-right")

const sliderImages = [
  {
    src: "image/6.jpg",
    text: "Kopi Susu",
  },
  {
    src: "image/4.jpg",
    text: "Coklat",
  },
  {
    src: "image/3.jpg",
    text: "Coppucino",
  },
  {
    src: "image/7.jpeg",
    text: "Latte",
  },
]

let slideCounter = 0

const startSlider = () => {
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[0].src})`
  sliderText.innerHTML = sliderImages[0].text
}

btnRight.addEventListener("click", function() {
  if (slideCounter === sliderImages.length - 1) {
    slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[0].src})`
    sliderText.innerHTML = sliderImages[0].text
    slideCounter = -1

    slideContainer.classList.add("fadeIn")
    setTimeout(() => {
      slideContainer.classList.remove("fadeIn")
    }, 1000)
  }
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
      ),url(${sliderImages[slideCounter + 1].src})`
  sliderText.innerHTML = sliderImages[slideCounter + 1].text
  slideCounter++
  slideContainer.classList.add("fadeIn")
  setTimeout(() => {
    slideContainer.classList.remove("fadeIn")
  }, 1000)
})

btnLeft.addEventListener("click", function() {
  if (slideCounter === 0) {
    slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ),url(${sliderImages[sliderImages.length - 1].src})`
    sliderText.innerHTML = sliderImages[sliderImages.length - 1].text
    slideCounter = sliderImages.length
    slideContainer.classList.add("fadeIn")
    setTimeout(() => {
      slideContainer.classList.remove("fadeIn")
    }, 1000)
  }

  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ),url(${sliderImages[slideCounter - 1].src})`
  sliderText.innerHTML = sliderImages[slideCounter - 1].text
  slideCounter--
  slideContainer.classList.add("fadeIn")
  setTimeout(() => {
    slideContainer.classList.remove("fadeIn")
  }, 1000)
})

startSlider()