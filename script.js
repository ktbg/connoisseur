// get object IDs from search word or term
async function getSearchItems(search){
  try{
    let res = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search}`);
    // need to check if item is open access and if so add to array
    // creat function for that
        let searchResultIds = res.data.objectIDs;
        let totalResults = searchResultIds.length;
    // console.log(totalResults);

  } catch(error){
    console.log(error);
  }
}

// for testing, remove this later
getSearchItems("flower");

// get details for cards based on returned object ID array from getSearchItems
async function getDetails(artworkId){
  try{
    let res = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artworkId}`)
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

getDetails('436965');

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