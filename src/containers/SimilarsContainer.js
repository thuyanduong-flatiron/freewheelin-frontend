import React from 'react'
import SimilarCard from '../components/SimilarCard'
import { Card, Button } from 'semantic-ui-react'

class SimilarsContainer extends React.Component {
    render() {
        const { selectedProblem, name, similars, onClickAdd, onClickSwitch } = this.props

        let placeholder = 
        <div>
            <center>
                <Button id='no-toggle' content='유사문항'/>
                버튼을 누르면
            </center>
            <center>
                해당 문제의 유사 문항을 볼 수 있습니다.
            </center>
        </div>
    
        return (
            <div>
                <Card fluid header='문항 교체/추가'/>
                {selectedProblem ? (
                        <Card.Group className='cards-container'>
                            <Card fluid header={name}/>
                            {similars.map((s, i) => <SimilarCard key={s.id} number={i+1} similar={s} onClickAdd={onClickAdd} onClickSwitch={onClickSwitch} />)}
                        </Card.Group>
                    ) : (
                        placeholder
                    )
                }
            </div>
        )
    }
}

export default SimilarsContainer