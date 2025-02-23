import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Tracks from "../../components/Tracks/Tracks";
import { getArtist } from "../../spotify";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import styles from "./ArtistTracksPage.module.css";

export default function ArtistTracksPage() {
    const { artistId } = useParams();
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        const fetchArtist = async () => {
            try {
                const artistData = await getArtist(artistId);
                setArtist(artistData);
            } catch (error) {
                console.error("Erro ao buscar detalhes do artista:", error);
            }
        };

        fetchArtist();
    }, [artistId]);

    return (
        <div className={styles.artistTracksPage}>
            <Sidebar></Sidebar>
			<div className={styles.mainContainer}>
				<div className={styles.artistInfy}>
				{artist && (
                    <div className={styles.artistInfo}>
                        <img 
                            className={styles.artistImage} 
                            src={artist.image} 
                            alt={artist.name} 
                        />
                        <div className={styles.artistDetails}>
                            <p className={styles.artistLabel}>ARTISTA</p>
                            <p className={styles.artistName}>{artist.name}</p>
                        </div>
                    </div>
                )}

				</div>
				<div className={styles.buttons}>
					<div className={styles.playButton}>
        				<span className="material-icons" style={{ fontSize: '30px', color: 'black' }}>
            				play_arrow
        				</span>
    				</div>
					<span className="material-icons" style={{ fontSize: '30px', color: 'white' }}>
						favorite_border
					</span>
					<span className="material-icons" style={{ fontSize: '30px', color: 'white' }}>
						download
					</span>
					<span className="material-icons" style={{ fontSize: '30px', color: 'white' }}>
						more_vert
					</span>
				</div>
				<div className={styles.tracksContainer}>
					<div className={styles.header}>
						<p># TÍTULO</p>
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
						<Tracks artistId={parseInt(artistId)} />
					</div>
				</div>
			</div>
        </div>
    );
}
