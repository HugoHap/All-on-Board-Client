import { Row, Col } from "react-bootstrap"
import MatchCard from '../MatchCard/MatchCard'

const MatchesList = ({matches}) => {

    return (
        
        <Row>
            {
                matches.map( match => {
                    console.log(match)
                    return (
                        <Col md={{span:4}} key={match._id}>
                            <MatchCard {...match} />
                        </Col>
                    )
                })
            }
        </Row>
        
        
    )
}

export default MatchesList