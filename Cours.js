const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoursSchema = new Schema({
    id_cours: {
        type: String, 
        required: true,
        unique: true 
    },
    titre: {
        type: String,
        required: true
    },
    fichier: {
        type: String,
        required: true
    },
    prix: {
        type: String,
        required: true
    },
    langue: {
        type: String,
        required: true
    },
    domaine: {
        type: String,
        required: true
    },
    commentaires: [{
        type: Schema.Types.ObjectId,
        ref: 'Commentaire' // Référence au modèle Commentaire
    }],
    apprenantsAchetant: [{
        type: Schema.Types.ObjectId,
        ref: 'Apprenant'
    }],
    contenuTxt: {
        type: Schema.Types.ObjectId,
        ref: 'ContenuTxt'
    },
    domaineAssocie: {
        type: Schema.Types.ObjectId,
        ref: 'Domaine'
    },
    instructeur: {
        type: Schema.Types.ObjectId,
        ref: 'Instructeur', // Référence au modèle Instructeur
        required: true
    }
});

const Cours = mongoose.model('Cours', CoursSchema);
module.exports = Cours;
