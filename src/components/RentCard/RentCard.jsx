import './RentCard.css'
import { Card, Nav, Modal } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import BookingForm from '../BookingForm/BookingForm'

const RentCard = ({ boardgameDetails }) => {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

    const [showBookingModal, setShowBookingModal] = useState(false)
    const BookingModalClose = () => setShowBookingModal(false)
    const BookingModalOpen = () => setShowBookingModal(true)

    const fireFinalActions = () => {
        BookingModalClose()
    }

    return (
        <>
            {
                boardgameDetails?.map((elm) => {
                    return <div key={elm._id}>
                        <Card className='rentCard'>
                            <Nav.Link className='elm' to={`/boardgames/${elm._id}/booking`} onClick={BookingModalOpen}>
                                <div className='myContainer'>
                                    <img className='overlayImg' src={elm.gameImg}></img>
                                </div>
                                <Card.Body>
                                    <Card.Title>{elm.age}</Card.Title>
                                </Card.Body>
                            </Nav.Link>
                        </Card>

                    </div>
                })
            }

            < Modal className="ModalBooking" show={showBookingModal} onHide={BookingModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title className="Booking">MAKE YOUR BOOKING</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BookingForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>

        </>
    )
}

export default RentCard