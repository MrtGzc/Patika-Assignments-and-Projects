import getData from './getData.js';


const userId = 1; // İsteğiniz doğrultusunda bir kullanıcı ID'si seçin
getData(userId)
  .then(result => {
    console.log(result); // Gelen sonucu log'layın
  })
  .catch(err => {
    console.error(err); // Hata durumunda hatayı log'layın
  });