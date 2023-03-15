import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { useCreatePostMutation, useUpdatePostMutation } from '../services/api';
import Form from 'react-bootstrap/Form';

export default function CreatePost(props) {
    const { selected, reset } = props;
    const [createPost, { isLoading }] = useCreatePostMutation();
    const [updatePost, { isUpdating }] = useUpdatePostMutation();

    function submitPost(event) {
        event.preventDefault();
        var title = event.target['title'].value;
        var author = event.target['author'].value;
        createPost({ title, author });
        event.target.reset();
    }

    function editPost(event) {
        event.preventDefault();
        var title = event.target['title'].value;
        var author = event.target['author'].value;
        updatePost({ id: selected.id, title, author });
        reset();
        event.target.reset();
    }

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Form onSubmit={(e) => selected ? editPost(e) : submitPost(e)}>
                        <h3>{selected ? 'Edit ' : 'New '}  Post {selected ? selected.id : ''}</h3>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="title" placeholder="Enter title" defaultValue={selected ? selected.title : ""} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="author">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="author" placeholder="Enter author" defaultValue={selected ? selected.author : ""} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <div>
                            <input type='submit' value='Save' disabled={isLoading || isUpdating} />
                            {isLoading && ' Loading...'}
                        </div>
                    </Form>
                    <button onClick={() => reset()}>reset</button>
                </Col>
            </Row>
        </Container>
    );
}