import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';

class List extends Component {
  
  constructor() {
    super();
    this.state = {
      data: []
    };
    
    this.getData();
  }
  
  getData() {
    axios.get('https://crunchbase2-costinn.c9users.io:8081/organizations')
    .then((response) => {
        this.setState({data: response.data});
      }).catch(function(err){
          console.log(err);
      });
  }

  
  render() {
        return (
          <div>
            <ReactTable
              data={this.state.data }
              columns={[
                {
                  Header: "Organizations",
                  columns: [
                    {
                      Header: "id",
                      accessor: "id"
                    },
                    {
                      Header: "Name",
                      accessor: "name"
                    },
                    {
                      Header: "Description",
                      accessor: "description"
                    },
                    {
                      Header: "createdAt",
                      accessor: "createdAt"
                    },
                    {
                      Header: "updatedAt",
                      accessor: "updatedAt"
                    }
                  ]
                }
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

  
 
export default List;