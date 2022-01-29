import getListings from './lib/getListings.js';
import { getNewListings } from './lib/store.js';
import sendMail from './lib/sendMail.js';
const url = process.env.URL;

async function insomniaParser() {
  console.log("insomnia parser");
  const listings = await getListings(url);
  console.log(`total listings: ${listings.length}`);
  const newListings = getNewListings(listings);
  console.log(`total new listings: ${newListings.length}`);
  if (newListings && newListings.length > 0) {
    sendMail(newListings);
  } else {
    console.log('no new listings');
  }
}

export default insomniaParser();
