import { LiaArrowRightSolid } from 'react-icons/lia';
import Teff from '../../../assets/agri-teff.png';
import Maize from '../../../assets/agri-maize.png';
import Chickpea from '../../../assets/agri-chickpea.png';

const crops = [
  {
    img: Teff,
    name: 'Teff',
    fit: '92%',
    expectedYield: '1.8-2.4 t/ha',
    dis: "Well matched to the East Plot's elevation and expected June rainfall.",
  },
  {
    img: Maize,
    name: 'Maize',
    fit: '84%',
    expectedYield: '4.1-5.3 t/ha',
    dis: 'A strong option where you can maintain consistent early-season moisture.',
  },
  {
    img: Chickpea,
    name: 'Chickpea',
    fit: '79%',
    expectedYield: '1.6-2.1 t/ha',
    dis: 'A practical rotation choice after cereals, with moderate moisture needs.',
  },
];

export default function CropFit() {
  return (
    <section className="flex flex-col gap-y-4 p-10 pb-0">
      <div className="flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-y-3">
          <p className="text-primary text-sm font-mono font-semibold">CROP FIT</p>
          <h2 className="text-foreground text-xl font-sans font-bold">
            Recommended for your next plot
          </h2>
          <p className="text-muted-foreground text-sm font-mono">
            Suitability scores are sample model outputs until verified soil results are added.
          </p>
        </div>
        <button className="text-sm text-muted-foreground text-start font-mono font-semibold hover:cursor-pointer">
          Explore recommendations
        </button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {crops.map((item) => (
          <CropArticle key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}

function CropArticle({ img: Img, name, fit, expectedYield, dis }) {
  return (
    <article className="flex flex-col bg-card border border-border rounded-xl overflow-hidden shadow-md">
      <img src={Img} alt={name} className="w-full h-48 object-cover" />
      <div className="flex flex-col flex-1 gap-y-3 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-foreground text-lg font-sans font-bold">{name}</h3>
          <span className="text-primary text-xs font-mono font-bold bg-secondary px-2.5 py-1 rounded-full">
            {fit}
          </span>
        </div>
        <p className="text-muted-foreground text-sm font-mono">Expected yield: {expectedYield}</p>
        <p className="text-foreground text-sm font-mono">{dis}</p>
        <button className="mt-auto flex items-center gap-x-2 text-sm text-primary font-mono font-semibold hover:cursor-pointer">
          <span>View details</span>
          <LiaArrowRightSolid className="w-4 h-4 fill-primary" />
        </button>
      </div>
    </article>
  );
}
