import React from "react";
import {UserPageTemplate} from "src/template/UserPageTemplate.jsx";
import {Link} from "react-router-dom";

export const DetailsTemplate = ({children}) => (
    <UserPageTemplate>
        {children}
        <Link to={'/'}/>
    </UserPageTemplate>
)