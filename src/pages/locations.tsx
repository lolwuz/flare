import { type NextPage } from "next";
import Link from "next/link";

const locations = [
  {
    id: 0,
    url: "https://map.gustav-gaming.nl/?worldname=shakirasseed&mapname=surface&zoom=4&x=-1883&y=64&z=24",
    name: "Love Island",
    builders: "Ernst en Lara",
  },
  {
    id: 1,
    url: "https://map.gustav-gaming.nl/?worldname=shakirasseed&mapname=surface&zoom=6&x=-2376&y=64&z=-381",
    name: "Huis",
    builders: "Dylan",
  },
  {
    id: 2,
    url: "https://map.gustav-gaming.nl/?worldname=shakirasseed&mapname=surface&zoom=4&x=289&y=64&z=14",
    name: "Fort Marten",
    builders: "Marten",
  },
  {
    id: 3,
    url: "https://map.gustav-gaming.nl/?worldname=shakirasseed&mapname=surface&zoom=4&x=-9930&y=64&z=5022",
    name: "Kasteel",
    builders: "Shakira en Benji",
  },
  {
    id: 4,
    url: "https://map.gustav-gaming.nl/?worldname=shakirasseed&mapname=surface&zoom=7&x=-2934&y=64&z=-66",
    name: "Daar boven op die Berg!",
    builders: "Woont Sven",
  },
];

const Locations: NextPage = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-6 py-12 md:px-12">
        <div className="mb-12">
          <Link href="/" className="rounded-xl bg-indigo-500 p-3 text-white">
            home
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {locations.map((location) => (
            <div
              key={location.id}
              className="relative h-[350px] overflow-hidden rounded-3xl"
              onClick={() => window.open(location.url, "_blank")?.focus()}
            >
              <iframe
                src={location.url + `&nogui=true#`}
                className="pointer-events-none absolute h-full w-full hover:opacity-5"
              ></iframe>

              <div className="absolute flex h-full w-full flex-col justify-end bg-neutral-950 bg-opacity-0 p-6 hover:bg-opacity-50 hover:transition-all">
                <h1 className="text-xl font-black text-white shadow">
                  {location.name}
                </h1>

                <h2 className="shado text-base font-bold text-indigo-100">
                  {location.builders}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
