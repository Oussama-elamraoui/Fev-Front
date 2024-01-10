import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import './style.css'
// import './style2.scss'
import { styled } from '@mui/material/styles';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import MessageIcon from '@mui/icons-material/Message';
import Divider from '@mui/material/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatArea from "./ChatArea";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
// components
import PageTitle from "../../../components/PageTitle";
// dummy data
import { USERS, ChatUserType } from "./data";
import Stack from "@mui/material/Stack";
import Scrollbar from "../../../components/Scrollbar";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
interface ChatUsersProps {
  onUserSelect: (value: ChatUserType) => void;
}
const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));
interface ProfilePictureProps {
  imageSrc: string;
  name: string;
  role: string;
}
// ChatApp
const BarreChat= () => {
  const [user, setUser] = useState<ChatUserType[]>([...USERS]);
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const onUserChange = (user: ChatUserType) => {
    setSelectedUser(user);
  };
  const jobs = [
    'assistant',
    'admin',
    'medecin',
    'psy',
  ];
  const employee = [
    'assistant',
    'admin',
    'psy',
    'medecin',
    'admin',
    'assistant',
    'psy',
    'medecin',
    'psy',
    'admin',
    'medecin',
    'assistant',
    'psy',
    'assistant',
    'medecin',
    'psy',
    'medecin',
    'medecin',
  ]
  

  const [selectedUser, setSelectedUser] = useState<ChatUserType>(USERS[1]);
  const activateUser = (user: ChatUserType) => {
    if (!displayModalChatArea) {
      setDisplayModalChatArea(!displayModalChatArea)
    }
    setSelectedUser(user);

  };

  const [displayModal, setDisplayModal] = useState(false)
  const [displayModalChatArea, setDisplayModalChatArea] = useState(false)
  const handelModal = () => {
    setDisplayModal(!displayModal);
  }


  return (
    <>
      {/* <PageTitle
        breadCrumbItems={[
          { label: "Apps", path: "/apps/chat" },
          { label: "Chat", path: "/apps/chat", active: true },
        ]}
        title={"Chat"}
      />    */}
      {/* chatearea */}
    
      {/* onClick={handelModalChatArea} */}
      <ChatArea selectedUser={selectedUser} displayModalChatArea={displayModalChatArea} />
      
      {/* Your messaging content goes here */}
      <div className={`message-box ${displayModal ? '' : 'max-height'}`}>
        <Stack
          onClick={handelModal}
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          spacing={0}
          style={{ cursor: 'pointer' }}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >OE</Avatar>
          </StyledBadge>
          Oussama elamraoui
          {!displayModal && <CloseFullscreenIcon onClick={handelModal} />} {/* <OpenInFullIcon /> */}
          {displayModal && <OpenInFullIcon onClick={handelModal} />}
        </Stack>
        {!displayModal && (

          <div className="pe-2">
            <hr className="hr mx-auto" style={{ width: '90%', color: 'gray', opacity: '0.5' }} />
            <Scrollbar style={{ height: "430px", width: "100%" }}>
              {(user || []).map((user, index) => {
                return (
                  <Link

                    to="#"
                    key={index}
                    className="text-body"
                    onClick={(e: any) => {
                      activateUser(user);
                    }}
                  >
                    <div
                      className={classNames(
                        "d-flex",
                        "align-items-start",
                        "p-2",
                        {
                          "bg-light": user.id === selectedUser.id,
                        }
                      )}
                    >
                      <div className="position-relative">
                        <span
                          className={classNames("user-status", {
                            "bg-success": user.userStatus === "online",
                            "bg-danger": user.userStatus === "busy",
                            "bg-warning": user.userStatus === "away",
                          })}
                        ></span>
                        <img
                          src={user.avatar}
                          className="me-2 rounded-circle"
                          
                          style={{width:'48px'}}
                          alt=""
                        />
                      </div>

                      <div className="w-100 overflow-hidden">
                        <h5 className="mt-0 mb-0 fs-14">
                          <span className="float-end text-muted fs-12">
                            {user.lastMessageOn}
                          </span>
                          {user.name}
                        </h5>
                        <p className="mt-1 mb-0 text-muted fs-14">
                          {user.totalUnread !== 0 && (
                            <span className="float-end badge bg-danger text-white">
                              {user.totalUnread}
                            </span>
                          )}
                          <span
                            className={classNames("w-75", {
                              "text-dark": user.totalUnread,
                            })}
                          >
                            {user.lastMessage}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Scrollbar>
          </div>)}
      </div>

    </>
  );
};

export default BarreChat;
