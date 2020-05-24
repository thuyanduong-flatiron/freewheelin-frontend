import React from 'react'
import { Grid, Button, Card, Image } from 'semantic-ui-react'

const SimilarCard = (props) => {
    const { number, similar, onClickAdd, onClickSwitch } = props
    const { problemType, unitName, problemURL } = similar

    return (
        <Card fluid>
            <Card.Content>
                <Card.Description>
                    <Grid>
                        <Grid.Column width={2} textAlign='center'>
                            <p className='problem-type'>{problemType}</p> 
                        </Grid.Column>  
                        <Grid.Column width={8}>
                            <p className='unit-name'>{unitName}</p>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Button id='no-toggle' floated='right' onClick={() => onClickSwitch(similar)} >
                                교체
                            </Button>
                            <Button id='no-toggle' floated='right' onClick={() => onClickAdd(similar)} >
                                추가 
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Grid>
                    <Grid.Column width={2} textAlign='center'>
                        <p className='number'>{number}</p>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Image
                        src={problemURL}
                        />
                    </Grid.Column>
                </Grid>
            </Card.Content>
        </Card>
    )
}

export default SimilarCard