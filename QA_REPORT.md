# VOIDSTORM v6 · 实际检查报告

日期：2026-09-07T06:38:53.674736+00:00。环境：macOS，Chrome 152.0.7977.77，Playwright。
桌面 1440×900；触屏模拟 390×844、844×390。

## 实测结果

**133 / 133 项通过。运行与控制台错误为 0。**

- qa-results.json：46 项通过。
- v6-results.json：52 项通过。
- v6-mobile-results.json：18 项通过。
- lifecycle-results.json：9 项通过。
- map-results.json：8 项通过。


- 全屏按钮与 F 实际切换 document.fullscreenElement；手机模拟实际点按；不支持 API 时出现提示，不伪装为全屏。
- 研究面板 10 条路线可操作；购买扣费、刷新保留、旧四项存档迁移、真实属性与 R 充能倍率通过。
- 满级属性连续 200 次不再出卡；实际连续选择 100 次未超过属性 Lv3 / 技能 Lv5 / 5 技能 / 6 属性限制；受控选择策略能完成五个技能进化。
- 即使再次触发旧属性卡回调，也不能从 Lv3 升到 Lv4。兼容旧高等级状态时，配方进度显示封顶为 3/3。
- 进化条件齐全时优先出进化卡；满属性槽时可置换不参与当前进化配方的属性。
- 三类首领均测试了三段连招、半血四段、恢复间隙、死亡取消攻击；经过实际 updateEnemies 调度执行。
- 重锤预警期间不伤害、圈外安全、三线反侧安全、风暴弹幕缺口可通行；半血核心过载特效生效。
- E/R 强化特效连续释放后 GPU 几何体恢复基线；敌人 120 次生成死亡后六轮清理保持基线 187。
- 600 秒加速关卡调度、三个精英阶段、最终首领、胜利结算和重开通过。
- 八种现役武器逐一验证实际特效与伤害；固定镜头、经验吸入、受击反馈、升级满血、移动输入与可视备用模型通过。
- file:// 离线入口零 HTTP(S) 请求；7 个备用 CC0 模型全部加载，原创角色可见。
- 手机研究面板、进化图谱、第三张卡滚动选择、横竖屏、Boss HUD 与控制按钮布局通过。

## 改动文件

src/game.js、index.html、game.bundle.js、package.json、README.md、THIRD_PARTY_ASSETS.md、QA_REPORT.md、tests/、QA/。
新增 src/fullscreen.js、src/v6.css、CHANGELOG_v6.md。原始地图、原创模型源码、开源资源与许可继续保留。

## 视觉验证

QA/screenshots 包含真实渲染截图：研究面板、进化卡、图谱、棱镜首领、手机风暴首领、技能特效、横屏卡片、地图总览。部分战斗截图使用受控状态快速展示高级内容；正常游戏镜头仍保持固定高度与角度。

## 验证边界

- Windows、iPhone Safari、Android 真机未现场验证；触屏模拟不等同全部设备验收。
- 全屏依赖浏览器支持与权限，iPhone 浏览器可能不能原生进入页面全屏；界面会说明。
- 100 次选卡与 600 秒关卡测试是受控/加速逻辑检查，不代表普通玩家一局必定五技能全部进化，也不代表人工完整通关或数值平衡验收。
- 低端手机帧率与温升未实测；没有承诺固定帧率。
- 当前交付本地完整 ZIP，之前的在线托管版本没有同步更新。

## 重跑

在项目根目录启动端口 8765 静态服务器，安装 Playwright、准备 Chrome 后运行 tests/qa.cjs、tests/evolution.cjs、tests/mobile.cjs、tests/lifecycle.cjs、tests/mapqa.cjs。结果写到 test-results/。仅 ?qa 入口暴露测试接口。

## 逐项记录

