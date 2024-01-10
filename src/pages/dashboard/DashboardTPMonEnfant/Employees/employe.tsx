import React, { useState, useEffect } from "react";
import {
  Dropdown,
  ButtonGroup,
  Modal,
  Button,
  Form,
  ProgressBar,
  Col,
  Row,
  Card,

} from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import PageTitle from "../../../../components/PageTitle";
import ShreyuDatepicker from "../../../../components/Datepicker";
import Table from "../../../../components/Table";
import { records as data, expandableRecords } from '../../../tables/data'
import axios from "axios";
import { Link } from "react-router-dom";
import classNames from "classnames";
import * as XLSX from 'xlsx';

const Employe = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [employees, setEmployees] = useState<any[]>([]);

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<any>({});

  const openUpdateModal = (employee: any) => {
    setSelectedEmployee(employee);
    setShowUpdateModal(true);
    console.log(employee)
  };


  // To get all the employees
  useEffect(() => {

    fetchEmployees();
  }, []);

  //To get the selected role in the add employee
  const handleRoleSelect = (role:any) => {
    setSelectedRole(role);
    setFormData({ ...formData, role: role });
  };
  //To add employee api
  const [formData, setFormData] = useState({
    fullName: "",
    cin: "",
    phone: "",
    email: "",
    password: "",
    dateN: "",
    sexe: "",
    identifier: "",
    specialite: "",
    centre: "",
    role: selectedRole,
  });

  const [show, setShow] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

  const handleClose = () => {
    setShow(false);
    setCurrentStep(1);
  };

  const handleShow = () => setShow(true);


  const CloseUpModal = () => {
    setShowUpdateModal(false);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const initialFormData = {
    fullName: "",
    cin: "",
    phone: "",
    email: "",
    password: "",
    dateN: "",
    sexe: "",
    identifier: "",
    specialite: "",
    centre: "",
    role: selectedRole,
  };

  const resetFormData = () => {
    setFormData(initialFormData);
    setSelectedRole(""); // Reset selected role as well if needed
  };
  // Fetch employees data from your API
  const fetchEmployees = async () => {
    try {
          const response = await fetch('https://backend.hnam3ak.ma/api/AllEmployees');
          if (response.ok) {
            const data = await response.json();
            // Extract employees from the response and set in state
            const allEmployees = Object.values(data.employees).flatMap((empArray) => empArray);
            setEmployees(allEmployees);
            console.log(allEmployees)
          } else {
            console.error('Failed to fetch employees');
          }
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };
  //delete Employee
  const deleteEmployee = async (userId:number) => {
    try {
      const response = await fetch(`https://backend.hnam3ak.ma/api/delete/user/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const responseData = await response.json();
        alert('deliting succesfully');
        console.log('Deleted successfully:', responseData);
        fetchEmployees();
      } else {
        console.log(response)
        console.log('Delete failed:', response.statusText);
        // Handle error scenario, show a message to the user, etc.
      }
    } catch (error) {
      console.error('Delete error:', error);
      // Handle error scenario, show a message to the user, etc.
    }
  };


  const UpdateEmployee = async () => {
    try {
      const response = await fetch(`https://backend.hnam3ak.ma/api/employee/update/${selectedEmployee.user.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(UpdatedformData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Employee updated successfully:', responseData);
        fetchEmployees();
        CloseUpModal();
      } else {
        console.log('Employee update failed:', response.statusText);
        // Handle error scenario, show a message to the user, etc.
      }
    } catch (error) {
      console.error('Employee update error:', error);
      // Handle error scenario, show a message to the user, etc.
    }
  };

  // Function to export data to Excel
  const exportToExcel = () => {
    try {
      // Extracting the desired fields from each employee object
      const formattedData = employees.map((employee) => ({
        identifier: employee.identifier,
        specialite: employee.specialite || 'null',
        centre: employee.centre || 'null', 
        fullName: employee.user.fullName,
        cin: employee.user.cin,
        phone: employee.user.phone,
        email: employee.user.email,
        dateN: employee.user.dateN,
        sexe: employee.user.sexe,
        role: employee.user.role,
      }));

      const ws = XLSX.utils.json_to_sheet(formattedData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Employees');
      const fileName = 'employees_data.xlsx';
      XLSX.writeFile(wb, fileName);
    } catch (error) {
      console.error('Error exporting to Excel:', error);
      // Handle the error (display a message to the user, log it, etc.)
    }
  };

  const handleFormSubmit = async () => {
    try {
      const response = await fetch('https://backend.hnam3ak.ma/api/employee/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('API Response:', responseData);
        handleClose();
        resetFormData();
        fetchEmployees();
      } else {
        console.log('API Error:', response.statusText);
        // Handle error scenario, show a message to the user, etc.
      }
    } catch (error) {
      console.error('API Error:', error);
      // Handle error scenario, show a message to the user, etc.
    }
  };

//For adding a new Employee
  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="header text-center">
              <span>Informations sur Employé</span> <br />
              <span>معلومات حول المستخدم</span>
            </div>
            <Row style={{ marginTop: "2%" }}>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Nom Complet</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entrez le nom complet"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>CIN</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entrez le CIN"
                    value={formData.cin}
                    onChange={(e) => setFormData({ ...formData, cin: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row style={{ marginTop: "2%" }}>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entre le numéro du téléphone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor="example-date">
                    Date de naissance
                  </Form.Label>
                  <Form.Control
                    id="example-date"
                    type="date"
                    name="date"
                    value={formData.dateN}
                    onChange={(e) => setFormData({ ...formData, dateN: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row style={{ marginTop: "2%" }}>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entrez l'addresse Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Entrez le Mot de Passe"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row style={{ marginTop: "2%" }}>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Sexe</Form.Label>
                  <div key={"fH"} className="mb-3">
                    <Row>
                      <Col md={3}>
                        <Form.Check
                          type={"radio"}
                          id={"fH-radio-femme"}
                          name={"fH"}
                          label={"Femme"}
                          value={"Femme"}
                          checked={formData.sexe === "Femme"}
                          onChange={(e) => setFormData({ ...formData, sexe: e.target.value })}
                        />
                      </Col>
                      <Col md={3}>
                        <Form.Check
                          type={"radio"}
                          id={"fH-radio-homme"}
                          name={"fH"}
                          label={"Homme"}
                          value={"Homme"}
                          checked={formData.sexe === "Homme"}
                          onChange={(e) => setFormData({ ...formData, sexe: e.target.value })}
                        />
                      </Col>
                    </Row>
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </>
        );
      case 2:
        return (
          <>
            <div className="header text-center">
              <span>Informations sur l'unité ou Centre</span> <br />
              <span>معلومات الوحدة او المركز</span>
            </div>
            <Row style={{ marginTop: "2%" }}>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Identifier</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entre votre Identifier"
                    value={formData.identifier}
                    onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group style={{ marginBottom: "7%" }}>
                  <Form.Label>Centre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entre Votre Centre"
                    value={formData.centre}
                    onChange={(e) => setFormData({ ...formData, centre: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>
          </>
        );
      default:
        return null;
    }
  };

  const [UpdatedformData, setUpdatedFormData] = useState({
    fullName: "",
    cin: "",
    phone: "",
    email: "",
    dateN: "",
    sexe: "",
    identifier: "",
    specialite: "",
    centre: "",
  });
  useEffect(() => {
    setUpdatedFormData({
      fullName: selectedEmployee?.user?.fullName || "",
      cin: selectedEmployee?.user?.cin || "",
      phone: selectedEmployee?.user?.phone || "",
      email: selectedEmployee?.user?.email || "",
      dateN: selectedEmployee?.user?.dateN || "",
      sexe: selectedEmployee?.user?.sexe || "",
      identifier: selectedEmployee?.identifier || "",
      specialite: selectedEmployee?.specialite || "",
      centre: selectedEmployee?.centre || "",
    });
  }, [selectedEmployee]);

  const updateEmployeForm = () => {
    const handleUpdateFormChange = (key : any, value:any) => {
      setUpdatedFormData({
        ...UpdatedformData,
        [key]: value,
      });
    };


    return (
      <>
        {selectedEmployee && Object.keys(selectedEmployee).length > 0 ? (
          <>
            <Row style={{ marginTop: "2%" }}>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Nom Complet</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Entrez le nom complet"
                        value={UpdatedformData.fullName}
                        onChange={(e) =>
                          handleUpdateFormChange("fullName", e.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>CIN</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Entrez le CIN"
                        value={UpdatedformData.cin}
                        onChange={(e) =>
                          handleUpdateFormChange("cin", e.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>
            </Row>
            <Row style={{ marginTop: "2%" }}>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Entre le numéro du téléphone"
                        value={UpdatedformData.phone}
                        onChange={(e) =>
                          handleUpdateFormChange("phone", e.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Entrez l'addresse Email"
                        value={UpdatedformData.email}
                        onChange={(e) =>
                          handleUpdateFormChange("email", e.target.value)
                        }
                      />
                    </Form.Group>
                  </Col>
            </Row>
            <Row style={{ marginTop: "2%" }}>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Identifier</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entre votre Identifier"
                    value={UpdatedformData.identifier}
                    onChange={(e) =>
                      handleUpdateFormChange("identifier", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group style={{ marginBottom: "7%" }}>
                  <Form.Label>Centre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entre Votre Centre"
                    value={UpdatedformData.centre}
                    onChange={(e) =>
                      handleUpdateFormChange("centre", e.target.value)
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row style={{ marginTop: "2%" }}>
              <Col md={6}>
                    <Form.Group>
                      <Form.Label htmlFor="example-date">
                        Date de naissance
                      </Form.Label>
                      <Form.Control
                        id="example-date"
                        type="date"
                        name="date"
                        value={UpdatedformData.dateN}
                        onChange={(e) =>
                          handleUpdateFormChange("dateN", e.target.value)
                        }
                      />
                    </Form.Group>
              </Col>
              <Col md={6}>
                        <Form.Group>
                          <Form.Label>Sexe</Form.Label>
                          <div key={"fH"} className="mb-3">
                            <Row>
                              <Col md={3}>
                                <Form.Check
                                  type={"radio"}
                                  id={"fH-radio-femme"}
                                  name={"fH"}
                                  label={"Femme"}
                                  value={"Femme"}
                                  onChange={(e) =>
                                    handleUpdateFormChange("sexe", e.target.value)
                                  }
                                  checked={UpdatedformData.sexe === "Femme"}
                                />
                              </Col>
                              <Col md={3}>
                                <Form.Check
                                  type={"radio"}
                                  id={"fH-radio-homme"}
                                  name={"fH"}
                                  label={"Homme"}
                                  value={"Homme"}
                                  onChange={(e) =>
                                    handleUpdateFormChange("sexe", e.target.value)
                                  }
                                  checked={UpdatedformData.sexe === "Homme"}
                                />
                              </Col>
                            </Row>
                          </div>
                        </Form.Group>
              </Col>
            </Row>
          </>
        ) : (
          <p>No employee selected or data unavailable.</p>
        )}
      </>
    );
  };


  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Pages", path: "/assistant/employe" },
          { label: "Employées", path: "/assistant/employe", active: true },
        ]}
        title={"Tout les Fonctionnaires"}
      />

      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="primary" className="cursor-pointer">
          Ajouté Emlpoyées{" "}
          <i className="uil uil-angle-down uil-book-medical"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => { handleShow(); handleRoleSelect("assistant sociale"); }}>
            Assistant Sociale
          </Dropdown.Item>
          <Dropdown.Item onClick={() => { handleShow(); handleRoleSelect("medecin"); }}>
            Médecine
          </Dropdown.Item>
          <Dropdown.Item onClick={() => { handleShow(); handleRoleSelect("psy"); }}>
            Psychologue
          </Dropdown.Item>
          <Dropdown.Item onClick={() => { handleShow(); handleRoleSelect("assistant comm"); }}>
            Assistant Communotaire
          </Dropdown.Item>
          <Dropdown.Item onClick={handleShow}>Assistant CHP/CHU</Dropdown.Item>
          {/* <Dropdown.Item onClick={handleShow}>Gendarme</Dropdown.Item>
          <Dropdown.Item onClick={handleShow}>Procureur</Dropdown.Item>
          <Dropdown.Item onClick={handleShow}>EN</Dropdown.Item> */}
          <Dropdown.Item onClick={handleShow}>ONG</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Modal show={show} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title as="h5">Ajouté Employés</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {renderFormStep()}
            <ProgressBar now={(currentStep / totalSteps) * 100} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {currentStep > 1 && (
            <Button variant="secondary" onClick={handlePrevStep}>
              Précédent
            </Button>
          )}
          {currentStep < totalSteps ? (
            <Button variant="primary" onClick={handleNextStep}>
              Suivant
            </Button>
          ) : (
            <Button variant="primary" onClick={handleFormSubmit}>
              Submit
            </Button>
          )}
        </Modal.Footer>
      </Modal>


      {/* Update Modal  */}
      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title as="h5">
            <span>Informations sur Employé</span> <br />
            <span>معلومات حول المستخدم</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {updateEmployeForm()}
          </Form>

        </Modal.Body>

        <Modal.Footer>
            <Button variant="primary" onClick={UpdateEmployee}>
              Enregistrer
            </Button>
        </Modal.Footer>
      </Modal>
      {/* Update Modal  */}

      <Row style={{ marginTop: "2%" }}>
        <Col>
          <Card>
            <Card.Body>
            <Link to="#" className="btn btn-primary btn-sm float-end" onClick={exportToExcel}>
              <i className="uil uil-export me-1"></i> Export
            </Link>

              <h5 className="card-title mt-0 mb-0 header-title">Liste des Employés</h5>

              <div className="table-responsive mt-4">
                <table className="table table-hover table-nowrap mb-0">
                  <thead>
                    <tr>
                    <th scope="col">Identifiant</th>
                    <th scope="col">Nom</th>
                      <th scope="col">CIN </th>
                      <th scope="col">Contact</th>
                      <th scope="col">ROLE </th>
                      <th scope="col">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                  {employees.map((employee, index) => (
                      <tr key={index}>
                        <td className="text-muted">
                        # {employee.identifier}
                        </td>
                        <td>
                            <div className="d-flex align-items-center">
                              <img
                                  src={
                                      !employee.user.image && employee.user.sexe === 'Homme'
                                      ? 'https://png.pngtree.com/png-clipart/20230102/original/pngtree-business-man-avatar-png-image_8855195.png'
                                      : 'https://img.freepik.com/vecteurs-premium/jeune-femme-souriante-ann-avatar-3d-vecteur-personnes-personnage-illustration-cartoon-style-minimal_365941-738.jpg'
                                  }
                                  alt=""
                                  height="40"
                                  width="40"
                                  className="rounded-circle"
                                  />
                              <div className="ms-2">
                                <p className="fw-bold mb-1"> {employee.user.fullName} </p>
                              </div>
                            </div>
                        </td>
                        <td>{employee.user.cin}</td>
                        <td>
                          <p className="fw-normal mb-1">{employee.user.email}</p>
                          <p className="text-muted mb-0">{employee.user.phone}</p>
                        </td>
                        <td>
                          <span
                            className={classNames("badge", "py-1", {
                              "badge-soft-warning": employee.user.role === "medecin",
                              "badge-soft-success": employee.user.role === "psy",
                              "badge-soft-danger": employee.user.role === "assistant sociale",
                              "badge-soft-info": employee.user.role === "assistant comm",
                            })}
                          >
                            {employee.user.role === "medecin"
                              ? "Médecin"
                              : employee.user.role === "psy"
                              ? "Psychologue"
                              : employee.user.role === "assistant sociale"
                              ? "Assistant Sociale"
                              : employee.user.role === "assistant comm"
                              ? "Assistant Comm"
                              : employee.user.role}
                          </span>
                        </td>
                        <td>
                          <div className="flex-grow-1">
                            <i
                              className="bi bi-pencil-square"
                              style={{ cursor: "pointer", marginRight: "19%" }}
                              onClick={() => openUpdateModal(employee)}
                            ></i>
                            <i
                              className="bi bi-trash"
                              style={{ cursor: "pointer" }}
                              onClick={() => deleteEmployee(employee.user.id)}
                            ></i>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Employe;
