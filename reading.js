/**
 * Created by Jaime on 17/06/2017.
 */
let fs = require('fs');

try {
    let data = fs.readFileSync('readme.txt', 'utf8');
    console.log(data);
} catch (error) {
    console.error(error);
}
