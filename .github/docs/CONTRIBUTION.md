<h1>Contribution Guide</h1>

## Local development

### Setting up your environment

Required software:

- <a href='https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git' target="_blank">Git</a>
- <a href='https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git' target="_blank">NodeJS</a>
- <a href='https://yarnpkg.com/getting-started/install' target="_blank">Yarn</a>

Recommended software:

- <a href='https://code.visualstudio.com/download' target="_blank">Visual Studio Code</a>

Once you have everything installed, clone the :

In HTTPS format:

```sh
git clone https://github.com/WebReadyProjects/github-template
```

In SSH format:

```sh
git clone git@github.com/WebReadyProjects/github-template
```

Go to the newly created directory:

```sh
cd github-template
```

### Soumission de modifications/demandes d'extraction

You must first create a fork of the github-template repository to upload your changes to. Information on creating repositories can be found in <a href='https://docs.github.com/en/get-started/quickstart/fork-a-repo' target='_blank'>GitHub documentation</a>.

#### Choose a basic branch

| Type of change |      Branch       |
| -------------- | :---------------: |
| New release    |      `main`       |
| Bug fixes      | `bugs/name-issue` |
| New features   | `dev/my-feature`  |

```sh
# Switch to the desired branch
git switch main

# Pull down any upstream changes
git pull

# Create a new branch to work on
git switch --create bugs/name-issue
```

Commit your changes after following <a href="#directives">our directives</a>, then push the branch to your fork with `git push -u fork` and open a pull request on the github-template repository following the provided template.

## Working with GitHub

The <a href="https://github.com/WebReadyProjects/github-template" target="_blank">github-template repository</a> is the main location for all development related information.

### Incident triage

In order to best organize submitted incidents, <a href="https://github.com/orgs/WebReadyProjects/people" target="_blank">the team</a> has developed tools to create and sort tickets in quick ways.
The <a href="https://github.com/WebReadyProjects/github-template/issues" target="_blank">incident boards</a> make extensive use of the tagging system as well as many other APIs. The pipeline for managing incidents can be found <a href="https://github.com/WebReadyProjects/github-template/actions/workflows/pipeline-issue.yml" target="_blank">here</a>.

### Request new features

github-template uses the <a href='https://fr.wikipedia.org/wiki/Request_for_comments' target="_blank"><strong>RFC</strong></a> (request for feedback) process for new feature suggestions. It is intended to provide a consistent and controlled path for new features to enter the framework.

Many changes, including bug fixes and documentation improvements, can be implemented and reviewed via <a href='https://github.com/WebReadyProjects/github-template/pulls' target="_blank">the GitHub pull request workflow</a>.

Some of the changes are substantial, however, and we will ask that they produce consensus among <a href='https://github.com/orgs/WebReadyProjects/people' target="_blank">the team</a>.

#### Get started

In order to provide major functionality to github-template, you need to merge this repository to the `rfcs` folder and edit to `.md`. The following is a guide on how to properly create it:

- Fork the repository <a href='https://github.com/WebReadyProjects/github-template/' target="_blank">github-template</a>.
- Go to `rfcs/`.
- From the root, copy `0000-template.md` to `active-rfcs/0000-my-feature.md` (where <strong>my-feature</strong> and <strong>descript</strong>. <strong>Do not assign</strong> an RFC number yet).
- In order to edit the `.md` file it is necessary to be under the `rfcs/my-feature` branch.
- Submit a pull request. As a pull request, the RFC will receive design feedback from the community at large and the author must be willing to modify it. New RFC pull requests begin at the `pending_approval` stage.
- <a href="https://github.com/orgs/WebReadyProjects/people" target="_blank">The team</a> will decide if the RFC is a candidate for inclusion in github-template.
- An RFC may be modified based on feedback from <a href="https://github.com/orgs/WebReadyProjects/people" target="_blank">the team</a>. Significant changes may trigger a new approval period.
- An RFC may be rejected once public discussion is complete and comments have been made summarizing the rationale for rejection. A member of <a href="https://github.com/orgs/WebReadyProjects/people" target="_blank">the team</a> will close the pull request associated with the RFCs, in which case the RFC will enter the `rejected` stage.
- An RFC may be accepted at the end of the period. A member of <a href="https://github.com/orgs/WebReadyProjects/people" target="_blank">the team</a> will merge the pull request associated with the RFCs, in which case the RFC will enter the `active` phase.
  Once an RFC is merged and the corresponding functionality is implemented in the github-template repository, it will become part of the next major or minor release. Once released, the RFC will enter the `released` stage and be locked.

For more information on RFCs, see the official repository <a href="https://github.com/WebReadyProjects/github-template/tree/main/rfcs/" target="_blank">here</a>.

### Guidelines

All validation messages must follow <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank">conventions for commits</a> using the angular preset.

#### General rules

- Validation messages must have a subject line and may have a body text. These must be separated by a blank line.
- The subject line must not exceed 60 characters.
- The subject line must be written in the imperative (corrective, uncorrected/corrected, etc.)
- The body text should only contain explanations of what and why, never how. The latter belongs in the documentation and implementation.

#### Title Types

Here is a list of <strong>validation types</strong> used in the optimization tool created by <a href="https://github.com/WebReadyProjects/github-template/" target="_blank">the team</a> :

- patch: Create a new version of the project.
- feat: New functionality.
- bug: Resolve an incident.
- docs: Implementing the documentation.
- perf: Performance tuning.
- style: Work on the design.
- test: Implementation and production of various tests.
- refactor: Improve the style of the project code.
