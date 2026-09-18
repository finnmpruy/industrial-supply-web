import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Image as ImageIcon } from 'lucide-react';
import cementPlantImg from '../assets/cement-plant-bg.png'; // 1. Import gambar

const industries = [
  { id: 'cement', name: 'Cement' },
  { id: 'mining', name: 'Mining' },
  { id: 'power', name: 'Power' },
  { id: 'steel', name: 'Steel' },
  { id: 'palm', name: 'Palm Oil' },
  { id: 'chemical', name: 'Chemical' },
  { id: 'fnb', name: 'Food & Beverage' },
  { id: 'manufacturing', name: 'Manufacturing' },
];

const equipmentData = {
  cement: {
    title: 'Cement Plant',
    spots: [
      { id: 'rawmill', label: 'Raw Mill', top: '55%', left: '16%' }, //[cite: 13]
      { id: 'preheater', label: 'Preheater Tower', top: '22%', left: '26%' }, //[cite: 13]
      { id: 'kiln', label: 'Rotary Kiln', top: '52%', left: '42%' }, //[cite: 13]
      { id: 'cooler', label: 'Clinker Cooler', top: '65%', left: '55%' }, //[cite: 13]
      { id: 'mill', label: 'Cement Mill', top: '62%', left: '72%' }, //[cite: 13]
      { id: 'silo', label: 'Silo & Packing', top: '35%', left: '90%' }, //[cite: 13]
    ],
    details: {
      rawmill: {
        name: 'Raw Mill',
        subtitle: 'Find products for raw material grinding',
        products: [
          'Polyester Dust Collector Bags',
          'Galvanized Filter Cages',
          'Heavy-Duty Clamping Bands',
          'Air Slide Canvas Fabric',
          'Rotary Air Lock Valves',
        ],
      },
      preheater: {
        name: 'Preheater Tower',
        subtitle: 'High temperature gas filtration',
        products: [
          'Woven Fiberglass Filter Bags',
          'PTFE Membrane Coated Media',
          'Expansion Joints & Seals',
          'High-Temp Mounting Rings',
        ],
      },
      kiln: {
        name: 'Rotary Kiln',
        subtitle: 'Find products for kiln application',
        products: [
          'Filter Bags (High Temp Aramid/PTFE)',
          'Filter Cages (Stainless Steel 316)',
          'High Temperature Bolts & Fasteners',
          'Gaskets & Expansion Seals',
          'Maintenance Consumables',
        ],
      },
      cooler: {
        name: 'Clinker Cooler',
        subtitle: 'Find products for clinker cooling systems',
        products: [
          'Fiberglass High-Temp Filter Bags',
          'Venturi Air Injectors',
          'Cooler Grate Plate Fasteners',
          'Thermal Insulation Seals',
        ],
      },
      mill: {
        name: 'Cement Mill',
        subtitle: 'Find products for finished grinding unit',
        products: [
          'Antistatic Acrylic Needle Felt Bags',
          'Star Cages for Dust Suppression',
          'Diaphragm Pulse Valves',
          'Pneumatic Solenoid Controls',
        ],
      },
      silo: {
        name: 'Silo & Packing Plant',
        subtitle: 'Cement storage and packing filtration',
        products: [
          'Top-Removal Silo Vent Filters',
          'Pleated Cartridge Filters',
          'Spout Loading Rubber Sleeves',
          'Aeration Pads & Fluidizing Canvas',
        ],
      },
    },
  },
};

export default function IndustrySolutions() {
  const [selectedIndustry, setSelectedIndustry] = useState('cement');
  const [selectedEquipment, setSelectedEquipment] = useState('kiln');

  const currentEquipment =
    equipmentData[selectedIndustry]?.details[selectedEquipment] ||
    equipmentData.cement.details.kiln;

  return (
    <section className="py-16 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* SEKSI 1: FIND PRODUCTS BY INDUSTRY */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Find Products by Industry
            </h2>
            <a
              href="#industri"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-500 hover:text-amber-600 transition"
            >
              <span>View All Industries</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {industries.map((ind) => (
              <div
                key={ind.id}
                className="group relative h-40 rounded-xl overflow-hidden border border-blue-100/70 dark:border-slate-800 bg-[#F4F7FB] dark:bg-slate-900/60 flex flex-col justify-between p-3 cursor-pointer hover:border-amber-400 dark:hover:border-amber-500 transition shadow-sm"
              >
                <div className="flex-1 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-amber-500 transition">
                  <ImageIcon className="w-8 h-8 stroke-[1.5] mb-1.5 opacity-60" />
                  <span className="text-[9px] font-bold tracking-wider uppercase opacity-75 text-center">
                    Asset Placeholder
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/80">
                  <span className="block text-xs font-bold text-slate-800 dark:text-slate-200 text-center leading-tight">
                    {ind.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEKSI 2: START FROM YOUR EQUIPMENT */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-12">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Start From Your Equipment
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Select your industry, then explore equipment and find the right products.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start bg-slate-50 dark:bg-slate-900/50 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800">

            {/* Navigasi Kiri */}
            <div className="lg:col-span-2 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {['Cement Plant', 'Power Plant', 'Mining', 'Steel Plant', 'Palm Oil Mill', 'Chemical Plant'].map((name, idx) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setSelectedIndustry('cement')}
                  className={`text-left px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition whitespace-nowrap lg:whitespace-normal border-l-4 ${
                    idx === 0
                      ? 'border-amber-500 bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-sm'
                      : 'border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Render 3D Isometrik Tengah */}
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] flex items-center justify-center bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/60 p-4 overflow-hidden shadow-inner">
              <img
                src={cementPlantImg}
                alt="Cement Plant 3D Model"
                className="w-full h-auto max-h-[360px] object-contain select-none"
              />

              {/* Pin Interaktif */}
              {equipmentData.cement.spots.map((spot) => (
                <div
                  key={spot.id}
                  style={{ top: spot.top, left: spot.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10"
                  onClick={() => setSelectedEquipment(spot.id)}
                >
                  <span
                    className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded shadow mb-1 whitespace-nowrap border transition ${
                      spot.id === selectedEquipment
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-black scale-105'
                        : 'bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-amber-400'
                    }`}
                  >
                    {spot.label}
                  </span>
                  <div className="relative flex items-center justify-center">
                    {spot.id === selectedEquipment && (
                      <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-amber-400 opacity-75" />
                    )}
                    <div
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 flex items-center justify-center transition shadow-sm ${
                        spot.id === selectedEquipment
                          ? 'bg-amber-500 border-white ring-4 ring-amber-300/40 scale-110'
                          : 'bg-white dark:bg-slate-800 border-slate-600 group-hover:border-amber-500'
                      }`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Detail Produk Kanan */}
            <div className="lg:col-span-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm space-y-4">
              <div className="h-32 rounded-lg border border-blue-100/70 dark:border-slate-700 bg-[#F4F7FB] dark:bg-slate-900/60 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                <ImageIcon className="w-7 h-7 stroke-[1.5] mb-1 opacity-60" />
                <span className="text-[9px] font-bold tracking-wider uppercase opacity-75">
                  Asset Placeholder
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {currentEquipment.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {currentEquipment.subtitle}
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {currentEquipment.products.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#products"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 px-4 rounded-lg text-xs transition shadow-sm"
              >
                <span>View Products</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}