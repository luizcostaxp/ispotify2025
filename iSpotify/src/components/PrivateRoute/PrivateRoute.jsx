// import React from "react";
// import { Navigate } from "react-router-dom"; // Importa o componente Navigate do pacote react-router-dom

// // Define um componente funcional chamado PrivateRoute
// export const PrivateRoute = ({ children }) => {
// 	// Verifica se existe um token no localStorage
// 	const cookie = document.cookie;
// 	//console.log(cookie);
// 	//!!localStorage.getItem("jwt")
// 	const isAuthenticated = cookie !== null;
// 	//const isAuthenticated = true;

// 	// Se isAuthenticated for verdadeiro, renderiza os children, senão redireciona para a página de login
// 	return isAuthenticated ? children : <Navigate to="/" replace />;
// };

// export default PrivateRoute; // Exporta o componente PrivateRoute para ser usado em outros arquivos

import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	// Verifica se existe um token no localStorage
	const isAuthenticated = !!localStorage.getItem('user');

	// Se isAuthenticated for verdadeiro, renderiza os children, senão redireciona para a página de login
	return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
