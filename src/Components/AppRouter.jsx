import React, {useContext} from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import { defaultRoutes } from '../router/index';


export const AppRouter = () => {
  
  return (
    <div>
        <Routes>
          {defaultRoutes.map((route) => (
            <Route
              path={route.path}
              element={route.component}
              exact={route.exact}
              key={route.path}
            />
          ))}
        </Routes>
    </div>
  );
};
