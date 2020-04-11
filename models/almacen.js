import mongoose,{Schema} from 'mongoose';
const almacenSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa',required:true},
    descripcion:{type:String,maxlength:100,required:true,unique:true},
    tipo:{type:String,maxlength:50},
    ubicacion:{type:String,maxlength:150},
    estado:{type:Number,default:1}
    
});

const Almacen = mongoose.model('almacen',almacenSchema);

export default Almacen; 