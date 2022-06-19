 const totalCases = document.getElementById("total-case")
const activeCases= document.getElementById("active-case")
const recoverd =document.getElementById("recoverd")
const deaths =document.getElementById("deaths")

function indiaCor(data){
    fetch(
      `https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true`
    )
      .then((rawdata) => {
        // console.log(rawdata);
        return rawdata.json();
      })
      .then((data) => {
  console.log(data);
  totalCases.innerHTML= data.totalCases.toLocaleString()
  activeCases.innerHTML = data.activeCases.toLocaleString()
recoverd.innerHTML = data.recovered.toLocaleString()
  deaths.innerHTML = data.deaths.toLocaleString()
    });
  }
  
  indiaCor()