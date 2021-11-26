class price_delta {
  constructor(Stime, Stimeplus1) {
    this.Stime = Stime;
    this.Stimeplus1 = Stimeplus1;
  }

  raw() {
    let pd = this.Stimeplus1 - this.Stime;
    return pd;
  }
}

module.exports = price_delta;
