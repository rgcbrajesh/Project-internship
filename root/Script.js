// function toggleMenu() {
//     var navbarLinks = document.querySelector('.navbar-links');
//     navbarLinks.classList.toggle('active');
// }

// // typewriter 
// document.addEventListener("DOMContentLoaded", function () {
//         const autotyperContainer = document.getElementById('autotyper-container');
//         const textsToType = ["Welcome to VIP School", "Education is the Most Powerful Weapon", "Learning Never Ends", "Education is the Most Powerful Weapon",];
//         let textIndex = 0;

//         function autoType() {
//             let index = 0;
//             const intervalId = setInterval(function () {
//                 autotyperContainer.textContent = textsToType[textIndex].slice(0, index);
//                 index++;

//                 if (index > textsToType[textIndex].length) {
//                     clearInterval(intervalId);
//                     textIndex = (textIndex + 1) % textsToType.length; // Move to the next text
//                     setTimeout(autoType, 1000); // Pause for 1 second before typing the next text
//                 }
//             }, 100); // Adjust the interval for typing speed
//         }

//         autoType();
//     });
// // Counter Logic
// let count = 0;
// let count1 = 0;
// let count2 = 0;

// function updateCounters() {
//     if (count < 1500) {
//         count += 1;
//         document.getElementById('count').innerText = count;
//     }

//     if (count1 < 30) {
//         count1 += 1;
//         document.getElementById('count1').innerText = count1;
//     }

//     if (count2 < 50) {
//         count2 += 1;
//         document.getElementById('count2').innerText = count2;
//     }

//     if (count === 1500 && count1 === 30 && count2 === 50) {
//         clearInterval(intervalId);
//     }
// }

// const intervalId = setInterval(updateCounters, 0.5);

