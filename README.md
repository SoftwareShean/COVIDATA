# Project Overview

## COVIDATA-19

## Project Description

COVIDATA19 is an online resource for centralized updates on the Coronavirus pandemic. Data is categorized by state, listing the most recently updated infection rate (IR), as well as the current fatalities. 

## API and Data Sample

## COVID TRACKING API
https://covidtracking.com/api
```
[
{
        "state": "AK",
        "positive": 379,
        "positiveScore": 1,
        "negativeScore": 1,
        "negativeRegularScore": 1,
        "commercialScore": 1,
        "grade": "A",
        "score": 4,
        "notes": "Please stop using the \"total\" field. Use \"totalTestResults\" instead. As of 4/24/20, \"grade\" is deprecated. Please use \"dataQualityGrade\" instead.",
        "dataQualityGrade": "C",
        "negative": 26985,
        "pending": null,
        "hospitalizedCurrently": 8,
        "hospitalizedCumulative": null,
        "inIcuCurrently": null,
        "inIcuCumulative": null,
        "onVentilatorCurrently": null,
        "onVentilatorCumulative": null,
        "recovered": 324,
        "lastUpdateEt": "5/10 14:00",
        "checkTimeEt": "5/10 14:17",
        "death": 10,
        "hospitalized": null,
        "total": 27364,
        "totalTestResults": 27364,
        "posNeg": 27364,
        "fips": "02",
        "dateModified": "2020-05-10T18:00:00Z",
        "dateChecked": "2020-05-10T18:17:00Z",
        "hash": "3911e67200f7306907392fe112ba264ded3567fb"
    },
]
```
## PMVP potential includes integration of new ticker as well as local and state representative info. 

## NEWS API
https://newsapi.org/v2/everything?q=${QUERY}&apiKey=${KEY}
```
{
    "status": "ok",
    "totalResults": 724600,
    "articles": [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Engadget",
            "title": "The Morning After: Kickstarter and COVID-19",
            "description": "Tech companies around the world are facing the same difficulties in maintaining their businesses as everywhere else. Over the weekend, crowdfunding site Kickstarter has discussed layoffs as the COVID-19 pandemic ravages both projects and backers. The company …",
            "url": "https://www.engadget.com/the-morning-after-kickstarter-coronavirus-113024208.html",
            "urlToImage": "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=80&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-05%2F40be8be0-8de8-11ea-9e7f-0115ad191e56&client=amp-blogside-v2&signature=541a6de9a19c733d6b1122d76a6a93079d6c58f1",
            "publishedAt": "2020-05-04T11:30:24Z",
            "content": "Tech companies around the world are facing the same difficulties in maintaining their businesses as everywhere else. Over the weekend, crowdfunding site Kickstarter has discussed layoffs as the COVID-19 pandemic ravages both projects and backers. The company … [+4026 chars]"
        },
```
## SENATOR PROPUBLICA API
https://api.propublica.org/congress/v1/members/senate/${state}/current.json
```
{
   "status":"OK",
   "copyright":" Copyright (c) 2019 Pro Publica Inc. All Rights Reserved.",
   "results":[
      {
         "congress": "116",
         "chamber": "Senate",


         "num_results": 100,
         "offset": 0,
         "members": [
              {
                 "id": "A000360",
                 "title": "Senator, 2nd Class",
                 "short_title": "Sen.",
                 "api_uri":"https://api.propublica.org/congress/v1/members/A000360.json",
                 "first_name": "Lamar",
                 "middle_name": null,
                 "last_name": "Alexander",
                 "suffix": null,
                 "date_of_birth": "1940-07-03",
                 "gender": "M",
                 "party": "R",
                 "leadership_role": null,
                 "twitter_account": "SenAlexander",
                 "facebook_account": "senatorlamaralexander",
                 "youtube_account": "lamaralexander",
                 "govtrack_id": "300002",
                 "cspan_id": "5",
                 "votesmart_id": "15691",
                 "icpsr_id": "40304",
                 "crp_id": "N00009888",
                 "google_entity_id": "/m/01rbs3",
                 "fec_candidate_id": "S2TN00058",
                 "url": "https://www.alexander.senate.gov/public",
                 "rss_url": "https://www.alexander.senate.gov/public/?a=RSS.Feed",
                 "contact_form": "http://www.alexander.senate.gov/public/index.cfm?p=Email",
                 "in_office": true,
                 "cook_pvi": null,
                 "dw_nominate": 0.324,
                 "ideal_point": null,
                 "seniority": "17",
                 "next_election": "2020",
                 "total_votes": 374,
                 "missed_votes": 75,
                 "total_present": 0,
                 "last_updated": "2019-12-04 07:18:43 -0500",
                 "ocd_id": "ocd-division/country:us/state:tn",
                 "office": "455 Dirksen Senate Office Building",
                 "phone": "202-224-4944",
                 "fax": "202-228-3398",
                 "state": "TN",
                 "senate_class": "2",
                 "state_rank": "senior",
                 "lis_id": "S289"
                 ,"missed_votes_pct": 20.05,
                 "votes_with_party_pct": 96.98,
                 "votes_against_party_pct": 3.02
               },
```
## Wireframes

