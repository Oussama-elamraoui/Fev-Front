import React, { useState } from "react";
import classNames from "classnames";
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CheckIcon from '@mui/icons-material/Check';
import { FileUploader } from "react-drag-drop-files";
// types
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ActivityItemTypes } from "./data";
import './styleTimeLine.css'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
interface ActivityProps {
  activityTimeline: ActivityItemTypes[];
}
const fileTypes = ["JPG", "PNG", "GIF"];
const serviceProdigue = [
  {"service": "Orientation vers une association spécialisé", "serviceAR": "توجيه نحو جمعية متخصصة في محاربة العنف"},
  {"service": "Signalement ", "serviceAR": "التبليغ القضائي"},
  {"service": "Suivi psychologique", "serviceAR": "متابعة نفسية"},
  {"service": "Contraception d'urgence", "serviceAR": "حبوب المنع الاستعجالي للحمل"},
  {"service": "Traitement préventif contre les MST", "serviceAR": "العلاج الوقائي ضد الأمراض المتنقلة جنسيا"},
  {"service": "Sensibilisation contre la violence", "serviceAR": "الاستفادة من الأنشطة التحسيسية حول العنف"},
  {"service": "Orientation vers UPECFEVV au niveau de CHP", "serviceAR": "توجيه نحو وحدة التكفل بالنساء و الأطفال ضحايا العنف بالمستشفى"},
  {"service": "Soins primaires", "serviceAR": "علاجات اولية"}
];
const serviceHospitalier = [
  {"service": "Examens biologiques", "serviceAR": "طب البيولوجيا"},
  {"service": "Examens radiologiques", "serviceAR": "طب الأشعة"},
  {"service": "Soins préventifs", "serviceAR": "لدواعي حمائية"},
  {"service": "Soins médicaux", "serviceAR": "لدواعي طبية"}
];
const certificatMedial = [
  {"service": "Certificats sans repos", "serviceAR": "شهادة طبية بدون أيام"},
  {"service": "Certificat avec repos moins de 8 jours", "serviceAR": "اقل من 8 أيام"},
  {"service": "Certificat avec repos entre 8 a 21 jours", "serviceAR": "بين 8 و 21 يوم"},
  {"service": "Certificat avec repos plus de 21 jours", "serviceAR": "اكثر من 21 يوم"}
];
const etablissement = [
  {"service": "Espaces multidisciplinaires", "serviceAR": "فضاءات متعددة الاختصاصات"},
  {"service": "Court de justice", "serviceAR": "المحكمة"},
  {"service": "La gendarmerie royal", "serviceAR": "الدرك الملكي"},
  {"service": "La police", "serviceAR": "الشرطة"}
];
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
const Activity = ({ activityTimeline }: ActivityProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [personName, setPersonName] = React.useState<string[]>([]);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const ModalComponent = () => {
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
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Services prodigués" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {serviceProdigue.map((item) => (
                      <MenuItem key={item.service} value={item.service}>
                        <Checkbox checked={personName.indexOf(item.service) > -1} />
                        <ListItemText primary={item.service} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="col-sm-5 ">
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">الخدمات المقدمة</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="الخدمات المقدمة"/>}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {serviceProdigue.map((item) => (
                      <MenuItem key={item.serviceAR} value={item.serviceAR}>
                        <Checkbox checked={personName.indexOf(item.serviceAR) > -1} />
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
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Services hospitalier"/>}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {serviceHospitalier.map((item) => (
                      <MenuItem key={item.service} value={item.service}>
                        <Checkbox checked={personName.indexOf(item.service) > -1} />
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
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="استشفاء" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {serviceHospitalier.map((item) => (
                      <MenuItem key={item.serviceAR} value={item.serviceAR}>
                        <Checkbox checked={personName.indexOf(item.serviceAR) > -1} />
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
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Délivrance d'un CM" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {certificatMedial.map((item) => (
                      <MenuItem key={item.service} value={item.service}>
                        <Checkbox checked={personName.indexOf(item.service) > -1} />
                        <ListItemText primary={item.service}/>
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
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="تسليم شهادة طبية" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {certificatMedial.map((item) => (
                      <MenuItem key={item.serviceAR} value={item.serviceAR}>
                        <Checkbox checked={personName.indexOf(item.serviceAR) > -1} />
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
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Orientation vers d'autres établissement" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {etablissement.map((item) => (
                      <MenuItem key={item.service} value={item.service}>
                        <Checkbox checked={personName.indexOf(item.service) > -1} />
                        <ListItemText primary={item.service}/>
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
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="توجيه نحو مصالح خارجية" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {etablissement.map((item) => (
                      <MenuItem key={item.serviceAR} value={item.serviceAR}>
                        <Checkbox checked={personName.indexOf(item.serviceAR) > -1} />
                        <ListItemText primary={item.serviceAR} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl></div>
            </div>
            <div className="h-100 d-flex align-items-center justify-content-center">
              <FileUploader handleChange={handleChange} name="file" types={fileTypes} children={<div className="upload">
                < p > Drag files here or <span className="upload__button">Browse</span></p></div>} onDrop={(file: File) => console.log(file)} />
            </div>

            <form className="file-upload-form">
              <label htmlFor="file" className="file-upload-label">
                <div className="file-upload-design">
                  <svg viewBox="0 0 640 512" height="1em">
                    <path
                      d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                    ></path>
                  </svg>
                  <p>Drag and Drop
                    </p>
                  <span className="browse-button">Browse file</span>
                </div>
                <input id="file" type="file" />
              </label>
            </form>
          </Typography>
        </Box >
      </Modal >
    );
  };
  return (
    <>
      {(activityTimeline || []).map((activity, index) => {
        return (
          <React.Fragment key={index}>
            <h5 className={index === 0 ? "mt-1" : "mt-4"}>
              {activity.activityTime}
            </h5>
            <div
              className={classNames("left-timeline", "mt-3", "ps-3", {
                "mb-3": index === 0,
              })}
            >
              <ul className="list-unstyled events mb-0">
                {(activity.activities || []).map((item, index) => {
                  return (
                    <li key={index} className="event-list" >
                      <div className="pb-4">
                        <div className="d-flex">
                          <div className="col-12 col-md-8 ">
                            <div className="single-timeline-content d-flex wow fadeInLeft ani" data-wow-delay="0.3s" >
                              {item.status === "done" && <div className="timeline-icon-done" onClick={openModal}><DoneAllIcon sx={{ color: 'white' }} /></div>}
                              {item.status === 'notYet' && <div className="timeline-icon" ><CheckIcon sx={{ color: 'white' }} /></div>}
                              {/* <div className="bg-soft-primary p-1 rounded text-primary fs-14">
                              {("0" + item.hours).slice(-2)} hours ago
                            </div> */}
                              <div className="timeline-text">
                                <h6>{item.title}</h6>
                                <p>{item.description} {item.status==='done'&& ( <span className="badge badge-pill badge-success" style={{backgroundColor:'#7099ff',cursor:'pointer'}} onClick={openModal}>Formulaire</span>)}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </React.Fragment>
        );
      })}
      < ModalComponent/>
      {/* <Modal
        keepMounted
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >

        <Box sx={style}>
          <Typography id="keep-mounted-modal-title justify-content-center">
            <div className="d-flex justify-content-center align-items-center con">
              <div className="card py-5 px-3">
                <h5 className="m-0">Mobile phone verification</h5><span className="mobile-text-Verification">Enter the code we just send on your mobile phone <b className="text-danger-Verification">+91 86684833</b></span>
                <div className="d-flex flex-row mt-5 justify-content-center"><input type="text" className="form-control" /><input type="text" className="form-control" /><input type="text" className="form-control" /><input type="text" className="form-control" /></div>
                <div className="text-center mt-5"><span className="d-block mobile-textt">Don't receive the code?</span><span className="font-weight-bold text-danger cursor-Verification">Resend</span></div>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal> */}
      
    </>
  );
};

export default Activity;
