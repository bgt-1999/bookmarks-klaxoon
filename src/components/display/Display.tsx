import React from 'react';
import { VimeoData } from '../../utils/types';

type Props = {
    dataToDisplay: VimeoData;
};

const Display: React.FC<Props> = ({ dataToDisplay }) => {
    const { 
        title, 
        url,
        author_name,
        upload_date,
        duration,
        thumbnail_url } = dataToDisplay;
    const optionsDate: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const hours = Math.floor(duration/3600);
    const minutes = Math.floor((duration%3600)/60);
    const seconds = duration%60;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2>{dataToDisplay.title}</h2>
            <img src={thumbnail_url} alt={`preview ${title}`} />
            <ul>
                <li>{`Nom de l'auteur: ${author_name}`}</li>
                <li>{`Durée de la video: ${hours}:${minutes}:${seconds}`}</li>
                <li>{`Date de la publication de la vidéo: ${new Intl.DateTimeFormat("fr-FR", optionsDate).format(new Date(upload_date))}`}</li>
                <li><a href={url} target="_blank" rel="noreferrer">{`lien: ${url}`}</a></li>
            </ul>
        </div>
    );
};

export default Display;