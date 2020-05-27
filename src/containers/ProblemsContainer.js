import React from 'react'
import ProblemCard from '../components/ProblemCard'
import { Card } from 'semantic-ui-react'

class ProblemsContainer extends React.Component {
    render() {
        const { problems, selectedProblem, onClickShow, onClickDelete } = this.props

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
}

export default ProblemsContainer