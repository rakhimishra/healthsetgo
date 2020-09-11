import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Data from "./Data";
import { Button } from "react-bootstrap";
import { ExportCSV } from "./ExportCSV";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
export default function Tables() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [student, setStudent] = useState("");
  const [teachers, setTeachers] = useState("");
  useEffect(() => {
    fetch(
      "https://api.healthsetgo.info/api/v2/candidate/assignment/community/search",
      {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZGRyZXNzIjpudWxsLCJyb2xlIjpbeyJyb2xlX3R5cGVfaWQiOjEwLCJjcmVhdGVkX3RpbWUiOiIyMDE3LTEwLTA0VDA3OjQ0OjI0LjI4NDUxIiwibW9kaWZpZWRfdGltZSI6IjIwMTctMTAtMDRUMDc6NDQ6MjQuMjg0NTEiLCJ1c2VyX2lkIjoxLCJyb2xlX2Rlc2MiOiJHdWVzdCIsImlkIjoxLCJyb2xlX2FjdGl2ZSI6MX1dLCJwcm9maWxlIjpudWxsLCJjdXN0b20iOm51bGwsImV4dF9wcm92aWRlcl9pZCI6bnVsbCwidXVpZCI6IkhTR18xIiwidG9rZW4iOm51bGwsInVzZXJfYWN0aXZlIjoxLCJwaG9uZSI6bnVsbCwib3JnYW5pemF0aW9uIjpudWxsLCJpZCI6MSwiaWF0IjoxNTA3MTE1ODg1LCJlbWFpbCI6bnVsbCwidXNlcm5hbWUiOiJndWVzdHVzZXJAaHNnLmNvbSIsInN0YXR1cyI6MjAwfQ==.P1iOu3IgTvv5WvinQ7yEIZCQC2bg58QF8RJAq82T_aU=",
          "x-select": '{"inRoleTypeId": 20, "inLimit": 10, "inOffset":0}',
        },
    
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", JSON.parse(data.results[0].users));
        console.log(data.results[0].count);
        setTeachers(data.results[0].count);
        setIsLoaded(true);
        setItems(JSON.parse(data.results[0].users));
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.healthsetgo.info/api/v2/candidate/assignment/community/search",
      {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZGRyZXNzIjpudWxsLCJyb2xlIjpbeyJyb2xlX3R5cGVfaWQiOjEwLCJjcmVhdGVkX3RpbWUiOiIyMDE3LTEwLTA0VDA3OjQ0OjI0LjI4NDUxIiwibW9kaWZpZWRfdGltZSI6IjIwMTctMTAtMDRUMDc6NDQ6MjQuMjg0NTEiLCJ1c2VyX2lkIjoxLCJyb2xlX2Rlc2MiOiJHdWVzdCIsImlkIjoxLCJyb2xlX2FjdGl2ZSI6MX1dLCJwcm9maWxlIjpudWxsLCJjdXN0b20iOm51bGwsImV4dF9wcm92aWRlcl9pZCI6bnVsbCwidXVpZCI6IkhTR18xIiwidG9rZW4iOm51bGwsInVzZXJfYWN0aXZlIjoxLCJwaG9uZSI6bnVsbCwib3JnYW5pemF0aW9uIjpudWxsLCJpZCI6MSwiaWF0IjoxNTA3MTE1ODg1LCJlbWFpbCI6bnVsbCwidXNlcm5hbWUiOiJndWVzdHVzZXJAaHNnLmNvbSIsInN0YXR1cyI6MjAwfQ==.P1iOu3IgTvv5WvinQ7yEIZCQC2bg58QF8RJAq82T_aU=",
          "x-select": '{"inRoleTypeId": 9, "inLimit": 188, "inOffset":0}',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", JSON.parse(data.results[0].users));
        console.log(data.results[0].count);
        setStudent(data.results[0].count);
        setIsLoaded(true);
        setItems(JSON.parse(data.results[0].users));
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
        console.error("Error:", error);
      });
  }, []);

  const submitHandler = () => {
    fetch(
      "https://api.healthsetgo.info/api/v2/candidate/assignment/community/search",
      {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZGRyZXNzIjpudWxsLCJyb2xlIjpbeyJyb2xlX3R5cGVfaWQiOjEwLCJjcmVhdGVkX3RpbWUiOiIyMDE3LTEwLTA0VDA3OjQ0OjI0LjI4NDUxIiwibW9kaWZpZWRfdGltZSI6IjIwMTctMTAtMDRUMDc6NDQ6MjQuMjg0NTEiLCJ1c2VyX2lkIjoxLCJyb2xlX2Rlc2MiOiJHdWVzdCIsImlkIjoxLCJyb2xlX2FjdGl2ZSI6MX1dLCJwcm9maWxlIjpudWxsLCJjdXN0b20iOm51bGwsImV4dF9wcm92aWRlcl9pZCI6bnVsbCwidXVpZCI6IkhTR18xIiwidG9rZW4iOm51bGwsInVzZXJfYWN0aXZlIjoxLCJwaG9uZSI6bnVsbCwib3JnYW5pemF0aW9uIjpudWxsLCJpZCI6MSwiaWF0IjoxNTA3MTE1ODg1LCJlbWFpbCI6bnVsbCwidXNlcm5hbWUiOiJndWVzdHVzZXJAaHNnLmNvbSIsInN0YXR1cyI6MjAwfQ==.P1iOu3IgTvv5WvinQ7yEIZCQC2bg58QF8RJAq82T_aU=",
          "x-select": '{"inRoleTypeId": 9, "inLimit": 293, "inOffset":0}',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", JSON.parse(data.results[0].users));
        setStudent(data.results[0].count);
        setIsLoaded(true);
        setItems(JSON.parse(data.results[0].users));

      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
        console.error("Error:", error);
      });
  };

  const submitHandler1 = () => {
    fetch(
      "https://api.healthsetgo.info/api/v2/candidate/assignment/community/search",
      {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZGRyZXNzIjpudWxsLCJyb2xlIjpbeyJyb2xlX3R5cGVfaWQiOjEwLCJjcmVhdGVkX3RpbWUiOiIyMDE3LTEwLTA0VDA3OjQ0OjI0LjI4NDUxIiwibW9kaWZpZWRfdGltZSI6IjIwMTctMTAtMDRUMDc6NDQ6MjQuMjg0NTEiLCJ1c2VyX2lkIjoxLCJyb2xlX2Rlc2MiOiJHdWVzdCIsImlkIjoxLCJyb2xlX2FjdGl2ZSI6MX1dLCJwcm9maWxlIjpudWxsLCJjdXN0b20iOm51bGwsImV4dF9wcm92aWRlcl9pZCI6bnVsbCwidXVpZCI6IkhTR18xIiwidG9rZW4iOm51bGwsInVzZXJfYWN0aXZlIjoxLCJwaG9uZSI6bnVsbCwib3JnYW5pemF0aW9uIjpudWxsLCJpZCI6MSwiaWF0IjoxNTA3MTE1ODg1LCJlbWFpbCI6bnVsbCwidXNlcm5hbWUiOiJndWVzdHVzZXJAaHNnLmNvbSIsInN0YXR1cyI6MjAwfQ==.P1iOu3IgTvv5WvinQ7yEIZCQC2bg58QF8RJAq82T_aU=",
          "x-select": '{"inRoleTypeId": 20, "inLimit": 293, "inOffset":0}',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", JSON.parse(data.results[0].users));

        setTeachers(data.results[0].count);
        setIsLoaded(true);
        setItems(JSON.parse(data.results[0].users));
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
        console.error("Error:", error);
      });
  };

  const columns = [
    { dataField: "name", text: "Student name" },
    { dataField: "class", text: "class" },
    { dataField: "hsgId", text: "HSG ID" },
    { dataField: "userClass", text: " User class" },
    { dataField: "userId", text: " User ID" },
    { dataField: "userRole", text: " User Role" },
    { dataField: "riskStatus", text: "Risk Status" },
  ];

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Button
          variant="primary"
          name="students"
          onClick={submitHandler}
          style={{ margin: "10px" }}
        >
          Students
        </Button>
        <Button variant="primary" name="teachers" onClick={submitHandler1}>
          Teachers
        </Button>

        <Data student={student} teachers={teachers} />
        <BootstrapTable
          keyField="hsgId"
          data={items}
          columns={columns}
          pagination={paginationFactory()}
        />
        <div className="col-md-4 center">
          {/* <ExportCSV csvData={this.state.customers} fileName={this.state.fileName} /> */}
        </div>
      </>
    );
  }
}
