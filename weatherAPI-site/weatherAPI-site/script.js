const path = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f31fcc24beea4292aa684190c78f8a3c';

let inputCity = document.querySelector('.inputCityName');
let btn = document.querySelector('.submitCity');
let units = "metric";

let date = new Date;

setInterval(function(){
    let newDate = new Date();
    document.querySelector('.currentDate').textContent = newDate.toLocaleString();
}, 1000); 

if(date.getMonth() == 0 || date.getMonth() == 1 || date.getMonth() == 11){
    let winterico = document.createElement("link");
    winterico.rel="icon";
    winterico.href="icons/icons8-winter-64.png";
    document.head.appendChild(winterico);
}
if(date.getMonth() == 5 || date.getMonth() == 6 || date.getMonth() == 7){
    let summerico = document.createElement("link");
    summerico.rel="icon";
    summerico.href="icons/icons8-summer-64.png";
    document.head.appendChild(summerico);
}
if(date.getMonth() == 2 || date.getMonth() == 3 || date.getMonth() == 4){
    let springico = document.createElement("link");
    springico.rel="icon";
    springico.href="icons/icons8-spring-64.png";
    document.head.appendChild(springico);
}
if(date.getMonth() == 8 || date.getMonth() == 9 || date.getMonth() == 10){
    let autumnico = document.createElement("link");
    autumnico.rel="icon";
    autumnico.href="icons/icons8-autumn-64.png";
    document.head.appendChild(autumnico);
}



btn.onclick = function(){

    let cityName = inputCity.value;
    let totalPath = path;

    if(cityName){

        totalPath += `?q=${cityName}&appid=${apiKey}&units=${units}`;

        fetch(totalPath)
        .then(function(resp){
        
            return resp.json(); 
        })
        .then(function (data){
        
            console.log(data);
            document.querySelector('.city').textContent = "City: " + data.name;
            document.querySelector('.temp').textContent = "Temperature: " + data.main.temp;
            document.querySelector('.hum').textContent = "Humidity: " + data.main.humidity;
            document.querySelector('.press').textContent = "Pressure: " + data.main.pressure;
            document.querySelector('.clouds').textContent = "Clouds: " + data.clouds.all;
            document.querySelector('.desc').textContent = "Description: " + data.weather[0].main;
            document.querySelector('.wind').textContent = "Wind: " + data.wind.speed;
        })
        .catch(function(err){
        
            alert(err);
        })
    }
    else{
        alert("City Name is blank");
    }  
}
