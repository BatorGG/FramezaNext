import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    credits: { type: Number, default: 0 },
    ref: { type: String, default: "" }
});

export default mongoose.models.User || mongoose.model('User', userSchema);