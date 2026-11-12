import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { GoArrowRight } from 'react-icons/go';
import { FaRegCheckCircle } from 'react-icons/fa';
import { WiDayCloudy } from 'react-icons/wi';
import { TbWaveSawTool } from 'react-icons/tb';
import heroImage from '../../assets/agrisense-hero-landscape.png';

export default function LandingPageHero() {
  return (
    <section
      id="hero"
      className="max-w-7xl w-full mx-auto flex flex-col-reverse gap-y-20 md:grid md:grid-cols-2"
    >
      <div className="flex flex-col space-y-6 px-3 md:mt-36">
        <div className="w-63 text-sm text-foreground font-mono font-bold bg-secondary px-4 py-2 flex items-center gap-x-3 rounded-full">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          Built for Ethiopia's agriculture
        </div>
        <h1 className="text-6xl text-secondary-foreground font-bold">
          Grow Smart.
          <br />
          Harvest Better
        </h1>
        <p className="text-md text-muted-foreground">
          AgriSense turns local weather, soil signals, crop cycle, and market movement into clear
          next step-so every farmer decision is more confident, productive, and profitable.
        </p>
        <div className="flex items-center space-x-3">
          <a
            href="#get-started"
            className="text-primary-foreground text-sm bg-primary font-mono font-semibold px-3 py-2 rounded-xl hover:text-on-surface"
          >
            Get Started{' '}
            <GoArrowRight className=" w-5 h-5 inline-block ml-1 stroke-primary-foreground" />
          </a>
          <a
            href="#features"
            className="text-secondary-foreground text-sm font-bold font-mono hover:text-on-surface border-2 border-border px-3 py-2 rounded-xl"
          >
            Explore Features{' '}
            <CiPlay1 className=" w-5 h-5 inline-block ml-1 stroke-secondary-foreground" />
          </a>
        </div>
        <div className="flex items-center mt-5 space-x-4">
          <div className="flex items-center space-x-2">
            <FaRegCheckCircle className=" w-4 h-4 inline-block fill-primary" />
            <span className="text-sm text-muted-foreground font-mono">Localized farm guidance</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaRegCheckCircle className=" w-4 h-4 inline-block fill-primary" />
            <span className="text-sm text-muted-foreground font-mono">
              Built for field conditions
            </span>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center mt-36">
        <img src={heroImage} alt="hero image" className="w-132 h-103 object-cover rounded-xl" />
        <div className="absolute -top-10 left-5 w-54 h-38 flex flex-col gap-y-2 p-4 bg-card border-2 border-border shadow-md rounded-xl md:top-10 md:-left-10">
          <div className="container flex items-center justify-between">
            <span className="bg-secondary p-2 rounded-xl">
              <WiDayCloudy className="w-4 h-4 fill-primary-accent" />{' '}
            </span>
            <p className="text-xs text-primary-accent font-mono font-semibold">
              Live (Sample Data)
            </p>
          </div>
          <p className="text-xs text-muted-foreground font-mono font-medium">Arsi Oromo</p>
          <p className="text-2xl text-foreground font-sans font-bold">23&deg;</p>
          <p className="text-xs text-muted-foreground font-mono">Light rain expexted Thu</p>
        </div>
        <div className="absolute top-80 right-5 w-64 h-31 flex flex-col gap-y-1 p-4 bg-card border-2 border-border shadow-md rounded-xl md:-right-1">
          <p className="text-xs text-muted-foreground font-mono">Soil fertility</p>
          <div className="container flex items-end justify-between">
            <p className="text-lg text-foreground font-sans font-bold">Strong potential</p>
            <span className="bg-secondary p-2 rounded-xl">
              <TbWaveSawTool className="w-5 h-5 stroke-primary-accent" />{' '}
            </span>
          </div>
          <div className="container h-2 rounded-full bg-muted">
            <div className="w-[90%] h-2 rounded-full bg-primary-accent"></div>
          </div>
          <p className="text-xs text-muted-foreground font-mono">Sample field reading 82/100</p>
        </div>
      </div>
    </section>
  );
}
