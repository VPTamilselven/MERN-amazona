import { Button, Container, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom';

function SigninScreen() {

  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl: '/'


  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>

      <Form>
        <FormGroup className="mb-3" controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl type="email" required />
        </FormGroup>
        <FormGroup className="mb-3" controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" required />
        </FormGroup>
        <div className='mb-3'>
          <Button type='submit'>Sign In</Button>
        </div>
        <div className='mb-3'>New Customer?{' '}
          <Link to={`/signin?redirect=${redirect}`}>Create your account</Link></div>
      </Form>
    </Container>
  );
}

export default SigninScreen