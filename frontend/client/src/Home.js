import React, { Component } from "react";
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
 handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    axios.get('https://api.crunchbase.com/v3.1/odm-organizations?name='+this.state.value+'&user_key=4f96929cfa0cd3bef4fe415ae5ffe35b')
    .then(function (response) {
      if(response.status=== 200){
      var _description = response.data.data.items[0].properties.short_description;
      var _name = response.data.data.items[0].properties.name;
      axios.post('https://crunchbase2-costinn.c9users.io:8081/organizations', {
            name: _name,
            description: _description
        }).then(function(res){
            console.log(res);
        }).catch(function(err){
            console.log(err);
        });
      }})
      .catch(function (error) {
      console.log(error);
    });
    event.preventDefault();
  }
    
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
          <form className="form-style">
            <ul>
              <li>
                  <label htmlFor="founder">Founder</label>
                  <input type="text" name="Founder" maxLength="100"></input>
                  <span>Enter the name of the founder</span>
              </li>
              <li>
                <input type="submit" value="Search" />
             </li>
            </ul>
            </form>
          </div>
        <div className="col-sm-6">
        <form className="form-style" onSubmit={this.handleSubmit}>
          <ul>
            <li>
                <label htmlFor="organization">Organization</label>
                <input type="text" value={this.state.inputValueOrganization} onChange={ this.handleChange } />
                <span>Enter the name of the organization</span>
            </li>
            <li>
              <input type="submit" value="Search" />
            </li>
          </ul>
          </form>
        </div>
      </div>
      </div>
    );
  }
}
 
export default Home;