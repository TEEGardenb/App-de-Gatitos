import { useState, useEffect } from "react";

export const useCat = () => {
  const [fact, setFact] = useState();
  const [catImg, setCatImg] = useState("");
  const [loading, setLoading] = useState(true);

  const getFact = async () => {
    const randomFact = "https://catfact.ninja/fact";
    const imgRandoms = `https://cataas.com/cat/says/hello?${Date.now()}`;

    try {
      const res = await fetch(randomFact);
      const data = await res.json();
      const result = data.fact;
      setFact(result);
      setCatImg(imgRandoms);
    } catch (err) {
      console.error("Error al cargar datos", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFact();
  }, []);

  return { fact, loading, catImg, getFact };
};
