
import {FiSearch,FiMapPin,FiChevronDown,FiBell} from "react-icons/fi";

function Topbar() {
    return (
        <header className="h-[62px] bg-white border-b border-slate-200 px-6 flex items-center justify-between gap-4">

            <div className="bg-[#EFF6F2] rounded-xl px-3 py-2 flex items-center gap-3 w-full max-w-[250px]">
                <FiSearch className="text-slate-500" />

                <input
                    type="search"
                    aria-label="Search fields, crops, or reports"
                    placeholder="Search fields, crops, or reports"
                    className="bg-transparent outline-none text-xs w-full text-slate-600"
                />
            </div>

            <div className="flex items-center gap-3">

                <button
                    type="button"
                    aria-label="Select farm"
                    className="border border-slate-200 rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-semibold text-[#155486]"
                >
                    <FiMapPin className="text-[#1F603B]" />
                    Abebe Family Farm
                    <FiChevronDown />
                </button>

                <button
                    type="button"
                    aria-label="Notifications"
                    className="border border-slate-200 rounded-xl p-3 text-slate-600"
                >
                    <FiBell />
                </button>

                <div
                    className="w-9 h-9 rounded-full bg-[#EAF4F7] flex items-center justify-center text-sm font-bold text-[#155486]"
                    aria-label="Abebe profile"
                >
                    A
                </div>

            </div>

        </header>
    );
}

export default Topbar;
