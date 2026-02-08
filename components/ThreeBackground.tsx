"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : (theme ?? "light");
  const isDark = currentTheme === "dark";
  // Use muted colors and reduced glow in dark mode so the pink name remains readable
  const mainColor = isDark ? 0xa06080 : 0x00d4ff;
  const glowColor = isDark ? 0x3f1b2a : 0x00d4ff;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 15;

    // Create infinity symbol curve (typed)
    class InfinityCurve extends THREE.Curve<THREE.Vector3> {
      constructor() {
        super();
      }

      getPoint(t: number, optionalTarget = new THREE.Vector3()): THREE.Vector3 {
        const angle = t * 2 * Math.PI;
        const scale = 4;
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);
        const denom = 1 + sin * sin;
        const x = (scale * cos) / denom;
        const y = (scale * sin * cos) / denom;
        return optionalTarget.set(x, y, 0);
      }
    }

    const infinityCurve = new InfinityCurve();

    // Keep only flowing particles along the infinity path (green)

    // Create particles flowing along infinity path
    const particles: THREE.Mesh[] = [];
    const particleCount = 50;
    const particleGeometry = new THREE.SphereGeometry(0.15, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffaa,
      transparent: true,
      opacity: 0.9,
    });

    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      (particle.userData as { t: number; speed: number }).t = i / particleCount;
      (particle.userData as { t: number; speed: number }).speed =
        0.0008 + Math.random() * 0.0015;
      scene.add(particle);
      particles.push(particle);
    }

    // Add ambient particles in background
    const bgParticles: THREE.Mesh[] = [];
    const bgParticleCount = 100;
    const bgParticleGeometry = new THREE.SphereGeometry(0.08, 8, 8);
    const bgParticleMaterial = new THREE.MeshBasicMaterial({
      color: 0x4a90e2,
      transparent: true,
      opacity: 0.4,
    });

    for (let i = 0; i < bgParticleCount; i++) {
      const bgParticle = new THREE.Mesh(bgParticleGeometry, bgParticleMaterial);

      bgParticle.position.x = (Math.random() - 0.5) * 30;
      bgParticle.position.y = (Math.random() - 0.5) * 30;
      bgParticle.position.z = (Math.random() - 0.5) * 20 - 5;

      (bgParticle.userData as { velocity: THREE.Vector3 }).velocity =
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01,
        );

      scene.add(bgParticle);
      bgParticles.push(bgParticle);
    }

    // Lighting
    const ambient = new THREE.AmbientLight(
      isDark ? 0x203040 : 0xffffff,
      isDark ? 0.6 : 0.8,
    );
    scene.add(ambient);
    const keyLight = new THREE.PointLight(
      isDark ? 0xff88ff : 0xffffff,
      isDark ? 0.9 : 0.8,
      60,
    );
    keyLight.position.set(10, 15, 10);
    scene.add(keyLight);

    // (Removed tube, outer glow, and subtle curve point meshes)

    // Animation
    function animate() {
      requestAnimationFrame(animate);

      // Gentle subtle global movement (particles provide the shape)

      // Move particles along infinity path
      particles.forEach((particle) => {
        const data = particle.userData as { t: number; speed: number };
        data.t += data.speed;
        if (data.t > 1) data.t = 0;

        const point = infinityCurve.getPoint(data.t);
        particle.position.copy(point);
        particle.rotation.y += 0.05;
      });

      // Animate background particles
      bgParticles.forEach((bgParticle) => {
        const data = bgParticle.userData as { velocity: THREE.Vector3 };
        bgParticle.position.add(data.velocity);

        (["x", "y"] as const).forEach((axis) => {
          if (Math.abs(bgParticle.position[axis]) > 15) {
            data.velocity[axis] *= -1;
          }
        });

        if (Math.abs(bgParticle.position.z) > 10) {
          data.velocity.z *= -1;
        }
      });

      // Gentle camera movement
      camera.position.x = Math.sin(Date.now() * 0.0002) * 2;
      camera.position.y = Math.cos(Date.now() * 0.0003) * 1;
      camera.lookAt(scene.position);

      // animate mount background (subtle shimmer)
      if (mountRef.current) {
        const t = Date.now() * 0.00008;
        const offset = 50 + Math.sin(t) * 12; // 38..62
        if (isDark) {
          mountRef.current.style.background = `linear-gradient(135deg, #0a0e27 0%, #1a1a3e ${offset}%, #0f1729 100%)`;
        } else {
          mountRef.current.style.background = `linear-gradient(135deg, var(--letters1) 0%, white ${offset}%, var(--letters1) 100%)`;
        }
      }

      renderer.render(scene, camera);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (
        mountRef.current &&
        renderer.domElement.parentElement === mountRef.current
      ) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      bgParticleGeometry.dispose();
      bgParticleMaterial.dispose();
    };
  }, [mounted, isDark, mainColor, glowColor]);

  // Don't render anything on server to avoid hydration mismatch
  if (!mounted) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background: "transparent",
        }}
      />
    );
  }

  const backgroundStyle = isDark
    ? "linear-gradient(135deg, #0a0e27 0%, #1a1a3e 50%, #0f1729 100%)"
    : "linear-gradient(135deg, var(--letters1) 0%, white 50%, var(--letters1) 100%)";

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: backgroundStyle,
      }}
    />
  );
}
