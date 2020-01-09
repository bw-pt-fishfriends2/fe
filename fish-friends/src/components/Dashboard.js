import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText, Modal } from 'reactstrap'

import AssignmentIcon from '@material-ui/icons/Assignment';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Popup from './PopupLog';

import './styles/Dashboard.scss';

import { DashboardLogCard } from './DashboardLogCard';
// import axiosWithAuth from '../utils/AxiosWithAuth';

const Dashboard = () => {  

  const [createLogModal, setCreateLogModal] = useState(false);
  const toggleCreateLogModal = () => setCreateLogModal(!createLogModal);

  
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
                <DashboardLogCard />
              </div>

          </div>
          <div className="db-column db-stats">
              <h1>Stats</h1>
          </div>
          {/* {this.state.showPopup ?  
              <Popup  
                  text='Click "Close Button" to hide popup'  
                  closePopup={this.togglePopup.bind(this)}  
              />  
          : null  
          }   */}
      <Modal isOpen={createLogModal} toggle={toggleCreateLogModal} size="lg" className="login-createAccount">
        <Popup />
      </Modal>  
      </div>
    )
}
export default Dashboard;