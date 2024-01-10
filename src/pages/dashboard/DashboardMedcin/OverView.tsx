import React from "react";
import { Link } from "react-router-dom";
import { Card, Dropdown } from "react-bootstrap";
import Table from 'rc-table';
// components
import OverViewItem from "../../../components/OverViewItem";

const OverView = () => {
  return (
    <Card>
      <Card.Body className="p-0">
        <div className="p-3">
          <Dropdown className="float-end" align="end">
            <Dropdown.Toggle
              as="a"
              className="arrow-none text-muted cursor-pointer"
            >
              <i className="uil uil-ellipsis-v"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <i className="uil uil-refresh me-2"></i>Refresh
              </Dropdown.Item>
              <Dropdown.Item>
                <i className="uil uil-user-plus me-2"></i>Add New
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className="text-danger">
                <i className="uil uil-exit me-2"></i>Exit
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <h5 className="card-title header-title mb-0">Overview</h5>
        </div>

        <OverViewItem
          stats={"121,000"}
          title={"Total de visiteurs"}
          icon={"users"}
          iconClass={"icon-md"}
        />
        <OverViewItem
          stats={"21,000"}
          title={"Total des dossies traités"}
          icon={"check-circle"}
          iconClass={"icon-md"}
        />
        <OverViewItem
          stats={"215"}
          title={"Total des dossies non traités"}
          icon={"alert-circle"}
          iconClass={"icon-md"}
        />

        <Link to="#" className="p-2 d-block text-end">
          View All <i className="uil-arrow-right"></i>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default OverView;
