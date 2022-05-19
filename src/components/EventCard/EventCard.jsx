import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import matchesService from '../../services/match.service'

const EventCard = () => {

    const [events, setEvents] = useState()


    useEffect(() => {
        matchesService
            .allEvents()
            .then(({ data }) => {
                console.log(data);
                setEvents(data)
            })
    }, [])
    console.log("event", events);
    return (

        <>

            <Link to={`/match/${events[0]?.id}`} className="MatchesLink" >
                <Card className="MatchCardList MatchCard" >
                    <Card.Title className="text-title-matchesList text-title ">{events[0]?.boardgame?.name}</Card.Title>
                    <Card.Body className="MatchesBodyText">
                        <p>{events[0]?.description}</p>
                        <p> {events[0]?.startTime?.slice(0, 10)}</p>
                        <p>{events[0]?.players?.length}</p>
                    </Card.Body>
                    <div className="d-grid gap-2 icono">
                        <div className="card-icon">
                            <svg viewBox="0 0 28 25">
                                <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
                            </svg>
                        </div>
                    </div>
                </Card>
            </Link>

            <Link to={`/match/${events[1]?.id}`} className="MatchesLink" >
                <Card className="MatchCardList MatchCard" >
                    <Card.Title className="text-title-matchesList text-title ">{events[1]?.boardgame?.name}</Card.Title>
                    <Card.Body className="MatchesBodyText">
                        <p>{events[1]?.description}</p>
                        <p> {events[1]?.startTime?.slice(0, 10)}</p>
                        <p>{events[1]?.players?.length}</p>
                    </Card.Body>
                    <div className="d-grid gap-2 icono">
                        <div className="card-icon">
                            <svg viewBox="0 0 28 25">
                                <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
                            </svg>
                        </div>
                    </div>
                </Card>
            </Link>
        </>

    )
}
export default EventCard