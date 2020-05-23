import React from 'react'
import SimilarCard from '../components/SimilarCard'

class SimilarsContainer extends React.Component {

    render() {
        return (
            <div>
                SimilarsContainer
                {this.props.similars.map(s => <SimilarCard similar={s} />)}
            </div>
        )
    }
}

export default SimilarsContainer