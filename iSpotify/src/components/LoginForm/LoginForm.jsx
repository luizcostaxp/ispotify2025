import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../spotify";
import Input from "../../pages/Register/Input";
import styles from "./LoginForm.module.css";
import { Alert } from "@mui/material";

const LoginForm = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();

		// Verifica se ambos os campos estão preenchidos
		if (!email || !password) {
			setError("É necessário preencher todos os campos.");
			return;
		}

		try {
			await login(email, password);

			navigate("/artists");
		} catch (err) {
			// Tratamento específico de erros
			if (err.response && err.response.status === 401) {
				setError("Senha Incorreta");
			} else if (err.response && err.response.status === 404) {
				setError("Conta inexistente");
			} else {
				setError("Usuário ou senha incorretos");
			}
		}
	};

	/*try {
			await login(email, password);
			navigate("/artists");
		} catch (err) {
			setError(err.message);
		}
	};*/

	const handleRegister = () => {
		navigate("/register");
	};

	return (
		<div className={styles.loginPage}>
			<div className={styles.loginContainer}>
				<div className={styles.title}>iSpotify ®</div>
				<div className={styles.subtitle}>Música para todos.</div>
				{error && (
					<Alert
						severity={
							error ===
								"É necessário preencher todos os campos." ||
							error === "Usuário ou senha incorretos."
								? "warning"
								: "error"
						}
					>
						{error}
					</Alert>
				)}
				<form onSubmit={handleLogin}>
					<Input
						tipo="Email"
						imgSrc="src/assets/mail.png"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						tipo="Senha"
						imgSrc="src/assets/lock.png"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
					/>
					<button className={styles.loginButton} type="submit">
						Entrar
					</button>
				</form>
				<p className={styles.signupText}>
					Não tem uma conta?{" "}
					<a onClick={handleRegister}>Inscreva-se</a>
				</p>
			</div>
		</div>
	);
};

export default LoginForm;
