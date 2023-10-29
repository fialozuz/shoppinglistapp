import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/esm/Image';
/* import { useState } from "react";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import ListModalEdit from './ListModalEdit'; */


function ListDetailt() {
/*     const handleClick = () => {
        const [showListModalEdit, setShowListModalEdit] = useState(false);
        // MODAL HERE
        setShowListModalEdit(true);
    } */
    return (
    <div>
        <Card>
        <Card.Header as="h5">Název nákupního seznamu
            <Image src='https://tse1.mm.bing.net/th?q=blue+color' width="25" height="25" roundedCircle   display="block" marginLeft="auto"wmarginRight= "20px "/>
        </Card.Header>
        <Card.Body>
            <>
        {['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint) => (
            <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
            <ListGroup.Item>This ListGroup</ListGroup.Item>
            <ListGroup.Item>renders horizontally</ListGroup.Item>
            <ListGroup.Item>on {breakpoint}</ListGroup.Item>
            <ListGroup.Item>and above!</ListGroup.Item>
            </ListGroup>
        ))}
        </>
        </Card.Body>
        <Card.Footer className="text-muted">
                <Button variant="primary"onClick={/* handleClick */console.log('ahoj')}>Edit</Button>
            </Card.Footer>
        </Card>
        {/* <ListModalEdit refresh={refresh} show={showListModalEdit} setShow={setShowListModalEdit} /* recipe={recipe} *//> */}
    </div>
    );
  }
  
  export default ListDetailt;