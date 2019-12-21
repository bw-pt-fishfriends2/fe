import React from 'react';  
import './PopupLog.css';  

class Popup extends React.Component {  
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        alert('The value is: ' + this.input.value);
        e.preventDefault();
        console.log(this.input.value, this.inputDate.value, this.inputLine.value, this.inputLure.value);
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
              <h1>Fish Log</h1>
              <h3>Here you can list all your daily catches!</h3>
            <label>
              Fish Caught:  
              <input type="text" ref={(input) => this.input = input} />
            </label>
            <label>
              Date / Time:
              <input type="text" ref={(input) => this.inputDate = input} />
            </label>
            <label>
              # Line Used:
              <input type="text" ref={(input) => this.inputLine = input} />
            </label>
            <label>
              Lure / Hook:
              <input type="text" ref={(input) => this.inputLure = input} />
            </label><br/>
            <input type="submit" value="Submit" />
            <button onClick={this.props.closePopup}>Close</button> 
          </form>
        );
    }
}
  

export default Popup;