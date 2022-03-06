import React, { ReactChild } from 'react';

type Props = {
    children: ReactChild,
    onClickRemove: () => void;
};

const RemoveBook: React.FC<Props> = ({ children, onClickRemove }) => {
    return(
        <div>
            <button onClick={() => onClickRemove()}>Retirer</button>
            {children}
        </div>
    );
};

export default RemoveBook;