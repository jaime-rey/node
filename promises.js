/**
 * Created by Jaime on 18/06/2017.
 */
let fs = require('fs');

let promise = new Promise((resolve, reject) => {

    fs.readFile('readme.txt', 'utf8', (error, data) => {
        if (error) {
            return reject(error);
        }
        resolve(data);
    });
});

promise.then(result => {
    console.log(result);
}, error => {
    console.error(error.message)
});