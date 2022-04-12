const fs = require('fs')
const util = require("util")
// readFile('/etc/passwd', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
const readsFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

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

  async saveNotes(title,text) {
      console.log (title)
      console.log (text)
      const tempObject = {'title':title,'text':text}
      return writeFile ('./db/db.json',tempObject)
  }
}
const newClass = new Notes();
module.exports = new Notes();