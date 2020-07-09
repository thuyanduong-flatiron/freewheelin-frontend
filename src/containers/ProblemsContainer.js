import React from 'react'
import ProblemCard from '../components/ProblemCard'
import { Card } from 'semantic-ui-react'

const ProblemsContainer = (props) => {
  const { problems, selectedProblem, onClickShow, onClickDelete } = props
  return (
      <div>
          <Card fluid header='Problems' />
          <Card.Group className='cards-container'>
                  {problems.map((p, i) =>
                      <ProblemCard key={p.id} number={i+1} problem={p} selectedProblem={selectedProblem} onClickShow={onClickShow} onClickDelete={onClickDelete} />)}
          </Card.Group>
      </div>
  )
}

export default ProblemsContainer
