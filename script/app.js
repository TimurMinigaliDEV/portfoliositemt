const header = document.getElementById("header");
const startSize = { width: 98};
const endSize = { width: 4};
const popup = document.getElementById("popup")
const logo = document.getElementById("logo");
const slideBar = document.getElementById("slidebar");
const navigation = document.getElementById("navigation");
const logoPosition = logo.getBoundingClientRect();
const maxScroll = document.getElementById("hero").clientHeight;
const aboutslide = document.getElementById("slideabout");
const about = document.getElementById("about");
const aboutInner = document.querySelector(".about__inner");
const aboutInnerIdEl = document.getElementById("aboutinner");
const textContainer = document.querySelector(".about__text-container");
const imgAbout = document.querySelector(".about__img-container");




window.addEventListener("scroll", () => {
    const scrollPosition = Math.min(window.pageYOffset, maxScroll);
    const progress = scrollPosition / maxScroll;
    const currentWidth = startSize.width - (startSize.width - endSize.width) * progress;
    header.style.width = currentWidth + '%';
    
    logo.style.marginLeft = 7 + "px"
    if (currentWidth < 50) {
        navigation.style.opacity = "0"
        slideBar.style.opacity = "0"
        header.style.padding = 0;
    } else {
        navigation.style.opacity = "1"
        slideBar.style.opacity = "1"
        header.style.padding = "var(--paddingforobject)";
    }

    if (currentWidth === 4) {
        header.style.width = "40px";
        header.addEventListener("click", (event) => {
            event.preventDefault();
            header.style.width = "98%";
            header.style.transition = "width 1s";
            slideBar.style.opacity = "1";
            navigation.style.opacity = "1";
            header.style.padding = "var(--paddingforobject)";
            currentWidth = 98;
        })
        
    }

    if (currentWidth < 40) {
        if (window.innerWidth > 915) {
            aboutslide.classList.add("aboutopenclass");
        } else {
            console.log("openforheight")
            aboutslide.classList.remove("aboutopenclass")
            aboutslide.style.height = "100%";
            aboutslide.style.maxHeight = "100%";
        }
    }


    if (currentWidth < 98) {
        slideBar.classList.remove("rotateslidebar")
        popup.classList.remove("active");
    }    
})

// slidebar

function openPopUp() {
    slideBar.addEventListener("click", () => {
        slideBar.classList.toggle("rotateslidebar");
        popup.classList.toggle("active");
    })
}

if (window.innerWidth > 600) {
    console.log("close")
} else {
    openPopUp()
}

if (window.innerWidth <= 500) {
    console.log("<484")
    aboutInnerIdEl.style.height = `${textContainer.clientHeight + imgAbout.clientHeight + 60}px`;
}

// stack

// animation for stack-box

const stackBoxText = document.querySelectorAll(".box__text");
const stackBoximg = document.querySelectorAll(".img");
const stackBoxTitle = document.querySelectorAll(".box__title");
const stack = document.querySelectorAll(".stack")
const stackContainer = document.querySelectorAll(".stack__content-box")

function stackBoxAnimation() {
    stackBoxText.forEach((elem) => {
        elem.classList.add("active")
    })
    stackBoximg.forEach((elem) => {
        elem.classList.add("active")
    })
    stackBoxTitle.forEach((elem) => {
        elem.classList.add("active")
    })
}

const stackObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active")
        }
    })
}, {threshold: 0})

const stackContObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio >= 1) {
            entry.target.style.transform = "scale(1.1)"        
        } else if (entry.intersectionRatio < 0.99){
            entry.target.style.transform = "scale(1)"
        }

    })
}, {threshold: [1, 0.99]})

// const stackContDownObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.style.transform = "scale(1)"        
//         }
//     })
// }, {threshold: 0.8})

if (window.innerWidth < 430) {
    stackContainer.forEach((elem) => {
    stackContObserver.observe(elem)
})
}

stackBoximg.forEach((elem)=> {
    stackObserver.observe(elem)
});

stackBoxTitle.forEach((elem)=> {
    stackObserver.observe(elem)
});

stackBoxText.forEach((elem)=> {
    stackObserver.observe(elem)
});



// ABOUT_IMAGE SCRIPT

const image = document.querySelector(".about__img-container")

image.addEventListener("click", () => {
    image.style.backgroundImage = "url(../image/imageforaboutforclick.jpg)"
})