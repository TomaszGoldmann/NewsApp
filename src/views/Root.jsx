import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {Notes} from "src/views/Notes.jsx";
import {Twitters} from "src/views/Twitters.jsx";
import {Articles} from "src/views/Articles.jsx";
import {MainTemplate} from "src/template/MainTemplate.jsx";
import {DetailPage} from "src/views/DetailPage.jsx";
import {routes} from "src/routes/index.jsx";

export const Root = () => {
    return (
        <BrowserRouter>
            <MainTemplate>
                <Routes>
                    <Route path={routes.home} element={<Navigate to="/notes"/>}/>
                    <Route path={routes.notes} element={<Notes/>}/>
                    <Route path={routes.note} element={<DetailPage/>}/>
                    <Route path={routes.twitters} element={<Twitters/>}/>
                    <Route path={routes.twitter} element={<DetailPage/>}/>
                    <Route path={routes.articles} element={<Articles/>}/>
                    <Route path={routes.article} element={<DetailPage/>}/>
                </Routes>
            </MainTemplate>
        </BrowserRouter>
    );
};
