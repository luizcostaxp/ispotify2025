import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import LikedTracks from "../../components/LikedTracks/LikedTracks";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styles from "./LikedMusics.module.css";

export default function LikedMusics() {
    const { userId } = useParams();

    // Converta userId para número
    const userIdNumber = Number(userId);

    return (
        <div className={styles.userLikedMusicsPage}>
            <Sidebar />
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
                    <LikedTracks userId={userIdNumber} />
                </div>
            </div>
        </div>
    );
}
