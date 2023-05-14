import * as types from "../actions/ingridients-detail";
import { ingridPopupReducer } from "./ingridients-detail";


const initialTestStateIngrid = {
  _id: "",
  name: "",
  type: "",
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
  calories: 0,
  price: 0,
  image: "",
  image_mobile: "",
  image_large: "",
  __v: 0,
};
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

describe("ingridPopupReducer", () => {
  it("should return the initial state", () => {
    expect(ingridPopupReducer(undefined, { type: "" })).toEqual({
      isLoading: false,
      hasError: false,
      chosenIngrid: initialTestStateIngrid,
    });
  });

  it("should handle CHOSE_INGRIDIENT_DETAIL", () => {
    expect(
      ingridPopupReducer(
        {
          isLoading: false,
          hasError: false,
          chosenIngrid: initialTestStateIngrid,
        },
        {
          type: types.CHOSE_INGRIDIENT_DETAIL,
        }
      )
    ).toEqual({
      isLoading: true,
      hasError: false,
      chosenIngrid: initialTestStateIngrid,
    });
  });

  it("should handle CHOSE_INGRIDIENT_DETAIL_SUCCESS", () => {
    expect(
      ingridPopupReducer(
        { isLoading: true, hasError: false, chosenIngrid: undefined },
        {
          type: types.CHOSE_INGRIDIENT_DETAIL_SUCCESS,
          data: [testitem],
        }
      )
    ).toMatchObject({
      isLoading: false,
      hasError: false,
      chosenIngrid: testitem,
    });
  });

  it("should handle CHOSE_INGRIDIENT_DETAIL_FAILED", () => {
    expect(
      ingridPopupReducer(
        {
          isLoading: true,
          hasError: false,
          chosenIngrid: initialTestStateIngrid,
        },
        {
          type: types.CHOSE_INGRIDIENT_DETAIL_FAILED,
        }
      )
    ).toEqual({
      isLoading: false,
      hasError: true,
      chosenIngrid: initialTestStateIngrid,
    });
  });

});
