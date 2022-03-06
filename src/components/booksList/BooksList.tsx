import React, { ReactElement, Fragment } from 'react';
import { VimeoData } from '../../utils/types';
import Display from '../display/Display';

type Props = {
    bookmarks: VimeoData[];
};

const booksList: React.FC<Props> = ({ bookmarks }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', width: '100vw', justifyContent: 'space-around', padding: 50, }}>
            {bookmarks.map((book: VimeoData, index: number): ReactElement => (
                <div key={index}>
                    <Display dataToDisplay={book} />
                </div>)
            )}
        </div>
    );
};

export default booksList;