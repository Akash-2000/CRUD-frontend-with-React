import React from "react";
import Infoform from "./form";
import Infotable from "./details";
import axios from 'axios';



class App extends React.Component
{
    constructor(){
        super();
        this.state ={
            data:[],
            editData:[]

        }
    }
    create = data =>{
        console.log("im before"+data)
        console.log(data.isedit)
        if(!data.isedit)
        {
                console.log("im at if")
                axios.post("http://localhost:5000/info",data).then((res)=>{
                this.getAll();
            })
        }
        else{
            console.log("im at else")
            axios.put("http://localhost:5000/info/update",data).then((res)=>{
                this.getAll();
            })
        }
    }
    componentDidMount()
    {
        this.getAll();
    }
    getAll()
    {
        axios.get("http://localhost:5000/info").then((res)=>{
            console.log(res.data);
            this.setState({
                data:res.data
            })
        })
    }
    update = data =>{
        console.log(data);
        this.setState({
            editData:data
        })
    }
    mydel = data =>{
        var option = window.confirm(`Are you sure you want to delete ${data.Name}`)
        if(option){
            axios.delete(`http://localhost:5000/info/delete/${data._id}`).then(res=>{
                console.log(res)
                this.getAll();
            })
        }
        console.log(data)
    }
    render(){
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col-6">
                        <Infoform myData={this.create} setForm={this.state.editData}/>
                    </div>
                    <div className="col-6">
                        <Infotable getData={this.state.data} setData={this.update} delData={this.mydel}/>                       
                    </div>
                </div>
            </div>
        )
    }
}
export default App;