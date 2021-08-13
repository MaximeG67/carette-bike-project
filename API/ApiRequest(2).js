// API/ApiRequest.js


export function getAllProducts () {
    const url = 'https://carette.000webhostapp.com/public/index.php/products'
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  
export function requestLogin (opts) {
  const url = 'https://carette.000webhostapp.com/public/index.php/login'
  var myInit = { method: 'POST',
                  body: JSON.stringify(opts)}
  return fetch(url,myInit)
      .then((response) => response.json())
      .catch((error) => console.error(error))
}

export function getUser (token) { 
  const url = 'https://carette.000webhostapp.com/public/index.php/HomeLogged/'+token;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getSignout(token) {
  const url = 'https://carette.000webhostapp.com/public/index.php/SignOut/'+token;
  return fetch(url)
    .then((response) => response.text())
    .catch((error) => console.error(error))
}