let options = document.querySelectorAll(".option")
let featureText = document.querySelector(".feature")

options.forEach(option => {
    option.addEventListener("click", () => {
        options.forEach(optionCircle => {
            optionCircle.classList.remove("active")
            optionCircle.classList.add("text-gray")
            featureText.classList.remove('fade-out')
            featureText.classList.remove('fade-in')
        })
        featureText.classList.add('fade-out')
        featureText.addEventListener('transitionend', () => {
            if(option.id === "first") {
                featureText.textContent = "Excellent revision tool, specially when you have an interview coming up in 15 days or so. It's so hard to find everything in one place."
            }
            else if(option.id === "second") {
                featureText.textContent = "Highly recommended if you're interviewing or preparing these days - this guide will help you revise concepts and practice things before the interview."
            }
            else if(option.id === "third") {
                featureText.textContent = "Awesome! Love how the concepts are explained + all the wonderful resources mentioned. Having everything in one guide is super helpful."
            }
            featureText.classList.remove('fade-out')
            featureText.classList.add('fade-in')
        })
        
        option.classList.remove("text-gray")
        option.classList.add("active")
    })
})
