// API/ApiRequest.js


export function getAllProducts () {
    const url = 'https://192.168.0.10/projet_odoo/back-symfony/webservices-app/public/index.php/products'
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }