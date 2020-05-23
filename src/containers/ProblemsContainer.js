import React from 'react'
import ProblemCard from '../components/ProblemCard'

class ProblemsContainer extends React.Component {

    render() {
        return (
            <div>
                <strong>학습지 상세 편집</strong>
                {this.props.problems.map((p, i) => <ProblemCard key={p.id} number={i+1} problem={p} selectedProblem={this.props.selectedProblem} onClickShow={this.props.onClickShow} />)}
            </div>
        )
    }
}

export default ProblemsContainer