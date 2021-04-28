import flag1 from './images/flag1.png'
import flag2 from './images/flag2.png'
import vehicle1 from './images/vehicle1.png'
import vehicle2 from './images/vehicle2.jpeg'

export const mockData = {
  categories: [
    {
      name: "Flag",
      assets: [
        { id: "flag1", url: flag1 },
        { id: "flag2", url: flag2 }
      ] 
    },
    {
      name: "Vehicle",
      assets: [
        { id: "vehicle1", url: vehicle1 },
        { id: "vehicle2", url: vehicle2 }
      ] 
    }
  ]
};