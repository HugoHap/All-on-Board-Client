// import './MyMatchesCard.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyMatchesCard = ({ myMatches }) => {

    return (
        <>
            {
                myMatches?.map((elm) => {
                    return <div key={elm._id}>
                        <Card className='MyMatchesCard'>
                            <Link to={`/match/${elm._id}`}>
                                <Card.Body>
                                    <Card.Title>{elm.description}</Card.Title>
                                    <p>{elm.startTime}</p>
                                </Card.Body>
                            </Link>
                        </Card>

                    </div>
                })
            }
        </>
    )
}

export default MyMatchesCard