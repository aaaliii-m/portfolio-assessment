
let skillCards = document.getElementById('skillsCard');
 
document.addEventListener('scroll', () => {

    if(window.scrollY > 650 && window.scrollY < 1800) {

        if(!skillCards.classList.contains('skills-card')) {
            skillCards.classList.add('skills-card');
        }

    } else {
        skillCards.classList.remove('skills-card');
    }

});




// let skillCards = document.querySelector('.skills-card');
// console.log(window.scrollY);



// const addAnimation = () => {
//     skillCards.classList.add('skills-card');
// }

// const removeAnimation = () => {
//     skillCards.classList.remove('skills-card');
// }


// document.addEventListener("scroll", () => {
//     if (!skillCards.children.length) {
//         return false;
//     }
//     for (let i = 0; i < skillCards.children.length; i++) {
//         let htmlBar = skillCards.children[i].querySelector('#html-bar');
//         let jsBar = skillCards.children[i].querySelector('#js-bar');
//         if (jsBar == null) {
//             continue;
//         }
//         if (!isInViewport(jsBar)) {
//             removeBarClass(jsBar);
//             continue;
//         }
//         addNewClass(jsBar);
//     }
// });

// function isInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)

//     );
// }

// function addNewClass(jsBar)
// {
//     if (!jsBar.classList.contains('js-bar'))
//         jsBar.classList.add("js-bar");
// }

// function removeBarClass(jsBar)
// {
//     if (jsBar.classList.contains('js-bar'))
//         jsBar.classList.remove('js-bar');
// }