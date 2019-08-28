import React from 'react';
import { Button ,Container,Row,Col,Breadcrumb,Navbar,Carousel,Jumbotron,ListGroup,Form,Dropdown} from "react-bootstrap";

function App() {


  return (

    <div >

    <br />
    <Navbar bg="dark" variant="dark">
      <Dropdown>
        <Dropdown.Toggle varian="succes">pilih bahasa</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/">indonesia</Dropdown.Item>
          <Dropdown.Item href="/">malasya</Dropdown.Item>
          <Dropdown.Item href="/">india</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />

      </Navbar.Brand>
    </Navbar>
    <Container>
      <Row>
        <Col>

        </Col>
        <Col></Col>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item  href="/">home</Breadcrumb.Item>
            <Breadcrumb.Item  href="/">berita</Breadcrumb.Item>
            <Breadcrumb.Item  href="/" active>bola</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
              className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" alt="travel 1"
              />

              <Carousel.Caption>
              <h3>inggris mau jadi team terbaik di dunia</h3>

              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
              className="d-block w-100 " src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100" alt="travel 2"
              />

              <Carousel.Caption>
                <h3>inggris mau jadi team terbaik di dunia</h3>

              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
              className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600 " alt="travel 3"
              />

              <Carousel.Caption>
                <h3>inggris mau jadi team terbaik di dunia</h3>

              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </Col>

      </Row>
    </Container>
      <br />
    <Container>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item active>liga indonesia 1</ListGroup.Item>
            <ListGroup.Item> liga primer inggris  </ListGroup.Item>
            <ListGroup.Item> divisi primera </ListGroup.Item>
            <ListGroup.Item> seria A  </ListGroup.Item>
            <ListGroup.Item> Liga 1  </ListGroup.Item>
              <ListGroup.Item> seria A  </ListGroup.Item>
          </ListGroup>

        </Col>
        <Col>
        <Jumbotron fluid>
          <h1>DIVISI PRIMERA</h1>
          <p>minta untuk catulanya , gerand piqua minta dihormati</p>
          <Button variant="primary">read more</Button>
        </Jumbotron>

        </Col>
        <Col>
        <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Masukan email" />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="term & conditions" />
            </Form.Group>
            <Button variant="primary">  Submit    </Button>


            </Form>
        </Col>
      </Row>
    </Container>


    </div>
  );
}

export default App;
