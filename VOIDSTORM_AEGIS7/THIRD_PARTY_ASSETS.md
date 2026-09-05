# 素材来源与许可

本游戏沿用提供项目的玩法实现，角色仅 AEGIS-7；没有包含 Riot Games 的图标、模型、音效或代码。

## Three.js 0.160.0

- 作者：Three.js contributors。
- 上游：https://github.com/mrdoob/three.js/tree/r160
- 使用：Three.js、GLTFLoader、SkeletonUtils、BufferGeometryUtils、RoundedBoxGeometry。
- 许可：MIT，完整文本见 `licenses/THREE-MIT.txt`。
- 锁定版本的本地源码在 `vendor/three/`，运行时已打包进 `game.bundle.js`。

## 保留的备用 Quaternius 模型 — CC0 1.0

| 本地文件 | 原始模型 | 原始页面 | 用途 |
|---|---|---|---|
| hero.gltf | Mech_FinnTheFrog | https://quaternius.com/packs/ultimatespacekit.html | AEGIS-7 |
| drone.glb | Robot Enemy Flying | https://poly.pizza/m/lF3jeRJwiH | 敌方飞行器、友方无人机 |
| gunner.glb | Animated Robot | https://poly.pizza/m/QCm7qe9uNJ | 枪兵、重装敌人 |
| alien.glb | Alien | https://poly.pizza/m/sUTLXji0aL | 异兽 |
| boss.glb | Robot Enemy Large Gun | https://poly.pizza/m/mWojM4i2IH | OMEGA |
| crate.glb | Scifi Crate | https://poly.pizza/m/bPeXlVjwCH | 场景补给箱 |
| container.glb | Scifi Container | https://poly.pizza/m/22FBVK7m9c | 场景设备 |

- 作者：Quaternius。
- 下载镜像：https://github.com/danvanderboom/Aetherium/tree/main/samples/unity/Aphelion/Assets/ThirdParty/Quaternius
- 原项目来源记录保存在 `licenses/Quaternius-provenance.md`。
- 原始许可文件保存在 `licenses/Quaternius-CC0.txt`。上游文件标题误写 Ultimate Platformer Pack；其 CC0 正文与 Ultimate Space Kit 的许可一致，来源记录也对此作了说明。
- 本次下载地址保存在 `licenses/download-sources.json`，文件哈希在 `licenses/SHA256SUMS.txt`。
- 调整：游戏内统一模型真实尺寸、冷暖阵营着色、加入识别圈与备用体。原模型文件未修改。
- 主游戏优先使用本次原创机体；上表是保留的开源备用素材。原始模型在 `assets/models/`，同样内容嵌入 `assets/models.js`，使 file:// 离线运行无需 fetch。

## 本次原创部分

src/actors.js 中的新机甲、敌人、无人机、步枪与 Boss，src/world.js 中的地图设施，以及零界守望界面、战场标线、技能卡视觉、程序战斗特效、Web Audio 合成声音，均为本次原创制作，不使用第三方图片、字体或音频。主界面展示的是实际 Three.js 模型，而非宣传效果图。保留的代码备用模型仅用于资源失败时。

## 打包工具

esbuild 0.25.9（MIT）仅用于开发构建，不是运行依赖。上游 https://github.com/evanw/esbuild/tree/v0.25.9 。

## v5 新增原创资源

src/icons.js 的 30 个功能性矢量图标、进化进度条、棱镜屏障、分层弹芯与尾迹、天罚阵列和 Boss 预警几何均由本项目直接制作；无新增下载素材、字体、音乐或第三方依赖。上述图标不是 Riot Games 资产。已有 Three.js MIT 与 Quaternius CC0 许可证及来源记录完整保留。
