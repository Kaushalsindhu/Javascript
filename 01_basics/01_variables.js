const accountId = 1234; // cannot be changed
let accountName = "Kaushal"; // 
var password = "Slash"; // Not preferable because of issue in block scope and functional scope
accountCity = "Sonipat"; // No error but not preferable.

// accountId = 1422; Not allowed to change the value of a const variable
accountName = "Aadi";
password = "rabbit";
accountCity = "Delhi";
console.log(accountId);
console.table([accountId, accountName, password, accountCity]);