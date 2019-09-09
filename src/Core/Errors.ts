export class CatonlineError extends Error {
  public name: string;
  constructor(message: string) {
    super(message);
    this.name = 'CatonlineError';
  }
}

export class AssertionError extends CatonlineError {
  constructor(message: string) {
    super(message);
    this.name = 'AssertionError';
  }
}

export class NotImplementedError extends CatonlineError {
    constructor() {
        super('not implemented');
        this.name = 'NotImplementedError';
    }
}

export class InvalidGameParamsError extends CatonlineError {
  constructor(public paramName: string, public reason: string) {
      super(`Invalid game parameter value for "${paramName}": ${reason}`);
      this.name = 'InvalidGameParamsError';
  }
}

export class EdgeArgumentError extends CatonlineError {
    constructor(message: string) {
        super(message);
        this.name = 'EdgeArgumentError';
    }
}
