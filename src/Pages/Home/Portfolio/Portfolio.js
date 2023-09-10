import React from "react";
import SectionTitle from "../../../Components/Common/SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaGithub } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TfiServer } from "react-icons/tfi";
import projectsData from "../../../config.data/config.data";

// import 'react-tabs/style/react-tabs.css';

const Portfolio = () => {
  return (
    <div className="container-w pt-20 md:pt-32 pb-10" id="projects">
      <div>
        <SectionTitle title_text={"My Recent Projects"}></SectionTitle>
      </div>
      <Tabs className="mt-10">
        <TabList className="flex-wrap flex justify-center gap-5">
          <Tab className="cursor-pointer ah-color-third ah-bg-third-transparent hover:bg-white hover:text-black rounded duration-300 px-5 py-2 inline-block">
            ALL
          </Tab>
          <Tab className="cursor-pointer ah-color-third ah-bg-third-transparent hover:bg-white hover:text-black rounded duration-300 px-5 py-2 inline-block">
            REACT JS
          </Tab>
          <Tab className="cursor-pointer ah-color-third ah-bg-third-transparent hover:bg-white hover:text-black rounded duration-300 px-5 py-2 inline-block">
            JAVASCRIPT
          </Tab>
          <Tab className="cursor-pointer ah-color-third ah-bg-third-transparent hover:bg-white hover:text-black rounded duration-300 px-5 py-2 inline-block">
            HTML & CSS
          </Tab>
          {/* <Tab className="cursor-pointer ah-color-third ah-bg-third-transparent hover:bg-white hover:text-black rounded duration-300 px-5 py-2 inline-block">NEXT JS</Tab> */}
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {projectsData.slice(0, 9).map((data) => (
              <div
                key={data.id}
                className="ah-bg-secondary rounded-md border-2 border-gray-700 p-6"
              >
                <div
                  class="bg-no-repeat rounded-md cursor-pointer h-64 group"
                  style={{
                    backgroundImage: `url(${data.image})`,
                    backgroundSize: "100%",
                  }}
                >
                  <div class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <div className="flex justify-center gap-4">
                      <div className="tooltip" data-tip="Live Website">
                        <a
                          href={data.liveSide}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <div className="h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center">
                            <RxOpenInNewWindow size={24}></RxOpenInNewWindow>
                          </div>
                        </a>
                      </div>
                      {data.clientSide && (
                        <div className="tooltip" data-tip="Client Side Code">
                          <a
                            href={data.clientSide}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <div className="h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center">
                              <FaGithub size={24}></FaGithub>
                            </div>
                          </a>
                        </div>
                      )}
                      {data.serverSide && (
                        <div className="tooltip" data-tip="Server Side Code">
                          <a
                            href={data.serverSide}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <div className="h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center">
                              <TfiServer size={24}></TfiServer>
                            </div>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl ah-color-primary mt-4">
                  {data.projectName}
                </h2>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {projectsData.map(
              (data) =>
                data.projectType === "react" && (
                  <div
                    key={data.id}
                    className="ah-bg-secondary rounded-md border-2 border-gray-700 p-6"
                  >
                    <div
                      class="bg-no-repeat rounded-md cursor-pointer h-64 group"
                      style={{
                        backgroundImage: `url(${data.image})`,
                        backgroundSize: "100%",
                      }}
                    >
                      <div class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                        <div className="flex justify-center gap-4">
                          <div className="tooltip" data-tip="Live Website">
                            <a
                              href={data.liveSide}
                              rel="noreferrer"
                              target="_blank"
                            >
                              <div className="h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center">
                                <RxOpenInNewWindow
                                  size={24}
                                ></RxOpenInNewWindow>
                              </div>
                            </a>
                          </div>
                          {data.clientSide && (
                            <div
                              className="tooltip"
                              data-tip="Client Side Code"
                            >
                              <a
                                href={data.clientSide}
                                rel="noreferrer"
                                target="_blank"
                              >
                                <div className="h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center">
                                  <FaGithub size={24}></FaGithub>
                                </div>
                              </a>
                            </div>
                          )}
                          {data.serverSide && (
                            <div
                              className="tooltip"
                              data-tip="Server Side Code"
                            >
                              <a
                                href={data.serverSide}
                                rel="noreferrer"
                                target="_blank"
                              >
                                <div className="h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center">
                                  <TfiServer size={24}></TfiServer>
                                </div>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <h2 className="text-2xl ah-color-primary mt-4">
                      {data.projectName}
                    </h2>
                  </div>
                )
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {projectsData.map(
              (data) =>
                data.projectType === "javascript" && (
                  <div
                    key={data.id}
                    className="ah-bg-secondary rounded-md border-2 border-gray-700 p-6"
                  >
                    <div
                      class="bg-no-repeat rounded-md cursor-pointer h-64 group"
                      style={{
                        backgroundImage: `url(${data.image})`,
                        backgroundSize: "100%",
                      }}
                    >
                      <div class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                        <div className="flex justify-center gap-4">
                          <div className="tooltip" data-tip="Live Website">
                            <a
                              href={data.liveSide}
                              rel="noreferrer"
                              target="_blank"
                            >
                              <div className="h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center">
                                <RxOpenInNewWindow
                                  size={24}
                                ></RxOpenInNewWindow>
                              </div>
                            </a>
                          </div>
                          {data.clientSide && (
                            <div
                              className="tooltip"
                              data-tip="Client Side Code"
                            >
                              <a
                                href={data.clientSide}
                                rel="noreferrer"
                                target="_blank"
                              >
                                <div className="h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center">
                                  <FaGithub size={24}></FaGithub>
                                </div>
                              </a>
                            </div>
                          )}
                          {data.serverSide && (
                            <div
                              className="tooltip"
                              data-tip="Server Side Code"
                            >
                              <a
                                href={data.serverSide}
                                rel="noreferrer"
                                target="_blank"
                              >
                                <div className="h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center">
                                  <TfiServer size={24}></TfiServer>
                                </div>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <h2 className="text-2xl ah-color-primary mt-4">
                      {data.projectName}
                    </h2>
                  </div>
                )
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {projectsData.map(
              (data) =>
                data.projectType === "html&css" && (
                  <div
                    key={data.id}
                    className="ah-bg-secondary rounded-md border-2 border-gray-700 p-6"
                  >
                    <div
                      class="bg-no-repeat rounded-md cursor-pointer h-64 group"
                      style={{
                        backgroundImage: `url(${data.image})`,
                        backgroundSize: "100%",
                      }}
                    >
                      <div class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                        <div className="flex justify-center gap-4">
                          <div className="tooltip" data-tip="Live Website">
                            <a
                              href={data.liveSide}
                              rel="noreferrer"
                              target="_blank"
                            >
                              <div className="h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center">
                                <RxOpenInNewWindow
                                  size={24}
                                ></RxOpenInNewWindow>
                              </div>
                            </a>
                          </div>
                          {data.clientSide && (
                            <div
                              className="tooltip"
                              data-tip="Client Side Code"
                            >
                              <a
                                href={data.clientSide}
                                rel="noreferrer"
                                target="_blank"
                              >
                                <div className="h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center">
                                  <FaGithub size={24}></FaGithub>
                                </div>
                              </a>
                            </div>
                          )}
                          {data.serverSide && (
                            <div
                              className="tooltip"
                              data-tip="Server Side Code"
                            >
                              <a
                                href={data.serverSide}
                                rel="noreferrer"
                                target="_blank"
                              >
                                <div className="h-14 w-14 ah-bg-third rounded-full duration-500 cursor-pointer text-black hover:bg-white flex justify-center items-center">
                                  <TfiServer size={24}></TfiServer>
                                </div>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <h2 className="text-2xl ah-color-primary mt-4">
                      {data.projectName}
                    </h2>
                  </div>
                )
            )}
          </div>
        </TabPanel>
        {/* <TabPanel>
                    <h1>Next.js projects are coming soon...</h1>
                </TabPanel> */}
      </Tabs>
    </div>
  );
};

export default Portfolio;
