import React, { useContext, useState, useEffect } from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';

import { UserContext } from '../contexts/UserContext';

import { Card, Media, CardSubtitle, CardText, CardImg } from 'reactstrap'
import './styles/Dashboard.scss';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const DashboardLogCard = () => {

  // const { user } = useContext(UserContext);
  // console.log("DashboardLogCard.js User: ", user);

  const [log, setLog] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get("logRoute/all-logs/")
      .then(res => {
        setLog(res.data);
      })
      .catch(err=> console.log(err.message));
  }, []);
  
  
  return (
    <Card className="db-logCard">
      <Media className="db-logCardHeader">
        <Media left href="#">
          <Media object src="https://via.placeholder.com/45" alt="Generic placeholder image" className="db-userImage"/>
        </Media>

        <Media heading className="db-userName">
          {log.username}
        </Media>
      </Media>
      
      <div className="db-logCardStats">
        <CardSubtitle className="db-fishSpecies">
         Species: {log.fishName}
        </CardSubtitle>

        <CardSubtitle className="db-baitType">
         Bait Type: {log.baitType}
        </CardSubtitle>

        <CardText className="db-logCardMeta">
          <AccessTimeIcon style={{fontSize: 15}}/> {log.timeOfDay}
        </CardText>

        <CardText className="db-logCardMeta">
          <LocationOnIcon style={{fontSize: 15}}/> {log.facilityName}
        </CardText>
      </div>

      <div className="db-logCardInfo">
        <CardImg bottom width="100%" src="https://via.placeholder.com/530x345" alt="Image of catch" />
      </div>

    </Card>
  )
}

