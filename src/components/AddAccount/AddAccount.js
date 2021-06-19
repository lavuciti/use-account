import React, {Component} from "react";
import { withRouter } from "react-router-dom";

class AddAccount extends Component{
    state = {
        newAccount : {
            id : "", name : "", lastname : "", phone : "", email : ""
        }
    }

    changeHandler = (event) => {
        let id = event.target.id;
        let newAccountCopy = {...this.state.newAccount};
        newAccountCopy[id] = event.target.value;
        this.setState({newAccount:newAccountCopy});
    }

    addNewAccount = () =>{
        this.props.addNewAccountToState(this.state.newAccount);
        this.props.history.push("/");
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h2 className="display-4 m-4">Add Account</h2>
                        <div className="row">
                            <div className="col-10 offset-1">
                                <input type="text" onChange={this.changeHandler} id="id" placeholder="id" className="form-control"/><br/>
                                <input type="text" onChange={this.changeHandler} id="name" placeholder="name" className="form-control"/><br/>
                                <input type="text" onChange={this.changeHandler} id="lastname" placeholder="lastname" className="form-control"/><br/>
                                <input type="text" onChange={this.changeHandler} id="phone" placeholder="phone" className="form-control"/><br/>
                                <input type="email" onChange={this.changeHandler} id="email" placeholder="email" className="form-control"/><br/><br />
                                <button onClick={this.addNewAccount} className="btn btn-primary form-control">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AddAccount);