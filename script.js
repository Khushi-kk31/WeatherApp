console.log("pranam");

// const access = document.querySelector("[grant-access]");
const userTab = document.querySelector("[userWeather]");
const searchTab  = document.querySelector("[searchWeather]");

const grantAccess = document.querySelector(".access-page");
const dataSearch = document.querySelector("[data-search]");
const loading = document.querySelector(".loading-container");
const userInfo = document.querySelector(".search-page-after")

let currentTab = userTab;
const API_KEY = "893adea271f327cd4ede73c9b084f060";
currentTab.classList.add("current-tab");


function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab=clickedTab;
        currentTab.classList.add("current-tab");
    }
  
}


userTab.addEventListener("click", () =>{
    console.log("This tab is clicked");
    //pass clicked tab as input parameter
    switchTab(userTab);
})

searchTab.addEventListener("click", () =>{
    //pass clicked tab as input parameter
    switchTab(searchTab);
})












// async function accessCurrentLocation(position){
//     const successCallback = (position) => {
//         console.log(position);
//     };
      
//     const errorCallback = (error) => {
//         console.log(error);
//     };
      
//     return navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// };



// access.addEventListener('Click', () =>{
//     // accessCurrentLocation(position);
//     console.log("I m working");
// })

// // const API_KEY = "1bf80f2a6ada24f9d2e324215c4c8b05";

// // async function showWeather(){
// //     // let latitude = 15.3333;
// //     // let longitude = 74.0833;
// //     let city = "London"

// //     const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${API_KEY}`)

// //     const data = await response.json();

// //     console.log(data)

// //     let newhead = document.createElement('h2');
// //     newhead.textContent = `${data?.main?.temp.toFixed(2)} C`;
// //     // console.log(newhead.textContent)
// //     document.body.appendChild(newhead);
// // }