- PASS · 键盘实际移动
- PASS · 加载全部本地模型
- PASS · 暂停冻结游戏时钟
- PASS · 恢复任务
- PASS · drone 实际模型尺寸可见
- PASS · alien 实际模型尺寸可见
- PASS · gunner 实际模型尺寸可见
- PASS · boss 实际模型尺寸可见
- PASS · 镜头只跟随 X/Z，角度高度不变
- PASS · 受击白闪、粒子、击退、数字
- PASS · 受击材质恢复
- PASS · 死亡爆炸并产生经验
- PASS · 同帧经验不跳过卡牌
- PASS · 升级立即恢复满血
- PASS · 多级经验逐次选择
- PASS · Lv2 锁定 E
- PASS · Lv3 E 壁垒、护盾、CD，无位移
- PASS · E 冷却中不能连放
- PASS · Lv5 锁定 R
- PASS · Lv6 R 消耗充能与离子阵列
- PASS · R 连射及终端冲击结束
- PASS · 150 次抽卡：5 技能/6 属性上限与 Lv5 上限
- PASS · 进化卡仅在技能与属性满足时出现
- PASS · 构筑全满仍有三张互异战术卡
- PASS · 技能机制 pulse
- PASS · 技能机制 blade
- PASS · 技能机制 mine
- PASS · 技能机制 chain
- PASS · 技能机制 orbital
- PASS · 技能机制 ember
- PASS · 技能机制 sentinel
- PASS · 技能机制 field
- PASS · 无人机实体存在
- PASS · 经验捕获、加速与拖尾
- PASS · 经验吸收结束并结算
- PASS · 模型失败显示明显备用机体
- PASS · 高速弹道使用扫掠碰撞
- PASS · 手机机库无横向溢出
- PASS · 触屏自动显示摇杆和技能键
- PASS · 手机摇杆输入实际移动
- PASS · 手机可以暂停
- PASS · 手机三张升级卡可选
- PASS · 横屏无页面溢出
- PASS · 双击 HTML 离线运行且零远程请求
- PASS · 无 JavaScript / 控制台错误
- PASS · 无应用控制台警告
- PASS · 全屏按钮实际进入浏览器全屏
- PASS · F 快捷键退出全屏
- PASS · 局外研究显示 10 条路线
- PASS · 点击购买研究扣费且等级提升
- PASS · 研究购买持久保存
- PASS · 旧版四项研究存档无损迁移
- PASS · 十条研究均影响真实属性或 R 充能
- PASS · 局外研究禁止战斗中购买
- PASS · 战斗技能与属性卡池均精简为 8 种
- PASS · 所有属性最高 Lv3
- PASS · 即使旧卡片再次触发也不能升到 Lv4
- PASS · 200 轮：3/3 属性不再出现
- PASS · 满足条件的进化卡每轮优先提供
- PASS · 已进化技能从卡池移除
- PASS · 满属性槽时找到不参与当前进化的置换目标
- PASS · 满槽仍可出现缺失的配套属性
- PASS · 置换只替换一个属性，槽位保持六个
- PASS · 100 次实际选择：属性从不超过 3/3、技能不超过 Lv5
- PASS · 后期构筑能实际完成进化
- PASS · 旧的高等级状态显示进度仍封顶 3/3
- PASS · siege 首领具有独立模型、名称、血量
- PASS · siege 第一段只产生预警
- PASS · siege 连招第二段具有新预警
- PASS · siege 连招第三段存在
- PASS · siege 连招结束留出输出间隙
- PASS · siege 半血升级四段连招
- PASS · siege 死亡取消未落地的攻击
- PASS · prism 首领具有独立模型、名称、血量
- PASS · prism 第一段只产生预警
- PASS · prism 连招第二段具有新预警
- PASS · prism 连招第三段存在
- PASS · prism 连招结束留出输出间隙
- PASS · prism 半血升级四段连招
- PASS · prism 死亡取消未落地的攻击
- PASS · tempest 首领具有独立模型、名称、血量
- PASS · tempest 第一段只产生预警
- PASS · tempest 连招第二段具有新预警
- PASS · tempest 连招第三段存在
- PASS · tempest 连招结束留出输出间隙
- PASS · tempest 半血升级四段连招
- PASS · tempest 死亡取消未落地的攻击
- PASS · 连招重锤预警期间无伤害
- PASS · 走出重锤预警可以躲避
- PASS · 连招三线向锁定方向发射，反侧安全
- PASS · 保留 E 壁垒与拦截状态
- PASS · E 仍累计吸收用于反击
- PASS · E 结束有多层冲击特效且状态释放
- PASS · R 终末冲击增强且序列正常结束
- PASS · 保留角色 12 击杀被动
- PASS · 进化图谱只显示 8 套配方
- PASS · 真实卡片呈现进化选项，没有 4/3
- PASS · 无控制台与运行错误
- PASS · 触屏全屏按钮真实生效
- PASS · 手机研究面板无横向溢出
- PASS · 第十条局外研究可以滚动查看
- PASS · 手机 E 屏障可释放
- PASS · 手机 R 阵列可释放
- PASS · 手机图谱显示 8 套配方
- PASS · 竖屏第三张卡可选
- PASS · 横屏卡牌和图谱可操作
- PASS · 新版强化特效连续释放后资源回收稳定
- PASS · siege 连招经过实际敌人更新循环执行
- PASS · prism 连招经过实际敌人更新循环执行
- PASS · tempest 连招经过实际敌人更新循环执行
- PASS · 风暴主宰弹幕保留可见安全扇区
- PASS · 半血过载只触发一次并强化核心旋转
- PASS · 蓄电池研究实际增加 R 击杀充能 50%
- PASS · 手机 Boss HUD 不遮挡全屏与技能按钮
- PASS · 不支持全屏时明确提示，没有假全屏状态
- PASS · 手机新增功能零运行错误
- PASS · 120 次生成/死亡后 GPU 几何体数稳定
- PASS · 十分钟刷怪调度与 OMEGA 登场
- PASS · Boss 预警创建时不立即伤害
- PASS · Boss 预警未到期不伤害
- PASS · Boss 预警到期才结算伤害
- PASS · Boss 击败设置胜利延迟
- PASS · 胜利结算可见
- PASS · 再次开局重置关卡、武器、胜利计时
- PASS · 生命周期无运行错误
- PASS · 反应堆区事件区域可从出生点走到
- PASS · 冷却区事件区域可从出生点走到
- PASS · 货运通道事件区域可从出生点走到
- PASS · 封锁区事件区域可从出生点走到
- PASS · 中央部署区无障碍
- PASS · 80 次跨区域出生避开障碍物
- PASS · 地图事件绑定设计区域
- PASS · HUD 显示事件方向与距离
