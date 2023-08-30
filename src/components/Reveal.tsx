import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  axis?: "x" | "y";
  changeDirection?: boolean;
  className?: "w-fit" | string;
};

export const Reveal = ({
  children,
  delay = 0,
  axis = "y",
  changeDirection = false,
  className = "w-fit",
}: RevealProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <motion.div
      className={className}
      ref={ref}
      variants={{
        hidden: { opacity: 0, [axis]: changeDirection ? -100 : 100 },
        visible: { opacity: 1, [axis]: 0 },
      }}
      initial="hidden"
      animate={animation}
      transition={{ duration: 0.25, delay }}
    >
      {children}
    </motion.div>
  );
};
