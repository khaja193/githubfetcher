import React,{Component} from 'react';
import axios from 'axios';
import '../css/styles.css';

class Input extends Component{

    state = {
        value : ""
    }

    inputChangeHandler(event){
        this.setState({
            value:event.target.value,
            profilePresent:true
        })
    }
    
    onSubmitHandler = async(e) =>{
        e.preventDefault();
        await axios.get(`https://api.github.com/users/${this.state.value}/repos`)
        .then(response => response.data)
        .then(res => res.map(item => item.name))
        .then(values=>{
            this.props.history.push({
                pathname:'/branches',
                branchNames:values
            });
        })
        .catch(e=>{
            if(e.response)
            {
                window.location.reload(false);
                
            }
        })       
    }

    render(){
        //console.log(this.state.value)
        return(
            
            <header onSubmit={this.onSubmitHandler}>
                <h1 className="logo">Give the Valid UserName of github Profile to get the Branches details</h1>
                <input type='text'
                onChange={(e)=>{this.inputChangeHandler(e)}} 
                />
                <div>
                    <button type="submit" onClick={this.onSubmitHandler}>Submit</button>
                </div>                
            </header>
        )
    }
}

export default Input;