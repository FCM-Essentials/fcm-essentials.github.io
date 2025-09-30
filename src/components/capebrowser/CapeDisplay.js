import { useEffect, useRef } from "react";
import * as THREE from "three";

function CapeDisplay({ textureUrl, width = 10, height = 16, depth = 1, azimuth = 0, elevation = 0 }) {
    const mountRef = useRef();

    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.set(0, 0, 40);
        camera.lookAt(0, height/2, 0);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);

        mount.appendChild(renderer.domElement);

        // Lighting
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(10, 20, 10);
        scene.add(light);

        // Geometry
        const geometry = new THREE.BoxGeometry(width, height, depth);

        const uvArray = [];

        let u0 = 1 / 64;
        let u1 = 11 / 64;
        let v0 = 1 - 1 / 32;   // top
        let v1 = 1 - 16 / 32;  // bottom

        for (let i = 0; i < 6; i++) {
            /*if (i === 3) {
                u0 = 12 / 64
                u1 = 21 / 64
                v0 = 1 - 1 / 32
                v1 = 1 - 16 / 32
                uvArray.push(u1, v0, u0, v1, u1, v0);
                uvArray.push(u0, v0, u1, v1, u0, v1);
                continue
            }*/
            uvArray.push(u1, v1, u0, v1, u0, v0);
            uvArray.push(u1, v1, u1, v0, u0, v0);
        }

        console.log(uvArray)


        geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvArray, 2));

        // Material
        const texture = new THREE.TextureLoader().load(textureUrl);
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;
        texture.generateMipmaps = false;
        texture.colorSpace = THREE.SRGBColorSpace;

        const material = new THREE.MeshPhongMaterial({ map: texture, side: THREE.DoubleSide });
        const cape = new THREE.Mesh(geometry, material);

        // Position origin at top so rotation looks natural
        cape.position.y = height/2;
        scene.add(cape);

        const ambient = new THREE.AmbientLight(0xffffff, 0.6); // soft fill light
        scene.add(ambient);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            cape.rotation.y = THREE.MathUtils.degToRad(azimuth);
            cape.rotation.x = THREE.MathUtils.degToRad(elevation);
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            mount.removeChild(renderer.domElement);
            geometry.dispose();
            material.dispose();
            texture.dispose();
        };
    }, [textureUrl, width, height, depth, azimuth, elevation]);

    return <div ref={mountRef} style={{ width: "400px", height: "400px" }} />;
}

export default CapeDisplay;
