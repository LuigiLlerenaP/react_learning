import { getUser, getUserActive, user } from "../../bases/05-functions";

describe("Test in base (05-functions) ", () => {
  test("getUser should to have  returns a object", () => {
    const testUser: user = { uid: "ASD3343", userName: "Luigi" };
    const user: user = getUser();
    expect(testUser).toEqual(user);
  });
  test("getUserActive should to have  returns a object", () => {
    const name: string = "Luigi";
    const user: user = getUserActive(name);
    expect(user).toStrictEqual({
      uid: "ASD3343",
      userName: name,
    });
  });
});
