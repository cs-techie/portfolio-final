import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Interactive3DChessPiece = () => {
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
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // CHESS PIECE GEOMETRY (ELEGANT SCULPTURAL LATHE & HEAD EXTRUSION)
    const chessGroup = new THREE.Group();

    // Base & Body Profile (Lathe Geometry)
    const points = [];
    // Base ring
    points.push(new THREE.Vector2(0, -4.5));
    points.push(new THREE.Vector2(2.4, -4.5));
    points.push(new THREE.Vector2(2.4, -4.2));
    points.push(new THREE.Vector2(2.1, -4.0));
    points.push(new THREE.Vector2(2.2, -3.7));
    points.push(new THREE.Vector2(1.8, -3.2));
    points.push(new THREE.Vector2(1.6, -2.5));
    // Mid Stem
    points.push(new THREE.Vector2(1.2, -1.2));
    points.push(new THREE.Vector2(1.0, 0.2));
    points.push(new THREE.Vector2(1.15, 0.8));
    points.push(new THREE.Vector2(1.4, 1.2));
    // Neck Ring
    points.push(new THREE.Vector2(1.4, 1.5));
    points.push(new THREE.Vector2(1.1, 1.7));
    points.push(new THREE.Vector2(1.2, 2.0));
    // Crown Base
    points.push(new THREE.Vector2(1.5, 2.3));
    points.push(new THREE.Vector2(1.4, 2.9));
    points.push(new THREE.Vector2(1.2, 3.4));
    points.push(new THREE.Vector2(0.9, 3.7));
    points.push(new THREE.Vector2(0.6, 4.0));
    points.push(new THREE.Vector2(0, 4.1));

    const bodyGeo = new THREE.LatheGeometry(points, 48);

    // Studio Metallic/Dark Obsidian Material
    const material = new THREE.MeshStandardMaterial({
      color: 0x1f1f24,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: false,
    });

    const bodyMesh = new THREE.Mesh(bodyGeo, material);
    chessGroup.add(bodyMesh);

    // Cross / Finial Top Piece
    const crossGeo = new THREE.BoxGeometry(0.35, 1.2, 0.35);
    const crossCross = new THREE.BoxGeometry(0.9, 0.35, 0.35);
    const crossMesh1 = new THREE.Mesh(crossGeo, material);
    const crossMesh2 = new THREE.Mesh(crossCross, material);
    crossMesh1.position.y = 4.7;
    crossMesh2.position.y = 4.9;
    chessGroup.add(crossMesh1);
    chessGroup.add(crossMesh2);

    // Decorative Geometric Rings
    const ringGeo = new THREE.TorusGeometry(1.65, 0.08, 16, 64);
    const ringMesh = new THREE.Mesh(ringGeo, material);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = -2.8;
    chessGroup.add(ringMesh);

    scene.add(chessGroup);

    // STUDIO LIGHTING SETUP
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Main Studio Key Light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(10, 15, 12);
    scene.add(keyLight);

    // Rim Light (Sharp Specular Highlight)
    const rimLight = new THREE.DirectionalLight(0xffffff, 3.0);
    rimLight.position.set(-12, 10, -10);
    scene.add(rimLight);

    // Soft Blue Bottom Fill Light
    const fillLight = new THREE.PointLight(0x88bbff, 1.5, 30);
    fillLight.position.set(0, -8, 8);
    scene.add(fillLight);

    // MOUSE & SCROLL TRACKING FOR FLUID PARALLAX MOVEMENT
    let targetX = 0;
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

      // Translate 3D chess piece horizontally left <-> right along scroll
      // Starts right (+4.5), moves left (-4.5), and weaves smoothly
      targetX = 5.5 - scrollFraction * 11.0;
      targetY = Math.sin(scrollFraction * Math.PI * 3) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position call

    // ANIMATION LOOP
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth Lerp Rotations & Positions
      chessGroup.rotation.y += (elapsedTime * 0.3 + targetRotY - chessGroup.rotation.y) * 0.05;
      chessGroup.rotation.x += (targetRotX - chessGroup.rotation.x) * 0.05;

      chessGroup.position.x += (targetX - chessGroup.position.x) * 0.06;
      chessGroup.position.y += (targetY - chessGroup.position.y) * 0.06;

      // Subtle float animation
      chessGroup.position.y += Math.sin(elapsedTime * 1.5) * 0.003;

      renderer.render(scene, camera);
    };
    animate();

    // RESIZE HANDLER
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // CLEANUP
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      bodyGeo.dispose();
      material.dispose();
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
        zIndex: 0,
        opacity: 0.85,
      }}
    />
  );
};

export default Interactive3DChessPiece;
