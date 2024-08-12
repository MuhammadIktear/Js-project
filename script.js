const apikey="cdae2a5e4c0e7af7c092c1614ac33a52";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weather_icon=document.querySelector(".weather-icon");
const error=document.querySelector(".error");
const weather=document.querySelector(".weather");
async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    if(response.status==404){
        error.style.display="block";
    }
    else{
        weather.style.display="block";
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";
        if(data.weather[0].main=="Clouds"){
            weather_icon.src="images/clouds.png"
        }
        else if(data.weather[0].main=="Clear"){
            weather_icon.src="images/clear.png"
        }
        else if(data.weather[0].main=="Drizzle"){
            weather_icon.src="images/drizzle.png"
        }
        else if(data.weather[0].main=="Mist"){
            weather_icon.src="images/mist.png"
        }
        else if(data.weather[0].main=="Rain"){
            weather_icon.src="images/rain.png"
        }
        else if(data.weather[0].main=="snow"){
            weather_icon.src="images/snow.png"
        }
    }

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
