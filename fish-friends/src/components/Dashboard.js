import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';
import { Link } from 'react-router-dom';
import { Card, CardText, Modal } from 'reactstrap'

import AddUserForm from './AddUserForm';
import UserTable from './UserTable';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Popup from './PopupLog';

import './styles/Dashboard.scss';

import { DashboardLogCard } from './DashboardLogCard';
import DashboardNavigation from './DashboardNavigation';
// import axiosWithAuth from '../utils/AxiosWithAuth';

const Dashboard = (props) => {

  console.log("Props from Dashboard.js", props);

  const [createLogModal, setCreateLogModal] = useState(false);
  const toggleCreateLogModal = () => setCreateLogModal(!createLogModal);

  const [logs, setLogs] = useState([])
  console.log(logs)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  useEffect(() => {
    axiosWithAuth()
      .get("logRoute/all-logs/")
      .then(res => {
        setLogs(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err.message));
  }, []);

  return (
    <div className="db-container">
      <div className="db-column db-navigation">
        <DashboardNavigation />
      </div>
      <div className="db-column db-cards">
        <div className="container">
            <h1>Create a PERSONAL LOG!</h1>
            <div className="flex-row">
              <div className="flex-large">
                <AddUserForm addUser={addUser} />
              </div>
              <div className="flex-large">
                <h2>Your Logs:</h2>
                <UserTable users={users} deleteUser={deleteUser} />
              </div>
          </div>
        </div>
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

          {[...logs].slice(0, 5).map(logData => (
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