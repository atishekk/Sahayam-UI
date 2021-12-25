import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import jwt from 'jsonwebtoken';

export default function NgoRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem('AUTH_TOKEN');
  const value = jwt.decode(token);

  return (
    <Route
      {...rest}
      render={(props) => {
        return value && value.ngo ? <Component {...props} /> : <Redirect to="/dashboard" />;
      }}
    ></Route>
  );
}
