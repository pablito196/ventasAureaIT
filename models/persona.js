import mongoose, {Schema} from 'mongoose';
const personaSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa'},
    tipoPersona:{type:String,maxlength:20,required:true},
    nombres:{type:String,maxlength:80,unique:true,required:true},
    documento:{type:String,maxlength:20},
    direccion:{type:String,maxlength:70},
    telefono:{type:String,maxlength:20},
    email:{type:String,maxlength:50,unique:true},
    estado:{type:Number,default:1}
    
});

const Persona = mongoose.model('persona',personaSchema);
export default Persona;