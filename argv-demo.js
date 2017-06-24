/**
 * Created by Jaime on 18/06/2017.
 */
process.argv.forEach((value, index, args) => {
    console.log('process.argv[' + index + '] = ' + value + ', args: ' + args);
});
console.log(__filename + " " + __dirname + " " + process.cwd());
let origDir = __dirname;
console.log('Starting in ' + process.cwd());

try {
    process.chdir('/');
} catch (error) {
    console.error('chdir: ' + error.message);
    process.chdir(origDir);
}

console.log('Current working directory is now: ' + process.cwd());

try {
    process.chdir(origDir);
} catch (error) {
    console.error('chdir: ' + error.message);

}

let fs = require('fs');
let data;

fs.readFile(__filename, (error, data) => {
    if (error) {
        return console.error(error.message);
    }

    console.log(data);

});

try {
    data = fs.readFileSync(__filename);
    console.log(data);
} catch (error) {
    console.error(error.message);
}

data = 'some file deyyreryeata';

fs.writeFile(__dirname + '/foo.txt', data, function (error) {
    if (error) {
        return console.error(error.message);
    }
});

let stream = fs.createReadStream('foo.txt');
stream.on('data', dataInt => {
    let chunk = dataInt.toString();
    process.stdout.write(chunk);
});

stream.on('end', () => {
    console.log('end');
});

stream.on('error', error => {
    console.error(error.message);
});

let readStream = fs.createReadStream('foo.txt');
let writeStream = fs.createWriteStream('bar.txt');
readStream.pipe(writeStream);

process.stdin.once('data', (data) => {
    process.stdout.write('Hello---------' + data.toString());
    process.stdin.pause();
});

process.stdout.write('What is your name? \n');
process.stdin.resume();