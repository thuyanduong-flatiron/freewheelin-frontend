import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

class ProblemCard extends React.Component {
    //maybe change to a functional component

    render () {
        const { number, problem, selectedProblem, onClickShow } = this.props
        const { id, problemType, unitName, problemURL } = problem

        return (
            //maybe move Card.Group to parent
            
            <Card.Group> 
                <Card fluid>
                    <Card.Content>
                        <Card.Description id={id}>
                            {problemType} <strong>{unitName}</strong>  
                            <Button floated='right' size='mini' inverted color='blue'>
                                삭제
                            </Button>
                            <Button floated='right' size='mini' onClick={onClickShow} toggle active={selectedProblem === id.toString()}>
                                유사문항 
                            </Button>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <p>{number}</p>
                        <Image
                        src={problemURL}
                        />
                    </Card.Content>
                </Card>
            </Card.Group>
        )
    }
}

export default ProblemCard
