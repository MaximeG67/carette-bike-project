// API/ApiRequest.js


// export function getAllProducts () {
//     const url = 'http://192.168.1.114/FICHIER%20PROPRE/projet_odoo/back-symfony/webservices-app/public/index.php/all_products'
//     return fetch(url)
//       .then((response) => response.json())
//       .catch((error) => console.error(error))
//   }

export function getProducts () {
  const url = 'http://192.168.1.114/FICHIER%20PROPRE/projet_odoo/back-symfony/webservices-app/public/index.php/products'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getAccessories () {
  const url = 'http://192.168.1.114/FICHIER%20PROPRE/projet_odoo/back-symfony/webservices-app/public/index.php/accessories'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function requestLogin (opts) {
  const url = 'http://192.168.1.114/FICHIER%20PROPRE/projet_odoo/back-symfony/webservices-app/public/index.php/login'
  var myInit = { method: 'POST',
                  body: JSON.stringify(opts)}
  return fetch(url,myInit)
      .then((response) => response.json())
      .catch((error) => console.error(error))
}

export function getUser (token) { 
  const url = 'http://192.168.1.114/FICHIER%20PROPRE/projet_odoo/back-symfony/webservices-app/public/index.php/HomeLogged/'+token;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getSignout(token) {
  const url = 'http://192.168.1.114/FICHIER%20PROPRE/projet_odoo/back-symfony/webservices-app/public/index.php/SignOut/'+token;
  return fetch(url)
    .then((response) => response.text())
    .catch((error) => console.error(error))
}