import React, { useState, useContext } from "react";
import NewTable from "../../DashboardMedcin/NewTable"
import {
  Row,
  Col,
  Dropdown,
  ButtonGroup,
  Modal,
  Button,
  useAccordionButton,
  Accordion,
  AccordionContext,
  Card,
} from "react-bootstrap";
import InfoP from "./Forms/infoP";
import InfoS from "./Forms/infoS";
import InfoV from "./Forms/infoV";
import ServiceP from "./Forms/serviceP";
import PageTitle from "../../../../components/PageTitle";
import classNames from "classnames";
import { Link } from "react-router-dom";

import Table from "../../../../components/Table";
import { records as data, expandableRecords } from '../../../tables/data'

const Demande = () => {
  // const [show, setShow] = useState<boolean>(false);
  const [showFemmeModal, setShowFemmeModal] = useState<boolean>(false);
  const [showEnfantModal, setShowEnfantModal] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});

  // Modal open/close handlers
  const handleClose = (modalType: string) => {
    if (modalType === "Femme") {
      setShowFemmeModal(false);
    } else if (modalType === "Enfant") {
      setShowEnfantModal(false);
    }
    setSelectedType(null);
  };

  const handleShow = (type: string) => {
    setSelectedType(type);
    if (type === "Femme") {
      setShowFemmeModal(true);
    } else if (type === "Enfant") {
      setShowEnfantModal(true);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = () => {
    // Handle submission logic here for all form data in `formData` state
    console.log("Form data:", formData);
    // Reset form data state if needed
    setFormData({});
    // setShow(false);
    setSelectedType(null);
  };

  interface ContentType {
    id: number;
    title: string;
    icon?: string;
    text: string;
  }
  interface CustomToggleProps {
    children: any;
    eventKey: string;
    containerClass: string;
    linkClass: string;
    callback?: any;
  }

  const CustomToggle = ({
    children,
    eventKey,
    containerClass,
    linkClass,
    callback,
  }: CustomToggleProps) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <Link
        to="#"
        className={classNames(linkClass, {
          collapsed: !isCurrentEventKey,
        })}
        onClick={decoratedOnClick}
      >
        <Card.Header>
          <h5 className={containerClass}>{children}</h5>
        </Card.Header>
      </Link>
    );
  };

  // Define your accordion content for Femme modal
  const accordianContentFemme: ContentType[] = [
    {
      id: 1,
      title: "Information Primaires  معلومات اولية",
      text: ``,
    },
    {
      id: 2,
      title: "Informations socio-démographique    معلومات سوسيوديمغرافية",
      text: ``,
    },
    {
      id: 3,
      title: "Informations sur la violence   معلومات حول العنف",
      text: ``,
    },
    {
      id: 4,
      title:
        "la visite de l'unité et services prodiguée   زيارة الوحدة والخدمات المقدمة",
      text: ``,
    },
    // Add more sections as needed
  ];

  const CustomAccordionFemme = ({
    item,
    index,
    length,
  }: {
    item: ContentType;
    index: number;
    length: number;
  }) => {
    const [formDataAccordion, setFormDataAccordion] = useState<any>({});

    const handleFormChangeAccordion = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setFormDataAccordion({
        ...formDataAccordion,
        [e.target.name]: e.target.value,
      });
    };

   const handleFormSubmitAccordion = () => {
       // Handle submission logic for form data within the Accordion
      console.log("Form data for Femme - Accordion:", formDataAccordion);
      setFormDataAccordion({});
    };
    return (
      <Card
        className={classNames(
          "shadow-none",
          "border",
          index + 1 === length ? "mb-0" : "mb-1"
        )}
      >
        <CustomToggle
          eventKey={String(index)}
          containerClass="m-0 fs-16"
          linkClass="text-dark"
        >
          {item.title}
          <i className="uil uil-angle-down float-end accordion-arrow"></i>
        </CustomToggle>
        <Accordion.Collapse eventKey={String(index)}>
          <Card.Body className="text-muted">
            {/* Form fields for Femme section */}
            {index === 0 && <InfoP></InfoP>} {index === 1 && <InfoS></InfoS>}
            {index === 2 && <InfoV></InfoV>} {index === 3 && <ServiceP></ServiceP>}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  };

  const columns = [
    {
      Header: "ID",
      accessor: "id",
      sort: true,
    },
    {
      Header: "fullName",
      accessor: "fullName",
      sort: true,
    },
    {
      Header: "Phone Number",
      accessor: "phone",
      sort: false,
    },
    {
      Header: "cin",
      accessor: "cin",
      sort: true,
    },
    {
      Header: "email",
      accessor: "email",
      sort: false,
    },
    {
      Header: "action",
      accessor: "action",
      sort: false,
    },
    
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

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Pages", path: "/assistant/demande" },
          { label: "Demande", path: "/assistant/demande", active: true },
        ]}
        title={"Demande"}
      />

      {/* Dropdown buttons */}
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="primary" className="cursor-pointer">
          Ajouté Citoyen <i className="uil uil-angle-down uil-book-medical"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleShow("Femme")}>
            Femme
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleShow("Enfant")}>
            Enfant
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Modal for Femme */}
      <Modal
        show={showFemmeModal}
        onHide={() => handleClose("Femme")}
        size={"xl"}
      >
        <Modal.Header closeButton>
          <Modal.Title as="h5">Déclaration - Femme</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
          {/* Accordion inside Femme modal */}
          <Accordion defaultActiveKey="0">
            {accordianContentFemme.map((item, index) => (
              <CustomAccordionFemme
                key={item.id}
                item={item}
                index={index}
                length={accordianContentFemme.length}
              />
            ))}
          </Accordion>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose("Femme")}>
            Fermer
          </Button>
          {/* <Button variant="primary" onClick={handleFormSubmit}> */}
          <Button variant="primary" onClick={() => handleClose("Femme")}>
            Soumettre Femme
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Enfant */}
      <Modal
        show={showEnfantModal}
        onHide={() => handleClose("Enfant")}
        size={"xl"}
      >
        <Modal.Header closeButton>
          <Modal.Title as="h5">Déclaration - Enfant</Modal.Title>
        </Modal.Header>
        <Modal.Body>      
          {/* Accordion inside Enfant modal */}
          <Accordion defaultActiveKey="0">
            {accordianContentFemme.map((item, index) => (
              <CustomAccordionFemme
                key={item.id}
                item={item}
                index={index}
                length={accordianContentFemme.length}
              />
            ))}
          </Accordion>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose("Enfant")}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleFormSubmit}> */}
          <Button variant="primary" onClick={() => handleClose("Enfant")}>
            Submit Enfant
          </Button>
        </Modal.Footer>
      </Modal>

      <Row style={{ marginTop: "2%" }}>
        <Col>

              <NewTable/>
              
              {/* <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSelectable={true}
              /> */}
        </Col>
      </Row>
    </>
  );
};

export default Demande;


