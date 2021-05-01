var customerName = 'bob';
const leastFavoriteCustomer = '';
var bestCustomer;
function setBestCustomer(){
  bestCustomer = 'not bob';
  // return bestCustomer;
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'Jason'
}

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase()
}