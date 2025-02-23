import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import LikedTracks from "../../components/LikedTracks/LikedTracks";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styles from "./LikedMusics.module.css";
import img from "../../assets/likedsongs.png"; // Altere para o nome correto da sua imagem

export default function LikedMusics() {
    const { userId } = useParams();

    // Converta userId para número
    const userIdNumber = Number(userId);

    return (
        <div className={styles.userLikedMusicsPage}>
            <Sidebar></Sidebar>
            <div className={styles.mainContainer}>
                <div className={styles.artistInfy}>                    
                    <div className={styles.artistInfo}>
                        <img 
                            src={img} 
                            alt="Imagem de músicas curtidas" 
                            className={styles.artistImage} 
                        />
                        <div className={styles.artistDetails}>
                            <p className={styles.artistLabel}>PLAYLIST</p>
                            <p className={styles.artistName}>Músicas Curtidas</p>
                        </div>
                    </div>
                   
                
                </div>
                <div className={styles.tracksContainer}>
                    <div className={styles.header}>
                        <p># TÍTULO</p>
                        <p>Gênero</p>
                        <AccessTimeIcon
                            style={{
                                fontSize: "28px",
                                color: "white",
                                marginTop: "2rem",
                            }}
                        />
                    </div>
                    <hr className={styles.separator} />
                    <div className={styles.tracks}>
                        <LikedTracks userId={userIdNumber} />
                    </div>
                </div>
            </div>
        </div>
    );
}
