import mongoose,{Schema} from 'mongoose';
const compraSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa',required:true},
    proveedor:{type: Schema.ObjectId, ref: 'proveedor',required:true},
    almacen:{type: Schema.ObjectId, ref: 'almacen',required:true},
    fecha: {type:Date,required:true},
    cuenta:{type:String,maxlength:30,required:true},
    total:{type:Number, required:true},
    detalles:[{
        _id:{
            type:String,
            required:true
        },
        producto:{
            type:String,
            required:true
        },
        cantidad:{
            type:Number,
            required:true
        },
        costo:{
            type:Number,
            required:true
        },
        total:{
            type:Number
        }
    }],
    estado:{type:Number,default:1},
    
});

const Compra = mongoose.model('compra',compraSchema);
export default Compra;