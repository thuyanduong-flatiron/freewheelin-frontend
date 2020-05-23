import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const SimilarCard = (props) => {
    return (
        <Card.Group>
            <Card fluid>
                <Card.Content>
                    <Card.Description>
                        {props.similar.problemType} <strong>{props.similar.unitName}</strong>  
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
                    src={props.similar.problemURL}
                    />
                </Card.Content>
            </Card>
        </Card.Group>
    )
}

export default SimilarCard