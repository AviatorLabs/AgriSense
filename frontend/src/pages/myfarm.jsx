import {
  FiMap,
  FiDroplet,
  FiCloudRain,
  FiHeart,
  FiCheckCircle,
  FiSun,
  FiCalendar,
  FiPlus,
  FiEdit3,
  FiBook,
  FiShare2,
} from 'react-icons/fi';
import Sidebar from '../components/dashboardComponents/myfarmComponents/myfarmSidebar';
import Topbar from '../components/dashboardComponents/myfarmComponents/myfarmNavbar';
import { GiWheat, GiCorn, GiPlantSeed } from 'react-icons/gi';

function MyFarm() {
  return (
    <div className="min-h-screen bg-[#F7FAFC] lg:flex">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <Topbar />

        <main className="flex flex-col gap-y-6 p-6">
          <section
            className=" flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-6 rounded-2xl p-6 bg-[#1F603B] text-white"
            aria-labelledby="greeting"
          >
            <div>
              <p className="text-sm font-medium text-green-100">
                Abebe family farm. Lemu Bilbilo,Arsi
              </p>
              <h1 className="text-3xl font-bold lg:text-4xl">Good Morning, Abebe.</h1>
              <p className="text-sm leading-relaxed">
                Your teff is progressing well. A light rain window arrives this afternoon, so the
                morning is best for field work.
              </p>
            </div>

            <div className="flex flex-row flex-nowrap items-center gap-3">
              <button className="whitespace-nowrap bg-white text-[#1F603B] rounded-2xl px-4 py-3 flex items-center gap-2">
                <FiShare2 />
                Share Farm Updates
              </button>

              <button className="whitespace-nowrap bg-yellow-500 text-[#1F603B] rounded-2xl px-4 py-3 flex items-center gap-2">
                <FiPlus />
                Add new farm
              </button>
            </div>
          </section>
          <section className="flex flex-col lg:justify-between lg:flex-row gap-6 items-start lg:items-center">
            <div>
              <p className="text-xs font-bold text-[#1F603B]">My Farm</p>
              <h2 className="text-3xl font-bold lg:text-4xl">A clear view of your fields</h2>
              <p className="text-sm leading-relaxed">
                Tuesday, 16 June 2026 · Information is labelled by source so you know what was
                measured and what is predicted.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className=" w-2 h-2 rounded-full bg-green-600"></span>
              <span className="text-sm font-medium text-[#1F603B]">verified</span>
              <span className=" w-2 h-2 rounded-full bg-yellow-600"></span>
              <span className="text-sm font-medium text-[#1F603B] ">Forcast/model</span>
            </div>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <p>Farm Area</p>
                <span className="bg-[#EAF4F7] p-3 rounded-xl">
                  <FiMap className="text-[#1F603B] text-xl" />
                </span>
              </div>
              <h3>12.4 ha</h3>
              <p>3 active plots . 1 planned</p>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <p>Soil moisture</p>
                <span className="bg-[#EAF4F7] p-3 rounded-xl">
                  <FiDroplet className="text-[#1F603B]  text-xl" />
                </span>
              </div>
              <h3>28%</h3>
              <p>verified sensor . 08:15 ETA</p>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <p>Today's rainfall</p>
                <span className="bg-[#EAF4F7] p-3 rounded-xl">
                  <FiCloudRain className="text-[#1F603B] text-xl" />
                </span>
              </div>
              <h3>3.2 mm</h3>
              <p> Modelled forcast . after 3 PM</p>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <p>Farm Health</p>
                <span className="bg-[#EAF4F7] p-3 rounded-xl">
                  <FiHeart className="text-[#1F603B] text-xl" />
                </span>
              </div>
              <h3>Good</h3>
              <p>Verified field review . 14 Jun</p>
            </div>
          </div>
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-3 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col gap-3 ">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-[#1F603B]">FIELD OVERVIEW</h3>
                  <h2 className="text-lg font-bold text-[#155486]">Your plots this season</h2>
                </div>

                <button className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#155486]">
                  Manage plots
                </button>
              </div>
              <div className="border border-slate-200 rounded-xl p-3 ">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#329454] p-3 rounded-xl">
                      <GiWheat className="text-xl text-white" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2>Main field . Teff</h2>
                        <span className="text-xs text-[#1F603B] bg-green-50 rounded-full px-2 py-1">
                          Tillering
                        </span>
                        <br />
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        6.2 ha · Planted 24 May · Harvest estimate 8 Oct
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">48% complete</p>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 mt-3">
                  <div className="bg-[#329454] h-2 rounded-full w-[48%]"></div>
                </div>
              </div>
              <div className="border border-slate-200 rounded-xl p-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#329454] p-3 rounded-xl">
                      <GiCorn className="text-xl text-white" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2>East Plot . Maize</h2>
                        <span className="text-xs text-[#1F603B] bg-green-50 rounded-full px-2 py-1">
                          vegetative
                        </span>
                        <br />
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        3.8 ha · Planted 3 Jun · Harvest estimate 20 Nov
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500">22% complete</p>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 mt-3">
                  <div className="bg-[#329454] h-2 rounded-full w-[22%]"></div>
                </div>
              </div>
              <div className="border border-slate-200 rounded-xl p-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#329454] p-3 rounded-xl">
                      <GiPlantSeed className="text-xl text-white" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="font-semibold text-[#155486]">North Block . Chickpea</h2>
                        <span className="text-xs text-[#1F603B] bg-green-50 rounded-full px-2 py-1">
                          planned
                        </span>
                        <br />
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        2.4 ha · Target planting 19 Jun · Harvest estimate 4 Nov
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">not started</p>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 mt-3">
                  <div className="bg-[#329454] h-2 rounded-full w-[0%]"></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4">
              <div>
                <p className="text-xs font-bold text-[#1F603B]">NEXT BEST ACTION</p>

                <h2 className="text-lg font-bold text-[#155486] mt-2">
                  Finish teff top-dressing before midday
                </h2>

                <p className="text-sm text-slate-500 leading-relaxed mt-2">
                  Light rain is forecast after 3 PM. Applying fertilizer in the dry morning window
                  helps protect your planned work.
                </p>
              </div>

              <div className="bg-[#EFF6F2] rounded-xl p-4 flex gap-3">
                <FiCheckCircle className="text-[#329454] text-lg shrink-0" />

                <div>
                  <h4 className="text-sm font-semibold text-[#155486]">Why this is recommended</h4>

                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Based on a modelled weather outlook and your verified soil moisture reading.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex-1 bg-[#1F603B] text-white rounded-xl p-3 text-sm font-semibold">
                  Plan field work
                </button>

                <button className="border border-slate-200 text-[#155486] rounded-xl p-3 text-sm font-semibold">
                  View detail
                </button>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-[#1F603B] mb-1">
                    ENVIRONMENTAL OVERVIEW
                  </h3>
                  <h2 className="text-lg font-bold text-[#155486]">Clear and mild now</h2>
                </div>
                <button className="text-xs font-semibold text-[#155486] border border-slate-200 rounded-lg px-3 py-2 hover:bg-slate-50 transition">
                  View weather
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 rounded-xl p-3">
                  <span className="text-2xl text-amber-500">
                    <FiSun />
                  </span>
                </div>
                <div>
                  {' '}
                  <h1 className="text-3xl font-bold text-[#155486]">23°</h1>
                  <p className="text-xs text-slate-500">feels like 24° . 64% humidity</p>
                </div>
              </div>

              <div className="border-t mt-4 mb-3"></div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-medium text-slate-500">Wed</p>
                  <h4 className="text-base font-bold text-[#155486]">25°</h4>
                  <p className="text-xs text-slate-500">0 mm</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Thu</p>
                  <h4 className="text-base font-bold text-[#155486]">21°</h4>
                  <p className="text-xs text-slate-500">8 mm</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Fri</p>
                  <h4 className="text-base font-bold text-[#155486]">22°</h4>
                  <p className="text-xs text-slate-500">2 mm</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                All weather values are modelled forecasts for your saved farm location.
              </p>
            </div>

            <div className="lg:col-span-3 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-[#1F603B] mb-1">
                    FARM ACTIVITY
                  </h3>

                  <h2 className="text-lg font-bold text-[#155486]">What needs attention</h2>
                </div>
                <button className="text-xs font-semibold text-[#155486] border border-slate-200 rounded-lg px-3 py-2 hover:bg-slate-50 transition">
                  View schedule
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="bg-[#EAF4F7] rounded-xl p-3">
                  <span className="text-2xl text-amber-500">
                    <FiCalendar />
                  </span>
                  <h3 className="text-sm font-bold text-slate-800 mt-2 mb-1">
                    Plan chickpea planting
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Modelled planting window opens Friday
                  </p>
                </div>
                <div className="bg-[#EFF6F2] rounded-xl p-3">
                  <span className="text-2xl text-amber-500">
                    <FiDroplet />{' '}
                  </span>
                  <h3>No irrigation needed</h3>
                  <p>verified soil moisture is in the healthy range</p>
                </div>
                <div className="bg-[#F6C957]  rounded-xl p-3">
                  <span className="text-2xl text-amber-500">
                    {' '}
                    <FiCloudRain />
                  </span>
                  <h3>Rain after 3 PM</h3>
                  <p>Modelled outlook; protect dry-weather work.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <div>
              <h4 className="text-xs font-bold tracking-wider text-[#1F603B] mb-1">
                QUICK ACTIONS
              </h4>
              <h3 className="text-lg font-bold text-[#155486]">Make progress today</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-[#1F603B] text-white rounded-xl p-4 h-[88px] flex flex-col justify-between shadow-sm">
                <span className="text-xl">
                  <FiCalendar />
                </span>
                <p className="text-xs font-semibold">Create crop plan</p>
              </div>
              <div className="bg-[#EAF4F7] text-[#1F603B] rounded-xl p-4 h-[88px] flex flex-col justify-between">
                <span className="text-xl">
                  <FiPlus />
                </span>
                <p className="text-xs font-semibold">Add new farm</p>
              </div>
              <div className="bg-white border border-slate-200 text-[#155486] rounded-xl p-4 h-[88px] flex flex-col justify-between shadow-sm">
                <span className="text-xl">
                  <FiEdit3 />
                </span>
                <p className="text-xs font-semibold">Record planting</p>
              </div>
              <div className="bg-[#F6C957] text-[#155486] rounded-xl p-4 h-[88px] flex flex-col justify-between">
                <span className="text-xl">
                  <FiBook />
                </span>
                <p className="text-xs font-semibold">View market prices</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
export default MyFarm;
