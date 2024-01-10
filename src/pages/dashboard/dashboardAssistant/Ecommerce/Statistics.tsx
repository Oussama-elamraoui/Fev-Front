import React from "react";
import { Row, Col } from "react-bootstrap";

// components
import StatisticsChartWidget from "../../../../components/StatisticsChartWidget";

const Statistics = () => {
  return (
    <div>
      <Row>
        <Col sm={6} xl={3}>
          <StatisticsChartWidget
            title="Total Dossiers"
            stats="1000"
            trend={{
              textClass: "text-warning ",
              icon: "uil-folder",
              value: "10.21%",
            }}
            colors={["#EBD18A"]}
          />
        </Col>

        <Col sm={6} xl={3}>
          <StatisticsChartWidget
            title="Dossiers Ouvert"
            stats="8"
            trend={{
              textClass: "text-primary",
              icon: "uil-folder-plus",
              value: "5.05%",
            }}
            colors={["#B7BFF7"]}
          />
        </Col>
        <Col sm={6} xl={3}>
          <StatisticsChartWidget
            title="Dossiers annulé"
            stats="65"
            trend={{
              textClass: "text-danger",
              icon: "uil-folder-times",
              value: "21.16%",
            }}
            colors={["#f77e53"]}
          />
        </Col>

        <Col sm={6} xl={3}>
          <StatisticsChartWidget
            title="Dossiers complétés"
            stats="927"
            trend={{
              textClass: "text-success",
              icon: "uil-folder-check",
              value: "50.05%",
            }}
            colors={["#43d39e"]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;
