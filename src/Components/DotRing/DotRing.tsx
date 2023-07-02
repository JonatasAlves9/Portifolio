import "./DotRing.css";
import useMousePosition from "../../hooks/useMousePositionCustom";

const DotRing = () => {
    // 1.
  const { x, y } = useMousePosition();
  return (
    <>
            {/* 2. */}
    
            {/* 3. */}
      <div
        className="dot"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;