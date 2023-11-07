import React, {useEffect} from "react";
import {DetailsTemplate} from "src/template/DetailsTemplate.jsx";
import {routes} from "src/routes/index.jsx";
import {matchPath, useLocation} from "react-router-dom";


export const DetailPage = () => {
    const location = useLocation();

    useEffect(() => {
        // Ta funkcja zostanie wywołana za każdym razem, gdy zmieni się lokalizacja URL.
        console.log(`Lokalizacja URL: ${location.pathname}`);
    }, [location]);

    const isN = matchPath(location.pathname, {
        path: routes.note,
        exact: true, // Dopasuj tylko ścisłe dopasowania
    });

    const isT = matchPath(location.pathname, {
        path: routes.twitter,
        exact: true, // Dopasuj tylko ścisłe dopasowania
    });

    const isA = matchPath(location.pathname, {
        path: routes.article,
        exact: true, // Dopasuj tylko ścisłe dopasowania
    });

    return (
        <DetailsTemplate>
            <p>{`note: ${isN}`}</p>
            <p>{`twitter: ${isT}`}</p>
            <p>{`article: ${isA}`}</p>
        </DetailsTemplate>
    );
};