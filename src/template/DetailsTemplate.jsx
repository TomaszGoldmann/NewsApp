import React from "react";
import {UserPageTemplate} from "src/template/UserPageTemplate.jsx";
import {Link} from "react-router-dom";

export const DetailsTemplate = ({children, pageType}) => (
    <UserPageTemplate pageType={pageType}>
        {children}
        <Link to={'/'}/>
    </UserPageTemplate>
)