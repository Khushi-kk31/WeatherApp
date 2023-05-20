console.log("pranam");

const API_KEY = "1bf80f2a6ada24f9d2e324215c4c8b05";

async function showWeather(){
    // let latitude = 15.3333;
    // let longitude = 74.0833;
    let city = "London"

    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${API_KEY}`)

    const data = await response.json();

    console.log(data)

    let newhead = document.createElement('h2');
    newhead.textContent = `${data?.main?.temp.toFixed(2)} C`;
    // console.log(newhead.textContent)
    document.body.appendChild(newhead);
}