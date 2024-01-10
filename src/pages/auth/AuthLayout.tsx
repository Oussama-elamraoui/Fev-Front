import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import image1 from "../../assets/images/photo 1 fev.png";
import image2 from "../../assets/images/image2.png";
import "./style.css"
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-bootstrap/Carousel';

interface AccountLayoutProps {
  bottomLinks?: any;
  children?: any;
}

const AuthLayout = ({ bottomLinks, children }: AccountLayoutProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    image1,
    image2

  ];
  const { t } = useTranslation();
  useEffect(() => {
    // Set up an interval to automatically move to the next image every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  useEffect(() => {
    if (document.body) document.body.classList.add("authentication-bg");

    return () => {
      if (document.body) document.body.classList.remove("authentication-bg");
    };
  }, []);

  return (
    <>
      <div className="account-pages my-5">
        <Container>
          <Row className="justify-content-center">
            <Col xl={10}>
              <Card>
                <Card.Body className="p-0">
                  <Row className="g-0">
                    <Col lg={6} className="p-4">
                      {children}
                    </Col>
                    <Col lg={6} className="d-none d-md-inline-block">
                      <div className="auth-page-sidebar">
                        {/* <div className="overlay"></div> */}
                        {/* <div className="auth-user-testimonial">
                          <p className="fs-24 fw-bold text-white mb-1">
                            {t("I simply love it!")}
                          </p>
                          <p className="lead">
                            "
                            {t("It's a elegent templete. I love it very much!")}
                            "
                          </p>
                          <p>- {t("Admin User")}</p>
                        </div> */}
                        <Carousel controls={false} pause='hover' >
                          <Carousel.Item interval={4000}>
                            <img src={image2} alt="" srcSet="" style={{height:'550px'}} />
                            {/* <Carousel.Caption>
                              <h3>First slide label</h3>
                              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                          </Carousel.Item>
                          <Carousel.Item interval={4000}>
                            <img src={image1} alt="" srcSet="" style={{height:'550px'}} />
                            {/* <Carousel.Caption>
                              <h3>Second slide label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption> */}
                          </Carousel.Item>

                        </Carousel>
                        {/* <div className="carousel-container">
                          <div className="carousel">
                            {images.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt={`carousel-image-${index}`}
                                className={index === currentIndex ? 'visible' : 'hidden'}
                              />
                            ))}
                          </div>
                        </div> */}
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              {/* bottom links */}
              {bottomLinks}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AuthLayout;
