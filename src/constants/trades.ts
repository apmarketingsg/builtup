export interface Trade {
  value: string
  label: string
  icon: string
}

export const TRADES: Trade[] = [
  { value: 'plumber',       label: 'Plumber',            icon: '🔧' },
  { value: 'electrician',   label: 'Electrician',        icon: '⚡' },
  { value: 'aircon',        label: 'Aircon',             icon: '❄️' },
  { value: 'painting',      label: 'Painting',           icon: '🖌️' },
  { value: 'carpentry',     label: 'Carpentry',          icon: '🪚' },
  { value: 'flooring',      label: 'Flooring',           icon: '🪵' },
  { value: 'tiling',        label: 'Tiling',             icon: '🟫' },
  { value: 'windows',       label: 'Windows & Grilles',  icon: '🪟' },
  { value: 'doors',         label: 'Doors',              icon: '🚪' },
  { value: 'curtains',      label: 'Curtains & Blinds',  icon: '🪞' },
  { value: 'waterproofing', label: 'Waterproofing',      icon: '💧' },
  { value: 'handyman',      label: 'Handyman',           icon: '🛠️' },
  { value: 'cleaning',      label: 'Cleaning',           icon: '🧹' },
  { value: 'movers',        label: 'Movers',             icon: '🚚' },
]
