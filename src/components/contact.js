import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                placeholder="Enter your contact number"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Enter your message here..."
                required
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.519320856344!2d77.33177727538148!3d28.644165175658426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfad7bec2fc3b%3A0xba06998c33cc9c!2sExpress%20Green%20Plaza!5e0!3m2!1sen!2sin!4v1731755225305!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              mallika.eisystems@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              7986184772
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Delhi, NCR
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
