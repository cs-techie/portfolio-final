import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Persistent3DVisual = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // PERSISTENT 3D SOFTWARE OBJECT (Glossy Black Monolith & Network Node Rings)
    const masterGroup = new THREE.Group();

    // High Gloss Black Obsidian Material with Rim Specular Reflection
    const obsidianMaterial = new THREE.MeshStandardMaterial({
      color: 0x08080a,
      metalness: 0.92,
      roughness: 0.15,
    });

    const wireMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.95,
      roughness: 0.1,
      wireframe: true,
    });

    // Central Monolith Core
    const coreGeo = new THREE.IcosahedronGeometry(2.8, 1);
    const coreMesh = new THREE.Mesh(coreGeo, obsidianMaterial);
    masterGroup.add(coreMesh);

    // Inner Wireframe Network Sphere
    const innerGeo = new THREE.IcosahedronGeometry(3.1, 2);
    const innerMesh = new THREE.Mesh(innerGeo, wireMaterial);
    masterGroup.add(innerMesh);

    // Concentric Orbiting Rings
    const ringGeo1 = new THREE.TorusGeometry(4.8, 0.06, 16, 100);
    const ringMesh1 = new THREE.Mesh(ringGeo1, obsidianMaterial);
    ringMesh1.rotation.x = Math.PI / 3;
    masterGroup.add(ringMesh1);

    const ringGeo2 = new THREE.TorusGeometry(6.2, 0.04, 16, 100);
    const ringMesh2 = new THREE.Mesh(ringGeo2, obsidianMaterial);
    ringMesh2.rotation.y = Math.PI / 4;
    masterGroup.add(ringMesh2);

    scene.add(masterGroup);

    // HIGH-CONTRAST STUDIO RIM LIGHTING SETUP
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Sharp White Top Key Light
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.5);
    keyLight.position.set(12, 18, 15);
    scene.add(keyLight);

    // Intense White Back Rim Light (Creates cinematic silhouette rim)
    const rimLight = new THREE.DirectionalLight(0xffffff, 5.0);
    rimLight.position.set(-15, 12, -15);
    scene.add(rimLight);

    // MOUSE & SCROLL TRACKING
    let targetX = 4.5;
    let targetY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotY = mouseX * 0.4;
      targetRotX = mouseY * 0.3;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = Math.min(Math.max(scrollY / (maxScroll || 1), 0), 1);

      // Translate 3D visual horizontally across sections grid
      // Starts right (+5.5), translates left (-5.5) across section views
      targetX = 5.5 - scrollFraction * 11.5;
      targetY = Math.sin(scrollFraction * Math.PI * 4) * 1.8;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ANIMATION LOOP
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous rotation
      masterGroup.rotation.y = elapsedTime * 0.25 + targetRotY;
      masterGroup.rotation.x = elapsedTime * 0.15 + targetRotX;
      ringMesh1.rotation.z = elapsedTime * 0.4;
      ringMesh2.rotation.z = -elapsedTime * 0.3;

      // Lerp position smooth translation
      masterGroup.position.x += (targetX - masterGroup.position.x) * 0.05;
      masterGroup.position.y += (targetY - masterGroup.position.y) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      obsidianMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.9,
      }}
    />
  );
};

export default Persistent3DVisual;
