import { iconMap } from '../../data/iconMap'

export default function SkillIcon({ name, size = 20 }) {
  const Icon = iconMap[name] || iconMap.Code2
  return <Icon size={size} strokeWidth={1.8} />
}
