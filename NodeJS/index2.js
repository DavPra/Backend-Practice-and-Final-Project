const fs = require('fs')

//fs.readFile('TestFile.txt', 'utf-8', (err,data) => {
 //   if (err) {
   //     throw err;
    //}

    //console.log(data);

//});

//const data = fs.readFileSync('TestFile2.txt', 'utf8');
//console.log(data);

//fs.appendFile('test.txt', 'Willkommen im Backend Kurs!\n', function (err) {
  //  if (err) {
    //    console.log(err);
    //} else {
     //   console.log('Write operation complete.')
   // }
//})

fs.unlink('test.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!')
})