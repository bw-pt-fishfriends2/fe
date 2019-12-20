import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'reactstrap'

import AssignmentIcon from '@material-ui/icons/Assignment';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import './Dashboard.scss';

const Dashboard = () => {

    return (
        <div className="db-container">
            <div className="db-column db-navigation">
                <h1>Dashboard Nav</h1>
            </div>

            <div className="db-column db-cards">

                <div className="db-navCardContainer">
                    <Card className="db-navCard">
                        <Link><CardText><AssignmentIcon /> Create Log</CardText></Link>
                    </Card>
                    
                    <Card className="db-navCard">
                        <Link to="/fish-finder"><CardText><LocationOnIcon /> Find A Fishing Location</CardText></Link>
                    </Card>
                </div>

                <div className="db-logCardContainer">
                    <Card className="db-logCard">
                        <h3>Stuff</h3>
                    </Card>
                </div>
            </div>

            <div className="db-column db-stats">
                <h1>Stats</h1>
            </div>

        </div>
    )
}

export default Dashboard;