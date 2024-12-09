import { Container, Badge, Card, Col, Row, Button } from "react-bootstrap"
import { TodoContext } from "../contexts/TodoContext"
import { useContext } from "react"


export default function Home () {
    const {todos} = useContext(TodoContext)
    return (
        <Container>
            <h1 className="my-3">Things to get it done</h1>
            <Row className="g-4">
                <CardGroup todos={todos}  />
            </Row>
        </Container>
    )
}

function CardGroup ({todos}) {

    return todos.map((todo) => {
        const completed = todo.completed;
        const bg = completed? "success" : "danger";
        return (
            <Col md={4} key={todo.id}>
                <Card className="my-3 h-100" >
                    <Card.Body >
                        <Card.Title>{todo.title}</Card.Title>
                        <Card.Text>{todo.description}</Card.Text>
                        <Badge bg={bg}>{!completed && "Not"} Completed</Badge>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
}


