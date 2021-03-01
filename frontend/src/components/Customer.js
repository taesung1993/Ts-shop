import React from 'react';
import {Route} from "react-router-dom";
import Cscenter from "./views/Cscenter";
import ReviewPage from "./views/ReviewPage";
import Notice from "./views/Notice";

const Customer = ({match}) => {
    const {path} = match;
    return (
        <>
            <Route exact path={path} component={Cscenter}/>
            <Route exact path={`${path}/reviews`} component={ReviewPage}/>
            <Route exact path={`${path}/notice`} component={Notice} />
        </>
    )
}

export default Customer
