import mongoose, { Schema, Document } from "mongoose";

interface IPassword extends Document {
  nombre: string;
  genero: string;
  capitulos: string;
  calificacion: string;
  userId: mongoose.Schema.Types.ObjectId; // Referencia al usuario
}

const Password: Schema = new Schema({
  nombre: { type: String, required: true },
  genero: { type: String, required: true },
  capitulos: { type: String, required: true },
  calificacion: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Referencia al usuario
}, { collection: "Password" });

export default mongoose.model<IPassword>("Password", Password);
