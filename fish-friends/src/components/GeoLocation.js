
import Geocoder from 'react-native-geocoding';
const { Geolocation } = 'react-native-geolocation-service';
import Reacct, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

Geocoder.init('AIzaSyB6z99ZdNTCK0s4Z24_skvbDu4EZRjKL0I');
Geocoder.from(41.89, 12.49)
    .then(json => {
       
        
    })
    


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
                        console.log(addressComponent);
                    })
                    .catch(error => 
                        consolse.warn(error)
                        );
            },
            (error) => {
                console.log(error.code, error.message);
            },
            {
                enableHighAccuracy: false,
                timeout: 10000,
                maximumAge: 100000
            }
        );
    }
    render(){
        return(
            <View>
            <Text />
            < Text />
            <Text/>
            {
                this.state.error ? < Text > Error : {
                    this.state.error
                } </Text> : null}
                </View>
                        
                 
            
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f5fcff',
        padding: 11
    },
    text: {
        fontSize: 22,
        color: '#000',
        textAlign: 'center',
        marginBottom: 10
    },
});