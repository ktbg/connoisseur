# Connoisseur

## Project Description

Connoisseur is an app that allows users to search for works of art in the public domain from the Metropolitan Museum of Art collection by keyword or phrase.
## API and Data Sample

[Metropolitan Museum of Art API](https://metmuseum.github.io/#search)

The search url is in this format: https://collectionapi.metmuseum.org/public/collection/v1/search?q=[word] which returns a list of objectIDs.

This search is from https://collectionapi.metmuseum.org/public/collection/v1/search?q=food

```javascript
{
    "total": 4349,
    "objectIDs": [
        4501,
        14489,
        17503,
        451363,
        40095,
        549523,
        549350,
        543927,
        549521,
	...more...]
}
```

the following code is pulled from the object search for this item by ID: [https://collectionapi.metmuseum.org/public/collection/v1/objects/2397](https://collectionapi.metmuseum.org/public/collection/v1/objects/2397)

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

Desktop view
![desktop view](https://github.com/ktbg/connoisseur/blob/main/images/p1_desktopView4.png)

Mobile Portrait View
![mobile portrait view]

Mobile Landscape View
![mobile landscape view]


### MVP/PostMVP

#### MVP 

- Random selection of public domain works rendered on page load
- Allow users to search by keyword or phrase
- Render works in the public domain from the selected search keyword or phrase on the page with artist and year visible 

#### PostMVP  

- Add modal window that highlights additional information such as medium, dimensions, credit line
- Add ability for user to save works in local storage and view saved works

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Aug 28-29| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Aug 30| Project Approval / Core Application Structure (HTML, CSS, etc) | Incomplete
|Aug 31| Pseudocode / actual code  | Incomplete
|Sept 1| actual code / CSS  | Incomplete
|Sept 2| CSS / Initial Clickable Model  | Incomplete
|Sept 3| Advanced CSS / Post MVP | Incomplete
|Sept 4| Presentations | Incomplete

## Priority Matrix

![Priority Matrix](https://github.com/ktbg/connoiseur/blob/main/p1_priorityMatrix2.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML structure | H | 1 hr|  |  |
| Initial CSS and creation of classes and ids | H | 3 hrs|  |  |
| Test API end points| H | 2 hrs|  | |
| App logic to render random works to page on load | H | 3 hrs|  | |
| App logic for keyword search | H | 4 hrs|  |  |
| App logic to render search results on the page | H | 4 hrs| |  |
| Initial flexbox CSS | H | 4 hrs|  |  |
| Styling app body | H | 1 hrs|  |  |
| Styling result cards and media query | H | 3 hrs|  |  |
| Post MVP - App logic for modal window| M | 3 hr|  |  |
| Post MVP - styling modal window | M | 1 hr|  |  |
| Post MVP - app logic for local storage of favorites | L | 3 hr|  |  |
| Total |  | 32 hrs|  |  |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

