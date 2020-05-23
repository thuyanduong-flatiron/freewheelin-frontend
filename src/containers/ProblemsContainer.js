import React from 'react'
import ProblemCard from '../components/ProblemCard'

class ProblemsContainer extends React.Component {

    render() {
        return (
            <div>
                ProblemsContainer
                {this.props.problems.map(p => <ProblemCard problem={p} />)}
            </div>
        )
    }
}

export default ProblemsContainer