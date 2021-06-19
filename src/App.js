import React, { Component } from "react";
import Header from "./components/Header/Header";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable.js";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAccount";

class App extends Component {
    state = {
        accounts : [
            {id:1, name:"Danilo", lastname:"Vesovic", phone:"11-11-11", email:"vesovic@gmail.com"},
            {id:2, name:"Uros", lastname:"Stosic", phone:"22-22-22", email:"stosic@gmail.com"}
        ]
    }

    addNewAccountToState = (acc) => {
        this.setState({
            accounts : [...this.state.accounts,acc]
        })
    }
    deleteAccount = (id) =>{
        //kopira sve iz accounts u accountsCopy
        const accountsCopy = [...this.state.accounts];
        //kopira svaki account koji ne sadrzi id koji smo poslali, ovo je skracena sintaksa od account=> {return account.id !==id}
        const newCopyAccounts = accountsCopy.filter(account=>account.id !==id);
        //state.accounts menja sa newCopyAccounts
        this.setState({accounts:newCopyAccounts})
    }
    //Switch povezano sa Account.js, kada je edit/1 tada ulazi samo u prvi a ne ulazi u drugi slicno radi kao prekidac
    render(){
        return(
            <BrowserRouter>
                <Header />
                <Route path="/" exact>
                    <AccountsTable accounts={this.state.accounts} />
                </Route>
                <Route path="/add">
                    <AddAccount addNewAccountToState={this.addNewAccountToState}/>
                </Route>
                <Switch>
                    <Route path="/edit/:id">
                        <EditAccount accounts={this.state.accounts}/>
                    </Route>
                    <Route path="/edit">
                        <EditTable deleteAccount={this.deleteAccount} accounts={this.state.accounts}/>
                    </Route>
                </Switch>  
                </BrowserRouter>
                                  
              
        )

    }
}

export default App;