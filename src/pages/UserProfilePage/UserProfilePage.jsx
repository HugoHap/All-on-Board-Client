import { useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import { Container, Row } from "react-bootstrap"
import { useEffect } from "react"
import userService from "../../services/user.service"

const UserProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [userDetails, setUserDetails] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    // const [subscriptions, setSubscriptions] = useState([])
    const [myBoardGames, setMyBoardGames] = useState([])

    useEffect(() => {
        if (user) {
            getUserProfile()
            getMyBoardGames()
        }
    }, [user])


    const getUserProfile = () => {

        userService
            .getUserProfile()
            .then(({ data }) => {

                console.log('Esto traigo del back', data)
                getUserProfile(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }

    const getMyBoardGames = () => {
        userService
            .getAllBoardGamesOneUser()
            .then(({ data }) => {
                setMyBoardGames(data)
            })
            .catch(err => console.log(err))
    }

    return (

        <Container>

            <h1>Bienvenid@ {user?.username}</h1>

            {/* <h2>Aquí deberían ir tus rentings</h2>
            <Row>
                < ResultsHouses houses={subscriptions} width={4} />
            </Row> */}

            {/* <h2>Aquí deberían ir los pueblos a los que sigues</h2>
            <Row>
                {isLoaded && < MyFollowedVillages followedVillages={userDetails.followedVillages} />}
            </Row>

            <h2>Aquí deberían ir tus casas favoritas</h2>
            <Row>
                {isLoaded && < ResultsHouses houses={userDetails.favHouses} width={6} />}
            </Row> */}

            <h2>TUS JUEGOS A PRESTAR</h2>
            <Row>
                < ResultsBoardGames BoardGames={myBoardGames} width={3} />
            </Row>

        </Container>
    )
}

export default UserProfilePage