https://photos.app.goo.gl/yZzojGUoogJh42TA6

### MVP/PostMVP

#### MVP 

MVP WILL: 
- Utilize Covid Tracking API to display current infection rate and morbidities by state (U.S. only in MVP). 
- Display a dropdown form to select a state and load a correlating section with an img of the state outline as well as data from the API including current infection rate, and current morbidities. 
- Basic build out of base UX so that the page is simple and non-distracting. 

#### PostMVP  

- Add functionality with the News API to display a news ticker with current articles related to COVID 19 from top publishers, by state. 
- Integrate representative api so that users can quickly find their elected officials in each state
<!-- - Potentially add functionality with sharing options including email, twitter, and facebook.  -->


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|May 8| Prompt, Wireframes | COMPLETE
|May 9-10| Priority Matrix / Timeframes | COMPLETE
|May 11| Core Application Structure (HTML & CSS & DOM) | COMPLETE
|May 12| JS Pseudocode & Core functions (Access API) & IMG FORMATTING | COMPLETE
|May 13| Finalize JS functions / Test all code  | COMPLETE
|May 13| Clickable Model / MVP | COMPLETE
|May 13| ADD KNOW YOUR REP API | COMPLETE
|May 14| FINALIZE STYLING AND DEBUG | COMPLETE
|May 15| Present | Incomplete

## Priority Matrix

https://photos.app.goo.gl/yzPFuFzH2uqp9hPg6

## Timeframes

40 HOURS AVAIL MONDAY - THURSDAY // TEN HOURS/DAY
Majority of project time will be spent writing the JS functions for site usability. Which will take up most of Tuesday, Wednesday, and Thursday before presentations on Friday. If there is any extra time available upon completion of MVP I will try to include PMVP API's. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| PROPOSAL | H | 2hrs| 1hrs | 1hrs |
| HTML/FLEX | H | 6hrs| 5hrs | 6hrs |
| CSS/UX | H | 8hrs| 10hrs | 10hrs |
| DOM MANIP. | M | 6hrs| 5hrs | 5hrs |
| ASYNC FUNCTIONS | H | 12hrs| 18hrs | 18hrs |
| DOM & ASYNC | H | 8hrs| 5hrs | 5hrs |
| ADDITIONAL API | M | 10hrs| 2hrs | 2hrs |
| Total | H | 40hrs| 46hrs | 46hrs |

## Code Snippet
Pulling from a third API and displaying the data on the page in under an hour was rewarding because it showed me that I had made a lot of progress in the short space of a week. 

async function newsDisplay() {
  let newsUrl = `https://newsapi.org/v2/everything?q=covid&apiKey=f5abcb1acb1942188a4163e71207fab5`
    let news = await axios.get(newsUrl)
    const articlesArray = news.data.articles
  let newsScroll = document.querySelector('.news-display')
  newsScroll.innerHTML =
    `
    <div class="article">
    <a target="_blank" href="${articlesArray[0].url}">
      <img class="articleImg" src='${articlesArray[0].urlToImage}'>
      <h4>${articlesArray[0].title}</h4>
      <h6>${articlesArray[0].author}</h6></a>
    </div>
}
`

## Change Log

Updated layout for better functionality. State data now only displays on click from a drop down. Original API for state representatives was changed to PROPUBLICA API. 
