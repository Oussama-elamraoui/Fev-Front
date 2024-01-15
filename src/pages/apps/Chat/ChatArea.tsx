import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Card, Dropdown, Row, Col } from "react-bootstrap";
import classNames from "classnames";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { FormInput } from "../../../components/";
import Scrollbar from "../../../components/Scrollbar";
import Loader from "../../../components/Loader";

import ProfileModal from "./ProfileModal";
import VideocallModal from "./VideocallModal";
import VoicecallModal from "./VoicecallModal";
import iconShare from "../../../assets/images/shareUsers.png";
// default data
import { CHATHISTORY, ChatUserType, ChatMessage, MessageItem } from "./data";

// images
import avatar1 from "../../../assets/images/users/avatar-2.jpg";

interface ChatHeaderProps {
  selectedUser: ChatUserType;
  isHide: () => void;
}

const ChatHeader = ({ selectedUser, isHide }: ChatHeaderProps) => {
  // handle profile modal
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);

  const handleProfileModalClose = () => setShowProfileModal(false);
  const handleProfileModalShow = () => setShowProfileModal(true);

  // handle video modal
  const [showVideocallModal, setShowVideocallModal] = useState<boolean>(false);

  const handleVideocallModalClose = () => setShowVideocallModal(false);
  const handleVideocallModalShow = () => setShowVideocallModal(true);

  // handle voice modal
  const [showVoicelModal, setShowVoicelModal] = useState<boolean>(false);

  const handleVoicelModalClose = () => setShowVoicelModal(false);
  const handleVoicelModalShow = () => setShowVoicelModal(true);

  return (
    <>

      <div className="d-flex pb-2 border-bottom align-items-center">
        <img
          src={selectedUser.avatar}
          className="me-2 rounded-circle"
          alt=""
          style={{ width: '48px' }}
        />
        <div>
          <h5 className="mt-0 mb-0 fs-14">{selectedUser.name}</h5>
          <p className="mb-0">Online</p>
        </div>
        <div className="flex-grow-1">
          <ul className="list-inline float-end mb-0">
            <Dropdown as="li" className="list-inline-item fs-18 me-3">
              <Dropdown.Toggle
                id="dropdown-apps"
                as="a"
                className="cursor-pointer text-dark"
              >
                <i
                  className="bi bi-telephone-plus"
                  onClick={() => handleVoicelModalShow()}
                ></i>
              </Dropdown.Toggle>
            </Dropdown>

            <Dropdown as="li" className="list-inline-item fs-18 me-3">
              <Dropdown.Toggle
                id="dropdown-apps"
                as="a"
                className="cursor-pointer text-dark"
              >
                <i
                  className="bi bi-camera-video"
                  onClick={() => handleVideocallModalShow()}
                ></i>
              </Dropdown.Toggle>
            </Dropdown>
            <i className="bi bi-x-lg cursor-pointer" onClick={isHide}></i>
            {/* <Dropdown as="li" className="list-inline-item fs-18">
              <Dropdown.Toggle
                id="dropdown-apps"
                as="a"
                className="cursor-pointer text-dark"
              > </Dropdown.Toggle>
              <i className="bi bi-three-dots-vertical"></i>


              {/*<Dropdown.Menu className="dropdown-menu-end">
              
                 <Dropdown.Item
                  href="#/"
                  onClick={() => handleProfileModalShow()}
                >
                  {" "}
                  <i className="bi bi-person-circle fs-18 me-2"></i>View Profile
                </Dropdown.Item>
                <Dropdown.Item href="#/">
                  <i className="bi bi-music-note-list fs-18 me-2"></i>Media,
                  Links and Docs
                </Dropdown.Item>
                <Dropdown.Item href="#/">
                  <i className="bi bi-search fs-18 me-2"></i>Search
                </Dropdown.Item>
                <Dropdown.Item href="#/">
                  <i className="bi bi-image fs-18 me-2"></i>Wallpaper
                </Dropdown.Item>
                <Dropdown.Item href="#/">
                  <i className="bi bi-arrow-right-circle fs-18 me-2"></i>More
                </Dropdown.Item> 
              </Dropdown.Menu>
            </Dropdown> */}
          </ul>
        </div>
      </div>

      {/* Profile Modal */}
      <ProfileModal
        show={showProfileModal}
        handleClose={handleProfileModalClose}
      />

      {/* video call Modal */}
      <VideocallModal
        show={showVideocallModal}
        handleClose={handleVideocallModalClose}
      />

      {/* Voice call Modal */}
      <VoicecallModal
        show={showVoicelModal}
        handleClose={handleVoicelModalClose}
      />
    </>
  );
};

