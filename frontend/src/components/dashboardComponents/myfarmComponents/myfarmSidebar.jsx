
import {FiGrid,FiLayers,FiCalendar,FiActivity,FiBarChart2,FiCreditCard,FiSettings,FiCheckCircle} from "react-icons/fi";
import AgriSenseLogo from "../../../assets/AgriSensePrimaryLogo.png";
import { GiWheat } from "react-icons/gi";

function Sidebar() {
    return (
        <aside className="w-full lg:w-[200px] lg:min-h-screen bg-white border-r border-slate-200 flex flex-col p-4">

           
            <div className="flex items-center gap-3 mb-8">
              
    <img src={AgriSenseLogo} alt="AgriSense"className="w-full max-w-[150px] h-auto object-contain"/>
            </div>

           
            <nav className="flex flex-col gap-2">

                <button className="flex items-center gap-3 p-3 rounded-xl text-sm text-slate-600">
                    <FiGrid />
                    Dashboard
                </button>

                <button className="flex items-center gap-3 p-3 rounded-xl bg-[#EAF4F7] text-[#1F603B] font-semibold text-sm">
                    <FiLayers />
                    My Farms
                </button>

                <button className="flex items-center gap-3 p-3 rounded-xl text-sm text-slate-600">
                    <GiWheat />
                    Crop Recommendations
                </button>

                <button className="flex items-center gap-3 p-3 rounded-xl text-sm text-slate-600">
                    <FiCalendar />
                    Crop Planning
                </button>

                <button className="flex items-center gap-3 p-3 rounded-xl text-sm text-slate-600">
                    <FiActivity />
                    Crop Monitoring
                </button>

                <button className="flex items-center gap-3 p-3 rounded-xl text-sm text-slate-600">
                    <FiBarChart2 />
                    Market Intelligence
                </button>

                <button className="flex items-center gap-3 p-3 rounded-xl text-sm text-slate-600">
                    <FiCreditCard />
                    Expenses & Profit
                </button>

            </nav>

           
            <div className="mt-auto pt-8">

                <button className="flex items-center gap-3 p-3 text-sm text-slate-600">
                    <FiSettings />
                    Settings
                </button>

                <div className="bg-[#EFF6F2] rounded-xl p-3 mt-4">
                    <div className="flex items-center gap-2 mb-2">
                        <FiCheckCircle className="text-green-600" />
                        <p className="text-xs font-semibold text-[#155486]">
                            Farm profile active
                        </p>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed">
                        Field readings and planned work are kept in one place.
                    </p>
                </div>

            </div>

        </aside>
    );
}

export default Sidebar;
