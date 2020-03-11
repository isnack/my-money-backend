const restful = require("node-restful");
const mongoose = restful.mongoose;

const creditSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Informe o nome do crédito!"] },
  value: {
    type: Number,
    min: [0, "Valor de crédito minimo não pode ser menor que zero"],
    required: [true, "Informe o valor do crédito!"]
  }
});

const debitSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Informe o nome do débito!"] },
  value: {
    type: Number,
    min: [0, "Valor de débito minimo não pode ser menor que Zero"],
    required: [true, "Informe o valor do débito!"]
  },
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: ["PAGO", "PENDENTE", "AGENDADO"]
  }
});

const billingCycleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Informe o nome do ciclo de pagamento"]
  },
  month: {
    type: Number,
    required: true,
    max: [12, "Valor do mês  não pode ser maior que Doze"],
    min: [1, "Valor do mês minimo não pode ser menor que Um"]
  },
  year: {
    type: Number,
    required: true,
    min: [1920, "Valor do ano minimo não pode ser menor que 1920"],
    max: [2100, "Valor do ano  não pode ser maior que 2100"]
  },
  credits: [creditSchema],
  debits: [debitSchema]
});

module.exports = restful.model("BillingCycle", billingCycleSchema);
