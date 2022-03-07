import { Book, Time } from "./types";

const JOINELEMENT = "|||join|||";

export const getBooksToString = (books: Book[]): string => {
   const bookToArrayOfString = books.map(book => JSON.stringify(book));
   return bookToArrayOfString.join(JOINELEMENT);
};

export const getStringToBooks = (value: string): Book[] => {
    const stringToArrayOfString = value.split(JOINELEMENT);
    return stringToArrayOfString.map(book => JSON.parse(book));
};

export const secondsToHoursAndMinutes = (time: number): Time => ({
    hours: Math.floor(time/3600),
    minutes: Math.floor((time%3600)/60),
    seconds: time%60
});