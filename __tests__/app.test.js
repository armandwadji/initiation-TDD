const app = require("../app");

describe("Palindrom", () => {
  //   it("should retrieve à sentence", () => {
  //     expect(app.sentence.length).toBeGreaterThan(0);
  //   });

  //   it("should have à specfic length", () => {
  //     expect(app.sentence.length).toEqual(11);
  //   });

  it("should be a palindrom", () => {
    expect(app.isPalindrom("kayak")).toEqual(true);
  });

  it("should not be a palindrom", () => {
    expect(app.isPalindrom("azerty")).toEqual(false);
  });
});

describe("Moderator", () => {
  it("contains forbidden words", () => {
    expect(app.containsForbidenWords("Vous êtes des truffes")).toEqual(true);
  });
});
