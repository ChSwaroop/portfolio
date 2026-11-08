import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const CursorFollower = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  // Dot tracks the pointer exactly; ring lags behind via a spring.
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.6 });

  useEffect(() => {
    // Only enable on devices with a precise pointer (skip touch screens).
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.body.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setHovering(
        !!target?.closest(
          'a, button, [role="button"], input, textarea, select',
        ),
      );
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
      document.body.classList.remove("custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Trailing ring */}
      <motion.div
        className="fixed left-0 top-0 -ml-4 -mt-4"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="h-8 w-8 rounded-full border border-primary/70"
          animate={{ scale: hovering ? 1.6 : 1, opacity: hovering ? 0.6 : 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Center dot */}
      <motion.div className="fixed left-0 top-0 -ml-1 -mt-1" style={{ x, y }}>
        <motion.div
          className="h-2 w-2 rounded-full bg-primary"
          animate={{ scale: hovering ? 0.5 : 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </div>
  );
};

export default CursorFollower;
