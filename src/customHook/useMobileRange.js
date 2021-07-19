import { useEffect, useState } from "react";

const useMobileRange = () => {
  const [screenWidth, setScreenWidth] = useState(null);
  const [mobileRange, setMobileRange] = useState(false);
  useEffect(() => {
    //console.log("entro");
    const actualizacionTamañoPantalla = () => {
      const width = document.body.clientWidth;

      if (width < 992) {
        setMobileRange(true);
      } else {
        setMobileRange(false);
      }
      setScreenWidth(width);
    };
    // Actualizaremos el width al montar el componente
    actualizacionTamañoPantalla();

    // Nos suscribimos al evento resize() de window
    window.addEventListener("resize", actualizacionTamañoPantalla);
    return () => {
      window.removeEventListener("resize", actualizacionTamañoPantalla);
    };
  }, []);

  return mobileRange;
};

export default useMobileRange;
