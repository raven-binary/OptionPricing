const bsm = require("./bsm");
let bsmC = new bsm();

// Try avoiding calc2 for now, as it gives out error.
let model =
  bsmC.calc1() +
  0.5 * bsmC.calc1() * bsmC.calc2() -
  bsmC.calc1() -
  bsmC.calc3();

console.log(model);
