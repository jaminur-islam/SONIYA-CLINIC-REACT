import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  // Error
  const [error, setError] = useState("");

  const {
    setLoading,
    handleGoogle,
    handleGithub,
    signInWithEmailAndPassword,
    auth,
  } = useAuth();
  const location = useLocation();
  const locasionis = location?.state?.from || "/home";
  const history = useHistory();

  const google = () => {
    setLoading(true);
    handleGoogle()
      .then((result) => {
        console.log(result);
        history.push(locasionis);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const github = () => {
    setLoading(true);
    handleGithub()
      .then((result) => {
        history.push(locasionis);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // email state
  const [email, setEmail] = useState(" ");
  // password state
  const [pass, setPass] = useState(" ");

  // email
  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  // pass
  const getPass = (e) => {
    setPass(e.target.value);
  };

  // Create users
  const getValue = (e) => {
    setLoading(true);
    e.preventDefault();
    if (pass) {
      setError("Password should be 8 character");
      return;
    }
    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        history.push(locasionis);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login-section d-inline-block">
      <h2 className="text-center text-primary mt-4">Log in your account </h2>
      <hr style={{ width: "350px", margin: "0 auto" }} />

      <Form onSubmit={getValue} className="container w-75 mt-2">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={getEmail}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={getPass}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <p className="text-danger"> {error}</p>

        <Button className="btn btn-primary" type="submit">
          Login
        </Button>
        <Link to="/signup" className="text-decoration-none ms-1">
          Create new account
        </Link>
        <br />
        <span className="mt-2 d-block">
          <Link to="#"> Forget Password </Link>
        </span>
      </Form>

      <div className="text-center">
        {/* google */}
        <button
          onClick={google}
          className="px-5 py-2 mt-3 mrgin  bg-success rounded text-white border-0"
        >
          <i className="fab fa-google me-2 text-danger rounded-circle bg-white py-2 px-2"></i>
          Continue with Google
        </button>
        {/*github  */}
        <button
          onClick={github}
          className="px-5 mt-2 py-2 mt-3 bg-black rounded text-white border-0"
        >
          <i className="fab fa-github  px-2  py-2"></i> Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
