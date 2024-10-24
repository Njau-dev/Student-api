const JWT = require('jsonwebtoken');

module.exports = {
    signAccessToken: (UserId) => {
        return new Promise((resolve, reject) => {
            const payload = {}
            const secret = process.env.ACCESS_TOKEN_SECRET;
            const options = {
                expiresIn: '10m',
                issuer: 'miharbi.com',
                audience: UserId,
            }
            JWT.sign(payload, secret, options, (error, token) => {
                if (error) reject(error);
                resolve(token);
            })
        })
    },

}