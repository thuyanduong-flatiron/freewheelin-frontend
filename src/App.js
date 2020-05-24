import React from 'react';
import ProblemsContainer from './containers/ProblemsContainer';
import SimilarsContainer from './containers/SimilarsContainer';
import { Grid, Segment } from 'semantic-ui-react'
// import './App.css';

class App extends React.Component {
  //possible rename functions w/o 'Click'

  state = {
    problems:[],
    similars: [],
    selectedProblem: null,
    name: ""
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
    let id = problem.id  
    let name = this.state.problems.find(p => p.id === problem.id).unitName

    if (this.state.selectedProblem === id) {
      id = null
    } 

    this.setState({
      selectedProblem: id,
      name: name
    })
  }

  //[삭제]를 누른 경우
  onClickDelete = (problem) => {
    //deleting from front-end only
    
    let filteredArray = this.state.problems.filter(p => p.id !== problem.id) 

    if (this.state.selectedProblem === problem.id) {
      this.setState({
        problems: filteredArray,
        selectedProblem: null
      })
    } else {
      this.setState({
        problems: filteredArray
      })
    }

    //deleting from back-end

  }

  onClickAdd = (similar) => {
    let problem = this.state.problems.find(p => p.id === this.state.selectedProblem)
    let index = this.state.problems.indexOf(problem)
    let copy = [...this.state.problems]
    copy.splice(index+1, 0, similar)

    this.setState({
      problems: copy
    })
  }

  render() {
    return (
      <Grid stackable columns={2}>
        <Grid.Column>
          <Segment>
            <ProblemsContainer problems={this.state.problems} selectedProblem={this.state.selectedProblem} onClickShow={this.onClickShow} onClickDelete={this.onClickDelete} />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <SimilarsContainer selectedProblem={this.state.selectedProblem} name={this.state.name} similars={this.state.similars} onClickAdd={this.onClickAdd} />
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default App;
