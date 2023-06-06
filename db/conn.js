const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect("mongodb+srv://waciolib:DoDCbCAaD9gWAszf@cluster0.qa6ryar.mongodb.net/?retryWrites=true&w=majority");
        console.log('Connected');
    } catch (error) {
        console.error(error);
    }
}

module.exports = main;