import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	// Verifica se existe um token no localStorage
	const isAuthenticated = !!localStorage.getItem('user');

	// Se isAuthenticated for verdadeiro, renderiza os children, senão redireciona para a página de login
	return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
