import mongoose, {Schema} from 'mongoose';
const unidadVentaSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa',required:true},
    descripcion:{type:String,maxlength:120,unique:true,required:true},
    responsable:{type:String,maxlength:80,required:true},
    ciudad:{type:String,maxlength:40},
    telefono:{type:String,maxlength:20},
    direccion:{type:String,maxlength:70},
    estado:{type:Number,default:1}
    
});

const UnidadVenta = mongoose.model('unidadventa',unidadVentaSchema);
export default UnidadVenta;