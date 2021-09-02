// variables
const searchUrl     = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=';
const detailsUrl    = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';
const resultsGrid   = document.querySelector(".results-grid");
const searchSection = document.querySelector(".hero-search");
const result        = document.querySelector(".result-total");
const modal         = document.querySelector(".modal");
const body          = document.querySelector("body");

let input           = document.querySelector("#input");
let searchDetails   = [];
let startIndex      = 0;
let endIndex        = 0;
let modalContent    = document.querySelector(".modal-content");

// ----------------------------- on page load ---------------------------------------

console.log("page reloaded");
// on page load, random works from the department code chosen
async function onLoad(){
  try{
    let res = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=painting');
    let objectIds = res.data.objectIDs;
    startEnd(objectIds.length);
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
  result.innerText = `Top 50 open access results for '${input.value}'`;
  result.style.display = "block";
  let userInput = input.value.split(" ").join("%20");
  input.value = "";
  resultsGrid.innerHTML = "";
  searchDetails = [];
  console.log(userInput);
  getSearchItems(userInput);
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
    if(item.data.primaryImage === ""){
      return;
    } else {
          // create div with art-card class, append to .results-grid
      let newDiv = document.createElement("div");
      newDiv.classList = "art-card";
      newDiv.setAttribute("name", `${item.data.objectID}`);
          // event listener for modal click functionality
      newDiv.addEventListener("click", (e) => {
        console.log(`modal listener clicked on item id ${e.target.name}`);
        modalInfo(e.target.name);
      });
      let imgDiv = document.createElement("div");
      imgDiv.classList = "imgDiv";
          // img tag with returned URL, alt text needs to be artwork title
        let img = document.createElement("img");
        img.classList = "result-img";
        img.setAttribute("src", item.data.primaryImage);
        img.setAttribute("alt", item.data.title);
        img.setAttribute("name", `${item.data.objectID}`);
          // h3 = art work title
      let h4 = document.createElement("h4");
      h4.innerText = `${item.data.title}`;
      h4.setAttribute("name", `${item.data.objectID}`);
          // p = artist
      let p = document.createElement("p");
      p.innerHTML = `<strong>${item.data.artistDisplayName}</strong>`;
      p.setAttribute("name", `${item.data.objectID}`);
          // ^^ append to newly created div
      resultsGrid.appendChild(newDiv);
      newDiv.append(img, h4, p);
    } 
  })
}

// -------------------------------- modal ------------------------------------------
// gets additional modal info, medium, dimensions, creditLine
function modalInfo(itemId){
  getModalDetails(itemId);
}

async function getModalDetails(artworkId){
  // get details for this item
  try{
    let res = await axios.get(`${detailsUrl}${artworkId}`);
    console.log(res);
    const modalImg = ["image", res.data.primaryImage];
    const modalArtist = ["artist", `${res.data.artistDisplayName}`];
    const modalTitle = ["title", `${res.data.title}`];
    const modalDate = ["objectDate", res.data.objectDate];
    const modalBeginDate = ["objectBeginDate", res.data.objectBeginDate];
    const modalEndDate = ["objectEndDate", res.data.objectEndDate];
    const modalMedium = ["medium", `${res.data.medium}`];
    const modalDimensions = ["dimensions", `${res.data.dimensions}`];
    const modalCredit = ["credit", `${res.data.creditLine}`];
    const map = new Map([modalImg, modalArtist, modalTitle, modalDate, modalBeginDate, modalEndDate, modalMedium,  modalDimensions, modalCredit])
    const modalInfo = Object.fromEntries(map);
    // render modal details with item information returned above
    renderModal(modalInfo);
  }catch(error){
    console.log(error);
  }
}
// idea for modal code from: https://www.w3schools.com/howto/howto_css_modals.asp
// renderModal function - to set layout of modal
function renderModal(obj){
    // clear modal-content section
  modalContent.innerHTML = "";
    // add click listener to modal span to close modal
  let span = document.querySelector(".close");
  span.addEventListener("click", () => {
    modal.style.display = "none";
  })
  // img tag with returned URL, alt text needs to be artwork title
  let img = document.createElement("img");
  img.classList = "modal-img";
  img.setAttribute("src", obj.image);
  img.setAttribute("alt", `${obj.title}`);
      // h3 = art work title
  let h4 = document.createElement("h4");
  h4.innerText = `${obj.title}`;
      // p = artist
  let p = document.createElement("p");
  p.innerHTML = `<strong>${obj.artist}</strong>`;

  let ul = document.createElement("ul");
  modalContent.append(img, h4, p, ul);
    
  let liYear = document.createElement("li");
  if(obj.objectDate === ""){
    liYear.innerHTML = `<strong>Year:</strong> ${obj.objectBeginDate} - ${obj.objectEndDate}`;
  } else {
    liYear.innerHTML = `<strong>Year:</strong> ${obj.objectDate}`;
  }
  let liMedium = document.createElement("li");
  liMedium.innerHTML = `<strong>Medium:</strong> ${obj.medium}`;

  let liDimensions = document.createElement("li");
  liDimensions.innerHTML = `<strong>Dimensions:</strong> ${obj.dimensions}`;

  let liCredit = document.createElement("li");
  liCredit.innerHTML = `<strong>Credit:</strong> ${obj.credit}`;
  ul.append(liYear, liMedium, liDimensions, liCredit);
      // display modal
  modal.style.display = "block"
}

// close modal with click outside the window on larger screens
body.addEventListener("click", (e) => {
  if(e.target === modal){
    console.log("click on body registered");
    modal.style.display = "none";
  }
})


