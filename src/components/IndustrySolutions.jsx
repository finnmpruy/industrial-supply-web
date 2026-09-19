import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Image as ImageIcon } from 'lucide-react';
import cementPlantImg from '../assets/cement-plant-bg.png';
import powerPlantImg from '../assets/power-plant-bg.png';

const industries = [
  { id: 'cement', name: 'Cement', fullName: 'Cement Plant' },
  { id: 'power', name: 'Power', fullName: 'Power Plant' },
  { id: 'mining', name: 'Mining', fullName: 'Mining' },
  { id: 'steel', name: 'Steel', fullName: 'Steel Plant' },
  { id: 'palm', name: 'Palm Oil', fullName: 'Palm Oil Mill' },
  { id: 'chemical', name: 'Chemical', fullName: 'Chemical Plant' },
  { id: 'fnb', name: 'Food & Beverage', fullName: 'Food & Beverage' },
  { id: 'manufacturing', name: 'Manufacturing', fullName: 'Manufacturing' },
];

const equipmentData = {
  cement: {
    title: 'Cement Plant',
    image: cementPlantImg,
    spots: [
      { id: 'rawmill', label: 'Raw Mill', top: '55%', left: '16%' },
      { id: 'preheater', label: 'Preheater Tower', top: '24%', left: '27%' },
      { id: 'kiln', label: 'Rotary Kiln', top: '52%', left: '43%' },
      { id: 'cooler', label: 'Clinker Cooler', top: '65%', left: '57%' },
      { id: 'mill', label: 'Cement Mill', top: '62%', left: '73%' },
      { id: 'silo', label: 'Silo & Packing', top: '35%', left: '89%' },
    ],
    details: {
      rawmill: {
        name: 'Raw Mill',
        subtitle: 'Find products for raw material grinding',
        temp: '80°C – 150°C',
        condition: 'High Vibration & Abrasive Dust',
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
        temp: '350°C – 850°C',
        condition: 'Hot Corrosive Gas & Thermal Expansion',
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
        temp: '350°C – 1.450°C',
        condition: 'Extreme Thermal & Heavy Wear',
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
        temp: '200°C – 450°C',
        condition: 'Thermal Shock & Clinker Impact',
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
        temp: '90°C – 120°C',
        condition: 'Ultra-Fine Dust & Continuous High Torque',
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
        temp: 'Ambient – 90°C',
        condition: 'Dry Powder Aeration & Silo Venting',
        products: [
          'Top-Removal Silo Vent Filters',
          'Pleated Cartridge Filters',
          'Spout Loading Rubber Sleeves',
          'Aeration Pads & Fluidizing Canvas',
        ],
      },
    },
  },

  power: {
    title: 'Power Plant',
    image: powerPlantImg,
    spots: [
      { id: 'pulverizer', label: 'Coal Crusher & Mill', top: '65%', left: '21%' },
      { id: 'boiler', label: 'Supercritical Boiler', top: '22%', left: '34%' },
      { id: 'baghouse', label: 'Baghouse / ESP Filter', top: '30%', left: '56%' },
      { id: 'turbine', label: 'Steam Turbine Generator', top: '70%', left: '62%' },
      { id: 'cooling', label: 'Cooling Tower', top: '22%', left: '77%' },
      { id: 'ashsilo', label: 'Ash Handling Silo', top: '56%', left: '91%' },
    ],
    details: {
      pulverizer: {
        name: 'Coal Crusher & Pulverizer Mill',
        subtitle: 'Raw fuel handling & explosion-proof dust suppression',
        temp: 'Ambient – 120°C',
        condition: 'Combustible Dust & Anti-Static Required',
        products: [
          'Antistatic Polyester & PPS Needle Felt Bags',
          'Stainless Steel 304/316 Filter Cages',
          'Heavy-Duty Clamping Bands & Gaskets',
          'Abrasion Resistant Conveyor Skirt Rubber',
          'Pneumatic Solenoid Pulse Valves',
        ],
      },
      boiler: {
        name: 'Supercritical Boiler Unit',
        subtitle: 'Extreme thermal pressure & steam piping system',
        temp: '450°C – 600°C',
        condition: 'Superheated Steam & High Pressure Piping',
        products: [
          'ASTM A193 B16 / B7 Stud Bolts & 2H Nuts',
          'Spiral Wound Gaskets (SWG SS316L + Pure Graphite)',
          'High Temp Ceramic Fiber Insulation Blankets',
          'Metallic Bellows Expansion Joints',
          'High Pressure Valve Gland Packing',
        ],
      },
      baghouse: {
        name: 'Flue Gas Baghouse / ESP Filter',
        subtitle: 'Fly ash filtration & hot acidic gas scrubbing',
        temp: '160°C – 260°C',
        condition: 'Acid Gas Corrosion & Submicron Fly Ash',
        products: [
          'Woven Fiberglass with PTFE Membrane Bags',
          'PPS / P84 High-Temp Acid Proof Felt Bags',
          'Corrosion Resistant Star Filter Cages',
          'High Flow Pulse Jet Diaphragm Valves',
          'Venturi Air Injectors & Mounting Rings',
        ],
      },
      turbine: {
        name: 'Steam Turbine & Generator Hall',
        subtitle: 'High precision rotational equipment & turbine casing',
        temp: '180°C – 540°C',
        condition: 'High RPM Rotation & Precision Alignment',
        products: [
          'Hydraulic Torque Wrenches (Low Profile & Square Drive)',
          'High Tensile Precision Casing Bolts',
          'Synthetic Lube Oil Micron Filter Cartridges',
          'High Velocity Serrated Metallic Gaskets',
          'Vibration Damping Mechanical Fasteners',
        ],
      },
      cooling: {
        name: 'Cooling Tower & Water Circulation',
        subtitle: 'Circulating water cooling & condensation system',
        temp: '30°C – 60°C',
        condition: 'Moist Environment & High-Volume Circulation',
        products: [
          'EPDM / NBR Heavy Flange Gaskets',
          'Hot-Dip Galvanized & SS316 Piping Bolts',
          'Drift Eliminator Fastening Components',
          'Corrosion Proof Butterfly Valve Seals',
          'Water Cooling Pump Mechanical Seals',
        ],
      },
      ashsilo: {
        name: 'Fly Ash Handling & Storage Silo',
        subtitle: 'Pneumatic ash conveying & truck loading venting',
        temp: '80°C – 160°C',
        condition: 'Abrasive Ash Transfer & Negative Pressure',
        products: [
          'Top-Removal Silo Vent Dust Cartridge Filters',
          'Fluidizing Airslide Canvas Fabrics',
          'Telescopic Dry Ash Loading Spout Sleeves',
          'Rotary Air Lock Feeder Dust Seals',
          'Pneumatic Aeration Discharge Pads',
        ],
      },
    },
  },
};

