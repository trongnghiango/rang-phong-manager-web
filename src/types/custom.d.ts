declare module "*.svg" {
  const content: any;
  
  export default content;
}

import { BaseEvent, EventDispatcher } from "three";

declare module "three/src/core/Object3D" {
  interface Object3D<E extends BaseEvent> extends EventDispatcher<E> {
    // This works fine...
    somethingElse: string;
    // However, this does not (see below)
    // Typescript will throw this error: 
    // Subsequent property declarations must have the same type.  Property 'userData' must be of type '{ [key: string]: any; }'
    material: THREE.Material;
    geometry: THREE.BufferGeometry;

  }
}

declare module "three/src/core/Material" {
  interface Object3D<E extends BaseEvent> extends EventDispatcher<E> {
    // This works fine...
    somethingElse: string;
    // However, this does not (see below)
    // Typescript will throw this error: 
    // Subsequent property declarations must have the same type.  Property 'userData' must be of type '{ [key: string]: any; }'
    material: THREE.Material;
    geometry: THREE.BufferGeometry;

  }
}
