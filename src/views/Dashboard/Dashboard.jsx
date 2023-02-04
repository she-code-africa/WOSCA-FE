import React, { useState, useEffect } from "react";
import Header from '../../components/dash-header';
import { Card, BigCard } from "../../components/Card";
import { AiOutlineLink } from 'react-icons/ai';
import { BsCheckAll, BsX } from 'react-icons/bs';
import { useUserContext } from "../../context/AuthContext";

import { useHistory } from "react-router-dom";

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
import { create_pr, get_prs } from './dashbaordService';

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


function Dashboard() {
  var columns = [
    {title: '#', cellStyle:{width: '3%'}, render: (rowData: any) => rowData.tableData.id + 1 },
    {title: "id", field: "_id", hidden: true, editable: false},
    {title: "Submitted At", field: "created_at", type:"datetime", editable: false },
    {title: "Link", field: "pr_link", type: "url", validate: rowData => {
      if (rowData.pr_link === undefined || rowData.pr_link === "") {
        return "Required"
      } else if ((!rowData.pr_link.startsWith('http://') && !rowData.pr_link.startsWith('https://') ) || !rowData.pr_link.includes('.') ) {
        return "Include 'https://' in your address"
      }
      return true
    },  render: (rowData: any) => (
        <a
          href={rowData.pr_link}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
        >
          {rowData.pr_link}
        </a>
      ) },
    {title: "Status", field: "status",  editable: false,
        render: (rowData) =><div 
                                className={rowData.status === 'declined' ? 'pr_declined' : 
                                    rowData.status === 'accepted' ? 'pr_accepted' : 'pr_pending' }>
                                        {rowData.status === 'declined' ? 'Declined' : rowData.status === 'accepted' ? 'Accepted' : 'Pending' }
                            
                            </div>
    }
  ]

  const [data, setData] = useState([]);
  const [contrib, setContrib] = useState("");
  const [acpr, setAcpr] = useState("");
  const [rjpr, setRjpr] = useState("");
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const adapter = data => data.map(item => (
    {
        id: item._id,
        pr_link: item.pr_link,
        status: item.status,
        created_at: item.created_at,
    }
  ));


  const { user } = useUserContext();
  const history = useHistory();

  useEffect(() => {
    if (user.role === 'admin'){
      history.push(`/admin`);
    }
    
    get_prs()
      .then((res) => {
        var resp = res.data.data[0].data;
        setData(resp);
        setContrib(resp.length);
        let accept = 0
        let reject = 0;
        for(let i=0; i<resp.length; i++) {
          if (resp[i]["status"] === "accepted") {
            accept += 1
          } else if (resp[i]["status"] === "declined") {
            reject += 1
          }
        }
        setAcpr(accept);
        setRjpr(reject);

      })
      .catch((err) => {
        setErrorMessages(["Cannot load PR data"])
        setIserror(true)
      })
  }, [])


  const handleRowAdd = (newData, resolve) => {
    let errorList = []
    if (newData.pr_link === undefined || newData.pr_link === '') {
      errorList.push("Please enter a valid PR link")
    }
    if (errorList.length < 1) {
      create_pr(newData)
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
          setErrorMessages(["Cannot add data. Server error!"])
          setIserror(true)
          resolve()
          })
        }
    }


  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="">
          <div className="dashboard-body">
            <div className="greeting"> <p className="greeting-text">Welcome, {user?.username}</p></div>
            <div className="contribution-cards">
              <div >
                <BigCard title="Total" subtitle="Contributions" button={<button><h5 style={{paddingTop:'10px'}}>{contrib}</h5><div className="card-btn-icon"><AiOutlineLink color={'#fff'} /></div></button>} />
              </div>
              <Card title="Accepted Contributions" value={acpr} icon={<BsCheckAll color={'#fff'} />} />
              <Card title="Declined Contributions" value={rjpr} icon={<BsX color={'#fff'} />} />
              {/* <Card title="Declined Contributions" value={rjpr} icon={<BsBackspaceReverse color={'#fff'} />} /> */}
            </div>
            <div className="greeting">
              <div>
                {iserror && 
                    <Alert severity="error">
                        {errorMessages.map((msg, i) => {
                            return <div key={i}>{msg}</div>
                        })}
                    </Alert>
                } 
              </div>
              <div>
              <MaterialTable 
                title="Your Submissions"
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
                  onRowAdd: (newData) =>
                  new Promise((resolve) => {
                      handleRowAdd(newData, resolve)
                  }),
                }}

              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;