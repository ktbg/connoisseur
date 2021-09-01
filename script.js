// variables
const searchUrl     = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=';
const detailsUrl    = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';
const resultsGrid   = document.querySelector(".results-grid");
const searchSection = document.querySelector(".hero-search");
const searchInput   = document.querySelector("#search-input");
let input           = document.querySelector("#input");
let searchDetails   = [];
let startIndex      = 0;
let endIndex        = 0;

// ----------------------------- on page load ---------------------------------------

console.log("page reloaded");
// on page load, random works from the department code chosen
async function onLoad(){
  try{
    let res = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=painting');
    console.log(res);
    let objectIds = res.data.objectIDs;
    startEnd(objectIds.length);
    console.log(startIndex, endIndex);
    const onLoadIds = objectIds.slice(startIndex, endIndex);
    secondApi(onLoadIds);
  } catch(error){
    console.log(error);
  }
}
onLoad();
// find random starting index for objectIDs
function startEnd(arrLength){
  startIndex = Math.floor(Math.random() * arrLength);
  endIndex = startIndex + 50;
}

// ----------------------------- search logic ---------------------------------------

searchSection.addEventListener("submit", (e) => {
  e.preventDefault();
  searchInput.innerText = `'${input.value}'`;
  input = input.value.split(" ").join("%20");
  input.value = "";
  resultsGrid.innerHTML = "";
  searchDetails = [];
  console.log(input);
  getSearchItems(input);
});


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
// capped at 50 items due to load time
async function secondApi(arr){
  let qtyReturned = 0;
  if(arr.length > 50){
    qtyReturned = 50;
  } else {
    qtyReturned = arr.length;
  }
  for(let i = 0; i < qtyReturned; i++){
    const id = arr[i];
    const result = await getDetails(id);
    searchDetails.push(result);
  }
  renderDetails(searchDetails);
};

// ------------------------------- DOM append ---------------------------------------
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

