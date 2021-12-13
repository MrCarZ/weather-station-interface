const createMeasureObject = (data) => {
  const {
    type,
    year,
    month,
    day,
    hour,
    minute,
    second,
    microssecond,
    temperature,
    humidity,
    pressure,
  } = data;

  const timestamp = new Date(
    year,
    month,
    day,
    hour,
    minute,
    second
  ).toLocaleTimeString("pt-BR") + (microssecond ? `${microssecond}`: "")


  const measureObject = {
    timestamp: timestamp,
    temperature: temperature ? temperature : null,
    humidity: humidity ? humidity : null,
    pressure: pressure ? pressure : null,
    lightningStrike: (type === 1) ? null : 1,
  };

  return measureObject;
};

export default createMeasureObject;
