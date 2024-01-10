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
import Chip from '@mui/material/Chip';
// import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Header, Card, Divider, Image, Placeholder, Reveal, Icon, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

interface Column {
    id: 'id' | 'patient' | 'dateCreation' | 'ONG' | 'Status';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'id', label: 'id', align: "right" },
    { id: 'patient', label: 'Patient', align: "right" },
    { id: 'dateCreation', label: 'dateCreation', align: "right" },
    { id: 'ONG', label: 'ONG', align: "right" },
    { id: 'Status', label: 'status', align: "right" },
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
const PriseEnCharge = () => {
    const [open, setOpen] = React.useState(false)
    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return width;
        ;
    }
    const rows = [
        { id: 1, patient: 'femme', dateCreation: "20/05/2024 10:10", ONG: 'ONG 1', Status: null },
        { id: 1, patient: 'femme', dateCreation: "20/05/2024 10:10", ONG: 'ONG 2', Status: null },
        { id: 1, patient: 'femme', dateCreation: "20/05/2024 10:10", ONG: 'ONG 1', Status: 'Rejected' },
        { id: 1, patient: 'femme', dateCreation: "20/05/2024 10:10", ONG: 'ONG 1', Status: 'Acceptable' },
        { id: 1, patient: 'femme', dateCreation: "20/05/2024 10:10", ONG: 'ONG 3', Status: null },
        { id: 1, patient: 'femme', dateCreation: "20/05/2024 10:10", ONG: 'ONG 1', Status: null },
        { id: 1, patient: 'enfant', dateCreation: "20/05/2024 10:10", ONG: 'ONG 2', Status: 'Rejected' },
        { id: 1, patient: 'femme', dateCreation: "20/05/2024 10:10", ONG: 'ONG 2', Status: 'Acceptable' },
        { id: 1, patient: 'enfant', dateCreation: "20/05/2024 10:10", ONG: 'ONG 1', Status: null },
        { id: 1, patient: 'femme', dateCreation: "20/05/2024 10:10", ONG: 'ONG 4', Status: null },
        { id: 1, patient: 'femme', dateCreation: "20/05/2024 10:10", ONG: 'ONG 1', Status: 'Rejected' },
        { id: 1, patient: 'enfant', dateCreation: "20/05/2024 10:10", ONG: 'ONG 1', Status: 'Acceptable' },

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
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id} style={{ backgroundColor: row['Status'] === 'Rejected' ? '#fff0ee' : '' }}>
                                            {columns.map((column) => {

                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align='center'>
                                                        {/* {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value} */}
                                                        {column.id === 'Status' ? value === null && <AccessTimeIcon sx={{ color: 'red' }}  ></AccessTimeIcon> || value === 'Acceptable' && <Chip label="Accepted" style={{ backgroundColor: "#d5fbec", color: '#07be76' }} /> || value === 'Rejected' && <Chip label="Rejected" style={{ backgroundColor: "#fda99c", color: '#ff4a2e' }} /> : value}

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
export default PriseEnCharge;