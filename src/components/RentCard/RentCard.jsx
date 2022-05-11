import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './RentCard.css'


const HouseCard = ({ name, images, _id, village }) => {

    return (
        <Card className='houseCard'>
            <Link to={`/casa/${_id}`}>
                <div className='myContainer'>
                    {images[0] ? <Card.Img className="houseCardImg" variant="top" src={images[0]} /> : <Card.Img className="houseCardImg" variant="top" src={DefaultImg} />}
                    <img className='overlayImg' src={Arrow}></img>
                </div>

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{village.name} - {village.province}</Card.Text>
                </Card.Body>
            </Link>
        </Card>
    )
}

export default HouseCard