import flag1 from './images/flag1.png'
import flag2 from './images/flag2.png'
import vehicle1 from './images/vehicle1.png'
import vehicle2 from './images/vehicle2.jpeg'
import map from './images/map.png';

export const mockData = {
  map: map,
  categories: [
    {
      name: "Flag",
      assets: [
        { id: "flag1", url: flag1, type: "flag" },
        { id: "flag2", url: flag2, type: "flag" }
      ] 
    },
    {
      name: "Vehicle",
      assets: [
        { id: "vehicle1", url: vehicle1, type: "vehicle" },
        { id: "vehicle2", url: vehicle2, type: "vehicle" }
      ] 
    }
  ]
};