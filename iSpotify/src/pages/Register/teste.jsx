import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Input from "./Input.jsx";
import { register } from "../../spotify";
import { Alert } from "@mui/material";

const Register = () => {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleRegister = async (e) => {
		e.preventDefault();

		// Validação básica de entrada
		if (!name || !email || !password) {
			setError("Todos os campos devem ser preenchidos!");
			setSuccess(null);
			return;
		}

		if (!email.includes("@")) {
			setError("Digite um email válido!");
			setSuccess(null);
			return;
		}

		try {
			await register(name, email, password);
			setSuccess("Cadastro realizado com sucesso!");
			setError(null);

			// Limpa os campos
			setName("");
			setEmail("");
			setPassword("");

			// Redireciona após o sucesso
			setTimeout(() => navigate("/"), 2000);
		} catch (err) {
			console.error("Erro ao cadastrar usuário:", err);

			// Tratamento específico de erro
			const errorMessage =
				err.response?.status === 409
					? "Este email já está cadastrado!"
					: err.response?.data?.message ||
				  "Erro inesperado ao cadastrar. Tente novamente!";

			setError(errorMessage);
			setSuccess(null);
		}
	};

	const handleLogin = () => {
		navigate("/");
	};

	return (
		<div className="Register">
			<div className="mainContent">
				<h1>
					Inscrever-se em uma <br /> conta grátis do <br /> iSpotify®
				</h1>

				{/* Mensagens de erro e sucesso */}
				{error && (
					<div className="error-message">
						<Alert severity="error">{error}</Alert>
					</div>
				)}
				{success && (
					<div className="success-message">
						<Alert severity="success">{success}</Alert>
					</div>
				)}

				<form className="form" onSubmit={handleRegister}>
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
					<Input
						tipo="Como devemos chamar você?"
						imgSrc="src/assets/account.png"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button className="buttonRegister" type="submit">
						CADASTRAR
					</button>
				</form>

				<h3>
					Já é um usuário do iSpotify? <a onClick={handleLogin}>FAÇA LOGIN</a>
				</h3>
			</div>
		</div>
	);
};

export default Register;
