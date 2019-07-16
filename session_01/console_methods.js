// format specifier in console.log

let name = 'Bharat';
console.log('Hi %s', name);  // Hi Bharat

console.log('Namskar %s. %s where were you ?', name);  // Namskar Bharat. %s where were you ?

console.log('Namskar %s. %s where were you ?', name,'Ganesh'); // Namskar Bharat. Ganesh where were you ?

// The console.error() function is used to render error message on console.

console.error(new Error('Something is wrong Bharat'));

/*Error: Something is wrong Bharat
    at Object.<anonymous> (C:\workspace\work\Language Learning\NodeJS_latest\NodeJs\session_01\console_methods.js:12:15)
    at Module._compile (internal/modules/cjs/loader.js:701:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)
    at Module.load (internal/modules/cjs/loader.js:600:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)
    at Function.Module._load (internal/modules/cjs/loader.js:531:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:622:3)*/

console.log(new Error('Something is wrong Bharat'));

/*Error: Something is wrong Bharat
    at Object.<anonymous> (C:\workspace\work\Language Learning\NodeJS_latest\NodeJs\session_01\console_methods.js:25:13)
    at Module._compile (internal/modules/cjs/loader.js:701:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)
    at Module.load (internal/modules/cjs/loader.js:600:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)
    at Function.Module._load (internal/modules/cjs/loader.js:531:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:622:3)*/


    // The console.warn() function is used to display warning message on console.

    console.warn("Hi Bharat. This is last warning"); // Hi Bharat. This is last warning