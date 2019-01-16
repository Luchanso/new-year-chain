import React from 'react';
import styled from 'styled-components';
import * as THREE from 'three';

let camera;
let scene;
let renderer;
let geometry;
let material;
let point;

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function init(canvasElement) {
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight);
  camera.position.z = 100;

  scene = new THREE.Scene();

  geometry = new THREE.CircleGeometry(1, 16);
  geometry.vertices.push(new THREE.Vector3(0, 0, 0));

  material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  point = new THREE.Mesh(geometry, material);
  scene.add(point);

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    canvas: canvasElement,
    antialias: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.setClearColor(0x000000, 0.0);
  renderer.setSize(window.innerWidth, window.innerHeight);

  window.addEventListener('resize', onWindowResize, false);
}

function animate() {
  window.requestAnimationFrame(animate);
  // mesh.rotation.x += 0.01;
  // mesh.rotation.y += 0.02;
  renderer.render(scene, camera);
}

const Canvas = styled.canvas`
  position: absolute;
`;

class Background extends React.Component {
  node = React.createRef();

  async componentDidMount() {
    try {
      // loading shader
      // const response = await fetch(shaderUrl);
      // const shaderData = await response.text();
      init(this.node.current);
      animate();
    } catch {
      /* error */
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <Canvas ref={this.node} />;
  }
}

export default Background;
