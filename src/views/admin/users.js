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
import { _all_users  } from './adminService';
import { withTheme } from '@material-ui/core';


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


function Users() {
    var columns = [
        {title: '#', cellStyle:{width: '3%'}, render: (rowData: any) => rowData.tableData.id + 1 },
        {title: "id", field: "_id", hidden: true, editable: false},
        {title: "Username", field: "username", editable: false },
        {title: "Email", field: "email", editable: false },
        {title: "Joined", field: "created_at", type: "datetime", editable: false },
        {title: "Role", field: "role", editable: false, 
            render: (rowData) => <div
                                    className={rowData.role === 'user' ? 'user_styled' : 'admin_styled' } >
                                        {rowData.role === 'user' ? ' User' : 'Admin' }
                                </div>
    
        },
        // {title: "PR Submitted", field: "role", editable: false },
        
    ]

    const [data, setData] = useState([]);
    const [iserror, setIserror] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    

    useEffect(() => {
        _all_users()
          .then(res => {
            console.log(res)
            var resp = res.data.data[0].data;
            setData(resp);
          })
          .catch(error=>{
            console.log(error)
            setErrorMessages(["Cannot load users data"])
            setIserror(true)
          })
      }, [])
    

    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="admin-greeting"> <p>All Users</p></div>
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
                        title="Registered users"
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
                          />
                    
                </div>
            </div>
        </React.Fragment>
    );
}

export default Users;