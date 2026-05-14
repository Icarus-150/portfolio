import Particle from "../assets/particle.jsx";
// import React from "react"
import React, { useState, useEffect } from "react";
//import { ComposableMap, Geographies, Geography,Marker } from "react-simple-maps"
import mappy from "../assets/countries.json"
import { useRef } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
const ParticleMemo = React.memo(Particle);

const geoUrl = mappy

//  Deep Space Navy  : #0b0d1a
//  Mission Navy     : #0d1b2a
//  Rocket Orange    : #e8600a
//  Thruster Amber   : #f4a225
//  Star White       : #f0f4ff
//  Muted Blue-Gray  : #8ba3c7
//  SLS Purple Tint  : #2e1f5e
//  Grid Line        : rgba(139, 163, 199, 0.12)

function Blog() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [popupMarker, setPopupMarker] = useState(null);
  const articleRef = useRef(null);
  const [mapCenter, setMapCenter] = useState([0, 20]);
  //const [mapZoom, setMapZoom] = useState(1);
  const [mapZoom, setMapZoom] = useState(1);
  const markerSize = Math.max(6, Math.min(1, 6 / mapZoom));
  const popupWidth = selectedMarker ? Math.min(260, 140 + selectedMarker.note.length * 2) : 0;
  const popupHeight = selectedMarker ? 120 : 0;
  const [activePost, setActivePost] = useState(null);
  const futureRoute = {
    idaho_greenriver: {
      coords: [-110.5885, 42.8680],
      country: "Green River (Idaho/Wyoming region)",
      article: "River landscapes and outdoor exploration.",
      note: "River journey",
    },

    italy_future: {
      coords: [12.5674, 41.8719],
      country: "Italy",
      article: "Future return trip for deeper exploration.",
      note: "Extended Italy trip",
    },

    vienna_future: {
      coords: [16.3738, 48.2082],
      country: "Vienna",
      article: "Return for deeper cultural exploration.",
      note: "Music + architecture revisit",
    },

    singapore: {
      coords: [103.8198, 1.3521],
      country: "Singapore",
      article: "Ultra-modern city and cultural fusion.",
      note: "Urban systems exploration",
    },

    thailand: {
      coords: [100.9925, 15.8700],
      country: "Thailand",
      article: "Beaches, temples, and street life.",
      note: "South East Asia travel",
    },

    japan: {
      coords: [138.2529, 36.2048],
      country: "Japan",
      article: "Technology, tradition, and nature.",
      note: "Tokyo + Kyoto + rural regions",
    },

    sanfrancisco_future: {
      coords: [-122.4194, 37.7749],
      country: "San Francisco",
      article: "Return hub and connection point.",
      note: "West Coast base",
    },

    newyork: {
      coords: [-74.0060, 40.7128],
      country: "New York City",
      article: "Urban density and global culture.",
      note: "NYC exploration",
    },

    virginia_future: {
      coords: [-78.6569, 37.4316],
      country: "Virginia",
      article: "Return for historical exploration.",
      note: "East Coast revisit",
    },

    washington_dc: {
      coords: [-77.0369, 38.9072],
      country: "Washington DC",
      article: "Political history and monuments.",
      note: "Capital exploration",
    },
  };

  const visitedLocations = {
    mexicocity: {
      coords: [-99.1332, 19.4326],
      country: "Mexico City",
      article: "Urban exploration, culture, food, and history.",
      note: "Street food + historic center",
      zoom: 6,
    },
    cairo: {
      coords: [30.04, 31.24],
      country: "Cairo",
      article: "Urban exploration, culture, food, and history.",
      note: "pyramids + heat",
      zoom: 3,
    },

    oaxaca: {
      coords: [-96.7266, 17.0732],
      country: "Oaxaca",
      article: "Rich indigenous culture and cuisine.",
      note: "the roots + mezcal + art",
      zoom: 6,
    },

    alaska: {
      coords: [-149.9003, 61.2181],
      country: "Alaska",
      article: " wilderness, and extreme landscapes.",
      note: "Glaciers + not as cold as i thought",
      zoom: 3,
    },

    virginia: {
      coords: [-78.6569, 37.4316],
      country: "Virginia",
      article: "Historic sites and East Coast culture.",
      note: "the lake, and work",
      zoom: 3,
    },

    california: {
      coords: [-119.4179, 36.7783],
      country: "California",
      article: "Coastal drives, cities, and national parks.",
      note: "the best state",
      zoom: 6,
    },

    wyoming: {
      coords: [-107.2903, 43.0759],
      country: "Wyoming",
      article: "Wide open landscapes and national parks.",
      note: "drove through",
      zoom: 3,
    },
      denver: {
      coords: [-107.2903, 43.0759],
      country: "denver",
      article: "Wide open landscapes and national parks.",
      note: "flat tire + #crazy",
      zoom: 3,
    },

    sanfrancisco: {
      coords: [-122.4194, 37.7749],
      country: "San Francisco",
      article: "Tech culture, hills, and waterfront views.",
      note: "Golden Gate + neighborhoods",
      zoom: 6,
    },
    humbolt: {
      coords: [-122.4194, 37.7749],
      country: "humbolt",
      article: "we forgot our keys miles ago",
      note: "redwoods + river",
      zoom: 6,
    },

    sandiego: {
      coords: [-117.1611, 32.7157],
      country: "San Diego",
      article: "Beaches and laid-back coastal life.",
      note: "home + finest city",
      zoom: 6,
    },
    sanmarcos: {
      coords: [-120.6596, 35.2828],
      country: "San Marcos",
      article: "Suburbia",
      note: "uni + grad",
      zoom: 8,
    },

    sanluisobispo: {
      coords: [-120.6596, 35.2828],
      country: "San Luis Obispo",
      article: "Small-town California charm.",
      note: "pre pandemic + uni + friends",
      zoom: 6,
    },

    yosemite: {
      coords: [-119.5383, 37.8651],
      country: "Yosemite",
      article: "Iconic cliffs, waterfalls, and nature.",
      note: "National park + firefalls",
      zoom: 6,
    },

    alabama_hills: {
      coords: [-118.1748, 36.6224],
      country: "Alabama Hills (CA)",
      article: "Unique rock formations near Sierra Nevada.",
      note: "weird plants + unprepared",
      zoom: 6,
    },

    vienna: {
      coords: [16.3738, 48.2082],
      country: "Vienna",
      article: "Classical music, architecture, and culture.",
      note: "18 hours was too short ..going back",
      zoom: 3,
    },

    poland: {
      coords: [19.1451, 51.9194],
      country: "Poland",
      article: "Historic cities and Eastern European culture.",
      note: "krakow + aushwitz-birkenau",
      zoom: 3,
    },

    italy: {
      coords: [12.5674, 41.8719],
      country: "Italy",
      article: "Food, art, and ancient history.",
      note: "Rome + venice + amalfi",
      zoom: 3,
    },

    london: {
      coords: [-0.1276, 51.5072],
      country: "London",
      article: "Global city with deep history and modern culture.",
      note: "Museums + birtish LA",
      zoom: 4,
    },

    bath: {
      coords: [-2.3590, 51.3811],
      country: "Bath",
      article: "Roman baths and Georgian architecture.",
      note: "Historic spa city + #cute",
      zoom: 4,
    },

    paris: {
      coords: [2.3522, 48.8566],
      country: "Paris",
      article: "Art, culture, and iconic landmarks.",
      note: "Eiffel Tower + museums",
      zoom: 3,
    },
  };
  const posts = {
 oaxaca: {
 
  title: "Oaxaca",
  content: [
    { type: "text", value: "Opening paragraph about Mexico City..." },
    { type: "image", src: "https://storage.googleapis.com/km-web-images/km-web-images/Takeout/Google%20Photos/For%20project/IMG_0795.JPG", caption: "The WaterFall my family has taken care of and gets its water from guacamaya, oax." },
    { type: "text", value: `testing with mex :I also found out i have family here, and they have a brunch place by the airport. So i went to lend support undercover. I ordered a staple, chila quiles adn it was great exceptional for what some of my friends call  “chips and salsa”. And the presentation wasnt bad either. The great part is unlimited coffee ad pastries are included. I spoke with my cousin and he siad it was a cultural thing specific to mexico city. As in oaxaca while we have a tradition of sweet bread and coffee we dont have unlimited. He said “it comes from trying to be seen as good hosts but often you didnt have much back then so we would always offer as much coffee and sweet breads as a person wanted”. Like most foods in mexico that arose from making plenty with what little you had, the culture of always giving your guests their hearts fill, even thought you limit their options. ` },
    { type: "image", src:"https://storage.googleapis.com/km-web-images/km-web-images/Takeout/Google%20Photos/For%20project/1%20-%204.jpeg", caption: "The WaterFall my family has taken care of and gets its water from guacamaya, oax."  },
  ]

  },
  mexicocity: {
 
  title: "Mexico City",
 content: [
  { type: "text", value: "The land of the Mexica was great! I had never been to Mexico City but had always flown through on the way to Oaxaca. The culture is very different from my rural towns and regional experience in Mexico. I was surprised by the diversity of people and the same issues that plague any city are found here too. My first night, an earthquake struck and I had to evacuate along with my hostel my first earthquake where I could see the towers swaying." },
  { type: "image", src: "YOUR_ZOCALO_IMAGE.jpg", caption: "The Zócalo, heart of Mexico City." },
  { type: "text", value: "Here are the exposed remnants of the Templo Mayor, the main temple of the Mexica. The museum is underground and visitors can walk around the remaining foundation. Usually pyramids were preserved why not this one? In a way it is 'preserved': many of the stones were used by the conquistadors as foundations for the surrounding buildings. Even the main road once used by the Mexica to walk from the lake edge to the temple is still in use today, lined by local shops and restaurants." },
  { type: "image", src: "YOUR_TORRE_IMAGE.jpg", caption: "Torre Latinoamericana, the tallest tower in Mexico City." },
  { type: "text", value: "The view from the tallest tower in Mexico City, and I believe in Latin America. This is the one I saw swaying from my hostel on my first night. It serves as a telecom and clock tower, retrofitted with seismic mitigations in the 1980s and 90s. It is also used to measure how much Mexico City sinks. Though it sits at one of the highest elevations in Mexico, the city is built on a lake the vast majority not on the lake bed itself, but on reinforced floating gardens the Spanish used as the foundation for their city." },
  { type: "image", src: "YOUR_TEMPLO_MAYOR_IMAGE.jpg", caption: "Templo Mayor, the main temple of the Mexica." },
  { type: "text", value: "The Palacio de Bellas Artes is a stunning building in the center of the city with a museum of architecture within. I took this photo from a Sears a Sears! I was so astonished I went around asking employees for signage, because the last Sears I had been in was in 2015 in Oceanside, right before the company liquidated. Prices were reasonable, but the upper floors are restricted to prevent exactly what I did to get this shot. You can get nearly the same view from just one floor down." },
  { type: "image", src: "YOUR_ANGEL_IMAGE.jpg", caption: "Ángel de la Independencia." },
  { type: "text", value: "I learned a lot about the Mexica and Mexico City, but they had an entire wing devoted to Oaxaca I found it touching. They represent Oaxaca proudly, though you should ask my cousins for a second opinion. On display were celebrations, weapons, and the textiles Oaxaca is known for. Most people think of the elaborate huipils worn by women, but the men had to wear something too. Using the same weaving techniques, movement was prioritized. Many men wore rebozos while they worked, and given their larger dimensions, they could double as a blanket at night. Women's rebozos were made of finer materials and used to signal whether she was single, looking for a husband, married, or widowed much like how traditional Dirndl bows work in Germany. Both are also practical: used to carry lumber, food, or a child. One of the things that shocked me most was seeing the burial traditions on display. I had always heard how some in my father's mountain village chose to be buried with their petate a woven mat used as a bed, a wrap, a partition, and your final rest. This was the first time I had actually seen one. It reminded me how quickly tradition changes. My great-grandfather is buried this way, but my own family uses caskets. Despite my family's efforts, and despite Oaxaca's own, we are becoming a global society." },
  { type: "image", src: "YOUR_MUSEO_IMAGE.jpg", caption: "Museo de Antropología, with a surprising wing dedicated to Oaxaca." },
  { type: "text", value: "I also found out I have family in Mexico City, and they run a brunch spot near the airport. I went to show my support, undercover. I ordered the staple: chilaquiles. It was exceptional what some of my friends back home dismissively call 'chips and salsa.' The best part is that unlimited coffee and pastries are included. My cousin told me it's a Mexico City cultural thing. In Oaxaca we have a tradition of sweet bread and coffee, but not unlimited. He said it comes from wanting to be seen as a good host back when you didn't have much, you would always offer as much coffee and sweet bread as a person wanted. Like most foods in Mexico that arose from making plenty with little, the culture is about giving your guests their heart's fill, even if the options are few." },
  { type: "image", src: "YOUR_BRUNCH_IMAGE.jpg", caption: "Chilaquiles at my family's brunch spot near the airport." },
]
}
};
  const locationList = Object.values(visitedLocations);
  const routesList = Object.values(futureRoute);
  return (

    <main className="section">
      <ParticleMemo />
      <h2>My Blog</h2>

      <p>
        Welcome to my blog! spring break was spent doing HW so i decided to instead document some of the places ive been as well as key take aways
      </p>


      <div style={{
        position: "relative",
        width: "90%",
        maxWidth: "1000px",
        margin: "0 auto",
      }}>
        <ComposableMap
          width={700}
          height={400}
          projection="geoMercator"
          projectionConfig={{
            scale: 125
          }}
        > <ZoomableGroup
          center={mapCenter}
          zoom={mapZoom}
        >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="transparent"
                    stroke="#f4a225"
                    strokeWidth={1}
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {

                        outline: "none",
                      },

                    }}

                  />

                ))
              }
            </Geographies>
            {locationList
              .filter((loc) => loc.country !== selectedMarker?.country)
              .map((loc) => (
                <Marker
                  key={loc.country}
                  coordinates={loc.coords}
                  onClick={() => {
                    setSelectedMarker(loc);
                    setMapCenter(loc.coords);
                    setMapZoom(loc.zoom);
                    setSelectedMarker(loc);
setActivePost(posts[loc.country.toLowerCase().replace(/\s+/g, '')]);
            
                  }}
                >
                  <g
                    style={{
                      transform: `scale(${1 / (mapZoom / 2)})`,
                      transformBox: "fill-box",
                      transformOrigin: "center",
                    }}
                  >
                    <circle r={6} fill="#f4a225" />
                  </g>
                </Marker>
              ))} {selectedMarker && (
                <Marker
                  coordinates={selectedMarker.coords}
                > <g
                  style={{
                    transform: `scale(${1 / (mapZoom / 2)})`,
                    transformBox: "fill-box",
                    transformOrigin: "center",
                  }}
                >
                    <circle
                      r={markerSize}
                      fill="#f4a225"
                      stroke="#fff"
                      strokeWidth={2}
                    />
                  </g>
                </Marker>

              )}


          </ZoomableGroup>

          {selectedMarker && (
            <Marker coordinates={selectedMarker.coords}>

              <g transform="translate(12, -20)">
                <foreignObject
                  width={popupWidth}
                  height={popupHeight}>


                  <div
                    className="popup"
                    onClick={() =>
                      articleRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                  >
                    <h4>
                      <Typewriter
                        text={selectedMarker.country}
                        speed={35}
                      />
                    </h4>

                    <p>
                      <Typewriter
                        text={selectedMarker.note}
                        speed={18}
                      />
                    </p>
                  </div>
                </foreignObject>
              </g>
            </Marker>)}

        </ComposableMap>

      </div>

      {/* <article ref={articleRef} className="blog-post" id="blog-article">

        <h3>
          {selectedMarker?.country || "Click a location on the map to explore...."}
        </h3>

        <p>

          {selectedMarker?.note}
        </p>

      </article> */}
     {/* <article 
  ref={articleRef} 
  className={`blog-post ${activePost || selectedMarker ? "open" : ""}`}>
  {selectedMarker ? (
    <>
      <h3>{activePost?.title || selectedMarker.country}</h3>
      
      {activePost?.content
        ? activePost.content.map((p, i) => <p key={i}>{p}</p>)
        : <p>{selectedMarker.article}</p>
      }

      {activePost?.images?.map((img, i) => (
        <img key={i} src={img} style={{ width: "100%", marginTop: 10 }} />
      ))}
    </>
  ) : (
    <p>Click a location on the map to explore...</p>
  )}
</article> */}
      <article

  ref={articleRef}
  className={`blog-post ${activePost || selectedMarker ? "open" : ""}`}
>
  {selectedMarker ? (
    <>
      <h3>{activePost?.title || selectedMarker.country}</h3>

      {activePost?.content
        ? activePost.content.map((block, i) => {
            if (block.type === "text") {
              return <p key={i}>{block.value}</p>;
            }
            if (block.type === "image") {
              return (
                <figure key={i}>
                  <img src={block.src} style={{  width: "100%", 
    maxWidth: "100%",
    height: "auto",
    display: "block"}} />
                  <figcaption>{block.caption}</figcaption>
                </figure>
              );
            }
          })
        : <p>{selectedMarker?.article || "No content available."}</p>
      }
    </>
  ) : (
    <p>Click a location on the map to explore...</p>
  )}
</article>




    </main>
  );




}
function Typewriter({ text, speed = 40 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");

    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));

      i++;

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayed}</span>;
}
const getPopupCoords = (coords, zoom) => {
  const baseOffset = 8 / zoom;

  return [
    coords[0] + baseOffset,
    coords[1] - baseOffset / 2
  ];
};
const animateZoom = (targetZoom, duration = 600) => {
  const start = mapZoom;
  const startTime = performance.now();

  const step = (time) => {
    const t = Math.min((time - startTime) / duration, 1);

    const ease =
      t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const value = start + (targetZoom - start) * ease;

    setMapZoom(value);

    if (t < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};
export default Blog;