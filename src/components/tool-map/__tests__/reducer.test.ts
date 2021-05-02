import { IToolMapState, toolMapReducer } from "../reducer";

const initialState: IToolMapState = {
  map: "testMap",
  assets: [
    {
      uid: "testUid1",
      position: {
        x: 100,
        y: 100,
      },
      id: "testId1",
      url: "testUrl1",
      type: "testType1",
    },
    {
      uid: "testUid2",
      position: {
        x: 200,
        y: 200,
      },
      id: "testId2",
      url: "testUrl2",
      type: "testType2",
    },
  ],
};

test("addAssetToMap works correctly", () => {
  const payload = {
    uid: "testUid3",
    position: {
      x: 300,
      y: 300,
    },
    id: "testId3",
    url: "testUrl3",
    type: "testType3",
  };

  const expectedResult = {
    map: initialState.map,
    assets: [...initialState.assets, payload],
  };

  const actualResult = toolMapReducer(initialState, {
    type: "addAssetToMap",
    payload,
  });
  expect(actualResult).toStrictEqual(expectedResult);
});

test("deleteAssetFromMap works correctly", () => {
  const payload = {
    uid: "testUid1",
    position: {
      x: 100,
      y: 100,
    },
    id: "testId1",
    url: "testUrl1",
    type: "testType1",
  };

  const expectedResult = {
    map: initialState.map,
    assets: [initialState.assets[1]],
  };

  const actualResult = toolMapReducer(initialState, {
    type: "deleteAssetFromMap",
    payload,
  });
  expect(actualResult).toStrictEqual(expectedResult);
});

test("moveAssetInMap works correctly", () => {
  const payload = {
    uid: "testUid1",
    position: {
      x: 500,
      y: 500,
    },
    id: "testId1",
    url: "testUrl1",
    type: "testType1",
  };

  const expectedResult = {
    map: initialState.map,
    assets: [payload, initialState.assets[1]],
  };

  const actualResult = toolMapReducer(initialState, {
    type: "moveAssetInMap",
    payload,
  });
  expect(actualResult).toStrictEqual(expectedResult);
});

test("loadAssetsToMap works correctly", () => {
  const payload = [
    {
      uid: "testUid1",
      position: {
        x: 500,
        y: 500,
      },
      id: "testId1",
      url: "testUrl1",
      type: "testType1",
    },
  ];

  const expectedResult = {
    map: initialState.map,
    assets: payload,
  };

  const actualResult = toolMapReducer(
    { map: initialState.map, assets: [] },
    { type: "loadAssetsToMap", payload }
  );
  expect(actualResult).toStrictEqual(expectedResult);
});
