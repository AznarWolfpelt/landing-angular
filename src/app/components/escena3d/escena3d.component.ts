import { 
  Component, Input, AfterViewInit, ElementRef, OnDestroy, ViewChild, HostListener, OnChanges, SimpleChanges 
} from '@angular/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-escena3d',
  templateUrl: './escena3d.component.html',
  styleUrls: ['./escena3d.component.css']
})
export class Escena3dComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() modeloUrl: string = '';
  
  @ViewChild('rendererContainer', { static: false })
  rendererContainer!: ElementRef<HTMLDivElement>;

  // Three.js
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private modelo: THREE.Object3D | null = null;
  private controls!: OrbitControls;

  // Animación
  private animationId: number | null = null;
  rotando = true;

  ngAfterViewInit(): void {
    this.initScene();
    this.startAnimation();
  }

  ngOnDestroy(): void {
    this.stopAnimation();
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['modeloUrl'] && !changes['modeloUrl'].firstChange) {
      console.log('🔍 Modelo URL cambiado:', this.modeloUrl);
      this.cargarModelo();
    }
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    if (!this.camera || !this.renderer || !this.rendererContainer) return;

    const width = this.rendererContainer.nativeElement.clientWidth;
    const height = this.rendererContainer.nativeElement.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private initScene(): void {
    // 1. Escena
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x020617);

    // 2. Cámara - posición más neutral
    const width = this.rendererContainer.nativeElement.clientWidth;
    const height = this.rendererContainer.nativeElement.clientHeight;
    const aspectRatio = width / height;

    this.camera = new THREE.PerspectiveCamera(45, aspectRatio, 0.1, 1000);
    this.camera.position.set(3, 2, 3); // Posición más centrada

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.shadowMap.enabled = true;

    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // 4. Luces mejoradas
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const directional1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directional1.position.set(5, 5, 5);
    directional1.castShadow = true;
    this.scene.add(directional1);

    const directional2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directional2.position.set(-5, 3, -5);
    directional2.castShadow = true;
    this.scene.add(directional2);

    // 5. Piso mejorado
    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const planeMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f2937,
      roughness: 0.7,
      metalness: 0.1
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1;
    plane.receiveShadow = true;
    this.scene.add(plane);

    // 6. OrbitControls con límites
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.rotateSpeed = 0.8;
    this.controls.zoomSpeed = 0.8;
    this.controls.minDistance = 1;
    this.controls.maxDistance = 10;
    this.controls.maxPolarAngle = Math.PI; // Permitir rotación completa

    // 7. Cargar modelo
    this.cargarModelo();

    this.renderer.render(this.scene, this.camera);
  }

  private cargarModelo(): void {
    if (!this.modeloUrl) {
      console.log('🔍 No hay modelo específico, cargando por defecto');
      this.cargarModeloPorDefecto();
      return;
    }

    const loader = new GLTFLoader();
    const rutaBase = '/assets/modelos/';
    const rutaCompleta = rutaBase + this.modeloUrl;
    
    console.log('🔍 Cargando modelo desde:', rutaCompleta);

    // Limpiar modelo anterior
    if (this.modelo) {
      this.scene.remove(this.modelo);
      this.modelo = null;
    }

    loader.load(
      rutaCompleta,
      (gltf) => {
        console.log('✅ Modelo cargado exitosamente:', this.modeloUrl);
        
        const model = gltf.scene;
        
        // ✅ NUEVO: Centrar y escalar automáticamente el modelo
        this.centrarYEscalarModelo(model);
        
        // Configurar sombras
        model.traverse((child: any) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        this.scene.add(model);
        this.modelo = model;
        
        // ✅ NUEVO: Ajustar controles para el nuevo modelo
        this.ajustarControlesParaModelo();
      },
      (progress) => {
        console.log(`📦 Cargando ${this.modeloUrl}: ${((progress.loaded / progress.total) * 100).toFixed(1)}%`);
      },
      (error) => {
        console.error('❌ Error al cargar modelo específico', this.modeloUrl, error);
        this.cargarModeloPorDefecto();
      }
    );
  }

  // ✅ NUEVO: Método para centrar y escalar automáticamente
  private centrarYEscalarModelo(model: THREE.Object3D): void {
    // Crear caja de límites para calcular tamaño
    const bbox = new THREE.Box3().setFromObject(model);
    const center = bbox.getCenter(new THREE.Vector3());
    const size = bbox.getSize(new THREE.Vector3());
    
    // Calcular la escala necesaria para normalizar el tamaño
    const maxDimension = Math.max(size.x, size.y, size.z);
    const escalaDeseada = 5.0; // Tamaño objetivo
    const escala = escalaDeseada / maxDimension;
    
    // Aplicar transformaciones
    model.scale.setScalar(escala);
    
    // Centrar el modelo
    model.position.set(-center.x * escala, -center.y * escala, -center.z * escala);
    
    console.log(`📐 Modelo escalado a: ${escala.toFixed(2)} (tamaño original: ${maxDimension.toFixed(2)})`);
  }

  // ✅ NUEVO: Ajustar controles para el modelo actual
  private ajustarControlesParaModelo(): void {
    if (!this.modelo) return;
    
    // Crear caja de límites del modelo escalado
    const bbox = new THREE.Box3().setFromObject(this.modelo);
    const size = bbox.getSize(new THREE.Vector3());
    const maxDimension = Math.max(size.x, size.y, size.z);
    
    // Ajustar límites de zoom basados en el tamaño del modelo
    this.controls.minDistance = maxDimension * 0.8;
    this.controls.maxDistance = maxDimension * 4;
    
    // Posicionar cámara a distancia adecuada
    const distanciaCamara = 3; // ← Valor fijo en lugar de calcularlo
    this.camera.position.set(distanciaCamara, distanciaCamara * 0.7, distanciaCamara);
    this.controls.update();
    
    console.log(`🎥 Cámara ajustada a distancia: ${distanciaCamara.toFixed(2)}`);
  }

  private cargarModeloPorDefecto(): void {
    console.log('🔄 Cargando modelo por defecto...');
    const loader = new GLTFLoader();
    
    // Limpiar modelo anterior
    if (this.modelo) {
      this.scene.remove(this.modelo);
      this.modelo = null;
    }

    loader.load(
      'assets/modelos/gaming_desktop_pc_blend_file.glb',
      (gltf) => {
        console.log('✅ Modelo por defecto cargado');
        const model = gltf.scene;
        
        // ✅ Aplicar el mismo centrado y escalado
        this.centrarYEscalarModelo(model);
        
        model.traverse((child: any) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        this.scene.add(model);
        this.modelo = model;
        
        this.ajustarControlesParaModelo();
      },
      undefined,
      (error) => {
        console.error('❌ Error incluso con modelo por defecto', error);
      }
    );
  }

  private startAnimation(): void {
    const animate = () => {
      this.animationId = requestAnimationFrame(animate);

      if (this.rotando && this.modelo) {
        this.modelo.rotation.y += 0.01; // Rotación más suave
      }

      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }

  private stopAnimation(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  toggleRotation(): void {
    this.rotando = !this.rotando;
  }

  cambiarColor(): void {
    if (!this.modelo) return;

    const randomColor = new THREE.Color(Math.random(), Math.random(), Math.random());

    this.modelo.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(m => (m as THREE.MeshStandardMaterial).color = randomColor);
        } else {
          (mesh.material as THREE.MeshStandardMaterial).color = randomColor;
        }
      }
    });
  }

  // ✅ NUEVO: Método para resetear la vista
  resetearVista(): void {
    if (this.modelo) {
      this.ajustarControlesParaModelo();
    }
  }
}