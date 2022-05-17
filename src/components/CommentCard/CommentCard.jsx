import { useEffect, useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import commentService from "../../services/comment.service";


function CommentCard() {

    const [comments, setComments] = useState([]);

    const { id } = useParams()

    useEffect(() => {

        commentService
            .getCommentsBoardgame(id)
            .then(({data}) => {
                setComments(data)
            })
            .catch(err => console.log(err))
    }, [comments])


    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col md={5}>
                        {comments?.map((eachComment) => {
                            return (
                                <>
                                    <Card key={eachComment.id}>
                                        <Card.Body>
                                            <p className="commentOwner">
                                                {eachComment.owner.username}
                                            </p>

                                            <hr></hr>

                                            <p className="commentContent">
                                                {eachComment.content}
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </>
                            );
                        })}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CommentCard