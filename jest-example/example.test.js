describe("expect test", () => {
  it("37 to equal 37", () => {
    expect(37).toBe(37);
  });
  //객체비교
  it("{age:39} to equal {age:39}", () => {
    expect({ age: 39 }).toEqual({ age: 39 });
  });
  //길이 비교
  it(".toHaveLength", () => {
    expect("hello").toHaveLength(5);
  });
  //프로퍼티와 그 값에 대한 비교
  it(".toHaveProperty", () => {
    expect({ name: "mark" }).toHaveProperty("name");
    expect({ name: "mark" }).toHaveProperty("name", "mark");
  });
  //프로퍼티의 값이 defined 되어있는지.
  it(".toBeDefined", () => {
    expect({ name: "mark" }.name).toBeDefined();
  });
  //falsy한 값
  it(".toBefalsy", () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  });
  it(".toBeGreaterThan", () => {
    expect(10).toBeGreaterThan(9);
  });
  it(".toBeGreaterThanOrEqual", () => {
    expect(10).toBeGreaterThanOrEqual(10);
  });
  it(".toBeInstanceOf", () => {
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo);
  });
});
