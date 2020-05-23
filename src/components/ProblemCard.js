import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const ProblemCard = (props) => {
    return (
        <Card.Group>
            <Card fluid>
                <Card.Content>
                    <Card.Description>
                        {props.problem.problemType} <strong>{props.problem.unitName}</strong>  
                        <Button floated='right' size='mini' basic color='green'>
                            유사문항
                        </Button>
                        <Button floated='right' size='mini' basic color='red'>
                            삭제
                        </Button>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Image
                    src={props.problem.problemURL}
                    />
                </Card.Content>
            </Card>
        </Card.Group>
    )
}

export default ProblemCard