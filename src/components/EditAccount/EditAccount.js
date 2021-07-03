import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function EditAccount (props) {


        // da bismo odredili da li smo u editu 1 ili 2 importovali smo withRouter i exportovali takodje
        //da bismo izdvojili accaount koji hocemo da editujemo moramo da koristimo == jer kod jednog je znak za broj a kod drugog znak za tekst
        //takodje na kraju stavljamo [0] posto je array koji ima samo jedan clan i da bi ga izvadili odatle

    const [account, setAccount] = useState (props.accounts.filter(acc => acc.id == props.match.params.id)[0])


    const editAccount = () =>{
        props.editAccount(account);
        props.history.push("/");
    }

    
    return(
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h2 className="display-4 m-4">Edit</h2>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input onChange={e=>{setAccount({...account,name:e.target.value})}} type="text" className="form-control" value={account.name}/><br/>
                            <input onChange={e=>{setAccount({...account,lastname:e.target.value})}} type="text" className="form-control" value={account.lastname}/><br/>
                            <input onChange={e=>{setAccount({...account,phone:e.target.value})}} type="text" className="form-control" value={account.phone}/><br/>
                            <input onChange={e=>{setAccount({...account,email:e.target.value})}} type="text" className="form-control" value={account.email}/><br/>
                            <button onClick={editAccount} className="form-control btn btn-info">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}



export default withRouter(EditAccount);