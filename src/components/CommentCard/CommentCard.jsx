import { useEffect, useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import commentService from "../../services/comment.service";


function CommentCard({ commentsData}) {


    // const [comments, setComments] = useState([]);
    const [commentStatus, setCommentStatus]= useState(true)

    const { id } = useParams()

    // useEffect(() => {
    //     commentService
    //         .getCommentsBoardgame(id)
    //         .then(({data}) => {
    //             setComments(data)
    //             setCommentStatus(false)
    //         })
    //         .catch(err => console.log(err))
    // }, [commentStatus]) // AQUI HACE 874723498273498279438 LLAMADAS A LA API



    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col md={5}>
                        {commentsData?.map((eachComment) => {
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