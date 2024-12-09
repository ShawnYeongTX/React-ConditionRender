import { Button, Container, Form } from "react-bootstrap"
import { useState, useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"
import { useNavigate } from "react-router-dom"


export default function Todo() {
    const [title, setTitle] = useState("")
    const [description, setDescriptions] = useState("")
    const [completed, setCompleted] = useState(false)
    const setTodos = useContext(TodoContext).setTodos
    const todos = useContext(TodoContext).todos
    const navigate = useNavigate()
    return (
        <Container>
            <h1>Add Todo</h1>
        <Form onSubmit={event => {
            event.preventDefault();
            setTodos([...todos, {id: Date.now(), title, description, completed}]);
            navigate('/');
        }}
        >
                <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type ="text" 
                placeholder="Add a title here">
                </Form.Control>
            </Form.Group>
        <Form.Group>
            <Form.Label className="mb-3">Descriptions</Form.Label>
            <Form.Control 
            value = {description}
            onChange={(e) => setDescriptions(e.target.value)}
            as="textarea"
            rows={4}
            placeholder={`E.g\n 1. Create amazing project\n 2. Apply to Google/Netlfix\n 3. Crush interview`}
            required>
            </Form.Control>
        </Form.Group>

        <Form.Check
        type="checkbox"
        id="completed"
        label="Mark as completed"
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
        className="mb-3"
        >
        </Form.Check>

        <Button variant="primary" type="submit">Submit Task</Button>
        </Form>
        </Container>


    )
}