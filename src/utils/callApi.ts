import { Book } from "./types";

const API_ONEMBED = 'https://noembed.com/embed?url='

export const callGetBooks = (urlToSearch: string): Book | null => {
  const url = encodeURI(`${API_ONEMBED}${urlToSearch}`)
  // test https://vimeo.com/565486457 https://vimeo.com/8964902
  // test https://www.flickr.com/photos/feuilllu/45771361701/
  const xhr = new XMLHttpRequest(); 
  xhr.overrideMimeType("application/json");  
  xhr.open('GET', url, false);
  xhr.send();
  if(xhr.status === 200) {
    return JSON.parse(xhr.response);
  }
  return null;
};