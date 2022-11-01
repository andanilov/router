import React from 'react';
import { Navigate } from 'react-router'; 
import HomePage from './pages/Home';
import UsersList from './pages/UsersList';
import User from './pages/User';
import UserEdit from './pages/UserEdit';

const routes = [
    { path: "", element: <HomePage /> },
    { path: "users", children: [
        { path: "", element: <UsersList /> },
        { path: ":id", children: [
            { path: "profile", element: <User /> },
            { path: "edit", element: <UserEdit /> },
            { path: "", element: <Navigate to="profile" /> },
            { path: "*", element: <Navigate to="profile" /> },
        ]},
    ]},
    { path: "*", element: <Navigate to="/" /> },
];

export default routes;