interface UserMessageProps {
  message: MessageItem;
  toUser: ChatUserType;
}
// user messages
const UserMessage = ({ message, toUser }: UserMessageProps) => {
  return (
    <>
      {(message.messages || []).map((item, index) => {
        return (
          <li
            key={index}
            className={classNames("clearfix", {
              odd: message.from.id === toUser.id,
              "mb-1":
                message.messages.length > 1 &&
                index !== message.messages.length - 1,
            })}
          >
            <div className="conversation-text ms-0">
              <div
                className={classNames("d-flex", {
                  "justify-content-end": message.from.id === toUser.id,
                })}
              >
                {message.from.id === toUser.id && (
                  <Dropdown className="conversation-actions">
                    <Dropdown.Toggle
                      as="a"
                      className="cursor-pointer text-dark pe-1"
                    >
                      <i className="bi bi-three-dots-vertical fs-14"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                      <Dropdown.Item>
                        <i className="bi bi-reply fs-18 me-2"></i>Reply
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="bi bi-star fs-18 me-2"></i>Reply
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="bi bi-trash fs-18 me-2"></i>Delete
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="bi bi-files fs-18 me-2"></i>Copy
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}

                {item.type === "text" && (
                  <div className="ctext-wrap">
                    <p>{item.value}</p>
                  </div>
                )}

                {item.type === "file" && (
                  <Card className="mb-1 shadow-none border text-start">
                    <div className="p-2">
                      <Row className="align-items-center">
                        <Col className="col-auto">
                          <div className="avatar-sm bg-primary text-white">
                            <span className="avatar-title rounded">.ZIP</span>
                          </div>
                        </Col>
                        <Col className="ps-0">
                          <Link to="#" className="text-muted fw-bold">
                            {item.value.file}
                          </Link>
                          <p className="mb-0">{item.value.size}</p>
                        </Col>
                        <Col className="col-auto">
                          <Link to="#" className="ps-3 fs-24">
                            <i className="bi bi-arrow-down-square"></i>
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                )}

                {message.from.id !== toUser.id && (
                  <Dropdown className="conversation-actions">
                    <Dropdown.Toggle
                      as="a"
                      className="cursor-pointer text-dark ps-1"
                    >
                      <i className="bi bi-three-dots-vertical fs-14"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="start">
                      <Dropdown.Item>
                        <i className="bi bi-reply fs-18 me-2"></i>Reply
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="bi bi-star fs-18 me-2"></i>Reply
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="bi bi-trash fs-18 me-2"></i>Delete
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="bi bi-files fs-18 me-2"></i>Copy
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </div>
              {index === message.messages.length - 1 && (
                <p className="text-muted fs-12 mb-0 mt-1">
                  {message.sendOn}
                  {message.from.id === toUser.id && (
                    <i className="bi bi-check2-all ms-1 text-success"></i>
                  )}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </>
  );
};

interface ChatAreaProps {
  selectedUser: ChatUserType;
  displayModalChatArea: boolean;
  userMessage?: string;
  idPatient?: number;

}

// ChatArea
const ChatArea = ({ selectedUser, displayModalChatArea, userMessage, idPatient }: ChatAreaProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [toUser] = useState<ChatUserType>({
    id: 9,
    name: "Shreyu N",
    avatar: avatar1,
  });

  /*
   *  Fetches the messages for selected user
   */
  const getMessagesForUser = useCallback(() => {
    if (selectedUser) {
      setLoading(true);
      setTimeout(() => {
        const modifiedChatHistory = [...CHATHISTORY].map((record) => {
          const test = {
            id: record.id,
            day: record.day,
            messages: [...record.messages].filter(
              (m) =>
                (m.to.id === toUser.id && m.from.id === selectedUser.id) ||
                (toUser.id === m.from.id && m.to.id === selectedUser.id)
            ),
          };
          return test;
        });
        setChatHistory([...modifiedChatHistory]);
        setLoading(false);
      }, 750);
    }
  }, [selectedUser, toUser.id]);

  useEffect(() => {
    getMessagesForUser();
  }, [getMessagesForUser]);

  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      newMessage: yup.string().required("Please enter your messsage"),
    })
  );

  /*
   * form methods
   */
  const methods = useForm({ resolver: schemaResolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = methods;

  /**
   * sends the chat message
   */
  const sendChatMessage = (values: { newMessage: string }) => {
    let newUserMessages = [...chatHistory[chatHistory.length - 1].messages];
    newUserMessages.push({
      id: chatHistory[chatHistory.length - 1].messages.length + 1,
      from: toUser,
      to: selectedUser,
      messages: [{ type: "text", value: values["newMessage"] }],
      sendOn: new Date().getHours() + ":" + new Date().getMinutes(),
    });

    const modifiedChatHistory = [...chatHistory].map((record, index) => {
      const test = {
        id: record.id,
        day: record.day,
        messages:
          index === chatHistory.length - 1 ? newUserMessages : record.messages,
      };
      return test;
    });
    setChatHistory([...modifiedChatHistory]);
    reset();
  };
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    setDisplayChat(displayModalChatArea);

  }, [selectedUser, displayModalChatArea]);
  const [displayChat, setDisplayChat] = useState<boolean>(displayModalChatArea)
  const isHide = () => {
    setDisplayChat(!displayChat)
  }
  useEffect(() => {
    fetchEmployees();
  }, [])
  const [employees, setEmployees] = useState<any[]>([]);
  const [focosedMembers, setFocusedMembers] = useState<"empl" | "patient">("empl")
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
  const [allPatients, setPatients] = useState<any[]>([]);
  const fetchPatient= async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/allVictimes');
      if (response.ok) {
        const data = await response.json();
        // Extract employees from the response and set in state
        const allPatient = Object.values(data.employees).flatMap((empArray) => empArray);
        setPatients(allPatient);
      } else {
        console.error('Failed to fetch Patient');
      }

    } catch (error) {
      console.error('Error fetching Patient:', error);
    }
  };
  const handleReciver = (empl: object) => {

  }
  return (
    <>
      <div className={`profile ${!displayChat ? 'd-none' : ''}`} >
        <Card style={{ height: '600px', padding: '0px' }}>
          <Card.Body style={{ margin: '0px' }}>
            {loading && <Loader />}
            <ChatHeader selectedUser={selectedUser} isHide={isHide} />

            <div className="mt-1">
              <Scrollbar style={{ height: "300px", width: "100%" }}>
                <ul className="conversation-list px-0 h-100">
                  {(chatHistory || []).map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <li className="position-relative">
                          <hr />
                          <h4>
                            <span className="badge bg-light text-dark position-absolute top-0 start-50 translate-middle">
                              {item.day}
                            </span>
                          </h4>
                        </li>
                        {(item.messages || []).map((message, index) => {
                          return (
                            <UserMessage
                              key={index}
                              message={message}
                              toUser={toUser}
                            />
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </ul>
              </Scrollbar>

              <div className=" bg-light p-1 rounded ">
                <form
                  noValidate
                  name="chat-form"
                  id="chat-form"
                  onSubmit={handleSubmit(sendChatMessage)}
                >
                  <div className="row">
                    <div className="col mb-1 mb-sm-0">
                      <FormInput
                        type="text"
                        name="newMessage"
                        className="border-0"
                        placeholder="Enter your text"
                        register={register}
                        key="newMessage"
                        errors={errors}
                        control={control}
                        style={{ width: '100%' }}
                      />
                    </div>

                    <div className="col-sm-auto">
                      <div className="btn-group">
                        {/* <Link to="#" className="btn btn-light">
                        <i className="bi bi-emoji-smile fs-18"></i>
                      </Link>
                      <Link to="#" className="btn btn-light">
                        <i className="bi bi-paperclip fs-18"></i>
                      </Link>*/}
                        {show &&
                          <div style={{ width: 'clamp(150px,300px,300px)', height: '270px', right: '0px', bottom: '40px', backgroundColor: 'white', zIndex: '2000' }} className="position-absolute rounded select-share px-1">
                            <div className="input-group rounded mb-2 " style={{ width: '100%', height: '20px', top: '10px' }}>
                              <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{ height: '30px' }} />
                              {/* <span className="input-group-text border-0" id="search-addon">
                            
                          </span> */}
                              <div className="d-flex justify-content-center align-items-center">

                                <span className="border rounded px-2" style={{ height: '30px', paddingTop: '4px', width: "40px" }}><i className="bi bi-search"></i></span>

                              </div>

                            </div>
                            <div className="mt-4 displayEmpl" style={{ overflow: 'auto', height: '184px' }}>
                              { 
                              focosedMembers==='empl' ?
                              employees.map((item, index) => {
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
                              }):
                              allPatients.map((item,index)=>{
                                return(
                                  <div className="row border rounded" style={{ height: '50px' }} key={index}>
                                  <div className="col-md-2 d-flex align-items-center justify-content-center" style={{}}>
                                    {item.victim.user ? (<img className="rounded-circle shadow-4" src="https://cdn5.vectorstock.com/i/1000x1000/61/44/avatar-business-woman-graphic-vector-9646144.jpg" alt="" style={{ width: '40px', height: '40px' }}></img>) :
                                      (<img className="rounded-circle shadow-4" src="https://cdn5.vectorstock.com/i/1000x1000/61/44/avatar-business-woman-graphic-vector-9646144.jpg" alt="" style={{ width: '40px', height: '40px' }}></img>)}

                                  </div>
                                  <div className="col-md-8">
                                    <div className="position-absolute mt-1">
                                      {item.victim.user ? item.victim.user.fullName === item.victim.user.fullName.slice(0, 23) ? <text style={{ fontSize: "0.8em" }}>  {item.victim.user.fullName}</text> : <text style={{ fontSize: "0.8em" }}>{item.victim.user.fullName.slice(0, 23)}...</text>
                                    :
                                    item.victim.fullName === item.victim.fullName.slice(0, 23) ? <text style={{ fontSize: "0.8em" }}>  {item.victim.fullName}</text> : <text style={{ fontSize: "0.8em" }}>{item.victim.fullName.slice(0, 23)}...</text>
                                    }
                                      <p className="text-muted" style={{ fontSize: "0.5em", color: 'GrayText' }}>
                                        {item.victim.user? item.victim.user.sexe : item.victim.sexe}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-md-2 d-flex align-items-center justify-content-center">
                                    <input
                                      className="form-check-input"
                                      id={`flexCheckDefault_${index}`}
                                      type="checkbox"
                                      style={{ color: 'orange', height: '30px', width: '30px' }}
                                      value={JSON.stringify(item)}
                                      onChange={(e) => handleReciver(JSON.parse(e.target.value))} />
                                  </div>
                                </div>
                                )
                              }
                              )
                            }

                            </div>
                            <div className="row ">
                              <div className="col-md-6 py-auto d-flex justify-content-center align-items-center border cursor-pointer rounded" style={focosedMembers === 'empl' ? { backgroundColor: '#fbebda' } : {}} onClick={() => setFocusedMembers('empl')}>
                                Employee
                              </div>
                              <div className="col-md-6 d-flex justify-content-center align-items-center justify-items-center border cursor-pointer rounded" style={focosedMembers === 'patient' ? { backgroundColor: '#fbebda' } : {}} onClick={() => {
                                setFocusedMembers('patient')
                              }}>
                                Patient
                                {/* <button className="rounded" style={{ height: '30px', paddingTop: '4px', backgroundColor: '#6dd669',width:'100%'}}>send</button> */}
                              </div>
                            </div>
                          </div>
                        }

                        <div className="btn btn-light" onClick={() => setShow(!show)}>
                          <img src={iconShare} className="ml-0 cursor-pointer" alt="" style={{ width: '20px', height: '20px' }} />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-success chat-send"
                        >
                          <i className="uil uil-message"></i>
                        </button>

                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ChatArea;
