import {
    BrowserRouter, Navigate, Route,
    Routes,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import React, {useEffect } from "react";
import homeScreen from "../screens/homeScreen";

export const AppRouter = () =>
{
    const dispatch = useDispatch();

    useEffect(() =>
    {

    },[dispatch])


    return(
        <>
            <BrowserRouter>

                <Routes>

                    <Route path="/" exact element={<homeScreen/>} />

                </Routes>
            </BrowserRouter>
        </>
    );

}
