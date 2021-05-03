# Mapmaker

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## The steps to setup the project
  1. Go to the root path of the project
  2. Install necessary dependencies: `yarn`
  3. Run the project in dev mode: `yarn start`

Or you can checkout my github repo https://github.com/codermango/mapmaker.

> If you cannot wait to see how it looks like, you can checkout at https://mapmaker-codemango.netlify.app

## Functionalities
![image](https://user-images.githubusercontent.com/4600839/116824787-4b2ddc80-ab8c-11eb-874b-090f54b45171.png)

> **Please make sure your broswer zoom is 100%, otherwise the map will not have correct positions. And desktop only.**

### Functionality list

1. Drag asset from sidebar and drop on the map
2. Move an existing asset on the map
3. Delete an asset on the map
4. Display level info in JSON format
5. Save level info in JSON file
6. Upload level info from a JSON file

Some other functionalities might be useful, but not done in this project:

7. Save level info includes map
8. Support replacing map and assets source in the sidebar
9. Force zoom to 100% or detect it and give alert

### Detail

Mapmaker basically consists three main parts, **Sidebar**, **Map** and **Output**.

**Sidebar** is the place displays all the assets mapmaker has, in our case there are flag, vehicle, aircraft and ship, it is designed extensible, so you can add move assets as long as they are added to the data source, check `src/mockData.ts`

**Map** is the place you can put the assets, you can drag the asset from the sidebar and drop it in the map. If you want to remove an asset from the map, you can drag it to the `delete icon` in the sidebar

**Output** is the place displays the result. Click the Display button will show the assets information on the map, for exmaple:
```
[
  {
    "uid": "TmXfkbD8",
    "id": "flag1",
    "url": "data:image/png;base64,iVBORw0K...",
    "type": "flag",
    "position": {
      "x": 52,
      "y": 110
    }
  },
  {
    "uid": "7yu9nfap",
    "id": "vehicle1",
    "url": "data:image/png;base64,iVBORw0K...",
    "type": "vehicle",
    "position": {
      "x": 98,
      "y": 132
    }
  },
  {
    "uid": "xQ2CHejt",
    "id": "aircraft4",
    "url": "data:image/jpeg;base64,/9j/4AA...",
    "type": "aircraft",
    "position": {
      "x": 162,
      "y": 150
    }
  }
]
```

> I shortened the url for a better display


You can also save the level you created by click `Save level`, you will need to find a place to save it as JSON file.

You also can load the level data you have saved before, there are already some levels I created before, check the folder `levels/`

> Please note `save` and `load` JSON file don't have a strict validation or constraint now, so try other format of files will most likely cause errors.