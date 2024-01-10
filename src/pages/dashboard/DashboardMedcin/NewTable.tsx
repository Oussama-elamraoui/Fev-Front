import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// types
import { MultiSelect } from "react-multi-select-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad, faRmb, faTimeline } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from "react-bootstrap";
import 'reactjs-popup/dist/index.css';
import Table from "../../../components/Table"
import { OrdersItemTypes } from "./data";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { MultiSelect } from 'primereact/multiselect';
// import Select from "react-select";
import 'primereact/resources/themes/saga-blue/theme.css'; // Choose a theme that suits your project
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import PreviewIcon from '@mui/icons-material/Preview';
import Multiselect from 'multiselect-react-dropdown';
import FileUploader from "./FileUploader";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './style.css';
import Picky from 'react-picky';
import 'react-picky/dist/picky.css';
import Profile from './ProfileVictime'
import { string } from "yup";
const columns = [
  {
    Header: "ID",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Nom",
    accessor: "nom",
    sort: true,
  },
  {
    Header: "Address",
    accessor: "address",
    sort: false,
  },
  {
    Header: "Telephone",
    accessor: "Telephone",
    sort: false,
  },
  {
    Header: "CIN",
    accessor: "cin",
    sort: false,
  },
  {
    Header: "Road map",
    accessor: "roadmap",
    sort: false,
  },
  {
    Header: "Formulaire",
    accessor: "formulaire",
    sort: false,
  },

]


interface OrdersProps {
  orderDetails: OrdersItemTypes[];
}

