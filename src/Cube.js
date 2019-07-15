import React, { Component } from "react";
import { AR } from "expo";
import { GraphicsView } from "expo-graphics";
import ExpoTHREE, { THREE, AR as ThreeAR } from "expo-three";

class Cube extends Component {
  componentDidMount() {
    THREE.suppressExpoWarnings();
  }

  render() {
    return (
      <GraphicsView
        onContextCreate={this.onContextCreate}
        onRender={this.onRender}
      />
    );
  }

  onContextCreate = async ({
    gl,
    canvas,
    width,
    height,
    scale: pixelRatio
  }) => {
    this.renderer = new ExpoTHREE.Renderer({
      gl,
      pixelRatio,
      width,
      height
    });
    this.renderer.setClearColor(0xffffff);
    this.scene = new THREE.Scene();
    this.camera = THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    const geometry = new THREE.BoxGeometry(1, 1, 1);

    const material = new THREE.MeshPhongMaterial({
      color: 0xff0000
    });

    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
  };
}

export default Cube;
