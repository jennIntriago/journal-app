import { authSlice } from "../../../src/store/auth/authSlice";
import { initialState } from "../../fixtures/authfixtures";

describe("Pruebas en el authSlice", () => {
  test("debe de regresar el estado inicial y llamarse auth", () => {
    const state = authSlice.reducer(initialState, {});
    expect(authSlice.name).toBe("auth");
    expect(state).toEqual(initialState);
  });
});
