import './MatchCard.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MatchCard = ({ startTime, boardGame, _id }) => {

    return (
        <Link to={`/match/${_id}`} className="MatchesLink" >
            < Card className="MatchCardList MatchCard" >
                {/* <Card.Img className="imageMatchesList" variant="top" src={boardGame.gameImg} /> */}
                <Card.Title className="text-title-matchesList text-title ">{boardGame.name}</Card.Title>
                <Card.Body className="MatchesBodyText">
                    <p> {startTime.slice(0, 10)}</p>
                </Card.Body>
                <div className="d-grid gap-2 icono">
                    <div class="card-icon">
                        <svg viewBox="0 0 28 25">
                            <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
                        </svg>
                    </div>
                </div>
            </Card >
        </Link >
    )
}
export default MatchCard


//     < div class="card" >
// <div class="card-img"></div>
//   <div class="card-info">
//     <div class="card-text">
//       <p class="text-title">This is a title</p>
//       <p class="text-subtitle">This is a subtitle</p>
//     </div>
//     <div class="card-icon">
//       <svg viewBox="0 0 28 25">
//         <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
//       </svg>
//     </div>
//   </div>
// </div >