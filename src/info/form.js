import React from "react";

class Infoform extends React.Component
{
    constructor(){
        super()
        this.state={
            id:"",
            Name:"",
            Age:"",
            country:"",
            is_edit:false

        }
        }
        infoChange = event =>{
            const {name,value} = event.target;
            this.setState({
                [name]:value
            })
        
    }
    infoSubmit = event =>{
        if(!this.state.is_edit)
          {  
                let data = {
                isedit:this.state.is_edit,
                Name:this.state.Name,
                Age:this.state.Age,
                country:this.state.country
            }
            this.props.myData(data);
          }
          else{
            let data = {
                isedit:this.state.is_edit,
                _id:this.state._id,
                Name:this.state.Name,
                Age:this.state.Age,
                country:this.state.country
            }
            this.props.myData(data);
          }
        }
    componentWillReceiveProps(props){
        if(props.setForm._id != null)
        {
            this.setState({
                is_edit:true,
                _id:props.setForm._id,
                Name:props.setForm.Name,
                Age:props.setForm.Age,
                country:props.setForm.country
            })
        }    
    }
    render(){
        return(
            <form onSubmit= {this.infoSubmit}>
  <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control" id="Name" placeholder="Enter name"
    onChange={this.infoChange}
    name="Name"
    value= {this.state.Name}
    />
     </div>
  <div className="form-group">
    <label>Age</label>
    <input type="text" className="form-control" id="text"placeholder="Enter age"
    onChange={this.infoChange}
    name="Age"
    value={this.state.Age}/>
  </div>
  <div className="form-group">
    <label>Country</label>
    <input type="text" className="form-control" id="country"placeholder="Enter country"
    onChange={this.infoChange}
    name="country"
    value={this.state.country}/>
  </div>
  <br/>
  <button type="submit" className="btn btn-primary">{this.state.is_edit?"update":"submit"}</button>
</form>
        )
    };
}
export default Infoform;