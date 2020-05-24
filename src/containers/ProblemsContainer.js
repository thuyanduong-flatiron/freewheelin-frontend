import React from 'react'
import ProblemCard from '../components/ProblemCard'

class ProblemsContainer extends React.Component {

    render() {
        //double check indexing
        
        const { problems, selectedProblem, onClickShow, onClickDelete } = this.props

        return (
            <div>
                <strong>학습지 상세 편집</strong>
                {problems.map((p, i) => 
                    <ProblemCard key={p.id} number={i+1} problem={p} selectedProblem={selectedProblem} onClickShow={onClickShow} onClickDelete={onClickDelete} />)}
            </div>
        )
    }
}

export default ProblemsContainer