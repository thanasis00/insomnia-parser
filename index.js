import getListings from './lib/getListings.js';
import { getNewListings } from './lib/store.js';
import sendMail from './lib/sendMail.js';
const url = process.env.URL;

async function insomniaParser() {
  console.log("insomnia parser");
  const listings = await getListings(url);
  console.log(listings);
  const newListings = getNewListings(listings);
  sendMail(newListings);
}

export default insomniaParser();
