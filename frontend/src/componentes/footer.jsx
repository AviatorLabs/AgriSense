import { SlSocialLinkedin, SlSocialInstagram, SlSocialFacebook } from 'react-icons/sl';
import { MdOutlineMailOutline } from 'react-icons/md';

export default function Footer() {
  return (
    <footer id="contacts" className="w-full bg-secondary-foreground">
      <div className="max-w-7xl mx-auto px-3 flex flex-col gap-y-2">
        <div className="container py-32 grid grid-cols-1 gap-10 md:gap-36 md:grid-cols-[2fr_1fr_2fr]">
          <div className="flex flex-col items-center gap-y-3 md:items-start">
            <img src="" alt="logo" />
            <p className="text-sm text-background font-mono">
              Agricultural intelligence for confident, resilient farming across Ethiopia.
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-3 md:items-start">
            <p className="text-sm text-background font-sans font-semibold">Explore</p>
            <ul className="flex flex-col items-center gap-2 text-sm text-background md:items-start">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#get_started">Get Started</a>
              </li>
              <li>
                <a href="#contacts">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-y-3 md:items-start">
            <p className="text-sm text-background font-sans font-semibold">Stay connected</p>
            <address className="flex flex-col gap-y-3">
              <div className="flex items-center gap-x-3">
                <a href="">
                  <span className="w-10 h-10 flex items-center justify-center bg-primary p-2 rounded-xl">
                    <SlSocialLinkedin className="w-4 h-4 fill-background" />{' '}
                  </span>
                </a>
                <a href="">
                  <span className="w-10 h-10 flex items-center justify-center bg-primary p-2 rounded-xl">
                    <SlSocialFacebook className="w-4 h-4 fill-background" />{' '}
                  </span>
                </a>
                <a href="">
                  <span className="w-10 h-10 flex items-center justify-center bg-primary p-2 rounded-xl">
                    <SlSocialInstagram className="w-4 h-4 fill-background" />{' '}
                  </span>
                </a>
              </div>
              <a href="" className="text-background text-sm font-mono flex items-center gap-2">
                <MdOutlineMailOutline />
                hello@agrisense.et
              </a>
            </address>
          </div>
        </div>
        <div className="container flex items-center justify-between p-6 border-t-2 border-primary">
          <p className="text-xs text-background font-mono">
            © 2026 AgriSense. Built for better farm decisions.
          </p>
          <a href="" className="text-xs text-background font-mono">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
