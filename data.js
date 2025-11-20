const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/bibliotheque'; 

mongoose.connect(mongoURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(err => console.error('Erreur de connexion à MongoDB:', err));
