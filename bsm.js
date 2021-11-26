const dhop = require("./delta_hedged_option_position");
const pd = require("./price_delta");

class bsm {
  constructor() {}

  calc1() {
    let derivPrice_delta = new pd(38, 39).raw();
    return derivPrice_delta;
  }

  calc2() {
    // Differentiation Formiula
  }

  calc3() {
    let R = 2.5;
    let derivDeltaHedgedOptionPosition = new dhop(1, 3, 4).raw();
    return derivDeltaHedgedOptionPosition * R;
  }
}

module.exports = bsm;
