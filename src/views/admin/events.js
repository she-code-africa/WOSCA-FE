import React, { useState, useEffect } from 'react';
import Header from '../../components/admin-head';

import '../../styles/views/admin-page.css';

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
import MaterialTable from "material-table";
import { _all_events, _add_event, _update_event, _delete_event } from './adminService';
import { relativeTimeRounding } from 'moment';

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

function Events() {
    var columns = [
        {title: '#', cellStyle:{width: '3%'}, render: (rowData: any) => rowData.tableData.id + 1 },
        {title: "id", field: "_id", hidden: true, editable: false},
        {title: "slug", field: "slug", hidden: true, editable: false},
        {title: "Name", field: "name", validate: rowData => {
            if (rowData.name === undefined || rowData.name === "") {
                return "Required"
            } else if (rowData.name.length < 3) {
                return "Name too short"
            }
            return true
        }},
        {title: "Location", field: "location", validate: rowData => {
            if (rowData.location === undefined || rowData.location === "") {
                return "Required"
            }
            return true
        }},
        {title: "Starts", field: "startTime", type: "datetime", validate: rowData => {
            if (rowData.startTime === undefined || rowData.startTime === "") {
                return "Select Date"
            }
            return true
        }},
        {title: "Ends", field: "endTime", type: "datetime", validate: rowData => {
            if (rowData.endTime === undefined || rowData.endTime === "") {
                return "Select Date"
            } else if (rowData.endTime < rowData.startTime) {
                return "Invalid end date/time"
            }
            return true
        }},
        {title: "Link", field: "event_link", type: "url", emptyValue:()=><em>No Event Link</em>, validate: rowData => {
            if (rowData.editing == "delete"){
                return true
            }
            if (rowData.event_link === undefined || rowData.event_link === "") {
                return "Required"
            } else if ((!rowData.event_link.startsWith('http://') && !rowData.event_link.startsWith('https://') ) || !rowData.event_link.includes('.') ) {
                return "Include 'https://' in your address"
            }
            return true
        }},
        {title: "Description", field: "description", validate: rowData => {
            if (rowData.description === undefined || rowData.description === "") {
                return "Required"
            } else if (rowData.description.length < 10 ) {
                return "Too short"
            }
            return true
        }},
    ]

    const [data, setData] = useState([]);
    const [iserror, setIserror] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    useEffect(() => {
        _all_events()
          .then(res => {
            setData(res.data.data[0].data)
          })
          .catch(error=>{
            setErrorMessages(["Cannot load events data"])
            setIserror(true)
          })
      }, [])

      const handleRowAdd = (newData, resolve) => {
        let errorList = []
        if (newData.name === undefined || newData.name === '') {
          errorList.push("Please enter event name")
        }
        if (newData.location === undefined || newData.location === '') {
          errorList.push("Please enter event location")
        }
        if (newData.startTime === undefined || newData.startTime === '') {
          errorList.push("Please enter the start time")
        }
        if (newData.endTime === undefined || newData.endTime === '') {
            errorList.push("Please enter the end time")
        }
        if (newData.description === undefined || newData.description === '') {
            errorList.push("Please enter event description")
        }
        if (errorList.length < 1) {
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
        if (newData.name === undefined || newData.name === ''){
        errorList.push("Please enter event name")
        }
        if(newData.location === undefined || newData.location === ''){
        errorList.push("Please enter event location")
        }
        if(newData.startTime === undefined || newData.startTime === ''){
        errorList.push("Please enter the start time")
        }
        if(newData.endTime === undefined || newData.endTime === ''){
            errorList.push("Please enter the end time")
        }
        if(newData.description === undefined || newData.description === ''){
            errorList.push("Please enter event description")
        }
        if(errorList.length < 1) {
            _update_event(newData._id, newData)
                .then(res => {
                const dataUpdate = [...data];
                const index = oldData.tableData._id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                resolve()
                setIserror(false)
                setErrorMessages([])
                window.location.reload(false);
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
          .then(res => {
            const dataDelete = [...data];
            const index = oldData.tableData._id;
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
                <div>
                    {iserror && 
                        <Alert severity="error">
                            {errorMessages.map((msg, i) => {
                                return <div key={i}>{msg}</div>
                            })}
                        </Alert>
                    }      
                </div>
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
                </div>
            </div>
        </React.Fragment>
    );
}

export default Events;