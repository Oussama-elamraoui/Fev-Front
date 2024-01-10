import React, { useEffect } from "react";
import { Button, Alert, Row, Col } from "react-bootstrap";
import { Link, useLocation, Navigate, json } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import FeatherIcons from "feather-icons-react";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
// import App from "./context"
// actions
import logo from '../../assets/images/logo.png'
import { resetAuth, loginUser } from "../../redux/actions";

// store
import { RootState, AppDispatch } from "../../redux/store";

// components
import { VerticalForm, FormInput } from "../../components/";

import AuthLayout from "./AuthLayout";

// images
import logoDark from "../../assets/images/logo-dark.png";
import participant1 from "../../assets/images/partenariats/MicrosoftTeams-image (1).png"
import participant2 from "../../assets/images/partenariats/MicrosoftTeams-image (2).png"
import participant3 from "../../assets/images/partenariats/MicrosoftTeams-image (3).png"
import participant4 from "../../assets/images/partenariats/MicrosoftTeams-image (4).png"
import logoLight from "../../assets/images/logo-light.png";
import axios, { AxiosResponse } from "axios";
import { UsersService } from './test';

interface UserData {
  email: string;
  password: string;
}

/* bottom links */
const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <Row className="mt-3">
      <Col xs={12} className="text-center">
        <p className="text-muted">
          {/* {t("Don't have an account?")}{" "} */}
          {/* <Link to={"/auth/register"} className="text-primary fw-bold ms-1">
            {t("Sign Up")}
          </Link> */}
        </p>

      </Col>
    </Row>
  );
};
interface LoginResponse {
  // Define the structure of your API response here
  // For example, if your API returns a token, you can do something like this:
  token: string;
}

