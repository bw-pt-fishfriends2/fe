import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';
import { Link } from 'react-router-dom';
import { Card, CardText, Modal } from 'reactstrap'

import AssignmentIcon from '@material-ui/icons/Assignment';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Popup from './PopupLog';

import './styles/Dashboard.scss';

import { DashboardLogCard } from './DashboardLogCard';
// import axiosWithAuth from '../utils/AxiosWithAuth';

const Dashboard = (props) => {

  console.log("Props from Dashboard.js", props);

  const [createLogModal, setCreateLogModal] = useState(false);
  const toggleCreateLogModal = () => setCreateLogModal(!createLogModal);
  
  const [logs, setLogs] = useState([])
  console.log(logs)

  useEffect(() => {
    axiosWithAuth()
      .get("logRoute/all-logs/")
      .then(res => {
        setLogs(res.data)
        console.log(res.data)
      })
      .catch(err=> console.log(err.message));
  }, []);

  return (
      <div className="db-container">
          <div className="db-column db-navigation">
              <h1>Dashboard Nav</h1>
          </div>
          <div className="db-column db-cards">

              <div className="db-navCardContainer">
                <Card className="db-navCard">
                  <Link onClick={toggleCreateLogModal}>
                    <CardText>
                      <AssignmentIcon /> Create Log
                    </CardText>
                  </Link>
                </Card>
                  
                  <Card className="db-navCard">
                      <Link to="/fish-finder"><CardText><LocationOnIcon /> Find A Fishing Location</CardText></Link>
                  </Card>
              </div>

              <div className="db-logCardContainer">

                {[...logs].slice(0,5).map(logData => (
                  <DashboardLogCard
                    key={logData.log_id}
                    username={logData.username}
                    fishName={logData.fishName}
                  />
                ))}                
              </div>

          </div>
          <div className="db-column db-stats">
              <h1>Stats</h1>
          </div>
      <Modal isOpen={createLogModal} toggle={toggleCreateLogModal} size="lg" className="login-createAccount">
        <Popup />
      </Modal>  
      </div>
    )
}
export default Dashboard;