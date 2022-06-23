const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/BlogDB');

const Schema=  mongoose.Schema;

var BlogSchema = new Schema({
    title:String,
    date:String,
    articletitle:String,
    articlebody:String,
    imageUrl:String,
    data:String
});

var BlodData = mongoose.model('blog',BlogSchema);
module.exports=BlodData;