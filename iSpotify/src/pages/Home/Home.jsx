import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import Sidebar from "../../components/Sidebar/Sidebar";

import styles from "./Home.module.css";

const Home = () => {
	return (
		<div className={styles.homeContainer}>
			<LoginForm />
		</div>
	);
};

export default Home;
