// API/ApiRequest.js



export function getFilmsFromApiWithSearchedText (text) {
    const url = ''
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }