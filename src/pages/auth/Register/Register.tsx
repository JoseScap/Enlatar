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
  FacebookIcon,
  Footer,
  GoogleIcon,
  SofiaLogo,
  TwitterIcon,
  Widget,
} from "@/components";
import registerImage from "@/assets/registerImage.svg";
import { useRegister } from "@/hooks";

const Register = () => {
  const { formData, error, loading, handleChange, handleSubmit } = useRegister();

  return (
    <div className="auth-page">
      <Container className="col-12">
        <Row className="d-flex align-items-center">
          <Col xs={12} lg={6} className="left-column">
            <Widget className="widget-auth widget-p-lg">
              <div className="d-flex align-items-center justify-content-between py-3">
                <p className="auth-header mb-0">Registro</p>
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
                    placeholder="correo@ejemplo.com"
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
                    placeholder="Ingresa tu contraseña"
                  />
                </FormGroup>
                <FormGroup className="my-3">
                  <FormText>Confirmar contraseña</FormText>
                  <Input
                    id="confirmPassword"
                    className="input-transparent pl-3"
                    type="password"
                    required
                    name="confirmPassword"
                    value={formData.confirmPassword ?? undefined}
                    onChange={handleChange}
                    placeholder="Confirma tu contraseña"
                  />
                </FormGroup>
                <div className="bg-widget d-flex justify-content-center">
                  <Button
                    className="rounded-pill my-3"
                    type="submit"
                    color="secondary-red"
                    disabled={loading}
                  >
                    {loading ? 'Registrando...' : 'Registrarse'}
                  </Button>
                </div>
                <p className="dividing-line my-3">&#8195;O inicia sesión con&#8195;</p>
                <div className="d-flex align-items-center my-3">
                  <p className="social-label mb-0">Inicia sesión con</p>
                  <div className="socials">
                    <a href="https://flatlogic.com/" target="_blank" rel="noopener noreferrer">
                      <GoogleIcon />
                    </a>
                    <a href="https://twitter.com/flatlogic/" target="_blank" rel="noopener noreferrer">
                      <TwitterIcon />
                    </a>
                    <a href="https://www.facebook.com/flatlogic" target="_blank" rel="noopener noreferrer">
                      <FacebookIcon />
                    </a>
                  </div>
                </div>
                <div className="bg-widget d-flex">
                  <Link to="/login">¿Ya tienes una cuenta? Inicia sesión aquí</Link>
                </div>
              </form>
            </Widget>
          </Col>
          <Col xs={0} lg={6} className="right-column">
            <div>
              <img src={registerImage} alt="Register page" />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Register; 