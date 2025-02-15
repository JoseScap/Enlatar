import React from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  Button,
  Col,
  Container,
  FormGroup,
  FormText,
  Input,
  Row,
} from "reactstrap";
import {
  Widget,
  Footer,
  SofiaLogo,
  GoogleIcon,
  TwitterIcon,
  FacebookIcon,
} from "@/components";
import loginImage from "@/assets/loginImage.svg";
import { useLogin } from "@/hooks";

const Login: React.FC = () => {
  const { formData, error, loading, handleChange, handleSubmit } = useLogin();

  return (
    <div className="auth-page">
      <Container className="col-12">
        <Row className="d-flex align-items-center">
          <Col xs={12} lg={6} className="left-column">
            <Widget className="widget-auth widget-p-lg">
              <div className="d-flex align-items-center justify-content-between py-3">
                <p className="auth-header mb-0">Ingresar</p>
                <div className="logo-block">
                  <SofiaLogo />
                  <p className="mb-0">Enlatar</p>
                </div>
              </div>
              {error && (
                <Alert color="danger" className="my-3">
                  {error}
                </Alert>
              )}
              <form onSubmit={handleSubmit}>
                <FormGroup className="my-3">
                  <FormText>Correo electrónico</FormText>
                  <Input
                    id="email"
                    className="input-transparent pl-3"
                    type="email"
                    required
                    name="email"
                    value={formData.email ?? undefined}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup className="my-3">
                  <div className="d-flex justify-content-between">
                    <FormText>Contraseña</FormText>
                    <Link to="/error">¿Olvidaste tu contraseña?</Link>
                  </div>
                  <Input
                    id="password"
                    className="input-transparent pl-3"
                    type="password"
                    required
                    name="password"
                    value={formData.password ?? undefined}
                    onChange={handleChange}
                    placeholder="Contraseña"
                  />
                </FormGroup>
                <div className="bg-widget d-flex justify-content-center">
                  <Button 
                    className="rounded-pill my-3" 
                    type="submit" 
                    color="secondary-red"
                    disabled={loading}
                  >
                    {loading ? 'Ingresando...' : 'Ingresar'}
                  </Button>
                </div>
                <p className="dividing-line my-3">&#8195;Or&#8195;</p>
                <div className="d-flex align-items-center my-3">
                  <p className="social-label mb-0">Inicia sesión con</p>
                  <div className="socials">
                    <a href="https://flatlogic.com/"><GoogleIcon /></a>
                    <a href="https://flatlogic.com/"><TwitterIcon /></a>
                    <a href="https://flatlogic.com/"><FacebookIcon /></a>
                  </div>
                </div>
                <Link to="/register">¿No tienes una cuenta? Regístrate aquí</Link>
              </form>
            </Widget>
          </Col>
          <Col xs={0} lg={6} className="right-column">
            <div>
              <img src={loginImage} alt="Login page" />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Login; 