export function GradientOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div 
        className="absolute -top-[15%] -left-[15%] w-[70%] h-[60%]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(232, 74, 95, 0.28) 0%, rgba(232, 74, 95, 0.1) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      <div 
        className="absolute -bottom-[15%] -right-[15%] w-[70%] h-[60%]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(242, 181, 188, 0.22) 0%, rgba(242, 181, 188, 0.08) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      <div 
        className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[90%] h-[45%]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(232, 74, 95, 0.12) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />
      
      <div 
        className="absolute bottom-0 left-0 right-0 h-[40%]"
        style={{
          background: 'linear-gradient(to top, rgba(37, 26, 46, 0.5) 0%, transparent 100%)',
        }}
      />
    </div>
  );
}

export default GradientOverlay;
