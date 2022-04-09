const fs = require('fs')
const util = require("util")
// readFile('/etc/passwd', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
const readsFile = util.promisify(fs.readFile)

class Notes {
   retrieveNotes() {
       return readsFile ('./db/db.json','utf8')
    //   let tempData = {}
    //  fs.readFile('./db/db.json', 'utf8',(err, data) => {
    //     if (err) throw err;
    //    tempData = data
    //   });
    //   return tempData
  }

  async saveNotes() {
      console.log("Notesaveisalive")
  }
}
const newClass = new Notes();
module.exports = new Notes();
