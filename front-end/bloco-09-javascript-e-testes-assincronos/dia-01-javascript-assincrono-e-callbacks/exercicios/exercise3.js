const planet = ({ name }) => name;
const getPlanet = () => {
    setTimeout(() => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    console.log("Returned planet: ", mars)}, 4000);
  };
  
  getPlanet(planet); // imprime Marte depois de 4 segundos