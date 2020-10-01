---
template: BlogPost
path: /florida-eviction-protection-project
date: 2020-05-05T07:08:53.137Z
title: Florida Eviction Protection Project
thumbnail: '/assets/florida-housing.jpg'
metaDescription: Coded a script to help Americans know their rights in massive eviction threats.
---

# Evictions: Suspended
As the COVID-19 pandemic story develops, governments at the local and state levels must update their policies and initiatives to swiftly adapt to change. Some Florida counties are suspending eviction procedures during the emergency, as leaving people on the streets would only exacerbate the current public health crisis. However, despite these protections, some landlords may still try to evict unknowing residents, further exacerbating the social costs of the pandemic.

The Florida Eviction Project
To help Florida residents know their rights, Project Lead Greg Bloom and Movement Lawyer Alana Greer of the Community Justice Project, with the help of Code for South Florida volunteers created the Florida Eviction Protection project. The tool allows users to input any county in Florida and view the status of eviction policies in the selected county. It also highlights the different steps in the eviction process in a dynamic flow chart that technical volunteers from Code For South Florida are updating as the evictions situation develops.

> ## *"People were getting evicted after hurricane Irma, and the state of emergency made laws inconsistent across counties. The situation is the same with COVID-19."*

> > Alana Greer, The [Community Justice Project](http://communityjusticeproject.com/)

The Florida Eviction Protection project keeps in mind two primary users: Florida residents across the state, and organizations like the Community Justice Project who are helping residents navigate evictions. “The most likely scenario”, says Greg Bloom, “is that an organization helping people can use this to look up the county in which the person’s in and give them basic information about the state of eviction policy, or some pointers on where they can go next.” He also emphasizes the importance of the tool “in a fast-moving situation” where some counties are changing their policies, and others are not, at varying rates.

Alana Greer of the Community Justice Project works with underrepresented and low-income populations in Miami, and regularly deals with issues of eviction in the county. “People were getting evicted after hurricane Irma, and the state of emergency made laws inconsistent across counties,” which left both tenants and landowners alike in the dark about their rights and procedures. “The situation is the same with COVID-19,” she mentions, and tenants without the privilege, time, or resources to stay up to date about changes in eviction laws are most at risk of losing their homes, especially once the eviction suspensions are lifted.

An Escalating Crisis
With unemployment rising in Florida due to the pandemic, people are losing their incomes, which makes them unable to pay rent and vulnerable to evictions. This is especially pressing since Florida is also on the cusp of hurricane season. In this uncertain climate, the Florida Eviction Protection is an opportunity for tenants and community leaders to understand their rights and protections in the face uncertainty and connect with each other for more comprehensive protections against injustice.

The Florida Eviction Protection project stands to include more resources and information for tenants as the circumstances develop. Civic engagement and crisis management alike rely on the dissemination and distribution of accurate and up-to-date information in order to make the decisions that properly represent and serve citizens. While the Florida Eviction Protection project is no revolutionary tool that is striving to turn an industry on its head, it is a significant point of connection for the well being of citizens in a time of crisis.

## You can access the Florida Eviction Protection project on this URL: https://florida.evictionprotection.org/

source: https://codeforsouthflorida.com/blog/protecting-tenants-in-a-state-of-emergency/
- - -
# My contribution to the project

I led the JavaScript implementation of :
- The search tool for protected properties
- The timeline of eviction tool for each county of Florida.

I used Google Visualization API(found in Google Charts), Google Maps JavaScript API & Places API, along Vanilla JS, CSS & HTML.

Feel free to check this CodePen and read the comments through my code. <br/>
NB: The code is fully functional on https://codepen.io/zibobilo/pen/PoZvwLp or on https://florida.evictionprotection.org/

```HTML
<style>
  #loadingData input,
  #preMap input {
    margin: 10px auto;
    border-radius: 4px;
    height: 40px;
    width: fit-content;
    min-width: 50%;
  }

  #loadingData input,
  #preMap input {
    border: 2px solid red;
    box-shadow: 0 0 10px red;
    outline: none;
  }

  #preMap p {
    padding: 0px 20px;
    text-align: center;
    margin: auto;
  }

  #preMap .loader {
    height: 100px;
    width: 20%;
    text-align: center;
    margin: 0 auto 1em;
    display: block-inline;
    vertical-align: top;
  }

  #loadingData {
    display: block;
    align-text: center;
  }

  #preMap h3 {
    text-align: center;
  }

  #preMap button {
    margin: auto;
    display: block;
    margin: 20px auto;
    text-align: center;
  }

  #status {
    width: fit-content;
    margin: auto;
    display: block;
    text-align: center;
  }

  #map {
    height: 400px;
  }

  #map-link {
    margin: auto;
    align-text: center;
  }

  /* Always set the map height explicitly to define the size of the div
   * element that contains the map. */
  /* Optional: Makes the sample page fill the window. */

  #description {
    font-family: Roboto;
    font-size: 15px;
    font-weight: 300;
  }

  #infowindow-content .title {
    font-weight: bold;
  }

  #infowindow-content {
    display: none;
  }

  #map #infowindow-content {
    display: inline;
  }

  .pac-card {
    margin: 10px 10px 0 0;
    border-radius: 2px 0 0 2px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    font-family: Roboto;
  }

  #pac-container {
    padding-bottom: 12px;
    margin-right: 12px;
  }

  .pac-controls {
    display: inline-block;
    padding: 5px 11px;
  }

  .pac-controls label {
    font-family: Roboto;
    font-size: 13px;
    font-weight: 300;
  }

  #pac-input {
    background-color: #fff;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 300;
    margin: 30px auto 0 auto;
    padding: 0 11px 0 13px;
    text-overflow: ellipsis;
    width: 400px;
    height: 35px;
    display: block;
  }

  #pac-input:focus {
    border-color: #4d90fe;
  }

  #title {
    color: #fff;
    background-color: #4d90fe;
    font-size: 25px;
    font-weight: 500;
    padding: 6px 12px;
  }

  #target {
    width: 345px;
  }

  /* Optional: Makes the sample page fill the window. */
  html,
  body {
    height: 400px;
    margin: 0;
    padding: 0;
  }


  #infowindow-content .title {
    font-weight: bold;
  }

  #infowindow-content {}

  #map #infowindow-content {
    display: inline;
  }

  .pac-card {
    margin: 10px 10px 0 0;
    border-radius: 2px 0 0 2px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    font-family: Roboto;
  }

  #pac-container {
    padding-bottom: 12px;
    margin-right: 12px;
  }

  .pac-controls {
    display: inline-block;
    padding: 5px 11px;
  }

  .pac-controls label {
    font-family: Roboto;
    font-size: 13px;
    font-weight: 300;
  }

  #pac-input {
    font-size: 15px;
    font-weight: 300;
    padding: 4px;
    margin: 15px auto;
    width: content-fit;
    border: 2px solid red;
    box-shadow: 0 0 10px red;
    outline: none;
  }

  #pac-input:focus {
    border-color: #4d90fe;
  }

  #title {
    color: #fff;
    background-color: #4d90fe;
    font-size: 25px;
    font-weight: 500;
    padding: 6px 12px;
  }

  #target {
    width: 345px;
  }
</style>
<div id="preMap">
  <input id="pac-input" type="text" class="controls">
  <div id="loadingData">
    <h3> Loading Data...</h3>
    <div class="loader loader--style3">
      <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  </div>
</div>
<div id="map"></div>

<!-- this script is for the clusters mapping we will do later or we won't even need it -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASo6aJ_h59XT7H3z9czq3cEXJyr-6pPMA&libraries=places&callback=initMap" async defer></script>

<script type="text/javascript" src='https://www.gstatic.com/charts/loader.js'></script>
<script type="text/javascript">
  // Credits to :
  // Raphael Burkhardt https://codepen.io/zibobilo
  // Francesca Jeah No Lee https://codepen.io/Francesca_G
  // Visit https://florida.evictionprotection.org/ to see the interface in action.
  // ------------------------------------------------
  // Loads all the first elements, initalized on Map api callback
  let latitude, longitude
  let fedProtectedPlaces = []
  let loadingData = document.getElementById('loadingData')
  let preMap = document.getElementById('preMap')
  // Adding the markers to the Map
  function setMarkers(map) {
    for (var i = 0; i < dataProp.table4.rows.length; i++) {
      var fedProtectedPlace = {
        lat: Number(dataProp.table4.rows[i][6]),
        lng: Number(dataProp.table4.rows[i][7])
      };
      var infowindow = new google.maps.InfoWindow();
      var markers = []
      var marker = new google.maps.Marker({
        position: fedProtectedPlace,
        map: map,
        title: dataProp.table4.rows[i][3]
      })
      markers += marker
      google.maps.event.addListener(marker, 'click', function(marker, i) {
        var contentString = `
          <div><b>${dataProp.table4.rows[i][2]}</b></div>
          <div>${dataProp.table4.rows[i][3]}, ${dataProp.table4.rows[i][4]}, ${dataProp.table4.rows[i][5]}</div>
          <div><a href="${dataProp.table4.rows[i][11]}" target="blank">${dataProp.table4.rows[i][9]}</a></div>`
        return function() {
          infowindow.setContent(contentString);
          infowindow.open(map, marker);
        }
      }(marker, i))
    }
    // var markerCluster = new MarkerClusterer(map, markers,
    //           {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  }
  var map

  function initMap() {
    // Launch Map over State of Florida
    // initalize Map, the function is called by the api link on callback from the google maps script tag
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 28,
        lng: -82
      },
      zoom: 6
    })
    var styles = {
      default: null,
      hide: [{
        featureType: 'poi',
        stylers: [{
          visibility: 'off'
        }]
      }]
    }
    map.setOptions({
      styles: styles['hide']
    })
    // var options = { componentRestrictions: { country: "us" } }
    var input = document.getElementById('pac-input')
    var autocomplete = new google.maps.places.Autocomplete(input)
    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo('bounds', map);
    autocomplete.addListener('place_changed', function() {
      var place = autocomplete.getPlace()
      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport)
      } else {
        map.setCenter(place.geometry.location)
        map.setZoom(16)
      }
    })
  }
  // running geolocation onclick of a button and asking user to accept geolocation 
  function findMyLocation() {
    // geolocation success
    function success(position) {
      latitude = position.coords.latitude
      longitude = position.coords.longitude
      loadingData.innerHTML = `
        <button id = "find-me" onclick="findMyLocation()">Find my location</button><br/>`
      map.setCenter({
        lat: latitude,
        lng: longitude
      })
      map.setZoom(16)
    }
    // geolocation error
    function error() {
      status.innerHTML = `
        <p>Unable to retrieve your location</p>
        <input  id="pac-input" 
                type="text" 
                placeholder="Enter your address" 
                class="controls">`
    }
    if (!navigator.geolocation) {
      status.innerHTML = `
        <p>Geolocation is not supported by your browser</p>
        <input  id="pac-input" 
                type="text" 
                placeholder="Enter your address" 
                class="controls">`
    } else {
      status.textContent = 'Locating…';
      // Asking the navigator to run test and will eather run "success" function or "error" function based on response.
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  // From here to the end => Call the API database with all the federally protected properties and custruct our data set
  let dataProp = [],
    data4;
  google.charts.load()
  google.charts.setOnLoadCallback(getDataSheets)
  // to always get the string version of each cell in the DB and avoid bugs
  function cleanRowsContent(cell) {
    //if the cell is not defined or null , it will return an empty string.    
    if (cell === null || cell === undefined) {
      // we want to convert that null in an empty string
      return ""
      // we always want to retrieve the value of the "f" key as much as possible, so if it undefined lets bring what there is (v).
    } else if (cell.f === undefined) {
      if (cell.v === null) {
        return ""
      }
      return cell.v
      // if "f" key is defined I want to retrieve it - as it is always in a string type. -
    } else if (cell.f !== undefined) {
      return cell.f
    } else {
      console.log(`CleanRowsContent(${cell}): hum little problem, i missed something? what is this data?`)
      return
    }
  }

  function handleQueryResponse4(response) {
    data4 = JSON.parse(response.getDataTable().toJSON())
    dataProp.table4 = {
      headers: [...data4.cols],
      rows: [...data4.rows]
    }
    for (let i = 0; i < data4.cols.length; i++) {
      dataProp.table4.headers[i] = dataProp.table4.headers[i].label
    }
    for (let i = 0; i < data4.rows.length; i++) {
      let tempRow = [];
      for (let j = 0; j < data4.rows[i].c.length; j++) {
        // creation of rows to add later one by one
        tempRow[j] = cleanRowsContent(dataProp.table4.rows[i].c[j])
      }
      //adding the rows to the array i will be using
      dataProp.table4.rows[i] = tempRow
    }
    loadingData.innerHTML = `
      <p>OR</p>
      <div><button style="display: block" id = "find-me" onclick="findMyLocation()">Find my location</button></div><br/>
      <p>Look for covered properties in your area. Click a marker to see the protected property’s address and the associated program through which it is protected.</p>`
    setMarkers(map)
  }

  function getDataSheets() {
    var query4 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1xEz5wfWSwXbAgWhgvJxfxSDhNGf5w8hqVpAFbbAViEo/gviz/tq?tqx=out:json&sheet=Sheet4')
    query4.send(handleQueryResponse4)
  }
</script>
<style>
  /* Fonts */
  #countySearchTool h2 {
    padding: 0px 0px;
    margin: 20px 0px;
    font-size: 2rem;
    text-align: center;
  }

  #countySearchTool h4 {
    padding: 0px 20px;
    margin: 20px 0px;
    font-size: 1.3rem;
  }

  #countySearchTool h5 {
    padding: 0px 20px;
    margin: 0px;
    font-size: 1rem;
  }

  #countySearchTool p {
    padding: 0px 20px;
    text-align: center;
    margin: auto;
  }

  #countySearchTool [placeholder] {
    font-size: 1rem;
    padding: 0px 10px;
  }

  /* Chevrons  */
  #countySearchTool .chevron {
    position: relative;
    text-align: center;
    padding: 1px 0px 20px 0px;
    margin: 10px 0px 8px 0px;
    height: 100%;
    width: fit-content;
    min-width: 100%;
    cursor: pointer;
  }

  #countySearchTool .chevron:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 51%;
    transform: skew(0deg, 6deg);
    z-index: -5
  }

  #countySearchTool .chevron:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    transform: skew(0deg, -6deg);
    z-index: -5;
  }

  #countySearchTool .greencolor:before,
  #countySearchTool .greencolor:after {
    background-color: #d3e9d9;
  }

  #countySearchTool .greencolor:hover:before,
  #countySearchTool .greencolor:hover:after {
    background-color: rgb(170, 212, 181);
  }

  #countySearchTool .redcolor:before,
  #countySearchTool .redcolor:after {
    background-color: #ffc0c4;
  }

  #countySearchTool .redcolor:hover:before,
  #countySearchTool .redcolor:hover:after {
    background-color: rgb(255, 139, 148);
  }

  #countySearchTool .bluecolor:before,
  #countySearchTool .bluecolor:after {
    background-color: #cfd1ec;
  }

  #countySearchTool .bluecolor:hover:before,
  #countySearchTool .bluecolor:hover:after {
    background-color: rgb(165, 169, 213);
  }

  #countySearchTool .greencolor:before,
  #countySearchTool .greencolor:after,
  #countySearchTool .greencolor:hover:before,
  #countySearchTool .greencolor:hover:after,
  #countySearchTool .redcolor:before,
  #countySearchTool .redcolor:after,
  #countySearchTool .redcolor:hover:before,
  #countySearchTool .redcolor:hover:after,
  #countySearchTool .bluecolor:before,
  #countySearchTool .bluecolor:after,
  #countySearchTool .bluecolor:hover:before,
  #countySearchTool .bluecolor:hover:after {
    -moz-transition: all 0.3s ease 0s;
    -webkit-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
  }

  #countySearchTool .alignsearch {
    text-align: center;
    width: 100%;
  }

  /* general */
  #countySearchTool .center {
    width: fit-content;
    margin: auto;
    max-width: 500px;
  }

  #countySearchTool .citySelector {
    margin: 10px auto;
    border-radius: 4px;
    height: 40px;
    width: fit-content;
    min-width: 50%;
  }

  #countySearchTool input {
    border: 2px solid red;
    box-shadow: 0 0 10px red;
    outline: none;
  }

  #countySearchTool input:focus {
    border: 1px solid red;
    box-shadow: 0 0 10px red;
    outline: none;
  }

  /* Timeline  */

  #countySearchTool .timeline {
    margin: auto;
  }

  #countySearchTool ol {
    list-style-type: none;
  }

  #countySearchTool li {
    position: relative;
    margin: 0px 0px 0px -35px;
    padding-bottom: 1em;
    padding-left: 25px;
  }

  #countySearchTool li:before {
    content: '';
    background-color: #E8E8E8;
    position: absolute;
    bottom: -20px;
    top: -10px;
    left: 8px;
    width: 4px;
  }

  #countySearchTool li:after {
    content: '';
    position: absolute;
    left: 0;
    height: 20px;
    width: 20px;
  }

  #countySearchTool .go:after {
    background-image: url("https://florida.evictionprotection.org/wp-content/uploads/2020/03/Step-Active.svg");
    background-size: cover;
  }

  #countySearchTool .stop:after {
    background-image: url("https://florida.evictionprotection.org/wp-content/uploads/2020/03/Step-Supension.svg");
    background-size: cover;
  }

  #countySearchTool .stop {
    color: grey;
  }

  #countySearchTool .textbetween {
    font-weight: bold;
  }

  #countySearchTool .date {
    font-weight: bolder
  }

  #countySearchTool .bottomLine {
    color: red
  }
</style>

<div id="countySearchTool">
  <div class="center">
    <div class="alignsearch">
      <input class="citySelector" type="text" list="countyList" placeholder="Search your County" onmouseover="this.value=''" autocomplete="off" value="" onclick="this.value=''">
      <datalist id="countyList"></datalist>
    </div>
    <div class="statuscolor"></div>
    <div class="timeline"></div>
  </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script type="text/javascript" src='https://www.gstatic.com/charts/loader.js'></script>
<script type="text/javascript">
  // Setting the text for each element of the chevrons
  // general
  let detailsText = "<h5>- Click for details -</h5>"
  // Green chevron elements
  let greenTitle = `<h4>Eviction Active</h4>`
  let greenText = `<div><p>Eviction cases will continue through the county court process, and the sheriff will enforce the removal of tenants (writs of possession) who lose their case.</p></div>`
  // Red chevron elements
  let redTitle = `<h4>Eviction Suspended</h4>`
  let redText = `<div><p>- Some part of the eviction court process has been paused or suspended, giving you more time to fight for your right to stay.<br><br>- Removal of tenants who have previously lost their case is paused, either because the clerk has temporarily stopped issuing writs of possession or because the sheriff is not enforcing them</p></div>`
  // Blue chevron elements
  let blueTitle = `<h4>Eviction cases active / <br> Tenant removal innactive</h4>`
  let blueText = `<div><p>New and existing eviction cases will continue through the county court process. However, the removal of tenants who lose their case is paused, either because the clerk has temporarily stopped issuing writs of possession or because the sheriff is not enforcing them.</p></div>`
  // Setting variables to call the Chevrons on demand
  let addChevron = document.querySelector('.statuscolor')
  let greenChevron = `<div class="chevron greencolor" onclick="greenExtra()" id="greench">${greenTitle}${detailsText}</div>`
  let redChevron = `<div class="chevron redcolor" onclick="redExtra()" id="redch">${redTitle}${detailsText}</div>`
  let blueChevron = `<div class="chevron bluecolor" onclick="blueExtra()" id="bluech">${blueTitle}${detailsText}</div>`
  addChevron.innerHTML = `${greenChevron}${redChevron}${blueChevron}`
  // onclick chevrons event handler functions
  function greenExtra() {
    let x = document.getElementById("greench")
    if (x.innerHTML == `${greenTitle}${detailsText}`) {
      x.innerHTML = `${greenTitle}${greenText}`
    } else {
      x.innerHTML = `${greenTitle}${detailsText}`
    }
  }

  function redExtra() {
    let x = document.getElementById("redch")
    if (x.innerHTML == `${redTitle}${detailsText}`) {
      x.innerHTML = `${redTitle}${redText}`
    } else {
      x.innerHTML = `${redTitle}${detailsText}`
    }
  }

  function blueExtra() {
    let x = document.getElementById("bluech")
    if (x.innerHTML == `${blueTitle}${detailsText}`) {
      x.innerHTML = `${blueTitle}${blueText}`
    } else {
      x.innerHTML = `${blueTitle}${detailsText}`
    }
  }
  let countyList = []
  let data1, data2
  google.charts.load()
  google.charts.setOnLoadCallback(getDataSheets)
  // to always get the string version of each cell in the DB and avoid bugs
  function cleanRowsContent(cell) {
    //if the cell is not defined or null , it will return an empty string.    
    if (cell === null || cell === undefined) {
      // we want to convert that null in an empty string
      return ""
      // we always want to retrieve the value of the "f" key as much as possible, so if it undefined lets bring what there is (v).
    } else if (cell.f === undefined) {
      if (cell.v === null) {
        return ""
      }
      return cell.v
      // if "f" key is defined I want to retrieve it - as it is always in a string type. -
    } else if (cell.f !== undefined) {
      return cell.f
    } else {
      console.log(`CleanRowsContent(${cell}): hum little problem, i missed something? what is this data?`)
      return
    }
  }

  function handleQueryResponse1(response) {
    data1 = JSON.parse(response.getDataTable().toJSON())
    dataProp.table1 = {
      headers: [...data1.cols],
      rows: [...data1.rows]
    }
    let list = document.getElementById("countyList")
    for (let i = 0; i < data1.cols.length; i++) {
      dataProp.table1.headers[i] = dataProp.table1.headers[i].label
    }
    for (let i = 0; i < data1.rows.length; i++) {
      let tempRow = [];
      for (let j = 0; j < data1.rows[i].c.length; j++) {
        tempRow[j] = cleanRowsContent(dataProp.table1.rows[i].c[j])
      }
      // Building a Clean & Light Dataset ready to use
      dataProp.table1.rows[i] = tempRow
      // Populatating the array of the counties
      countyList.push(cleanRowsContent(data1.rows[i].c[0]))
    }
    //Sorting the county's list by alphabetical order
    countyList.sort()
    for (let i = 0; i < countyList.length; i++) {
      // Populate dropdown with counties
      list.innerHTML += `<option value="${countyList[i]}">`
    }
  }

  function handleQueryResponse2(response) {
    data2 = JSON.parse(response.getDataTable().toJSON())
    dataProp.table2 = {
      rows: [...data2.rows]
    }
    for (let i = 0; i < data2.rows.length; i++) {
      let tempRow = [];
      for (let j = 0; j < data2.rows[i].c.length; j++) {
        tempRow[j] = cleanRowsContent(dataProp.table2.rows[i].c[j])
      }
      dataProp.table2.rows[i] = tempRow
    }
  }

  function getDataSheets() {
    var query1 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1xEz5wfWSwXbAgWhgvJxfxSDhNGf5w8hqVpAFbbAViEo/gviz/tq?tqx=out:json&sheet=Sheet1')
    query1.send(handleQueryResponse1)
    var query2 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1xEz5wfWSwXbAgWhgvJxfxSDhNGf5w8hqVpAFbbAViEo/gviz/tq?tqx=out:json&sheet=Sheet2')
    query2.send(handleQueryResponse2)
  }
  // v will help determine which row index to fetch in table 2 when populating the text where the step is active or inactive
  let v
  // Attributing classes from data cell content to innerHTML
  function stopGoClass(value) {
    if (value == "✖") {
      v = 2
      return "stop"
    } else if (value == "?" || value == "✓" || value == "(✓)") {
      v = 1
      return "go"
    } else {
      //Something for federally protection in next iteration?
      return ""
    }
  }
  // Event handler search your county
  const selectElement = document.querySelector('.citySelector')
  selectElement.addEventListener('input', (event) => {
    //Only the match between input and database values will retrieve results
    if (countyList.includes(event.target.value)) {
      selectElement.setAttribute("placeholder", event.target.value);
      let r;
      for (let rows = 0; rows < countyList.length; rows++) {
        if (dataProp.table1.rows[rows][0] == event.target.value) {
          r = rows
        }
      }
      //Build string for html text
      let bottomLine = ""
      let selectCountyTitle = `<h2 class="cityTitle">${event.target.value} County</h2>`
      if (dataProp.table1.rows[r][19] == "Evictions Active, but Tenant Removal Paused") {
        bottomLine += `${blueChevron}`
      } else if (dataProp.table1.rows[r][19] == "Evictions Suspended") {
        bottomLine += `${redChevron}`
      } else if (dataProp.table1.rows[r][19] == "Evictions Active") {
        bottomLine += `${greenChevron}`
      }
      const status = document.querySelector('.statuscolor')
      const result = document.querySelector('.timeline')
      status.innerHTML = `${selectCountyTitle}${bottomLine}`
      result.innerHTML =
        `<ol>
        <li class=${stopGoClass(dataProp.table1.rows[r][2])}>${dataProp.table2.rows[v][1]}</li>
        <li class=${stopGoClass(dataProp.table1.rows[r][3])}>${dataProp.table2.rows[v][2]}</li>
        <br>
        <li class="textbetween">3 Days</li>
        <br>
        <li class=${stopGoClass(dataProp.table1.rows[r][4])}>${dataProp.table2.rows[v][4]}</li>
        <li class=${stopGoClass(dataProp.table1.rows[r][5])}>${dataProp.table2.rows[v][5]}</li>
        <li class=${stopGoClass(dataProp.table1.rows[r][6])}>${dataProp.table2.rows[v][6]}</li>
        <br>
        <li class="textbetween">5 Days</li>
        <br>
        <li class=${stopGoClass(dataProp.table1.rows[r][8])}>${dataProp.table2.rows[v][8]}</li>
        <br>
        <li class="textbetween">Cannot Pay</li>
        <br>
        <li class=${stopGoClass(dataProp.table1.rows[r][10])}>${dataProp.table2.rows[v][9]}</li>
        <li class=${stopGoClass(dataProp.table1.rows[r][11])}>${dataProp.table2.rows[v][10]}</li>
        <li class=${stopGoClass(dataProp.table1.rows[r][12])}>${dataProp.table2.rows[v][11]}</li>
        <li class=${stopGoClass(dataProp.table1.rows[r][13])}>${dataProp.table2.rows[v][12]}</li>
        <li class="date">End Date: ${dataProp.table1.rows[r][14]}</li>
        <li class="county-links"><a href="${dataProp.table1.rows[r][17]}">Link to Sources</a></li>
        <li class="county-links"><a href="${dataProp.table1.rows[r][20]}">Clerk Website</a></li>
        <li class="county-links"><a href="${dataProp.table1.rows[r][21]}">Circuit Court Website</a></li>
        <li class="notes">Notes: ${dataProp.table1.rows[r][18]}</li>
      </ol>`
    }
  })
</script>
```

[Check this CodePen here](https://codepen.io/zibobilo/pen/PoZvwLp)
