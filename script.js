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
    secondApi(searchResultIds);

    // call renderDetails here
  } catch(error){
    console.log(error);
  }
}

// for testing, remove this later
getSearchItems("claude%20monet");

// get details for cards based on returned object ID array from getSearchItems
function getDetails(artworkId){
  try{
      return axios.get(`${detailsUrl}${artworkId}`);
  } catch(error){
    console.log(error);
  }
}

// async-await function for details based on objectId array returned from getSearchItems
let searchDetails = [];
async function secondApi(arr){
  for(let i = 0; i < arr.length; i++){
    const id = arr[i];
    const result = await getDetails(id);
    searchDetails.push(result);
  }
  console.log(searchDetails);
  return(searchDetails);
};

// ****************************************************************************
//  create cards based on number of ObjectIDS returned
// ****************************************************************************
const resultsGrid = document.querySelector(".results-grid");
function renderDetails(arr){
  resultsGrid.innerHTML = "";
  arr.forEach((item) => {
    // create div with art-card class, append to .results-grid
    let newDiv = document.createElement("div");
    newDiv.classList = "art-card";
    // img tag with returned URL, alt text needs to be artwork title
    let img = document.createElement("img");
    img.setAttribute("src", item.primaryImage);
    img.setAttribute("alt", item.title);
    // h3 = art work title
    let h3 = document.createElement("h3");
    h3.innerText = `${item.title}`;
    // p = artist
    let p = document.createElement("p");
    p.innerText = `${item.artistDisplayName}`

  })
  resultsGrid.appendChild(newDiv);
  newDiv.appendChild(img, h3, p);
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