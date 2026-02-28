# AShare Alpha Engine

A股全球信息聚合与多因子选股系统（生产级工程骨架）。当前已完成第 1 步基础配置交付：

- `config/settings.yaml`: 硬件、数据源、NLP、邮件推送配置。
- `.env.example`: 环境变量模板（Tushare、HuggingFace、SMTP）。
- `requirements.txt`: 完整技术栈依赖清单。

## Quick Start

1. 创建虚拟环境并安装依赖

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

2. 配置环境变量

```bash
cp .env.example .env
# 编辑 .env 填入真实密钥
```

3. 重要安全建议

- 不要将 `.env` 提交到仓库。
- `SMTP_PASSWORD` 应使用邮箱授权码，而非登录密码。
- `TUSHARE_TOKEN` 仅保存在本地或密钥管理系统。

## Planned Structure

```text
AShareAlphaEngine/
├── .env.example
├── requirements.txt
├── README.md
├── config/
│   ├── settings.yaml
│   └── factor_registry.yaml
├── data/
├── factors/
├── backtest/
├── model/
├── signal/
├── report/
├── scheduler/
└── tests/
```

## Notes

该仓库后续将按模块迭代交付（数据采集、NLP、因子、回测、模型、报告与调度）。
