import { useState } from "react";
import { useGetPostsQuery, useDeletePostMutation, } from "../services/api";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

export default function Posts(props) {
    const { setSelected } = props;
    const [deletePost] = useDeletePostMutation();

    const [page, setPage] = useState(1);
    const {
        data: posts = [],
        isLoading,
        isFetching,
        isError,
        error,
    } = useGetPostsQuery(page);

    if (isLoading || isFetching) {
        return <div>loading...</div>;
    }

    if (isError) {
        console.log({ error });
        return <div>{error.status}</div>;
    }

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>#</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => (
                                <tr>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.author}</td>
                                    <td>
                                        <button onClick={() => setSelected(post)}>edit</button>{' '}
                                    </td>
                                    <td>
                                        <button onClick={() => deletePost(post.id)}>delete</button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col xs={12}>
                    <button
                        disabled={page <= 1}
                        onClick={() => setPage((prev) => prev - 1)}
                    >
                        Prev
                    </button>
                    <button
                        disabled={posts.length < 10}
                        onClick={() => setPage((prev) => prev + 1)}
                    >
                        Next
                    </button>
                </Col>
            </Row>
        </Container>
    );
}