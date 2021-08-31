// variables
const searchUrl     = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=';
const detailsUrl    = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';
const resultsGrid   = document.querySelector(".results-grid");
let searchSection   = document.querySelector(".hero-search");
let searchInput     = document.querySelector("#input");
let searchDetails   = [];

console.log("page reloaded");
searchSection.addEventListener("submit", (e) => {
  e.preventDefault();
  input = searchInput.value.split(" ").join("%20");
  searchInput.value = "";
  resultsGrid.innerHTML = "";
  searchDetails = [];
  console.log(input);
  getSearchItems(input);
});
// on load generate random department number code
function department(){
  try{
    return axios.get('https://collectionapi.metmuseum.org/public/collection/v1/departments');
  } catch(error){
    console.log(error);
  }
}

// on page load, random works from the department code chosen
async function onLoad(){
  try{
    let res = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=painting');
    let deptArr = department().length;
    console.log(deptArr);
    
    // 
  } catch(error){
    console.log(error);
  }
}
onLoad();

// get object IDs from search word or term
async function getSearchItems(search){
  try{
    let res = await axios.get(`${searchUrl}${search}`);
    let searchResultIds = res.data.objectIDs;
    secondApi(searchResultIds);
  } catch(error){
    console.log(error);
  }
}

// get details for cards based on returned object ID array from getSearchItems
function getDetails(artworkId){
  try{
      return axios.get(`${detailsUrl}${artworkId}`);
  } catch(error){
    console.log(error);
  }
}

// async-await function for details based on objectId array returned from getSearchItems

async function secondApi(arr){
  let qtyReturned = 0;
  if(arr.length > 100){
    qtyReturned = 100;
  } else {
    qtyReturned = arr.length;
  }
  for(let i = 0; i < qtyReturned; i++){
    const id = arr[i];
    const result = await getDetails(id);
    searchDetails.push(result);
  }
  // return(searchDetails);
  renderDetails(searchDetails);
};

// ****************************************************************************
//  create cards based on number of ObjectIDS returned
// ****************************************************************************

function renderDetails(arr){
  arr.forEach((item) => {
    // create div with art-card class, append to .results-grid
    let newDiv = document.createElement("div");
    newDiv.classList = "art-card";
    newDiv.setAttribute("id", item.data.objectId);
    // event listener for modal click functionality
    // newDiv.addEventListener("click", (e) => {
    //   modalInfo(e.target.id);
    // })
    // img tag with returned URL, alt text needs to be artwork title
    let img = document.createElement("img");
    img.classList = "result-img";
    img.setAttribute("src", item.data.primaryImage);
    img.setAttribute("alt", item.data.title);
    // h3 = art work title
    let h4 = document.createElement("h4");
    h4.innerText = `${item.data.title}`;
    // p = artist
    let p = document.createElement("p");
    p.innerText = `${item.data.artistDisplayName}`;
    // ^^ append to newly created div
    resultsGrid.appendChild(newDiv);
    newDiv.append(img, h4, p);
  })
}
// gets additional modal info, medium, dimensions, creditLine
// function modalInfo(){

// }

// renderModal function - to set layout of modal

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