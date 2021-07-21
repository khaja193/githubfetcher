import React from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';



const ShowBranchNames = (props) =>{
    const history = useHistory();

    function onClickHandler(e,branch){
        e.preventDefault();
        //console.log(branch.item)
        axios.get(`https://api.github.com/repos/khaja193/${branch.item}/commits`)
        .then(res => res.data.map(item =>  ({message:item.commit.message, commitId:item.sha})))
        .then(values=>{
                history.push({
                pathname:'/commits',
                commits:values
            });
        }).catch(e=>{return(
            <div>
                No Branches available
            </div>
        )})  
        
    
    }

    let branches= props.branches.map((item,index)=>{
        return(
            <div key={index}>
                <button onClick={(e)=>onClickHandler(e,{item})}>
                {item}
                </button>
            </div>
            
        )
    });

    return(
        <div>
            {branches}
        </div>
    )
}


export default ShowBranchNames;