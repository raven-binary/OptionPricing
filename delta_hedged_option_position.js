class delta_hedged_option_position {
  constructor(C, Δ, Stime) {
    this.C = C;
    this.Δ = Δ;
    this.Stime = Stime;
  }

  raw() {
    let dhop = this.C - this.Δ * this.Stime;
    return dhop;
  }
}

module.exports = delta_hedged_option_position;
