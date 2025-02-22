import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getUserLikedSongs, unlikeSong, getArtist } from "../../spotify";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./LikedTracks.module.css";

export default function LikedTracks({ userId }) {
	const [likedTracks, setLikedTracks] = useState([]);

	useEffect(() => {
		async function fetchLikedSongs() {
			try {
				const likedSongsResponse = await getUserLikedSongs(userId);
				const likedSongsWithArtistName = await Promise.all(likedSongsResponse.map(async (track) => {
					const artist = await getArtist(track.artist_id);
					return { ...track, artistName: artist.name };
				}));
				setLikedTracks(likedSongsWithArtistName);
			} catch (error) {
				console.error("Erro ao buscar músicas curtidas", error);
			}
		}
		fetchLikedSongs();
	}, [userId]);

	const handleUnlike = async (trackId) => {
		try {
			await unlikeSong(trackId);
			// Atualiza a lista de músicas curtidas removendo a música descurtida
			setLikedTracks(likedTracks.filter((track) => track.id !== trackId));
		} catch (error) {
			console.error("Erro ao descurtir a música", error);
		}
	};

	return (
		<div className={styles.trackContainer}>
			{likedTracks.map((track, index) => (
			<div className={styles.trackInfo} key={track.id}>
				<div className={styles.trackNameAndArtistAndIndex}>
					<div className={styles.trackIndex}>
						<span>{index + 1}</span>
					</div>
					<div className={styles.trackNameAndArtistName}>
						<p className={styles.trackName}>{track.title}</p>
						<p className={styles.artistName}>
							{track.artistName}
						</p>
					</div>
				</div>
				<div className={styles.albumName}>
					{track.genre}
				</div>
				<div>
					<DeleteIcon
						className={styles.deleteIcon}
						style={{ fontSize: "3.5rem", marginTop: "1.5rem" }}
						onClick={() => handleUnlike(track.id)}
					/>
				</div>
			</div>
		))}
		</div>
	);
}

LikedTracks.propTypes = {
	userId: PropTypes.number.isRequired,
};
