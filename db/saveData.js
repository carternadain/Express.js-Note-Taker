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
      let tempData = [] 
       this.retrieveNotes() .then ((data)=>{
           console.log (JSON.parse(data))
           const tempObject = {'title':title,'text':text}
           tempData = JSON.parse (data)
           console.log ('line17')
           console.log (tempData)
          tempData.push(tempObject)
          console.log ('line23')
          console.log(tempData)
          writeFileAsync ('./db/db.json',JSON.stringify(tempData))
       })
      console.log (title)
      console.log (text)
  }

}
const newClass = new Notes();
module.exports = new Notes();