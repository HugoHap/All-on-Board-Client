import { useEffect, useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import commentService from "../../services/comment.service";
import "./CommentCard.css"

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
            <Container>
                <div>
                    <h6 className="CommentTitle" >COMMENTS</h6>
                </div>
                <Row>
                    {commentsData?.map((eachComment) => {
                        return (
                            <Col lg={6}>
                                <Card className="commentCard" key={eachComment.id}>
                                    <Card.Body>
                                        <div className="commentTop" >
                                            <h6 className="commentOwner">
                                                {eachComment.owner.username}:
                                            </h6>

                                            <p className="commentDate">
                                                {eachComment.createdAt.slice(0, 10)}
                                            </p>
                                        </div>

                                        <div>
                                            <hr className="hrComments"></hr>

                                            <p className="commentContent">
                                                "<i>{eachComment.content}</i>"
                                            </p>
                                        </div>

                                    </Card.Body>
                                </Card>

                            </Col>
                        );
                    })}

                </Row>
            </Container>
        </>
    );
}

export default CommentCard