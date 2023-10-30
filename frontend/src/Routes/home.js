import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <div>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Listname</Card.Title>
            <Card.Text>place where list items will be listed</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Home;
/* import ListDetail from "../Components/ListDetail";

function Home() {
  return (
    <div>
      <ListDetail/>
    </div>
  );
}

export default Home; */