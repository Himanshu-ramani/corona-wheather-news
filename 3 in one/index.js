const coronaSection = document.getElementById("covid-section")
const wheatherSection = document.getElementById("wheather")
const newsSection = document.getElementById("news-section")


function covid(){
    coronaSection.style.display = "inherit"
    wheatherSection.style.display = "none"
    newsSection.style.display = "none"
}

function wheather(){
    wheatherSection.style.display = "flex"
    coronaSection.style.display = "none"
    newsSection.style.display = "none"
}

function news(){
    console.log("hi");
    newsSection.style.display = "block"
    wheatherSection.style.display = "none"
    coronaSection.style.display = "none"
}

