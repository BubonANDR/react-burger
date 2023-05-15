import * as types from "../actions/burger-constructor";
import { burgConstructReducer, initialStateBCR } from "./burger-constructor";

const testitem = {
  image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
  name: "Соус фирменный Space Sauce",
  price: 200,
  type: "sauce",
  _id: "643d69a5c3f7b9001cfa0943",
};
const testitem2 = {
  image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
  name: "TEST",
  price: 100,
  type: "sauce",
  id: "543d69a5c3f7b9999cfa0945",
};
describe("burgConstructReducer", () => {
  it("should return the initial state", () => {
    expect(burgConstructReducer(undefined, { type: "" })).toEqual(
      initialStateBCR
    );
  });

  it("should handle ADD_INGRIDIENT", () => {
    expect(
      burgConstructReducer(undefined, {
        type: types.ADD_INGRIDIENT,
        items: testitem,
      })
    ).toMatchObject({
      breadsState: {
        type: "",
        name: "",
        image_mobile: "",
        price: 0,
      },

      burgerParts: [testitem],
    });
  });

  it("should handle MOVE_INGRIDIENT", () => {
    expect(
      burgConstructReducer(
        {
          breadsState: {
            type: "",
            name: "",
            image_mobile: "",
            price: 0,
          },

          burgerParts: [testitem2, testitem2, testitem],
        },
        {
          type: types.MOVE_ITEM,
          items: testitem,
          nn: 1,
        }
      )
    ).toMatchObject({
      breadsState: {
        type: "",
        name: "",
        image_mobile: "",
        price: 0,
      },

      burgerParts: [testitem2, testitem, testitem2, testitem],
    });
  });

  it("should handle DELETE_INGRIDIENT", () => {
    expect(
      burgConstructReducer(
        {
          breadsState: {
            type: "",
            name: "",
            image_mobile: "",
            price: 0,
          },

          burgerParts: [testitem2],
        },
        {
          type: types.DELETE_ITEM,
          items: testitem2,
        }
      )
    ).toMatchObject(initialStateBCR);
  });
});
