import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const SimilarCard = (props) => {
    const { similar, onClickAdd } = props
    const { problemType, unitName, problemURL } = similar

    return (
        <Card.Group>
            <Card fluid>
                <Card.Content>
                    <Card.Description>
                        {problemType} <strong>{unitName}</strong>  
                        <Button floated='right' size='mini' inverted color='blue'>
                            교체
                        </Button>
                        <Button floated='right' size='mini' inverted color='blue' onClick={() => onClickAdd(similar)} >
                            추가
                        </Button>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Image
                    src={problemURL}
                    />
                </Card.Content>
            </Card>
        </Card.Group>
    )
}

export default SimilarCard