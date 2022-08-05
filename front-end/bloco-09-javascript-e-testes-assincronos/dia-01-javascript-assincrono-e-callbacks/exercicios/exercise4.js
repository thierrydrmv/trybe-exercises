const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (temperature, timer) => {
    setTimeout (() => {
    console.log(`Mars temperature is: ${temperature()} degree Celsius`)
}, timer());
}

sendMarsTemperature(getMarsTemperature, messageDelay);