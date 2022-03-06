import React, { ReactChild } from "react";

type Props = { 
    children: ReactChild;
    addBook: () => void;
};

const AddBook: React.FC<Props> = ({ children, addBook }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {children}
            <button onClick={() => addBook()}>Ajouter dans le bookmarks</button>
        </div>
    );
};

export default AddBook;