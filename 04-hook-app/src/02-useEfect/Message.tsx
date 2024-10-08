import { useEffect, useState } from "react";

type Coords = {
  x: number;
  y: number;
};

export const Message = () => {
  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <h3 className="font-bold">
        User <span className="font-normal">already exists</span>
      </h3>
      {JSON.stringify(coords)}
    </div>
  );
};
