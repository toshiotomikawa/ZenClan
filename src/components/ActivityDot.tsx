import type { ActivityLevel } from '../lib/members'

const activityLabels: Record<ActivityLevel, string> = {
  green: 'Very active',
  yellow: 'Moderately active',
  gray: 'Low activity',
}

function ActivityDot({ activity }: { activity: ActivityLevel }) {
  const label = activityLabels[activity]
  return (
    <span
      className={`zen-activity-dot zen-activity-dot--${activity}`}
      role="img"
      aria-label={label}
      title={label}
    />
  )
}

export default ActivityDot
