# [github-template](https://github.com/WebReadyProjects/github-template/)

<p align="center">
  <a href="https://github.com/WebReadyProjects" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/84878971?s=200&v=4" alt="WebReady Projects Logo" width="100">
  </a>
</p>

<p align="center">
  <a href="https://github.com/WebReadyProjects/github-template/releases">
    <img src="https://img.shields.io/github/package-json/v/WebReadyProjects/github-template?style=flat-square" alt="Version badge">
  </a>
  <a href="https://github.com/WebReadyProjects/github-template/">
    <img src="https://img.shields.io/maintenance/yes/2021?style=flat-square" alt="Maintenance badge">
  </a>
  <a href="">
    <img src="https://img.shields.io/github/workflow/status/WebReadyProjects/github-template/Deployment%20-%20Pipeline?style=flat-square" alt="Deployment - Pipeline">
  </a>
  <a href="">
    <img src="https://img.shields.io/github/downloads/WebReadyProjects/github-template/total?style=flat-square" alt="Downloads GitHub">
  </a>
  <a href="https://github.com/WebReadyProjects/github-template/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/WebReadyProjects/github-template?style=flat-square" alt="License badge">
  </a>
  <a href="https://discord.com/channels/849073103984525323/849088247987437579">
    <img src="https://img.shields.io/discord/849073103984525323?style=flat-square" alt="Discord badge">
  </a>
</p>

## Introduction

[github-template](https://github.com/WebReadyProjects/github-template/) is a GitHub template developed by [Grégoire FAVREAU](https://github.com/GregoireF) to provide [WebReady Projects](https://github.com/WebReadyProjects/) with a solid base respecting many standards and conventions as well as several powerful workflows on all projects.

## Installation

In order to use it, you can simply fork the project where you want to start your code in your newly created workspace.
Once this is done, you need to configure the secrets:
- Key name: `GITGUARDIAN_API_KEY` | Where to generate the key: [here](https://www.gitguardian.com/)
- Key name: `METRICS_TOKEN` | Where to generate the key: [here](https://github.com/lowlighter/metrics)
- Key name: `NPM_TOKEN` | Where to generate the key: [here](https://www.npmjs.com/)
- Key name: `GIPHY_API_KEY` | Where to generate the key: [here](https://developers.giphy.com/dashboard/)

In order for [Pipeline - Metrics](https://github.com/WebReadyProjects/github-template/actions/workflows/pipeline-metrics.yml) to be clean, we have to use a Gist configuration provided by [lowlighter](https://github.com/lowlighter/), so it is necessary to follow [the configuration scheme](https://github.com/lowlighter/metrics). Once you have created your different Gist, you need to configure them in the [pipeline-metrics.yml](https://github.com/WebReadyProjects/github-template/blob/main/.github/workflows/pipeline-metrics.yml) file like this:
```yml
 with:
    committer_gist: 8e01675010ff637355609641fd57fe23 # your gist id as shown in gist url
    output_action: gist
```

## Questions

If you have a question or need help, feel free to use the [GitHub Community Chat](https://github.com/WebReadyProjects/github-template/discussions) or our [Discord](https://discord.com/channels/849073103984525323/849088247987437579) to get support. [GitHub Issues](https://github.com/WebReadyProjects/github-template/issues) and [GitHub Pull Request](https://github.com/WebReadyProjects/github-template/pulls) are exclusively for bug reports or development.

<p align="center">
  <img src="https://raw.githubusercontent.com/gist/GregoireF/caf930c995804d565ffc9bb85fe79f8c/raw/262df8828ba3422594b26faa58413d671c428137/github-metrics.svg" alt="Metric Discussions">
</p>

## Issues

It is necessary to read [contribution information](https://github.com/WebReadyProjects/github-template/blob/main/.github/docs/CONTRIBUTION.md) before submitting any type of incident on GitHub, otherwise it will be closed automatically if it does not meet the community conditions.

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/WebReadyProjects/github-template/releases).

## Contributing

If you are interested in joining our team of open-source developers, please see the [CONTRIBUTION GUIDE](https://github.com/WebReadyProjects/github-template/blob/main/.github/docs/CONTRIBUTION.md) and the [CODE OF CONDUCT](https://github.com/WebReadyProjects/github-template/blob/main/.github/CODE_OF_CONDUCT.md).
If this is your first contribution for you, we have [a very fun tutorial](https://github.com/WebReadyProjects/first-contributions) for you, promise, it won't be long! Also, if you need support, feel free to use [our GitHub chat](https://github.com/WebReadyProjects/github-template/discussions) as well as [our Discord](https://discord.com/channels/849073103984525323/849088247987437579).
Also, feel free to look at [community incidents]() already present that may answer your question.

<p align="center">
  <img src="https://raw.githubusercontent.com/gist/GregoireF/8e01675010ff637355609641fd57fe23/raw/c543ddeceee0dacc98cdbf9734d0bf0c3d128333/github-metrics.svg" alt="Metric Contributors">
</p>

## Sponsors & Special Thanks

<p align="center">
  <img src="https://raw.githubusercontent.com/gist/GregoireF/378434b35316787dfce1929deba1721c/raw/bcdbe5641d694442f59f664b96c41374e3ef9038/github-metrics.svg" alt="Special Thanks">
</p>

## License

[Apache-2.0](https://github.com/WebReadyProjects/github-template/blob/main/LICENSE)
Copyright (c) 2021-present WebReady Projects
