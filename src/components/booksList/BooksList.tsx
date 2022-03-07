import React, { ReactElement } from 'react';
import { Book } from '../../utils/types';
import Display from '../display/Display';
import RemoveBook from '../removeBook/RemoveBook';

type Props = {
    bookmarks: Book[];
    removeBook: (index: number) => void;
};

const booksList: React.FC<Props> = ({ bookmarks, removeBook }) => {
    return (
        <div>
            <h3>Votre BooksList</h3>
            <div style={{ display: 'flex', alignItems: 'center', width: '100vw', justifyContent: 'space-around', padding: 50, flexWrap: 'wrap' }}>
                {bookmarks.map((book: Book, index: number): ReactElement => (
                    <RemoveBook key={index} onClickRemove={() => removeBook(index)} >
                        <Display dataToDisplay={book} />
                    </RemoveBook>)
                )}
            </div>
        </div>
    );
};

export default booksList;