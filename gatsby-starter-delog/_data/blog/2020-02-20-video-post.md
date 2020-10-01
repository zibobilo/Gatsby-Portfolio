---
template: BlogPost
path: /video-post
date: 2020-02-20T15:05:49.332Z
title: Geography Quiz Game
thumbnail: /assets/globe.jpg
---

# Before you play - Why is this game super cool?

- The Geography data is real time data, therefore the most accurate as this is pulled from an official updated Geography API.
- 3 Games in one (capitals, Flags and Population) and more to come! (currencies, countries borders, phone extensions, etc.)
- Each question is pulled randomly among 250 countries and the correct answer is always displayed in a random order among the other wrong answers it's impossible to cheat!
- It's endless, there are an infinity of questions!
- This game will help you know your geography quickly, the sounds after each answer let's you know quickly if the response was correct or not. The colors and the previous correct answer fortifies the learning process.
- It's easy and there is no wait time / time wasted => one click per answer.
- Written in Vanilla JS => Lightning fast (have a look at the code below)
- - -

<iframe height="800" style="width: 100%;" scrolling="no" title="Geography game" src="https://codepen.io/zibobilo/embed/WNvyaNY?height=300&theme-id=39046&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/zibobilo/pen/WNvyaNY'>Geography game</a> by zibobilo
  (<a href='https://codepen.io/zibobilo'>@zibobilo</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

- - - 

```HTML
<head>
  <title>The Geography Game</title>
  <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet">
</head>
<body>
  <div id="box">
    <h1>WELCOME TO THE GEOGRAPHY QUIZ!</h1>
    <h2>What quiz would you like to play?</h2>
    <button onclick="capitals()"> Capitals </button>
    <button onclick="flags()"> Flags </button>
    <button onclick="populationNumber()"> Population </button>
  </div>
  <div id="previousAnswer">
  </div>
</body>
<style>
body {
  width: auto;
  height: fit-content;
  margin: 100px auto;
  text-align: center;
  font-size: 20px;
  font-family: 'Dosis', cursive; 
}

img {
  width : 300px;
  border : 2px solid black;
}

.mini {
  width : 100px;
  border : 1px solid black;
}
#questionNumber {
  font-family: inherit;
  margin : 10px;
  text-align: center;
}

#question {
  font-family: inherit;
  margin : 10px;
  text-align: center;
}

#previousAnswer {
  width: auto;
  height: fit-content;
  margin: 100px auto;
  text-align: center;
  font-size: 20px;
  font-family: inherit; 
}

button {
  background-color: #e7e7e7; 
  color: black;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.correct {
  border : 2px solid green;
  border-radius : 30%;
}

.wrong {
  border : 2px solid red;
  border-radius : 30%;
}
</style>
<script>
let dataBase = [], QN = 0, correctAnswers = 0, t = 0, limit = 4;
let i, cities, correct, flag, countries, population;
let box = document.getElementById("box")
let prev = document.getElementById("previousAnswer")

fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag")
  .then(handleErrors)
  .then(data => data.json())
  .then(result => { dataBase = result })
  .catch((error) => {
    prev.innerHTML = error + " <br> Please try again later"
    console.log(error)
});

function handleErrors(response) {
  // console.log(response)
    if (!response.ok) {
      console.log(response.statusText)
        throw Error(response.statusText);
    }
    return response;
}

function rmv() {
  box.innerHTML = ""
}

function correctAudio() {
  new Audio("https://www.raphburk.com/wp-content/uploads/2020/03/message.wav").play()
}

function wrongAudio() {
  new Audio("https://www.raphburk.com/wp-content/uploads/2020/03/thunder.wav").play()
}

function finishAudio () {
  new Audio("https://www.raphburk.com/wp-content/uploads/2020/03/checkpoint.wav").play()
}

function capitals() {
  rmv()
  QN++
  i = Math.floor(Math.random() * dataBase.length)
  if (dataBase[i].capital === "") {
    cities = ["N/A"]
    correct = "N/A"
  } else {
    cities = [dataBase[i].capital]
    correct = dataBase[i].capital
  }
  

  while (cities.length < limit) {
    let choice = dataBase[Math.floor(Math.random() * dataBase.length)].capital
    if (!cities.includes(choice) || !cities.includes("N/A")) { 
      if(choice === "") {
        cities.push("N/A")
      } else {
        cities.push(choice)
      }
    }
  }
  
  cities.sort()
  
  box.innerHTML += `
    <h1>Question number: ${QN}</h1>
    <h2>What is the capital of <b>${dataBase[i].name}?</b></h2>
    <div id="buttons"></div>`

  cities.map(city => {
    document.getElementById("buttons").innerHTML += `
      <button onclick="testcapital(\`${city}\`)">${city}</button>` 
  })
}

function testcapital (el) {
  rmv()
  if (el == correct){
    correctAudio()
    prev.innerHTML = `<h2 class="correct"> PREVIOUS QUESTION : <br>
                      YES! the Capital of <b>${dataBase[i].name}</b> is <b>${correct}</b>!</h2>`
    correctAnswers ++
    if(QN % 10 != 0){ capitals() } 
    else { finish() }
  } else {
    wrongAudio()
    prev.innerHTML = `<h2 class ="wrong"> PREVIOUS QUESTION : <br>
                      NO, the Capital of <b>${dataBase[i].name}</b> is <b>${correct}</b></h2>`
    if(QN % 10 != 0){ capitals() } 
    else { finish() }
  }
}

function flags () {
  rmv()
  QN++
  i = Math.floor(Math.random() * dataBase.length)
  countries = [dataBase[i].name]
  correct = dataBase[i].name

  while (countries.length < limit) {
    let choice = dataBase[Math.floor(Math.random() * dataBase.length)].name
    if (!countries.includes(choice)) { countries.push(choice) }
  }
  
  countries.sort()
  
  box.innerHTML += `
    <h1>Question number: ${QN}</h1>
    <h2>What country does this flag belongs to?</h2>
    <img src="${dataBase[i].flag}">
    <div id="buttons"></div>`

  countries.map(country => {
    document.getElementById("buttons").innerHTML += `
      <button onclick="testflag(\`${country}\`)">${country}</button>`
  })
}

function testflag (el) {
  rmv()
  if (el == correct){
    correctAudio()
    prev.innerHTML = `
      <h2 class="correct"> PREVIOUS QUESTION : <br>
      YES! it is the flag of <b>${dataBase[i].name}</b>!</h2>
      <img class="mini" src ="${dataBase[i].flag}"></img>`
    correctAnswers ++
    if(QN % 10 != 0){ flags() } 
    else { finish() }

  } else {
    wrongAudio()
    prev.innerHTML = `
      <h2 class ="wrong"> PREVIOUS QUESTION : <br>
      NO, it was the flag of <b>${dataBase[i].name}</b></h2>
      <img class="mini" src ="${dataBase[i].flag}"></img>`
    if(QN % 10 != 0){ flags() } 
    else { finish() }
  }
}

function populationNumber() {
  rmv()
  QN++
  i = Math.floor(Math.random() * dataBase.length)
  population = [`${Math.round(dataBase[i].population / 1000000).toLocaleString('en')}`]
  correct = `${Math.round(dataBase[i].population / 1000000).toLocaleString('en')}`

  while (true) {
    let idx = Math.floor(Math.random() * dataBase.length)
    let choice = `${Math.round(dataBase[idx].population / 1000000).toLocaleString('en')}`
    if (population.length == limit) { break }
    if (!population.includes(choice)) { population.push(choice) }
  }

  population.sort()
  
  box.innerHTML += `
    <h1>Question number: ${QN}</h1>
    <h2>What is the population of ${dataBase[i].name}?<br>Rounded in millions</h2>
    <div id="buttons"></div>`

  population.map(pop => {
    document.getElementById("buttons").innerHTML += `
    <button onclick="testpopulation(\`${pop}\`)">${pop}</button>` 
  })
}

function testpopulation(el) {
  rmv()
  if (el == correct){
    correctAudio()
    prev.innerHTML = `
      <h2 class="correct"> PREVIOUS QUESTION : <br>
      YES! The population of <b>${dataBase[i].name} is ${dataBase[i].population.toLocaleString('en')}</b>!</h2>`
    correctAnswers ++
    if (QN % 10 != 0) { populationNumber() } 
    else { finish() }

  } else {
    wrongAudio()
    prev.innerHTML = `
      <h2 class ="wrong"> PREVIOUS QUESTION : <br>
      NO, it was the flag of <b>${dataBase[i].name} is ${dataBase[i].population.toLocaleString('en')}</b></h2>`
    if (QN % 10 != 0) { populationNumber() } 
    else { finish() }
  }
}

function finish() {
  finishAudio()
  box.innerHTML += `
    <h1>Bravo!<br>
    You finished the test!</h1>
    <h2>Your Score is <b>${correctAnswers}/${QN}</b></h2>
    <h3>Are you ready for 10 more questions?</h3>
    <button id="capitals" onclick="capitals()">Capitals</button>
    <button id="flags" onclick="flags()">Flags</button>
    <button id="population" onclick="populationNumber()">Population</button>`
  prev.innerHTML = ``

}</script>
```
[Check this Codepen here](https://codepen.io/zibobilo/pen/WNvyaNY)