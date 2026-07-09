import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'teal' | 'cyan' | 'blue' | 'gradient';
}

function AnimatedBackground({ variant = 'teal' }: AnimatedBackgroundProps) {
  const colors = {
    teal: {
      primary: 'from-teal-50 via-cyan-50 to-blue-50',
      orb1: 'from-teal-200/30',
      orb2: 'from-cyan-300/25',
    },
    cyan: {
      primary: 'from-cyan-50 via-teal-50 to-blue-50',
      orb1: 'from-cyan-200/30',
      orb2: 'from-teal-300/25',
    },
    blue: {
      primary: 'from-blue-50 via-cyan-50 to-teal-50',
      orb1: 'from-blue-200/30',
      orb2: 'from-cyan-300/25',
    },
    gradient: {
      primary: 'from-teal-400 via-cyan-400 to-blue-400',
      orb1: 'from-teal-300/40',
      orb2: 'from-cyan-300/40',
    },
  };

  const colorScheme = colors[variant];

  return (
    <>
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.primary}`} />

      {/* Floating Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-20 right-[10%] w-[500px] h-[500px] bg-gradient-radial ${colorScheme.orb1} to-transparent rounded-full blur-3xl`}
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute bottom-20 left-[15%] w-[400px] h-[400px] bg-gradient-radial ${colorScheme.orb2} to-transparent rounded-full blur-3xl`}
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-gradient-radial from-blue-200/20 to-transparent rounded-full blur-3xl`}
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #0891b2 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
    </>
  );
}

export default AnimatedBackground;
