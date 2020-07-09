import React from 'react';
import ProblemsContainer from './containers/ProblemsContainer';
import SimilarsContainer from './containers/SimilarsContainer';
import { Grid, Segment } from 'semantic-ui-react';
import './App.css';

class App extends React.Component {
  state = {
    problems:[],
    similars: [],
    selectedProblem: null // is either an object {} or has a null value
  }

  componentDidMount = () => {
    //문제
    fetch("http://localhost:3000/data")
    .then(response => response.json())
    .then(problemsArray => this.setState({
      problems: problemsArray
    }))

    //유사문제
    fetch("http://localhost:4000/data")
    .then(response => response.json())
    .then(similarsArray => this.setState({
      similars: similarsArray
    }))
  }

  //[유사문항]을 누른 경우
  onClickShow = (problem) => {
    if(this.state.selectedProblem === problem){
      this.setState({selectedProblem: null})
    }else{
      this.setState({selectedProblem: problem
      })
    }
  }

  //[삭제]를 누른 경우
  onClickDelete = (problem) => {
    fetch(`http://localhost:3000/data/${problem.id}`, {
      method: "DELETE"
    })
    .then(() => this.removeProblem(problem))
  }

  removeProblem = (problem) => {
    let filteredArray = this.state.problems.filter(p => p !== problem)

    if (this.state.selectedProblem === problem) {
      this.setState({
        problems: filteredArray,
        selectedProblem: null
      })
    } else {
      this.setState({
        problems: filteredArray
      })
    }
  }

  //[추가]를 누른 경우
  onClickAdd = (similar) => {
    //POSTing in order?
    fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(similar)
    })
    .then(response => response.json())
    .then(similarObj => this.addSimiliar(similarObj))

    fetch(`http://localhost:4000/data/${similar.id}`, {
      method: "DELETE"
    })
    .then(() => {
      this.removeSimilar(similar)
    })
  }

  addSimiliar = (similar) => {
    let index = this.state.problems.indexOf(this.state.selectedProblem)
    let copy = [...this.state.problems]
    copy.splice(index+1, 0, similar)

    this.setState({
      problems: copy
    })

  }

  removeSimilar = (similar) => {
    let filteredArray = this.state.similars.filter(s => s !== similar)

    this.setState({
      similars: filteredArray
    })

    if (this.state.similars.length === 0) {
      this.setState({
        selectedProblem: null
      })
    }
  }

  //[교체]를 누른 경우
  onClickSwitch = (similar) => {
    let problem = this.state.selectedProblem
    fetch(`http://localhost:3000/data/${problem.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(similar)
    })
    .then(response => response.json())
    .then(similarObj => this.switchToSimilar(problem, similarObj))

    fetch(`http://localhost:4000/data/${similar.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(problem)
    })
    .then(response => response.json())
    .then(problemObj => this.switchToProblem(problemObj, similar))
  }

  switchToSimilar = (problem, similar) => {
    let pIndex = this.state.problems.indexOf(problem)
    let problemsCopy = [...this.state.problems]
    problemsCopy.splice(pIndex, 1, similar)

    this.setState({
      problems: problemsCopy,
      selectedProblem: similar
    })
  }

  switchToProblem = (problem, similar) => {
    let sIndex = this.state.similars.indexOf(similar)
    let similarsCopy = [...this.state.similars]
    similarsCopy.splice(sIndex, 1, problem)

    this.setState({
      similars: similarsCopy
    })
  }

  render() {
    return (
      <div className="questions-container">
        <Grid stackable columns={2}>
          <Grid.Column>
            <Segment>
              <ProblemsContainer problems={this.state.problems} selectedProblem={this.state.selectedProblem} onClickShow={this.onClickShow} onClickDelete={this.onClickDelete} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <SimilarsContainer selectedProblem={this.state.selectedProblem} similars={this.state.similars} onClickAdd={this.onClickAdd} onClickSwitch={this.onClickSwitch} />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default App;
