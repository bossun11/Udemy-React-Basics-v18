import { counterReducer } from "./counterReducer";

const initialState = { count: 0, step: 1 };

describe("counterReducerの動作確認", () => {
  test("up", () => {
    const newState = counterReducer(initialState, { type: "up" });
    expect(newState).toEqual({ count: 1, step: 1 });
  });
  test("down", () => {
    const newState = counterReducer(initialState, { type: "down" });
    expect(newState).toEqual({ count: -1, step: 1 });
  });
  test("changeStep -> up", () => {
    let newState = counterReducer(initialState, {
      type: "changeStep",
      payload: 2,
    });

    expect(newState).toEqual({ count: 0, step: 2 });

    newState = counterReducer(newState, { type: "up" });

    expect(newState).toEqual({ count: 2, step: 2 });
  });
});
