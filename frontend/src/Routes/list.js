//import ListDetail from "../Components/ListDetail";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/esm/Image';
import Container from 'react-bootstrap/esm/Container';

function List() {
    return (
      <div>
        <Container>
          <Card>
            <Card.Header as="h5">Název nákupního seznamu
              <Image src='https://tse1.mm.bing.net/th?q=blue+color' width="25" height="25" roundedCircle   display="block" marginLeft="auto"wmarginRight= "20px "/>
            </Card.Header>
            <Card.Body>
              {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint) => (
                  <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
                  <ListGroup.Item><Button>checkbox</Button></ListGroup.Item>
                  <ListGroup.Item>on {breakpoint}</ListGroup.Item>
                  </ListGroup>
              ))}
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button variant="primary"onClick={/* handleClick */console.log('ahoj')}>Edit</Button>
            </Card.Footer>
          </Card>
        </Container>
      </div>
    );
  }
  
  export default List;