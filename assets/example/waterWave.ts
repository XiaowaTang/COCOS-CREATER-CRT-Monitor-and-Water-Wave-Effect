import { _decorator, Component, SpriteFrame, Sprite, Material } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('WaterWave')
@executeInEditMode
export default class WaterWave extends Component {
    @property(SpriteFrame)
    map: SpriteFrame | null = null;
    // @property
    bluramount: number = 0.03;
    img: Sprite | null = null;
    material: Material | undefined | null = null;
    time: number = 0;
    startTime: number = Date.now();
    resolution = { x: 0.0, y: 0.0 };
    onLoad() {

        this.img = this.getComponent(Sprite);
        this.material = this.img?.sharedMaterial;
        console.log(this.material);
    }
    update() {
        this.time = (Date.now() - this.startTime) / 1000;
        this.material?.setProperty('u_time', this.time);

    }
}