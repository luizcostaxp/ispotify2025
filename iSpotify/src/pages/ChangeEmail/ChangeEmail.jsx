import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Input from "../Register/Input";
import "./ChangeEmail.css";
import { updateUser } from "../../spotify"; // Importando a função de atualização
import { Alert } from "@mui/material";

const ChangeEmail = ({ userId }) => {
	const navigate = useNavigate();
	const [newEmail, setNewEmail] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const handleConfirm = async () => {
		try {
			await updateUser(userId, { email: newEmail });
			setSuccess("Email atualizado com sucesso!");
			setError("");
		} catch (err) {
			setError(err.message);
			setSuccess("");
		}
	};

	const handleCancel = () => {
		navigate("/my-account");
	};

	return (
		<div className="main_content">
			<Sidebar />
			<div className="account_box">
				<div className="change_box">
					<p>Trocar E-mail</p>
					{error && <Alert severity="error">{error}</Alert>}
					{success && <Alert severity="success">{success}</Alert>}
					<Input
						tipo="Novo E-mail"
						value={newEmail}
						onChange={(e) => setNewEmail(e.target.value)}
					/>
					<div className="button_group">
						<button onClick={handleConfirm}>Confirmar</button>
						<button onClick={handleCancel}>Cancelar</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChangeEmail;
