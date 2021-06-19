import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class EditAccount extends Component {

    state = {
        account : {
            id : "",
            name : "",
            lastname : "",
            phone : "",
            email : ""
        }
    }

    componentDidMount(){
        // da bismo odredili da li smo u editu 1 ili 2 importovali smo withRouter i exportovali takodje
        //da bismo izdvojili accaount koji hocemo da editujemo moramo da koristimo == jer kod jednog je znak za broj a kod drugog znak za tekst
        //takodje na kraju stavljamo [0] posto je array koji ima samo jedan clan i da bi ga izvadili odatle
        const accountForEdit = this.props.accounts.filter(acc => acc.id == this.props.match.params.id)[0];
        this.setState({account : accountForEdit});
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h2 className="display-4 m-4">Edit</h2>
                        <div className="row">
                            <div className="col-10 offset-1">
                                <input type="text" id="name" className="form-control" value={this.state.account.name}/><br/>
                                <input type="text" id="lastname" className="form-control" value={this.state.account.lastname}/><br/>
                                <input type="text" id="phone" className="form-control" value={this.state.account.phone}/><br/>
                                <input type="text" id="email" className="form-control" value={this.state.account.email}/><br/>
                                <button className="form-control btn btn-info">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(EditAccount);