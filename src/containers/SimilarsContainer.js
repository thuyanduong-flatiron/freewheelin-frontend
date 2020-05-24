import React from 'react'
import SimilarCard from '../components/SimilarCard'
import { Button } from 'semantic-ui-react'

class SimilarsContainer extends React.Component {

    render() {
        //maybe think of better organization

        const { selectedProblem, name, similars, onClickAdd, onClickSwitch } = this.props

        let placeholder = 
        <div>
            <center>
                <Button size='mini' inverted color='blue' content='유사문항'/>
                버튼을 누르면
            </center>
            <center>
                해당 문제의 유사 문항을 볼 수 있습니다.
            </center>
        </div>
    
        return (
            <div>
                <center><strong>문항 교체/추가</strong></center>
                {selectedProblem ? (
                    <div>
                        <p>{name}</p>
                        {similars.map(s => <SimilarCard key={s.id} similar={s} onClickAdd={onClickAdd} onClickSwitch={onClickSwitch} />)}
                    </div>
                    ) : (
                        placeholder
                    )
                }
            </div>
        )
    }
}

export default SimilarsContainer