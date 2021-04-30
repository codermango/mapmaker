import flag1 from "./images/flag1.png";
import flag2 from "./images/flag2.png";
import flag3 from "./images/flag3.png";
import flag4 from "./images/flag4.png";
import vehicle1 from "./images/vehicle1.png";
import vehicle2 from "./images/vehicle2.jpeg";
import vehicle3 from "./images/vehicle3.jpg";
import aircraft1 from "./images/aircraft1.png";
import aircraft2 from "./images/aircraft2.jpg";
import aircraft3 from "./images/aircraft3.png";
import aircraft4 from "./images/aircraft4.jpg";
import ship1 from "./images/ship1.jpg";
import ship2 from "./images/ship2.jpg";
import ship3 from "./images/ship3.jpg";
import map from "./images/map.png";

export const mockData = {
  map: map,
  categories: [
    {
      name: "Flag",
      assets: [
        { id: "flag1", url: flag1, type: "flag" },
        { id: "flag2", url: flag2, type: "flag" },
        { id: "flag3", url: flag3, type: "flag" },
        { id: "flag4", url: flag4, type: "flag" },
      ],
    },
    {
      name: "Vehicle",
      assets: [
        { id: "vehicle1", url: vehicle1, type: "vehicle" },
        { id: "vehicle2", url: vehicle2, type: "vehicle" },
        { id: "vehicle3", url: vehicle3, type: "vehicle" },
      ],
    },
    {
      name: "Aircraft",
      assets: [
        { id: "aircraft1", url: aircraft1, type: "aircraft" },
        { id: "aircraft2", url: aircraft2, type: "aircraft" },
        { id: "aircraft3", url: aircraft3, type: "aircraft" },
        { id: "aircraft4", url: aircraft4, type: "aircraft" },
      ],
    },
    {
      name: "Ship",
      assets: [
        { id: "ship1", url: ship1, type: "aircraft" },
        { id: "ship2", url: ship2, type: "aircraft" },
        { id: "ship3", url: ship3, type: "aircraft" },
      ],
    },
  ],
};
