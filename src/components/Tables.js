import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Data from "./Data";
import { Button } from "react-bootstrap";
import ExportCSV from "./ExportCSV";
export default function Tables() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [student, setStudent] = useState("");
  const [teachers, setTeachers] = useState("");
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState("");
  const [totalPages, setTotalPages] = useState("");

   

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
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
        // body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", JSON.parse(data.results[0].users));
        console.log(data.results[0].count);
        // setCount(data.results[0].count);
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
          "x-select": '{"inRoleTypeId": 9, "inLimit": 10, "inOffset":0}',
        },
        // body: JSON.stringify(data),
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
        // body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", JSON.parse(data.results[0].users));
        setStudent(data.results[0].count);
        setIsLoaded(true);
        setItems(JSON.parse(data.results[0].users));

        const dataItems = JSON.parse(data.results[0].users)
        console.log(dataItems)
        const slice = dataItems.slice(offset,offset +perPage);
        const pageCount = Math.ceil(dataItems.length / perPage);
        setItems(JSON.parse(data.results[0].users));
        
        console.log(slice)
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
        // body: JSON.stringify(data),
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
        <ExportCSV />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>HSGID</th>
              <th>UserID</th>
              <th>Risk Status</th>
              <th>Role no </th>
              <th>User Class</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.class}</td>
                <td>{item.hsgId}</td>
                <td>{item.userId}</td>
                <td>{item.riskStatus}</td>
                <td>{item.userRole}</td>
                <td>{item.userClass}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>

      // {items}
    );
  }
}
