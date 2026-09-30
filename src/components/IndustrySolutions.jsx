import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Image as ImageIcon, MousePointerClick, X } from 'lucide-react';

// 1. Import Gambar Diagram Utama Interaktif
import cementPlantImg from '../assets/cement-plant-bg.png';
import powerPlantImg from '../assets/power-plant-bg.png';
import miningPlantImg from '../assets/mining-plant-bg.png';
import steelPlantImg from '../assets/steel-bg.png';
import palmOilPlantImg from '../assets/palm-oil-bg.png';
import chemicalPlantImg from '../assets/chemical-plant-bg.png';

// 2. Import Gambar Foto Pabrik Lokal untuk Kartu 'Find Products by Industry'
import cementThumbImg from '../assets/cement-industry.jpg';
import powerThumbImg from '../assets/power-plant.jpg';
import miningThumbImg from '../assets/mining.jpg';
import steelThumbImg from '../assets/steel.jpg';
import palmThumbImg from '../assets/palm-oil.jpg';
import chemicalThumbImg from '../assets/chamical.png';
import fnbThumbImg from '../assets/fnb.jpg';
import manufacturingThumbImg from '../assets/manufacturing.jpg';

// Array Industries Menggunakan Asset Lokal
const industries = [
  { id: 'cement', name: 'Cement', fullName: 'Cement Plant', image: cementThumbImg },
  { id: 'power', name: 'Power', fullName: 'Power Plant', image: powerThumbImg },
  { id: 'mining', name: 'Mining', fullName: 'Mining & Mineral', image: miningThumbImg },
  { id: 'steel', name: 'Steel', fullName: 'Steel Plant', image: steelThumbImg },
  { id: 'palm', name: 'Palm Oil', fullName: 'Palm Oil Mill', image: palmThumbImg },
  { id: 'chemical', name: 'Chemical', fullName: 'Chemical Plant', image: chemicalThumbImg },
  { id: 'fnb', name: 'Food & Beverage', fullName: 'Food & Beverage', image: fnbThumbImg },
  { id: 'manufacturing', name: 'Manufacturing', fullName: 'Manufacturing', image: manufacturingThumbImg },
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
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
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
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
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
        image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
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
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
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
        image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80',
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
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
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
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
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
        image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80',
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
        image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
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
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
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
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
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
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
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

  mining: {
    title: 'Mining & Mineral Processing',
    image: miningPlantImg,
    spots: [
      { id: 'crusher', label: 'Primary Jaw Crusher', top: '75%', left: '19%' },
      { id: 'conveyor', label: 'Overland Conveyor', top: '65%', left: '28%' },
      { id: 'screening', label: 'Vibrating Screen', top: '56%', left: '33%' },
      { id: 'ballmill', label: 'SAG & Ball Mill', top: '48%', left: '50%' },
      { id: 'flotation', label: 'Flotation Cells', top: '72%', left: '62%' },
      { id: 'tailings', label: 'Slurry & Tailings', top: '62%', left: '83%' },
    ],
    details: {
      crusher: {
        name: 'Primary Jaw & Cone Crusher',
        subtitle: 'Heavy material reduction & impact crushing',
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
        temp: 'Ambient – 80°C',
        condition: 'Extreme Severe Impact, Shock Load & Heavy Dust',
        products: [
          'High Impact Manganese Wear Plates',
          'Heavy Duty Dust Suppression Spray Nozzles',
          'Vibration Dampening Rubber Mounts',
          'High Tensile Crusher Frame Bolts (Grade 10.9)',
          'Heavy Duty Mechanical Oil Seals',
        ],
      },
      conveyor: {
        name: 'Overland Conveyor System',
        subtitle: 'Bulk material transport & transfer chute',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        temp: 'Ambient – 70°C',
        condition: 'Continuous High Abrasion & Weather Exposure',
        products: [
          'Polyurethane Conveyor Belt Scrapers & Cleaners',
          'Impact Rubber Skirting & Wear Liners',
          'Heavy-Duty Conveyor Roller Bearings',
          'Belt Alignment & Tensioner Assemblies',
          'Dust Containment Flexible Rubber Curtains',
        ],
      },
      screening: {
        name: 'Vibrating Screen Unit',
        subtitle: 'Ore sizing & classification process',
        image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
        temp: 'Ambient – 60°C',
        condition: 'High Frequency Vibration & Dynamic Fatigue',
        products: [
          'Modular Polyurethane Screen Panels',
          'High Tensile Spring Steel Mesh Screens',
          'Vibration Isolator Springs & Rubber Buffers',
          'HuckBolts & Lockbolts for Structural Frames',
          'Heavy Duty Dust Collector Filter Bags',
        ],
      },
      ballmill: {
        name: 'SAG & Ball Mill Circuit',
        subtitle: 'Fine grinding & ore liberation',
        image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80',
        temp: '40°C – 90°C',
        condition: 'Abrasive Slurry, Heavy Torque & Impact Wear',
        products: [
          'Rubber & Composite Mill Liners',
          'High-Strength Pinion Shaft Fasteners',
          'Trunnion Bearing Lubrication Seals',
          'Slurry Discharge Rubber Sleeves',
          'Hydraulic Torque Tool Sets for Liner Bolts',
        ],
      },
      flotation: {
        name: 'Flotation Cells & Tank Agitators',
        subtitle: 'Chemical mineral separation & froth flotation',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
        temp: 'Ambient – 50°C',
        condition: 'Corrosive Chemicals & Submerged Slurry Agitation',
        products: [
          'Chemical Resistant Polyurethane Impellers',
          'SS316L Flange Bolts & Chemical Gaskets',
          'Air Sparger Diffuser Membranes',
          'Agitator Drive Shaft Mechanical Seals',
          'Acid Proof Protective Coatings & Liners',
        ],
      },
      tailings: {
        name: 'Slurry Pumping & Tailings Dewatering',
        subtitle: 'Waste material management & water recovery',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
        temp: 'Ambient – 60°C',
        condition: 'High Pressure Slurry Abrasion & Severe Wear',
        products: [
          'High Chrome Slurry Pump Wear Parts',
          'Filter Press Cloths for Dewatering',
          'Heavy Rubber Expansion Joints',
          'Slurry Pipe Flange Gaskets & Fasteners',
          'Pneumatic Pinch Valve Sleeves',
        ],
      },
    },
  },

  steel: {
    title: 'Steel Mill & Smelting Plant',
    image: steelPlantImg,
    spots: [
      { id: 'stockyard', label: 'Raw Material Yard', top: '18%', left: '26%' },
      { id: 'blastfurnace', label: 'Blast Furnace', top: '52%', left: '34%' },
      { id: 'converter', label: 'Converter / Ladle', top: '56%', left: '52%' },
      { id: 'casting', label: 'Continuous Caster', top: '32%', left: '59%' },
      { id: 'rolling', label: 'Hot Rolling Mill', top: '68%', left: '74%' },
      { id: 'warehouse', label: 'Coil Storage Yard', top: '22%', left: '81%' },
    ],
    details: {
      stockyard: {
        name: 'Raw Material & Scrap Storage',
        subtitle: 'Iron ore, coal, lime & scrap metal handling',
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
        temp: 'Ambient – 80°C',
        condition: 'Heavy Bulk Impact, Outdoor Weather & Heavy Dust',
        products: [
          'Gantry Crane Heavy Duty Cable Reels',
          'Impact Resistant Conveyor Skirting Rubber',
          'Polyurethane Scrapers & Belt Cleaners',
          'High Tensile Crane Rail Fasteners & Clips',
          'Heavy Duty Dust Collector Filter Bags',
        ],
      },
      blastfurnace: {
        name: 'Blast Furnace (BF Unit)',
        subtitle: 'Iron ore reduction & liquid pig iron tapping',
        image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
        temp: '1.200°C – 1.650°C',
        condition: 'Extreme Thermal Radiant Heat & Slag Corrosion',
        products: [
          'High Temp Ceramic Fiber Insulation Blankets',
          'High Temp Stud Bolts ASTM A193 Grade B7/B16',
          'Refractory Furnace Lining Fasteners',
          'SS316L Spiral Wound Flexible Graphite Gaskets',
          'Water Cooling Jacket Mechanical Seals',
        ],
      },
      converter: {
        name: 'BOF Converter & Ladle Furnace',
        subtitle: 'Steel refining, oxygen blowing & slag removal',
        image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80',
        temp: '1.400°C – 1.700°C',
        condition: 'Molten Steel Splash & Extreme Thermal Shock',
        products: [
          'PTFE / P84 High Temp Fume Extraction Filter Bags',
          'Stainless Steel 316 Star Filter Cages',
          'Ladle Turret Heavy Duty Slewing Bearings',
          'High Temperature Hydraulic Hoses & Seals',
          'Hydraulic Torque Tool Sets for Flange Bolting',
        ],
      },
      casting: {
        name: 'Continuous Casting Machine (CCM)',
        subtitle: 'Molten steel solidification into slabs & billets',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
        temp: '800°C – 1.200°C',
        condition: 'High Temperature Steam, Water Spray & Radiated Heat',
        products: [
          'High Pressure Water Cooling Spray Nozzles',
          'High Temp Rotary Joints for Cooling Rollers',
          'Heat Resistant Silicone/EPDM Seals',
          'Stainless Steel Hydraulic Piping Fasteners',
          'Segment Roller Bearing Assemblies',
        ],
      },
      rolling: {
        name: 'Hot Rolling Mill Line',
        subtitle: 'Slab reheating & high speed steel plate rolling',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
        temp: '400°C – 1.000°C',
        condition: 'High Mechanical Shock Load, High Pressure Water & Scale Abrasion',
        products: [
          'High Pressure Descaling Water Nozzles',
          'Heavy Duty Roll Neck Roller Bearings',
          'Wear Resistant Bronze / PU Guide Plates',
          'High Tensile Structural Hex Bolts (Grade 10.9)',
          'Mill Stand Coupling Mechanical Seals',
        ],
      },
      warehouse: {
        name: 'Steel Coil & Rebar Storage Warehouse',
        subtitle: 'Coil strapping, handling & shipment preparation',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
        temp: 'Ambient – 100°C',
        condition: 'Heavy Lifting Loads & Sharp Metal Edge Friction',
        products: [
          'Heavy Duty Coil Saddle Polyurethane Protection',
          'Overhead Crane Brake Drums & Friction Pads',
          'High Capacity Lifting Slings & Shackles',
          'Automated Strapping Tool Spare Parts',
          'Industrial Warehouse Lighting & Hardware',
        ],
      },
    },
  },

  palm: {
    title: 'Palm Oil Mill (PKS)',
    image: palmOilPlantImg,
    spots: [
      { id: 'sterilizer', label: 'Sterilizer Station', top: '65%', left: '26%' },
      { id: 'thresher', label: 'Thresher & Digester', top: '48%', left: '33%' },
      { id: 'press', label: 'Screw Press Unit', top: '58%', left: '42%' },
      { id: 'clarification', label: 'Clarification Station', top: '28%', left: '58%' },
      { id: 'kernel', label: 'Kernel Recovery', top: '72%', left: '62%' },
      { id: 'storage', label: 'CPO Storage Tank', top: '22%', left: '81%' },
    ],
    details: {
      sterilizer: {
        name: 'Sterilizer Station (Bejana Rebusan)',
        subtitle: 'Fresh fruit bunch steam cooking & enzyme inactivation',
        image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
        temp: '130°C – 145°C',
        condition: 'Saturated Steam Pressure, Acidic Vapors & High Moisture',
        products: [
          'Sterilizer Door Packing Rubber Gaskets (Ebonite/Silicone)',
          'High Temp ASTM A193 B7 Stud Bolts & 2H Nuts',
          'Perforated Stainless Steel Cage Plates',
          'Heavy Duty Cage Rail Track Clips',
          'Pneumatic Steam Control Valves',
        ],
      },
      thresher: {
        name: 'Thresher & Digester Unit',
        subtitle: 'Fruitlet stripping & hot mash digestion',
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
        temp: '90°C – 95°C',
        condition: 'Continuous Mechanical Abrasion & Acidic Slurry',
        products: [
          'High Wear Resistant Manganese Digester Beater Arms',
          'Digester Bottom Wear Plates (Hardox/Hardfacing)',
          'Heavy Duty Chain Drives & Sprockets',
          'Thresher Drum Support Roller Bearings',
          'Steam Injection Nozzles & Control Seals',
        ],
      },
      press: {
        name: 'Screw Press Station',
        subtitle: 'CPO oil extraction from digested fruit mash',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        temp: '85°C – 95°C',
        condition: 'Severe Torque Pressing, High Pressure & Fibrous Wear',
        products: [
          'High Chrome Alloy Press Screws (Worm Screw)',
          'Heavy Duty Press Cage Press Bars',
          'Hydraulic Cone Pressure Control Seals',
          'Main Shaft Heavy Duty Tapered Roller Bearings',
          'Heavy Duty Drive Gearbox Oil Seals',
        ],
      },
      clarification: {
        name: 'Clarification & Decanter Station',
        subtitle: 'CPO purification, moisture removal & sludge separation',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
        temp: '80°C – 90°C',
        condition: 'Corrosive Acidic Water, Continuous Vibration & High RPM',
        products: [
          'High Centrifugal Speed Decanter Scroll Liners',
          'Stainless Steel 316 Wire Mesh Filter Cloths',
          'Vertical Clarifier Tank Oil Skimmer Seals',
          'EPDM Acid Resistant Pipe Flange Gaskets',
          'High Flow CPO Transfer Pump Seals',
        ],
      },
      kernel: {
        name: 'Kernel Recovery & Nut Cracking',
        subtitle: 'Depericarper, nut polishing, Ripple Mill & kernel drying',
        image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80',
        temp: 'Ambient – 70°C',
        condition: 'High Impact Shell Cracking & Dust Particles',
        products: [
          'Ripple Mill High Impact Hardened Steel Rods',
          'Depericarper Fiber Cyclone Ducting Liners',
          'Polyurethane Kernel Elevator Bucket Cups',
          'Hydrocyclone Wear Sleeves & Nozzles',
          'Kernel Silo Heating Coil Steam Gaskets',
        ],
      },
      storage: {
        name: 'CPO Storage Tank Farm',
        subtitle: 'Bulk CPO thermal preservation & dispatch pumping',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
        temp: '50°C – 60°C',
        condition: 'Organic Acid Exposure & Constant Heat Preservation',
        products: [
          'CPO Tank Heating Coil Spiral Wound Gaskets',
          'Level Gauge Indicator Magnetic Float Seals',
          'Hot Dip Galvanized Piping Bolts & Nuts',
          'Flexible Rubber Tank Loading Expansion Joints',
          'Positive Displacement CPO Pump Mechanical Seals',
        ],
      },
    },
  },

  chemical: {
    title: 'Chemical Process & Refinery Plant',
    image: chemicalPlantImg,
    spots: [
      { id: 'piping', label: 'Raw Feed Pipe Rack', top: '38%', left: '14%' },
      { id: 'distillation', label: 'Main Distillation Column', top: '48%', left: '32%' },
      { id: 'fractionation', label: 'Fractionation Towers', top: '42%', left: '49%' },
      { id: 'heat-exchanger', label: 'Heat Exchanger & Coolers', top: '42%', left: '65%' },
      { id: 'spherical-tank', label: 'Spherical Gas Storage', top: '24%', left: '82%' },
      { id: 'transfer-station', label: 'Chemical Transfer Station', top: '72%', left: '68%' },
    ],
    details: {
      piping: {
        name: 'Raw Chemical Feed Pipe Rack',
        subtitle: 'Corrosive fluid transport & raw material feed piping',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
        temp: 'Ambient – 180°C',
        condition: 'High Corrosive Acids/Alkalis & Thermal Expansion Pressure',
        products: [
          'PTFE / Monel Lined Pipe Flange Gaskets',
          'ASTM A193 Grade B7 / B8 Stainless Steel Stud Bolts',
          'Metallic Bellows Expansion Joints for Chemical Lines',
          'Corrosion Resistant PTFE Lined Butterfly Valves',
          'Pipe Support Hangers & Vibration Isolation Pads',
        ],
      },
      distillation: {
        name: 'Main Packed Distillation Column',
        subtitle: 'High purity chemical separation & reflux column',
        image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
        temp: '150°C – 350°C',
        condition: 'High Vacuum, Severe Corrosive Vapors & High Thermal Strain',
        products: [
          'Structured Metal & PTFE Column Packing Trays',
          'Pure Flexible Graphite Spiral Wound Gaskets (SS316L)',
          'High Temperature Column Casing Fasteners',
          'Mist Eliminators & Demister Pads',
          'Reflux Condensor Tube Heat Exchanger Seals',
        ],
      },
      fractionation: {
        name: 'Fractionation Towers Train',
        subtitle: 'Multi-stage hydrocarbon & solvent distillation',
        image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80',
        temp: '80°C – 280°C',
        condition: 'Continuous Vapor Phase Separation & Flammable Solvents',
        products: [
          'Hastelloy / SS316 Stainless Steel Filter Media',
          'High Precision Valve Tray Components',
          'Explosion-Proof Valve Actuator Seals',
          'PTFE Encapsulated Viton Flange O-Rings',
          'High Temp Pressure Relief Valve Fasteners',
        ],
      },
      'heat-exchanger': {
        name: 'Heat Exchanger & Condenser Bank',
        subtitle: 'Process fluid cooling, heat recovery & condensation',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
        temp: '-20°C – 250°C',
        condition: 'High Fluid Velocity, Differential Pressure & Thermal Cycling',
        products: [
          'Titanium / Hastelloy Tube Sheet Heat Exchanger Gaskets',
          'High Pressure Kammprofile Metal Gaskets',
          'Tube Plug Kits for Emergency Maintenance',
          'Chemical Resistant Shell Side Expansion Joints',
          'High Tensile Alloy Steel Channel Cover Studs',
        ],
      },
      'spherical-tank': {
        name: 'Spherical Pressurized Gas Storage (Horton Sphere)',
        subtitle: 'Pressurized liquefied LPG, ammonia & chemical gas storage',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
        temp: '-40°C – 60°C',
        condition: 'High Pressure Cryogenic / Gas Pressure & Volatile Fumes',
        products: [
          'Low Temp ASTM A320 L7 Stud Bolts & 4 Nuts',
          'Cryogenic Valve Stem Packing Gaskets',
          'Emergency Pressure Relief Valve Diaphragms',
          'Flammable Gas Leak Detection Gasket Seals',
          'Heavy Duty Tank Anchor Bolt Assemblies',
        ],
      },
      'transfer-station': {
        name: 'Chemical Processing & Transfer Pump Station',
        subtitle: 'Finished product metering, blending & truck loading',
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
        temp: 'Ambient – 120°C',
        condition: 'High Pressure Pumping, Chemical Abrasion & Volatile Organic Solvents',
        products: [
          'Silicon Carbide Double Mechanical Seals',
          'Chemical Resistant Kalrez / Viton O-Rings',
          'Pneumatic PTFE Diaphragm Pump Repair Kits',
          'Telescopic Chemical Loading Arm Sleeves',
          'Magnetic Drive Pump Coupling Assemblies',
        ],
      },
    },
  },
};

