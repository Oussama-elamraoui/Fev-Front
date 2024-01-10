import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './newtest.css'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import PreviewIcon from '@mui/icons-material/Preview';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Divider } from '@material-ui/core'
import Box from '@mui/material/Box';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
interface BreadcrumbItems {
  label: string;
  path: string;
  active?: boolean;
}

interface PageTitleProps {
  breadCrumbItems: Array<BreadcrumbItems>;
  title: string;
}

/**
 * PageTitle
 */
const PageTitle = (props: PageTitleProps) => {
  return (
    <>
      <Row>
        <Col>
          <div className="page-title-box">
            <h4 className="page-title">{props.title}</h4>
            <div className="page-title-right">
              <Breadcrumb listProps={{ className: "m-0" }}>
                <Breadcrumb.Item href="/">Shreyu</Breadcrumb.Item>

                {(props.breadCrumbItems || []).map((item, index) => {
                  return item.active ? (
                    <Breadcrumb.Item active key={index}>
                      {item.label}
                    </Breadcrumb.Item>
                  ) : (
                    <Breadcrumb.Item key={index} href={item.path}>
                      {item.label}
                    </Breadcrumb.Item>
                  );
                })}
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>
      {/* <div className="container py-5">
        <div className="main-timeline-4 text-white">
          <div className="timeline-4 left-4">
            <div className="card gradient-custom">
              <div className="card-body p-4">
                <i className="fas fa-brain fa-2x mb-3"></i>
                <h4>7:45PM</h4>
                <p className="small text-white-50 mb-4">May 21</p>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                  mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                  dignissim
                  per, habeo iusto primis ea eam.
                </p>
                <h6 className="badge bg-light text-black mb-0">New</h6>
                <h6 className="badge bg-light text-black mb-0">Admin</h6>
              </div>
            </div>
          </div>
          <div className="timeline-4 right-4">
            <div className="card gradient-custom-4">
              <div className="card-body p-4">
                <i className="fas fa-camera fa-2x mb-3"></i>
                <h4>8:00 AM</h4>
                <p className="small text-white-50 mb-4">May 18</p>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                  mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                  dignissim
                  per, habeo iusto primis ea eam.
                </p>
                <h6 className="badge bg-light text-black mb-0">New</h6>
                <h6 className="badge bg-light text-black mb-0">Admin</h6>
              </div>
            </div>
          </div>
          <div className="timeline-4 left-4">
            <div className="card gradient-custom">
              <div className="card-body p-4">
                <i className="fas fa-campground fa-2x mb-3"></i>
                <h4>7:25 PM</h4>
                <p className="small text-white-50 mb-4">May 6</p>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                  mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                  dignissim
                  per, habeo iusto primis ea eam.
                </p>
                <h6 className="badge bg-light text-black mb-0">New</h6>
                <h6 className="badge bg-light text-black mb-0">Admin</h6>
              </div>
            </div>
          </div>
          <div className="timeline-4 right-4">
            <div className="card gradient-custom-4">
              <div className="card-body p-4">
                <i className="fas fa-sun fa-2x mb-3"></i>
                <h4>3:55 PM</h4>
                <p className="small text-white-50 mb-4">Apr 26</p>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                  mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                  dignissim
                  per, habeo iusto primis ea eam.
                </p>
                <h6 className="badge bg-light text-black mb-0">New</h6>
                <h6 className="badge bg-light text-black mb-0">Admin</h6>
              </div>
            </div>
          </div>
          <div className="timeline-4 left-4">
            <div className="card gradient-custom">
              <div className="card-body p-4">
                <i className="fas fa-palette fa-2x mb-3"></i>
                <h4>5:24 PM</h4>
                <p className="small text-white-50 mb-4">Apr 12</p>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                  mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                  dignissim
                  per, habeo iusto primis ea eam.
                </p>
                <h6 className="badge bg-light text-black mb-0">New</h6>
                <h6 className="badge bg-light text-black mb-0">Admin</h6>
              </div>
            </div>
          </div>
          <div className="timeline-4 right-4">
            <div className="card gradient-custom-4">
              <div className="card-body p-4">
                <i className="fas fa-laugh-beam fa-2x mb-3"></i>
                <h4>11:25 AM</h4>
                <p className="small text-white-50 mb-4">Apr 11</p>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                  mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                  dignissim
                  per, habeo iusto primis ea eam.
                </p>
                <h6 className="badge bg-light text-black mb-0">New</h6>
                <h6 className="badge bg-light text-black mb-0">Admin</h6>
              </div>
            </div>
          </div>
          <div className="timeline-4 left-4">
            <div className="card gradient-custom">
              <div className="card-body p-4">
                <i className="fas fa-pizza-slice fa-2x mb-3"></i>
                <h4>12:30 PM</h4>
                <p className="small text-white-50 mb-4">Apr 5</p>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                  mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                  dignissim
                  per, habeo iusto primis ea eam.
                </p>
                <h6 className="badge bg-light text-black mb-0">New</h6>
                <h6 className="badge bg-light text-black mb-0">Admin</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h4>Timeline Style : Demo-2</h4>
        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline2">
              <div className="timeline">
                <span className="icon fa fa-globe">
                </span>
                <div className="timeline-content">
                  <h3 className="title">Assistant social</h3>

                  <div className="d-flex justify-content-center">
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '70%',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,

                        color: 'white',
                        '& svg': {
                          m: 1.5,
                        },
                        '& hr': {
                          mx: 0.5,
                        },
                      }}
                    >
                      <DoneAllIcon />
                      <CheckBoxIcon />
                      <Divider orientation="vertical" flexItem />
                      <div >
                        <CheckIcon />
                        <PreviewIcon />
                      </div>
                    </Box>
                  </div>
                  <div className="d-flex align-items-center" style={{ marginLeft: 20, marginTop:15 }}>
                    <CalendarMonthIcon />
                    <div>
                      20-07-2023 11:30
                    </div>
                  </div>

                </div>
              </div>
              <div className="timeline">
                <span className="icon ">
                  <MedicalServicesIcon ></MedicalServicesIcon>
                </span>
                <div className="timeline-content">
                  <h3 className="title">Medcin</h3>

                  <div className="d-flex justify-content-center">
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,

                        color: 'white',
                        '& svg': {
                          m: 1.5,
                        },
                        '& hr': {
                          mx: 0.5,
                        },
                      }}
                    >
                      <CheckIcon />
                      <DoneAllIcon />
                      <Divider orientation="vertical" flexItem />
                      <div >
                        
                        <PreviewIcon />
                      </div>
                    </Box>
                  </div>
                  <div className="d-flex align-items-center" style={{ marginLeft: 20, marginTop:15 }}>
                    <CalendarMonthIcon />
                    <div>
                      20-07-2023 11:30
                    </div>
                  </div>

                </div>
              </div>
              <div className="timeline">
                <span className="icon">
                  <PsychologyAltIcon ></PsychologyAltIcon>
                </span>
                <div className="timeline-content">
                  <h3 className="title">Psychologue</h3>

                  <div className="d-flex justify-content-center">
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '70%',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,

                        color: 'white',
                        '& svg': {
                          m: 1.5,
                        },
                        '& hr': {
                          mx: 0.5,
                        },
                      }}
                    >
                      <DoneAllIcon />
                      <CheckBoxIcon />
                      <Divider orientation="vertical" flexItem />
                      <div >
                        <CheckIcon />
                        <PreviewIcon />
                      </div>
                    </Box>
                  </div>
                  <div className="d-flex align-items-center" style={{ marginLeft: 20, marginTop:15 }}>
                    <CalendarMonthIcon />
                    <div>
                      20-07-2023 11:30
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <span className="icon fa fa-mobile"></span>
                <div className="timeline-content">
                  <h3 className="title">Medcin</h3>

                  <div className="d-flex justify-content-center">
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '70%',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,

                        color: 'white',
                        '& svg': {
                          m: 1.5,
                        },
                        '& hr': {
                          mx: 0.5,
                        },
                      }}
                    >
                      <DoneAllIcon />
                      <CheckBoxIcon />
                      <Divider orientation="vertical" flexItem />
                      <div >
                        <CheckIcon />
                        <PreviewIcon />
                      </div>
                    </Box>
                  </div>
                  <div className="d-flex align-items-center" style={{ marginLeft: 20, marginTop:15 }}>
                    <CalendarMonthIcon />
                    <div>
                      20-07-2023 11:30
                    </div>
                  </div>

                </div>
              </div>
              <div className="timeline">
                <span className="icon fa fa-briefcase"></span>
                <div className="timeline-content">
                  <h3 className="title">Medcin</h3>

                  <div className="d-flex justify-content-center">
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '70%',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,

                        color: 'white',
                        '& svg': {
                          m: 1.5,
                        },
                        '& hr': {
                          mx: 0.5,
                        },
                      }}
                    >
                      <DoneAllIcon />
                      <CheckBoxIcon />
                      <Divider orientation="vertical" flexItem />
                      <div >
                        <CheckIcon />
                        <PreviewIcon />
                      </div>
                    </Box>
                  </div>
                  <div className="d-flex align-items-center" style={{ marginLeft: 20, marginTop:15 }}>
                    <CalendarMonthIcon />
                    <div>
                      20-07-2023 11:30
                    </div>
                  </div>

                </div>
              </div>
              <div className="timeline">
                <span className="icon fa fa-briefcase"></span>
                <div className="timeline-content">
                  <h3 className="title">Medcin</h3>

                  <div className="d-flex justify-content-center">
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '70%',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,

                        color: 'white',
                        '& svg': {
                          m: 1.5,
                        },
                        '& hr': {
                          mx: 0.5,
                        },
                      }}
                    >
                      <DoneAllIcon />
                      <CheckBoxIcon />
                      <Divider orientation="vertical" flexItem />
                      <div >
                        <CheckIcon />
                        <PreviewIcon />
                      </div>
                    </Box>
                  </div>
                  <div className="d-flex align-items-center" style={{ marginLeft: 20, marginTop:15 }}>
                    <CalendarMonthIcon />
                    <div>
                      20-07-2023 11:30
                    </div>
                  </div>

                </div>
              </div>
              <div className="timeline">
                <span className="icon fa fa-briefcase"></span>
                <div className="timeline-content">
                  <h3 className="title">Medcin</h3>

                  <div className="d-flex justify-content-center">
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '70%',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,

                        color: 'white',
                        '& svg': {
                          m: 1.5,
                        },
                        '& hr': {
                          mx: 0.5,
                        },
                      }}
                    >
                      <DoneAllIcon />
                      <CheckBoxIcon />
                      <Divider orientation="vertical" flexItem />
                      <div >
                        <CheckIcon />
                        <PreviewIcon />
                      </div>
                    </Box>
                  </div>
                  <div className="d-flex align-items-center" style={{ marginLeft: 20, marginTop:15 }}>
                    <CalendarMonthIcon />
                    <div>
                      20-07-2023 11:30
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h4>Timeline Style : Demo-3</h4>
        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline3">
              <div className="timeline">
                <a href="#" className="timeline-content">
                  <span className="year">2018</span>
                  <h3 className="title">Web Designer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="#" className="timeline-content">
                  <span className="year">2017</span>
                  <h3 className="title">Web Developer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="#" className="timeline-content">
                  <span className="year">2016</span>
                  <h3 className="title">Web Designer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="#" className="timeline-content">
                  <span className="year">2015</span>
                  <h3 className="title">Web Developer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h4>Timeline Style : Demo-5</h4>
        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline5">
              <div className="timeline">
                <div className="timeline-icon"><span className="year">2018</span></div>
                <div className="timeline-content">
                  <h3 className="title">Web Desginer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                  </p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon"><span className="year">2017</span></div>
                <div className="timeline-content">
                  <h3 className="title">Web Developer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                  </p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon"><span className="year">2016</span></div>
                <div className="timeline-content">
                  <h3 className="title">Web Desginer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                  </p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon"><span className="year">2015</span></div>
                <div className="timeline-content">
                  <h3 className="title">Web Developer</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default PageTitle;
