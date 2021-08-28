# Connoiseur - in progress

## Project Description

Connoiseur is an app that allows users to search for works of art from the Metropolitan Museum of Art collection by artist, time period, or department. Similar to the [Art Institute of Chicago](https://www.artic.edu/collection).

## API and Data Sample

[Metropolitan Museum of Art API](https://metmuseum.github.io/#search)

```javascript
{
    "objectID": 2397,
    "isHighlight": false,
    "accessionNumber": "17.108.10a, b",
    "accessionYear": "1917",
    "isPublicDomain": true,
    "primaryImage": "https://images.metmuseum.org/CRDImages/ad/original/DP248991.jpg",
    "primaryImageSmall": "https://images.metmuseum.org/CRDImages/ad/web-large/DP248991.jpg",
    "additionalImages": [],
    "constituents": null,
    "department": "The American Wing",
    "objectName": "Jar",
    "title": "Jar",
    "culture": "Mexican",
    "period": "",
    "dynasty": "",
    "reign": "",
    "portfolio": "",
    "artistRole": "",
    "artistPrefix": "",
    "artistDisplayName": "",
    "artistDisplayBio": "",
    "artistSuffix": "",
    "artistAlphaSort": "",
    "artistNationality": "",
    "artistBeginDate": "",
    "artistEndDate": "",
    "artistGender": "",
    "artistWikidata_URL": "",
    "artistULAN_URL": "",
    "objectDate": "ca. 1800",
    "objectBeginDate": 1797,
    "objectEndDate": 1800,
    "medium": "Tin-glazed earthenware",
    "dimensions": "H. 6 in. (15.2 cm)",
    "measurements": [
        {
            "elementName": "Overall",
            "elementDescription": null,
            "elementMeasurements": {
                "Height": 15.2
            }
        }
    ],
    "creditLine": "Gift of Mrs. Robert W. de Forest, 1911",
    "geographyType": "Made in",
    "city": "",
    "state": "",
    "county": "",
    "country": "Mexico",
    "region": "",
    "subregion": "",
    "locale": "",
    "locus": "",
    "excavation": "",
    "river": "",
    "classification": "",
    "rightsAndReproduction": "",
    "linkResource": "",
    "metadataDate": "2021-04-06T04:41:04.967Z",
    "repository": "Metropolitan Museum of Art, New York, NY",
    "objectURL": "https://www.metmuseum.org/art/collection/search/2397",
    "tags": null,
    "objectWikidata_URL": "",
    "isTimelineWork": false,
    "GalleryNumber": "774"
}
```


## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Allow users to select a category to search by from artist, time period, department or medium
- Allow users to search selected category to select a subcategory
- Render works from the selected category and subcategory on page with artist and create date for the work

#### PostMVP  

- Add modal window to view selected work showing additional information including: medium, dimensions and credit line
- Use local storage to save user favorites
- Show artist bio above works if artist is the selected category

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Aug 28-29| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Aug 30| Project Approval / Core Application Structure (HTML, CSS, etc) | Incomplete
|Aug 31| Pseudocode / actual code  | Incomplete
|Sept 1| actual code / CSS  | Incomplete
|Sept 2| CSS / Initial Clickable Model  | Incomplete
|Sept 3| Advanced CSS / Post MVP | Incomplete
|Sept 4| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

