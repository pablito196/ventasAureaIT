import mongoose, {Schema} from 'mongoose';
const pagoProveedorSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa',required:true},
    proveedor:{type: Schema.ObjectId, ref:'proveedor',required:true},
    fecha:{type:Date,required:true},
    monto:{type:Number,required:true},
    hora:{type:Date,default:Date.now},
    estado:{type:Number,default:1}
    
});

const PagoProveedor = mongoose.model('pagoproveedor',pagoProveedorSchema);
export default PagoProveedor;