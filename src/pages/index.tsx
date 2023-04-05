/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MapIcon, ServerIcon } from "@heroicons/react/24/solid";
import { FocusEvent, useEffect, useState } from "react";

interface IBibleQuote {
  details: {
    text: string;
    reference: string;
    version: string;
    verseurl: string;
  };
}

const servers = [
  {
    id: 0,
    name: "Minecraft",
    ip: "minecraft.gustav-gaming.nl",
    description: "Minecraft Survival",
    map: "https://map.gustav-gaming.nl",
    image: "/minecraft.png",
  },
];

const Home: NextPage = () => {
  const [quote, setQuote] = useState<IBibleQuote | null>(null);

  useEffect(() => {
    const getRandomQuote = async () => {
      const response = await fetch(
        "https://beta.ourmanna.com/api/v1/get/?format=json"
      );
      const data: { notice: string; verse: IBibleQuote } =
        await response.json();

      setQuote(data.verse);
    };

    void getRandomQuote();
  }, []);

  const handleClick = (event: FocusEvent<HTMLInputElement>) => {
    event?.target?.select();
  };

  console.log({ quote });

  return (
    <>
      <Head>
        <title>Dylans Gaming Server</title>
        <meta name="description" content="Dylans Gaming Server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative bg-zinc-900">
        <div className="relative min-h-screen px-6 pb-24 pt-6">
          <div className="mx-auto max-w-screen-lg">
            <div className="mb-6 flex gap-6">
              <div className="grow">
                <h1 className="my-3 text-2xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
                  <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                    Dylans
                  </span>{" "}
                  Gaming Server
                </h1>
              </div>

              <div className="my-auto">
                <a
                  className="rounded-lg bg-gradient-to-r p-3 font-bold text-white"
                  href="https://admin.gustav-gaming.nl"
                  target="_blank"
                  rel="noopener"
                >
                  ADMIN
                </a>
              </div>
            </div>

            <p className="text-lg font-normal italic text-white">
              {quote?.details.text}
            </p>

            <p className="mb-6 mt-3 text-lg font-bold text-purple-500">
              {quote?.details.reference}
            </p>

            <hr className="border border-zinc-800" />

            <h2 className="mb-3 mt-6 text-xl font-semibold text-gray-300">
              ACTIEVE SERVERS
            </h2>

            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {servers.map((server) => (
                <div
                  key={server.id}
                  className="col-span-2 rounded-xl bg-zinc-600/20 p-6 text-white backdrop-blur-sm transition-colors hover:bg-zinc-600/40"
                >
                  <div className="flex">
                    <div className="grow">
                      <h3 className="text-2xl font-bold">{server.name}</h3>
                      <div className="mt-3 text-lg">{server.description}</div>
                    </div>

                    <div className="my-auto">
                      <div className="relative h-16 w-16">
                        <Image
                          src={server.image}
                          alt={server.image}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <ServerIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={server.ip}
                      className="mt-6 block w-full rounded-lg border border-zinc-800 bg-zinc-900 p-3 pl-10 font-bold text-white"
                      onFocus={handleClick}
                    />
                  </div>

                  {server.map && (
                    <div className="mt-4 flex justify-end gap-3">
                      <a
                        href={server.map}
                        className="flex gap-3 rounded-lg border border-zinc-800 bg-cyan-900 p-3 text-sm font-bold"
                        target="_blank"
                        rel="noopener"
                      >
                        <div className="my-auto">
                          <MapIcon className="h-4 w-4" />
                        </div>

                        <div className="grow">VIEW MAP</div>
                      </a>

                      <Link
                        href="/locations"
                        className="flex gap-3 rounded-lg border border-zinc-800 bg-cyan-900 p-3 text-sm font-bold"
                      >
                        <div className="my-auto">
                          <MapIcon className="h-4 w-4" />
                        </div>

                        <div className="grow">LOCATIONS</div>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <hr className="border border-zinc-800" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h2 className="mb-3 mt-6 text-xl font-semibold text-gray-300">
                  MEDIA
                </h2>

                <div
                  className="flex flex-col rounded-xl bg-zinc-600/20 p-6 text-white backdrop-blur-sm transition-colors hover:bg-zinc-600/40"
                  onClick={() => {
                    window
                      .open("https://discord.gg/WfTkT3TrRP", "_blank")!
                      .focus();
                  }}
                >
                  <div className="grow">
                    <div className="relative h-40 w-full">
                      <Image
                        src="/movies.jpg"
                        alt="movies.jpg"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <h3 className="mb-6 mt-6 text-2xl font-bold text-gray-100">
                      PLEX SERVER
                    </h3>
                  </div>

                  <div>
                    <button className="w-full rounded-lg bg-zinc-700 p-3 font-bold text-white transition-colors hover:bg-indigo-500">
                      OPEN PLEX
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-3 mt-6 text-xl font-semibold text-gray-300">
                  DISCORD
                </h2>

                <div
                  className="mb-6 flex flex-col rounded-xl bg-zinc-600/20 p-6 text-white backdrop-blur-sm transition-colors hover:bg-zinc-600/40"
                  onClick={() => {
                    window
                      .open("https://discord.gg/WfTkT3TrRP", "_blank")!
                      .focus();
                  }}
                >
                  <div className="grow">
                    <div className="relative h-40 w-full">
                      <Image
                        src="/discord.jpg"
                        alt="discord.jpg"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <h3 className="mb-6 mt-6 text-2xl font-bold text-gray-100">
                      FLARE&apos;S SANCTUARY
                    </h3>
                  </div>

                  <div>
                    <button className="w-full rounded-lg bg-zinc-700 p-3 font-bold text-white transition-all hover:bg-indigo-500">
                      JOIN SERVER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