interface LoginPayload {
  credential: string;
  password: string;
}
const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { user, userLoggedIn, loading, error } = useSelector(
    (state: RootState) => ({
      user: state.Auth.user,
      loading: state.Auth.loading,
      error: state.Auth.error,
      userLoggedIn: state.Auth.userLoggedIn,
    })
  );
  // const csrfToken: string | any = document.head.querySelector('meta[name="csrf-token"]');
  // useEffect(() => {
  //   async function fetchData() {
  //     const rawResponse = await fetch('http://127.0.0.1:8000/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         // 'X-CSRF-TOKEN': csrfToken,
  //       },
  //       body: JSON.stringify({
  //         credential: 'AA111153',
  //         password: '123456'
  //       })
  //     })
  //       .then(response => response.json())
  //       .then(res => console.log(res))
  //   }
  //   fetchData()
  //   async function postData(url = '', data = {}) {
  //     // Default options are marked with *
  //     const response = await fetch(url, {
  //       method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //       // headers: {
  //       //   'Content-Type': 'application/json'
  //       //   // 'Content-Type': 'application/x-www-form-urlencoded',
  //       // },
  //       // body: JSON.stringify(data)  body data type must match "Content-Type" header
  //     });
  //     return await response.json(); // parses JSON response into native JavaScript objects
  //   }
  //   // postData('http://127.0.0.1:8000/api/allUsers', {
  //   //   credential: 'AA111153',
  //   //   password: '123456'
  //   // })
  //   //   .then(data => {
  //   //     console.log(data); // JSON data parsed by `data.json()` call
  //   //   });
  // }, []);
  useEffect(() => {
    dispatch(resetAuth());
  }, [dispatch]);

  /*
    form validation schema
    */
  const schemaResolver = yupResolver(
    yup.object().shape({
      email: yup.string().required(t("Please enter Email")),
      password: yup.string().required(t("Please enter Password")),
      checkbox: yup.bool().oneOf([true]),
    })
  );

  /*
    handle form submission
    */
  const onSubmit = (formData: UserData) => {
    dispatch(loginUser(formData["email"], formData["password"]));
  };
  
  // const location = useLocation();
  // const redirectUrl = location?.search?.slice(6) || "/";

  // console.log(redirectUrl);
  // console.log(location);
  return (
    <>
          {userLoggedIn || user ? (
        user.role === 'tpme' && <Navigate to='/tpme'></Navigate>
        ||
        user.role === 'ong' && <Navigate to='/ong'></Navigate>
        ||
        user.role === 'psy' && <Navigate to='/psy'></Navigate>
        ||
        user.role === 'medecin' && <Navigate to='/medecin'></Navigate>
        ||
        user.role === 'assistant sociale' && <Navigate to='/assistant'></Navigate>
        ||
        user.role === 'admin' && <Navigate to='/admin'></Navigate>
      ): null}
    
      <AuthLayout bottomLinks={<BottomLink />}>
        <div className="auth-logo mx-auto d-flex justify-content-center" style={{ marginBottom: '18%',marginTop:'5%' }}>
          <img src={logo} alt="" height="24" style={{width:'200px'}} />
          {/* <h6>Login</h6> */}


          {/* <Link to="/" className="logo logo-dark text-center">
            <span className="logo-lg">
               <img src={logoDark} alt="" height="24" /> 
              Login
            </span>
          </Link> */}

          <Link to="/" className="logo logo-light text-center">
            <span className="logo-lg">
              <img src={logoLight} alt="" height="24" />
            </span>
          </Link>
        </div>

        {/* <h6 className="h5 mb-0 mt-3">{t("Welcome back!")}</h6>
        <p className="text-muted mt-1 mb-4">
          {t("Enter your email address and password to access admin panel.")}
        </p> */}

        {error && (
          <Alert variant="danger" className="my-2">
            {error}
          </Alert>
        )}

        <VerticalForm<UserData>
          onSubmit={onSubmit}
          resolver={schemaResolver}
          defaultValues={{ email: "psy@gmail.com", password: "123456" }}
          formClass="authentication-form"
        >
          <FormInput
            type="email"
            name="email"
            label={t("Email Address")}
            startIcon={<FeatherIcons icon={"mail"} className="icon-dual" />}
            placeholder={t("hello@coderthemes.com")}
            containerClass={"mb-3"}
          />
          <FormInput
            type="password"
            name="password"
            label={t("Password")}
            startIcon={<FeatherIcons icon={"lock"} className="icon-dual" />}
            action={
              <Link
                to="/auth/forget-password"
                className="float-end text-muted text-unline-dashed ms-1"
              >
                {t("Forgot your password?")}
              </Link>
            }
            placeholder={t("Enter your Password")}
            containerClass={"mb-3"}
          ></FormInput>

          <FormInput
            type="checkbox"
            name="checkbox"
            label={t("Remember me")}
            containerClass={"mb-3"}
            defaultChecked
          />

          <div className="mb-3 text-center d-grid">
            <Button type="submit" disabled={loading}>
              {t("Log In")}
            </Button>
          </div>
        </VerticalForm>

        {/* <div className="py-3 text-center">
          <span className="fs-16 fw-bold">{t("OR")}</span>
        </div> */}
        <Row>
          <Col className="d-flex justify-content-between">
            {/* <Link to="#" className="btn btn-white mb-2 mb-sm-0 me-1">xs={12}
              <i className="uil uil-google icon-google me-2"></i>
              {t("With Google")}
            </Link>
            <Link to="#" className="btn btn-white mb-2 mb-sm-0">
              <i className="uil uil-facebook me-2 icon-fb"></i>
              {t("With Facebook")}
            </Link> */}
            {/* <img src={participant1} alt="" srcSet="" style={{width:'60px'}} />
            <img src={participant2} alt="" srcSet="" style={{width:'60px'}}/>
            <img src={participant3} alt="" srcSet="" style={{width:'60px'}}/>
            <img src={participant4} alt="" srcSet="" style={{width:'60px'}}/> */}
          </Col>
        </Row>
      </AuthLayout>
    </>
  );
};

export default Login;
