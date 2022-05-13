import './RentCard.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RentCard = ({ boardgameDetails }) => {

    return (
        <>
            {
                boardgameDetails?.map((elm) => {
                    return <div key={elm._id}>
                        <Card className='rentCard'>
                            <Link to={`/boardgames/${elm._id}/booking`}>
                                <div className='myContainer'>
                                    <img className='overlayImg' src={elm.gameImg}></img>
                                </div>
                                <Card.Body>
                                    <Card.Title>{elm.age}</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>

                    </div>
                })
            }
        </>
    )
}

export default RentCard