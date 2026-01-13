export function FloatingHearts() {
  const hearts = [
    { top: '10%', left: '5%', size: '24px', delay: '0s' },
    { top: '25%', right: '8%', size: '18px', delay: '-3s' },
    { top: '60%', left: '3%', size: '20px', delay: '-6s' },
    { top: '75%', right: '5%', size: '22px', delay: '-9s' },
    { top: '40%', left: '92%', size: '16px', delay: '-12s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart, index) => (
        <span
          key={index}
          className="floating-heart"
          style={{
            top: heart.top,
            left: heart.left,
            right: heart.right,
            fontSize: heart.size,
            animationDelay: heart.delay,
          }}
        >
          💕
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;