export default function IndustrySolutions() {
  const [selectedIndustry, setSelectedIndustry] = useState('cement');
  const [selectedEquipment, setSelectedEquipment] = useState('kiln');

  const handleSelectIndustry = (indId) => {
    setSelectedIndustry(indId);
    if (indId === 'power') {
      setSelectedEquipment('boiler');
    } else {
      setSelectedEquipment('kiln');
    }
  };

  const currentIndustryData = equipmentData[selectedIndustry] || equipmentData.cement;
  const currentEquipment =
    currentIndustryData.details[selectedEquipment] ||
    Object.values(currentIndustryData.details)[0];

  return (
    <section id="industri" className="py-10 sm:py-14 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">

        {/* SEKSI 1: FIND PRODUCTS BY INDUSTRY */}
        <div>
          <div className="flex items-center justify-between mb-5 sm:mb-6">
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
              Find Products by Industry
            </h2>
            <a
              href="#equipment"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-500 hover:text-amber-600 transition"
            >
              <span>View All Industries</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {industries.map((ind) => {
              const isCurrent = selectedIndustry === ind.id;
              return (
                <div
                  key={ind.id}
                  onClick={() => handleSelectIndustry(ind.id)}
                  className={`group relative h-28 sm:h-36 rounded-xl overflow-hidden border flex flex-col justify-between p-2.5 sm:p-3 cursor-pointer transition shadow-sm ${
                    isCurrent
                      ? 'border-amber-500 ring-2 ring-amber-400 bg-amber-50/20 dark:bg-slate-900'
                      : 'border-blue-100/70 dark:border-slate-800 bg-[#F4F7FB] dark:bg-slate-900/60 hover:border-amber-400'
                  }`}
                >
                  <div className="flex-1 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-amber-500 transition">
                    <ImageIcon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5] mb-1 opacity-60" />
                    <span className="text-[7px] sm:text-[8px] font-bold tracking-wider uppercase opacity-75 text-center">
                      Asset Placeholder
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/80">
                    <span className={`block text-xs font-bold text-center leading-tight transition ${
                      isCurrent ? 'text-amber-600 dark:text-amber-400 font-extrabold' : 'text-slate-800 dark:text-slate-200'
                    }`}>
                      {ind.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SEKSI 2: START FROM YOUR EQUIPMENT (Tinggi Terkunci & Seragam) */}
        <div id="equipment" className="border-t border-slate-200 dark:border-slate-800 pt-8 sm:pt-10">
          <div className="mb-5">
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
              Start From Your Equipment
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Select your industry, then explore equipment and find the right products.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch bg-slate-50 dark:bg-slate-900/50 p-3.5 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800">

            {/* Navigasi Kategori Industri Samping (Tinggi Mengikuti Wadah Utama) */}
            <div className="lg:col-span-2 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 no-scrollbar justify-start">
              {industries.slice(0, 6).map((ind) => {
                const isActive = selectedIndustry === ind.id;
                return (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => handleSelectIndustry(ind.id)}
                    className={`text-left px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition whitespace-nowrap lg:whitespace-normal border-b-2 lg:border-b-0 lg:border-l-4 shrink-0 ${
                      isActive
                        ? 'border-amber-500 bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-sm font-bold'
                        : 'border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    {ind.fullName}
                  </button>
                );
              })}
            </div>

            {/* Bagian Visual Diagram Model & Pin Interaktif (Aspek Rasio Terkunci 16:9) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              {/* Selector Tombol Mesin Cepat Khusus Layar Ponsel */}
              <div className="flex sm:hidden items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
                {currentIndustryData.spots.map((spot) => (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setSelectedEquipment(spot.id)}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap border transition shrink-0 ${
                      spot.id === selectedEquipment
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {spot.label}
                  </button>
                ))}
              </div>

              {/* Area Gambar Rasio Tetap 16:9 Terkunci */}
              <div className="relative w-full aspect-[16/9] flex items-center justify-center bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/60 p-2 sm:p-3 overflow-hidden shadow-inner">
                <img
                  src={currentIndustryData.image}
                  alt={`${currentIndustryData.title} Diagram`}
                  className="w-full h-full object-contain select-none"
                />

                {/* Titik Pin Interaktif */}
                {currentIndustryData.spots.map((spot) => {
                  const isSelected = spot.id === selectedEquipment;
                  return (
                    <div
                      key={spot.id}
                      style={{ top: spot.top, left: spot.left }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10"
                      onClick={() => setSelectedEquipment(spot.id)}
                    >
                      <span
                        className={`hidden sm:block text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded shadow mb-1 whitespace-nowrap border transition ${
                          isSelected
                            ? 'bg-amber-500 text-slate-950 border-amber-400 font-black scale-105'
                            : 'bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:border-amber-400'
                        }`}
                      >
                        {spot.label}
                      </span>

                      <div className="relative flex items-center justify-center">
                        {isSelected && (
                          <span className="animate-ping absolute inline-flex h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-amber-400 opacity-75" />
                        )}
                        <div
                          className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 flex items-center justify-center transition shadow-sm ${
                            isSelected
                              ? 'bg-amber-500 border-white ring-2 sm:ring-4 ring-amber-300/40 scale-110'
                              : 'bg-white dark:bg-slate-800 border-slate-600 group-hover:border-amber-500'
                          }`}
                        >
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-900 dark:bg-white" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex sm:hidden items-center justify-between text-[10px] text-slate-400 pt-1.5 px-1">
                <span>Dipilih: <strong className="text-amber-500">{currentEquipment.name}</strong></span>
                <span>Ketuk titik atau tombol di atas</span>
              </div>
            </div>

            {/* Detail Produk Kanan (Tinggi Sejajar, Anti-Molor ke Bawah) */}
            <div className="lg:col-span-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 shadow-sm flex flex-col justify-between h-full">
              
              <div className="space-y-3">
                {/* Placeholder Gambar Kecil */}
                <div className="h-20 sm:h-24 rounded-lg border border-blue-100/70 dark:border-slate-700 bg-[#F4F7FB] dark:bg-slate-900/60 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                  <ImageIcon className="w-5 h-5 stroke-[1.5] mb-0.5 opacity-60" />
                  <span className="text-[8px] font-bold tracking-wider uppercase opacity-75">
                    Asset Placeholder
                  </span>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {currentEquipment.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 mb-2.5">
                    {currentEquipment.subtitle}
                  </p>

                  {/* Parameter Suhu & Kondisi Operasional */}
                  <div className="space-y-1.5 mb-2.5">
                    <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 text-xs">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        Operating Temp
                      </span>
                      <span className="font-extrabold text-amber-600 dark:text-amber-400 text-right">
                        {currentEquipment.temp || 'Ambient'}
                      </span>
                    </div>

                    <div className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 text-xs">
                      <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-wider mb-0.5">
                        Operating Condition
                      </span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200 leading-snug block text-[11px]">
                        {currentEquipment.condition || 'Standard Operation'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* List Produk dengan Scroll Halus Jika Layar Sangat Pendek */}
                <div className="max-h-36 sm:max-h-40 overflow-y-auto pr-1 space-y-1.5">
                  {currentEquipment.products.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                      <span className="leading-tight text-[11px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tombol CTA di Bagian Bawah */}
              <button
                type="button"
                onClick={() => {
                  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                  const rawMessage = `Halo Tim Sales, saya ingin konsultasi kebutuhan produk untuk area ${currentEquipment.name} (${selectedIndustry.toUpperCase()}).`;
                  const text = encodeURIComponent(rawMessage);
                  const url = isMobile 
                    ? `https://wa.me/6285880427199?text=${text}` 
                    : `https://web.whatsapp.com/send?phone=6285880427199&text=${text}`;
                  window.open(url, "_blank", "noopener,noreferrer");
                }}
                className="w-full mt-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg text-xs transition shadow-sm shrink-0 cursor-pointer"
                >
                  <span>Minta Penawaran Area Ini</span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}