const fileTypes = ["JPG", "PNG", "GIF"];
const style = {
  // height:'70%',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  maxHeight: '90%', // Set the maximum height for the scrollable box
  overflowY: 'auto',
  borderRadius: 5,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
const styleProfile = {
  // height:'70%',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxHeight: '90%', // Set the maximum height for the scrollable box
  overflowY: 'auto',
  borderRadius: 5,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
const serviceProdigue = [
  { "service": "Orientation vers une association spécialisé", "serviceAR": "توجيه نحو جمعية متخصصة في محاربة العنف" },
  { "service": "Signalement", "serviceAR": "التبليغ القضائي" },
  { "service": "Suivi psychologique", "serviceAR": "متابعة نفسية" },
  { "service": "Contraception d'urgence", "serviceAR": "حبوب المنع الاستعجالي للحمل" },
  { "service": "Traitement préventif contre les MST", "serviceAR": "العلاج الوقائي ضد الأمراض المتنقلة جنسيا" },
  { "service": "Sensibilisation contre la violence", "serviceAR": "الاستفادة من الأنشطة التحسيسية حول العنف" },
  { "service": "Orientation vers UPECFEVV au niveau de CHP", "serviceAR": "توجيه نحو وحدة التكفل بالنساء و الأطفال ضحايا العنف بالمستشفى" },
  { "service": "Soins primaires", "serviceAR": "علاجات اولية" }
];
const serviceHospitalier = [
  { "service": "Examens biologiques", "serviceAR": "طب البيولوجيا" },
  { "service": "Examens radiologiques", "serviceAR": "طب الأشعة" },
  { "service": "Soins préventifs", "serviceAR": "لدواعي حمائية" },
  { "service": "Soins médicaux", "serviceAR": "لدواعي طبية" }
];
const certificatMedial = [
  { "service": "Certificats sans repos", "serviceAR": "شهادة طبية بدون أيام" },
  { "service": "Certificat avec repos moins de 8 jours", "serviceAR": "اقل من 8 أيام" },
  { "service": "Certificat avec repos entre 8 a 21 jours", "serviceAR": "بين 8 و 21 يوم" },
  { "service": "Certificat avec repos plus de 21 jours", "serviceAR": "اكثر من 21 يوم" }
];                                                                                                                                                                        
const etablissement = [
  { "service": "Espaces multidisciplinaires", "serviceAR": "فضاءات متعددة الاختصاصات" },
  { "service": "Court de justice", "serviceAR": "المحكمة" },
  { "service": "La gendarmerie royal", "serviceAR": "الدرك الملكي" },
  { "service": "La police", "serviceAR": "الشرطة" }
];
interface Traduction {
  service: string,
  serviceAR: string,
}
const NewTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenProfile, setIsModalOpenProfile] = useState(false);
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [serviceProdigueFr, setserviceProdigueFr] = React.useState<string[]>([]);
  const [serviceProdigueAr, setserviceProdigueAr] = React.useState<string[]>([]);
  const [files, setFile] = useState<File[]>([]);

  const [message, setMessage] = useState('');
  const handleFile = (e: any) => {
    setMessage("cc");
    let file = e.target.files;

    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]['type'];
      const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file[i]]);
      } else {
        setMessage("only images accepted");
      }

    }



  };
  const removeImage = (i: any) => {
    setFile(files.filter(x => x.name !== i));
  }
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    let item = serviceProdigue.filter((item) => {
      return (
        item.service == value
      )
    })
    console.log(item)
    let valueAr = item[0].serviceAR;
    let valueFr = item[0].service;
    setserviceProdigueAr(
      // On autofill we get a stringified value.
      typeof valueAr === 'string' ? valueAr.split(',') : valueAr,
    );
    setserviceProdigueFr(
      // On autofill we get a stringified value.
      typeof valueFr === 'string' ? valueFr.split(',') : valueFr,
    );
  };
  // const handleChange = (file: File) => {
  //   setFile(file);
  // };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModalProfile = () => {
    setIsModalOpenProfile(true);
  };
  const closeModalProfile = () => {
    setIsModalOpenProfile(false);
  };
  const data = [
    { nom: 'Jack', Telephone: '062840', cin: 'TA1478', roadmap: <Button onClick={openModalProfile} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, formulaire: <Button style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }} onClick={openModal}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, address: '30 oqba rabat', key: '1' },
    { nom: 'Rose', Telephone: '062840', cin: 'TA25367', roadmap: <Button onClick={openModalProfile} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, formulaire: <Button style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, address: '30 oqba rabat', key: '2' },
    { nom: 'Rose', Telephone: '062840', cin: 'TA25367', roadmap: <Button onClick={openModalProfile} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, formulaire: <Button onClick={openModal} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, address: '30 oqba rabat', key: '3' },
    { nom: 'Rose', Telephone: '062840', cin: 'TA25367', roadmap: <Button onClick={openModalProfile} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, formulaire: <Button onClick={openModal} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, address: '30 oqba rabat', key: '4' },
    { nom: 'Rose', Telephone: '062840', cin: 'TA25367', roadmap: <Button onClick={openModalProfile} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, formulaire: <Button onClick={openModal} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, address: '30 oqba rabat', key: '5' },
    { nom: 'Rose', Telephone: '062840', cin: 'TA25367', roadmap: <Button onClick={openModalProfile} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, formulaire: <Button onClick={openModal} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, address: '30 oqba rabat', key: '6' },
    { nom: 'Rose', Telephone: '062840', cin: 'TA25367', roadmap: <Button onClick={openModalProfile} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, formulaire: <Button onClick={openModal} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, address: '30 oqba rabat', key: '7' },
    { nom: 'Rose', Telephone: '062840', cin: 'TA25367', roadmap: <Button onClick={openModalProfile} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, formulaire: <Button onClick={openModal} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, address: '30 oqba rabat', key: '8' },
    { nom: 'Rose', Telephone: '062840', cin: 'TA25367', roadmap: <Button onClick={openModalProfile} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, formulaire: <Button onClick={openModal} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, address: '30 oqba rabat', key: '8' },
    { nom: 'Rose', Telephone: '062840', cin: 'TA25367', roadmap: <Button onClick={openModalProfile} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, formulaire: <Button onClick={openModal} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, address: '30 oqba rabat', key: '9' },
    { nom: 'Rose', Telephone: '062840', cin: 'TA25367', roadmap: <Button onClick={openModalProfile} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, formulaire: <Button onClick={openModal} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, address: '30 oqba rabat', key: '10' },
    { nom: 'Rose', Telephone: '062840', cin: 'TA25367', roadmap: <Button onClick={openModalProfile} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, formulaire: <Button onClick={openModal} style={{ backgroundColor: 'white', border: '0px', marginLeft: 20 }}><VisibilityIcon sx={{ color: 'gray' }} /></Button>, address: '30 oqba rabat', key: '11' },
  ];
  const sizePerPageList = [
    {
      text: "5",
      value: 5,
    },
    {
      text: "10",
      value: 10,
    },
    {
      text: "25",
      value: 25,
    },
    {
      text: "All",
      value: data.length,
    },
  ];

  const ModalComponent = () => {

    interface Option {
      label: string;
      value: string;
      disabled?: boolean;
    }

    let optionsAR: Option[] = [];
    serviceProdigue.map(item => (optionsAR.push({ value: item.serviceAR, label: item.serviceAR })));
    const optionsFR = serviceProdigue.map(item => ({ value: item.service, label: item.service }));
    const [selectedAR, setSelectedAR] = useState<Option[]>([]);
    const [selectedFR, setSelectedFR] = useState<Option[]>([]);

    const handleSelectARChange = (selectedOptions: any) => {
      console.log(selectedOptions[selectedOptions.length - 1])
      let test = serviceProdigue.filter((s) => {
        return (s.serviceAR == selectedOptions[selectedOptions.length - 1].value)
      })
      setSelectedAR(selectedOptions);
      test.length && (selectedFR.push({ value: test[0].service, label: test[0].service }));
      // setSelectedFR(selectedFRValues);
      console.log(selectedFR)
    };

    const handleSelectFRChange = (selectedOptions: any) => {
      setSelectedFR(selectedOptions);
      // const selectedARValues = selectedOptions.map(option => optionsAR.find(arOption => arOption.label === option.value));
      // setSelectedAR(selectedARValues);
    };

    const handleServiceProdigueFr=(e:any)=>{
      let help : string[]=[];
      const temp = e.target.value;
      console.log(temp)
      setSelectedServiceProdigueFr(e.target.value)
      temp.map((item:any)=>{
          let vr=serviceProdigue.filter((it)=>{
            return(
              it.service===item
            )
          })
          help.push(vr[0].serviceAR)
      })
      setSelectedServiceProdigueAr(help)
    } 
    const handleServiceProdigueAr=(e:any)=>{
      let help : string[]=[];
      const temp = e.target.value;
      
      setSelectedServiceProdigueAr(e.target.value)
      temp.map((item:any)=>{
          let vr=serviceProdigue.filter((it)=>{
            return(
              it.serviceAR===item
            )
          })
          help.push(vr[0].service)
      })
      setSelectedServiceProdigueFr(help)
    } 
    const [selectedServiceProdigueFr, setSelectedServiceProdigueFr] = useState<string[]>([]);
    const [selectedServiceProdigueAr, setSelectedServiceProdigueAr] = useState<string[]>([]);
    const [selectedserviceHospitalierFr, setSelectedserviceHospitalierFr] = useState<string[]>([]);
    const [selectedServiceHospitalierAr, setSelectedServiceHospitalierAr] = useState<string[]>([]);
    const handleserviceHospitalierFr=(e:any)=>{
      let help : string[]=[];
      const temp = e.target.value;
      setSelectedserviceHospitalierFr(e.target.value)
      temp.map((item:any)=>{
          let vr=serviceHospitalier.filter((it)=>{
            return(
              it.service===item
            )
          })
          help.push(vr[0].serviceAR)
      })
      setSelectedServiceHospitalierAr(help)

    }
    const handleserviceHospitalierAr=(e:any)=>{
      let help : string[]=[];
      const temp = e.target.value;
      setSelectedServiceHospitalierAr(e.target.value);
      temp.map((item:any)=>{
          let vr=serviceHospitalier.filter((it)=>{
            return(
              it.serviceAR===item
            )
          })
          help.push(vr[0].service);
      })
      setSelectedserviceHospitalierFr(help);
    }
    const [selectedcertificatMedialFr, setSelectedcertificatMedialFr] = useState<string[]>([]);
    const [selectedcertificatMedialAr, setSelectedcertificatMedialAr] = useState<string[]>([]);
    const handlecertificatMedialFr=(e:any)=>{
      let help : string[]=[];
      const temp = e.target.value;
      setSelectedcertificatMedialFr(e.target.value)
      temp.map((item:any)=>{
          let vr=certificatMedial.filter((it)=>{
            return(
              it.service.trim()===item.trim()
            )
          })
          vr.length && help.push(vr[0].serviceAR)
      })
      setSelectedcertificatMedialAr(help)

    }
    const handlecertificatMedialAr=(e:any)=>{
      let help : string[]=[];
      const temp = e.target.value;
      setSelectedcertificatMedialAr(e.target.value);
      temp.map((item:any)=>{
          let vr=certificatMedial.filter((it)=>{
            return(
              it.serviceAR===item
            )
          })
          help.push(vr[0].service);
      })
      setSelectedcertificatMedialFr(help);
    }
    const [selectedetablissementFr, setSelectedetablissementFr] = useState<string[]>([]);
    const [selectedetablissementAr, setSelectedetablissementAr] = useState<string[]>([]);
    const handleetablissementFr=(e:any)=>{
      let help : string[]=[];
      const temp = e.target.value;
      setSelectedetablissementFr(e.target.value)
      temp.map((item:any)=>{
          let vr=etablissement.filter((it)=>{
            return(
              it.service.trim()===item.trim()
            )
          })
          vr.length && help.push(vr[0].serviceAR)
      })
      setSelectedetablissementAr(help)

    }
    const handleetablissementAr=(e:any)=>{
      let help : string[]=[];
      const temp = e.target.value;
      setSelectedetablissementAr(e.target.value);
      temp.map((item:any)=>{
          let vr=etablissement.filter((it)=>{
            return(
              it.serviceAR===item
            )
          })
          help.push(vr[0].service);
      })
      setSelectedetablissementFr(help);
    }
    return (
      <Modal
        keepMounted
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title justify-content-center" variant="h6" component="h1" pl={"40%"} style={{ backgroundColor: 'orange', color: 'white', borderRadius: 10, height: 35 }}>
            Bienvenue!
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>

            <div className="d-flex justify-content-between mt-2 mb-2">
              <div className="col-sm-5 ">
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">Services prodigués</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={selectedServiceProdigueFr}
                    onChange={(e)=>handleServiceProdigueFr(e)}
                    input={<OutlinedInput label="Services hospitalier" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {serviceProdigue.map((item) => (
                      <MenuItem key={item.service} value={item.service}>
                        <Checkbox checked={selectedServiceProdigueFr.indexOf(item.service) > -1} />
                        <ListItemText primary={item.service} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl></div>
              <div className="col-sm-5 ">
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label"> الخدمات المقدمة</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={selectedServiceProdigueAr}
                    onChange={(e)=>{handleServiceProdigueAr(e)}}
                    input={<OutlinedInput label="استشفاء" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {serviceProdigue.map((item) => (
                      <MenuItem key={item.serviceAR} value={item.serviceAR}>
                        <Checkbox checked={selectedServiceProdigueAr.indexOf(item.serviceAR) > -1} />
                        <ListItemText primary={item.serviceAR} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl></div>
            </div>
            <div className="d-flex justify-content-between mt-2 mb-2">
              <div className="col-sm-5 ">
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">Services hospitalier</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={selectedserviceHospitalierFr}
                    onChange={(e)=>handleserviceHospitalierFr(e)}
                    input={<OutlinedInput label="Services hospitalier" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {serviceHospitalier.map((item) => (
                      <MenuItem key={item.service} value={item.service}>
                        <Checkbox checked={selectedserviceHospitalierFr.indexOf(item.service) > -1} />
                        <ListItemText primary={item.service} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl></div>
              <div className="col-sm-5 ">
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">استشفاء</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={selectedServiceHospitalierAr}
                    onChange={(e)=>handleserviceHospitalierAr(e)}
                    input={<OutlinedInput label="استشفاء" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {serviceHospitalier.map((item) => (
                      <MenuItem key={item.serviceAR} value={item.serviceAR}>
                        <Checkbox checked={selectedServiceHospitalierAr.indexOf(item.serviceAR) > -1} />
                        <ListItemText primary={item.serviceAR} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl></div>
            </div>
            <div className="d-flex justify-content-between mt-2 mb-2">
              <div className="col-sm-5 ">
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">Délivrance d'un CM</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={selectedcertificatMedialFr}
                    onChange={(e)=>{handlecertificatMedialFr(e)}}
                    input={<OutlinedInput label="Délivrance d'un CM" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {certificatMedial.map((item) => (
                      <MenuItem key={item.service} value={item.service}>
                        <Checkbox checked={selectedcertificatMedialFr.indexOf(item.service) > -1} />
                        <ListItemText primary={item.service} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl></div>
              <div className="col-sm-5 ">
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">تسليم شهادة طبية</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={selectedcertificatMedialAr}
                    onChange={(e)=>handlecertificatMedialAr(e)}
                    input={<OutlinedInput label="تسليم شهادة طبية" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {certificatMedial.map((item) => (
                      <MenuItem key={item.serviceAR} value={item.serviceAR}>
                        <Checkbox checked={selectedcertificatMedialAr.indexOf(item.serviceAR) > -1} />
                        <ListItemText primary={item.serviceAR} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl></div>
            </div>
            <div className="d-flex justify-content-between mt-2 mb-2">
              <div className="col-sm-5 ">
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">Orientation vers d'autres établissement</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={selectedetablissementFr}
                    onChange={(e)=>handleetablissementFr(e)}
                    input={<OutlinedInput label="Orientation vers d'autres établissement" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {etablissement.map((item) => (
                      <MenuItem key={item.service} value={item.service}>
                        <Checkbox checked={selectedetablissementFr.indexOf(item.service) > -1} />
                        <ListItemText primary={item.service} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl></div>
              <div className="col-sm-5 ">
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">توجيه نحو مصالح خارجية</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={selectedetablissementAr}
                    onChange={(e)=>{handleetablissementAr(e)}}
                    input={<OutlinedInput label="توجيه نحو مصالح خارجية" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {etablissement.map((item) => (
                      <MenuItem key={item.serviceAR} value={item.serviceAR}>
                        <Checkbox checked={selectedetablissementAr.indexOf(item.serviceAR) > -1} />
                        <ListItemText primary={item.serviceAR} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl></div>
            </div>
            {/* <div className="h-100 d-flex align-items-center justify-content-center">
              <FileUploader handleChange={handleChange} name="file" types={fileTypes} children={<div className="upload">
                < p > Drag files here or <span className="upload__button">Browse</span></p></div>} onDrop={(file: File) => console.log(file)} />
            </div> */}

            {/* <form className="file-upload-form">
              <label htmlFor="file" className="file-upload-label">
                <div className="file-upload-design">
                  <svg viewBox="0 0 640 512" height="1em">
                    <path
                      d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                    ></path>
                  </svg>
                  <p>Drag and Drop</p>
                  <p>or</p>
                  <span className="browse-button">Browse file</span>
                </div>

              </label>
            </form> */}
            <FileUploader></FileUploader>
          </Typography>
        </Box >
      </Modal >
    );
  };
  const ModalComponentProfile = () => {
    return (
      <Modal
        keepMounted
        open={isModalOpenProfile}
        onClose={closeModalProfile}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >

        <Box sx={styleProfile}>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <Profile />
          </Typography>
        </Box >
      </Modal>
    );
  };
  return (
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <h4 className="header-title">Multiple Row Selection</h4>
            <p className="text-muted fs-14 mb-4">
              This table allowing selection of multiple rows
            </p>

            <Table
              columns={columns}
              data={data}
              pageSize={5}
              sizePerPageList={sizePerPageList}
              isSortable={true}
              pagination={true}
              isSelectable={true}
            />

          </Card.Body>
        </Card>
      </Col>
      <ModalComponent />
      <ModalComponentProfile />
    </Row>
  );

};
export default NewTable;
