
"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Page2 = () => {
    const Box = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = Box.current;
        const container = canvas?.parentElement;
        if (!canvas || !container) return;

        const gui = new GUI({
            title: "Settings",
            container
        });
        gui.domElement.classList.add(
            "absolute",
            "right-3",
            "top-3",
            "z-10",
            "max-h-[85%]",
            "overflow-y-auto"
        );

        const Data = {
            color: "#ffd"
        };

        const Material = {
            color: "#ffffff",
            roughness: 1,
            metalness: 0,
            wireframe: false
        };

        const size = {
            width: container.clientWidth || window.innerWidth,
            height: container.clientHeight || window.innerHeight
        };

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(Data.color);

        const textureLoader = new THREE.TextureLoader();
        const texturePath = "/lieutenantHead/Assets/Models/PBR/lieutenantHead/Textures";
        const headTexture = textureLoader.load(
            `${texturePath}/Lieutenant_head_diffuse.jpg`,
            undefined,
            undefined,
            (error) => console.error("Failed to load the Lieutenant head texture:", error)
        );
        const bodyTexture = textureLoader.load(
            `${texturePath}/Lieutenant_Body_diffuse.jpg`,
            undefined,
            undefined,
            (error) => console.error("Failed to load the Lieutenant body texture:", error)
        );
        const jacketTexture = textureLoader.load(
            `${texturePath}/Lieutenant_jacket_diffuse.jpg`,
            undefined,
            undefined,
            (error) => console.error("Failed to load the Lieutenant jacket texture:", error)
        );

        [headTexture, bodyTexture, jacketTexture].forEach((texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;
        });

        const model = new GLTFLoader();
        model.load(
            "/lieutenantHead/lieutenantHead.gltf",
            (gltf) => {
                const cube = gltf.scene;
                const modelMaterials = new Set<THREE.MeshStandardMaterial>();

                cube.traverse((object) => {
                    if (object instanceof THREE.Mesh) {
                        const meshMaterials = Array.isArray(object.material)
                            ? object.material
                            : [object.material];

                        meshMaterials.forEach((meshMaterial) => {
                            if (meshMaterial instanceof THREE.MeshStandardMaterial) {
                                const materialName = meshMaterial.name.toLowerCase();
                                if (materialName.includes("head")) {
                                    meshMaterial.map = headTexture;
                                } else if (materialName.includes("body")) {
                                    meshMaterial.map = bodyTexture;
                                } else if (materialName.includes("jacket")) {
                                    meshMaterial.map = jacketTexture;
                                }
                                meshMaterial.roughness = 0.7;
                                meshMaterial.metalness = 0;
                                meshMaterial.needsUpdate = true;
                                modelMaterials.add(meshMaterial);
                            }
                        });
                    }
                });

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
                MCFolder.add(Material, "wireframe")
                    .name("Wireframe")
                    .onChange((value: boolean) => {
                        modelMaterials.forEach((meshMaterial) => {
                            meshMaterial.wireframe = value;
                        });
                    });

                MCFolder.add(Material, "roughness", 0, 1, 0.01)
                    .name("Roughness")
                    .onChange((value: number) => {
                        modelMaterials.forEach((meshMaterial) => {
                            meshMaterial.roughness = value;
                        });
                    });

                MCFolder.add(Material, "metalness", 0, 1, 0.01)
                    .name("Metalness")
                    .onChange((value: number) => {
                        modelMaterials.forEach((meshMaterial) => {
                            meshMaterial.metalness = value;
                        });
                    });

                MCFolder.addColor(Data, "color")
                    .name("Background Color")
                    .onChange((value: string) => {
                        scene.background = new THREE.Color(value);
                    });

                MCFolder.addColor(Material, "color")
                    .name("Material Color")
                    .onChange((value: string) => {
                        modelMaterials.forEach((meshMaterial) => {
                            meshMaterial.color.set(value);
                        });
                    });

                // Lighting Controls
                lightFolder
                    .add(ambientLight, "intensity")
                    .min(0).max(5).step(0.1)
                    .name("Ambient Light");

                scene.add(cube);
            },
            undefined,
            (error) => {
                console.error("Failed to load the Lieutenant head model:", error);
            }
        );

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);

        directionalLight.position.set(3, 5, 5);
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

        renderer.setSize(size.width, size.height, false);
        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 2)
        );

        // Orbit Controls
        const controls = new OrbitControls(
            camera,
            renderer.domElement
        );

        controls.enableDamping = true;

        const resizeObserver = new ResizeObserver(() => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            if (!width || !height) return;

            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });
        resizeObserver.observe(container);

        // GUI Folders


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
            resizeObserver.disconnect();
            gui.destroy();

            renderer.dispose();
        };

    }, []);

    return (
        <div className="h-full w-full">
            <canvas
                ref={Box}
                className="w-full h-full block"
            />
        </div>
    );
};

export default Page2;
