import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import woman from '../../../../assets/images/woman_921018.png'
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './style.css'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
interface Column {
  id: 'reciever' | 'patient' | 'type' | 'date_declaration' | 'read_at';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'reciever', label: 'Receiver', align: "right" },
  { id: 'patient', label: 'Patient', align: "right" },
  { id: 'type', label: 'Type', align: "right" },
  { id: 'date_declaration', label: 'Declaration Date', align: "right" },
  { id: 'read_at', label: 'Read Date', align: "right" },
];
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
const Modalhandle = (show: boolean, handleClose: any) => {
  <Modal
    keepMounted
    open={show}
    onClose={handleClose}
    aria-labelledby="keep-mounted-modal-title"
    aria-describedby="keep-mounted-modal-description"
  >
    <Box sx={style}>

    </Box>
  </Modal>

}
const Notification = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showPatient, setShowPatient] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClosePatient = () => setShowPatient(false);
  const handleShowPatient = () => setShowPatient(true);
  const rows = [
    { id: 1, reciever: <VisibilityIcon style={{ width: '20px', cursor: 'pointer' }} onClick={handleShow}></VisibilityIcon>, patient: <VisibilityIcon style={{ width: '20px' ,cursor:'pointer'}} onClick={handleShowPatient}></VisibilityIcon>, type: 'femme', date_declaration: "20/05/2024 10:10", read_at: null },
    { id: 1, reciever: <VisibilityIcon style={{ width: '20px' }}></VisibilityIcon>, patient: <VisibilityIcon style={{ width: '20px' }}></VisibilityIcon>, type: 'femme', date_declaration: "20/05/2024 10:10", read_at: null },
    { id: 1, reciever: <VisibilityIcon style={{ width: '20px' }}></VisibilityIcon>, patient: <VisibilityIcon style={{ width: '20px' }}></VisibilityIcon>, type: 'femme', date_declaration: "20/05/2024 10:10", read_at: "20/06/2023 9:24" },
    { id: 1, reciever: <VisibilityIcon style={{ width: '20px' }}></VisibilityIcon>, patient: <VisibilityIcon style={{ width: '20px' }}></VisibilityIcon>, type: 'femme', date_declaration: "20/05/2024 10:10", read_at: null },
    { id: 1, reciever: <VisibilityIcon style={{ width: '20px' }}></VisibilityIcon>, patient: <VisibilityIcon style={{ width: '20px' }}></VisibilityIcon>, type: 'femme', date_declaration: "20/05/2024 10:10", read_at: "13/06/2023 14:24" },
    { id: 1, reciever: <VisibilityIcon style={{ width: '20px' }}></VisibilityIcon>, patient: <VisibilityIcon style={{ width: '20px' }}></VisibilityIcon>, type: 'femme', date_declaration: "20/05/2024 10:10", read_at: "10/06/2024 10:24" }

  ]
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
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
                <div className="thumb-lg member-thumb mx-auto"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle img-thumbnail" alt="profile-image" /></div>
                <div className="">
                  <h4>Psychologue</h4>
                  <p className="text-muted">@email <span>| </span><span><a href="#" className="text-pink">psy@gmail.com</a></span></p>
                </div>
                {/* <ul className="social-links list-inline">
                  <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a></li>
                  <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Skype"><i className="fa fa-skype"></i></a></li>
                </ul> */}
                <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Message Now</button>
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
      <Modal
        keepMounted
        open={showPatient}
        onClose={handleClosePatient}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
          <div className="row">
            <div className="text-center card-box">
              <div className="member-card pb-2">
                <div className="thumb-lg member-thumb mx-auto"><img src={woman} className="rounded-circle img-thumbnail" alt="profile-image" /></div>
                <div className="">
                  <h4>fatima baala</h4>
                  <p className="text-muted">@email <span>| </span><span><a href="#" className="text-pink">psy@gmail.com</a></span></p>
                </div>
                {/* <ul className="social-links list-inline">
                  <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a></li>
                  <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Skype"><i className="fa fa-skype"></i></a></li>
                </ul> */}
                {/* <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Message Now</button> */}
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
      <Paper sx={{ width: '100%' }} className='mt-2'>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Details
                </TableCell>
              </TableRow>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align='center'
                    style={{ backgroundColor: '#ec9027', fontWeight: 'bold', color: 'white' }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id} style={{ backgroundColor: row['read_at'] === null ? '#ebebeb' : '' }}>
                      {columns.map((column) => {

                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align='center'>
                            {/* {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value} */}
                            {column.id === 'read_at' ? value === null ? <AccessTimeIcon sx={{ color: 'red' }}  ></AccessTimeIcon> : value : value}

                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

    </>
  )

}
export default Notification;