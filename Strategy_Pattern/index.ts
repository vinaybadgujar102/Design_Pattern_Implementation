interface Strategy {
  doAlgorithm(data: string): string;
}

class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): string {
    const result = this.strategy.doAlgorithm("some data");
    return `result: ${result}`;
  }
}

class ConcreteStrategyA implements Strategy {
  public doAlgorithm(data: string): string {
    return data;
  }
}

const context = new Context(new ConcreteStrategyA());
const result = context.doSomeBusinessLogic();

console.log(result);
