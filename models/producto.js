import mongoose,{Schema} from 'mongoose';
const productoSchema = new Schema({
    empresa:{type: Schema.ObjectId, ref:'empresa',required:true},
    tipoProducto:{type: Schema.ObjectId, ref:'tipoproducto'},
    descripcion:{type:String,maxlength:255,required:true,unique:true},
    codigo:{type:String,maxlength:30,unique:true},
    precioVenta:{type:Number,required:true},
    imagen:{type:String,maxlength:150},
    estado:{type:Number,default:1}
    
});

const Producto = mongoose.model('producto',productoSchema);

export default Producto; 