import { useParams } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Tracks from "../../components/Tracks/Tracks";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

import styles from "./ArtistTracksPage.module.css";

export default function ArtistTracksPage() {
	const { artistId } = useParams();

	return (
		<div className={styles.artistTracksPage}>
			<Sidebar></Sidebar>
			<div className={styles.tracksContainer}>
				<div className={styles.header}>
					<p>#TÍTULO</p>
					<p>GÊNERO</p>
					<AccessTimeIcon
						style={{
							fontSize: "3.5rem",
							color: "white",
							marginTop: "2rem",
						}}
					/>
				</div>
				<hr className={styles.separator} />
				<div className={styles.tracks}>
					<Tracks artistId={parseInt(artistId)}></Tracks>
				</div>
			</div>
		</div>
	);
}
