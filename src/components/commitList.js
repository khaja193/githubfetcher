import React from 'react';

const CommitsList = (props) =>{
    let commits = props.commits
    if(commits.lenght>20)
    {
        commits = commits.slice(1,21)
    }
    let items = commits.map((item,index)=>{
        return(
            <div key={index}>
                <h3>{item.commitId}</h3>
                <p>{item.message}</p>
                <hr></hr>
            </div>
        )
    });

    return(
        <div>
            {items}
        </div>
    )
}

export default CommitsList;