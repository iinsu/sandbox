import {
  atom,
  selector,
  useRecoilState,
  DefaultValue,
  useResetRecoilState,
} from "recoil";

const tempFahernheit = atom({
  key: "tempFahernheit",
  default: 32,
});

const tempCelcius = selector({
  key: "tempCelcius",
  get: ({ get }) => ((get(tempFahernheit) - 32) * 5) / 9,
  set: ({ set }, newValue) =>
    set(
      tempFahernheit,
      newValue instanceof DefaultValue ? newValue : (newValue * 9) / 5 + 32
    ),
});

const List = () => {
  const [tempF, setTempF] = useRecoilState(tempFahernheit);
  const [tempC, setTempC] = useRecoilState(tempCelcius);
  const resetTemp = useResetRecoilState(tempCelcius);

  const addTenCelcius = () => setTempC(tempC + 10);
  const addTenFahrenheit = () => setTempF(tempF + 10);
  const reset = () => resetTemp();

  return (
    <div>
      <h1>Example</h1>
      <div>
        Temp (Celcius):{tempC} <br />
        Temp (Fahrenheit):{tempF}
        <br />
        <button onClick={addTenCelcius}>Add 10 Celcius</button>
        <br />
        <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>
        <br />
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default List;
