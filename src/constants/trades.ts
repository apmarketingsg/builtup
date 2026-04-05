export interface Trade {
  value: string
  label: string
  icon: string
}

export const TRADES: Trade[] = [
  { value: 'plumber',      label: 'Plumber',               icon: '🔧' },
  { value: 'electrician',  label: 'Electrician',           icon: '⚡' },
  { value: 'painter',      label: 'Painter',               icon: '🖌️' },
  { value: 'aircon',       label: 'Aircon Servicing',      icon: '❄️' },
  { value: 'carpenter',    label: 'Carpenter',             icon: '🪚' },
  { value: 'tiler',        label: 'Tiler',                 icon: '⬜' },
  { value: 'renovation',   label: 'Renovation',            icon: '🏠' },
  { value: 'waterproofing',label: 'Waterproofing',         icon: '💧' },
  { value: 'handyman',     label: 'Handyman',              icon: '🛠️' },
  { value: 'locksmith',    label: 'Locksmith',             icon: '🔑' },
]
