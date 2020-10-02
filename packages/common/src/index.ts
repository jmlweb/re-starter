interface Double {
  (x: number): number
}

const double: Double = (x) => x * 2;

const double2: Double = function (x) {
  return x * 2;
}

