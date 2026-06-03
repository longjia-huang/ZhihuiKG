# 视评智能AI测评系统 - 架构图 (Mermaid版本)

## 系统整体技术架构

```mermaid
graph TB
    %% 样式定义
    classDef layer fill:#1a1d27,stroke:#24C8C8,stroke-width:2px,color:#fff;
    classDef module fill:#12141C,stroke:#24C8C8,stroke-width:1px,color:#fff;
    classDef item fill:#24C8C822,stroke:#24C8C8,stroke-width:1px,color:#12141C;
    
    %% 第四层 - 应用输出层
    subgraph Layer4[应用输出层（用户落地端口）]
        direction LR
        L4_Title["📊 应用输出层"]
        
        subgraph L4_M1[Web管理]
            L4_M1_1[Web管理后台]
            L4_M1_2[测评任务管理]
        end
        
        subgraph L4_M2[数据展示]
            L4_M2_1[实时监控大屏]
            L4_M2_2[测评数据报表]
        end
        
        subgraph L4_M3[报告输出]
            L4_M3_1[智能分析报告]
            L4_M3_2[数据导出]
        end
        
        subgraph L4_M4[接口定制]
            L4_M4_1[API接口对接]
            L4_M4_2[定制化测评输出]
        end
    end

    %% 第三层 - 智能测评服务层
    subgraph Layer3[智能测评服务层（核心功能服务）]
        direction LR
        L3_Title["⚙️ 智能测评服务层"]
        
        subgraph L3_M1[测评场景]
            L3_M1_1[场景搭建]
            L3_M1_2[指标体系配置]
        end
        
        subgraph L3_M2[自动化调度]
            L3_M2_1[测评调度]
            L3_M2_2[任务管理]
        end
        
        subgraph L3_M3[数据分析]
            L3_M3_1[多模态融合分析]
            L3_M3_2[数据可视化分析]
        end
        
        subgraph L3_M4[智能评分]
            L3_M4_1[智能评分定级]
            L3_M4_2[异常行为识别]
        end
        
        subgraph L3_M5[模型迭代]
            L3_M5_1[测评数据溯源]
            L3_M5_2[测评模型迭代]
        end
    end

    %% 第二层 - 核心技术引擎层
    subgraph Layer2[核心技术引擎层（产品核心壁垒）]
        direction LR
        L2_Title["🧠 核心技术引擎层"]
        
        subgraph L2_M1[高精度计算机视觉动捕引擎]
            L2_M1_1[人体/智能体骨骼点识别]
            L2_M1_2[动作姿态还原]
            L2_M1_3[运动轨迹追踪]
            L2_M1_4[行为异常判定]
            L2_M1_5[动态交互精度检测]
            L2_M1_6[毫秒级数据采集]
        end
        
        subgraph L2_M2[多模态智能识别引擎]
            L2_M2_1[图像识别]
            L2_M2_2[语音识别]
            L2_M2_3[文本解析]
            L2_M2_4[场景感知]
            L2_M2_5[特征提取]
            L2_M2_6[跨模态关联分析]
        end
    end

    %% 第一层 - 数据采集层
    subgraph Layer1[数据采集层（基础底座）]
        direction LR
        L1_Title["📡 数据采集层"]
        
        subgraph L1_M1[视觉动态数据]
            L1_M1_1[动作轨迹]
            L1_M1_2[姿态捕捉]
            L1_M1_3[位移追踪]
            L1_M1_4[交互行为]
        end
        
        subgraph L1_M2[语音数据]
            L1_M2_1[音色识别]
            L1_M2_2[语速分析]
            L1_M2_3[语义解析]
            L1_M2_4[情绪识别]
        end
        
        subgraph L1_M3[文本交互数据]
            L1_M3_1[对话逻辑]
            L1_M3_2[应答准确率]
        end
        
        subgraph L1_M4[场景环境数据]
            L1_M4_1[光照分析]
            L1_M4_2[背景检测]
            L1_M4_3[干扰因素]
        end
        
        subgraph L1_M5[任务执行数据]
            L1_M5_1[过程记录]
            L1_M5_2[结果分析]
        end
    end

    %% 连接关系
    Layer1 --> Layer2
    Layer2 --> Layer3
    Layer3 --> Layer4
    
    %% 类样式应用
    class Layer1,Layer2,Layer3,Layer4 layer;
    class L1_M1,L1_M2,L1_M3,L1_M4,L1_M5 module;
    class L2_M1,L2_M2 module;
    class L3_M1,L3_M2,L3_M3,L3_M4,L3_M5 module;
    class L4_M1,L4_M2,L4_M3,L4_M4 module;
```

---

## 横向流程图版本

```mermaid
flowchart LR
    %% 样式
    classDef layerBox fill:#1a1d27,stroke:#24C8C8,stroke-width:2px,color:#fff;
    classDef box fill:#12141C,stroke:#24C8C833,stroke-width:1px,color:#fff;
    classDef title fill:#24C8C8,stroke:#24C8C8,stroke-width:1px,color:#12141C,font-weight:bold;
    
    subgraph Data[数据采集层]
        direction TB
        D1[视觉动态数据]
        D2[语音数据]
        D3[文本交互数据]
        D4[场景环境数据]
        D5[任务执行数据]
    end

    subgraph Engine[核心技术引擎层]
        direction TB
        E1[高精度计算机视觉动捕引擎]
        E2[多模态智能识别引擎]
    end

    subgraph Service[智能测评服务层]
        direction TB
        S1[测评场景]
        S2[自动化调度]
        S3[数据分析]
        S4[智能评分]
        S5[模型迭代]
    end

    subgraph Output[应用输出层]
        direction TB
        O1[Web管理]
        O2[数据展示]
        O3[报告输出]
        O4[接口定制]
    end

    Data --> Engine
    Engine --> Service
    Service --> Output
    
    class Data,Engine,Service,Output layerBox
    class D1,D2,D3,D4,D5,E1,E2,S1,S2,S3,S4,S5,O1,O2,O3,O4 box
```

---

## 使用说明

将上述Mermaid代码可以在以下平台使用：

1. **GitHub / GitLab - 直接在Markdown文件中使用
2. **Mermaid Live Editor** - https://mermaid.live/
3. **VS Code** - 安装Mermaid插件
4. **Notion** - 支持Mermaid图表

---

*文档生成日期: 2026-06-04*
