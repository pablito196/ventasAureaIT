import mongoose,{Schema} from 'mongoose';
const clienteSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa',required:true},
    nombre:{type:String,maxlength:120,required:true},
    nit:{type:String,maxlength:20},
    direccion:{type:String,maxlength:70},
    telefono:{type:String,maxlength:20},
    email:{type:String,maxlength:50,unique:true},
    saldoDeudor:{type:Number},
    dato:[{
        nombre:{
            type:String,
            required:true,
            maxlength:20
        },
        descripcion:{
            type:String,
            required:true,
            maxlength:150
        }
    }],
    estado:{type:Number,default:1}
    
});

const Cliente = mongoose.model('cliente',clienteSchema);

export default Cliente; 