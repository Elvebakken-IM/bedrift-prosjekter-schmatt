import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Discmenu({ selectedForum, setSelectedForum }) {
  return (
    <div className="w-full px-4 pt-16">
      {selectedForum && <p>Selected forum: {selectedForum}</p>}
      <div className="mx-auto w-full max-w-md rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-xl font-medium text-[#FFF8F8] #FFF8F8 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Coding</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-[#FFF8F8]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 active:ring-1 ring-slate-600 active:rounded-xl active:text-text-color hover:text-text-color cursor-pointer select-none">
                <a
                  onClick={() => {
                    setSelectedForum("s/CodingTips");
                  }}
                >
                  s/CodingTips
                </a>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 active:ring-1 ring-slate-600 active:rounded-xl active:text-text-color hover:text-text-color cursor-pointer select-none">
                <a onClick={() => setSelectedForum("s/CodingNews")}>
                  s/CodingNews
                </a>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 active:ring-1 ring-slate-600 active:rounded-xl active:text-text-color hover:text-text-color cursor-pointer select-none">
                <a onClick={() => setSelectedForum("s/WebDevelopment")}>
                  s/WebDevelopment
                </a>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 active:ring-1 ring-slate-600 active:rounded-xl active:text-text-color hover:text-text-color cursor-pointer select-none">
                <a onClick={() => setSelectedForum("s/CodingHelp")}>
                  s/CodingHelp
                </a>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {/* Other forums... */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-xl font-medium text-[#FFF8F8] #FFF8F8 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Plants</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-[#FFF8F8]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 active:ring-1 ring-slate-600 active:rounded-xl active:text-text-color hover:text-text-color cursor-pointer select-none">
                <a
                  onClick={() => {
                    setSelectedForum("s/Cacti");
                  }}
                >
                  s/Cacti
                </a>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 active:ring-1 ring-slate-600 active:rounded-xl active:text-text-color hover:text-text-color cursor-pointer select-none">
                <a onClick={() => setSelectedForum("s/PlantHelp")}>
                  s/Plant-help
                </a>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 active:ring-1 ring-slate-600 active:rounded-xl active:text-text-color hover:text-text-color cursor-pointer select-none">
                <a onClick={() => setSelectedForum("s/Flowers")}>
                  s/Flowers
                </a>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-xl font-medium text-[#FFF8F8] #FFF8F8 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Fitness</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-[#FFF8F8]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 active:ring-1 ring-slate-600 active:rounded-xl active:text-text-color hover:text-text-color cursor-pointer select-none">
                <a
                  onClick={() => {
                    setSelectedForum("s/Cardio");
                  }}
                >
                  s/Cardio
                </a>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 active:ring-1 ring-slate-600 active:rounded-xl active:text-text-color hover:text-text-color cursor-pointer select-none">
                <a onClick={() => setSelectedForum("s/Strong")}>
                  s/Strong
                </a>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 active:ring-1 ring-slate-600 active:rounded-xl active:text-text-color hover:text-text-color cursor-pointer select-none">
                <a onClick={() => setSelectedForum("s/BigDudes")}>
                  s/BigDudes
                </a>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
