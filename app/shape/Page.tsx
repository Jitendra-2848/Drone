
"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";

const Page = () => {
    const Box = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = Box.current;
        if (!canvas) return;

        const gui = new GUI({
            title: "Settings",
            autoPlace: true
        });

        const Data = {
            color: "#ffffff"
        };

        const Material = {
            color: "#ffffff",
            roughness: 1,
            metalness: 0,
            wireframe: false
        };

        const size = {
            width: canvas.clientWidth || window.innerWidth,
            height: canvas.clientHeight || window.innerHeight
        };

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(Data.color);

        // Geometry
        const geometry = new THREE.BoxGeometry(1, 2, 3,128, 128, 128);

        // Texture Loader
        const textureLoader = new THREE.TextureLoader();

        const texture = textureLoader.load(
            "/1.jpg",
            () => {
                console.log("Texture Loaded");
            },
            undefined,
            (error) => {
                console.log("Error loading texture:", error);
            }
        );

        texture.colorSpace = THREE.SRGBColorSpace;

        // Material
        const material = new THREE.MeshStandardMaterial({
            map: texture,
            color: Material.color,
            displacementMap: texture,
            displacementScale: 0.1,
            roughness: Material.roughness,
            metalness: Material.metalness,
            wireframe: Material.wireframe
        });

        // Cube
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);

        const directionalLight = new THREE.DirectionalLight(
            0xffffff,
            3
        );

        directionalLight.position.set(2, 4, 5);

        scene.add(ambientLight, directionalLight);

        // Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            size.width / size.height,
            0.1,
            100
        );

        camera.position.set(4, 3, 6);
        camera.lookAt(0, 0, 0);

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true
        });

        renderer.setSize(size.width, size.height);
        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 2)
        );

        // Orbit Controls
        const controls = new OrbitControls(
            camera,
            renderer.domElement
        );

        controls.enableDamping = true;

        // GUI Folders
        const positionFolder = gui.addFolder("Position");
        const MCFolder = gui.addFolder("Material and Color");
        const lightFolder = gui.addFolder("Lighting");

        // Position Controls
        positionFolder
            .add(cube.position, "x")
            .min(-3).max(3).step(0.1).name("X");

        positionFolder
            .add(cube.position, "y")
            .min(-3).max(3).step(0.1).name("Y");

        positionFolder
            .add(cube.position, "z")
            .min(-3).max(3).step(0.1).name("Z");

        positionFolder.add(cube, "visible").name("Visibility");

        // Material Controls
        MCFolder.add(material, "wireframe").name("Wireframe");

        MCFolder.add(Material, "roughness", 0, 1, 0.01)
            .name("Roughness")
            .onChange((value: number) => {
                material.roughness = value;
            });

        MCFolder.add(Material, "metalness", 0, 1, 0.01)
            .name("Metalness")
            .onChange((value: number) => {
                material.metalness = value;
            });

        MCFolder.addColor(Data, "color")
            .name("Background Color")
            .onChange((value: string) => {
                scene.background = new THREE.Color(value);
            });

        MCFolder.addColor(Material, "color")
            .name("Material Color")
            .onChange((value: string) => {
                material.color.set(value);
            });

        // Lighting Controls
        lightFolder
            .add(ambientLight, "intensity")
            .min(0).max(5).step(0.1)
            .name("Ambient Light");

        lightFolder
            .add(directionalLight, "intensity")
            .min(0).max(10).step(0.1)
            .name("Directional Light");

        // Animation
        let animationId: number;

        function animate() {
            animationId = requestAnimationFrame(animate);

            controls.update();

            renderer.render(scene, camera);
        }

        animate();

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId);

            controls.dispose();
            gui.destroy();

            geometry.dispose();
            material.dispose();
            texture.dispose();

            renderer.dispose();
        };

    }, []);

    return (
        <div className="w-full h-screen">
            <canvas
                ref={Box}
                className="w-full h-full block"
            />
        </div>
    );
};

export default Page;
