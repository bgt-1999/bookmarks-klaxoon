import { Book } from "./types";

const JOINELEMENT = "|||join|||";

export const getBooksToString = (books: Book[]): string => {
   const bookToArrayOfString = books.map(book => JSON.stringify(book));
   return bookToArrayOfString.join(JOINELEMENT);
};

export const getStringToBooks = (value: string): Book[] => {
    const stringToArrayOfString = value.split(JOINELEMENT);
    return stringToArrayOfString.map(book => JSON.parse(book));
};