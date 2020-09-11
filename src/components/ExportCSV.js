import React from 'react'
import { CSVLink } from 'react-csv'
import Button from 'react-bootstrap/Button';
const ExportCSV = ({csvData, fileName}) => {
    return (
        <Button variant="warning">
            <CSVLink data={csvData} filename={fileName}>Export</CSVLink>
        </Button>
    )
}

// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';

// const ExportCSV = ({csvData, fileName}) => {

//     const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//     const fileExtension = '.xlsx';

//     const exportToCSV = (csvData, fileName) => {
//         const ws = XLSX.utils.json_to_sheet(csvData);
//         const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
//         const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//         const data = new Blob([excelBuffer], {type: fileType});
//         FileSaver.saveAs(data, fileName + fileExtension);
//     }

//     return (
//         <Button variant="warning" onClick={(e) => exportToCSV(csvData,fileName)}>Export</Button>
//     )
// }

export default ExportCSV;