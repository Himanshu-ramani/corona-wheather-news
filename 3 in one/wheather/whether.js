const place = document.querySelector(".place")
const time =document.querySelector(".time") 
const condition =document.querySelector(".condition")
const temperature =document.querySelector(".temperature")
const range =document.querySelector(".range")
const input = document.querySelector(".input")

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";



const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

// const d = new Date();
// let name = month[d.getMonth()];
    let now = new Date()
    let day = weekday[now.getDay()];
    let date = now.getDate()
    let monthnow = month[ now.getMonth()]



  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=514147f35efd8d695334455a91911308`
  )
    .then((whdata) => {
      return whdata.json();
    })
    .then((data) => {
      console.log(data);
      let temp = data.main.temp
      let tempc = temp-273.15
      
      place.innerHTML =  data.name+ " ,"+ data.sys.country
      time.innerHTML = `${day} ${date}, ${monthnow}`
      temperature.innerHTML =  Math.round(tempc)+"°"
      condition.innerHTML = data.weather[0].main
      range.innerHTML =  Math.round(data.main.temp_min-273.15) +" / " +  Math.round(data.main.temp_max-273.15)
    });
 

    
  //////////
