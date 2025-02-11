import { useCounter } from "../hooks/useCounter";

export const CountComponent = () => {
    const { counter, increase, decrease, reset } = useCounter(0);
    return (
        <>
            <div className="w-full h-screen font-semibold flex flex-col justify-center items-center gap-8">
                <h1 className="text-amber-400 text-5xl text-center">
                    CONTADOR DE CLICKS
                </h1>
                <div className="text-white text-5xl bg-blue-800 rounded-full w-60 h-60 text-center flex justify-center items-center hover:scale-105 duration-150 ease-in-out outline-5 outline-offset-10 outline-dashed outline-blue-600/30 cursor-pointer">
                    <h2 className="text-amber-400">{counter}</h2>
                </div>
                <div className="space-x-2">
                    <button
                        onClick={() => increase(1)}
                        className="text-white px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 hover:-translate-y-1 transition duration-150 ease-in-out active:scale-95 active:text-amber-400 cursor-pointer"
                    >
                        Increase
                    </button>
                    <button
                        onClick={() => decrease(1)}
                        className="text-white px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 hover:-translate-y-1 transition duration-150 ease-in-out active:scale-95 active:text-amber-400 cursor-pointer"
                    >
                        Decrease
                    </button>
                    <button
                        onClick={() => reset()}
                        className="text-white px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 hover:-translate-y-1 transition duration-150 ease-in-out active:scale-95 active:text-amber-400 cursor-pointer"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
};
/*soy el anterior*/
