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
    expect(app.containsForbidenWords("Vous êtes des salop")).toEqual(true);
  });

  it("remove all forbiden words", () => {
    expect(
      app.removeForbidenWords("Vous êtes des truffes de porc salo")
    ).toEqual("Vous êtes des xxx de porc xxx");
  });

  it("return thesame sentence is no foridden word detected", () => {
    expect(app.removeForbidenWords("Vous êtes des anges")).toEqual(
      "Vous êtes des anges"
    );
  });

  it("detects cases hacks", () => {
    expect(app.removeForbidenWords("vous êtes tous des tRufFes")).toEqual(
      "vous êtes tous des xxx"
    );
  });

  it.todo("todo fonction"); //pour mettre un teste en attente le tems d'exécuter les tests précédents
});
