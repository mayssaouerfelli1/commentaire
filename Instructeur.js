const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstructeurSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    nom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mdp: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    langue: {
        type: String,
        required: true
    },
    poste: {
        type: String,
        required: true,
    },
    etablissement: {
        type: String,
        required: true,
    },
    specialite: {
        type: String,
        required: true,
    },
    niveau: {
        type: String,
        required: true,
    },
    tel: {
        type: String,
        required: true,
    },
    etat: {
        type: String, // Ou le type approprié pour représenter l'état
        required: true,
    },
    videos: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Video'
        }
    ],
    
});

const Instructeur = mongoose.model('Instructeur', InstructeurSchema);
module.exports = Instructeur;
