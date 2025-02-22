import ArtistCard from "../../components/ArtistCard/ArtistCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./ArtistsPage.module.css";

export default function ArtistsPage() {

	return (
		<div className={styles.artistsPage}>
			<Sidebar/>
			<div className={styles.cardsContainer}>
				<p className={styles.title}>Artistas</p>
				<div className={styles.firstCardsRow}>
					<ArtistCard artistId={11}></ArtistCard>
					<ArtistCard artistId={2}></ArtistCard>
					<ArtistCard artistId={3}></ArtistCard>
					<ArtistCard artistId={4}></ArtistCard>
					<ArtistCard artistId={5}></ArtistCard>
				</div>
				<div className={styles.secondCardsRow}>
					<ArtistCard artistId={6}></ArtistCard>
					<ArtistCard artistId={7}></ArtistCard>
					<ArtistCard artistId={8}></ArtistCard>
					<ArtistCard artistId={9}></ArtistCard>
					<ArtistCard artistId={10}></ArtistCard>
				</div>
			</div>
		</div>
	);
}
