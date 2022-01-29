import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

export default async function getListings(url) {
  const body = await fetchPage(url);
  return getAds(body);
}

async function fetchPage(url) {
  const response = await fetch(url);
  const body = await response.text();
  return body;
}

function getAds(body) {
  const root = parse(body);
  let listingsHTML = root.querySelectorAll('ol.ipsStream li.ipsStreamItem');
  const ads = [];
  for (const item of listingsHTML) {
    const imageHTML = item.querySelector('.ipsStreamItem_snippet img')
    const image = (imageHTML) ? imageHTML.rawAttrs : '';
    const data = {
      title: item.querySelector('h2 a').childNodes[0]._rawText.trim(),
      url: item.querySelector('h2 a').rawAttrs.match(/\bhttps?:\/\/\S+/gi)[0],
      img: image.match(/\/\/cdn[a-zA-Z0-9\/\_\-\.]+/gi) ? 'https:' + image.match(/\/\/cdn[a-zA-Z0-9\/\_\-\.]+/gi)[0] : '',
      date: item.querySelector('.ipsStream_snippetInfo p.ipsType_normal strong').childNodes[0]._rawText,
      desc: item.querySelector('.ipsType_richText').childNodes[0]._rawText,
      price: item.querySelector('.ipsStream_price').childNodes[0]._rawText.match(/[0-9]+/gi)[0],
    }
    ads.push(data);
  }
  return ads;
}