import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'reactstrap'

import AssignmentIcon from '@material-ui/icons/Assignment';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Popup from './PopupLog';

import './styles/Dashboard.scss';

import { DashboardLogCard } from './DashboardLogCard';

class App extends Component {  

    constructor(props){  
        super(props);  
        this.state = { showPopup: false };  
    }  
  
    togglePopup() {  
        this.setState({  
            showPopup: !this.state.showPopup  
        });  
    }  
  
    render() {    
    return (
        <div className="db-container">
            <div className="db-column db-navigation">
                <h1>Dashboard Nav</h1>
            </div>
            <div className="db-column db-cards">

                <div className="db-navCardContainer">
                  <Card className="db-navCard">
                    <Link onClick={this.togglePopup.bind(this)}>
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
            {this.state.showPopup ?  
                <Popup  
                    text='Click "Close Button" to hide popup'  
                    closePopup={this.togglePopup.bind(this)}  
                />  
            : null  
            }  
        </div>
      )
    }
}
export default App;