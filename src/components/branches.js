import React from 'react';
import {Link} from 'react-router-dom';
import ShowBranchNames from './getBranches';
import '../css/styles.css';

const Branches = (props)=>{
    if(props.location.branchNames===undefined||props.location.branchNames.length===0){
        return(
            <div>
                <h2> No Repos available, Please try giving different UserName.</h2>
               
                <Link to="/">Click here to give the userName</Link>
            </div>
        )
    }
    return(
        <header>
            <h1>Branches are:</h1>
            < ShowBranchNames branches={props.location.branchNames} />             
        </header>
    )
}

// class Branches extends Component{



//     render(){       
//         return(
            
//             <header>
//                {this.props.location.branchNames}
//             </header>
//         )
//     }
// }

export default Branches;