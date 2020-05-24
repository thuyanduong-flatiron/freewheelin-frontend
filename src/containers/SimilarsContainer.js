import React from 'react'
import SimilarCard from '../components/SimilarCard'
import { Card, Button } from 'semantic-ui-react'

class SimilarsContainer extends React.Component {
    render() {
        const { selectedProblem, name, similars, onClickAdd, onClickSwitch } = this.props
    
        return (
            <div>
                <Card fluid header='문항 교체/추가'/>
                {selectedProblem && similars.length > 0 ? (
                        <Card.Group className='cards-container'>
                            <Card fluid header={name}/>
                            {similars.map((s, i) => <SimilarCard key={s.id} number={i+1} similar={s} onClickAdd={onClickAdd} onClickSwitch={onClickSwitch} />)}
                        </Card.Group>
                    ) : (
                        <Card.Group className='place-holder'>
                                <p>
                                    <Button id='no-toggle' content='유사문항'/>
                                    버튼을 누르면 
                                </p>
                                    해당 문제의 유사 문항을 볼 수 있습니다.
                        </Card.Group>
                    )
                }
            </div>
        )
    }
}

export default SimilarsContainer