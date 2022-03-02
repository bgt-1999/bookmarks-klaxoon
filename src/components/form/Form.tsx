import React from 'react';
import './form.css';

type Props = {
    search: string;
    setSearch: (value: string) => void;
};

const Form: React.FC<Props> = ({ search, setSearch }) => {

    const submit = (e: React.FormEvent): void => {
        e.preventDefault();
        console.log('submit', e);
    };

    const onChangeSearchField = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };

    return (
        <form onSubmit={(e: React.FormEvent) => submit(e)} className="form">
            <div className="row_search">
                <label htmlFor="search">Search field:</label>
                <input id="search" value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeSearchField(e)} />
            </div>
            <button type="submit">Search</button>
        </form>
    )
}

export default Form;