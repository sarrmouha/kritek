import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './App.css';
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';

function App() {
  const [selected, setSelected] = useState(null);

  function reset() {
    setSelected(null);
  }

  return (
    <Container>
      <Row>
        <Posts setSelected={setSelected} />
        <CreatePost selected={selected} reset={reset} />
      </Row>
    </Container>
  );
}

export default App;
