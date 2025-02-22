import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Input from "./Input.jsx";
import { register } from "../../spotify";

const Register = () => {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			console.log(name, email, password);
			await register(name, email, password);
			navigate("/");
		} catch (err) {
			setError(err.message);
		}
	};

	const handleLogin = () => {
		navigate("/");
	};

	return (
		<>
			<div className="  Register">
				<div className="mainContent">
					<h1>
						Inscrever-se em uma <br></br>conta grátis do <br></br>{" "}
						iSpotify ®
					</h1>
					{error && <div className="error-message">{error}</div>}
					<form className="form" onSubmit={handleRegister}>
						<Input
							tipo="Nome"
							imgSrc="src/assets/account.png"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<Input
							tipo="Email"
							imgSrc="src/assets/mail.png"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							tipo="Senha"
							type="password"
							imgSrc="src/assets/lock.png"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button className="buttonRegister" type="submit">
							CADASTRAR
						</button>
					</form>
					<h3>
						Já é um usuário do iSpotify ?{" "}
						<a onClick={handleLogin}>FAÇA LOGIN</a>
					</h3>
				</div>
			</div>
		</>
	);
};

export default Register;
