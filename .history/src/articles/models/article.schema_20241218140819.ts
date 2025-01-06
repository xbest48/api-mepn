import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
    titre: String,
    contenu: String,
    auteur: String,
    dateCreation: String,
})