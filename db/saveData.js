const fs = require('fs')
const util = require("util")
// readFile('/etc/passwd', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
const readsFile = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Notes {
   retrieveNotes() {
       return readsFile ('./db/db.json','utf8')
  }

  async saveNotes(title,text) {
      console.log (title)
      console.log (text)
      const tempObject = {'title':title,'text':text}
      return writeFileAsync ('./db/db.json',tempObject)
  }

}
const newClass = new Notes();
module.exports = new Notes();