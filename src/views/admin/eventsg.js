import React, { useState, useEffect } from 'react';
import Header from '../../components/admin-head';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Moment from 'moment';

import '../../styles/views/admin-page.css';

import Grid from '@material-ui/core/Grid';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Alert from '@material-ui/lab/Alert';

import { forwardRef } from 'react';

// 
import MuiTableCell from "@material-ui/core/TableCell";
import {
    Table, TableBody,
    TableContainer, TablePagination,
    TableHead, TableRow, Paper, TableFooter
}
    from '@material-ui/core';

// 
import MaterialTable from "material-table";
import { _all_events, _add_event, _update_event, _delete_event } from './adminService';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

// const events = [
//     { 'id': 1, 'location': 'lagos', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime': '2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores', 'name': 'lagos event' },
//     { 'id': 2, 'location': 'lagos', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime': '2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores', 'name': 'lagos event' },
//     { 'id': 3, 'location': 'lagos', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime': '2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores', 'name': 'lagos event' },
//     { 'id': 4, 'location': 'lagos', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime': '2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores', 'name': 'lagos event' },
//     { 'id': 5, 'location': 'lagos', 'startTime': '2021-08-11T21:57:49.769Z', 'endTime': '2021-08-11T21:57:49.769Z', 'description': 'lorem iopsum delores', 'name': 'lagos event' },
// ]

// const TableCell = withStyles({
//     root: {
//         borderBottom: "none"
//     }
// })(MuiTableCell);

// const useStyles = makeStyles({
//     table: {
//         minWidth: 650,
//     },
//     tableContainer: {
//         borderRadius: '20px',
//         marginBottom: '50px',
//     },
//     tableHeaderCell: {
//         fontWeight: 'bolder',
//         color: '#FFFFFF',
//         fontSize: '14px',
//         fontFamily: 'Axiforma',
//     },
//     tableRow: {
//         backgroundColor: '#3F3F3F40',
//     },
//     tableRowCell: {
//         color: '#FFFFFF !important',
//         fontSize: '14px',
//         fontFamily: 'Axiforma',
//     },
//     pagination: {
//         color: 'white',
//     },
//     editRow: {
//         fontSize: '12px',
//         backgroundColor: '#B70569',
//         color: '#FFFFFF',
//         borderRadius: '2px',
//         padding: '3px 15px',
//         display: 'inline-block',
//         marginTop: '1rem',
//     },
// });

