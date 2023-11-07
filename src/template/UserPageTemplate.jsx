import React from "react";
import {Sidebar} from "src/components/organisms/Sidebar/Sidebar.jsx";
import PropTypes from "prop-types";
export const UserPageTemplate = ({children, pageType}) => (
    <>
        <Sidebar pageType={pageType}/>
        {children}
    </>
)

UserPageTemplate.propTypes = {
    children: PropTypes.element.isRequired,
    pageType: PropTypes.oneOf(['notes', 'twitters', 'articles'])
};

UserPageTemplate.defaultProps = {
    pageType: 'notes'
};