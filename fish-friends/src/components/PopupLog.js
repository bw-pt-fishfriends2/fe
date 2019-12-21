import React from 'react';  
import './PopupLog.scss';  

class Popup extends React.Component {  
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        alert('The value is: ' + this.input.value);
        e.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Fish Type:  
              <input type="text" ref={(input) => this.input = input} />
            </label>
            <label>
              Date/Time:
              <input type="text" ref={(input) => this.input = input} />
            </label>
            <label>
              LB test used:
              <input type="text" ref={(input) => this.input = input} />
            </label>
            <label>
              Lure/Hook:
              <input type="text" ref={(input) => this.input = input} />
            </label><br/>
            <input type="submit" value="Submit" />
            <button onClick={this.props.closePopup}>Close</button> 
          </form>
        );
    }
}
  

export default Popup;