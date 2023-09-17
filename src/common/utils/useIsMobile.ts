import { useEffect, useState } from "react";

/**
 * Detects screen size.
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Use useEffect to detect screen width and set isMobile accordingly
  // extra caution for a case where the user is manually changing the screen size.
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Fire manually to detect size at first load
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile
}