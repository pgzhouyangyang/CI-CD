module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feature', // 增加新功能
        'update', // 变更
        'fixbug', // bug
        'refactor', // 重构
        'optimize', // 优化
        'style', //格式（不影响代码运行的变动）
        'docs', // 文档（documentation）
        'chore', // 构建过程或辅助工具的变动
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
}
