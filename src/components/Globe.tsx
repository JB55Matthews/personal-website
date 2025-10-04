import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "../styles/Globe.css";

const Globe: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Clear previous globe if React re-renders
    mountRef.current.innerHTML = "";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3; // keep camera fixed

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Create ships
    const ships: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const shipGeom = new THREE.SphereGeometry(0.05, 8, 8);
      const shipMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const ship = new THREE.Mesh(shipGeom, shipMat);
      ships.push(ship);
      scene.add(ship);
    }

    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      globe.rotation.y += 0.002;

      ships.forEach((ship, i) => {
        const baseAngle = frame * 0.01 + i * (Math.PI * 2 / ships.length);

        // Shrink orbits slightly on small screens
        const radiusMultiplier =
          mountRef.current!.clientWidth < 400 ? 1.0 : 1.0; // keep safe
        const verticalOffset = 0.5; // fixed so ships don’t leave view

        switch (i % 3) {
          case 0:
            ship.position.set(
              Math.cos(baseAngle) * 1.3 * radiusMultiplier,
              Math.sin(baseAngle * 0.5) * verticalOffset,
              Math.sin(baseAngle) * 1.3 * radiusMultiplier
            );
            break;
          case 1:
            ship.position.set(
              Math.cos(-baseAngle) * 1.1 * radiusMultiplier,
              Math.sin(-baseAngle * 0.7) * (verticalOffset - 0.1),
              Math.sin(-baseAngle) * 1.1 * radiusMultiplier
            );
            break;
          case 2:
            ship.position.set(
              Math.cos(baseAngle) * 1.4 * radiusMultiplier,
              Math.sin(baseAngle * 0.3) * (verticalOffset + 0.1),
              Math.sin(-baseAngle) * 1.4 * radiusMultiplier
            );
            break;
        }
      });

      frame++;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return <div className="globe-container" ref={mountRef}></div>;
};

export default Globe;
