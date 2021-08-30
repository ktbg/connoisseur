async function getSearchItems (search){
  try{
    let res = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search}`);
    let searchResultIds = res.data.objectIDs;
    let totalResults = res.data.total;
  

  } catch(error){
    console.log(error);
  }
}

// for testing, remove this later
getSearchItems("flower");