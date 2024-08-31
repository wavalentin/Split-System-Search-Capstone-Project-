import React from 'react'
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";


//Component to create a list of items depending on the type of item ex. snacks or drinks
function ItemList({items, type}) {
  return (
    <section className='col-md-4'>
      <Card>
        <CardBody>
          <CardTitle>
            Select an item for more info!
          </CardTitle>
          {/* Loops through items array and creates a link for each item using the item's type and id */}
          <ListGroup>
            {items.map(item => (
              <Link to={`/${type}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  )
}


export default ItemList

