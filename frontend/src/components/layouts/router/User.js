import React from 'react';
import {Route} from "react-router-dom";
import Myprofile from "../../views/Myprofile";
import ModifyProfile from "../../views/ModifyProfile";
import CheckOrder from "../../views/CheckOrder";

const User = ({match}) => {
    const {path} = match;
    return (
        <>
         <Route exact path={`${path}`} component={Myprofile}/>
         <Route exact path={`${path}/modify-profile`} component={ModifyProfile}/>
         <Route exact path={`${path}/check-order`} component={CheckOrder}/>
        </>
    )
}

export default User
