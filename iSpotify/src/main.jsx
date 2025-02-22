import React from "react";
import ReactDOM from "react-dom/client";

// Packages Import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages Import
import Home from "./pages/Home/Home.jsx";
import LikedMusics from "./pages/LikedMusics/LikedMusics.jsx";
import Register from "./pages/Register/Register.jsx";
import ArtistsPage from "./pages/Artists/ArtistsPage.jsx";
import MyAccount from "./pages/MyAccount/MyAccount.jsx";
import ChangeEmail from "./pages/ChangeEmail/ChangeEmail";
import ChangePassword from "./pages/ChangePassword/ChangePassword";

//Lógica de Autenticação Cadastral
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import "./index.css";
import ArtistTracksPage from "./pages/ArtistTracksPage/ArtistTracksPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: (
			<div>
				404 Not Found <a href="/">Go To Main Page</a>{" "}
			</div>
		),
	},
	{
		path: "/liked-musics/:userId",
		element: (
			<PrivateRoute>
				<LikedMusics />
			</PrivateRoute>
		),
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/artists",
		element: (
			<PrivateRoute>
				<ArtistsPage />
			</PrivateRoute>
		),
	},
	{
		path: "/artist-tracks-page/:artistId",
		element: (
			<PrivateRoute>
				<ArtistTracksPage />
			</PrivateRoute>
		),
	},
	{
		path: "/my-account/:userId",
		element: (
			<PrivateRoute>
				<MyAccount />
			</PrivateRoute>
		),
	},
	{
		path: "/change-email/:userId",
		element: (
			<PrivateRoute>
				<ChangeEmail />
			</PrivateRoute>
		),
	},
	{
		path: "/change-password/:userId",
		element: (
			<PrivateRoute>
				<ChangePassword />
			</PrivateRoute>
		),
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
