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
import Modal from '@mui/material/Modal';
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
};
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
const Discusion = () => {
  const [user, setUser] = useState<ChatUserType[]>([...USERS]);
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
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
  const ProfilePicture: React.FC<ProfilePictureProps> = ({ imageSrc, name, role }) => {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setHovered(false);
    };

    return (

      <div className={`profile-picture ${isHovered ? 'hovered shadow-lg ' : ''} mb-3`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {/* <img src={imageSrc} alt="User-Profile-Image" className="img" /> */}
        {role === 'assistant' && <Avatar alt="Remy Sharp" style={{ height: '100%', width: "100%", backgroundColor: '#86ecf1', fontFamily: 'sans-serif', fontSize: '30px' }}  >AS</Avatar>}
        {role === 'admin' && <Avatar alt="Remy Sharp" style={{ height: '100%', width: "100%", backgroundColor: '#f3ab83', fontFamily: 'sans-serif', fontSize: '30px' }}  >US</Avatar>}
        {role === 'medecin' && <Avatar alt="Remy Sharp" style={{ height: '100%', width: "100%", backgroundColor: '#97f676', fontFamily: 'sans-serif', fontSize: '30px' }}  >ME</Avatar>}
        {role === 'psy' && <Avatar alt="Remy Sharp" style={{ height: '100%', width: "100%", backgroundColor: '#6a84f7', fontFamily: 'sans-serif', fontSize: '30px' }}  >PS</Avatar>}
        <div className={`overlay ${isHovered ? 'show' : ''}`}>
          <MessageIcon sx={{ mr: '10px' }} style={{ cursor: 'pointer' }} onClick={() => {
            setSelectedUser({
              id: 1,
              name: 'Medcin',
              avatar: 'https://img.freepik.com/vecteurs-premium/jeune-femme-souriante-ann-avatar-3d-vecteur-personnes-personnage-illustration-cartoon-style-minimal_365941-738.jpg',
              totalUnread: 2,
              userStatus: "busy",
            }); setDisplayModalChatArea(true)
          }}></MessageIcon>
          <ReadMoreIcon style={{ cursor: 'pointer' }} onClick={handleShow}></ReadMoreIcon>
        </div>
        {/* <div className="NameContainer">{name}</div> */}
      </div>



    );
  };
  const [displayModalChatArea, setDisplayModalChatArea] = useState(false)
  const [displayAllTag, setDisplayAllTag] = useState(true)
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const InfoEmp = () => {


    return (
      <Modal
        keepMounted
        open={show}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
          <div className="row">
            <div className="text-center card-box">
              <div className="member-card pb-2">
                <div className="thumb-lg member-thumb mx-auto">
                  <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle img-thumbnail" alt="profile-image" style={{width:'100px'}}/></div>
                <div className="">
                  <h4>Psychologue</h4>
                  <p className="text-muted">@email <span className="text-orange" style={{color:'orange'}}>psy@gmail.com</span></p>
                </div>
                <button type="button" className="mt-3 waves-effect w-md waves-light border-none rounded" style={{backgroundColor:'orange'}}>Message Now</button>
                <div className="mt-1">
                  <div className="row">
                    <div className="col-3">
                      <div className="mt-3">
                        <h4>CIN</h4>
                        <p className="mb-0 text-muted">TA177853</p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="mt-3">
                        <h4>Phone</h4>
                        <p className="mb-0 text-muted">0654345355</p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="mt-3">
                        <h4>Genre</h4>
                        <p className="mb-0 text-muted">Femme</p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="mt-3">
                        <h4>Date de naissance</h4>
                        <p className="mb-0 text-muted">20/03/2000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    )
  }
  return (
    <>
      <div className="d-flex justify-content-end mb-3 mt-1" >
        <FormControl sx={{ m: 1, width: 400 }}  >
          {personName.length === 0 && <InputLabel id="">All</InputLabel>}
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            onOpen={() => setDisplayAllTag(false)}
            value={personName}
            placeholder={"All"}
            onChange={handleChange}
            // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} style={{ backgroundColor: ` ${value === 'medecin' && '#97f676' || value === 'assistant' && '#86ecf1' || value === 'psy' && '#6a84f7' || value === 'admin' && '#f3ab83'} ` }} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {jobs.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* new list */}
      <div className="container">
        <div className="row ">
          {employee.map((item, index) => (
            <React.Fragment key={index}>
              {/* Adjust the column size based on your design */}
              {personName.length === 0 || personName.includes(item) ? (
                <div className="col-sm-3">
                  <ProfilePicture imageSrc="" name="Issam" role={item} />
                </div>
              ) : null}


            </React.Fragment>
          ))}

        </div>
      </div>
      <ChatArea displayModalChatArea={displayModalChatArea} selectedUser={selectedUser}></ChatArea>
      <InfoEmp ></InfoEmp>
    </>
  );
};

export default Discusion;
