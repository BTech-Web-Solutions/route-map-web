import LOGO from "../../public/assets/LOGO.png";
import location from "../../public/assets/location.png";
import origin from "../../public/assets/origin.png";
import destination from "../../public/assets/destination.png";
import fuel_lg from "../../public/assets/fuel_lg.png";
import km from "../../public/assets/km.png";
import money_sm from "../../public/assets/money_sm.png";
import fuel_sm from "../../public/assets/fuel_sm.png";
import pedagio_sm from "../../public/assets/pedagio_sm.png";
import road_sm from "../../public/assets/road_sm.png";
import time_sm from "../../public/assets/time_sm.png";

export default function Home() {
  return (
    <main className="text-zinc-200">
      <div className="flex flex-col items-center">
        <img src={LOGO.src} alt="LOGO" className="h-28 mt-8" />
        <div className="border-2 w-[90%] m-5 border-[#00FFFD] rounded-full" />

        {/* Origin Section */}
        <div className="flex flex-col gap-2">
          <section className="flex gap-4 items-center">
            <img src={origin.src} alt="" className="h-12" />
            <input
              type="text"
              className="rounded-full w-56 h-11 px-2 text-zinc-600 font-light"
              placeholder="Endereço, Cidade, Estado"
            />
            <img src={location.src} alt="location" className="h-10" />
          </section>
          {/* Destination Section */}
          <section className="flex gap-4 items-center">
            <img src={destination.src} alt="" className="h-12 ml-[-10.5px]" />
            <input
              type="text"
              className="rounded-full w-56 h-11 px-2 text-zinc-600 font-light"
              placeholder="Endereço, Cidade, Estado"
            />
          </section>
          {/* Fuel Section */}
          <section className="flex gap-8 mt-2">
            <div className="flex gap-2">
              <img src={fuel_lg.src} alt="fuel" className="h-12" />
              <input
                type="text"
                className="rounded-full w-24 h-11 px-2 text-zinc-600 font-light"
                placeholder="R$ 0,00"
              />
            </div>

            <div className="flex gap-2">
              <img src={km.src} alt="fuel" className="h-12" />
              <input
                type="text"
                className="rounded-full w-24 h-11 px-2 text-zinc-600 font-light"
                placeholder="Km / litro"
              />
            </div>
          </section>

          {/* Calculate Button */}
          <section className="flex justify-center -mt-4">
            <button className="bg-[#00FFFD] w-36 h-8 rounded-full mt-4 text-zinc-950 font-bold tracking-[4px]">
              CALCULAR
            </button>
          </section>

          {/* Result Section */}
          <section className="flex items-center mt-4">
            <div className="grid grid-cols-2 w-[48%] gap-3">
              <div className="flex gap-2 items-center justify-center ">
                <img src={time_sm.src} alt="" className="h-6" />
                <p className="font-medium text-xs tracking-tighter">0h0m</p>
              </div>

              <div className="flex gap-2 items-center ">
                <img src={road_sm.src} alt="" className="h-6" />
                <p className="font-medium text-xs tracking-tighter">0 km</p>
              </div>

              <div className="flex gap-2 items-center justify-center">
                <img src={fuel_sm.src} alt="" className="h-6" />
                <p className="font-medium text-xs tracking-tighter">R$0,00</p>
              </div>

              <div className="flex gap-2 items-center justify-center">
                <img src={pedagio_sm.src} alt="" className="h-6" />
                <p className="font-medium text-xs tracking-tighter">R$0,00</p>
              </div>
            </div>

            <div className="flex gap-2 items-center ml-3">
              <img src={money_sm.src} alt="Result" className="h-8 mt-2" />
              <h1 className="font-medium text-4xl tracking-tight">999,99</h1>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