const equipmentProductMap = {
  rawmill: [
    { id: 'pes-bag', name: 'Polyester Dust Collector Bags', category: 'Filtration', spec: 'Tahan abrasi tinggi untuk raw meal dust', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80' },
    { id: 'galv-cage', name: 'Galvanized Filter Cages', category: 'Support Cage', spec: 'Lapisan Hot-Dip Galvanized 10/12-wire', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'clamp-band', name: 'Heavy-Duty Clamping Bands', category: 'Fasteners', spec: 'Quick-release clamp stainless steel', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { id: 'airslide-fabric', name: 'Air Slide Canvas Fabric', category: 'Conveying', spec: 'Permeabilitas seragam transfer tepung baku', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
  ],
  preheater: [
    { id: 'fgl-bag', name: 'Woven Fiberglass Filter Bags', category: 'Filtration', spec: 'Ketahanan temperatur continuous hingga 260°C', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80' },
    { id: 'ptfe-coated', name: 'PTFE Membrane Coated Media', category: 'Filtration', spec: 'Efisiensi penangkapan partikulat submikron', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80' },
    { id: 'exp-joint', name: 'Expansion Joints & Seals', category: 'Sealing', spec: 'Kompensasi pemuaian termal ducting gas buang', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'mount-rings', name: 'High-Temp Mounting Rings', category: 'Hardware', spec: 'Paduan baja tahan panas untuk dudukan filter', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
  ],
  kiln: [
    { id: 'aramid-bag', name: 'Aramid / Nomex Filter Bag', category: 'Filtration', spec: 'Ketahanan thermal 200°C–240°C klinker kiln', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80' },
    { id: 'ss316-cage', name: 'SS316 Filter Cage Star Design', category: 'Support Cage', spec: 'Konstruksi Stainless Steel 316 anti-korosi', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'ht-bolts', name: 'High Temp Stud Bolts Grade B7', category: 'Fasteners', spec: 'ASTM A193 B7/2H untuk area burner & kiln shell', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { id: 'graphite-gasket', name: 'Gaskets & Expansion Seals', category: 'Sealing', spec: 'Pure flexible graphite untuk sealing flange kiln', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
  ],
  cooler: [
    { id: 'fgl-cooler', name: 'Fiberglass High-Temp Filter Bags', category: 'Filtration', spec: 'Tahan shock thermal pendinginan mendadak klinker', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80' },
    { id: 'venturi-air', name: 'Venturi Air Injectors', category: 'Accessories', spec: 'Desain aerodinamis pembersihan pulse jet optimal', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
    { id: 'grate-fasteners', name: 'Cooler Grate Plate Fasteners', category: 'Fasteners', spec: 'Baut struktural tahan benturan klinker panas', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { id: 'insul-seals', name: 'Thermal Insulation Seals', category: 'Sealing', spec: 'Peredam suhu celah dinding cooler', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
  ],
  mill: [
    { id: 'acrylic-bag', name: 'Antistatic Acrylic Needle Felt', category: 'Filtration', spec: 'Anti-statis serat tembaga/karbon untuk debu semen', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80' },
    { id: 'star-cage', name: 'Star Cages Dust Suppression', category: 'Support Cage', spec: 'Mencegah keruntuhan kantong saat tekanan tinggi', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'pulse-valve', name: 'Diaphragm Pulse Valves 1.5 Inch', category: 'Pneumatics', spec: 'Siklus respons tinggi pulse cleaning baghouse', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
    { id: 'solenoid-ctrl', name: 'Pneumatic Solenoid Controls', category: 'Automation', spec: 'Proteksi IP65 untuk pengontrolan sekuens pembersihan', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80' },
  ],
  silo: [
    { id: 'silo-vent', name: 'Top-Removal Silo Vent Filters', category: 'Filtration', spec: 'Penggantian cepat dari atas head bin silo', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80' },
    { id: 'pleated-cartridge', name: 'Pleated Cartridge Filters', category: 'Filtration', spec: 'Area filtrasi lebih ringkas untuk silo venting', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80' },
    { id: 'spout-sleeves', name: 'Spout Loading Rubber Sleeves', category: 'Conveying', spec: 'Karet corong fleksibel pengisian truk semen curah', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'fluid-canvas', name: 'Aeration Pads & Fluidizing Canvas', category: 'Conveying', spec: 'Pencegah penggumpalan semen di kerucut silo', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
  ],
  pulverizer: [
    { id: 'pps-mill-bag', name: 'Antistatic Polyester & PPS Bag', category: 'Filtration', spec: 'Tahan percikan statis serbuk batubara mudah meledak', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80' },
    { id: 'ss-cage-mill', name: 'SS304/316 Filter Cages', category: 'Support Cage', spec: 'Material anti-spark aman lingkungan ledakan', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'skirt-rubber', name: 'Conveyor Skirt Rubber 60 ShA', category: 'Wear Parts', spec: 'Tahan gesekan tumpahan batubara pada transfer chute', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'pulse-solenoid', name: 'Pneumatic Solenoid Pulse Valves', category: 'Pneumatics', spec: 'Penghembus filter dust collector pulverizer', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
  ],
  boiler: [
    { id: 'b16-studs', name: 'ASTM A193 B16/B7 Stud Bolts', category: 'Fasteners', spec: 'Grade temperatur tinggi untuk flange uap superheated', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { id: 'swg-gasket', name: 'Spiral Wound Gaskets SS316L/Graphite', category: 'Sealing', spec: 'Kerapatan pipa uap tekanan tinggi boiler', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'ceramic-blanket', name: 'Ceramic Fiber Insulation Blanket', category: 'Thermal', spec: 'Isolasi panas dinding pipa boiler hingga 1260°C', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'bellows-joint', name: 'Metallic Bellows Expansion Joints', category: 'Piping', spec: 'Kompensator ekspansi pipa transfer uap', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
  ],
  baghouse: [
    { id: 'fgl-ptfe-bag', name: 'Fiberglass + PTFE Membrane Bags', category: 'Filtration', spec: 'Filtrasi fly ash submikron dari pembakaran batubara', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80' },
    { id: 'pps-p84-bag', name: 'PPS / P84 Acid Proof Felt Bags', category: 'Filtration', spec: 'Tahan paparan gas asam SOx/NOx dari flue gas', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80' },
    { id: 'star-cage-esp', name: 'Corrosion Resistant Star Cages', category: 'Support Cage', spec: 'Finishing epoksi tahan asam flue gas', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'pulse-jet-valve', name: 'High Flow Diaphragm Valves', category: 'Pneumatics', spec: 'Daya hembus tinggi untuk pembersihan fly ash pekat', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
  ],
  turbine: [
    { id: 'hydraulic-torque', name: 'Hydraulic Torque Wrenches', category: 'Tools', spec: 'Pengencangan baut casing turbin dengan torsi presisi', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { id: 'casing-bolts', name: 'High Tensile Precision Casing Bolts', category: 'Fasteners', spec: 'Ketahanan getaran putaran tinggi poros turbin', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { id: 'lube-cartridge', name: 'Synthetic Lube Oil Micron Filter', category: 'Filtration', spec: 'Kemurnian oli hidrolik dan pelumas bantalan generator', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80' },
    { id: 'serrated-gasket', name: 'High Velocity Serrated Metallic Gasket', category: 'Sealing', spec: 'Pencegah kebocoran uap rotasi superkritis', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
  ],
  cooling: [
    { id: 'epdm-gasket', name: 'EPDM / NBR Heavy Flange Gaskets', category: 'Sealing', spec: 'Kerapatan sambungan pipa air sirkulasi dingin', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'hdg-ss-bolts', name: 'Hot-Dip Galvanized & SS316 Bolts', category: 'Fasteners', spec: 'Anti-karat lingkungan lembab cooling tower', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { id: 'drift-fasteners', name: 'Drift Eliminator Fasteners', category: 'Hardware', spec: 'Pengikat panel pemisah tetesan air cooling tower', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'mech-seals', name: 'Water Cooling Pump Mechanical Seals', category: 'Sealing', spec: 'Pencegah kebocoran as pompa pendingin utama', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
  ],
  ashsilo: [
    { id: 'cartridge-silo', name: 'Silo Vent Dust Cartridge Filters', category: 'Filtration', spec: 'Filtrasi debu fly ash saat pemindahan pneumatik', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80' },
    { id: 'airslide-ash', name: 'Fluidizing Airslide Canvas Fabrics', category: 'Conveying', spec: 'Pelancar aliran abu terbang di corong silo', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'spout-sleeve-ash', name: 'Telescopic Dry Ash Spout Sleeves', category: 'Conveying', spec: 'Selongsong fleksibel pemuatan truk anti-debu liar', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'airlock-seals', name: 'Rotary Air Lock Feeder Dust Seals', category: 'Sealing', spec: 'Penyekat tekanan hisap rotary valve abu', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
  ],

  crusher: [
    { id: 'mn-wearplate', name: 'High Impact Mn Wear Plates', category: 'Wear Parts', spec: 'Manganese Steel ASTM A128 Grade C tahan hantaman keras', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80' },
    { id: 'dust-spray', name: 'High Pressure Fog Spray Nozzles', category: 'Dust Suppression', spec: 'Sistem pengkabutan debu halus pada receiving hopper', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
    { id: 'vibe-rubber', name: 'Vibration Isolation Buffers', category: 'Mounting', spec: 'Peredam getaran frekuensi rendah struktur jaw crusher', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'gr109-bolts', name: 'Structural Hex Bolts Grade 10.9', category: 'Fasteners', spec: 'Ketahanan geser ekstrem untuk rangka crusher', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
  ],
  conveyor: [
    { id: 'pu-scraper', name: 'Polyurethane Belt Cleaners', category: 'Conveying', spec: 'Pembersih sisa material basah pada head drum conveyor', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'skirt-liner', name: 'Impact Rubber Skirting 70 ShA', category: 'Wear Parts', spec: 'Pencegah tumpahan batubara/biji besi di transfer chute', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80' },
    { id: 'roller-bearing', name: 'Heavy Duty Tapered Roller Bearings', category: 'Mechanical', spec: 'Daya tahan beban radial & aksial tinggi overland conveyor', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'rubber-curtain', name: 'Dust Containment Curtains', category: 'Dust Suppression', spec: 'Karet penyekat debu di area chute enclosure', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
  ],
  screening: [
    { id: 'pu-screen', name: 'Modular PU Screen Panels', category: 'Screening', spec: 'Papan ayakan poliuretan tahan abrasi air & batuan', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'wire-mesh', name: 'Spring Steel High Tensile Mesh', category: 'Screening', spec: 'Presisi saringan ore sizing dengan ketahanan abrasi', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80' },
    { id: 'vibe-spring', name: 'Heavy Duty Isolator Coil Springs', category: 'Hardware', spec: 'Pegas baja isolasi getaran rangka ayakan utama', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { id: 'lock-bolts', name: 'HuckBolts Structural Fasteners', category: 'Fasteners', spec: 'Sistem pengencang anti-lepas akibat getaran continue', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
  ],
  ballmill: [
    { id: 'rubber-liner', name: 'Composite Rubber Mill Liners', category: 'Wear Parts', spec: 'Liner pelindung shell ball mill tahan benturan bola baja', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80' },
    { id: 'liner-bolts', name: 'High Tensile Liner Bolts Grade 8.8', category: 'Fasteners', spec: 'Lengkap dengan seal washer karet anti-kebocoran slurry', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { id: 'trunnion-seal', name: 'Trunnion Mechanical Seals', category: 'Sealing', spec: 'Penyekat oli pelumas bantalan utama grinder mill', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'slurry-sleeve', name: 'High Wear Rubber Sleeves', category: 'Conveying', spec: 'Selongsong karet discharge pipa slurry', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
  ],
  flotation: [
    { id: 'pu-impeller', name: 'Flotation PU Rotor & Stator', category: 'Wear Parts', spec: 'Impeller poliuretan tahan korosi reagen kimia flotation', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'ss316-fastener', name: 'SS316L Stud Bolts & Nuts', category: 'Fasteners', spec: 'Baja anti-karat untuk struktur tanki dan pipa kimia', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { id: 'air-diffuser', name: 'EPDM Fine Bubble Spargers', category: 'Process', spec: 'Injeksi gelembung udara halus untuk pemisahan mineral', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
    { id: 'agitator-seal', name: 'Double Mechanical Seals', category: 'Sealing', spec: 'Penyekat poros pengaduk dari cairan slurry asam', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
  ],
  tailings: [
    { id: 'slurry-part', name: 'High Chrome Pump Impeller', category: 'Pump Parts', spec: 'Material A05 High Chrome tahan abrasi slurry pekat', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'filter-cloth', name: 'Polypropylene Filter Press Cloth', category: 'Filtration', spec: 'Kain filter dewatering tailings dengan filtrasi jernih', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80' },
    { id: 'expansion-joint', name: 'Heavy Duty Rubber Bellows', category: 'Piping', spec: 'Kompensator getaran pipa transfer slurry tekanan tinggi', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
    { id: 'pinch-sleeve', name: 'Natural Rubber Pinch Valve Sleeve', category: 'Valves', spec: 'Ketahanan tutup-buka aliran slurry berlumpur', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
  ],

  sterilizer: [
    { id: 'pks-door-gasket', name: 'Sterilizer Door Packing Gasket', category: 'Sealing', spec: 'Material karet ebonit/silikon tahan uap jenuh 145°C', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'pks-b7-bolts', name: 'ASTM A193 B7 Stud Bolts & 2H Nuts', category: 'Fasteners', spec: 'Grade baut tahan tekanan steam bejana rebusan', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { id: 'cage-plate', name: 'Perforated Stainless Cage Liner', category: 'Wear Parts', spec: 'Plat lubang lori rebusan tahan asam minyak sawit', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'steam-valve', name: 'Pneumatic Steam Control Valve', category: 'Valves', spec: 'Pengontrol injeksi uap otomatis sterilizer PKS', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
  ],
  thresher: [
    { id: 'beater-arm', name: 'Digester Manganese Beater Arm', category: 'Wear Parts', spec: 'Pisau pengaduk adonan sawit tahan gesekan tinggi', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80' },
    { id: 'digester-liner', name: 'Hardox Bottom Wear Plates', category: 'Wear Parts', spec: 'Pelapis dasar digester tahan abrasi dan asam', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80' },
    { id: 'thresher-bearing', name: 'Plummer Block Roller Bearings', category: 'Mechanical', spec: 'Bantalan poros drum bantingan TBS beban kejut', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'pks-chain', name: 'Heavy Duty Conveyor Drive Chain', category: 'Conveying', spec: 'Rantai penggerak lori & conveyor buah segar', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
  ],
  press: [
    { id: 'press-worm', name: 'High Chrome Screw Press Worm', category: 'Wear Parts', spec: 'Kempaan ulir bahan High Alloy tahan himpitan pres', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80' },
    { id: 'press-cage', name: 'Press Cage Bars Set', category: 'Wear Parts', spec: 'Struktur bilah penahan kempaan ekstraksi CPO', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'press-bearing', name: 'High Torque Tapered Roller Bearings', category: 'Mechanical', spec: 'Bantalan utama poros screw press PKS', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'press-seal', name: 'Hydraulic Cone Pressure Seals', category: 'Sealing', spec: 'Penyekat tekanan hidrolik konus pengatur ampas', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
  ],
  clarification: [
    { id: 'decanter-scroll', name: 'Decanter Centrifuge Scroll Liner', category: 'Centrifuge', spec: 'Pelindung ulir decanter tahan putaran tinggi & slurry', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'cpo-filter-cloth', name: 'SS316 Vibration Screen Cloth', category: 'Filtration', spec: 'Ayakan getar pemisah serabut dari CPO kasar', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80' },
    { id: 'epdm-pks-gasket', name: 'EPDM Acid Proof Flange Gasket', category: 'Sealing', spec: 'Gasket pipa air panas & minyak sawit asam tinggi', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'cpo-pump-seal', name: 'CPO Transfer Pump Mechanical Seal', category: 'Sealing', spec: 'Tahan cairan kental minyak sawit temperatur 90°C', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
  ],
  kernel: [
    { id: 'ripple-rod', name: 'Hardened Steel Ripple Mill Rods', category: 'Wear Parts', spec: 'Batang pemecah cangkang biji sawit presisi', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { id: 'elevator-bucket', name: 'Polyurethane Kernel Elevator Cups', category: 'Conveying', spec: 'Timba efeisien pengangkut kernel anti-lengket', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'cyclone-liner', name: 'Depericarper Duct Wear Liners', category: 'Wear Parts', spec: 'Pelindung dinding hisapan hisap serabut & cangkang', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80' },
    { id: 'hydrocyclone-nozzle', name: 'Polyurethane Hydrocyclone Nozzle', category: 'Process', spec: 'Nozzle pemisah inti sawit dan cangkang basah', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
  ],
  storage: [
    { id: 'cpo-heating-swg', name: 'Coil Pipe SS316 Graphite SWG', category: 'Sealing', spec: 'Gasket pipa pemanas steam tangki timbun CPO', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'cpo-pump-seal-st', name: 'Heavy Duty Displacement Pump Seal', category: 'Sealing', spec: 'Penyekat pompa transfer CPO ke truk tangki / kapal', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'hdg-pks-bolts', name: 'Hot-Dip Galvanized Piping Fasteners', category: 'Fasteners', spec: 'Anti-karat korosi cuaca outdoor tangki CPO', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { id: 'tank-exp-joint', name: 'Flexible Tank Connection Expansion Joint', category: 'Piping', spec: 'Kompensator getaran pipa inlet/outlet tangki CPO', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
  ],

  piping: [
    { id: 'ptfe-gasket', name: 'PTFE Lined Flange Gasket', category: 'Sealing', spec: 'Tahan korosi asam & basa kuat temperatur hingga 200°C', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'ss31Studs', name: 'ASTM A193 B8 Class 2 Stud Bolts', category: 'Fasteners', spec: 'Baja Stainless Steel 304/316 tahan cairan kimia keras', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { id: 'ptfe-butterfly', name: 'PTFE Lined Butterfly Valve', category: 'Valves', spec: 'Valves tahan zat kimia asam pekat & pelarut organik', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
    { id: 'pipe-bellows', name: 'Metallic Bellows Expansion Joint', category: 'Piping', spec: 'Peredam pemuaian panas pipa kimia bertekanan tinggi', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
  ],
  distillation: [
    { id: 'column-packing', name: 'Structured Metal Packing Trays', category: 'Separation', spec: 'Meningkatkan efisiensi kontak uap-cairan kolom distilasi', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'swg-graphite-chem', name: 'SS316L Flexible Graphite SWG', category: 'Sealing', spec: 'Gasket kerapatan tinggi untuk flange kolom distilasi', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'demister-pad', name: 'SS316 Demister Mesh Pad', category: 'Filtration', spec: 'Penangkap kabut cairan uap kimia pada puncak kolom', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80' },
    { id: 'ht-chem-bolts', name: 'High Temp Stud Bolts Grade B7', category: 'Fasteners', spec: 'Grade baut tahan panas temperatur reaksi distilasi', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
  ],
  fractionation: [
    { id: 'hastelloy-media', name: 'Hastelloy C276 Wire Mesh', category: 'Filtration', spec: 'Filter tahan korosi ekstrem pelarut & gas asam', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80' },
    { id: 'valve-tray', name: 'Fractionation Tower Valve Trays', category: 'Separation', spec: 'Piringan pemisah fraksi hidrokarbon & kimia organik', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'kalrez-oring', name: 'Kalrez / FFKM Chemical O-Rings', category: 'Sealing', spec: 'Ketahanan kimia mutlak terhadap 1800+ jenis bahan kimia', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'ex-actuator', name: 'Explosion-Proof Pneumatic Actuator', category: 'Automation', spec: 'Sertifikasi ATEX/Ex aman untuk area uap mudah terbakar', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
  ],
  'heat-exchanger': [
    { id: 'ti-gasket', name: 'Titanium Tube Sheet Gasket', category: 'Sealing', spec: 'Gasket penukar panas tahan fluida pendingin korosif', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'kammprofile-gasket', name: 'Kammprofile Metal Serrated Gasket', category: 'Sealing', spec: 'Kerapatan tinggi fluktuasi tekanan & suhu ekstrim', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'tube-plug', name: 'Brass / SS316 Heat Exchanger Plugs', category: 'Maintenance', spec: 'Penyumbat kebocoran pipa tube exchanger cepat', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { id: 'chem-exp-bellows', name: 'PTFE Flexible Expansion Bellows', category: 'Piping', spec: 'Kompensator fleksibel cairan kimia agresif', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
  ],
  'spherical-tank': [
    { id: 'l7-cryo-bolts', name: 'ASTM A320 Grade L7 Stud Bolts', category: 'Fasteners', spec: 'Baut khusus temperatur rendah/kriogenik tangki gas', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
    { id: 'cryo-packing', name: 'PTFE Cryogenic Stem Valve Packing', category: 'Sealing', spec: 'Penyekat katup gas cair bertekanan tinggi', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'relief-diaphragm', name: 'SS316 Pressure Relief Diaphragm', category: 'Safety', spec: 'Pengaman tekanan berlebih tangki bola LPG/Ammonia', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
    { id: 'tank-anchor-bolt', name: 'Heavy Duty Structural Anchor Bolts', category: 'Fasteners', spec: 'Pengikat pondasi tangki bola kapasitas besar', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
  ],
  'transfer-station': [
    { id: 'sic-mech-seal', name: 'Silicon Carbide Mechanical Seal', category: 'Sealing', spec: 'Penyekat as pompa tahan gesekan cairan kimia pekat', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'viton-chem-oring', name: 'Viton FKM Chemical Resistant O-Rings', category: 'Sealing', spec: 'Penyekat sambungan pipa transfer pelarut organik', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80' },
    { id: 'diaphragm-kit', name: 'PTFE Diaphragm Pump Repair Kit', category: 'Pump Parts', spec: 'Sparepart membran pompa diafragma transfer kimia', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80' },
    { id: 'arm-sleeve', name: 'PTFE Loading Arm Flexible Sleeve', category: 'Conveying', spec: 'Selongsong corong pengisian truk tangki kimia cair', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
  ],
};

export default function IndustrySolutions({ showViewAll = false }) {
  const [selectedIndustry, setSelectedIndustry] = useState('cement');
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  
  const [activeProductModal, setActiveProductModal] = useState(null);

  const handleSelectIndustry = (indId) => {
    setSelectedIndustry(indId);
    setSelectedEquipment(null);
  };

  const handleToggleEquipment = (spotId) => {
    setSelectedEquipment((prev) => (prev === spotId ? null : spotId));
  };

  const currentIndustryData = equipmentData[selectedIndustry] || equipmentData.cement;
  const currentEquipment = selectedEquipment ? currentIndustryData.details[selectedEquipment] : null;
  const currentRecommendedProducts = selectedEquipment ? equipmentProductMap[selectedEquipment] || [] : [];

  return (
    <section id="industri" className="py-10 sm:py-14 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">

        {/* SEKSI 1: FIND PRODUCTS BY INDUSTRY (ASET FOTO LOKAL) */}
        <div>
          <div className="flex items-center justify-between mb-5 sm:mb-6">
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
              Find Products by Industry
            </h2>
            
            {/* Hanya di-render jika showViewAll={true} (misal di Beranda / HomePage) */}
            {showViewAll && (
              <Link
                to="/industries"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-500 hover:text-amber-600 transition"
              >
                <span>View All Industries</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {industries.map((ind) => {
              const isCurrent = selectedIndustry === ind.id;
              return (
                <div
                  key={ind.id}
                  onClick={() => handleSelectIndustry(ind.id)}
                  className={`group relative h-28 sm:h-36 rounded-xl overflow-hidden border flex flex-col justify-end p-2.5 sm:p-3 cursor-pointer transition shadow-sm ${
                    isCurrent
                      ? 'border-amber-500 ring-2 ring-amber-400'
                      : 'border-slate-200 dark:border-slate-800 hover:border-amber-400'
                  }`}
                >
                  {/* Foto Latar Pabrik dari Folder Assets */}
                  <img
                    src={ind.image}
                    alt={ind.fullName}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay Gelap */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    isCurrent 
                      ? 'bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-amber-500/20' 
                      : 'bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent group-hover:from-slate-950/90'
                  }`} />

                  {/* Label Nama Industri */}
                  <div className="relative z-10 w-full text-center">
                    <span className={`block text-xs font-bold leading-tight transition-colors ${
                      isCurrent ? 'text-amber-400 font-extrabold' : 'text-white group-hover:text-amber-300'
                    }`}>
                      {ind.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SEKSI 2: START FROM YOUR EQUIPMENT */}
        <div id="equipment" className="border-t border-slate-200 dark:border-slate-800 pt-8 sm:pt-10">
          <div className="mb-5">
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
              Start From Your Equipment
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Select your industry, then click any equipment point to explore matching products. Click again to close.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch bg-slate-50 dark:bg-slate-900/50 p-3.5 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800">

            {/* Navigasi Kategori Industri Samping */}
            <div className="lg:col-span-2 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 no-scrollbar justify-start">
              {industries.slice(0, 6).map((ind) => {
                const isActive = selectedIndustry === ind.id;
                return (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => handleSelectIndustry(ind.id)}
                    className={`text-left px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition whitespace-nowrap lg:whitespace-normal border-b-2 lg:border-b-0 lg:border-l-4 shrink-0 cursor-pointer ${
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

            {/* Bagian Visual Diagram Model & Pin Interaktif */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              <div className="flex sm:hidden items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
                {currentIndustryData.spots.map((spot) => (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => handleToggleEquipment(spot.id)}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap border transition shrink-0 cursor-pointer ${
                      spot.id === selectedEquipment
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {spot.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full aspect-[16/9] flex items-center justify-center bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/60 p-2 sm:p-3 overflow-hidden shadow-inner">
                <img
                  src={currentIndustryData.image}
                  alt={`${currentIndustryData.title} Diagram`}
                  className="w-full h-full object-contain select-none"
                />

                {currentIndustryData.spots.map((spot) => {
                  const isSelected = spot.id === selectedEquipment;
                  return (
                    <div
                      key={spot.id}
                      style={{ top: spot.top, left: spot.left }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10"
                      onClick={() => handleToggleEquipment(spot.id)}
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
                <span>
                  {currentEquipment ? (
                    <>Dipilih: <strong className="text-amber-500">{currentEquipment.name}</strong></>
                  ) : (
                    'Ketuk titik atau tombol di atas'
                  )}
                </span>
                <span>{selectedEquipment ? 'Ketuk lagi untuk menutup' : 'Pilih titik mesin'}</span>
              </div>
            </div>

            {/* Detail Produk Kanan */}
            <div className="lg:col-span-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 shadow-sm flex flex-col justify-between h-full">
              {currentEquipment ? (
                <>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="h-20 sm:h-24 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 overflow-hidden flex items-center justify-center mr-2 relative">
                        {currentEquipment.image ? (
                          <img
                            src={currentEquipment.image}
                            alt={currentEquipment.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                            <ImageIcon className="w-6 h-6 stroke-[1.5] mb-0.5 opacity-60" />
                            <span className="text-[9px] font-bold tracking-wider uppercase opacity-75">
                              {currentEquipment.name}
                            </span>
                          </div>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedEquipment(null)}
                        className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/60 transition cursor-pointer self-start shrink-0"
                        title="Tutup Detail"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {currentEquipment.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 mb-2.5">
                        {currentEquipment.subtitle}
                      </p>

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

                    <div className="max-h-32 sm:max-h-36 overflow-y-auto pr-1 space-y-1.5">
                      {currentEquipment.products.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                          <span className="leading-tight text-[11px]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

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
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-3 animate-bounce">
                    <MousePointerClick className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Pilih Titik Mesin
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-[200px] leading-relaxed">
                    Klik salah satu titik pada diagram untuk memuat spesifikasi dan rekomendasi produk terkait.
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Rak Rekomendasi Produk */}
          {selectedEquipment && currentRecommendedProducts.length > 0 && (
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      Rekomendasi Khusus Mesin
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
                    Rekomendasi Produk untuk {currentEquipment.name} ({currentIndustryData.title})
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedEquipment(null)}
                  className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-2.5 py-1.5 rounded border border-slate-200 dark:border-slate-700 cursor-pointer transition self-start sm:self-auto"
                >
                  Tutup Rekomendasi ✕
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentRecommendedProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="flex flex-col justify-between p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 hover:border-amber-500/60 hover:shadow-md transition group"
                  >
                    <div>
                      <div className="w-full h-32 rounded-lg border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-900/60 overflow-hidden mb-3 flex items-center justify-center relative">
                        {prod.image ? (
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                            <ImageIcon className="w-6 h-6 stroke-[1.5] mb-1 opacity-50" />
                            <span className="text-[8px] font-bold uppercase tracking-wider opacity-70">
                              {prod.category}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          {prod.category}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {prod.id}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-amber-500 transition line-clamp-1">
                        {prod.name}
                      </h4>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {prod.spec}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveProductModal(prod)}
                        className="flex-1 py-2 px-3 text-center rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 text-xs font-semibold transition cursor-pointer"
                      >
                        Detail
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                          const text = encodeURIComponent(
                            `Halo Tim Sales, saya ingin minta penawaran untuk produk: ${prod.name} (ID: ${prod.id}) untuk area ${currentEquipment.name}.`
                          );
                          const url = isMobile
                            ? `https://wa.me/6285880427199?text=${text}`
                            : `https://web.whatsapp.com/send?phone=6285880427199&text=${text}`;
                          window.open(url, '_blank', 'noopener,noreferrer');
                        }}
                        className="py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition cursor-pointer whitespace-nowrap"
                      >
                        RFQ
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* MODAL QUICK VIEW DETAIL PRODUK */}
      {activeProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xl space-y-4">
            
            <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  {activeProductModal.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
                  {activeProductModal.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  ID Produk: {activeProductModal.id}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveProductModal(null)}
                className="p-1 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full h-48 sm:h-56 rounded-xl border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-800/60 overflow-hidden flex items-center justify-center relative">
              {activeProductModal.image ? (
                <img
                  src={activeProductModal.image}
                  alt={activeProductModal.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                  <ImageIcon className="w-8 h-8 stroke-[1.5] mb-1 opacity-50" />
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">
                    Gambar {activeProductModal.name}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Spesifikasi Teknik
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/60 leading-relaxed">
                  {activeProductModal.spec}
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 p-2.5 rounded-xl text-xs text-amber-800 dark:text-amber-300">
                💡 <strong>Kesesuaian Mesin:</strong> Direkomendasikan khusus untuk area <strong>{currentEquipment?.name}</strong> pada industri <strong>{currentIndustryData?.title}</strong>.
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setActiveProductModal(null)}
                className="flex-1 py-2.5 px-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold transition text-center cursor-pointer"
              >
                Tutup
              </button>

              <button
                type="button"
                onClick={() => {
                  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                  const text = encodeURIComponent(
                    `Halo Tim Sales, saya ingin konsultasi & minta penawaran untuk produk: ${activeProductModal.name} (ID: ${activeProductModal.id}) di area ${currentEquipment?.name}.`
                  );
                  const url = isMobile
                    ? `https://wa.me/6285880427199?text=${text}`
                    : `https://web.whatsapp.com/send?phone=6285880427199&text=${text}`;
                  window.open(url, '_blank', 'noopener,noreferrer');
                }}
                className="flex-[2] py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition cursor-pointer whitespace-nowrap text-center"
              >
                Minta Penawaran (RFQ) via WA
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}