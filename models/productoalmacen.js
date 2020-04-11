import mongoose,{Schema} from 'mongoose';
const productoAlmacenSchema = new Schema({
    producto: {type: Schema.ObjectId, ref:'producto'},
    almacen: {type: Schema.ObjectId, ref:'almacen'},
    cantidadExistente: {type:Number,required:true},
    estado:{type:Number,default:1}
    
});

const ProductoAlmacen = mongoose.model('productoalmacen',productoAlmacenSchema);

export default ProductoAlmacen; 