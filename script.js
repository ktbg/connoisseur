// variables
const searchUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=';
const detailsUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

// get object IDs from search word or term
async function getSearchItems(search){
  try{
    let res = await axios.get(`${searchUrl}${search}`);
    // console.log(res.data.objectIDs);
    // need to check if item is open access and if so add to array
    // create function for that
        let searchResultIds = res.data.objectIDs;
        let totalResults = Object.keys(searchResultIds).length;
        console.log(totalResults);
    // console.log(totalResults);
    // getDetails(searchResultIds);  - this function currently takes a number
  } catch(error){
    console.log(error);
  }
}

// for testing, remove this later
getSearchItems("claude%20monet");

// get details for cards based on returned object ID array from getSearchItems
async function getDetails(artworkId){
  try{
    let res = await axios.get(`${detailsUrl}${artworkId}`)
    let searchDetails = res.data;
    console.log(searchDetails);
    openAccess(searchDetails);
    // MVP need: title, artistDisplayName
    // need to check if item is open access and if so add to array
    // creat function for that
    let title = res.data.title;
    console.log(title);
    let artistDisplayName = res.data.artistDisplayName;
    console.log(artistDisplayName);
    // postMVP need: medium, dimensions, objectDate, if!objectDate - objectBeginDate - objectEndDate, creditLine
    // console.log(res);
  } catch(error){
    console.log(error);
  }
}

// getDetails('436965');

// check if item is in public domain
function openAccess(obj){
  console.log(`original array length is ${Object.keys(obj).length}`);
    let viewableItems = 0;
  for (const item in obj) {
    if(obj.isPublicDomain === true){
      // let viewableItems = Map.prototype.set(`${item.key}`, `${item.value}`);
      viewableItems += 1;
    }
  }
  console.log(`acceptable array length is ${viewableItems}`);
}
// loop over objectID array and call getDetails to render details to the page

// create cards based on number of ObjectIDS returned
// create div with art-card class
// img tag with returned URL, alt text needs to be artwork title
// h3 = art work title
// p = artist
// POSTMVP
//    YEAR
//    MEDIUM
//    CREDIT