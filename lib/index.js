'format cjs';

var engine = require('./engine');
var conventionalCommitTypes = require('conventional-commit-types');
var configLoader = require('commitizen').configLoader;
var types = conventionalCommitTypes.types;

var config = configLoader.load() || {};
var options = {
  types: config.types || conventionalCommitTypes.types,
  defaultType: process.env.CZ_TYPE || config.defaultType,
  defaultScope: process.env.CZ_SCOPE || config.defaultScope,
  defaultSubject: process.env.CZ_SUBJECT || config.defaultSubject,
  defaultBody: process.env.CZ_BODY || config.defaultBody,
  defaultIssues: process.env.CZ_ISSUES || config.defaultIssues,
  disableScopeLowerCase:
    process.env.DISABLE_SCOPE_LOWERCASE || config.disableScopeLowerCase,
  disableSubjectLowerCase:
    process.env.DISABLE_SUBJECT_LOWERCASE || config.disableSubjectLowerCase,
  maxHeaderWidth:
    (process.env.CZ_MAX_HEADER_WIDTH &&
      parseInt(process.env.CZ_MAX_HEADER_WIDTH)) ||
    config.maxHeaderWidth ||
    100,
  maxLineWidth:
    (process.env.CZ_MAX_LINE_WIDTH &&
      parseInt(process.env.CZ_MAX_LINE_WIDTH)) ||
    config.maxLineWidth ||
    100,
};

(function (options) {
  try {
    var commitlintLoad = require('@commitlint/load');
    commitlintLoad().then(function (clConfig) {
      if (clConfig.rules) {
        var maxHeaderLengthRule = clConfig.rules['header-max-length'];
        if (
          typeof maxHeaderLengthRule === 'object' &&
          maxHeaderLengthRule.length >= 3 &&
          !process.env.CZ_MAX_HEADER_WIDTH &&
          !config.maxHeaderWidth
        ) {
          options.maxHeaderWidth = maxHeaderLengthRule[2];
        }
      }
    });
  } catch (err) {}
})(options);

/**
 * Adding or modifying commands.
 */
types.access = {
  description: 'Design modification for mobile/desktop',
  title: 'Access',
};

types.add_deph = {
  description: 'Adding a package',
  title: 'Add deph',
};

types.android = {
  description: 'Modification on Android',
  title: 'Android',
};

types.bot = {
  description: 'Modification for a robot',
  title: 'Bot',
};

types.chore = {
  description: 'Work in progress on any file',
  title: 'Chore',
};

types.build = {
  description:
    'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
  title: 'Build',
};

types.init = {
  description: 'First commit',
  title: 'Init',
};

types.patch = {
  description: 'Creation of a patch',
  title: 'Patch',
};

types.delete = {
  description: 'Delete a file/folder',
  title: 'Delete',
};

types.security = {
  description: 'Security incident',
  title: 'Security',
};

types.up_deph = {
  description: 'Upgrading a package',
  title: 'Up deph',
};

types.down_deph = {
  description: 'Downgrade a package',
  title: 'Down deph',
};

types.translate = {
  description: 'Modification for a translation',
  title: 'Translate',
};

types.hotfix = {
  description: 'Important patch',
  title: 'Hotfix',
};

types.mac = {
  description: 'Modification for MAC',
  title: 'Mac',
};

types.linux = {
  description: 'Modification for Linux',
  title: 'Linux',
};

types.windows = {
  description: 'Modification for Windows',
  title: 'Windows',
};

types.remove_deph = {
  description: 'Delete a package',
  title: 'Remove deph',
};

types.docker = {
  description: 'Modification on Docker',
  title: 'Docker',
};

types.move = {
  description: 'File/folder movement',
  title: 'Move',
};

types.rename = {
  description: 'Rename a file/folder',
  title: 'Rename',
};

types.housekeeping = {
  description: 'Modification on the administration',
  title: 'Housekeeping',
};

types.database = {
  description: 'Modification on the Database',
  title: 'Database',
};

types.ios = {
  description: 'Modification on iOs',
  title: 'iOs',
};

module.exports = engine(options);
