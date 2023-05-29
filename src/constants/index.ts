export const API_URL = 'https://swapi.dev/api'

export const PERSON_LIST_FIELDS = ["birth_year", "gender", "created"]
export const PERSON_DETAILS_FIELDS = ["birth_date", "eye_color", "gender", "hair_color", "height", "mass", "skin_color", "homeworld", "created", "url",]
export const PERSON_TITLE_FIELD = "name"
export const PERSON_IMAGE_PLACEHOLDER = "https://thumbs.dreamstime.com/b/default-photo-placeholder-half-length-portrait-avatar-gray-color-116847351.jpg"
export const PERSON_OBJECT_TYPE = 'people'
export const PERSON_MAIN_ROUTE = 'people'
export const PERSON_SEARCH_ACTION = "PERSON_SEARCH_ACTION"

export const PLANET_LIST_FIELDS = ["diameter", "gravity", "population", "climate"]
export const PLANET_DETAILS_FIELDS = ["diameter", "rotation_period", "orbital_period", "gravity", "population", "climate", "terrain", "surface_water", "url",]
export const PLANET_TITLE_FIELD = "name"
export const PLANET_IMAGE_PLACEHOLDER = "https://cdn2.iconfinder.com/data/icons/vacation-51/512/planet_earth_map_placeholder_position_pin-512.png"
export const PLANET_OBJECT_TYPE = 'planets'
export const PLANET_MAIN_ROUTE = 'planets'
export const PLANET_SEARCH_ACTION = 'PLANET_SEARCH_ACTION'

export const FILM_LIST_FIELDS = ["episode_id", "director", "producer"]
export const FILM_DETAILS_FIELDS = ["opening_crawl", "episode_id", "director", "producer", "release_date", "created"]
export const FILM_TITLE_FIELD = "title"
export const FILM_IMAGE_PLACEHOLDER = "https://as2.ftcdn.net/v2/jpg/03/58/61/41/1000_F_358614135_AKXxL6rq7Yqv09tlvrdlFPUSRRQzzBF0.jpg"
export const FILM_OBJECT_TYPE = 'films'
export const FILM_MAIN_ROUTE = 'films'
export const FILM_SEARCH_ACTION = 'FILM_SEARCH_ACTION'
  
export const SPECIE_LIST_FIELDS = ["classification", "designation", "average_height"]
export const SPECIE_DETAILS_FIELDS = ["classification", "designation", "average_height", "average_lifespan", "eye_colors", "hair_colors", "language", "homeworld", "created", "edited"]
export const SPECIE_TITLE_FIELD = "name"
export const SPECIE_IMAGE_PLACEHOLDER = "https://i.redd.it/cpcvu8v4t9n81.jpg"
export const SPECIE_OBJECT_TYPE = 'species'
export const SPECIE_MAIN_ROUTE = 'species'
export const SPECIE_SEARCH_ACTION = 'SPECIE_SEARCH_ACTION'
  
export const VEHICLE_LIST_FIELDS = ["model", "vehicle_class", "manufacturer", "length"]
export const VEHICLE_DETAILS_FIELDS = ["model", "vehicle_class", "manufacturer", "length", "cost_in_credits", "crew", "passengers", "max_atmosphering_speed", "cargo_capacity", "consumables", "url"]
export const VEHICLE_TITLE_FIELD = "name"
export const VEHICLE_IMAGE_PLACEHOLDER = "https://www.freshnessmag.com/.image/t_share/MTM3NDYzNjQwNDA3MjIxNjc4/star-wars-vehicles.jpg"
export const VEHICLE_OBJECT_TYPE = 'vehicles'
export const VEHICLE_MAIN_ROUTE = 'vehicles'
export const VEHICLE_SEARCH_ACTION = 'VEHICLE_SEARCH_ACTION'
  
export const STARSHIP_LIST_FIELDS = ["model", "startship_class", "manufacturer", "cost_in_credits", "length"]
export const STARSHIP_DETAILS_FIELDS = ["model", "startship_class", "manufacturer", "cost_in_credits", "length", "crew", "passenger", "passengers", "max_atmosphering_speed", "hyperdrive_rating", "MGLT", "cargo_capacity", "consumables", "url"]
export const STARSHIP_TITLE_FIELD = "name"
export const STARSHIP_IMAGE_PLACEHOLDER = "https://cdn.shopify.com/s/files/1/0594/4937/6920/articles/11-coolest-starships-in-the-star-wars-universe_800x.jpg?v=1665775994"
export const STARSHIP_OBJECT_TYPE = 'starships'
export const STARSHIP_MAIN_ROUTE = 'starships'
export const STARSHIP_SEARCH_ACTION = 'STARSHIP_SEARCH_ACTION'

export const HOME_OR_POPULAR_PAGE = "HOME_OR_POPULAR_PAGE"
export const HOME_OR_POPULAR_PAGE_SEARCH_ACTION = "HOME_OR_POPULAR_PAGE_SEARCH_ACTION"




export const basicListItemDataPlaceholder: ListItemData = {
  titleField: "",
  descriptionFields: [""],
  dataSource: {},
  objectType: "",
  mainRoute: ""
}

export const peopleListItemDataPlaceholder: ListItemData = {
  titleField: PERSON_TITLE_FIELD,
  descriptionFields: PERSON_LIST_FIELDS,
  dataSource: {},
  objectType: PERSON_OBJECT_TYPE,
  mainRoute: PERSON_MAIN_ROUTE
}

export const planetsListItemDataPlaceholder: ListItemData = {
  titleField: PLANET_TITLE_FIELD,
  descriptionFields: PLANET_LIST_FIELDS,
  dataSource: {},
  objectType: PLANET_OBJECT_TYPE,
  mainRoute: PLANET_MAIN_ROUTE
}

export const filmsListItemDataPlaceholder: ListItemData = {
  titleField: FILM_TITLE_FIELD,
  descriptionFields: FILM_LIST_FIELDS,
  dataSource: {},
  objectType: FILM_OBJECT_TYPE,
  mainRoute: FILM_MAIN_ROUTE
}

export const speciesListItemDataPlaceholder: ListItemData = {
  titleField: SPECIE_TITLE_FIELD,
  descriptionFields: SPECIE_LIST_FIELDS,
  dataSource: {},
  objectType: SPECIE_OBJECT_TYPE,
  mainRoute: SPECIE_MAIN_ROUTE
}

export const vehiclesListItemDataPlaceholder: ListItemData = {
  titleField: VEHICLE_TITLE_FIELD,
  descriptionFields: VEHICLE_LIST_FIELDS,
  dataSource: {},
  objectType: VEHICLE_OBJECT_TYPE,
  mainRoute: VEHICLE_MAIN_ROUTE
}

export const starshipsListItemDataPlaceholder: ListItemData = {
  titleField: STARSHIP_TITLE_FIELD,
  descriptionFields: STARSHIP_LIST_FIELDS,
  dataSource: {},
  objectType: STARSHIP_OBJECT_TYPE,
  mainRoute: STARSHIP_MAIN_ROUTE
}
