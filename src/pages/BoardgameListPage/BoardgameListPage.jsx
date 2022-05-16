import { useState, useEffect } from "react"
import boardgameService from "../../services/boardgame.service.js"
import { Container } from "react-bootstrap";
import BoardgamesList from "../../components/BoardgamesList/BoardgamesList.jsx";
import SearchBar from "../../components/SearchBar/SearchBar"



const BoardgamesListPage = () => {

    const [allBoardgames, setAllBoardgames] = useState([])

    useEffect(() => {
        boardgameService
            .getOriginalBoardgames()
            .then(({ data }) => {
                setAllBoardgames(data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>

            <Container>
                <h1>Boardgames List</h1>
                <hr />
                <SearchBar />
                <BoardgamesList boardgames={allBoardgames} />
            </Container>
        </>
    )
}

export default BoardgamesListPage