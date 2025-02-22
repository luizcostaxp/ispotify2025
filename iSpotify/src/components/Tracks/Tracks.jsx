import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	getArtistTracks,
	getArtist,
	likeSong,
	unlikeSong,
	getCurrentUser,
	getUserLikedSongs,
} from "../../spotify";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styles from "./Tracks.module.css";

export default function Tracks({ artistId }) {
	const [tracksArray, setTracksArray] = useState([]);
	const [likedSongs, setLikedSongs] = useState(new Set());

	useEffect(() => {
		async function fetchArtistTracks() {
			try {
				const response = await getArtistTracks(artistId);
				const artist = await getArtist(artistId);
				const user = await getCurrentUser();
				const likedSongsResponse = await getUserLikedSongs(user.id);
				const likedSongsSet = new Set(
					likedSongsResponse.map((song) => song.id)
				);
				console.log(likedSongsResponse);
				console.log(likedSongsSet);

				const tracksData = response.map((track) => ({
					id: track.id,
					name: track.title,
					albumName: track.genre,
					artistName: artist.name || "Artista Desconhecido",
				}));
				setTracksArray(tracksData);
				setLikedSongs(likedSongsSet);
			} catch (error) {
				console.error("Erro ao buscar as faixas do artista", error);
			}
		}
		fetchArtistTracks();
	}, [artistId]);

	const handleLike = async (trackId) => {
		const trackIdNumber = Number(trackId);
		try {
			await likeSong(trackIdNumber);
			setLikedSongs((prev) => new Set(prev).add(trackIdNumber));
		} catch (error) {
			console.error("Erro ao curtir a música", error);
		}
	};

	const handleUnlike = async (trackId) => {
		const trackIdNumber = Number(trackId);
		try {
			await unlikeSong(trackIdNumber);
			setLikedSongs((prev) => {
				const newSet = new Set(prev);
				newSet.delete(trackIdNumber);
				return newSet;
			});
		} catch (error) {
			console.error("Erro ao descurtir a música", error);
		}
	};

	return (
		<div className={styles.trackContainer}>
			{tracksArray.map((track, index) => (
				<div className={styles.trackInfo} key={index}>
					<div className={styles.trackNameAndArtistAndIndex}>
						<div className={styles.trackIndex}>
							<span>{index + 1}</span>
						</div>
						<div className={styles.trackNameAndArtistName}>
							<p className={styles.trackName}>{track.name}</p>
							<p className={styles.artistName}>
								{track.artistName}
							</p>
						</div>
					</div>
					<div className={styles.albumName}>
						<p>{track.albumName}</p>
					</div>
					<div>
						{likedSongs.has(track.id) ? (
							<FavoriteIcon
								className={styles.favoriteIcon}
								style={{
									fontSize: "3.5rem",
									marginTop: "1.5rem",
									color: "green",
								}}
								onClick={() => handleUnlike(track.id)}
							/>
						) : (
							<FavoriteBorderIcon
								className={styles.favoriteIcon}
								style={{
									fontSize: "3.5rem",
									marginTop: "1.5rem",
								}}
								onClick={() => handleLike(track.id)}
							/>
						)}
					</div>
				</div>
			))}
		</div>
	);
}

Tracks.propTypes = {
	artistId: PropTypes.number.isRequired,
};
