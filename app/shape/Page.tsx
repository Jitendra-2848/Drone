
"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Page = () => {
    const Box = useRef<HTMLCanvasElement | null>(null);
    const [loadProgress, setLoadProgress] = useState(0);
    const [loadError, setLoadError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const canvas = Box.current;
        const container = canvas?.parentElement;
        if (!canvas || !container) return;
        let disposed = false;

        const loadingManager = new THREE.LoadingManager();
        loadingManager.onProgress = (_url, loaded, total) => {
            if (!disposed) setLoadProgress(Math.round((loaded / total) * 100));
        };
        loadingManager.onLoad = () => {
            if (disposed) return;
            setLoadProgress(100);
            setIsLoading(false);
        };
        loadingManager.onError = (url) => {
            console.error(`Failed to load model asset: ${url}`);
            if (!disposed) setLoadError("Some model assets failed to load.");
        };

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
            color: "#fff"
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

        const textureLoader = new THREE.TextureLoader(loadingManager);
        const texturePath = "/adamHead/Assets/Models/PBR/Adam/Textures";
        const headTexture = textureLoader.load(
            `${texturePath}/Adam_Head_a.jpg`,
            undefined,
            undefined,
            (error) => console.error("Failed to load the Adam head texture:", error)
        );
        const torsoTexture = textureLoader.load(
            `${texturePath}/Adam_Torso_a.jpg`,
            undefined,
            undefined,
            (error) => console.error("Failed to load the Adam torso texture:", error)
        );
        const maskTexture = textureLoader.load(
            `${texturePath}/Mask/Adam_mask_intact_a.jpg`,
            undefined,
            undefined,
            (error) => console.error("Failed to load the Adam mask texture:", error)
        );

        [headTexture, torsoTexture, maskTexture].forEach((texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;
        });

        const model = new GLTFLoader(loadingManager);
        model.load(
            "/adamHead/adamHead.gltf",
            (gltf) => {
                if (disposed) return;
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
                                } else if (materialName.includes("torso")) {
                                    meshMaterial.map = torsoTexture;
                                } else if (materialName.includes("mask")) {
                                    meshMaterial.map = maskTexture;
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
                console.error("Failed to load the Adam head model:", error);
                if (!disposed) setLoadError("The Adam model failed to load.");
            }
        );

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 2);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 4);

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
            antialias: window.devicePixelRatio <= 1.5
        });

        renderer.setSize(size.width, size.height, false);
        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 1.5)
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


        let animationId: number | null = null;
        let isInViewport = false;

        function animate() {
            if (!isInViewport || document.hidden) {
                animationId = null;
                return;
            }

            controls.update();
            renderer.render(scene, camera);
            animationId = requestAnimationFrame(animate);
        }

        const visibilityObserver = new IntersectionObserver(([entry]) => {
            isInViewport = entry.isIntersecting;
            if (isInViewport && animationId === null && !document.hidden) {
                animationId = requestAnimationFrame(animate);
            } else if (!isInViewport && animationId !== null) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
        });
        visibilityObserver.observe(container);

        const handleVisibilityChange = () => {
            if (document.hidden && animationId !== null) {
                cancelAnimationFrame(animationId);
                animationId = null;
            } else if (!document.hidden && isInViewport && animationId === null) {
                animationId = requestAnimationFrame(animate);
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);

        // Cleanup
        return () => {
            disposed = true;
            if (animationId !== null) cancelAnimationFrame(animationId);

            controls.dispose();
            resizeObserver.disconnect();
            visibilityObserver.disconnect();
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            gui.destroy();

            headTexture.dispose();
            torsoTexture.dispose();
            maskTexture.dispose();
            renderer.dispose();
        };

    }, []);

    return (
        <div className="relative h-full w-full">
            <canvas
                ref={Box}
                className="w-full h-full block"
            />
            {isLoading && !loadError && (
                <div
                    aria-live="polite"
                    className="pointer-events-none absolute inset-0 z-5 flex items-center justify-center bg-slate-950/80 p-6 text-center text-sm text-slate-200"
                >
                    <div className="w-full max-w-xs">
                        <p>Loading Adam model... {loadProgress}%</p>
                        <div
                            className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-700"
                            role="progressbar"
                            aria-label="Adam model loading progress"
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={loadProgress}
                        >
                            <div
                                className="h-full rounded-full bg-cyan-400 transition-[width]"
                                style={{ width: `${loadProgress}%` }}
                            />
                        </div>
                    </div>
                </div>
            )}
            {loadError && (
                <div
                    aria-live="assertive"
                    className="pointer-events-none absolute inset-0 z-5 flex items-center justify-center bg-slate-950/90 p-6 text-center text-sm text-red-200"
                >
                    {loadError}
                </div>
            )}
        </div>
    );
};

export default Page;
