import React from 'react'
import { Grid, Button, Card, Image } from 'semantic-ui-react'

const ProblemCard = (props) => {
    const { number, problem, selectedProblem, onClickShow, onClickDelete } = props
    const { id, problemType, unitName, problemURL } = problem

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
                            <Button id='no-toggle' floated='right' onClick={() => onClickDelete(problem)} >
                                삭제
                            </Button>
                            <Button id={selectedProblem === id ? 'toggle-on' : 'no-toggle'} floated='right' onClick={() => onClickShow(problem)} >
                                유사문항
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

export default ProblemCard
