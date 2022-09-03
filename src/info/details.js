import React from "react";

class Infotable extends React.Component
{
    constructor(){
        super()
    }
    render(){
        return(
            <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Country</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
            {
                    this.props.getData.length >0?(
                        this.props.getData.map(e=>
                        <tr key={e._id}>
                            <td>{e.Name}</td>
                            <td>{e.Age}</td>
                            <td>{e.country}</td>
                            <td><button className="btn btn-primary"
                            onClick={event=>{
                                this.props.setData(e)
                            }}>Edit</button></td>
                            <td><button className="btn btn-primary"
                            onClick={event=>{
                                this.props.delData(e)
                            }}
                            >Delete</button></td>
                        </tr>
                    )
                ):(
                    <tr>
                        <td>No Data</td>
                    </tr>
                )



            }
  </tbody>
</table> )
    };
}
export default Infotable;