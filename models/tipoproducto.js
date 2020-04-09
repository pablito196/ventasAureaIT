import mongoose,{Schema} from 'mongoose';
const tipoProductoSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa'},
    nombre:{type:String, maxlength:50, unique:true, required:true},
    descripcion:{type:String, maxlength:255},
    estado:{type:Number,default:1}
    
});

const TipoProducto = mongoose.model('tipoproducto',tipoProductoSchema);

export default TipoProducto; 