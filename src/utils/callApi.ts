export const callGetBooks = async () => {

    // fetch('http://www.flickr.com/services/oembed/?format=json&url=http%3A//www.flickr.com/photos/bees/2341623661/', {
    // method: 'GET',
    // mode: "no-cors",
    // headers: {
    //   ContentType: 'application/json;charset=utf-8',
    //   AccessControlAllowOrigin : '*', 
    //   AccessControlAllowCredentials: 'true'
    // }
    // }).then((response) => {
    //   console.log('response', response);
    //   console.log('responseJson', response.json());
    // }).catch((error) => {
    //   console.log('error', error);
    // });

    const ResponseData = await fetch('https://noembed.com/embed?url=http%3A//www.youtube.com/watch%3Fv%3DbDOYN-6gdRE&callback=my_embed_function');
		const Response = await ResponseData.json();
    console.log('Response', Response)
};