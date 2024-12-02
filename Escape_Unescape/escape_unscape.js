//todo --------ESCAPE() and UNSCAPE()------------------

//! Escape() ----------

const data = "my password"
console.log(escape(data));


const password = "pooja hello how"
console.log(encodeURI(password));

const encode = "Good morning"
console.log(encodeURIComponent(encode));

//! unscape() -------------


const data1 = "my%20password"
console.log(unescape(data1));


const password1 = "pooja%20hello%20how"
console.log(decodeURI(password1));

const encode1 = "Good%20morning"
console.log(decodeURIComponent(encode1));
