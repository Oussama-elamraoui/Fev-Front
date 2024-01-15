import React, { useState, useRef, useEffect } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { generateOpenAICompletion } from "./openAiApi";
import { FaComments, FaUser, FaCog } from 'react-icons/fa';
// components
import PageTitle from "../../../../components/PageTitle";
import PersonalDetails from "./PersonalDetails";
import OtherDetails from "./OtherDetails";
import LetterByLetterAnimation from "./LetterByLetterAnimation"
import IA_M3ak from '../../../../assets/images/IA-M3ak.png';
import { userInfo } from "./data";
import './style.css'
import OpenAiResult from './openAiResult'
import './small.css'
import { Box, Modal } from "@mui/material";
import { BsFillSendFill } from "react-icons/bs";
interface Message {
  message: string,
  author: 'me' | 'gpt',
  date: Date,
}
const style = {
  // height:'70%',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '90%', // Set the maximum height for the scrollable box
  overflowY: 'auto',
  borderRadius: 5,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  zIndex: 1000,
};
const Profile = () => {
  const [isChatOpen, setChatOpen] = useState(false);
  const [prompt, setPrompt] = useState<string>('');
  const [completion, setCompletion] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [show, setShow] = useState<boolean>(false);
  const [employees, setEmployees] = useState<any[]>([]);
  const [selectedEmpl, setSelectedEmpl] = useState<object>()
  const handleShow = () => setShow(!show);
  const handleGenerateCompletion = async () => {
    messages?.push({
      message: prompt,
      author: 'me',
      date: new Date(),
    });
    setTyping(true);
    try {
      const result = await generateOpenAICompletion(prompt);
      setCompletion(result);

    } catch (error) {
      // Handle error
      setCompletion('something wrong!😞');
    }
    messages?.push({
      message: completion,
      author: 'gpt',
      date: new Date(),
    });
    setTyping(false)
  };
  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };
  const [isTyping, setTyping] = useState(true);
  // useEffect(() => {
  //   let typingTimeout: NodeJS.Timeout;

  //   if (isTyping) {
  //     typingTimeout = setTimeout(() => {
  //       setTyping(false);
  //       setShowMessage(true);
  //     }, 5000); // Adjust the timeout duration as needed
  //   }

  //   return () => {
  //     clearTimeout(typingTimeout);
  //   };
  // }, [isTyping]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    fetchEmployees();
  }, [])
  const fetchEmployees = async () => {
    try {
      const response = await fetch('https://backend.hnam3ak.ma/api/AllEmployees');
      if (response.ok) {
        const data = await response.json();
        // Extract employees from the response and set in state
        const allEmployees = Object.values(data.employees).flatMap((empArray) => empArray);
        setEmployees(allEmployees);
      } else {
        console.error('Failed to fetch employees');
      }

    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };
  const handleReciver = (empl: object) => {
   setSelectedEmpl(empl);
  }
  return (
    <>
      <h2>Profile</h2>
      <Card >
        <Card.Body >
          <Row style={{ borderRadius: '10px' }} >
            <Col xl={6}>
              <div className="d-flex align-items-center">
                <div style={{ width: '100%' }}>
                  <div className="d-flex align-items-center" style={{ width: '100%' }}>
                    <div><img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" alt="" style={{ width: '40px', cursor: 'pointer' }} /></div>
                    <div className="" style={{ paddingLeft: '20px' }} >
                      <h4 className="pb-0" style={{ marginBottom: '0px' }}>Nawal amani</h4>
                      <div className="position-absolute cursor-pointer" style={{ right: '0px', top: '12px', color: 'gray' }} onClick={handleShow}>
                        <i className="bi bi-share-fill"></i>
                      </div>
                      <p style={{ color: '#D1D0D0' }} className="fs-6">20 ans</p>

                      {show &&
                        <div style={{ width: 'clamp(150px,300px,300px)', height: '92%', right: '0px', top: '40px', backgroundColor: 'white', zIndex: '1000' }} className="position-absolute rounded select-share px-1">
                          <div className="input-group rounded mb-2 " style={{ width: '100%', height: '20px', top: '10px' }}>
                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{ height: '30px' }} />
                            {/* <span className="input-group-text border-0" id="search-addon">
                            
                          </span> */}
                            <div className="d-flex justify-content-center align-items-center">

                              <span className="border rounded px-2" style={{ height: '30px', paddingTop: '4px', width: "40px" }}><i className="bi bi-search"></i></span>

                            </div>

                          </div>
                          <div className="mt-4 displayEmpl" style={{ overflow: 'auto', height: '184px' }}>
                            {employees.map((item, index) => {
                              return (
                                <div className="row border rounded" style={{ height: '50px' }} key={index}>
                                  <div className="col-md-2 d-flex align-items-center justify-content-center" style={{}}>
                                    {item.user.sexe === 'Homme' ? (<img className="rounded-circle shadow-4" src="https://cdn3.iconfinder.com/data/icons/many-peoples-vol-2/512/16-1024.png" alt="" style={{ width: '40px', height: '40px' }}></img>) :
                                      (<img className="rounded-circle shadow-4" src="https://cdn5.vectorstock.com/i/1000x1000/61/44/avatar-business-woman-graphic-vector-9646144.jpg" alt="" style={{ width: '40px', height: '40px' }}></img>)}

                                  </div>
                                  <div className="col-md-8">
                                    <div className="position-absolute mt-1">
                                      {item.user.fullName === item.user.fullName.slice(0, 23) ? <text style={{ fontSize: "0.8em" }}>  {item.user.fullName}</text> : <text style={{ fontSize: "0.8em" }}>{item.user.fullName.slice(0, 23)}...</text>}
                                      <p className="text-muted" style={{ fontSize: "0.5em", color: 'GrayText' }}>{item.centre}</p>
                                    </div>
                                  </div>
                                  <div className="col-md-2 d-flex align-items-center justify-content-center">
                                    <input
                                      className="form-check-input"
                                      id={`flexCheckDefault_${index}`}
                                      type="checkbox"
                                      style={{ color: 'orange', height: '30px', width: '30px' }}
                                      value={JSON.stringify(item.user)}
                                      onChange={(e) => handleReciver(JSON.parse(e.target.value))} />
                                  </div>
                                </div>)
                            })}

                          </div>
                          <div className="row ">
                            <div className="col-md-9 px-0 d-flex " ><textarea className="form-control ml-0" rows={1} cols={50} id="comment" style={{ width: 'clamp(100%,200px,220px)', height: '30px', maxHeight: '30px', left: '0px' }} placeholder="Type your message..." form="form"></textarea></div>
                            <div className="col-md-3 d-flex justify-content-end align-items-center" style={{}}>
                              <span className="cursor-pointer rounded p-1" style={{ backgroundColor: '#6dd669', color: 'white' }}>
                                send
                              </span>
                              {/* <button className="rounded" style={{ height: '30px', paddingTop: '4px', backgroundColor: '#6dd669',width:'100%'}}>send</button> */}
                            </div>
                          </div>
                        </div>
                      }

                    </div>

                  </div>
                  <div className="d-flex align-items-center">
                    <div className="">

                      <div className="table-responsive pt-2">
                        <div className="contact-info text-muted">
                          <div className="contact-left">
                            <div className="contact-item">
                              <i className="bi bi-phone" style={{ color: '#FFD499' }}></i>
                              <p className="pt-2" style={{ color: 'gray' }}>0615636737</p>
                            </div>
                            <div className="contact-item">
                              <i className="bi bi-gender-female" style={{ color: '#FFD499' }}></i>
                              <p className="pt-2" style={{ color: 'gray' }}>Femme</p>
                            </div>
                          </div>
                          <div className="divider" style={{ opacity: '0.1' }}></div>
                          <div className="contact-right">
                            <div className="contact-item">
                              <i className="bi bi-envelope mr-1" style={{ color: '#FFD499' }}></i>
                              <p className="pt-2" style={{ color: 'gray' }}>test@gmail.com</p>
                            </div>
                            <div className="contact-item">
                              <i className="bi bi-geo-alt" style={{ color: '#FFD499' }}></i>
                              <p className="pt-2" style={{ color: 'gray' }}>Bouknadel</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '50%', height: '1px', backgroundColor: 'gray', opacity: '0.1', marginLeft: '20%' }}>
                  </div>
                  <div className="row ">
                    <div className="col mt-3">
                      <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">

                        <div className="timeline-step ml-0">
                          <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                            <div className="inner-circle" style={{ backgroundColor: '#FF8700' }}><i className="bi bi-check-all" style={{ color: 'white' }}></i></div>
                            <p className="h6 mt-1 mb-1" style={{ opacity: '0.5', color: 'gray' }}>Med</p>
                          </div>
                        </div>
                        <div className="timeline-step">
                          <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                            <div className="inner-circle" style={{ backgroundColor: '#FFC17C' }}><i className="bi bi-check" style={{ color: 'white' }}></i></div>
                            <p className="h6 mt-1 mb-1" style={{ opacity: '0.5', color: 'gray' }}>psy</p>

                          </div>
                        </div>
                        <div className="timeline-step">
                          <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                            <div className="inner-circle" style={{ backgroundColor: '#FFC17C' }}><i className="bi bi-check" style={{ color: 'white' }}></i></div>
                            <p className="h6 mt-1 mb-1 text-muted" style={{ opacity: '0.5', color: 'gray' }}>Pro</p>

                          </div>
                        </div>
                        <div className="timeline-step">
                          <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                            <div className="inner-circle" style={{ backgroundColor: '#FFC17C' }}><i className="bi bi-check" style={{ color: 'white' }}></i></div>
                            <p className="h6 mt-1 mb-1 text-muted" style={{ opacity: '0.5', color: 'gray' }}>Gen</p>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="vr" style={{ height: '140px', backgroundColor: 'gray' }}></div> */}
              </div>
            </Col>
            <Col style={{ backgroundColor: '' }} xl={6}>
              <div className="d-flex align-items-center">
                <div style={{ width: '1px', backgroundColor: '#F1F1F1', height: '300px' }} className="d-inline-block ">
                </div>
                <div className="d-inline-block" style={{ marginLeft: '20px' }}>
                  <div className="d-flex align-items-center pb-2">
                    <img src={IA_M3ak} alt="" style={{ width: "30px" }} />
                    <div>
                      <h4 className="" style={{ paddingLeft: '20px' }}>IA M3ak</h4>
                    </div>
                  </div>
                  <LetterByLetterAnimation text="An patient is an individual who seeks medical care and treatment for various health concerns. They may have acute or chronic conditions, and their symptoms can range from mild to severe. They may have acute or chronic conditions, and their symptoms can range from mild to severe. They may have acute or chronic conditions, and their symptoms can range from mild to severe." font="font1"></LetterByLetterAnimation>

                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Row>
        <Col>
          <OtherDetails />
        </Col>
      </Row>

    </>
  );
};

export default Profile;
