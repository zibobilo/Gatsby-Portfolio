---
template: BlogPost
path: /Geography-Quiz-Game
date: 2021-01-20T15:05:49.332Z
title: Geography Quiz Game
thumbnail: /assets/globe.jpg
---

# Before you play - Why is this game super cool?

- The geographical data is in real time, therefore the most accurate as it is pulled from an official updated Geography API.
- 3 games in one (Capitals, Flags and Population) and more to come! (currencies, countries borders, phone extensions, etc.)
- Each question is pulled randomly among 250 countries, and the correct answer is displayed in a random order among the other options. It's impossible to cheat!
- It's endless, there are an infinite number of questions.
- This game will help you learn your geography quicker. There are built in sounds after each answer which let's you know if the response was correct or not. The colors depicted for the correct or wrong answers fortifies the visual learning process.
- It's easy and there is no wait time = one click per answer.
- Written in **ReactJS** => Lightning fast (have a look at the code below)
- Deployed in Github Pages.
- - -

<iframe height="700" style="width: 100%; background:white" src="https://zibobilo.github.io/geography-quiz-game/"></iframe>

- - -
[Have a look at the Github folder of this project here](https://github.com/zibobilo/geography-quiz-game)

# Here is the core of the ReactJS App
```Javascript
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      allGames: [
        {
          game: "Capitals",
          startQuestion: "What is the capital of",
        },
        {
          game: "Flags",
          startQuestion: "What country does this flag belongs to?",
        },
        {
          game: "Population",
          startQuestion: "What is the population of",
        }
      ]
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag")
      .then(res => res.json())
      .then(
        (result) => {
          result.map(row => {
            row.population = Math.round(row.population / 1000000).toLocaleString('en')
            if (row.capital === "") row.capital = "N/A"
            return ""
          })
          this.setState({ isLoaded: true, data: result })
        },
        (error) => this.setState({ isLoaded: true, error: error })
      )
  }

  render() {
    const {error, isLoaded} = this.state
    if (!isLoaded) {
      return (
        <div className="App">
          <BackgroundEarth />
          <div className="container inner">
            <h1>Loading...</h1>
          </div>
        </div>
      )
    } else if (isLoaded) {
      if (error) {
        return (
          <div className="App">
            <BackgroundEarth />
            <div className="container inner">
              <h1>Oups... Something went wrong, <br /><br />try to refresh <br />or <br />try again later.</h1>
              <p>More info about the error: {error}</p>
            </div>
          </div>
        )
      } else {
        return (
          <div className="App">
            <GameOn props={this.state}/>
          </div>
        )
      }
    }
  }
}

class GameOn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.props.data,
      allGames: this.props.props.allGames,
      home: true,
      inGame: false,
      gamePlaying: null,
      qN: 0,
      numberOfCorrectAnswers: 0,
      correctAnswer: "",
      correctTitle: "",
      possibleAnswers: [],
      correctFlagURL: null,
      goodAnswer: true
    }
  }

  playing(game) {
    this.setState({ gamePlaying: game }, this.nextQuestion)
    this.setState({ home: false, inGame: true })
  }

  generateI() {
    return Math.floor(Math.random() * this.state.data.length)
  }

  nextQuestion() {
    const { qN, gamePlaying, allGames } = this.state
    this.setState({ qN: qN + 1 })
    switch (gamePlaying) {
      case allGames[0].game:
        this.buildingQuizz("name", "capital")
        break;
      case allGames[1].game:
        this.buildingQuizz("flag", "name")
        break;
      case allGames[2].game:
        this.buildingQuizz("name", "population")
        break;
      default:
    }
  }

  buildingQuizz(question, answer) {
    const { data } = this.state
    let rightAnswerIdx = this.generateI()
    let possibleAnswers = [data[rightAnswerIdx][answer]]
    while (possibleAnswers.length < 4) {
      let test = this.generateI()
      if (!possibleAnswers.includes(data[test][answer])) possibleAnswers.push(data[test][answer]);
    }
    possibleAnswers.sort()
    this.setState({
      correctAnswer: data[rightAnswerIdx][answer],
      correctTitle: data[rightAnswerIdx][question],
      possibleAnswers: possibleAnswers
    })
  }

  evaluate(answer) {
    const { qN, correctAnswer, correctTitle, gamePlaying } = this.state
    answer === this.state.correctAnswer ? this.correctAnswer() : this.wrongAnswer()
    gamePlaying === "Flags" ?
      this.setState({
        correctResponse: `PREVIOUS QUESTION : ${correctAnswer}`,
        correctFlagURL: correctTitle
      })
    : this.setState({ correctResponse: `PREVIOUS QUESTION : ${correctTitle} => ${correctAnswer}` })

    !(qN % 10) && qN !== 0 ? this.setState({ inGame: false }) : this.nextQuestion()
  }

  correctAnswer() {
    this.setState({ numberOfCorrectAnswers: this.state.numberOfCorrectAnswers + 1, goodAnswer: true })
    new Audio("https://www.raphburk.com/wp-content/uploads/2020/03/message.wav").play()
  }

  wrongAnswer() {
    this.setState({ goodAnswer: false })
    new Audio("https://www.raphburk.com/wp-content/uploads/2020/03/thunder.wav").play()
  }

  render() {
    const { qN, home, inGame, allGames, gamePlaying, correctTitle, goodAnswer, correctResponse,
      possibleAnswers, numberOfCorrectAnswers, correctFlagURL } = this.state
    if (home) {
      return (
        <>
          <BackgroundEarth />
          <div className="container inner">
            <h1>WELCOME <br />TO THE ULTIMATE<br />GEOGRAPHY QUIZ</h1>
            <h2>What quiz would you like to play?</h2>
            {allGames.map(el => <button key={el.game} onClick={() => this.playing(el.game)}>{el.game}</button>)}
          </div>
        </>
      )
    } else if (inGame) {
      return (
        <div className="container inner">
          <h1>{gamePlaying}: Question {qN}</h1>
          <h2>
            {gamePlaying === allGames[0].game && <>{allGames[0].startQuestion}<b> {correctTitle}?</b></>}
            {gamePlaying === allGames[1].game && <>{allGames[1].startQuestion}</>}
            {gamePlaying === allGames[2].game && <>{allGames[2].startQuestion}<b> {correctTitle}?</b><br />Rounded in Millions</>}
          </h2>
          { gamePlaying === allGames[1].game && <img alt="Quizz flag" src={correctTitle}></img>}
          <div id="buttons">{possibleAnswers.map((el, i) => <button key={el} onClick={() => this.evaluate(el, i)}>{el}</button>)}</div>
          {(qN - 1) % 10 !== 0 &&
            <>
              <div className={goodAnswer ? "correct" : "wrong"}>{correctResponse}</div>
              {gamePlaying === allGames[1].game && <><img alt="Quizz flag" style={{ width: "80px" }} src={correctFlagURL}></img></>}
              <div>Your score is {numberOfCorrectAnswers}/{qN - 1}</div>
            </>}
        </div>
      )
    } else if (!inGame) {
      new Audio("https://www.raphburk.com/wp-content/uploads/2020/03/checkpoint.wav").play()
      return (
        <div className="container inner">
          <h1>Bravo!<br />
          You finished the test!
        </h1>
          <h2>Your Score is <b>{numberOfCorrectAnswers}/{qN}</b></h2>
          <h3>Are you ready for 10 more questions?</h3>
          <div id="buttons">
            {allGames.map(el => <button key={el.game} onClick={() => this.playing(el.game)}>{el.game}</button>)}
          </div>
          <div className={goodAnswer ? "correct" : "wrong"}>{correctResponse}</div>
        </div>
      )
    }
  }
}

```