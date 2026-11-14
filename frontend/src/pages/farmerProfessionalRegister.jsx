import { LuSun } from 'react-icons/lu';
import SecondaryLogo from '../assets/AgriSenseSecondaryLogo.png';
import { TbWaveSawTool } from 'react-icons/tb';
import { IoPersonOutline } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { BiLockAlt, BiLock } from 'react-icons/bi';
import { LuEye } from 'react-icons/lu';
import { FaRegCircleCheck, FaArrowRight } from 'react-icons/fa6';
import Error from '../components/error';

export default function FarmerProfessionalRegister() {
  return (
    <div className="grid grid-cols-1 bg-primary-foreground h-285 lg:grid-cols-[1fr_2fr]">
      <section className="bg-login-overlay hidden flex-col justify-center gap-y-3 p-14 relative lg:flex">
        {/* top illstration */}
        <div className="w-30 h-30 absolute top-2 left-5 border-accent/30 border-2 rounded-full">
          <div className="w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent/30 rounded-full"></div>
        </div>

        <img
          src={SecondaryLogo}
          alt="AgroSense secondary logo"
          className="absolute top-7 left-5 w-50 h-15 object-cover"
        />
        <div className="w-1/2 py-1 px-3 border border-border/30 bg-card/15 rounded-full">
          <p className="text-sm text-primary-foreground font-mono font-medium flex items-center gap-x-2">
            <LuSun className="w-4 h-4 stroke-accent" /> A smarter season starts here
          </p>
        </div>
        <h1 className="text-5xl text-primary-foreground font-sans font-bold">
          Start Making
          <br /> Smarter Farming
          <br /> Decisions.
        </h1>
        <p className="text-sm text-primary-foreground font-mono">
          Create one secure place for your field
          <br /> observations, soil conditions, crop guidance, and
          <br /> market intelligence.
        </p>
        {/* bottom illstration */}
        <div className="w-50 absolute bottom-25 left-6 flex flex-row-reverse items-end gap-x-3 pr-4 border-b-2 border-accent">
          <div className="w-4 h-20 bg-accent rounded-full"></div>
          <div className="w-4 h-15 bg-accent rounded-full"></div>
          <div className="w-4 h-10 bg-primary-accent rounded-full"></div>
          <div className="w-4 h-7 bg-primary-accent rounded-full"></div>
          <div className="w-4 h-4 bg-primary-accent rounded-full"></div>
        </div>

        <div className="absolute bottom-10 left-10 flex items-center gap-3">
          <span className="flex items-center justify-center p-2 border border-border/30 bg-card/15 rounded-xl">
            <TbWaveSawTool className="w-6 h-6 stroke-accent" />{' '}
          </span>
          <span className="text-sm text-primary-foreground font-mono">
            Practical intelligence for every field and season.
          </span>
        </div>
      </section>

      <div className="flex flex-col p-4 md:p-0">
        <main className="flex-1">
          <section className="w-full max-w-xl mx-auto flex flex-col gap-y-3 py-10 px-4 sm:px-0">
            <p className="text-primary-accent text-sm font-mono font-semibold">
              CREATE YOUR ACCOUNT
            </p>
            <h2 className="text-3xl text-foreground font-sans font-bold">
              Set up your farm intelligence workspace
            </h2>
            <p className="text-sm text-muted-foreground font-mono">
              A few details now will help AgriSense deliver clear, relevant guidance from your first
              field visit.
            </p>
            <div className="flex flex-col gap-y-3 p-6 bg-card border-2 border-border rounded-xl shadow-md">
              <form className="flex flex-col gap-3 md:grid md:grid-cols-2" action="">
                <div className="flex flex-col gap-y-3">
                  <label
                    className="text-foreground text-sm font-mono font-semibold"
                    htmlFor="fullName"
                  >
                    Full name
                  </label>
                  <div className="flex items-center w-full px-4 py-3 border border-border rounded-xl bg-background focus-within:border-primary-accent focus-within:bg-primary-accent/10 focus-within:ring-1 focus-within:ring-primary-accent transition-colors">
                    <IoPersonOutline className="w-5 h-5 stroke-muted-foreground/70 mr-3 shrink-0" />
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      placeholder="e.g. Aster Bekele"
                      className="w-full bg-transparent text-muted-foreground placeholder-muted-foreground/70 placeholder:font-mono text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-3">
                  <label
                    className="text-foreground text-sm font-mono font-semibold"
                    htmlFor="phoneNumber"
                  >
                    Phone number
                  </label>
                  <div className="flex items-center w-full px-4 py-3 border border-border rounded-xl bg-background focus-within:border-primary-accent focus-within:bg-primary-accent/10 focus-within:ring-1 focus-within:ring-primary-accent transition-colors">
                    <FiPhone className="w-5 h-5 stroke-muted-foreground/70 mr-3 shrink-0" />
                    <input
                      id="phoneNumber"
                      type="tell"
                      name="phoneNumber"
                      placeholder="e.g. Aster Bekele"
                      className="w-full bg-transparent text-muted-foreground placeholder-muted-foreground/70 placeholder:font-mono text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div className="col-span-2 flex flex-col gap-y-3">
                  <div className="flex items-center justify-between">
                    <label
                      className="text-foreground text-sm font-mono font-semibold"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <span className="text-xs text-muted-foreground font-mono">Required</span>
                  </div>
                  <div className="flex items-center w-full px-4 py-3 border border-border rounded-xl bg-background focus-within:border-primary-accent focus-within:bg-primary-accent/10 focus-within:ring-1 focus-within:ring-primary-accent transition-colors">
                    <MdOutlineEmail className="w-5 h-5 fill-muted-foreground/70 mr-3 shrink-0" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="e.g. Aster Bekele"
                      className="w-full bg-transparent text-muted-foreground placeholder-muted-foreground/70 placeholder:font-mono text-sm focus:outline-none"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">
                    We will use this only for account access and important farm updates.
                  </p>
                </div>

                <p className="text-foreground text-sm font-mono font-semibold col-span-2">
                  I am registering as
                </p>

                <label className="flex items-center gap-x-2 w-full px-4 py-3 border border-border rounded-xl bg-background has-checked:border-primary-accent has-checked:bg-primary-accent/10 has-checked:ring-1 has-checked:ring-primary-accent transition-colors">
                  <input
                    id="farmer"
                    type="radio"
                    name="userType"
                    className="accent-primary w-4 h-4"
                  />
                  <span className="flex flex-col gap-y-1/2">
                    <span
                      className="text-foreground text-sm font-mono font-semibold"
                      htmlFor="farmer"
                    >
                      Farmer
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      Manage your own fields and crops
                    </span>
                  </span>
                </label>

                <label className="flex items-center gap-x-2 w-full px-4 py-3 border border-border rounded-xl bg-background has-checked:border-primary-accent has-checked:bg-primary-accent/10 has-checked:ring-1 has-checked:ring-primary-accent transition-colors">
                  <input
                    id="professional"
                    type="radio"
                    name="userType"
                    className="accent-primary w-4 h-4"
                  />
                  <span className="flex flex-col gap-y-1/2">
                    <span
                      className="text-foreground text-sm font-mono font-semibold"
                      htmlFor="professional"
                    >
                      Agricultural Professional
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      Support farms with expert advice
                    </span>
                  </span>
                </label>

                <div className="flex flex-col gap-y-3">
                  <label
                    className="text-foreground text-sm font-mono font-semibold"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="flex items-center w-full pl-4 py-3 border border-border rounded-xl bg-background focus-within:border-primary-accent focus-within:bg-primary-accent/10 focus-within:ring-1 focus-within:ring-primary-accent transition-colors">
                    <BiLockAlt className="w-5 h-5 fill-muted-foreground/70 mr-3 shrink-0" />
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Create a password"
                      className="w-full bg-transparent text-muted-foreground placeholder-muted-foreground/70 placeholder:font-mono text-sm focus:outline-none"
                    />
                    <LuEye className="justify-self-end w-5 h-5 stroke-muted-foreground/70 mr-3 shrink-0" />
                  </div>
                </div>

                <div className="flex flex-col gap-y-3">
                  <label
                    className="text-foreground text-sm font-mono font-semibold"
                    htmlFor="confirmPassword"
                  >
                    Confirm password
                  </label>
                  <div className="flex items-center w-full pl-4 py-3 border border-border rounded-xl bg-background focus-within:border-primary-accent focus-within:bg-primary-accent/10 focus-within:ring-1 focus-within:ring-primary-accent transition-colors">
                    <BiLock className="w-5 h-5 fill-muted-foreground/70 mr-3 shrink-0" />
                    <input
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      placeholder="Repeat your password"
                      className="w-full bg-transparent text-muted-foreground placeholder-muted-foreground/70 placeholder:font-mono text-sm focus:outline-none"
                    />
                    <LuEye className="justify-self-end w-5 h-5 stroke-muted-foreground/70 mr-3 shrink-0" />
                  </div>
                </div>

                <div className="col-span-2 flex flex-col gap-y-3 p-3 bg-muted rounded-xl">
                  <div className="flex items-center justify-between">
                    <p className="text-foreground text-sm font-mono font-semibold">
                      Password strength
                    </p>
                    <span className="flex items-center gap-x-1 text-primary-accent text-sm font-mono font-semibold">
                      <FaRegCircleCheck className="w-3 h-3 stroke-primary-accent shrink-0" />
                      Strong example
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-x-2">
                    <div className="h-2 bg-primary-accent rounded-full"></div>
                    <div className="h-2 bg-primary-accent rounded-full"></div>
                    <div className="h-2 bg-primary-accent rounded-full"></div>
                    <div className="h-2 bg-primary-accent rounded-full"></div>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">
                    Use 8+ characters with a number and symbol. Your password should be different
                    from other services.
                  </p>
                </div>
                <div className="flex gap-x-3 col-span-2">
                  <input
                    id="terms"
                    type="checkbox"
                    name="terms"
                    className="accent-primary w-6 h-6"
                  />
                  <label htmlFor="terms" className="text-xs text-muted-foreground font-mono">
                    I agree to the{' '}
                    <a href="#" className="font-bold">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="font-bold">
                      Privacy Policy
                    </a>
                    , including how AgriSense uses farm data to provide recommendations.
                  </label>
                </div>
                <button className="col-span-2 px-4 py-3 flex items-center justify-center gap-x-2 bg-primary rounded-xl">
                  <span className="text-primary-foreground text-sm font-bold font-mono">
                    Create Account
                  </span>
                  <FaArrowRight className="w-5 h-5 fill-primary-foreground shrink-0" />
                </button>
              </form>
              <div className="grid grid-cols-3 gap-3 items-center">
                <div className="h-1 bg-border rounded-full"></div>
                <span className="text-xs text-center text-muted-foreground font-mono">
                  Already using AgriSense?
                </span>
                <div className="h-1 bg-border rounded-full"></div>
              </div>
              <a
                href="#"
                className="text-primary text-sm text-center font-bold font-mono px-4 py-3 bg-card border border-border rounded-xl"
              >
                Log in to your account
              </a>
            </div>
            <Error
              message={
                'Validation example: Passwords must match before you can create an account. Clear guidance will appear next to the field if something needs attention.'
              }
            />
          </section>
        </main>
        <footer className="text-muted-foreground text-xs text-center px-4 py-3 font-mono lg:text-end">
          © 2026 AgriSense · Better decisions from field to market.
        </footer>
      </div>
    </div>
  );
}
