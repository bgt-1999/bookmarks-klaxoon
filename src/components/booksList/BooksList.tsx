import React, { ReactElement } from 'react';
import { VimeoData } from '../../utils/types';
import Display from '../display/Display';
import RemoveBook from '../removeBook/RemoveBook';

type Props = {
    bookmarks: VimeoData[];
    removeBook: (index: number) => void;
};

const booksList: React.FC<Props> = ({ bookmarks, removeBook }) => {
    return (
        <div>
            <h3>Votre BooksList</h3>
            <div style={{ display: 'flex', alignItems: 'center', width: '100vw', justifyContent: 'space-around', padding: 50, }}>
                {bookmarks.map((book: VimeoData, index: number): ReactElement => (
                    <RemoveBook key={index} onClickRemove={() => removeBook(index)} >
                        <Display dataToDisplay={book} />
                    </RemoveBook>)
                )}
            </div>
        </div>
    );
};

export default booksList;