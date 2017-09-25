var Scraper = require('./scraper.js');

var scraper = new Scraper({
    baseUrl: 'https://medium.com'
});

scraper.scrape('@ffadilaputra',(err,$)=>{
    if (err) {
      console.log(err);
      return;
    }

    let name = $('h1.hero-title').text();
    let desc = $('p.hero-description').text();

    let following = $('div.buttonSet--profile > a').map(()=>{
      return $(this).text();
    })

    let jajal = $('div.buttonSet--profile > a').text();

    let result = {
        name:name,
        desc:desc,
        following:following[0],
        followers:following[1],
        jajal:jajal
    }

    let json = JSON.stringify(result);
    console.log(json);

})
