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
import { prs, update_prs  } from './adminService';


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

function Pulls() {
    var columns = [
        {title: '#', cellStyle:{width: '3%'}, render: (rowData: any) => rowData.tableData.id + 1 },
        {title: "id", field: "_id", hidden: true, editable: false},
        {title: "Link", field: "pr_link", type: "url", editable: false,  render: (rowData: any) => (
            <a
              href={rowData.pr_link}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              {rowData.pr_link}
            </a>
          ) },
        {title: "Submitted by", field: "username", editable: false },
        {title: "Status", field: "status", lookup: {pending: "Pending", accepted: "Accepted", declined: "Declined"},
        },
        {field: "status",  editable: false,
            render: (rowData) =><div 
                                    className={rowData.status === 'pending' ? 'pr_pending' : 
                                        rowData.status === 'accepted' ? 'pr_accepted' : 'pr_declined' }>
                                            {rowData.status === 'pending' ? 'Pending' : rowData.status === 'accepted' ? 'Accepted' : 'Declined' }
                                
                                </div>
        }
    ]

    const [data, setData] = useState([]);
    const [iserror, setIserror] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    const adapter = data => data.map(item => (
        {
            id: item._id,
            pr_link: item.pr_link,
            status: item.status,
            username: item.user[0].username,
        }
    ));

    useEffect(() => {
        prs()
          .then(res => {
            var resp = res.data.data[0].data;
            setData(resp);
          })
          .catch(error=>{
            setErrorMessages(["Cannot load data"])
            setIserror(true)
          })
      }, [])

      const handleRowUpdate = (newData, oldData, resolve) => {
        let errorList = []
        if(errorList.length < 1) {
            update_prs(newData.id, newData)
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
                setErrorMessages(["Update failed!"])
                setIserror(true)
                resolve()
            })
        }else{
          setErrorMessages(errorList)
          setIserror(true)
          resolve()
        }
      }

    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="admin-greeting"> <p>All Submitted PRs</p></div>
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
                        title="Submitted PRs"
                        columns={columns}
                        data={adapter(data)}
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
                            },
                          }}
                        editable={{
                            onRowUpdate: (newData, oldData) =>
                            new Promise((resolve) => {
                            handleRowUpdate(newData, oldData, resolve);
                            }),
                        }}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Pulls;