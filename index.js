const Scraper = require('./scraper.js');

const scraper = new Scraper({
    baseUrl: 'https://twitter.com/'
});

const username = process.argv.slice(2)

scraper.scrape(username.toString(), (err,$)=>{

    if (err) {
      console.log(err);
      return;
    }

    let name = $('h1.ProfileHeaderCard-name').text()
    let desc = $('p.ProfileHeaderCard-bio').text()
    let tweet = $('span.ProfileNav-value').text()


    let following = $('div.buttonSet--profile > a').map(()=>{
      return $(this).text();
    })

    let jajal = $('div.buttonSet--profile > a').text();

    let result = {
        name:name,
        desc:desc,
        Tweet:tweet
    }

    let json = JSON.stringify(result);
    console.log(json);
})
