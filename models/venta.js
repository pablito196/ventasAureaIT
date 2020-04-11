import mongoose,{Schema} from 'mongoose';
const ventaSchema = new Schema({
    empresa: {type: Schema.ObjectId, ref:'empresa',required:true},
    fecha: {type:Date,required:true},
    cliente:{type: Schema.ObjectId, ref:'cliente'},
    cuenta:{type:String,maxlength:30,required:true},
    almacen:{type: Schema.ObjectId, ref:'almacen'},
    unidadVenta:{type: Schema.ObjectId, ref:'unidadventa'},
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
        precio:{
            type:Number,
            required:true
        },
        descuento:{
            type:Number
        },
        total:{
            type:Number
        }
    }],
    estado:{type:Number,default:1},
    
});

const Venta = mongoose.model('venta',ventaSchema);
export default Venta;