import mongoose, {Schema} from 'mongoose';
const empresaSchema = new Schema({
    nombre:{type:String,maxlength:120,unique:true,required:true},
    nit:{type:String,maxlength:20},
    direccion:{type:String,maxlength:70},
    responsable:{type:String,maxlength:80},
    estado:{type:Number,default:1}
    
});

const Empresa = mongoose.model('empresa',empresaSchema);
export default Empresa;