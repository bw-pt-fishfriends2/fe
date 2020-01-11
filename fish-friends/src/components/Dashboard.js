import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';
import { Link } from 'react-router-dom';
import { Card, CardText, Modal } from 'reactstrap'

import EditUserForm from './EditUserForm.js'
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

  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const editRow = user => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const usersData = [
    { id: 1, name: 'The BIG ONE!', username: 'anchovies' },
    { id: 2, name: 'Hammerhead Shark!', username: 'custom lure' },
    { id: 3, name: 'Alligator', username: 'My bare hands' },
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
        <div className="flex-large">
          <h2>Your Logs:</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit Log</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add a personal log!</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
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
      {/* <div className="db-column db-stats">
        <h1>Stats</h1>
      </div> */}
      <Modal isOpen={createLogModal} toggle={toggleCreateLogModal} size="lg" className="login-createAccount">
        <Popup />
      </Modal>
    </div>
  )
}
export default Dashboard;