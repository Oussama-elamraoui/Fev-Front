import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import classNames from "classnames";
import FeatherIcon from "feather-icons-react";
import OffcanvasPlacement from "./ProfileCanvas";
import { Card, Button, Offcanvas } from "react-bootstrap";
interface ProfileMenuItem {
  label: string;
  icon: string;
  redirectTo: string;
}

interface ProfileDropdownProps {
  menuItems: Array<ProfileMenuItem>;
  profilePic?: string;
  username: string;
}

const ProfileDropdown = (props: ProfileDropdownProps) => {
  const profilePic = props.profilePic || null;
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  /*
   * toggle profile-dropdown
   */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const [show, setShow] = useState<boolean>(false);

  /**
   * handle modal toggle
   */
  const toggle = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <>
      <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
        <Dropdown.Toggle
          id="dropdown-profile"
          as="a"
          onClick={toggleDropdown}
          className={classNames(
            "nav-link",
            "nav-user",
            "me-0",
            "cursor-pointer",
            { show: dropdownOpen }
          )}
        >
          <img src={profilePic!} className="rounded-circle" alt="" />
          <span className="pro-user-name ms-2">
            {props.username} <i className="uil uil-angle-down"></i>
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-end profile-dropdown">
          <div onClick={toggleDropdown}>
            <div className="dropdown-header noti-title">
              <h6 className="text-overflow m-0">Welcome !</h6>
            </div>
            {(props.menuItems || []).map((item, i) => {
              return (
                <React.Fragment key={i}>
                  {i === props.menuItems.length - 1 && (
                    <div className="dropdown-divider"></div>
                  )}
                  {item.redirectTo === 'profile' ?
                    <div className="dropdown-item notify-item" style={{ cursor: 'pointer' }} onClick={toggle} >
                      <FeatherIcon
                        icon={item.icon}
                        className="icon-dual icon-xs me-1"
                      />
                      <span>{item.label}</span>
                    </div>
                    :
                    <Link
                      to={item.redirectTo}
                      className="dropdown-item notify-item"
                      key={i + "-profile-menu"}
                    >
                      <FeatherIcon
                        icon={item.icon}
                        className="icon-dual icon-xs me-1"
                      />
                      <span>{item.label}</span>
                    </Link>}

                </React.Fragment>
              );
            })}
          </div>
        </Dropdown.Menu>
      </Dropdown>
      <Offcanvas show={show} onHide={toggle} placement='end' responsive="lg" style={{ width: '40%' }}>
        <Offcanvas.Header closeButton>
          <h5 id="offcanvasTopLabel">Profile</h5>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="card mx-0">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" style={{ width: '55px' }} />
                <div className="mt-1">
                  <h4>Mohamed Amine</h4>
                  <p className="text-secondary ">Center Bouknadel</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-5">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-7 text-secondary">
                    Mohamed Amine
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-5">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-7 text-secondary">
                    psy@gmail.com
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-5">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-7 text-secondary">
                    0648454733
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-5">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-7 text-secondary">
                    sale errahma
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12 d-flex justify-content-end">
                    <button className="button rounded" style={{backgroundColor:'orange'}}>Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ProfileDropdown;
