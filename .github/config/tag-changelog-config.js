module.exports = {
  types: [
    { types: ['init'], label: '🎉 First commit' },
    { types: ['feat'], label: '⭐ New Features' },
    { types: ['fix'], label: '🐛 Bugfixes' },
    { types: ['perf'], label: '🐎 Performance Improvements' },
    { types: ['ci'], label: '💚 Continuous Integration' },
    { types: ['refactor'], label: '♻️ Refactors' },
    { types: ['delete'], label: '🔥 Delete file/folder' },
    { types: ['security'], label: '🔒 Security' },
    { types: ['up_deph'], label: '⬆️ Upgrade dependencies' },
    { types: ['down_deph'], label: '⬇️ Downgrade dependencies' },
    { types: ['translate'], label: '🌐 Translate' },
    { types: ['hotfix'], label: '🚑 Hotfix Important' },
    { types: ['docs'], label: '📚 Documentation Changes' },
    { types: ['test', 'tests'], label: '🧪 Tests' },
    { types: ['style'], label: '🎨 Code Style Changes' },
    { types: ['chore'], label: '🚧 Chores' },
    { types: ['mac'], label: '🍎 Mac OsX' },
    { types: ['linux'], label: '🐧 Chores' },
    { types: ['remove_deph'], label: '➖ Remove dependencies' },
    { types: ['add_deph'], label: '➕ Add dependencies' },
    { types: ['docker'], label: '🐳 Docker' },
    { types: ['revert'], label: '⏪ Reverts' },
    { types: ['access'], label: '♿ Accessibility' },
    { types: ['move'], label: '🚚 Move file/folder' },
    { types: ['rename'], label: '🚚 Rename file/folder' },
    { types: ['bot'], label: '🤖 Bots' },
    { types: ['housekeeping'], label: '🧹 Housekeeping' },
    { types: ['database'], label: '🗃️ Database' },
    { types: ['android'], label: '🤖 Android' },
    { types: ['ios'], label: '🍎 iOS' },
    { types: ['other'], label: 'Other Changes' },
  ],

  excludeTypes: ['other'],

  renderTypeSection: function (label, commits) {
    let text = `\n## ${label}\n`;

    commits.forEach((commit) => {
      text += `- ${commit.subject}\n`;
    });

    return text;
  },

  renderChangelog: function (release, changes) {
    const now = new Date();
    return (
      `# ${release} - ${now.toISOString().substr(0, 10)}\n` + changes + '\n\n'
    );
  },
};
