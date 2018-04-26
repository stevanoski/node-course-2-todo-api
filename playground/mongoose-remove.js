const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

Todo.findByIdAndRemove('5ae243327717034eb86ab696').then((todo)=>{
    console.log({todo});
});