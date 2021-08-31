// variables
const searchUrl     = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=';
const detailsUrl    = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';
const artworkDetails  = {};
// const details         = [];



// get object IDs from search word or term
async function getSearchItems(search){
  try{
    let res = await axios.get(`${searchUrl}${search}`);
    let searchResultIds = res.data.objectIDs;
    // let searchItemDetails = searchResultIds.map(
    // console.log(searchResultIds);
    secondApi(searchResultIds);
  } catch(error){
    console.log(error);
  }
}

// for testing, remove this later
getSearchItems("claude%20monet");

// function getIdDetails(id){
//   return secondApi(id);
// }


// ****************************************************************************
// get details for cards based on returned object ID array from getSearchItems
// ****************************************************************************
function getDetails(artworkId){
  try{
      return axios.get(`${detailsUrl}${artworkId}`);
      // returns object of details
      // let searchDetails = res.data;
      // console.log(searchDetails);
      // MVP need: title, artistDisplayName, img --> these are working
      // ************ below kind of works, need to do it with an obj.
      // details.push(res.data.title, res.data.artistDisplayName, res.data.primaryImage);
      // console.log(details);
      // let title = res.data.title;
      // artworkDetails.title = title;
      // let artistDisplayName = res.data.artistDisplayName;
      // artworkDetails.artist = artistDisplayName;
      // let artImg = res.data.primaryImage;
      // artworkDetails.img = artImg;

      // // console.log(artworkDetails);
      // return artworkDetails;


    // postMVP need: medium, dimensions, objectDate, if!objectDate - objectBeginDate - objectEndDate, creditLine
  } catch(error){
    console.log(error);
  }
}


async function secondApi(arr){
  for(let i = 0; i < arr.length; i++){
    const id = arr[i];
    const searchDetails = await getDetails(id);
    console.log(searchDetails);
  }
};
// secondApi('436965');

// secondApi('436965');

// ****************************************************************************
//  create cards based on number of ObjectIDS returned
// ****************************************************************************

function renderDetails(obj){
  // create div with art-card class, append to .results-grid
// img tag with returned URL, alt text needs to be artwork title
// h3 = art work title
// p = artist
// ^^ append to newly created div

}

// POSTMVP
//    YEAR
//    MEDIUM
//    CREDIT

// *************************************************************************************
//              OPEN ACCESS CHECK - MAY ALREADY BE REMOVED (YET TO SEE THEM)
// *************************************************************************************
// check if item is in public domain
// function openAccess(obj){
//   console.log(`original array length is ${Object.keys(obj).length}`);
//     let viewableItems = 0;
//   for (const item in obj) {
//     if(obj.isPublicDomain === true){
//       // let viewableItems = Map.prototype.set(`${item.key}`, `${item.value}`);
//       viewableItems += 1;
//     }
//   }
//   console.log(`acceptable array length is ${viewableItems}`);
// }

// function renderDetails(){
//   // loop over objectID array and call getDetails to render details to the page
// }