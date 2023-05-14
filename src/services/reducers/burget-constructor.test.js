import * as types from "../actions/burger-constructor";
import { burgConstructReducer } from "./burger-constructor";

const testitem = {
  calories: 14,
  carbohydrates: 11,
  fat: 22,
  image: "https://code.s3.yandex.net/react/code/sauce-04.png",
  image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
  image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
  name: "Соус фирменный Space Sauce",
  price: 80,
  proteins: 50,
  type: "sauce",
  __v: 0,
  _id: "643d69a5c3f7b9001cfa0943",
};
const testitem2 = {
  calories: 1,
  carbohydrates: 2,
  fat: 3,
  image: "https://code.s3.yandex.net/react/code/sauce-04.png",
  image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
  image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
  name: "TEST",
  price: 100,
  proteins: 1,
  type: "sauce",
  __v: 0,
  _id: "543d69a5c3f7b9999cfa0945",
};
describe("burgConstructReducer", () => {
  it("should return the initial state", () => {
    expect(burgConstructReducer(undefined, { type: "" })).toEqual({
      breadsState: {
        type: "",
        name: "",
        image_mobile: "",
        price: 0,
      },
      burgerParts: [],
    });
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

      burgerParts: [
        {
          _id: testitem._id,
          name: testitem.name,
          price: testitem.price,
          image_mobile: testitem.image_mobile,
          type: testitem.type,
        },
      ],
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

          burgerParts: [
            {
              _id: testitem2._id,
              name: testitem2.name,
              price: testitem2.price,
              image_mobile: testitem2.image_mobile,
              type: testitem2.type,
            },
            {
              _id: testitem2._id,
              name: testitem2.name,
              price: testitem2.price,
              image_mobile: testitem2.image_mobile,
              type: testitem2.type,
            },
            {
              _id: testitem._id,
              name: testitem.name,
              price: testitem.price,
              image_mobile: testitem.image_mobile,
              type: testitem.type,
            },
          ],
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

      burgerParts: [{
        _id: testitem2._id,
        name: testitem2.name,
        price: testitem2.price,
        image_mobile: testitem2.image_mobile,
        type: testitem2.type,
      },
      {
        _id: testitem._id,
        name: testitem.name,
        price: testitem.price,
        image_mobile: testitem.image_mobile,
        type: testitem.type,
      }, {
        _id: testitem2._id,
        name: testitem2.name,
        price: testitem2.price,
        image_mobile: testitem2.image_mobile,
        type: testitem2.type,
      },
      {
        _id: testitem._id,
        name: testitem.name,
        price: testitem.price,
        image_mobile: testitem.image_mobile,
        type: testitem.type,
      }],
    });
  });

  it("should handle DELETE_INGRIDIENT", () => {
    expect(
      burgConstructReducer({
        breadsState: {
          type: "",
          name: "",
          image_mobile: "",
          price: 0,
        },

        burgerParts: [
          {
            _id: testitem2._id,
            name: testitem2.name,
            price: testitem2.price,
            image_mobile: testitem2.image_mobile,
            type: testitem2.type,
          }]}, {
        type: types.DELETE_ITEM,
        items: testitem2,
      })
    ).toMatchObject({
      breadsState: {
        type: "",
        name: "",
        image_mobile: "",
        price: 0,
      },

      burgerParts: [],
    });
  });


});
