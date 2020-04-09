import mongoose,{Schema} from 'mongoose';
const proveedorSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa'},
    nombre:{type:String,maxlength:120,required:true},
    nit:{type:String,maxlength:20},
    direccion:{type:String,maxlength:70},
    telefono:{type:String,maxlength:20},
    email:{type:String,maxlength:50,unique:true},
    rubro:{type:String,maxlength:80},
    saldoAcreedor:{type:Number},
    dato:[{
        nombre:{
            type:String,
            required:true,
            maxlength:20
        },
        descripcion:{
            type:String,
            required:true,
            maxlength:100
        }
    }],
    estado:{type:Number,default:1}
    
});

const Proveedor = mongoose.model('proveedor',proveedorSchema);

export default Proveedor; 