"use strict"

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    let websites = ['google.com',
'facebook.com',
'youtube.com',
'twitter.com',
'microsoft.com',
'linkedin.com',
'wikipedia.org',
'plus.google.com',
'apple.com',
'adobe.com',
'instagram.com',
'wordpress.org',
'en.wikipedia.org',
'itunes.apple.com',
'wordpress.com',
'vimeo.com',
'youtu.be',
'blogspot.com',
'maps.google.com',
'pinterest.com',
'goo.gl',
'yahoo.com',
'play.google.com',
'amazon.com',
'player.vimeo.com',
'bit.ly',
'googletagmanager.com',
'docs.google.com',
'tumblr.com',
'flickr.com',
'w3.org',
'get.adobe.com',
'mozilla.org',
'github.com',
'godaddy.com',
'go.microsoft.com',
'sourceforge.net',
'apache.org',
'nytimes.com',
'sites.google.com',
'soundcloud.com',
'bbc.co.uk',
'gravatar.com',
'reddit.com',
'europa.eu',
'cnn.com',
't.co',
'weebly.com',
'php.net',
'nih.gov',
'validator.w3.org',
'dropbox.com',
'amazonaws.com',
'theguardian.com',
'accounts.google.com',
'msn.com',
'tinyurl.com',
'forbes.com',
'creativecommons.org',
'issuu.com',
'gnu.org',
'wsj.com',
'wix.com',
'qq.com',
'aol.com',
'httpd.apache.org',
'test.com',
'oracle.com',
'imdb.com',
'slideshare.net',
'bing.com',
'paypal.com',
'go.com',
'live.com',
'myspace.com',
'archive.org',
'reuters.com',
'huffingtonpost.com',
'github.io',
'wikimedia.org',
'www.ncbi.nlm.nih.gov',
'cpanel.net',
'washingtonpost.com',
'cpanel.com',
'mysql.com',
'mit.edu',
'bloomberg.com',
'ibm.com',
'ebay.com',
'telegraph.co.uk',
'windows.microsoft.com',
'cnet.com',
'hp.com',
'harvard.edu',
'dailymail.co.uk',
'stanford.edu',
'macromedia.com',
'opera.com',
'vk.com',
'bp.blogspot.com']
    request('http://www.braintreepayments.com/', function(err, resp, html) {
      if(!err) {
          const $ = cheerio.load(html, {
            normalizeWhitespace: true,
            xmlMode: true
          });
          let markup = html;
          let pattern = /\bfont.*/g;;
          console.log(markup.match(pattern));
      }
    });
    res.send('server setup');
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
