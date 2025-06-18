//& ------Rest API-------------

//^ Representational state transfer
//^ Is a widely used web API Architecture that operates over HTTP
//^ and uses URSs for resource identification
//^ It primarily relies on standard HTTP methods like
//^ GET, POST, PUT and DELETE

//* Example : Fetching data from the rest Api

// const x = fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error : ' , error))
// console.log(x);

//& -------SOAP API ----------------

//^ Simple Access Object Protocol
//! Soap does Not support on browser
//^ It is a protocol for exchanging structured information, often used in enterprise applications
//^ It uses XML for messsages, and each message has strict structure requirements

//* Example : Using a SOAP client library, as SOAP requires specific XML format
// import soap from 'soap'
// const url = 'https://example.com/service?wsdl'
// soap.createClient(url, (err, client) => {
    
//     client.MyFunction(args, (err, result)=> {
//         console.log(result);
        
//     })
// })

const query = `
  query {
    countries {
      code
      name
    }
  }
`;

fetch('https://countries.trevorblades.com/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query })
})
.then(res => res.json())
.then(data => console.log(data.data))
.catch(err => console.error(err));
