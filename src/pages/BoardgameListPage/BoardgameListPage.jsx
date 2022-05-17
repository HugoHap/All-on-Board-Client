import { useState, useEffect } from "react"
import boardgameService from "../../services/boardgame.service.js"
import { Container } from "react-bootstrap";
import BoardgamesList from "../../components/BoardgamesList/BoardgamesList.jsx";
import SearchBar from "../../components/SearchBar/SearchBar"
import './BoardgameListPage.css'


const BoardgamesListPage = () => {

    const [allBoardgames, setAllBoardgames] = useState([])

    useEffect(() => {
        boardgameService
            .getOriginalBoardgames()
            .then(({ data }) => {
                setAllBoardgames(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <Container className="BoardgameListContainer">
                <div clasName="BoardgamesList">
                    <h1 className="BoardgamesListTitle">Boardgames List</h1>
                </div>
                <div><SearchBar /></div>
                <div> <BoardgamesList boardgames={allBoardgames[0]} /></div>
            </Container>
        </>
    )
}

export default BoardgamesListPage