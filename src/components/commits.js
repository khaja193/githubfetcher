import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CommitsList from './commitList';


class Commits extends Component{
    
    state = {
        commits : this.props.location.commits,
        filtered:[]
    }

    onChangeHandler = (e)=>{
        
        let keywords = e.target.value;
        let filtered = this.state.commits.filter((item)=>{
            return item.message.indexOf(keywords) > -1
        });
        this.setState({
            filtered
        })
    }

    
    
    render(){
        

        if(this.state.commits===undefined || this.state.commits.length === 0){
            return(
                <div>
                    <h2> No commits available, Please try giving different UserName.</h2>
                   
                    <Link to="/">Click here to give the userName</Link>
                </div>
            )
        }

        
        return(
            <div>
                <header>
                    <h1> Give the keywords of message in commit here to search the commit id </h1>
                    <input type="text" onChange={(e)=>this.onChangeHandler(e)} />
                </header>
                <CommitsList commits={this.state.filtered.length===0?this.state.commits:this.state.filtered} >
                    Commmits are:
                </CommitsList>
            </div>
            
        )
    }
}


export default Commits;