import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import boardgameService from '../../services/boardgame.service'

function LikeButton() {

    const [likeValue, setLikeValue] = useState(0)

    const { id } = useParams()

    useEffect(() => {
        likeBoardgame()
    }, [])

    const likeBoardgame = () => {

        boardgameService
            .likeBoardgame(id)
            .then(({ data }) => {
                console.log(data)
                // setLikeValue
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="LikeButton">
                <button onClick={() => setLikeValue(prevLikeVal => ++prevLikeVal)}> {likeValue} LIKE </button>
            </div>
        </div>
    );
}

export default LikeButton;