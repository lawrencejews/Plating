import { Container, Row, Col } from 'react-bootstrap';
import { IFormContainer } from '../IRestuarant';


const FormContainer = ({children}: IFormContainer) => {
  return (
    <Container className='py-3'>
      <Row className='jusify-content-md-center'>
        <Col xs={12} md={6}>
        {children}
        </Col>
      </Row>
    </Container>
  )
}
export default FormContainer;