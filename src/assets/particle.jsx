import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
         background: {
    color: { value: "#0d1117" }  
  },
  particles:{
          number: { value: 160 },
    color: { value: "#ffffff" },
    move: { direction: "right", speed: 0.05 },
    size: { value: 1 },
    opacity: {
      value: { min: 0.05, max: 0.5 },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.05,
        sync: false       
      },
    },
  },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;