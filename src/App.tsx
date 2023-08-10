import { useEffect, useState } from "react";

type AdviceTypes = {
  slip: {
    id: number;
    advice: string;
  };
};

const App = () => {
  const [advice, setAdvice] = useState<AdviceTypes>({
    slip: {
      id: 0,
      advice: "",
    },
  });

  useEffect(() => {
    handleChange();
  }, []);

  const handleChange = async () => {
    fetch("https://api.adviceslip.com/advice")
      .then((resp) => resp.json())
      .then((data) => setAdvice(data));
  };

  return (
    <main className="bg-dark-grayish-blue text-center flex flex-col items-center rounded-xl px-12 pt-[52px] pb-[72px] gap-8 relative max-w-[540px] mx-4 my-[120px] shadow-2xl top">
      <h2 className="uppercase text-neon-green text-[10px] tracking-[5px]">
        advice #{advice.slip.id}
      </h2>
      <h1 className="text-2xl">"{advice.slip.advice}"</h1>
      <img
        src="./pattern-divider-desktop.svg"
        alt="pattern divider desktop"
        className="sm:block hidden"
      />
      <img
        src="./pattern-divider-mobile.svg"
        alt="pattern divider mobile"
        className="sm:hidden block"
      />
      <button
        className="absolute -bottom-8 bg-neon-green rounded-full p-5 transition-all ease-in-out duration-500 hover:drop-shadow-button-shadow active:drop-shadow-button-shadow"
        onClick={handleChange}
      >
        <img src="./icon-dice.svg" alt="icon dice" />
      </button>
    </main>
  );
};

export default App;
