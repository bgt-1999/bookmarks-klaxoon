import React, { ReactElement } from 'react';
import { Book } from '../../utils/types';

type Props = {
    dataToDisplay: Book;
};

const Display: React.FC<Props> = ({ dataToDisplay }) => {
    const { 
        title, 
        url,
        author_name,
        thumbnail_url,
    } = dataToDisplay;

    const getDuration = (): ReactElement | null => {
        if(dataToDisplay.provider_name === 'Vimeo' && dataToDisplay.duration) {
            const hours = Math.floor(dataToDisplay.duration/3600);
            const minutes = Math.floor((dataToDisplay?.duration%3600)/60);
            const seconds = dataToDisplay.duration%60;
            return <li>{`Durée de la video: ${hours}:${minutes}:${seconds}`}</li>
        }
        return null;
    }

    const getSize = (): ReactElement | null => {
        if(dataToDisplay.provider_name === 'Flickr') {
           return (
           <>
                <li>{`width: ${dataToDisplay.width}`}</li>
                <li>{`height: ${dataToDisplay.height}`}</li>
           </>
           )
        }
        return null;
    }

    const optionsDate: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2>{dataToDisplay.title}</h2>
            <img src={thumbnail_url} alt={`preview ${title}`} />
            <ul>
                <li>{`Nom de l'auteur: ${author_name}`}</li>
                {getDuration()}
                {getSize()}
                {dataToDisplay?.upload_date && (
                    <li>{`Date de la publication de la vidéo: ${new Intl.DateTimeFormat("fr-FR", optionsDate).format(new Date(dataToDisplay.upload_date))}`}</li>
                )}
                <li><a href={url} target="_blank" rel="noreferrer">{`lien: ${url}`}</a></li>
            </ul>
        </div>
    );
};

export default Display;