const jwt = require('jsonwebtoken')

//create a token

// jwt.sign()



const token = jwt.sign(
    // payload
    {userid: 111, name: 'Jojhn Due', email: 'john@gmail.com'},
    // token secret code
    'a-string-secret-at-least-256-bits-long',
    // expiration time - examples: '60s', '5m', '2h', '1d', '7d', '30d'
    {expiresIn: '60s'}
)

const mytoken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30`

// Validate
// jwt.veriy

jwt.verify(
    // token
    token,
    // token secret code (must match the one used to sign)
    'a-string-secret-at-least-256-bits-long',
    // function to verify
    (err, decode) => {
        if(err) {
            console.log(err.message)
            return
        }
        console.log(decode)
    }
)

