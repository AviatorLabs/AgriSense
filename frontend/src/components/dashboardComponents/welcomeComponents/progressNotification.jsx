import { PiBellSimple } from 'react-icons/pi';

const activitys = [
  {
    title: 'Teff',
    plot: 'East Plot',
    platedDate: '22 May',
    stage: 'Tillering stage',
    estHarvest: '18 September',
    daysLeft: 58,
    complition: 0.4,
  },
  {
    title: 'Maize',
    plot: 'Home Field',
    platedDate: '10 May',
    stage: 'Leaf development',
    estHarvest: '2 October',
    daysLeft: 73,
    complition: 0.31,
  },
];

const notifications = [
  {
    type: 'env',
    title: 'Afternoon rain window',
    text: 'Sample forecast: 60% chance of light rain after 3 PM.',
  },
  {
    type: 'fud',
    title: 'Planting follow-up due',
    text: 'Record maize emergence observations for Home Field.',
  },
  {
    type: 'mkt',
    title: 'Market pulse updated',
    text: 'New indicative teff price trend is available for Oromia.',
  },
];

export default function ProgressNotification() {
  return (
    <section className="flex gap-x-4 p-10">
      <div className="flex-2 flex flex-col gap-y-2 p-4 bg-card border border-border rounded-xl shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-3">
            <p className="text-primary text-sm font-mono font-semibold">ACTIVE GROWING</p>
            <h2 className="text-foreground text-xl font-sans font-bold">Your field activity</h2>
          </div>
          <button className="text-sm text-muted-foreground font-mono font-semibold hover:cursor-pointer">
            View calendar
          </button>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {activitys.map((item) => (
            <FieldActivity key={item.title} {...item} />
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-y-2 p-4 bg-card border border-border rounded-xl shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-3">
            <p className="text-primary text-sm font-mono font-semibold">ATTENTION</p>
            <h2 className="text-foreground text-xl font-sans font-bold">Farm alerts</h2>
          </div>
          <PiBellSimple className="w-5 h-5 fill-foreground" />
        </div>
        <div className="flex flex-col gap-y-3 mt-4">
          {notifications.map((item) => (
            <Notification key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FieldActivity({ title, plot, platedDate, stage, estHarvest, daysLeft, complition }) {
  const percentage = Math.round(complition * 100);
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="flex flex-col gap-y-2">
        <p className="text-foreground text-base font-mono font-semibold">
          {title} · {plot}
        </p>
        <p className="text-muted-foreground text-xs font-mono">
          Planted {platedDate} · {stage}
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-foreground text-sm font-mono font-semibold">Est. harvest</p>
        <p className="text-muted-foreground text-xs font-mono">{estHarvest}</p>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          <span className="text-primary text-xs font-mono font-semibold">
            {complition} complete
          </span>
          <span className="text-muted-foreground text-xs font-mono">{daysLeft} days</span>
        </div>
        <div className="h-2 bg-background rounded-full">
          <div
            style={{ width: `${percentage}%` }}
            className={`h-2 rounded-full ${percentage >= 40 ? 'bg-primary-accent' : 'bg-primary'}`}
          ></div>
        </div>
      </div>
    </div>
  );
}

function Notification({ type, title, text }) {
  let bg_color = '';

  if (type == 'env') {
    bg_color = 'bg-accent';
  } else if (type == 'fud') {
    bg_color = 'bg-primary-accent';
  } else {
    bg_color = 'bg-primary';
  }

  return (
    <div className="flex gap-x-2">
      <div className={`w-3 h-3 rounded-full ${bg_color}`}></div>
      <div className="flex flex-col gap-y-1">
        <p className="text-sm text-foreground font-mono font-semibold">{title}</p>
        <p className="text-xs text-muted-foreground font-mono">{text}</p>
      </div>
    </div>
  );
}
