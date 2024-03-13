const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults
//db.defaults({ posts: [], user: {} }).write()

// Add a post
//db.get('posts')
//    .push({ id: 3, title: 'lowdb is awesome 3'})
//    .write()

// remove
//db.get('posts')
//    .remove({ id: 2 })
//    .write()

console.log(
    db.get('posts')
    .value())