# LX Music 移动版

基于 **React Native** 与 **Redux** 的 Android 音乐客户端（洛雪音乐移动版）。

| 项目 | 说明 |
|------|------|
| 支持平台 | **Android 5 及以上** |
| 技术栈 | React Native、Redux |
| 上游仓库 | [lyswhut/lx-music-mobile](https://github.com/lyswhut/lx-music-mobile) |
| 桌面版 | [lyswhut/lx-music-desktop](https://github.com/lyswhut/lx-music-desktop) |

> **说明**：暂无官方 iOS / HarmonyOS NEXT 计划。项目动态见 [桌面版议题 #1912](https://github.com/lyswhut/lx-music-desktop/issues/1912)。

---

## 下载与文档

- **正式安装包**：[GitHub Releases](https://github.com/lyswhut/lx-music-mobile/releases)
- **更新日志**：[CHANGELOG.md](./CHANGELOG.md)
- **常见问题**：[移动版 FAQ](https://lyswhut.github.io/lx-music-doc/mobile/faq)
- **播放列表机制**：[音乐播放列表机制](https://lyswhut.github.io/lx-music-doc/mobile/faq/playlist)
- **从源码运行**：[源码使用方法](https://lyswhut.github.io/lx-music-doc/mobile/use-source-code)

官方发布渠道以 **GitHub Releases** 为准；其他渠道多为转载，与上游项目无关。

---

## 本地开发（简要）

环境要求见官方文档（Node、JDK、Android SDK 等）。仓库根目录常用命令：

```bash
npm install
npm run start          # Metro 开发服务
npm run dev            # 连接设备/模拟器运行 Android（debug，需 Metro）
npm run lint           # 代码检查
```

打 **可离线安装的 Android 正式包（release APK）** 时，可参考仓库内 Cursor 规则：  
[`.cursor/rules/android-release-build.mdc`](./.cursor/rules/android-release-build.mdc)

---

## 数据同步服务

自 v1.0.0 起提供独立 **[数据同步服务](https://github.com/lyswhut/lx-music-sync-server#readme)**，可自行部署用于多端列表等数据同步，详见该仓库说明。

---

## 参与贡献

欢迎 PR。建议：

- **新功能**：先开 Issue 说明需求与方案，便于维护者评估。
- **修 Bug**：说明现象、复现步骤、修复前后对比。

上游贡献流程一般为：按官方文档配置环境 → 在 **`dev`** 分支开发 → 向 **`dev`** 提交 PR（以当前仓库贡献说明为准）。

---

## 许可证与使用声明

本项目在 **[Apache License 2.0](./LICENSE)** 下发布；**完整法律条款与补充约定以 `LICENSE` 文件为准**（含数据来源说明、版权数据 24 小时内清除义务、免责声明、非商业说明等）。

使用本软件即表示你已阅读并同意该许可证及其中补充条款。若对协议有疑问，可联系上游：`lyswhut+qq.com`（将 `+` 替换为 `@`）。

**请遵守当地法律法规，尊重版权，支持正版音乐。**