function Events() {
    // const classes = useStyles();

    // const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(2);

    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };

    // 
    var columns = [
        {title: "id", field: "_id", hidden: true},
        {title: "slug", field: "slug", hidden: true},
        {title: "Name", field: "name"},
        {title: "Location", field: "location"},
        {title: "Starts", field: "startTime", type: "datetime",},
        {title: "Ends", field: "endTime", type: "datetime",},
        {title: "Description", field: "description"},
    ]

    const [data, setData] = useState([]);
    const [iserror, setIserror] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    useEffect(() => {
        _all_events()
          .then(res => {
            setData(res.data.data.events)
          })
          .catch(error=>{
            setErrorMessages(["Cannot load events data"])
            setIserror(true)
          })
      }, [])

      const handleRowAdd = (newData, resolve) => {
        let errorList = []
        if(newData.name === undefined){
          errorList.push("Please enter event name")
        }
        if(newData.location === undefined){
          errorList.push("Please enter event location")
        }
        if(newData.startTime === undefined){
          errorList.push("Please enter the start time")
        }
        if(newData.endTime === undefined){
            errorList.push("Please enter the end time")
        }
        if(newData.description === undefined){
            errorList.push("Please enter event description")
        }
        if(errorList.length < 1){
            console.log(newData)
            _add_event(newData)
                .then(res => {
                let dataToAdd = [...data];
                dataToAdd.push(newData);
                setData(dataToAdd);
                resolve()
                setErrorMessages([])
                setIserror(false)
            })
            .catch(error => {
                setErrorMessages(["Cannot add data. Server error!"])
                setIserror(true)
                resolve()
                })
        } else {
          setErrorMessages(errorList)
          setIserror(true)
          resolve()
        }
      }

      const handleRowUpdate = (newData, oldData, resolve) => {
        let errorList = []
        if(newData.name === undefined){
        errorList.push("Please enter event name")
        }
        if(newData.location === undefined){
        errorList.push("Please enter event location")
        }
        if(newData.startTime === undefined){
        errorList.push("Please enter the start time")
        }
        if(newData.endTime === undefined){
            errorList.push("Please enter the end time")
        }
        if(newData.description === undefined){
            errorList.push("Please enter event description")
        }
        if(errorList.length < 1){
            _update_event(newData._id, newData)
                .then(res => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                resolve()
                setIserror(false)
                setErrorMessages([])
                })
                .catch(error => {
                setErrorMessages(["Update failed! Server error"])
                setIserror(true)
                resolve()
            })
        }else{
          setErrorMessages(errorList)
          setIserror(true)
          resolve()
        }
      }

      const handleRowDelete = (oldData, resolve) => {
        _delete_event(oldData._id)
        // api.delete("/users/"+oldData.id)
          .then(res => {
            console.log(res);
            const dataDelete = [...data];
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);
            setData([...dataDelete]);
            resolve()
          })
          .catch(error => {
            setErrorMessages(["Delete failed! Server error"])
            setIserror(true)
            resolve()
          })
      }

    // 
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="admin-greeting"> <p>All Events</p></div>
                <div className="contribution-cards admin-cards">
                    <MaterialTable 
                        title="Added Events"
                        columns={columns}
                        data={data}
                        icons={tableIcons}
                        options={{
                            rowStyle: {
                                backgroundColor: '#3F3F3F40',
                                fontSize: '14px !important',
                                fontFamily: 'Axiforma',
                               
                            },
                            cellStyle: {
                                color: '#FFFFFF !important',
                                fontSize: '14px',
                                fontFamily: 'Axiforma',
                            },
                            headerStyle: {
                                backgroundColor: '#3F3F3F40',
                                color: '#FFF',
                                fontSize: '14px',
                                fontFamily: 'Axiforma',
                                fontWeight: 'bolder',
                              }
                          }}
                        editable={{
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve) => {
                            handleRowUpdate(newData, oldData, resolve);
                        }),
                        onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            handleRowAdd(newData, resolve)
                        }),
                        onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            handleRowDelete(oldData, resolve)
                        }),
                        }}
                        
                    />

                {/* <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead style={{ backgroundColor: '#3F3F3F99' }}>
                            <TableRow >
                                <TableCell className={classes.tableHeaderCell}>Event ID</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Event Name</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Location</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Start Date</TableCell>
                                <TableCell className={classes.tableHeaderCell}>End Date</TableCell>
                                <TableCell className={classes.tableHeaderCell}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="">
                            <TableRow>
                                <TableCell colSpan={6}></TableCell>
                            </TableRow>
                            {events.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage).map((row) => (
                                <TableRow
                                    key={row.id}
                                    className={classes.tableRow}
                                >
                                    <TableCell className={classes.tableRowCell}>{row.id}</TableCell>
                                    <TableCell className={classes.tableRowCell}>{row.name}</TableCell>
                                    <TableCell className={classes.tableRowCell}>{row.location}</TableCell>
                                    <TableCell className={classes.tableRowCell}>{row.startTime}</TableCell>
                                    <TableCell className={classes.tableRowCell}>{row.endTime}</TableCell>
                                    <TableCell className={classes.tableRowCell, classes.editRow}>
                                        Edit</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell align="center" colSpan={6}>
                                    <TablePagination
                                        rowsPerPageOptions={[3, 5, 10]}
                                        component="div"
                                        count={events.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onChangePage={handleChangePage}
                                        onChangeRowsPerPage={handleChangeRowsPerPage}
                                        className={classes.pagination}
                                        labelRowsPerPage={"Items Selected:"}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer> */}
            </div>
            </div>
        </React.Fragment>
    );
}

export default Events;