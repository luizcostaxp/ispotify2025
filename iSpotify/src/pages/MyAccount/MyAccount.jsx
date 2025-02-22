import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Input from "../Register/Input";
import "./MyAccount.css";

const MyAccount = () => {
	const [isChangeEmailOpen, setIsChangeEmailOpen] = useState(false);
	const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);

	const openChangeEmailModal = () => {
		setIsChangeEmailOpen(true);
	};

	const openChangePasswordModal = () => {
		setIsChangePasswordOpen(true);
	};

	const closeModal = () => {
		setIsChangeEmailOpen(false);
		setIsChangePasswordOpen(false);
	};

	return (
		<div className="main_content">
			<Sidebar />
			<div className="account_box">
				<p>Minha Conta</p>
				<form>
					<Input tipo={"Nome"} imgSrc={"src/assets/account.png"} />
					<Input tipo={"Email"} imgSrc={"src/assets/mail.png"} />
				</form>
				<button className="TrocarEmail" onClick={openChangeEmailModal}>
					Trocar E-mail
				</button>
				<button
					className="TrocarSenha"
					onClick={openChangePasswordModal}
				>
					Trocar Senha
				</button>
			</div>
			{isChangeEmailOpen && (
				<div className="modal_overlay">
					<div className="modal_box">
						<p>Novo E-mail</p>
						<Input
							tipo={"Novo E-mail"}
							imgSrc={"src/assets/mail.png"}
						/>
						<div className="button_group">
							<button
								className="confirm_button"
								onClick={closeModal}
							>
								Confirmar
							</button>
							<button
								className="cancel_button"
								onClick={closeModal}
							>
								Cancelar
							</button>
						</div>
					</div>
				</div>
			)}
			{isChangePasswordOpen && (
				<div className="modal_overlay">
					<div className="modal_box">
						<p>Nova Senha</p>
						<Input
							tipo={"Senha atual"}
							imgSrc={"src/assets/lock.png"}
						/>
						<Input
							tipo={"Nova senha"}
							imgSrc={"src/assets/lock.png"}
						/>
						<Input
							tipo={"Confirmar nova senha"}
							imgSrc={"src/assets/lock.png"}
						/>
						<div className="button_group">
							<button
								className="confirm_button"
								onClick={closeModal}
							>
								Confirmar
							</button>
							<button
								className="cancel_button"
								onClick={closeModal}
							>
								Cancelar
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MyAccount;

