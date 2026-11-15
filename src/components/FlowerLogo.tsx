/** ZenClan flower mark. Petals are separate paths so they can bloom in on load. */
function FlowerLogo({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={`zen-flower ${className}`}
      aria-hidden="true"
      fill="currentColor"
    >
      <path
        className="zen-flower__petal zen-flower__petal--left"
        d="m28.84 55.85c-24.85-2.24-26.84-30.85-26.84-30.85a27.721 27.721 0 0 1 16.38 4.81c-.03.15-.05.3-.08.45-1.55 9.25 3.32 17.34 7.69 22.49.77.9 1.81 2.09 2.85 3.1z"
      />
      <path
        className="zen-flower__petal zen-flower__petal--right"
        d="m62 25s-1.99 28.62-26.85 30.85c3.96-3.84 12.55-13.74 10.56-25.59-.03-.16-.05-.31-.09-.46a27.79 27.79 0 0 1 16.38-4.8z"
      />
      <path
        className="zen-flower__petal zen-flower__petal--center"
        d="m32.005 56s14.077-11.432 11.731-25.4a42.866 42.866 0 0 0 -11.736-22.6 42.908 42.908 0 0 0 -11.725 22.6c-2.347 13.968 11.725 25.4 11.73 25.4z"
      />
    </svg>
  )
}

export default FlowerLogo
