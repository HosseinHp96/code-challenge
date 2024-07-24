export default class Utils {
  static getFibonacciNeighbors(n: number): [number, number] {
    if (n < 0) {
      throw new Error("Input must be a non-negative integer.");
    }

    let a = 0,
      b = 1;

    if (n === 0) {
      return [0, 1];
    }

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const next = a + b;
      if (next > n) {
        return [b, next];
      }
      a = b;
      b = next;

      if (b > Number.MAX_SAFE_INTEGER) {
        throw new Error("Fibonacci sequence exceeds safe integer range.");
      }
    }
  }

  static collatzSteps(n: number): number {
    if (n <= 0) {
      throw new Error("Input must be a positive integer.");
    }

    let steps = 0;

    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
      steps++;
    }

    return steps;
  }
}
