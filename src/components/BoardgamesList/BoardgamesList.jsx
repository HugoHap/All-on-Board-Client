import { Row, Col } from "react-bootstrap"
import BoardgameCard from "../BoardgameCard/BoardgameCard"

const BoardgamesList = ({ boardgames }) => {
console.log(boardgames);
    return (
        <>
            <Row>
                {
                    boardgames?.map(game => {
                        return (
                            <Col md={{ span: 4 }} key={game._id}>
                                <BoardgameCard {...game} />
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}

export default BoardgamesList