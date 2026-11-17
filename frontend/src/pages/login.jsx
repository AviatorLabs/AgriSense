import { LuSun } from 'react-icons/lu';
import SecondaryLogo from '../assets/AgriSenseSecondaryLogo.png';
import { TbWaveSawTool } from 'react-icons/tb';
import { MdOutlineEmail, MdOutlineShield } from 'react-icons/md';
import { BiLockAlt } from 'react-icons/bi';
import { LuEye } from 'react-icons/lu';
import { FaArrowRight } from 'react-icons/fa6';
import Error from '../components/error';

function Login() {
  // const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid grid-cols-1 bg-primary-foreground h-screen lg:grid-cols-[1fr_2fr]">
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
        <div className="w-2/3 py-1 px-3 border border-border/30 bg-card/15 rounded-full">
          <p className="text-sm text-primary-foreground font-mono font-medium flex items-center gap-x-2">
            <TbWaveSawTool className="w-6 h-6 stroke-accent" /> Agricultural intelligence for every
            season
          </p>
        </div>
        <h1 className="text-5xl text-primary-foreground font-sans font-bold">
          Your Farm. Your <br /> Future. Smarter
          <br /> Decisions.
        </h1>
        <p className="text-sm text-primary-foreground font-mono">
          Bring environmental data, soil intelligence, crop
          <br /> guidance, and market signals into every decision
          <br /> you make.
        </p>
        {/* bottom illstration */}
        <div className="w-50 absolute bottom-25 left-6 flex flex-row-reverse items-start gap-x-3 pr-4 border-b-2 border-accent">
          <div className="w-4 h-20 bg-accent rounded-full"></div>
          <div className="w-4 h-15 bg-accent rounded-full"></div>
          <div className="w-4 h-10 bg-primary-accent rounded-full"></div>
          <div className="w-4 h-7 bg-primary-accent rounded-full"></div>
          <div className="w-4 h-4 bg-primary-accent rounded-full"></div>
        </div>

        <div className="absolute bottom-10 left-10 flex items-center gap-3">
          <span className="flex items-center justify-center p-2 border border-border/30 bg-card/15 rounded-xl">
            <LuSun className="w-4 h-4 stroke-accent" />{' '}
          </span>
          <span className="text-sm text-primary-foreground font-mono">
            Practical intelligence for every field and season.
          </span>
        </div>
      </section>

      <div className="flex flex-col p-4 md:p-0">
        <main className="flex-1">
          <section className="w-full max-w-lg mx-auto flex flex-col gap-y-3 py-10 px-4 mt-15 sm:px-0">
            <p className="text-primary-accent text-sm font-mono font-semibold">WELCOME BACK</p>
            <h2 className="text-3xl text-foreground font-sans font-bold">
              Sign in to your farm intelligence
            </h2>
            <p className="text-sm text-muted-foreground font-mono">
              Use your AgriSense account to access your field data, crop recommendations, and market
              outlook.
            </p>
            <div className="flex flex-col gap-y-4 p-6 bg-card border-2 border-border rounded-xl shadow-md">
              <form className="flex flex-col gap-4" action="">
                <div className="flex flex-col gap-y-3">
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
                      placeholder="e.g. aster@example.com"
                      className="w-full bg-transparent text-muted-foreground placeholder-muted-foreground/70 placeholder:font-mono text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-3">
                  <div className="flex items-center justify-between">
                    <label
                      className="text-foreground text-sm font-mono font-semibold"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <a href="#" className="text-sm text-primary font-mono font-semibold">
                      Forgot password?
                    </a>
                  </div>
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
                <div className="flex items-center justify-between">
                  <label htmlFor="terms" className="flex items-center gap-x-3">
                    <input
                      id="remeber"
                      type="checkbox"
                      name="remeber"
                      className="accent-primary w-4 h-4"
                    />
                    <span className="text-xs text-muted-foreground font-mono">Remember me</span>
                  </label>
                  <span className="text-xs text-muted-foreground font-mono">Secure sign-in</span>
                </div>
                <button className="col-span-2 px-4 py-3 flex items-center justify-center gap-x-2 bg-primary rounded-xl">
                  <span className="text-primary-foreground text-sm font-bold font-mono">
                    Log in
                  </span>
                  <FaArrowRight className="w-5 h-5 fill-primary-foreground shrink-0" />
                </button>
              </form>
              <div className="grid grid-cols-3 gap-3 items-center">
                <div className="h-px bg-border rounded-full"></div>
                <span className="text-xs text-center text-muted-foreground font-mono">
                  New to AgriSense?
                </span>
                <div className="h-px bg-border rounded-full"></div>
              </div>
              <a
                href="/farm-setup"
                className="text-primary text-sm text-center font-bold font-mono px-4 py-3 bg-card border border-border rounded-xl"
              >
                Preview farm setup
              </a>
            </div>
            <p className="flex gap-2 p-3 bg-muted rounded-xl">
              <MdOutlineShield className="w-5 h-5 fill-primary-accent shrink-0" />
              <span className="text-sm text-muted-foreground font-mono">
                Your field data is protected with secure, encrypted access. By continuing, you agree
                to our{' '}
                <a href="#" className="text-primary font-semibold">
                  Terms
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary font-semibold">
                  Privacy Policy{' '}
                </a>
                .
              </span>
            </p>
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

export default Login;
