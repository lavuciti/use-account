import React from "react";
import { Link } from "react-router-dom";

const Account = ({account, edit, deleteAccount}) => {

    //trneri operacija ako je poslani edit true pokrenuce se operacija dole ako nije onda ce biti null
    //onClick saljemo id button na koji smo kliknuli u App u deleteAccount
    //da se ode na /edit/1... napravljen je Link koji salje u App.js na tacno odredjeni edit pomocu account.id ali posto u sebi vec sadrzi edit u App je preko Switcha to reseno da se ne pojave pogledi u isto vreme
    const actionButtons = edit ? (
        <>
            <td><button onClick={()=>{deleteAccount(account.id)}} className="btn btn-danger">Delete</button></td>
            <td><Link to={"/edit/"+account.id} className="btn btn-warning">Edit</Link></td>
        </>
    ) : null;

    return(
        <tr>
            <td>{account.id}</td>
            <td>{account.name}</td>
            <td>{account.lastname}</td>
            <td>{account.phone}</td>
            <td>{account.email}</td>
            {actionButtons}
        </tr>
    )
}

export default Account;