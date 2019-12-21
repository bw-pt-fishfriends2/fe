import { NativeModules, DeviceEventEmitter } from 'react-native';
import Config from 'react-native-config';
import Geocoder from 'react-native-geocoding';
const { Geolocation } = 'react-native-geolocation-service';
import Reacct, { Component } from 'react';
import { Styesheet, Text, View } from 'react-native';

Geocoder.init('AIzaSyB6z99ZdNTCK0s4Z24_skvbDu4EZRjKL0I');
Geocoder.from(41.89, 12.49)
    .then(json => {
       
        console.log(addressComponent);
    })
    .catch(error => 
        consolse.warn(error)
        );


export default class GeoLocation extends Component{
    constructor() {
        super()
        this.state= {
            latitude: 0,
            longitude: 0,
            error: null,
            Address: null
        }
    }
    async componentDidMount(){
        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState = ({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                Geocoder.from(positon.coords.latitude, position.coords.longitude)
                    .then(json => {
                        const addressComponent = json.results[0].address_components[0];
                        this.setState({
                            Address: addressComponent
                        })
                    })
            },
            (error) => {
                console.log(error.code, error.message);
            },
            {
                enableHighAccuracy: false,
                timeout: 10000,
                maximumAge: 100000
            }
        )
    }
}