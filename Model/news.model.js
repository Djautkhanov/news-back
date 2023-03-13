const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    image: String,
    text: {
        type: String,
        required: true,
    },
    title : {
        type: String,
        require: true,
    },
    newsComment: [{
        date: {
            type: String,
        },
        text: {
            type : String,
            required: true
        },
        commentUserId:{
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "User"
        },
    }],
    category: {
        type : mongoose.Types.ObjectId,
        ref : "Category"
    }
})

const News = mongoose.model("News", newsSchema);
module.exports = News;