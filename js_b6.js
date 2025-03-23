const weatherData = {
  "Hà Nội": {
    temperature: 25,
    humidity: 70,
    windSpeed: 5,
    description: "Có mây",
    icon: "☁️",
  },
  "Hồ Chí Minh": {
    temperature: 32,
    humidity: 75,
    windSpeed: 7,
    description: "Nắng",
    icon: "☀️",
  },
  "Đà Nẵng": {
    temperature: 28,
    humidity: 82,
    windSpeed: 12,
    description: "Mưa rào",
    icon: "🌧️",
  },
};
const city = Object.keys(weatherData);
const input = document.querySelector("#input");
const ul = document.querySelector("#myUl");
function find(){
    const li = document.createElement("li");
        if(city.includes(input.value.trim())){
            ul.textContent = "";
            li.innerHTML=`
            <div class="container">
            <div class="overlay">
            <h2>${input.value.trim()}</h2>
            <br>
            <div class="nav">
            <div class="left">
            <span>${weatherData[input.value.trim()].icon}</span>
            <span>${weatherData[input.value.trim()].temperature}&deg;C</span>
            </div>
            <div class="right">
            <span>${weatherData[input.value.trim()].description}</span>
            <br>
            <span>Độ ẩm: ${weatherData[input.value.trim()].humidity}%</span>
            <br>
            <span>Tốc độ gió: ${weatherData[input.value.trim()].windSpeed} km/h</span>
            </div>
            </div>
            </div>
            </div>
            `
            ul.appendChild(li);
        }else{
            alert(`Tên thành phố không hợp lệ`)
        }
}
