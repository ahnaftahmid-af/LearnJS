// 'const' key use korle atar variabler value change hobe na. je value ta deya hobe setay lock hoye thakbe. 
const accountId = 7790
//accountId = 7070 // ata output asbe na. karon upore 'const' key diye declear kora ase.
let accountName = "Ahnaf Tahmid"
let accountEmail = "ahnaf@gmail.com"
var accountPassword = 1234
accountCity = "Dhaka" //Worng way to pass variables but it's work properly.
let accountState; // variable ar value pass na korle seta defult vabe 'undefined' hisebe declear korbe

console.log(accountId);

accountName = "Tasin"
accountEmail = "ahnaf@google.com"
accountPassword = 777

// multiple variable table akare output dekhar jonno 'console.table' use kora hoi. jemon-
console.table([accountId, accountName, accountEmail, accountPassword, accountCity, accountState])

/* Prefer not to use the 'var' key
because of issues in block scope and functional scope 
*/
