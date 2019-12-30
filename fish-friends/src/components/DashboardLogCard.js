import React from 'react';

import { Card, Media, CardSubtitle, CardText, CardImg } from 'reactstrap'
import './styles/Dashboard.scss';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const DashboardLogCard = (props) => {
  return (
    <Card className="db-logCard">
      <Media className="db-logCardHeader">
        <Media left href="#">
          <Media object src="https://via.placeholder.com/45" alt="Generic placeholder image" className="db-userImage"/>
        </Media>

        <Media heading className="db-userName">
          First Last
        </Media>
      </Media>
      
      <div className="db-logCardStats">
        <CardSubtitle className="db-fishSpecies">
          Fish Species | 10lbs 8ozs
        </CardSubtitle>

        <CardText className="db-logCardMeta">
          <AccessTimeIcon style={{fontSize: 15}}/> January 1, 2020 - 12:00 PM
        </CardText>

        <CardText className="db-logCardMeta">
          <LocationOnIcon style={{fontSize: 15}}/> Lake of the Woods | Warroad, Minnesota
        </CardText>
      </div>

      <div className="db-logCardInfo">
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel mi vel velit pharetra condimentum. Morbi eu placerat orci, efficitur lacinia metus. Pellentesque viverra tincidunt diam, vel varius turpis tempus vitae. Nam suscipit augue at arcu pulvinar, porta venenatis orci aliquet.
        </CardText>
        <CardImg bottom width="100%" src="https://via.placeholder.com/530x345" alt="Image of catch" />
      </div>

    </Card>
  )
}

