import mongoose,{Schema} from 'mongoose';

const cuentaSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa',required:true},
    numeroCuenta:{type:String, maxlength:50, unique:true, required:true},
    banco:{type:String, maxlength:100, required:true},
    descripcion:{type:String, maxlength:255},
    estado:{type:Number,default:1},
    saldo:{type:Number,required:true} 
});

const Cuenta = mongoose.model('cuenta',cuentaSchema);

export default Cuenta; 