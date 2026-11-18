import Logo from '../assets/AgriSensePrimaryLogo.png';
import { RiDashboardHorizontalLine } from 'react-icons/ri';
import {
  PiPlant,
  PiStackBold,
  PiCalendarBlankBold,
  PiCreditCard,
  PiBellSimple,
  PiSidebar,
} from 'react-icons/pi';
import { TbWaveSawTool } from 'react-icons/tb';
import { LuChartBar } from 'react-icons/lu';
import { FiSearch } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoMenu, IoClose } from 'react-icons/io5';
import WelcomeSection from '../components/dashboardComponents/welcomeSection';
import { useState } from 'react';

const NAV_ITEMS = [
  { title: 'Dashboard', path: '/dashboard', icon: RiDashboardHorizontalLine },
  { title: 'My Farm', path: '/dashboard/MyFarm', icon: PiStackBold },
  { title: 'Crop Recommendations', path: '/dashboard/CropRecommendations', icon: PiPlant },
  { title: 'Crop Planning', path: '/dashboard/CropPlanning', icon: PiCalendarBlankBold },
  { title: 'Crop Monitoring', path: '/dashboard/CropMonitoring', icon: TbWaveSawTool },
  { title: 'Market Intelligence', path: '/dashboard/MarketIntelligence', icon: LuChartBar },
  { title: 'Expenses & Profit', path: '/dashboard/ExpensesProfit', icon: PiCreditCard },
];

export default function Dashboard() {
  const [toggelSideBar, setToggelSideBar] = useState(false);
  const [toggelMenu, setToggelMenu] = useState(false);

  return (
    <div className="relative flex min-h-screen bg-gray-50">
      {toggelSideBar && (
        <div
          onClick={() => setToggelSideBar(false)}
          className="fixed inset-0 bg-black/50 z-45 lg:hidden transition-opacity"
        />
      )}

      {toggelMenu && (
        <div
          onClick={() => setToggelMenu(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
        />
      )}

      <aside
        className={`
          w-64 shrink-0 bg-card border-r-2 border-border p-4 h-screen flex flex-col z-50
          fixed inset-y-0 left-0 transition-transform duration-300 ease-in-out
          lg:sticky lg:top-0 lg:translate-x-0
          ${toggelSideBar ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="mb-5 shrink-0">
          <img src={Logo} alt="AgriSense primary logo" className="w-40 h-15 object-cover" />
        </div>
        <div className="flex-1 flex flex-col justify-between overflow-y-auto no-scrollbar">
          <nav className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.path} {...item} />
            ))}
          </nav>
          <div className="flex flex-col gap-y-2 mt-4">
            <NavItem title={'Settings'} path={'/settings'} icon={AiOutlineSetting} />
            <div className="flex flex-col gap-y-2 p-3 bg-muted rounded-xl">
              <p className="text-xs text-foreground font-mono font-semibold">
                Need help in the field?
              </p>
              <p className="text-xs text-muted-foreground font-mono">
                Practical guidance for every growing decision.
              </p>
              <button className="text-xs text-foreground font-mono font-semibold px-4 py-3 bg-card border border-border rounded-xl shadow-md">
                Open help center
              </button>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 bg-background overflow-y-auto no-scrollbar">
        <header className="flex items-center justify-between px-6 py-3 bg-card border-b-2 border-border">
          <button
            onClick={() => setToggelSideBar(!toggelSideBar)}
            className="p-1 rounded-lg hover:bg-muted lg:hidden transition-colors"
            aria-label="Toggle Sidebar"
          >
            <PiSidebar className="w-6 h-6 fill-primary" />
          </button>
          <div className="flex items-center max-w-80 px-4 py-3 rounded-xl bg-muted focus-within:border focus-within:border-primary-accent focus-within:bg-primary-accent/10 focus-within:ring-1 focus-within:ring-primary-accent transition-colors">
            <FiSearch className="w-5 h-5 stroke-muted-foreground/70 mr-3 shrink-0" />
            <input
              id="search"
              type="text"
              name="search"
              placeholder="Search farms, crops, or reports"
              className="w-full bg-transparent text-muted-foreground placeholder-muted-foreground/70 placeholder:font-mono text-sm focus:outline-none"
            />
          </div>
          <button
            onClick={() => setToggelMenu(!toggelMenu)}
            className="p-1 rounded-lg hover:bg-muted md:hidden transition-colors"
            aria-label="Toggle Menu"
          >
            <IoMenu className="w-6 h-6 stroke-primary" />
          </button>
          <div
            className={`
          w-64 flex flex-col gap-y-3 p-4 bg-card border-l border-border z-50
          fixed inset-y-0 right-0 transition-transform duration-300 ease-in-out md:hidden
          ${toggelMenu ? 'translate-x-0' : 'translate-x-full'}
        `}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-semibold text-muted-foreground">MENU</span>
              <button
                onClick={() => setToggelMenu(false)}
                className="p-1 rounded-lg hover:bg-muted"
                aria-label="Close Menu"
              >
                <IoClose className="w-5 h-5 stroke-foreground" />
              </button>
            </div>

            <button className="flex items-center gap-x-3 px-4 py-3 bg-card border border-border rounded-xl">
              <IoLocationOutline className="w-5 h-5 stroke-foreground shrink-0" />
              <span className="text-xs text-foreground font-mono font-semibold">
                Abebe Family Farm
              </span>
              <RiArrowDropDownLine className="w-5 h-5 stroke-foreground shrink-0" />
            </button>

            <button className="relative flex items-center gap-x-3 text-start px-4 py-3 bg-card border border-border rounded-xl">
              <PiBellSimple className="w-5 h-5 fill-foreground shrink-0" />
              <div className="w-2 h-2 absolute top-3 right-3 rounded-full bg-accent"></div>
              <span className="text-foreground text-xs font-mono font-semibold">Notifications</span>
            </button>

            <div className="flex items-center gap-x-3 pt-2 border-t border-border">
              <img
                src="https://placehold.co/400x500/orange/white"
                alt="profile image"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-sm font-sans font-medium text-foreground">Account</span>
            </div>
          </div>
          <div className="hidden items-center gap-x-2 md:flex">
            <button className="flex items-center gap-x-3 px-4 py-3 bg-card border border-border rounded-xl">
              <IoLocationOutline className="w-5 h-5 stroke-foreground shrink-0" />
              <span className="text-sm text-foreground font-mono font-semibold">
                Abebe Family Farm
              </span>
              <RiArrowDropDownLine className="w-5 h-5 stroke-foreground shrink-0" />
            </button>
            <button className="relative w-11 h-11 flex items-center justify-center px-4 py-3 bg-card border border-border rounded-xl">
              <PiBellSimple className="w-5 h-5 fill-foreground shrink-0" />
              <div className="w-2 h-2 absolute top-3 right-3 rounded-full bg-accent"></div>
            </button>
            <img
              src="https://placehold.co/400x500/orange/white"
              alt="profile image"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </header>
        <WelcomeSection />
      </main>
    </div>
  );
}

function NavItem({ title, path, icon: Icon }) {
  return (
    <a
      href={path}
      className="flex items-center gap-x-3 px-3 py-4 text-sm text-muted-foreground font-mono font-medium"
    >
      {Icon && <Icon className="w-6 h-6 stroke-px" />} {title}
    </a>
  );
}
