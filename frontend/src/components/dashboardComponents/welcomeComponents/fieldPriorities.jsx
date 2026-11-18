import React from 'react';
import { FaRegChartBar } from "react-icons/fa6";
import { PiPlus, PiPlant, PiCalendarBlankLight } from 'react-icons/pi';

const progress_type = [
  { icon: PiCalendarBlankLight, title: 'Create Crop Plan', dis: 'Set a season strategy' },
  { icon: PiPlus, title: 'Add New Farm', dis: 'Bring another plot online' },
  { icon: PiPlant, title: 'Record Planting', dis: 'Capture a field activity' },
  { icon: FaRegChartBar, title: 'View Market Prices', dis: 'Check local crop signals' },
];

export default function FieldPriorities() {
  return (
    <section className="flex flex-col gap-y-4 p-10 pb-0">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-3">
          <p className="text-primary text-sm font-mono font-semibold">FIELD PRIORITIES</p>
          <h2 className="text-foreground text-xl font-sans font-bold">Make progress today</h2>
        </div>
        <button className="text-sm text-muted-foreground font-mono font-semibold hover:cursor-pointer">
          View all actions
        </button>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {progress_type.map((item) => (
          <ProgressBtn key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

function ProgressBtn({ icon: Icon, title, dis }) {
  return (
    <button className="flex flex-col gap-y-3 items-start text-left p-3 bg-card border border-border rounded-xl shadow-md hover:cursor-pointer">
      {Icon && <Icon className="w-6 h-6 stroke-px fill-primary mb-6" />}
      <p className="text-foreground text-base font-sans font-semibold">{title}</p>
      <p className="text-muted-foreground text-xs font-mono">{dis}</p>
    </button>
  );
}
