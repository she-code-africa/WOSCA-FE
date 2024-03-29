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
import { _all_programs, _add_programs, _update_programs, delete_programs } from './adminService';

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

function Programs() {
    var columns = [
        {title: '#', cellStyle:{width: '3%'}, render: (rowData: any) => rowData.tableData.id + 1 },
        {title: "id", field: "_id", hidden: true, editable: false},
        {title: "Name", field: "name", validate: rowData => {
            if (rowData.name === undefined || rowData.name === "") {
                return "Required"
            } else if (rowData.name.length < 3) {
                return "Name too short"
            }
            return true
        }},
        {title: "Description", field: "description", cellStyle: { width: '70%', minWidth: '70%' },
            validate: rowData => {
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
        _all_programs()
          .then(res => {
            setData(res.data.data[0].data)
          })
          .catch(error=>{
            setErrorMessages(["Cannot load programs data"])
            setIserror(true)
          })
      }, [])

      const handleRowAdd = (newData, resolve) => {
        // console.log(newData)
        let errorList = []
        if (newData.name === undefined || newData.name === '') {
          errorList.push("Please enter program name")
        }
        if (newData.description === undefined || newData.description === '') {
            errorList.push("Please enter program description")
        }
        if (errorList.length < 1) {
            // console.log(newData)
            _add_programs(newData)
                .then(res => {
                let dataToAdd = [...data];
                dataToAdd.push(newData);
                setData(dataToAdd);
                resolve()
                setErrorMessages([])
                setIserror(false)
                window.location.reload(false);
            })
            .catch(error => {
                setErrorMessages(["Cannot add data. Error!"])
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
        if (newData.name === undefined || newData.name === '') {
            errorList.push("Please enter program name")
          }
          if (newData.description === undefined || newData.description === '') {
              errorList.push("Please enter program description")
          }
        if(errorList.length < 1) {
            _update_programs(newData._id, newData)
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
        // console.log(oldData)
        delete_programs(oldData._id)
          .then(res => {
            console.log(res);
            const dataDelete = [...data];
            const index = oldData.tableData._id;
            dataDelete.splice(index, 1);
            setData([...dataDelete]);
            resolve()
          })
          .catch(error => {
            console.log(error)
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
                <div className="admin-greeting"> <p>All Programs</p></div>
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
                        title="Added Programs"
                        columns={columns}
                        data={data}
                        icons={tableIcons}
                        options={{
                            rowStyle: {
                                backgroundColor: '#3F3F3F40',
                                fontSize: '14px !important',
                                fontFamily: 'Axiforma',
                                overflowWrap: 'break-word'
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
                        onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            handleRowAdd(newData, resolve)
                        }),
                        onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            handleRowUpdate(newData, oldData, resolve);
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

export default Programs;