import { NativeModules, DeviceEventEmitter } from 'react-native';
import Config from 'react-native-config';

const { GeoLocation } = NativeModules;

class GeoLocation {
    constructor(token, user_id) {
        this.state= null
    }
    start(dispatch, nextState){
        this.dispatch = dispatch
        const token = get()
    }
}