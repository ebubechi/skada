var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SchedulingSchema = new Schema({

    pickUpPoint: { type: String, require: true , trim: true},
    deliveryPoint: { type: String, required: true, trim: true },
    pickUpTime: { type: String, required: true },
    pickUpDate: { type: String, required: true },
    natureOfGood: { type: String, required: true, trim: true },
    quantity: { type: String, required: true },
    goodsType: { type: String, required: true },
    goodsDescription: { type: String},


    recieversName: { type: String, required: true },
    recieversEmail: { type: String },
    recieversPhone: { type: String, required: true },


    sendersId: { type: mongoose.Schema.Types.ObjectId, required: true },
    sendersName: { type: String, required: true },
    sendersEmail: { type: String },
    sendersPhone: { type: String, required: true },

    
    cloudImage: { type: String},
    imageId: { type: String },
    databaseImage: {type : String},
    

    timeOfOrder: { type: Date, default: new Date() },
    status: { type: String, default: "open" }
})

module.exports = mongoose.model('Schedule', SchedulingSchema)