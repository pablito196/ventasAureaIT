import mongoose, {Schema} from 'mongoose';
const pagoClienteSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa',required:true},
    cliente:{type: Schema.ObjectId, ref:'cliente'},
    fecha:{type:Date,required:true},
    monto:{type:Number,required:true},
    hora:{type:Date,default:Date.now},
    estado:{type:Number,default:1}
    
});

const PagoCliente = mongoose.model('pagocliente',pagoClienteSchema);
export default PagoCliente;