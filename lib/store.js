import { existsSync, writeFileSync, readFileSync } from 'fs';
import path from 'path';
const cwd = process.cwd();
const storageFile = path.join(cwd, './data/listings.json');

export function getNewListings(listings) {
  let store = getStoreItems();
  const newListings = getOnlyNewListings(listings, store);
  if (newListings.length > 0) {
    writeStoreItems(listings)
  }
  return newListings;
}

function getStoreItems() {
  let store = [];
  if (existsSync(storageFile)) {
    store = JSON.parse(readFileSync(storageFile));
  }
  return store;
}

function writeStoreItems(listings) {
  writeFileSync(storageFile, JSON.stringify(listings));
}

function getOnlyNewListings(newAds, oldAds) {
  let newListings = [];
  for (let newAd of newAds) {
    let found = false;
    for (let oldAd of oldAds) {
      if (newAd.url === oldAd.url) {
        found = true;
      }
    }
    if (!found) {
      newListings.push(newAd);
    }
  }
  return newListings;
}