import { VimeoData } from "./types";

const API_ONEMBED = 'https://noembed.com/embed?url='

export const callGetBooks = (urlToSearch: string): VimeoData | null => {
  const url = encodeURI(`${API_ONEMBED}${urlToSearch}`)
  // test https://vimeo.com/565486457 https://vimeo.com/8964902
  const xhr = new XMLHttpRequest(); 
  xhr.overrideMimeType("application/json");  
  xhr.open('GET', url, false);
  xhr.send();
  if(xhr.status === 200) {
    return JSON.parse(xhr.response);
  }
  return null;
};