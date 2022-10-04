import Observable from "../Observable";

describe("Observable", () => {
  test("should notify observers", () => {
    const observable = new Observable<string>("");
    const onChange = jest.fn();

    observable.subscribe(onChange);
    observable.set("new observable value");

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith("new observable value");
  });

  test("should allow unsubscribing", () => {
    const observable = new Observable<string>("");
    const onChange = jest.fn();

    observable.subscribe(onChange);
    observable.unsubscribe(onChange);

    observable.set("new value");

    expect(onChange).toBeCalledTimes(0);
  });
});
