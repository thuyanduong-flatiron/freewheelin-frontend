import React from 'react';
import ProblemsContainer from './containers/ProblemsContainer';
import SimilarsContainer from './containers/SimilarsContainer';
import { Grid, Segment } from 'semantic-ui-react'
// import './App.css';

class App extends React.Component {
  state = {
    problems:[],
    similars: [],
    selectedProblem: null 
  }

  componentDidMount = () => {
    //문제
    fetch("http://localhost:3000/data")
    .then(response => response.json())
    .then(problemsArray => this.setState({
      problems: problemsArray
    }))

    //유사유형
    fetch("http://localhost:4000/data")
    .then(response => response.json())
    .then(similarsArray => this.setState({
      similars: similarsArray
    }))
  }

  //유사문항 버튼을 눌렀을 경우
  onClickShow = (event) => {   
    let id = event.target.parentElement.id

    if (this.state.selectedProblem === id) {
      id = null
    } 

    this.setState({
      selectedProblem: id
    })
  }

  render() {
    return (
      <Grid stackable columns={2}>
        <Grid.Column>
          <Segment>
            <ProblemsContainer problems={this.state.problems} selectedProblem={this.state.selectedProblem} onClickShow={this.onClickShow} />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <SimilarsContainer similars={this.state.similars} selectedProblem={this.state.selectedProblem} />
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default App;
