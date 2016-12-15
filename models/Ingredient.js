const mongoose = require('mongoose');
const { Schema } = mongoose;

// Inititititiliazation
mongoose.connect('mongodb://localhost/recipes')
const { connection: db } = mongoose;
// Same as: const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
/*db.on('error', (error) => {
    console.error('connection error: ', error);
});*/
db.once('open', () => {
    console.log('Connected to the main frame!');
});

// Schema

const ingredientSchema = new Schema({
    name: String,
    created_at: { type: Date, default: Date.now }
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
