import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

// types
import { OrdersItemTypes } from "./data";

interface OrdersProps {
  orderDetails: OrdersItemTypes[];
}

const Orders = ({ orderDetails }: OrdersProps) => {
  return (
    <Card>
      <Card.Body>
        <Link to="#" className="btn btn-primary btn-sm float-end">
          <i className="uil uil-export me-1"></i> Export
        </Link>
        <h5 className="card-title mt-0 mb-0 header-title">DECLARATION SUR WEBSITES</h5>

        <div className="table-responsive mt-4">
          <table className="table table-hover table-nowrap mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">NOM </th>
                <th scope="col">RAISONS </th>
                <th scope="col">SERVICE  </th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {(orderDetails || []).map((item, index) => {
                return (
                  <tr key={index}>
                    <td>#{item.id}</td>
                    <td>{item.NOM}</td>
                    <td>{item.RAISONS}</td>
                    <td>{item.SERVICE}</td>
                    <td>
                      <span
                        className={classNames("badge", "py-1", {
                          "badge-soft-warning": item.status === "Pending",
                          "badge-soft-success": item.status === "Delivered",
                          "badge-soft-danger": item.status === "Declined",
                        })}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Orders;
