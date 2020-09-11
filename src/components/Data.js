import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChalkboardTeacher,faChild, faUsers} from '@fortawesome/free-solid-svg-icons'

export default function Data(props) {
  const count = props.count;
  const teachers = props.teachers;
  const student = props.student;
  const total = teachers + student;
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "10px",
        paddingLeft: "10px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "18rem",
          margin: "10px",
          backgroundColor: "white",
          boxShadow: "-5px 15px 20px -6px #C0C0C0",
        }}
      >
        <Card.Body>
          <Card.Title style={{ font: "bold 1.3rem", color: "Green" }}>
            Total number of Teachers
            <div style={{marginTop:"10px"}}><FontAwesomeIcon icon={faChalkboardTeacher} size="lg" /></div>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{teachers}</Card.Subtitle>

        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          margin: "10px",
          boxShadow: "-5px 15px 20px -6px #C0C0C0",
        }}
      >
        <Card.Body>
          <Card.Title style={{ font: "bold 1.3rem", color: "blue" }}>
            Total number of Students
            <div style={{marginTop:"10px"}}><FontAwesomeIcon icon={faChild} size="lg" /></div>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{student}</Card.Subtitle>
        </Card.Body>
      </Card>
      <Card
        style={{
          width: "18rem",
          margin: "10px",
          boxShadow: "-5px 15px 20px -6px #C0C0C0",
        }}
      >
        <Card.Body>
          <Card.Title style={{ font: "bold 1.3rem", color: "purple" }}>
            Total member
            <div style={{marginTop:"10px"}}><FontAwesomeIcon icon={faUsers} size="lg" /></div>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{total}</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}
