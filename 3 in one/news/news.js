// const titel


function newsCall(){
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=fc892eaa17a142a799c50694a36b5499`
    )
      .then((newsdata) => {
        return newsdata.json();
      })
      .then((data) => {
        let html;
        console.log(data);
        if (data.status !== "ok") {
          html = `<h1 class="error">${data.message}</h1>`
        } else {
          html = data.articles.map(news=>` <div class="news">
          <img id="news-img" src=${news.urlToImage === null ?`../assets/loading.jpg` : news.urlToImage } alt="">
          <div class="news-info">
              <h3 id="title">${news.title}</h3>
              <h4 id="author">${news.author === null ? " ~Public" : news.author}</h4>
              <p class="news-content" id="description">${news.description === null ? `...` : news.description}</p>
              
              <div class="btn-container">
                  <a href=${news.url} id="btn">Read More</a>
                  <br>
              </div>
          </div>
  
      </div>`)
          
        }
    document.getElementById("root").insertAdjacentHTML("beforeend",html)
      });
  }
  newsCall()
  

          // document.getElementById("news-img").src = gdata.articles[art].urlToImage
        // document.getElementById("title").innerHTML = gdata.articles[art].title
        // document.getElementById("description").innerHTML = gdata.articles[art].description
        // document.getElementById("btn").href = gdata.articles[art].url
        // if (  gdata.articles[art].author == null) {
        //   document.getElementById("author").innerHTML = "~public"
        // } else {
          
        //   document.getElementById("author").innerHTML = "~" + gdata.articles[art].author
        // }