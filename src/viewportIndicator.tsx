// ViewportIndicator.tsx
import React, { useEffect, useState } from 'react';

const getViewportLabel = (width: number): string => {
  if (width < 576) return 'XS';
  if (width < 768) return 'SM';
  if (width < 992) return 'MD';
  if (width < 1200) return 'LG';
  if (width < 1400) return 'XL';
  return 'XXL';
};

const getBootstrapContainerWidth = (label: string): number => {
  switch (label) {
    case 'XS':
    case 'SM':
      return 540;
    case 'MD':
      return 720;
    case 'LG':
      return 960;
    case 'XL':
      return 1140;
    case 'XXL':
      return 1320;
    default:
      return 540;
  }
};

const ViewportIndicator: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showContainer, setShowContainer] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const label = getViewportLabel(width);
  const containerWidth = getBootstrapContainerWidth(label);

  return (
    <>
      <div style={styles.indicator} onClick={() => setShowContainer(!showContainer)}>
        Viewport: {label} – {width}px
      </div>

      {showContainer && (
        <div style={{ ...styles.container, width: containerWidth }}>
          Bootstrap-Container ({label}) – {containerWidth}px
        </div>
      )}
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  indicator: {
    position: 'fixed',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: '14px',
    zIndex: 9999,
    fontFamily: 'sans-serif',
    cursor: 'pointer',
  },
  container: {
    position: 'fixed',
    bottom: 50,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 123, 255, 0.7)',
    color: 'white',
    padding: '10px',
    height: '90%',
    borderRadius: '4px',
    fontSize: '14px',
    zIndex: 9998,
    textAlign: 'center',
  },
};

export default ViewportIndicator;
