type callHandler = {
  onFulFilled: (...args: any) => void;
  onRejected: (...args: any) => void;
};
class customPromise {
  callState: string | null;
  promiseCallback: () => void;
  callHandler: callHandler[];
  rejectHandler: ((...args: any[]) => void)[];
  value: any;
  error: any;

  constructor(
    callback: (
      resolve: (value: any) => void,
      reject: (err: any) => void,
    ) => void,
  ) {
    this.callState = "Pending";
    this.then = this.then.bind(this);
    this.catch = this.catch.bind(this);
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    this.callHandler = [];
    this.value = null;
    this.error = null;
    this.rejectHandler = [];
    callback(this.resolve, this.reject);
  }

  callSuccessHandler(...args: any[]): void {
    this.callHandler.forEach((fn) => fn.onFulFilled(...args));
  }

  callErrorHandler(...args: any[]): void {
    this.rejectHandler.forEach((fn) => fn(...args));
  }

  resolve(value: any) {
    this.callState = "fulfilled";
    this.value = value;
    this.callSuccessHandler(this.value);
  }
  reject(err: any[]) {
    this.callState = "rejected";
    this.error = err;
    this.callErrorHandler(this.error);
  }

  then(onFulFilled: (...args: any[]) => void) {
    return new customPromise((resolve, reject) => {
      const handler = {
        onFulFilled: (value: any) => {
          const nextValue = onFulFilled(value);
          resolve(nextValue);
        },
        onRejected: (err: any) => {},
      };

      if (this.callState === "fulfilled") {
        handler.onFulFilled(this.value);
      } else {
        this.callHandler.push(handler);
      }
    });
  }

  catch(callback: (...args: any[]) => void) {
    if (this.callState === "Rejected") {
      callback(this.error);
    } else {
      this.rejectHandler.push(callback);
    }
  }
}

const p1 = new customPromise((res, rej) => {
  setTimeout(() => {
    res(2);
  }, 1000);
});

p1.then((value) => {
  console.log("This is the original value", value);
  return value * 100;
}).then((newValue) => console.log("This is the new value", newValue));
