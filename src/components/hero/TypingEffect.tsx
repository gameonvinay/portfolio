import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === text) {
        setIsDeleting(true);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        setDisplayedText(
          isDeleting
            ? text.substring(0, displayedText.length - 1)
            : text.substring(0, displayedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, loopNum]);

  return (
    <div className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[2px] h-6 bg-primary ml-1 align-middle"
      />
    </div>
  );
};

export default TypingEffect;
