import { Map, NavigationControl } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./scssStyles/Map.scss";
import { getStoreWithinDistance } from "../services/api/stores";
import { useState, useEffect } from "react";
// import useFetch from './hooks/useFetch';

function MyMap({ lat, lng }: any) {
  const [initialStores, setInitialStores] = useState([]);

  useEffect(() => {
    console.log("lat: " + lat + " lng: " + lng);
    if (lat != 0 && lng != 0) {
      // console.log("lat: " + lat + " lng: " + lng);
      // getStoreWithinDistance(lat, lng, 1000).then((data: any) => {
      //   setInitialStores(data);
      //   console.log(data);
      // });

      setInitialStores(
        [
          {
              "store_id": 7722,
              "store_name": "La Tienda de Julieta",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0883559,
                      4.6449991
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7734,
              "store_name": "Lavandería",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.087622,
                      4.6451386
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7735,
              "store_name": "Masita's Gourmet",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.087217,
                      4.6451944
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7736,
              "store_name": "Sala de Belleza y Peluqueria",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0887841,
                      4.6439075
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7737,
              "store_name": "Cigarreria P.P",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0886633,
                      4.6437908
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7745,
              "store_name": "Kangoo Restaurant",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0905201,
                      4.6429434
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7746,
              "store_name": "Belen",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0905059,
                      4.6429194
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7747,
              "store_name": "Carbon y Pez",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.090310538,
                      4.642767385
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7748,
              "store_name": "Servicio Lavanderia Express",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0898614,
                      4.6430078
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7959,
              "store_name": "Centro de especialidades veterinarias",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0920288,
                      4.6341049
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7960,
              "store_name": "Galan my new world",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0925793,
                      4.6351805
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7977,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0922253,
                      4.6373514
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7980,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0916423,
                      4.6362921
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7981,
              "store_name": "Hemeroteca Nacional",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.091117035,
                      4.63663201
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7982,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0907834,
                      4.6366942
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7983,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0900934,
                      4.6370694
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7984,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0901002,
                      4.637189
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7985,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.090033,
                      4.6371262
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7986,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0908226,
                      4.6369633
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7987,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.089210091,
                      4.638131985
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7988,
              "store_name": "Cicloparqueadero",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0887452,
                      4.6390708
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7989,
              "store_name": "BicirrUN",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0885856,
                      4.6387678
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7990,
              "store_name": "Concha Acústica (761)",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.087180431,
                      4.638846327
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7991,
              "store_name": "Horno Crematorio (561I)",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.088432253,
                      4.637130851
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7992,
              "store_name": "Biblioteca de Agronomía",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.087441,
                      4.6357443
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7993,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0869995,
                      4.6358833
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7994,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0888072,
                      4.6336942
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7995,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0882739,
                      4.6345515
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7996,
              "store_name": "BicirrUN",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.088232,
                      4.6345858
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7997,
              "store_name": "Supermercado Danilos",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0897627,
                      4.6334337
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7998,
              "store_name": "Pizzeria",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0896726,
                      4.6334179
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 7999,
              "store_name": "Audifarma",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.089905,
                      4.6340485
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8000,
              "store_name": "Drogueria Golfer",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0898647,
                      4.6340301
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8001,
              "store_name": "Oral Clinic",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0896639,
                      4.6339627
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8002,
              "store_name": "Aprissa Pizza",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0893735,
                      4.6338592
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8003,
              "store_name": "Domino's",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.089063,
                      4.6333515
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8004,
              "store_name": "Postres Magolita",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0894881,
                      4.633301
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8005,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0894972,
                      4.6332833
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8006,
              "store_name": "Restaurante 3/4",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.09004405,
                      4.632929366
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8007,
              "store_name": "American veterinaria ltda - fabrica",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0908769,
                      4.6326378
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8008,
              "store_name": "Benitez Yanez Odontologia Estetica",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0912304,
                      4.6323191
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8009,
              "store_name": "MiamI Gourmet",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0912051,
                      4.6322778
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8010,
              "store_name": "Premi Salud",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.090942315,
                      4.632400358
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8011,
              "store_name": "PSQ IPS",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0906989,
                      4.6324987
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8012,
              "store_name": "Café OMA",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0905631,
                      4.632542
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8013,
              "store_name": "Pabellones 18-23",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.090513437,
                      4.631775923
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8017,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0900154,
                      4.6313464
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8018,
              "store_name": "Davivienda",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0899805,
                      4.6312683
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8019,
              "store_name": "Frisby",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0896507,
                      4.6312656
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8020,
              "store_name": "Café OMA",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0896978,
                      4.6313365
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8021,
              "store_name": "El Corral",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0898491,
                      4.6314349
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8022,
              "store_name": "Plazoleta de Comidas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.089748018,
                      4.63137466
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8023,
              "store_name": "Mister Lee",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0896383,
                      4.6314221
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8024,
              "store_name": "Presto",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0896782,
                      4.6314654
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8025,
              "store_name": "PPC",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0897155,
                      4.631498
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8026,
              "store_name": "Kokoriko",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0897564,
                      4.6314915
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8027,
              "store_name": "Dunkin'",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0899383,
                      4.6313838
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8028,
              "store_name": "Tostao’",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.089139197,
                      4.631500911
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8029,
              "store_name": "Rodizio Brasil",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0896034,
                      4.6313608
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8030,
              "store_name": "Spoleto",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0895341,
                      4.6312223
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8031,
              "store_name": "Global Cafe",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0875056,
                      4.6323807
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8032,
              "store_name": "Moreno Brand",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0876824,
                      4.633351
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8033,
              "store_name": "Tostao’",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0876676,
                      4.6332555
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8034,
              "store_name": "LavaXpress",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0861087,
                      4.631962
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8035,
              "store_name": "Madarino",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0858752,
                      4.6313827
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8036,
              "store_name": "Star",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0859829,
                      4.6315284
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8037,
              "store_name": "Drogueria Sideral Droxi",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0860156,
                      4.6315093
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8038,
              "store_name": "Clínica Fundadores",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.085453766,
                      4.631310201
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8039,
              "store_name": "Centro Médico IMEF",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0847907,
                      4.63131635
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8040,
              "store_name": "Restaurante Rico",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0844842,
                      4.6315895
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8041,
              "store_name": "Grabaddy Corte Laser",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0849611,
                      4.6318681
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8042,
              "store_name": "Cigarreria Nacional",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.084928,
                      4.6318212
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8043,
              "store_name": "Cafeteria Sabrosuras",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0848903,
                      4.6317612
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8044,
              "store_name": "Carbon Factory",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0849894,
                      4.6320058
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8045,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.085194571,
                      4.632143801
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8046,
              "store_name": "Koma A la Parrilla",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0852165,
                      4.6320483
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8047,
              "store_name": "Restaurante El Buen Fogon",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0852711,
                      4.632018
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8048,
              "store_name": "A Mordiscos",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0850512,
                      4.6319904
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8049,
              "store_name": "Cocina casera",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0850836,
                      4.6318817
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8050,
              "store_name": "La Aldea Hamburguesas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0853498,
                      4.6319759
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8051,
              "store_name": "Frijoladas y algo más",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.085399812,
                      4.632447059
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8052,
              "store_name": "Banco Popular ATH",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0848141,
                      4.632851
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8053,
              "store_name": "Banco Popular",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.084745173,
                      4.632908239
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8054,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0861864,
                      4.6339298
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8055,
              "store_name": "Biblioteca de Postgrados de Ciencias Humanas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0864412,
                      4.6343615
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8056,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0867081,
                      4.6342646
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8057,
              "store_name": "Unidad de Apoyo y Rescate a Animales Salvages (504)",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.085692948,
                      4.635342957
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8058,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0853626,
                      4.6348311
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8059,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0846474,
                      4.6340729
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8060,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0846105,
                      4.6342278
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8061,
              "store_name": "Odontología (210)",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.085224553,
                      4.634489891
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8062,
              "store_name": "Bono Alimentario",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0854604,
                      4.6343711
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8063,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0852119,
                      4.6337108
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8064,
              "store_name": "Biblioteca Mujer y Género",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0855517,
                      4.6339036
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8065,
              "store_name": "Cafeteria Geologia",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0855876,
                      4.6337398
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8066,
              "store_name": "Auditorio Geologia",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0853036,
                      4.6335073
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8067,
              "store_name": "Cafetería de Ciencias Humanas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.083933,
                      4.6345117
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8068,
              "store_name": "Biblioteca de Derecho y Ciencias Políticas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0842232,
                      4.6356441
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8069,
              "store_name": "Auditorio Camilo Torres",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0838445,
                      4.6350548
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8070,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.082738,
                      4.634769
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8071,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0829679,
                      4.6348643
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8072,
              "store_name": "Biblioteca Central - Gabriel García Márquez",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.083266592,
                      4.635309695
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8073,
              "store_name": "Chaza del Árbol",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0827954,
                      4.6351189
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8074,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0825609,
                      4.6351537
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8075,
              "store_name": "Torre de Enfermería",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.082283241,
                      4.635182622
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8076,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0822153,
                      4.6350038
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8077,
              "store_name": "Comedor Central",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0827372,
                      4.63451415
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8078,
              "store_name": "Estación BicirrUN entrada calle 26",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0836841,
                      4.6329518
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8079,
              "store_name": "Cicloparqueadero",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0836147,
                      4.6331748
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8080,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0840679,
                      4.6332858
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8081,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0835886,
                      4.6327138
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8082,
              "store_name": "Sandwich Maestro",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0835822,
                      4.6321104
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8083,
              "store_name": "Comedia Rte-Bar;Tacos Mexicanos",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0835668,
                      4.6319948
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8084,
              "store_name": "ESTABLECIMIENTOS DE COMIDAS Y BEBIDAS",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0835837,
                      4.6319395
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8085,
              "store_name": "El Master",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0836627,
                      4.6318724
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8086,
              "store_name": "Comedia",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0836458,
                      4.6318076
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8087,
              "store_name": "Mr. Leña",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0836597,
                      4.631844
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8088,
              "store_name": "Food Express",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.083602814,
                      4.631757772
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8089,
              "store_name": "Stazione Pizza",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.083641,
                      4.6319454
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8090,
              "store_name": "Arde La Brasa",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0843418,
                      4.6316942
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8091,
              "store_name": "Subway UNAL Calle 26",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0841215,
                      4.6313754
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8092,
              "store_name": "Librería Cava del Libro",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0841636,
                      4.6314282
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8093,
              "store_name": "Rico Express",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.084248,
                      4.6315426
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8094,
              "store_name": "La Cava del Libro",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0843109,
                      4.6316379
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8095,
              "store_name": "Rte Yerbabuena",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0844181,
                      4.6316284
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8096,
              "store_name": "Ciudad Universitaria",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.083780692,
                      4.631240138
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8097,
              "store_name": "Multiservicios Felmar",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0835393,
                      4.6315289
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8098,
              "store_name": "DaVita Centro de Cuidado Renal",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.083292,
                      4.6312218
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8099,
              "store_name": "ServiCopy El Castillo",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0831332,
                      4.6313697
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8100,
              "store_name": "Restaurante y Pescaderia Quilichao",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.083214895,
                      4.631770259
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8101,
              "store_name": "Nicanor",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0831512,
                      4.6319283
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8102,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0824871,
                      4.6318737
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8103,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0821653,
                      4.631446
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8104,
              "store_name": "La Turquesa",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0823919,
                      4.6316245
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8105,
              "store_name": "Bavara Bar",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.081923,
                      4.6315062
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8106,
              "store_name": "La Parva",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.081892372,
                      4.631438259
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8107,
              "store_name": "La Parva",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0815923,
                      4.6315507
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8108,
              "store_name": "Centro De Copias Felipe",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0816714,
                      4.6314593
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8109,
              "store_name": "Papeleria",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0816749,
                      4.6311049
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8110,
              "store_name": "Pharmatodo",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0816501,
                      4.6311223
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8111,
              "store_name": "Lavaseco",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0811485,
                      4.6315561
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8112,
              "store_name": "Cigarreria John Thomas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0811295,
                      4.631525
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8113,
              "store_name": "Aza Fran",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0813998,
                      4.6315955
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8114,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0818434,
                      4.6316706
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8115,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0821521,
                      4.6317621
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8116,
              "store_name": "Capilla (251)",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.081470712,
                      4.632878273
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8117,
              "store_name": "Copinet 45",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0807675,
                      4.6323308
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8118,
              "store_name": "Deep Blue",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0799404,
                      4.6332909
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8119,
              "store_name": "Cafe La BICIta",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0799915,
                      4.6333091
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8120,
              "store_name": "Montallantas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0800872,
                      4.63286795
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8121,
              "store_name": "Texaco",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.080081057,
                      4.63270288
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8122,
              "store_name": "Centro de Servicios",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.080245183,
                      4.632447902
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8123,
              "store_name": "GasNatural fenosa",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.080107962,
                      4.632479517
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8124,
              "store_name": "Travel 2 Live",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.081009794,
                      4.631188345
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8125,
              "store_name": "Carpas Jaguar",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0794321,
                      4.6314163
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8126,
              "store_name": "Forros Y Carpas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0794217,
                      4.6314979
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8127,
              "store_name": "Cegarreria Monte Blanco",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0793779,
                      4.6321822
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8128,
              "store_name": "San Cangrejo",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0793918,
                      4.6319801
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8129,
              "store_name": "Los Forros y Accesorios",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.079401,
                      4.6316678
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8130,
              "store_name": "Cigarrería y Papelería la E",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0785342,
                      4.631503
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8131,
              "store_name": "Cooperativa de Profesores de la Universidad Nacional de Colombia",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.078021136,
                      4.631357762
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8132,
              "store_name": "Dubai Express",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0784073,
                      4.6322182
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8133,
              "store_name": "La Pandera",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0783872,
                      4.6322811
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8134,
              "store_name": "Marquetería arte y pincel",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.078075803,
                      4.632387243
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8135,
              "store_name": "Prvilegio",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0783423,
                      4.6329267
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8136,
              "store_name": "RUEMEN",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0788452,
                      4.6332502
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8137,
              "store_name": "Arca encuadernación",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0791557,
                      4.6328986
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8138,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0790018,
                      4.6324094
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8139,
              "store_name": "Acuavelez",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0790886,
                      4.63265
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8140,
              "store_name": "Estética IPS",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.079059987,
                      4.632732386
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8141,
              "store_name": "Forros de la 30",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0793066,
                      4.6332221
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8142,
              "store_name": "Parrilla Broaster",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0791825,
                      4.6340215
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8143,
              "store_name": "Play 3",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0791802,
                      4.6340578
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8144,
              "store_name": "Academia de Billar",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0791759,
                      4.6341787
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8145,
              "store_name": "La chuperia",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.079172,
                      4.634104
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8146,
              "store_name": "Frucel",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0791691,
                      4.6343074
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8147,
              "store_name": "Cop&@r Express",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0791437,
                      4.6343617
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8148,
              "store_name": "Papelería Arte y Diseño",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0790493,
                      4.6343418
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8149,
              "store_name": "Papelería Olimpia",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0790181,
                      4.6343346
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8150,
              "store_name": "Papelería Boyacá",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0790851,
                      4.6343503
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8151,
              "store_name": "gloo",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0791134,
                      4.6343541
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8152,
              "store_name": "La Pizarra Papelería",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0789808,
                      4.634327
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8153,
              "store_name": "Calentao y Patacón",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0789201,
                      4.6343071
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8154,
              "store_name": "La vecina.com",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0789232,
                      4.6344945
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8155,
              "store_name": "Licorera La Nacional de la 45",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0788052,
                      4.6342865
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8156,
              "store_name": "La Vecina Gourmet",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0787543,
                      4.6342657
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8157,
              "store_name": "Deprisa",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0791798,
                      4.6339466
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8158,
              "store_name": "Forroautos 43",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0792301,
                      4.6336231
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8159,
              "store_name": "Buena Pasta",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0788077,
                      4.6335777
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8160,
              "store_name": "Amesfe",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0788157,
                      4.6335082
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8161,
              "store_name": "La Passarola",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.078551189,
                      4.633493173
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8162,
              "store_name": "Lavaseco La Soledad",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0778629,
                      4.6335657
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8163,
              "store_name": "Kolos Cocina Andina",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0778186,
                      4.6338637
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8164,
              "store_name": "BIZARRE ROCK BAR",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0781012,
                      4.6341134
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8165,
              "store_name": "Al Monte",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.078035127,
                      4.634094316
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8166,
              "store_name": "Moffis",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0777742,
                      4.6340521
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8167,
              "store_name": "Drogueria Murano",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0775948,
                      4.6340322
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8168,
              "store_name": "Conducir Colombia",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0775716,
                      4.6340236
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8169,
              "store_name": "Pots",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0776698,
                      4.6340478
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8170,
              "store_name": "Amercar",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0776363,
                      4.6340401
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8171,
              "store_name": "Academia de Billar La Nacional",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0782226,
                      4.6341774
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8172,
              "store_name": "Mr. Baguette",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0782608,
                      4.6341842
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8173,
              "store_name": "Studio 45",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0781946,
                      4.6341475
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8174,
              "store_name": "Perú Acá",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0781517,
                      4.6341598
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8175,
              "store_name": "Vector Zero",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0783967,
                      4.6342081
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8176,
              "store_name": "P&P Topografos",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0784481,
                      4.6342161
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8177,
              "store_name": "Ploter",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0784906,
                      4.6342293
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8178,
              "store_name": "Kin Men",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.078503741,
                      4.633950971
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8179,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0785414,
                      4.6340364
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8180,
              "store_name": "Taller del viento",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0786809,
                      4.633972
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8181,
              "store_name": "Potrerito",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0786823,
                      4.6340749
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8182,
              "store_name": "Plott ink",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0786689,
                      4.6341351
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8183,
              "store_name": "PizzaExpress",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0786156,
                      4.6342548
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8184,
              "store_name": "El Perrote Hotdog",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0782902,
                      4.6345976
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8185,
              "store_name": "Planet Broaster",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0781072,
                      4.6345666
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8186,
              "store_name": "Billar Berlín",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0778903,
                      4.6345301
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8187,
              "store_name": "Panadería Manaus",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0776355,
                      4.6347334
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8188,
              "store_name": "Subway UNAL carrera 30",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0790341,
                      4.6355637
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8189,
              "store_name": "Pre-universitario",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0788432,
                      4.6347422
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8190,
              "store_name": "Internet & Telecomunicaciones",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0788038,
                      4.6347341
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8191,
              "store_name": "Ferreinter",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0788841,
                      4.6347505
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8192,
              "store_name": "Buhos",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0789734,
                      4.6347688
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8193,
              "store_name": "Teleinter",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0789398,
                      4.6347619
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8194,
              "store_name": "Papelería Dantre Vega",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.079046,
                      4.6347836
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8195,
              "store_name": "Banco Popular",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0791092,
                      4.6347965
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8196,
              "store_name": "Servientrega",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0791162,
                      4.6349832
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8197,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0801196,
                      4.6355027
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8198,
              "store_name": "BicirrUN entrada Calle 45",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0804217,
                      4.6351551
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8199,
              "store_name": "Cicloparqueadero",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0805836,
                      4.635204
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8200,
              "store_name": "Postres",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0804407,
                      4.6349116
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8201,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.080897,
                      4.6348351
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8202,
              "store_name": "Empanadas de Limon",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0801331,
                      4.6348312
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8203,
              "store_name": "Comidas Rapidas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0798825,
                      4.6345908
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8204,
              "store_name": "Pizzeria",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0799553,
                      4.6344653
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8205,
              "store_name": "Centrocopias Bellas Artes",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0821359,
                      4.6362185
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8206,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0818576,
                      4.6358304
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8207,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0820887,
                      4.6362436
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8208,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0819046,
                      4.6377341
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8209,
              "store_name": "El Arbolito",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0812088,
                      4.6375606
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8210,
              "store_name": "Salud Total",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0788582,
                      4.6359714
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8211,
              "store_name": "Teatro Bernardo Romero Lozano",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.078665,
                      4.6362121
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8212,
              "store_name": "Teatro Bernardo Romero Lozano",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.078399966,
                      4.636216264
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8213,
              "store_name": "Forros Beda",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0788196,
                      4.6374876
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8214,
              "store_name": "Auto Carpas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.078851,
                      4.6372796
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8215,
              "store_name": "La Bodega de los Forros",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0788385,
                      4.6373625
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8216,
              "store_name": "Juan Bautista",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0787898,
                      4.6369732
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8217,
              "store_name": "Panadería Los Hornitos",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0787924,
                      4.6386395
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8218,
              "store_name": "Importadora de semillas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0777463,
                      4.6402429
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8219,
              "store_name": "Tiendas D1",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.078727568,
                      4.639979875
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8220,
              "store_name": "CADE Ingeniería",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.081486911,
                      4.638038089
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8221,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0818058,
                      4.6384946
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8222,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0817822,
                      4.6379662
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8223,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0821479,
                      4.6381867
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8224,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0824147,
                      4.6393396
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8225,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0825208,
                      4.639139
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8226,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0843022,
                      4.6402288
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8227,
              "store_name": "Bahía de Parqueaderos de Aulas de Ingeniería",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0840046,
                      4.6387718
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8228,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0843018,
                      4.6382609
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8229,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0836119,
                      4.6379796
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8230,
              "store_name": "Parqueadero bicicletas aulas ingenierìa",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0836631,
                      4.638179
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8231,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0835611,
                      4.6384607
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8232,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0835188,
                      4.6384858
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8233,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0834903,
                      4.6384983
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8234,
              "store_name": "Parqueadero Bicicletas instituto de extensión de investigación",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0828305,
                      4.638128
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8235,
              "store_name": "403",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0830003,
                      4.6383525
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8236,
              "store_name": "Laboratorios de ingeniería Electrica Y Mecánica",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0825258,
                      4.6389822
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8237,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0825249,
                      4.6374135
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8238,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0826088,
                      4.6375262
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8239,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0826865,
                      4.6378296
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8240,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0826893,
                      4.637121
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8241,
              "store_name": "304",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.082226,
                      4.637016
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8242,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.082185,
                      4.6363888
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8243,
              "store_name": "Auditorio Leon de Greiff",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.082311884,
                      4.635721543
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8244,
              "store_name": "Tostao’",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0824368,
                      4.6358633
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8245,
              "store_name": "Cicloparqueadero",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0826341,
                      4.6358081
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8246,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0831784,
                      4.6357345
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8247,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0836098,
                      4.6378088
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8248,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0845646,
                      4.6376977
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8249,
              "store_name": "Cafeteria de Medicina (474)",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.084478264,
                      4.636793385
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8250,
              "store_name": "Perrera (473)",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.085160533,
                      4.636599729
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8251,
              "store_name": "Restaurante veterinaria",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.085616713,
                      4.636793304
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8252,
              "store_name": "Cirugía y Clínica de Grandes Animales (501)",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.085863659,
                      4.636214371
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8253,
              "store_name": "Farmacia y Oficinas (510)",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.086200007,
                      4.635823921
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8254,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0864162,
                      4.6358201
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8255,
              "store_name": "Clínica de Pequeños Animales",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.086190793,
                      4.636635947
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8256,
              "store_name": "Canela Bakery CyT",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0847961,
                      4.6380062
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8257,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0846826,
                      4.637969
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8258,
              "store_name": "Parqueadero CyT",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0846701,
                      4.6384188
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8259,
              "store_name": "BicirrUN CyT",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0848101,
                      4.6383235
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8260,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0845445,
                      4.6401021
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8261,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0847855,
                      4.6399695
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8262,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0834741,
                      4.6431103
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8263,
              "store_name": "BicirrUN Calle 53",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0837819,
                      4.6429188
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8264,
              "store_name": "Jardin - UN (905)",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.084061046,
                      4.644535492
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8265,
              "store_name": "Droguería rafael Nuñez",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0866486,
                      4.6430817
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8273,
              "store_name": "El paraiso hogar infantil",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0814809,
                      4.6458887
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8281,
              "store_name": "El Corral",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.078465545,
                      4.64385999
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8282,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0782736,
                      4.643825
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8283,
              "store_name": "Le Colombie Cigarrerìa",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0779286,
                      4.6437496
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8284,
              "store_name": "Empanadas Crunch",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0778784,
                      4.6437449
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8285,
              "store_name": "Pizza",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0778319,
                      4.6437397
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8286,
              "store_name": "Mundofarma",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0777916,
                      4.6437366
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8287,
              "store_name": "Sefecty",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0777378,
                      4.6437299
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8288,
              "store_name": "Cosechas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0777134,
                      4.6437268
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8289,
              "store_name": "Empanaditas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0776922,
                      4.6437247
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8290,
              "store_name": "Wplay.co",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0776839,
                      4.643644
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8291,
              "store_name": "Gilma Medina",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0777145,
                      4.6434933
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8292,
              "store_name": "Primax",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.078463716,
                      4.643680952
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8293,
              "store_name": "Arakawa",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0793935,
                      4.643057
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8294,
              "store_name": "cafeteria amiga",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0792736,
                      4.6442925
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8295,
              "store_name": "Supermercado Amigol",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0793084,
                      4.6444631
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8296,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0820412,
                      4.6421997
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8297,
              "store_name": "Lavanderia",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0787537,
                      4.6408899
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8298,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0798026,
                      4.6418223
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8299,
              "store_name": "Pastelería Romannoli",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0779905,
                      4.642334
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8300,
              "store_name": "Droguería Americana",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.077876,
                      4.6423146
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8301,
              "store_name": "Delicias del Huila",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.077814,
                      4.6423045
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8302,
              "store_name": "Tienda Naturista JG",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0777531,
                      4.6422975
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8303,
              "store_name": "Chipo-tle!",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.077716,
                      4.6422915
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8304,
              "store_name": "El Empanadazo la 53",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0776541,
                      4.6422774
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8305,
              "store_name": "Ferrelectricos",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0776035,
                      4.6422665
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8306,
              "store_name": "UsaDitos",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0774814,
                      4.6404216
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8307,
              "store_name": "Novias Smoking",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0770612,
                      4.6403199
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8308,
              "store_name": "La Sposa",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0769703,
                      4.6403153
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8309,
              "store_name": "TecnAutos & Althersystem",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.076665,
                      4.6402663
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8310,
              "store_name": "Alquiler Smoking",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0765348,
                      4.6410339
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8311,
              "store_name": "Ferney Rodriguez",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.076469,
                      4.6410223
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8312,
              "store_name": "Mamby",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0764148,
                      4.6410127
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8313,
              "store_name": "Smoking Ruby",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0766336,
                      4.6410513
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8314,
              "store_name": "Centro de Salud Oral",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.076453989,
                      4.641331114
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8315,
              "store_name": "Centro Odontologíco Fuerza Aérea",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0765505,
                      4.6413289
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8316,
              "store_name": "Marcia Vargas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0773883,
                      4.6416742
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8317,
              "store_name": "Iglesia de Bogotá",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0771805,
                      4.641906
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8318,
              "store_name": "Terra Express",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0772081,
                      4.6419121
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8319,
              "store_name": "Carbon Factory",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0773838,
                      4.6417536
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8320,
              "store_name": "Droguería Olimpica",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0774106,
                      4.6421934
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8321,
              "store_name": "Gran Guyana",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.077521,
                      4.6422465
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8322,
              "store_name": "Las Acacias",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0771345,
                      4.6420925
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8323,
              "store_name": "La Tranpa Gold",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.076803546,
                      4.642101581
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8324,
              "store_name": "Facol",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.07685228,
                      4.642120714
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8325,
              "store_name": "Afrikan Club Bogota",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.07690345,
                      4.64212895
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8326,
              "store_name": "Fisby",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.07688076,
                      4.64251217
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8327,
              "store_name": "Siboney",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.076799499,
                      4.64250054
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8328,
              "store_name": "La Firma",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.076723307,
                      4.642505121
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8329,
              "store_name": "Servientrega",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0767478,
                      4.6424432
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8330,
              "store_name": "La Trampa Vallenata",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.076576,
                      4.6423536
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8331,
              "store_name": "Shilaoo",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.076663031,
                      4.642495364
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8332,
              "store_name": "ONLY",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.07656585,
                      4.64247865
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8333,
              "store_name": "Royal",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0767303,
                      4.6418297
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8334,
              "store_name": "Skinny Universal",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0768263,
                      4.641845
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8335,
              "store_name": "Palo Negro",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0769233,
                      4.6418603
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8336,
              "store_name": "Bigs Skate Shop",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0766326,
                      4.6414507
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8337,
              "store_name": "Dope",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0766258,
                      4.6414942
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8338,
              "store_name": "Carbon Factory",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0766307,
                      4.6416167
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8339,
              "store_name": "Premium",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0764241,
                      4.6416171
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8340,
              "store_name": "Kandelaria",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0761394,
                      4.6414786
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8343,
              "store_name": "PLAZA JUAREZ",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0761072,
                      4.6416283
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8366,
              "store_name": "fotocopias",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0756645,
                      4.640893
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8367,
              "store_name": "Donde Chiky",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0757575,
                      4.641088
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8368,
              "store_name": "Arroz Paisa",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.075913743,
                      4.641146168
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8369,
              "store_name": "Karaoke",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0760178,
                      4.6412366
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8370,
              "store_name": "Pa Mekatear",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0760342,
                      4.6411399
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8371,
              "store_name": "Beerland",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0761716,
                      4.6413342
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8372,
              "store_name": "Penelope",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.076283022,
                      4.641245804
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8373,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.076257,
                      4.6408633
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8374,
              "store_name": "Pincho Express",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0760343,
                      4.6409673
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8375,
              "store_name": "Antojos del Caribe",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0758445,
                      4.641103
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8376,
              "store_name": "Koma a la Parrilla",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0759549,
                      4.6409528
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8377,
              "store_name": "capital wings",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0762677,
                      4.6406935
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8378,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0763093,
                      4.6404649
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8379,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0755928,
                      4.6405271
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8380,
              "store_name": "Los Magnificos",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0756311,
                      4.6406243
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8871,
              "store_name": "Bicicleteria La 25",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0751438,
                      4.638469
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8872,
              "store_name": "Tarragona",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0751941,
                      4.6390698
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8873,
              "store_name": "Milenium Cafe",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0750907,
                      4.6391645
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8902,
              "store_name": "Mami",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0755282,
                      4.6400396
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8903,
              "store_name": "Panadería-Pastelería La fina",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.075753385,
                      4.64015664
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8904,
              "store_name": "Rancho de Los Quesos",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0755694,
                      4.6400521
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8905,
              "store_name": "Brangus Carnes",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.075586,
                      4.6398844
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8906,
              "store_name": "Time Out",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.075779,
                      4.6399048
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8907,
              "store_name": "Lavanderia Multiexito",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.075812095,
                      4.639917156
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8908,
              "store_name": "Licores Rancho",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0755469,
                      4.6398771
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8909,
              "store_name": "Cerrajeris",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0754903,
                      4.6398668
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8910,
              "store_name": "Papeleria",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0754511,
                      4.6398605
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8911,
              "store_name": "Donde Willy",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0752665,
                      4.6398277
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8912,
              "store_name": "Delis",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.075284207,
                      4.639742877
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8913,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0756441,
                      4.6394447
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8914,
              "store_name": "Tackmetal",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0762474,
                      4.6391659
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8915,
              "store_name": "Electro Autos",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0763907,
                      4.6392285
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8916,
              "store_name": "Paysandú",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0762046,
                      4.6399617
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8917,
              "store_name": "D1",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0759104,
                      4.6401253
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8918,
              "store_name": "Pintumarta",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0759963,
                      4.6401378
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8919,
              "store_name": "Paga Todo",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0761691,
                      4.6401699
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8920,
              "store_name": "Alquiler de Smoking",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0761423,
                      4.6401654
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8921,
              "store_name": "Punto Farma",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0763827,
                      4.6402428
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8922,
              "store_name": "Orthoevolution IPS",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.076516,
                      4.6400116
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8923,
              "store_name": "Tienda La 51",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.077145,
                      4.6401116
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8924,
              "store_name": "Alimentos Para la Vida",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0753247,
                      4.6389961
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8925,
              "store_name": "Navetaxi",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0753105,
                      4.6388249
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8926,
              "store_name": "Goleman LA Soledad",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0768908,
                      4.6373383
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8927,
              "store_name": "Corsanemos",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.07745525,
                      4.6357385
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8928,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.076965312,
                      4.636157492
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8929,
              "store_name": "Animal Center",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0750749,
                      4.6361195
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8930,
              "store_name": "Botique Del Gato",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0750795,
                      4.6360868
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8931,
              "store_name": "Avianca",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0750908,
                      4.6360178
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8940,
              "store_name": "Akikiriki",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0749565,
                      4.6367873
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8942,
              "store_name": "Colegio Odontologico Colombian",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0750159,
                      4.6364746
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8943,
              "store_name": "Botique",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0749981,
                      4.6365667
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 8944,
              "store_name": "Two Taller café Bicis",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0749186,
                      4.6369967
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9036,
              "store_name": "Restaurante Gallina Asada",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0752022,
                      4.6355289
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9037,
              "store_name": "Tatto Piercing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.075185,
                      4.6356209
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9038,
              "store_name": "dog kat vet",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.075312272,
                      4.635142716
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9039,
              "store_name": "Salud Dar",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0752681,
                      4.635069
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9040,
              "store_name": "Farmacia Homeopatica",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0752806,
                      4.6350002
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9041,
              "store_name": "Greeen Berry",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0753292,
                      4.6348007
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9042,
              "store_name": "Al Gratin",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0754525,
                      4.6345955
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9043,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0759418,
                      4.6353795
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9044,
              "store_name": "Play 3",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.076973,
                      4.6343602
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9045,
              "store_name": "DeQueso",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0768833,
                      4.6343419
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9046,
              "store_name": "Licorera La Nacho",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0767702,
                      4.6343188
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9047,
              "store_name": "Lucho´s Burguer",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0772656,
                      4.6344113
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9048,
              "store_name": "Tramoya",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0773575,
                      4.6344388
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9049,
              "store_name": "Farmacia",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0774716,
                      4.6344621
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9050,
              "store_name": "Chipotle",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0775418,
                      4.634026
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9051,
              "store_name": "Supermercado La Nacional",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.077469581,
                      4.63395704
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9052,
              "store_name": "Recargas - Toner y Cartuchos",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0774642,
                      4.6339867
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9053,
              "store_name": "Punto Verde",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0773496,
                      4.6340045
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9054,
              "store_name": "Carmelitas Misioneras",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.076943897,
                      4.633627106
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9055,
              "store_name": "Envia",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0759138,
                      4.634215
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9063,
              "store_name": "La Despensa Tienda Responsable",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0771856,
                      4.6314268
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 9064,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0775207,
                      4.6316448
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18760,
              "store_name": "Abka",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0784709,
                      4.6309892
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18761,
              "store_name": "Biciliteria",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0784776,
                      4.6308404
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18762,
              "store_name": "Bicicleteria",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0783559,
                      4.6305556
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18763,
              "store_name": "Panadería San Isidro",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0784198,
                      4.6307853
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18776,
              "store_name": "Taller de Encuadernación",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0797821,
                      4.6294608
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18777,
              "store_name": "JGB",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0796861,
                      4.6298366
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18778,
              "store_name": "Led Gourmet",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.079606,
                      4.6301486
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18779,
              "store_name": "Donuts Donuts",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.078833725,
                      4.630481344
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18780,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.07893775,
                      4.63051415
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18781,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0789535,
                      4.6307608
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18782,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0788955,
                      4.6308824
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18783,
              "store_name": "Santos Ángeles Custodios",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0807383,
                      4.6301797
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18784,
              "store_name": "El Chispero Rojo",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0817811,
                      4.6310291
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18785,
              "store_name": "Helados Pingo",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0820525,
                      4.630858
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18786,
              "store_name": "La Nacional",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0819321,
                      4.6309339
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18787,
              "store_name": "Mog's Graphic Service",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0820812,
                      4.6305352
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18788,
              "store_name": "Supermercado Buitrago",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.082022055,
                      4.630518234
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18789,
              "store_name": "Villa Nueva",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0817896,
                      4.630678
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18790,
              "store_name": "Cafeteria y Panaderia Isabella",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0816497,
                      4.6307692
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18791,
              "store_name": "Vegan Fit",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0821572,
                      4.6304493
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18792,
              "store_name": "Drywall",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0821012,
                      4.630488
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18793,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0815001,
                      4.6304729
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18794,
              "store_name": "Casa cural",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.081293,
                      4.6302443
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18795,
              "store_name": "IED Manuela Beltran",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0815777,
                      4.6296664
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18896,
              "store_name": "Licores Punto 26",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0823644,
                      4.6286107
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18897,
              "store_name": "Servientrega",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0824225,
                      4.6287021
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18898,
              "store_name": "Bancolombia",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.082487473,
                      4.628732962
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18899,
              "store_name": "Montallantas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.08257847,
                      4.628667449
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18900,
              "store_name": "Restaurante La 32",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0824495,
                      4.6285431
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18901,
              "store_name": "Alineacion Texaco",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.082662905,
                      4.628608733
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18902,
              "store_name": "gasNatural fenosa",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.082750898,
                      4.628776907
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18903,
              "store_name": "Lubricacion Texaco",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.082865033,
                      4.628709433
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18904,
              "store_name": "La Gomez",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0839776,
                      4.6296136
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18905,
              "store_name": "BBVA",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0834106,
                      4.6293911
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18906,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0835106,
                      4.6293298
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18907,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0835571,
                      4.629294
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18908,
              "store_name": "Metro Express",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.083694,
                      4.6292063
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18909,
              "store_name": "Centro Educativo Distrital Antonio Nariño",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0833667,
                      4.6289732
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18910,
              "store_name": "Movistar",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0828183,
                      4.6292755
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18911,
              "store_name": "Texaco",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.082615395,
                      4.628866513
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18912,
              "store_name": "Mr. Chicken",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.082384943,
                      4.629888333
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18913,
              "store_name": "Pharmastore Plus",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.083266,
                      4.6300869
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18914,
              "store_name": "U Original",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0832966,
                      4.6301282
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18915,
              "store_name": "Banco Popular",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0828683,
                      4.6304733
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18916,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0827714,
                      4.6304415
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18917,
              "store_name": "Ferreteria",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0825394,
                      4.6301961
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18918,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.082478515,
                      4.630073111
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18919,
              "store_name": "LaImprenta.co",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0824938,
                      4.629967
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18920,
              "store_name": "Drogueria Unirebajas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0823816,
                      4.6302883
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18921,
              "store_name": "Banco de Bogota",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0823912,
                      4.6306444
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18922,
              "store_name": "Bavara Café y Bar",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0822616,
                      4.6307261
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18923,
              "store_name": "Comida Vegetariana Wok",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0823501,
                      4.6306704
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18924,
              "store_name": "La Carbonera",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0828448,
                      4.6305767
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18925,
              "store_name": "Colombian Broaster",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0838791,
                      4.6309875
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18926,
              "store_name": "Punto 26",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0835833,
                      4.6305567
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18927,
              "store_name": "Ciudad Universitaria",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.08337191,
                      4.630636453
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18928,
              "store_name": "Davivienda",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0834719,
                      4.630389
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18929,
              "store_name": "Multipruebas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0833175,
                      4.6301679
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18930,
              "store_name": "Supermercado El Recuerdo",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0840849,
                      4.6299907
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18931,
              "store_name": "Pan Y Frutas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0843602,
                      4.6301965
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18932,
              "store_name": "Botas Sobre Medidas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0844052,
                      4.6302747
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18933,
              "store_name": "Restaurante La Tiend De Juanpa",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.084265706,
                      4.630344967
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18934,
              "store_name": "Supermercado El Recuerdo",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.084395,
                      4.6305154
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18935,
              "store_name": "Restaurante Solaris",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0840421,
                      4.6306115
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18936,
              "store_name": "Restaurante Orange",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0841608,
                      4.6308749
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18937,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0842222,
                      4.6309996
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18938,
              "store_name": "Restaurante El Deleite",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0843073,
                      4.6308468
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18939,
              "store_name": "La 38",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0852965,
                      4.6304316
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18940,
              "store_name": "D'KCHE",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0866322,
                      4.6293214
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18941,
              "store_name": "LAVAnota",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0867341,
                      4.6294858
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18942,
              "store_name": "Galeria del Aseo",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0867319,
                      4.6296168
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18943,
              "store_name": "Panes & Manjares",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0866938,
                      4.6296409
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18944,
              "store_name": "Steven",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0862084,
                      4.6298279
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18945,
              "store_name": "Mi Amigo Fiel",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0865842,
                      4.6297056
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18946,
              "store_name": "Margarita Oñate",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0866377,
                      4.6296735
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18947,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0863119,
                      4.6301846
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18948,
              "store_name": "El Recuerdo",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0860196,
                      4.6299389
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18949,
              "store_name": "Restaurante Donde Mary",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0857103,
                      4.6301919
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18950,
              "store_name": "Mi tio y yo",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0861413,
                      4.6302614
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18951,
              "store_name": "Recetas Secretas",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0863384,
                      4.6305916
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18952,
              "store_name": "Servientrega",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0863446,
                      4.6306835
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18953,
              "store_name": "Eat Fast and Good",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0867305,
                      4.6308432
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18954,
              "store_name": "Sam Burger",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0866734,
                      4.6308805
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18955,
              "store_name": "Café Bar Arábigos",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0865286,
                      4.630917
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18956,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0867943,
                      4.6310189
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18957,
              "store_name": "One way Pizza",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0869281,
                      4.6309428
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18958,
              "store_name": "The Laundry Room",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0871987,
                      4.6307365
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18959,
              "store_name": "Fruteria & Cafeteria",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0871925,
                      4.6305477
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18960,
              "store_name": "Jeno's Pizza",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0882254,
                      4.6301018
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18961,
              "store_name": "Tamalandia Express",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.088275358,
                      4.630218266
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18962,
              "store_name": "Restaurante Carpanni",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0883671,
                      4.630271
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18963,
              "store_name": "Colombian Pollo",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0883854,
                      4.6303052
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18964,
              "store_name": "Cerraduras",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0884137,
                      4.6303451
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18965,
              "store_name": "Panadería",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0884569,
                      4.6304207
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18967,
              "store_name": "Carnes La Calidad",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0875709,
                      4.6291114
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18968,
              "store_name": "Frutas y Verdura Merka Fresh",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0874877,
                      4.6291329
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18969,
              "store_name": "La 35",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0874375,
                      4.6290815
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18970,
              "store_name": "Servicio Total Lavaseco",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0874241,
                      4.6291907
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18971,
              "store_name": "Fontibon de la 38",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0873437,
                      4.6292375
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18973,
              "store_name": "La Marrana Restaurante",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0876853,
                      4.6292101
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18974,
              "store_name": "Drogas Descuentos",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.087657,
                      4.6291737
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18975,
              "store_name": "La Toscana",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0878265,
                      4.6294143
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18976,
              "store_name": "El Morichal",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0867832,
                      4.6295878
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18977,
              "store_name": "Las Delicias",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0869902,
                      4.629284
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 18978,
              "store_name": "Arte y Color",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0869133,
                      4.6293361
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 19005,
              "store_name": "store name missing",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.0891475,
                      4.6304189
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 19006,
              "store_name": "Pabellón 6",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.089859551,
                      4.630615696
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          },
          {
              "store_id": 19007,
              "store_name": "Auditorio José Asunción Silva",
              "store_location": {
                  "type": "Point",
                  "coordinates": [
                      -74.090430117,
                      4.631065938
                  ]
              },
              "store_description": null,
              "store_schedule": null,
              "store_creation_time": "2023-04-19T21:49:25.303Z",
              "store_appuser_id": 1
          }
      ]
      );

    }
  }, []);

  return (
    <div className="Map">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: -74.086294,
          latitude: 4.638243,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=HWu5MQaWC0VG5MdG9IxM"
      >
        <div className="navControl">
          <NavigationControl position="bottom-right" />
        </div>
      </Map>
    </div>
  );
}

export default MyMap;
