let cheerio = require('cheerio');
let extend = require('extend');
let request = require('request');

module.exports = (userOptions) => {

  var options = extend({
      method  : 'GET',
      baseUrl : '',
      gzip    : true,
      forever : true,
      headers : {
      'Cache-Control': 'max-age=0',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36',
    }
  },userOptions);

  scrape((url,callback) => {
     var req = getRequestInstance();
        req(url,(error,response,body)=>{

          if (error) {
            return callback(error);
          }

          if (response.statusCode !== 200) {
            return callback(new Error('Failed to scrape page'))
          }

          var $ = cheerio.load(body);
          return request.defaults(options);

          return {
              scrape : scrape,
          };

        })
  })

}
