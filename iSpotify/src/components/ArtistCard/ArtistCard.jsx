import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getArtist } from '../../spotify';


import styles from './ArtistCard.module.css';

export default function ArtistCard({ artistId }) {
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        async function fetchArtist() {
            const artistData = await getArtist(artistId);
            setArtist(artistData);
        }

        fetchArtist();
    }, [artistId]);

    if (!artist) return <div>Loading...</div>;

    return (
        <Link className={styles.artistLink} to={`/artist-tracks-page/${artistId}`}>
            <div className={styles.artistCard}>
            <img className={styles.artistImage} src={artist.image} alt={artist.name} />
            <p className={styles.artistName}>{artist.name}</p>
            <p className={styles.placeholder}>Artista</p>
            </div>
        </Link>
    );
}

ArtistCard.propTypes = {
    artistId: PropTypes.number.isRequired,
};