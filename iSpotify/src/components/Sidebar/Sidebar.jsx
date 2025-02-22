import { useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { logout, getCurrentUser } from "../../spotify";


export default function Sidebar() {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const user = await getCurrentUser();
				setUser(user);
			} catch (error) {
				console.error("Erro ao obter o usuário atual: ", error);
			}
		};

		fetchUser();
	}, []);

	const handleLogout = async () => {
		try {
			await logout();
			navigate("/");
		} catch (error) {
			console.error("Erro ao fazer logout:", error);
		}
	};

	const links = [
		{ name: "Artistas", path: "/artists" },
		...(user ? [
			{ name: "Músicas Curtidas", path: `/liked-musics/${user.id}` },
			{ name: "Minha Conta", path: `/my-account/${user.id}` },
		] : []),
	];

	return (
		<div className={styles.sidebar}>
			<span>
				<strong>iSpotify®</strong>
			</span>
			{links.map((link) => (
				<Link
					className={styles.linkStyle}
					key={link.path}
					to={link.path}
				>
					{link.name}
				</Link>
			))}
			<button className={styles.logoutButton} onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
}
