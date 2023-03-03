## NodeJS basics

This repository was made to learn the basics of NodeJS.

[Assignment](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md)  
[Scoring](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/score.md)

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## How to download and install application:

### 1. Clone repository:
```
git clone https://github.com/dumbus/node-nodejs-basics.git
```
### 2. Change active directory:
```
cd rsschool-node
```
### 3. Install dependencies:
```
npm install
```

## How to use an application:

After downloading and installing application you can use `npm` commands to use the application.

### File system (src/fs)

> Several functions were implemented in dedicated files

- `npm run fs:create` - function that creates new file `fresh.txt` with content `I am fresh and young` inside of the `files` folder (if file already exists `Error` with message `FS operation failed` will be thrown)
- `npm run fs:copy` - function that copies folder `files` files with all its content into folder `files_copy` at the same level (if `files` folder doesn't exists or `files_copy` has already been created `Error` with message `FS operation failed` will be thrown)
- `npm run fs:rename` - function that renames file `wrongFilename.txt` to `properFilename` with extension `.md` (if there's no file `wrongFilename.txt` or `properFilename.md` already exists `Error` with message `FS operation failed` will be thrown)
- `npm run fs:delete` - function that deletes file `fileToRemove.txt` (if there's no file `fileToRemove.txt` `Error` with message `FS operation failed` will be thrown)
- `npm run fs:list` - function that prints all array of filenames from `files` folder into console (if `files` folder doesn't exists `Error` with message `FS operation failed` will be thrown)
- `npm run fs:read` - function that prints content of the `fileToRead.txt` into console (if there's no file `fileToRead.txt` `Error` with message `FS operation failed` will be thrown)

### Command line interface(src/cli)

> Several functions were implemented in dedicated files

- `npm run cli:env` - function that parses environment variables with prefix `RSS_` and prints them to the console in the format `RSS_name1=value1; RSS_name2=value2`
- `npm run cli:args` - function that parses command line arguments (should be given in format `--propName value --prop2Name value2`, it will not be validated) and prints them to the console in the format `propName is value, prop2Name is value2`

### Modules(src/modules)

> File was refactored to it's equivalent in ECMAScript notation.

- `npm run modules` -  file was refactored to it's equivalent in ECMAScript notation and renamed to `esm.mjs`

### Hash (src/hash)

> Several functions were implemented in dedicated files

- `npm run hash` - function that calculates SHA256 hash for file `fileToCalculateHashFor.txt` and logs it into console as `hex`

### Streams (src/streams)

> Several functions were implemented in dedicated files

- `npm run streams:read` - function that reads file `fileToRead.txt` content using Readable Stream and prints it's content into `process.stdout`
- `npm run streams:write` - function that writes `process.stdin` data into file `fileToWrite.txt` content using Writable Stream
- `npm run streams:transform` - function that reads data from `process.stdin`, reverses text using Transform Stream and then writes it into `process.stdout`

### Zlib (src/zip)

> Several functions were implemented in dedicated files

- `npm run zip:compress` - function that compresses file `fileToCompress.txt` to `archive.gz` using `zlib` and Streams API
- `npm run zip:decompress` - function that decompresses `archive.gz` back to the `fileToCompress.txt` with same content as before compression using `zlib` and Streams API

### Worker Threads (src/wt)

> Several functions were implemented in dedicated files

`npm run wt` - the results of command execution are described below:  

- `worker.js` - given function was extended to work with data received from main thread and implement function which sends result of the computation to the main thread
- `main.js` - function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file `worker.js` and able to send data to those threads and to receive result of the computation from them. Incremental numbers starting from `10` will be sent to each `worker`. For example: on host machine with **4** cores will be created **4** workers and send **10** to first `worker`, **11** to second `worker`, **12** to third `worker`, **13** to fourth `worker`. After all workers will finish, function will log array of results into console. The results are array of objects with 2 properties:
    - `status` - `'resolved'` in case of successfully received value from `worker` or `'error'` in case of error in `worker`
    - `data` - value from `worker` in case of success or `null` in case of error in worker  

The results in the array will be in the same order that the workers were created

### Child Processes (src/cp)

> Several functions were implemented in dedicated files

- `npm run cp` - function `spawnChildProcess` that receives array of arguments `args` and creates child process from file `script.js`, passing these `args` to it. This function will create IPC-channel between `stdin` and `stdout` of master process and child process:
    - child process `stdin` will receive input from master process `stdin`
    - child process `stdout` will send data to master process `stdout`