import React, { useState } from "react";
import Header from "./components/Header/Header";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable.js";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAccount";

function App () {

    const [accounts, setAccounts] = useState([
        {id:1, name:"Danilo", lastname:"Vesovic", phone:"11-11-11", email:"vesovic@gmail.com"},
        {id:2, name:"Uros", lastname:"Stosic", phone:"22-22-22", email:"stosic@gmail.com"}
    ])

    const addNewAccountToState = (acc) => {
        setAccounts([...accounts,acc])
    }

    const deleteAccount = (id) =>{
        //kopira svaki account koji ne sadrzi id koji smo poslali, ovo je skracena sintaksa od account=> {return account.id !==id}
        const newCopyAccounts = accounts.filter(account=>account.id !==id);
        //state.accounts menja sa newCopyAccounts
        setAccounts({accounts:newCopyAccounts})
        setAccounts(newCopyAccounts)
    }

    const editAccount = (acc) =>{
        //copyAccounts.map(accounts => accounts.id) - stavlja id po redu u array dok indexOf(acc.id) ako je acc.id 1 tada on utvrdjuje na kojem je mestu 0 ili nekoj drugoj poziciji
        let accountPossition = accounts.map(accounts => accounts.id).indexOf(acc.id);
        accounts[accountPossition] = acc;
        setAccounts(accounts)
    }

    //Switch povezano sa Account.js, kada je edit/1 tada ulazi samo u prvi a ne ulazi u drugi slicno radi kao prekidac
    
        return(
            <BrowserRouter>
                <Header />
                <Route path="/" exact>
                    <AccountsTable accounts={accounts} />
                </Route>
                <Route path="/add">
                    <AddAccount addNewAccountToState={addNewAccountToState}/>
                </Route>
                <Switch>
                    <Route path="/edit/:id">
                        <EditAccount accounts={accounts} editAccount={editAccount}/>
                    </Route>
                    <Route path="/edit">
                        <EditTable deleteAccount={deleteAccount} accounts={accounts}/>
                    </Route>
                </Switch>  
                </BrowserRouter>
                                  
              
        )

    
}

export default App;