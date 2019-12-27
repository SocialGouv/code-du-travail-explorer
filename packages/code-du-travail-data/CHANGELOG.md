# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.0.0-alpha.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.10.0...v4.0.0-alpha.0) (2019-12-27)


### Bug Fixes

* fix CPF action  ([#2071](https://github.com/SocialGouv/code-du-travail-numerique/issues/2071)) ([eec192b](https://github.com/SocialGouv/code-du-travail-numerique/commit/eec192b1533cfd80dbc396db2bada5ede3e07e86))
* update contributions data ([#2068](https://github.com/SocialGouv/code-du-travail-numerique/issues/2068)) ([d29d4ab](https://github.com/SocialGouv/code-du-travail-numerique/commit/d29d4abe339d7ecc9a086b3e48f8727b717ae161))
* **deps:** update socialgouv ([#2030](https://github.com/SocialGouv/code-du-travail-numerique/issues/2030)) ([dade95c](https://github.com/SocialGouv/code-du-travail-numerique/commit/dade95c85b5ebdd6ef2c24276d2daebfd422bd06))
* **idcc:** support new kali-data  number format for idcc ([#2049](https://github.com/SocialGouv/code-du-travail-numerique/issues/2049)) ([12a8c2b](https://github.com/SocialGouv/code-du-travail-numerique/commit/12a8c2b61f8816354f8f53e26e099508459a0897)), closes [#2041](https://github.com/SocialGouv/code-du-travail-numerique/issues/2041)


### Code Refactoring

* use elastic cloud ([#1753](https://github.com/SocialGouv/code-du-travail-numerique/issues/1753)) ([3291662](https://github.com/SocialGouv/code-du-travail-numerique/commit/32916621914475874ffc538691c17188fcd83001)), closes [#1741](https://github.com/SocialGouv/code-du-travail-numerique/issues/1741) [#1987](https://github.com/SocialGouv/code-du-travail-numerique/issues/1987)


### Features

* MAJ modèles de docs ([#2020](https://github.com/SocialGouv/code-du-travail-numerique/issues/2020)) ([cea11c1](https://github.com/SocialGouv/code-du-travail-numerique/commit/cea11c17bd60d159b58519ffd6be3ed0870313ed)), closes [#2014](https://github.com/SocialGouv/code-du-travail-numerique/issues/2014) [#2019](https://github.com/SocialGouv/code-du-travail-numerique/issues/2019) [#1837](https://github.com/SocialGouv/code-du-travail-numerique/issues/1837) [#2014](https://github.com/SocialGouv/code-du-travail-numerique/issues/2014)
* **frontend:** add icons to theme ([#2043](https://github.com/SocialGouv/code-du-travail-numerique/issues/2043)) ([284d33d](https://github.com/SocialGouv/code-du-travail-numerique/commit/284d33d5082f2c8cda6eaa924311109ea102ad96))
* use ccn shortitle as slug  ([#2038](https://github.com/SocialGouv/code-du-travail-numerique/issues/2038)) ([714709f](https://github.com/SocialGouv/code-du-travail-numerique/commit/714709fc11a5204fce5fba3e030f9719b77db451)), closes [#1830](https://github.com/SocialGouv/code-du-travail-numerique/issues/1830)


### BREAKING CHANGES

* refactor: use elastic cloud
    - We are now using an external elastic cloud service
    - We are deploying to azure to `master-code-travail.dev.fabrique.social.gouv.fr`
    - We are using shared https://github.com/SocialGouv/gitlab-ci-yml





# [3.10.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.9.0...v3.10.0) (2019-12-20)


### Bug Fixes

* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.62 ([#2013](https://github.com/SocialGouv/code-du-travail-numerique/issues/2013)) ([c4633e5](https://github.com/SocialGouv/code-du-travail-numerique/commit/c4633e580b68953530f26338e17d7186e8c16568))
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.63 ([#2028](https://github.com/SocialGouv/code-du-travail-numerique/issues/2028)) ([18e9dde](https://github.com/SocialGouv/code-du-travail-numerique/commit/18e9dde21d12b005210cb9f24634123618627cef))


### Features

* index fiches SP directly ([#1993](https://github.com/SocialGouv/code-du-travail-numerique/issues/1993)) ([fdcf28f](https://github.com/SocialGouv/code-du-travail-numerique/commit/fdcf28f36e14d2a25d28bac9eb4c7a5066d83be1))
* **external:** add external tools ([#1999](https://github.com/SocialGouv/code-du-travail-numerique/issues/1999)) ([7ed9007](https://github.com/SocialGouv/code-du-travail-numerique/commit/7ed9007dca02dbf986fdbd64c166279c7fece9b4)), closes [#1833](https://github.com/SocialGouv/code-du-travail-numerique/issues/1833)





# 3.9.0 (2019-12-18)


### Bug Fixes

* **data:** add title to titleless sections ([#1972](https://github.com/SocialGouv/code-du-travail-numerique/issues/1972)) ([f9b0118](https://github.com/SocialGouv/code-du-travail-numerique/commit/f9b0118ae7c180282e23c06cc0a6567310249bdc)), closes [#1971](https://github.com/SocialGouv/code-du-travail-numerique/issues/1971)
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.53 ([#1927](https://github.com/SocialGouv/code-du-travail-numerique/issues/1927)) ([9e36b4b](https://github.com/SocialGouv/code-du-travail-numerique/commit/9e36b4bad475aa17054cef1fae3c61db2d758228))
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.54 ([#1937](https://github.com/SocialGouv/code-du-travail-numerique/issues/1937)) ([f2a6978](https://github.com/SocialGouv/code-du-travail-numerique/commit/f2a6978e0c9127443fa303bd0e6d0c56d9bcbac5))
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.55 ([#1951](https://github.com/SocialGouv/code-du-travail-numerique/issues/1951)) ([72193a3](https://github.com/SocialGouv/code-du-travail-numerique/commit/72193a36eb84f9a7ecebb595c85c8171a22928d9))
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.56 ([#1957](https://github.com/SocialGouv/code-du-travail-numerique/issues/1957)) ([bd1dde4](https://github.com/SocialGouv/code-du-travail-numerique/commit/bd1dde4af7b585508709565515046f54680d5646))
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.59 ([#1963](https://github.com/SocialGouv/code-du-travail-numerique/issues/1963)) ([2baecce](https://github.com/SocialGouv/code-du-travail-numerique/commit/2baecce717d35b151bf54c567547e2916d363009))
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.60 ([#1992](https://github.com/SocialGouv/code-du-travail-numerique/issues/1992)) ([dfdaf2c](https://github.com/SocialGouv/code-du-travail-numerique/commit/dfdaf2cd868c099ff98893b23149e647da6e6c64))
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.61 ([#2001](https://github.com/SocialGouv/code-du-travail-numerique/issues/2001)) ([74684e3](https://github.com/SocialGouv/code-du-travail-numerique/commit/74684e3aa67fbaecc2efb05afe32daef4c75cfaf))
* **deps:** update dependency @socialgouv/kali-data to ^1.2.98 ([#1959](https://github.com/SocialGouv/code-du-travail-numerique/issues/1959)) ([bfe5ad2](https://github.com/SocialGouv/code-du-travail-numerique/commit/bfe5ad25d7ec6694997bc90bae15243d74535713))
* **deps:** update dependency next to ^9.1.5 ([#1925](https://github.com/SocialGouv/code-du-travail-numerique/issues/1925)) ([c1aa17e](https://github.com/SocialGouv/code-du-travail-numerique/commit/c1aa17e12a296851194f3d709ec9d1c8e7b1e720))
* **deps:** update dependency react-tabs to ^3.1.0 ([#1956](https://github.com/SocialGouv/code-du-travail-numerique/issues/1956)) ([0da96a9](https://github.com/SocialGouv/code-du-travail-numerique/commit/0da96a9d7eea3c35be3c31337ebbf922ba57db6c)), closes [#1958](https://github.com/SocialGouv/code-du-travail-numerique/issues/1958) [#1957](https://github.com/SocialGouv/code-du-travail-numerique/issues/1957)
* courriers indexation ([#1943](https://github.com/SocialGouv/code-du-travail-numerique/issues/1943)) ([903a280](https://github.com/SocialGouv/code-du-travail-numerique/commit/903a280276285fe8f40d6713c70c9945ec791846))
* **es:** re-make slug a keyword ([#1969](https://github.com/SocialGouv/code-du-travail-numerique/issues/1969)) ([447ebfc](https://github.com/SocialGouv/code-du-travail-numerique/commit/447ebfcd1a05df60856d30ea6ac2b6cb097994e7))
* **fiches-MT:** deeper sectionification ([#1921](https://github.com/SocialGouv/code-du-travail-numerique/issues/1921)) ([5a636b0](https://github.com/SocialGouv/code-du-travail-numerique/commit/5a636b0d3aa87e64667e10497ca7d2cb82d2d90d)), closes [#1898](https://github.com/SocialGouv/code-du-travail-numerique/issues/1898) [#1929](https://github.com/SocialGouv/code-du-travail-numerique/issues/1929)
* **fiches-sp:** update data ([#1930](https://github.com/SocialGouv/code-du-travail-numerique/issues/1930)) ([f8a3a25](https://github.com/SocialGouv/code-du-travail-numerique/commit/f8a3a25487c80ad617c7c89bfc9385cfc495b0ac))


### Features

* **agreement:** add new agreement page ([#1840](https://github.com/SocialGouv/code-du-travail-numerique/issues/1840)) ([97ec7ad](https://github.com/SocialGouv/code-du-travail-numerique/commit/97ec7ad5790d569ad705d9825df4c521a4136319)), closes [#1398](https://github.com/SocialGouv/code-du-travail-numerique/issues/1398) [#1871](https://github.com/SocialGouv/code-du-travail-numerique/issues/1871)
* **frontend:** CustomTiles and related items ([#1933](https://github.com/SocialGouv/code-du-travail-numerique/issues/1933)) ([7d03762](https://github.com/SocialGouv/code-du-travail-numerique/commit/7d03762ea76006586aea64140a41b79ac17c45b9))
* ajout fiche SP "Avantages en nature" ([#1953](https://github.com/SocialGouv/code-du-travail-numerique/issues/1953)) ([6c33f31](https://github.com/SocialGouv/code-du-travail-numerique/commit/6c33f319c4a8ddbefc38b0c82e99cae31bc8a552))





# 3.8.0 (2019-12-03)


### Bug Fixes

* **contributions:** remove contribution without generic answer ([#1824](https://github.com/SocialGouv/code-du-travail-numerique/issues/1824)) ([1c0430e](https://github.com/SocialGouv/code-du-travail-numerique/commit/1c0430e))
* **data:** update fiches-MT fix [#1742](https://github.com/SocialGouv/code-du-travail-numerique/issues/1742) ([#1776](https://github.com/SocialGouv/code-du-travail-numerique/issues/1776)) ([0468002](https://github.com/SocialGouv/code-du-travail-numerique/commit/0468002))
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.36 ([#1786](https://github.com/SocialGouv/code-du-travail-numerique/issues/1786)) ([74fd053](https://github.com/SocialGouv/code-du-travail-numerique/commit/74fd053))
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.38 ([#1800](https://github.com/SocialGouv/code-du-travail-numerique/issues/1800)) ([dfadffa](https://github.com/SocialGouv/code-du-travail-numerique/commit/dfadffa))
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.40 ([#1818](https://github.com/SocialGouv/code-du-travail-numerique/issues/1818)) ([ab12ef1](https://github.com/SocialGouv/code-du-travail-numerique/commit/ab12ef1))
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.41 ([#1822](https://github.com/SocialGouv/code-du-travail-numerique/issues/1822)) ([7233599](https://github.com/SocialGouv/code-du-travail-numerique/commit/7233599))
* **deps:** update dependency date-fns to ^2.8.1 ([#1787](https://github.com/SocialGouv/code-du-travail-numerique/issues/1787)) ([5f3833f](https://github.com/SocialGouv/code-du-travail-numerique/commit/5f3833f))
* remove fiche SP F22553 fix [#1732](https://github.com/SocialGouv/code-du-travail-numerique/issues/1732) ([#1853](https://github.com/SocialGouv/code-du-travail-numerique/issues/1853)) ([d9f37fd](https://github.com/SocialGouv/code-du-travail-numerique/commit/d9f37fd))
* **deps:** update dependency superagent to ^5.1.1 ([#1785](https://github.com/SocialGouv/code-du-travail-numerique/issues/1785)) ([25f393b](https://github.com/SocialGouv/code-du-travail-numerique/commit/25f393b))
* **deps:** update dependency superagent to ^5.1.2 ([#1845](https://github.com/SocialGouv/code-du-travail-numerique/issues/1845)) ([1ab348b](https://github.com/SocialGouv/code-du-travail-numerique/commit/1ab348b))
* **deps:** update socialgouv ([#1814](https://github.com/SocialGouv/code-du-travail-numerique/issues/1814)) ([5d682f3](https://github.com/SocialGouv/code-du-travail-numerique/commit/5d682f3))
* **deps:** update socialgouv ([#1829](https://github.com/SocialGouv/code-du-travail-numerique/issues/1829)) ([d2b7d5f](https://github.com/SocialGouv/code-du-travail-numerique/commit/d2b7d5f))
* **deps:** update socialgouv ([#1841](https://github.com/SocialGouv/code-du-travail-numerique/issues/1841)) ([c74fd00](https://github.com/SocialGouv/code-du-travail-numerique/commit/c74fd00))
* **deps:** update socialgouv ([#1868](https://github.com/SocialGouv/code-du-travail-numerique/issues/1868)) ([72e02b9](https://github.com/SocialGouv/code-du-travail-numerique/commit/72e02b9))
* remove two fiches-SP fix [#1557](https://github.com/SocialGouv/code-du-travail-numerique/issues/1557) ([#1852](https://github.com/SocialGouv/code-du-travail-numerique/issues/1852)) ([fdf0a2d](https://github.com/SocialGouv/code-du-travail-numerique/commit/fdf0a2d))


### Features

* **frontend:** gorgeous layout ([#1828](https://github.com/SocialGouv/code-du-travail-numerique/issues/1828)) ([238be0c](https://github.com/SocialGouv/code-du-travail-numerique/commit/238be0c))
* **frontend:** new-ui-setup ([#1760](https://github.com/SocialGouv/code-du-travail-numerique/issues/1760)) ([eb6f032](https://github.com/SocialGouv/code-du-travail-numerique/commit/eb6f032))





# [3.7.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.6.2...v3.7.0) (2019-11-21)


### Bug Fixes

* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.34 ([#1739](https://github.com/SocialGouv/code-du-travail-numerique/issues/1739)) ([e4abb58](https://github.com/SocialGouv/code-du-travail-numerique/commit/e4abb58))
* **deps:** update dependency @socialgouv/kali-data to ^1.2.32 ([#1740](https://github.com/SocialGouv/code-du-travail-numerique/issues/1740)) ([87922b9](https://github.com/SocialGouv/code-du-travail-numerique/commit/87922b9))
* **deps:** update dependency @socialgouv/legi-data to ^1.1.10 ([#1757](https://github.com/SocialGouv/code-du-travail-numerique/issues/1757)) ([29a4095](https://github.com/SocialGouv/code-du-travail-numerique/commit/29a4095))
* **deps:** update dependency date-fns to ^2.8.0 ([#1743](https://github.com/SocialGouv/code-du-travail-numerique/issues/1743)) ([9940a0d](https://github.com/SocialGouv/code-du-travail-numerique/commit/9940a0d))


### Features

* **contrib:** add description in search results ([#1734](https://github.com/SocialGouv/code-du-travail-numerique/issues/1734)) ([6e31c3d](https://github.com/SocialGouv/code-du-travail-numerique/commit/6e31c3d)), closes [#1665](https://github.com/SocialGouv/code-du-travail-numerique/issues/1665)
* **data:** update datafiller, contribution, sitemap ([#1769](https://github.com/SocialGouv/code-du-travail-numerique/issues/1769)) ([6086d5b](https://github.com/SocialGouv/code-du-travail-numerique/commit/6086d5b))





## [3.6.2](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.6.1...v3.6.2) (2019-11-18)


### Bug Fixes

* **deps:** update dependency @socialgouv/kali-data to ^1.2.31 ([#1720](https://github.com/SocialGouv/code-du-travail-numerique/issues/1720)) ([0fb8402](https://github.com/SocialGouv/code-du-travail-numerique/commit/0fb8402))





## [3.6.1](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.6.0...v3.6.1) (2019-11-18)

**Note:** Version bump only for package @cdt/data





# 3.6.0 (2019-11-18)


### Bug Fixes

* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.22 ([#1668](https://github.com/SocialGouv/code-du-travail-numerique/issues/1668)) ([e5afa2a](https://github.com/SocialGouv/code-du-travail-numerique/commit/e5afa2a))
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.26 ([#1679](https://github.com/SocialGouv/code-du-travail-numerique/issues/1679)) ([4ab5e38](https://github.com/SocialGouv/code-du-travail-numerique/commit/4ab5e38))
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.27 ([#1695](https://github.com/SocialGouv/code-du-travail-numerique/issues/1695)) ([3ba1b4f](https://github.com/SocialGouv/code-du-travail-numerique/commit/3ba1b4f))
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.28 ([#1704](https://github.com/SocialGouv/code-du-travail-numerique/issues/1704)) ([fa2c902](https://github.com/SocialGouv/code-du-travail-numerique/commit/fa2c902))
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.29 ([#1711](https://github.com/SocialGouv/code-du-travail-numerique/issues/1711)) ([9b0cc15](https://github.com/SocialGouv/code-du-travail-numerique/commit/9b0cc15))
* **deps:** update dependency @socialgouv/fiches-vdd to ^1.0.32 ([#1719](https://github.com/SocialGouv/code-du-travail-numerique/issues/1719)) ([0510c47](https://github.com/SocialGouv/code-du-travail-numerique/commit/0510c47))
* **deps:** update dependency @socialgouv/kali-data to ^1.2.27 ([#1678](https://github.com/SocialGouv/code-du-travail-numerique/issues/1678)) ([860c3bc](https://github.com/SocialGouv/code-du-travail-numerique/commit/860c3bc))
* **deps:** update dependency @socialgouv/kali-data to ^1.2.28 ([#1696](https://github.com/SocialGouv/code-du-travail-numerique/issues/1696)) ([9925327](https://github.com/SocialGouv/code-du-travail-numerique/commit/9925327))
* **deps:** update dependency @socialgouv/kali-data to ^1.2.29 ([#1705](https://github.com/SocialGouv/code-du-travail-numerique/issues/1705)) ([3e90dab](https://github.com/SocialGouv/code-du-travail-numerique/commit/3e90dab))
* **deps:** update dependency @socialgouv/kali-data to ^1.2.30 ([#1712](https://github.com/SocialGouv/code-du-travail-numerique/issues/1712)) ([e60d2bd](https://github.com/SocialGouv/code-du-travail-numerique/commit/e60d2bd))
* **deps:** update dependency @socialgouv/legi-data to ^1.1.7 ([#1677](https://github.com/SocialGouv/code-du-travail-numerique/issues/1677)) ([7edd102](https://github.com/SocialGouv/code-du-travail-numerique/commit/7edd102))
* **deps:** update dependency @socialgouv/legi-data to ^1.1.8 ([#1694](https://github.com/SocialGouv/code-du-travail-numerique/issues/1694)) ([b97092d](https://github.com/SocialGouv/code-du-travail-numerique/commit/b97092d))
* **deps:** update dependency @socialgouv/legi-data to ^1.1.9 ([#1703](https://github.com/SocialGouv/code-du-travail-numerique/issues/1703)) ([2f99991](https://github.com/SocialGouv/code-du-travail-numerique/commit/2f99991))
* **deps:** update dependency date-fns to ^2.7.0 ([#1662](https://github.com/SocialGouv/code-du-travail-numerique/issues/1662)) ([c77414c](https://github.com/SocialGouv/code-du-travail-numerique/commit/c77414c))
* **deps:** update dependency ora to ^4.0.3 ([#1698](https://github.com/SocialGouv/code-du-travail-numerique/issues/1698)) ([31e2bf6](https://github.com/SocialGouv/code-du-travail-numerique/commit/31e2bf6))
* **deps:** update dependency query-string to ^6.9.0 ([#1697](https://github.com/SocialGouv/code-du-travail-numerique/issues/1697)) ([b5dce1b](https://github.com/SocialGouv/code-du-travail-numerique/commit/b5dce1b))
* **deps:** update remark monorepo ([#1682](https://github.com/SocialGouv/code-du-travail-numerique/issues/1682)) ([eac11ba](https://github.com/SocialGouv/code-du-travail-numerique/commit/eac11ba))
* **suggester:** update suggestions list ([#1714](https://github.com/SocialGouv/code-du-travail-numerique/issues/1714)) ([b86cd3f](https://github.com/SocialGouv/code-du-travail-numerique/commit/b86cd3f))


### Features

* **courrier-types:** remove manual script step on docs update ([#1699](https://github.com/SocialGouv/code-du-travail-numerique/issues/1699)) ([bd420bf](https://github.com/SocialGouv/code-du-travail-numerique/commit/bd420bf))
* **data:** unsplit fiches-mt ([#1657](https://github.com/SocialGouv/code-du-travail-numerique/issues/1657)) ([65f31f2](https://github.com/SocialGouv/code-du-travail-numerique/commit/65f31f2)), closes [#1394](https://github.com/SocialGouv/code-du-travail-numerique/issues/1394)
* **suggester:** Suggestions supported by Elastic Search ([#1549](https://github.com/SocialGouv/code-du-travail-numerique/issues/1549)) ([080744b](https://github.com/SocialGouv/code-du-travail-numerique/commit/080744b))





# [3.5.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.4.2...v3.5.0) (2019-11-06)

**Note:** Version bump only for package @cdt/data





## [3.4.2](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.4.1...v3.4.2) (2019-11-05)


### Bug Fixes

* **data:** prevent aliases from pointing to different indices ([#1638](https://github.com/SocialGouv/code-du-travail-numerique/issues/1638)) ([f42b9de](https://github.com/SocialGouv/code-du-travail-numerique/commit/f42b9de))
* **deps:** update dependency mammoth to ^1.4.9 ([#1614](https://github.com/SocialGouv/code-du-travail-numerique/issues/1614)) ([82eb676](https://github.com/SocialGouv/code-du-travail-numerique/commit/82eb676))





## [3.4.1](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.4.0...v3.4.1) (2019-11-05)

**Note:** Version bump only for package @cdt/data





# 3.4.0 (2019-11-05)


### Bug Fixes

* **api:** case where description was not returned ([#1539](https://github.com/SocialGouv/code-du-travail-numerique/issues/1539)) ([b8b7172](https://github.com/SocialGouv/code-du-travail-numerique/commit/b8b7172))
* **data:** update courriers.json ([#1565](https://github.com/SocialGouv/code-du-travail-numerique/issues/1565)) ([facc702](https://github.com/SocialGouv/code-du-travail-numerique/commit/facc702)), closes [#1524](https://github.com/SocialGouv/code-du-travail-numerique/issues/1524)
* **deps:** update dependency @socialgouv/fiches-vdd to v1.0.11 ([#1562](https://github.com/SocialGouv/code-du-travail-numerique/issues/1562)) ([6f5efb7](https://github.com/SocialGouv/code-du-travail-numerique/commit/6f5efb7))
* **deps:** update dependency @socialgouv/fiches-vdd to v1.0.12 ([#1583](https://github.com/SocialGouv/code-du-travail-numerique/issues/1583)) ([a60d9ba](https://github.com/SocialGouv/code-du-travail-numerique/commit/a60d9ba))
* **deps:** update dependency @socialgouv/fiches-vdd to v1.0.13 ([#1596](https://github.com/SocialGouv/code-du-travail-numerique/issues/1596)) ([48373b3](https://github.com/SocialGouv/code-du-travail-numerique/commit/48373b3))
* **deps:** update dependency @socialgouv/fiches-vdd to v1.0.14 ([#1599](https://github.com/SocialGouv/code-du-travail-numerique/issues/1599)) ([a2c634e](https://github.com/SocialGouv/code-du-travail-numerique/commit/a2c634e))
* **deps:** update dependency @socialgouv/fiches-vdd to v1.0.15 ([#1611](https://github.com/SocialGouv/code-du-travail-numerique/issues/1611)) ([b047b75](https://github.com/SocialGouv/code-du-travail-numerique/commit/b047b75))
* **deps:** update dependency @socialgouv/fiches-vdd to v1.0.18 ([#1612](https://github.com/SocialGouv/code-du-travail-numerique/issues/1612)) ([bc66dcd](https://github.com/SocialGouv/code-du-travail-numerique/commit/bc66dcd))
* **deps:** update dependency @socialgouv/fiches-vdd to v1.0.19 ([#1635](https://github.com/SocialGouv/code-du-travail-numerique/issues/1635)) ([d38e5f6](https://github.com/SocialGouv/code-du-travail-numerique/commit/d38e5f6))
* **deps:** update dependency @socialgouv/legi-data to ^1.1.5 ([#1574](https://github.com/SocialGouv/code-du-travail-numerique/issues/1574)) ([4e3488d](https://github.com/SocialGouv/code-du-travail-numerique/commit/4e3488d))
* **deps:** update dependency jsdom to ^15.2.1 ([#1615](https://github.com/SocialGouv/code-du-travail-numerique/issues/1615)) ([7f4783d](https://github.com/SocialGouv/code-du-travail-numerique/commit/7f4783d))
* **deps:** update dependency unist-util-select to v3 ([#1575](https://github.com/SocialGouv/code-du-travail-numerique/issues/1575)) ([6758c33](https://github.com/SocialGouv/code-du-travail-numerique/commit/6758c33))
* **preavis:** update data ([#1593](https://github.com/SocialGouv/code-du-travail-numerique/issues/1593)) ([ed9abb2](https://github.com/SocialGouv/code-du-travail-numerique/commit/ed9abb2)), closes [#1590](https://github.com/SocialGouv/code-du-travail-numerique/issues/1590)





## [3.3.1](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.3.0...v3.3.1) (2019-10-08)

**Note:** Version bump only for package @cdt/data





# [3.3.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.2.0...v3.3.0) (2019-10-04)


### Bug Fixes

* **deps:** update dependency @socialgouv/legi-data to ^1.1.1 ([#1301](https://github.com/SocialGouv/code-du-travail-numerique/issues/1301)) ([ddeeef4](https://github.com/SocialGouv/code-du-travail-numerique/commit/ddeeef4))
* **deps:** update dependency date-fns to ^2.3.0 ([#1315](https://github.com/SocialGouv/code-du-travail-numerique/issues/1315)) ([39cf467](https://github.com/SocialGouv/code-du-travail-numerique/commit/39cf467))
* **deps:** update dependency libxmljs to ^0.19.7 ([#1297](https://github.com/SocialGouv/code-du-travail-numerique/issues/1297)) ([219b1fa](https://github.com/SocialGouv/code-du-travail-numerique/commit/219b1fa))
* **deps:** update dependency ora to v4 ([#1298](https://github.com/SocialGouv/code-du-travail-numerique/issues/1298)) ([34472c8](https://github.com/SocialGouv/code-du-travail-numerique/commit/34472c8))
* **docker:** update docker-compose config ([#1312](https://github.com/SocialGouv/code-du-travail-numerique/issues/1312)) ([786dd5c](https://github.com/SocialGouv/code-du-travail-numerique/commit/786dd5c))


### Features

* **data:** add new fiches MT ([#1306](https://github.com/SocialGouv/code-du-travail-numerique/issues/1306)) ([99b1039](https://github.com/SocialGouv/code-du-travail-numerique/commit/99b1039))
* **data:** use new fiches vdd package ([#1316](https://github.com/SocialGouv/code-du-travail-numerique/issues/1316)) ([b93aa51](https://github.com/SocialGouv/code-du-travail-numerique/commit/b93aa51))





# [3.2.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.1.1...v3.2.0) (2019-09-23)


### Bug Fixes

* **data:** add title to cdt documents ([#1220](https://github.com/SocialGouv/code-du-travail-numerique/issues/1220)) ([8a85ab0](https://github.com/SocialGouv/code-du-travail-numerique/commit/8a85ab0))
* **data:** fix cdt indexed text filed name ([#1219](https://github.com/SocialGouv/code-du-travail-numerique/issues/1219)) ([c1ecba9](https://github.com/SocialGouv/code-du-travail-numerique/commit/c1ecba9))
* **data:** use @cdt/sources package ([#1275](https://github.com/SocialGouv/code-du-travail-numerique/issues/1275)) ([ad263d1](https://github.com/SocialGouv/code-du-travail-numerique/commit/ad263d1))
* **demission:** udpate data format ([#1210](https://github.com/SocialGouv/code-du-travail-numerique/issues/1210)) ([af15e15](https://github.com/SocialGouv/code-du-travail-numerique/commit/af15e15))
* **deps:** update dependency date-fns to ^2.2.1 ([#1234](https://github.com/SocialGouv/code-du-travail-numerique/issues/1234)) ([00c6c63](https://github.com/SocialGouv/code-du-travail-numerique/commit/00c6c63))
* **deps:** update dependency query-string to ^6.8.3 ([#1216](https://github.com/SocialGouv/code-du-travail-numerique/issues/1216)) ([26e1e5c](https://github.com/SocialGouv/code-du-travail-numerique/commit/26e1e5c))
* **deps:** update dependency slugify to ^1.3.5 ([#1238](https://github.com/SocialGouv/code-du-travail-numerique/issues/1238)) ([2ab4a5f](https://github.com/SocialGouv/code-du-travail-numerique/commit/2ab4a5f))


### Features

* **data:** add description to outils ([#1286](https://github.com/SocialGouv/code-du-travail-numerique/issues/1286)) ([949d841](https://github.com/SocialGouv/code-du-travail-numerique/commit/949d841))
* themes indexation ([#1263](https://github.com/SocialGouv/code-du-travail-numerique/issues/1263)) ([557e184](https://github.com/SocialGouv/code-du-travail-numerique/commit/557e184))
* **glossaire:** add glossary page and tooltip([#1269](https://github.com/SocialGouv/code-du-travail-numerique/issues/1269)) ([7defed9](https://github.com/SocialGouv/code-du-travail-numerique/commit/7defed9)), closes [#1186](https://github.com/SocialGouv/code-du-travail-numerique/issues/1186)





## [3.1.1](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.1.0...v3.1.1) (2019-08-26)


### Bug Fixes

* **deps:** update dependency axios to ^0.19.0 ([#1134](https://github.com/SocialGouv/code-du-travail-numerique/issues/1134)) ([1fe54d2](https://github.com/SocialGouv/code-du-travail-numerique/commit/1fe54d2))
* **deps:** update dependency csvtojson to ^2.0.10 ([#1135](https://github.com/SocialGouv/code-du-travail-numerique/issues/1135)) ([c001a04](https://github.com/SocialGouv/code-du-travail-numerique/commit/c001a04))
* **deps:** update dependency date-fns to ^2.0.1 ([#1156](https://github.com/SocialGouv/code-du-travail-numerique/issues/1156)) ([2f228e3](https://github.com/SocialGouv/code-du-travail-numerique/commit/2f228e3))
* **deps:** update dependency date-fns to v2.0.0 ([#1136](https://github.com/SocialGouv/code-du-travail-numerique/issues/1136)) ([8e0029e](https://github.com/SocialGouv/code-du-travail-numerique/commit/8e0029e))
* **deps:** update dependency jsdom to v15 ([#1174](https://github.com/SocialGouv/code-du-travail-numerique/issues/1174)) ([8983090](https://github.com/SocialGouv/code-du-travail-numerique/commit/8983090))
* **deps:** update dependency mammoth to ^1.4.8 ([#1142](https://github.com/SocialGouv/code-du-travail-numerique/issues/1142)) ([365c5e1](https://github.com/SocialGouv/code-du-travail-numerique/commit/365c5e1))
* **deps:** update dependency ora to ^3.4.0 ([#1144](https://github.com/SocialGouv/code-du-travail-numerique/issues/1144)) ([239a5df](https://github.com/SocialGouv/code-du-travail-numerique/commit/239a5df))
* **deps:** update dependency p-limit to ^2.2.1 ([#1145](https://github.com/SocialGouv/code-du-travail-numerique/issues/1145)) ([44b268a](https://github.com/SocialGouv/code-du-travail-numerique/commit/44b268a))
* **deps:** update dependency query-string to ^6.8.2 ([#1150](https://github.com/SocialGouv/code-du-travail-numerique/issues/1150)) ([3fa54e2](https://github.com/SocialGouv/code-du-travail-numerique/commit/3fa54e2))
* **deps:** update dependency superagent to v5 ([#1181](https://github.com/SocialGouv/code-du-travail-numerique/issues/1181)) ([d34b91a](https://github.com/SocialGouv/code-du-travail-numerique/commit/d34b91a))





# [3.1.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.0.4...v3.1.0) (2019-08-20)


### Features

* **frontend:** use new matomo :sparkles: ([#1102](https://github.com/SocialGouv/code-du-travail-numerique/issues/1102)) ([853d7cf](https://github.com/SocialGouv/code-du-travail-numerique/commit/853d7cf))





## [3.0.4](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.0.3...v3.0.4) (2019-08-14)

**Note:** Version bump only for package @cdt/data





## [3.0.3](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.0.2...v3.0.3) (2019-08-14)

**Note:** Version bump only for package @cdt/data





## [3.0.2](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.0.1...v3.0.2) (2019-08-14)

**Note:** Version bump only for package @cdt/data





## [3.0.1](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.0.0...v3.0.1) (2019-08-13)

**Note:** Version bump only for package @cdt/data





# [3.0.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.0.0-next.4...v3.0.0) (2019-08-13)

**Note:** Version bump only for package @cdt/data





# [3.0.0-next.4](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.0.0-next.3...v3.0.0-next.4) (2019-08-12)

**Note:** Version bump only for package @cdt/data





# [3.0.0-next.3](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.0.0-next.2...v3.0.0-next.3) (2019-08-12)

**Note:** Version bump only for package @cdt/data





# [3.0.0-next.2](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.0.0-next.1...v3.0.0-next.2) (2019-08-12)

**Note:** Version bump only for package @cdt/data





# [3.0.0-next.1](https://github.com/SocialGouv/code-du-travail-numerique/compare/v3.0.0-next.0...v3.0.0-next.1) (2019-08-11)

**Note:** Version bump only for package @cdt/data





# [3.0.0-next.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v2.5.1...v3.0.0-next.0) (2019-08-09)


### Bug Fixes

* **data:** update fiches sp following [#1075](https://github.com/SocialGouv/code-du-travail-numerique/issues/1075) ([#1081](https://github.com/SocialGouv/code-du-travail-numerique/issues/1081)) ([cfb2f2c](https://github.com/SocialGouv/code-du-travail-numerique/commit/cfb2f2c))





## [2.5.1](https://github.com/SocialGouv/code-du-travail-numerique/compare/v2.5.0...v2.5.1) (2019-07-25)

**Note:** Version bump only for package @cdt/data





# [2.5.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v2.3.2-spring...v2.5.0) (2019-07-25)


### Bug Fixes

* **api:** add a boost to article_id match ([#970](https://github.com/SocialGouv/code-du-travail-numerique/issues/970)) ([7b2ab7f](https://github.com/SocialGouv/code-du-travail-numerique/commit/7b2ab7f)), closes [#936](https://github.com/SocialGouv/code-du-travail-numerique/issues/936)
* **data:** FAQ : remove invalid answer in ([#1029](https://github.com/SocialGouv/code-du-travail-numerique/issues/1029)) ([f88e006](https://github.com/SocialGouv/code-du-travail-numerique/commit/f88e006))
* **data:** fix french indexing ([#983](https://github.com/SocialGouv/code-du-travail-numerique/issues/983)) ([00e4e13](https://github.com/SocialGouv/code-du-travail-numerique/commit/00e4e13))
* **data:** fix typo in cdtn mapping ([#995](https://github.com/SocialGouv/code-du-travail-numerique/issues/995)) ([2031ba3](https://github.com/SocialGouv/code-du-travail-numerique/commit/2031ba3))
* **data:** fix typo in synonyms ([#1018](https://github.com/SocialGouv/code-du-travail-numerique/issues/1018)) ([876e9f3](https://github.com/SocialGouv/code-du-travail-numerique/commit/876e9f3))
* **data:** improve cdtn synonyms syntax ([#982](https://github.com/SocialGouv/code-du-travail-numerique/issues/982)) ([bec2c3b](https://github.com/SocialGouv/code-du-travail-numerique/commit/bec2c3b))
* **data:** typo in modele lettre ([#974](https://github.com/SocialGouv/code-du-travail-numerique/issues/974)) ([92509af](https://github.com/SocialGouv/code-du-travail-numerique/commit/92509af)), closes [#975](https://github.com/SocialGouv/code-du-travail-numerique/issues/975)
* **data:** update fiches Mt data with and internal ID to track fiche ID ([#1033](https://github.com/SocialGouv/code-du-travail-numerique/issues/1033)) ([0c7777a](https://github.com/SocialGouv/code-du-travail-numerique/commit/0c7777a))


### Features

* **data:** add datafiller results to api ([#906](https://github.com/SocialGouv/code-du-travail-numerique/issues/906)) ([c4f5810](https://github.com/SocialGouv/code-du-travail-numerique/commit/c4f5810)), closes [#887](https://github.com/SocialGouv/code-du-travail-numerique/issues/887)
* **data:** add glossary terms to dataset ([#977](https://github.com/SocialGouv/code-du-travail-numerique/issues/977)) ([330748c](https://github.com/SocialGouv/code-du-travail-numerique/commit/330748c)), closes [#976](https://github.com/SocialGouv/code-du-travail-numerique/issues/976)
* **frontend:** add page /stats for ([#895](https://github.com/SocialGouv/code-du-travail-numerique/issues/895)) ([8f87f27](https://github.com/SocialGouv/code-du-travail-numerique/commit/8f87f27)), closes [#873](https://github.com/SocialGouv/code-du-travail-numerique/issues/873) [#873](https://github.com/SocialGouv/code-du-travail-numerique/issues/873)
* **frontend:** add simulateur indemnite precarite ([#1023](https://github.com/SocialGouv/code-du-travail-numerique/issues/1023)) ([f6327bc](https://github.com/SocialGouv/code-du-travail-numerique/commit/f6327bc)), closes [#933](https://github.com/SocialGouv/code-du-travail-numerique/issues/933)





# [2.4.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v2.3.2-spring...v2.4.0) (2019-07-24)


### Bug Fixes

* **api:** add a boost to article_id match ([#970](https://github.com/SocialGouv/code-du-travail-numerique/issues/970)) ([7b2ab7f](https://github.com/SocialGouv/code-du-travail-numerique/commit/7b2ab7f)), closes [#936](https://github.com/SocialGouv/code-du-travail-numerique/issues/936)
* **data:** FAQ : remove invalid answer in ([#1029](https://github.com/SocialGouv/code-du-travail-numerique/issues/1029)) ([f88e006](https://github.com/SocialGouv/code-du-travail-numerique/commit/f88e006))
* **data:** fix french indexing ([#983](https://github.com/SocialGouv/code-du-travail-numerique/issues/983)) ([00e4e13](https://github.com/SocialGouv/code-du-travail-numerique/commit/00e4e13))
* **data:** fix typo in cdtn mapping ([#995](https://github.com/SocialGouv/code-du-travail-numerique/issues/995)) ([2031ba3](https://github.com/SocialGouv/code-du-travail-numerique/commit/2031ba3))
* **data:** fix typo in synonyms ([#1018](https://github.com/SocialGouv/code-du-travail-numerique/issues/1018)) ([876e9f3](https://github.com/SocialGouv/code-du-travail-numerique/commit/876e9f3))
* **data:** improve cdtn synonyms syntax ([#982](https://github.com/SocialGouv/code-du-travail-numerique/issues/982)) ([bec2c3b](https://github.com/SocialGouv/code-du-travail-numerique/commit/bec2c3b))
* **data:** typo in modele lettre ([#974](https://github.com/SocialGouv/code-du-travail-numerique/issues/974)) ([92509af](https://github.com/SocialGouv/code-du-travail-numerique/commit/92509af)), closes [#975](https://github.com/SocialGouv/code-du-travail-numerique/issues/975)
* **data:** update fiches Mt data with and internal ID to track fiche ID ([#1033](https://github.com/SocialGouv/code-du-travail-numerique/issues/1033)) ([0c7777a](https://github.com/SocialGouv/code-du-travail-numerique/commit/0c7777a))


### Features

* **data:** add datafiller results to api ([#906](https://github.com/SocialGouv/code-du-travail-numerique/issues/906)) ([c4f5810](https://github.com/SocialGouv/code-du-travail-numerique/commit/c4f5810)), closes [#887](https://github.com/SocialGouv/code-du-travail-numerique/issues/887)
* **data:** add glossary terms to dataset ([#977](https://github.com/SocialGouv/code-du-travail-numerique/issues/977)) ([330748c](https://github.com/SocialGouv/code-du-travail-numerique/commit/330748c)), closes [#976](https://github.com/SocialGouv/code-du-travail-numerique/issues/976)
* **frontend:** add page /stats for ([#895](https://github.com/SocialGouv/code-du-travail-numerique/issues/895)) ([8f87f27](https://github.com/SocialGouv/code-du-travail-numerique/commit/8f87f27)), closes [#873](https://github.com/SocialGouv/code-du-travail-numerique/issues/873) [#873](https://github.com/SocialGouv/code-du-travail-numerique/issues/873)
* **frontend:** add simulateur indemnite precarite ([#1023](https://github.com/SocialGouv/code-du-travail-numerique/issues/1023)) ([f6327bc](https://github.com/SocialGouv/code-du-travail-numerique/commit/f6327bc)), closes [#933](https://github.com/SocialGouv/code-du-travail-numerique/issues/933)





# [2.3.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v2.2.0...v2.3.0) (2019-04-10)


### Bug Fixes

* **data:** fix typo & html markup in faq.json ([#690](https://github.com/SocialGouv/code-du-travail-numerique/issues/690)) ([39f215a](https://github.com/SocialGouv/code-du-travail-numerique/commit/39f215a))





# [2.2.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v2.1.0...v2.2.0) (2019-04-09)


### Bug Fixes

* **api:** add match phrase prefix to idcc search ([#662](https://github.com/SocialGouv/code-du-travail-numerique/issues/662)) ([e1ad3f1](https://github.com/SocialGouv/code-du-travail-numerique/commit/e1ad3f1)), closes [#622](https://github.com/SocialGouv/code-du-travail-numerique/issues/622)
* **frontend:** fix theme links and use a single route for themes ([#672](https://github.com/SocialGouv/code-du-travail-numerique/issues/672)) ([089c53a](https://github.com/SocialGouv/code-du-travail-numerique/commit/089c53a))





# 2.1.0 (2019-03-26)


### Bug Fixes

* **frontend:** styled-components-classnames ([#633](https://github.com/SocialGouv/code-du-travail-numerique/issues/633)) ([32e9911](https://github.com/SocialGouv/code-du-travail-numerique/commit/32e9911))





# [2.0.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v1.8.0...v2.0.0) (2019-03-08)


### Bug Fixes

* **data:** add vlep in synonyms ([#571](https://github.com/SocialGouv/code-du-travail-numerique/issues/571)) ([6420d8f](https://github.com/SocialGouv/code-du-travail-numerique/commit/6420d8f))
* **data:** make unique slugs for faqs ([#500](https://github.com/SocialGouv/code-du-travail-numerique/issues/500)) ([2fcb7f8](https://github.com/SocialGouv/code-du-travail-numerique/commit/2fcb7f8))
* **data:** update elastic configuration ([#566](https://github.com/SocialGouv/code-du-travail-numerique/issues/566)) ([09e0b96](https://github.com/SocialGouv/code-du-travail-numerique/commit/09e0b96)), closes [#537](https://github.com/SocialGouv/code-du-travail-numerique/issues/537) [#498](https://github.com/SocialGouv/code-du-travail-numerique/issues/498) [#112](https://github.com/SocialGouv/code-du-travail-numerique/issues/112)
* **data:** update stopwords ([#580](https://github.com/SocialGouv/code-du-travail-numerique/issues/580)) ([b19543d](https://github.com/SocialGouv/code-du-travail-numerique/commit/b19543d))
* **data:** update synonyms.json ([#572](https://github.com/SocialGouv/code-du-travail-numerique/issues/572)) ([868b9f6](https://github.com/SocialGouv/code-du-travail-numerique/commit/868b9f6))
* **frontend:** improve metadata for calcul-indemnité-licenciement ([#557](https://github.com/SocialGouv/code-du-travail-numerique/issues/557)) ([f1da00d](https://github.com/SocialGouv/code-du-travail-numerique/commit/f1da00d)), closes [#474](https://github.com/SocialGouv/code-du-travail-numerique/issues/474)


### Features

* **data:** refactor KALI data to use legixplore API  ([e6ae16c](https://github.com/SocialGouv/code-du-travail-numerique/commit/e6ae16c)), closes [#533](https://github.com/SocialGouv/code-du-travail-numerique/issues/533)
* **data:** update code-du-travail au 1er Janvier 2019 ([#558](https://github.com/SocialGouv/code-du-travail-numerique/issues/558)) ([4b8ad48](https://github.com/SocialGouv/code-du-travail-numerique/commit/4b8ad48))
* **data:** update fiche-service public ([#560](https://github.com/SocialGouv/code-du-travail-numerique/issues/560)) ([fcf5e6a](https://github.com/SocialGouv/code-du-travail-numerique/commit/fcf5e6a))
* **frontend:** add snippet answers ([#518](https://github.com/SocialGouv/code-du-travail-numerique/issues/518)) ([5c91a40](https://github.com/SocialGouv/code-du-travail-numerique/commit/5c91a40)), closes [#409](https://github.com/SocialGouv/code-du-travail-numerique/issues/409)


### BREAKING CHANGES

* **data:** json payload updated for KALI

- removed deprecated data files
- removed NAF information
- refactored kali dataset to hit the new legixplore API.





# [1.8.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v1.7.4...v1.8.0) (2019-02-12)


### Bug Fixes

* **annuaire:** add feedback from last GT meeting ([#478](https://github.com/SocialGouv/code-du-travail-numerique/issues/478)) ([8c28f01](https://github.com/SocialGouv/code-du-travail-numerique/commit/8c28f01)), closes [#464](https://github.com/SocialGouv/code-du-travail-numerique/issues/464)
* **data:** add template for releve d'heures sup ([#503](https://github.com/SocialGouv/code-du-travail-numerique/issues/503)) ([3cec00c](https://github.com/SocialGouv/code-du-travail-numerique/commit/3cec00c)), closes [#363](https://github.com/SocialGouv/code-du-travail-numerique/issues/363)
* **data:** udpate typo in courriers ([#511](https://github.com/SocialGouv/code-du-travail-numerique/issues/511)) ([b892c9a](https://github.com/SocialGouv/code-du-travail-numerique/commit/b892c9a))
* **data:** update fiches ministere url ([#505](https://github.com/SocialGouv/code-du-travail-numerique/issues/505)) ([405892c](https://github.com/SocialGouv/code-du-travail-numerique/commit/405892c))
* **scrap:** add ariane+tags for fiches ministere-travail ([#510](https://github.com/SocialGouv/code-du-travail-numerique/issues/510)) ([ddc2c02](https://github.com/SocialGouv/code-du-travail-numerique/commit/ddc2c02))


### Features

* **data:** add a tag extractor script ([#489](https://github.com/SocialGouv/code-du-travail-numerique/issues/489)) ([7261a0c](https://github.com/SocialGouv/code-du-travail-numerique/commit/7261a0c))



## [1.7.3](https://github.com/SocialGouv/code-du-travail-numerique/compare/v1.7.2...v1.7.3) (2019-01-29)


### Bug Fixes

* **api:** update test after mapping change ([#461](https://github.com/SocialGouv/code-du-travail-numerique/issues/461)) ([59d6b43](https://github.com/SocialGouv/code-du-travail-numerique/commit/59d6b43)), closes [#330](https://github.com/SocialGouv/code-du-travail-numerique/issues/330) [#116](https://github.com/SocialGouv/code-du-travail-numerique/issues/116) [#416](https://github.com/SocialGouv/code-du-travail-numerique/issues/416)
* **data:** mise à jour des metadata des courrier ([#431](https://github.com/SocialGouv/code-du-travail-numerique/issues/431)) ([bc4c9e7](https://github.com/SocialGouv/code-du-travail-numerique/commit/bc4c9e7)), closes [#429](https://github.com/SocialGouv/code-du-travail-numerique/issues/429)
* **data:** update faq.json ([#438](https://github.com/SocialGouv/code-du-travail-numerique/issues/438)) ([5979aa0](https://github.com/SocialGouv/code-du-travail-numerique/commit/5979aa0))





## [1.7.1](https://github.com/SocialGouv/code-du-travail-numerique/compare/v1.7.0...v1.7.1) (2019-01-18)

**Note:** Version bump only for package @cdt/data





# [1.7.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v1.6.2...v1.7.0) (2019-01-15)


### Features

* **data:** index one question only from fiche ministere travail ([#423](https://github.com/SocialGouv/code-du-travail-numerique/issues/423)) ([1416995](https://github.com/SocialGouv/code-du-travail-numerique/commit/1416995)), closes [#270](https://github.com/SocialGouv/code-du-travail-numerique/issues/270)





## [1.6.2](https://github.com/SocialGouv/code-du-travail-numerique/compare/v1.6.1...v1.6.2) (2018-12-19)

**Note:** Version bump only for package @cdt/data





# [1.6.0](https://github.com/SocialGouv/code-du-travail-numerique/compare/v1.5.2...v1.6.0) (2018-12-18)


### Bug Fixes

* **data:** fix indexing fiches-ministere ([#383](https://github.com/SocialGouv/code-du-travail-numerique/issues/383)) ([0413175](https://github.com/SocialGouv/code-du-travail-numerique/commit/0413175))
* **data:** remove faq-convention-collective from index ([#378](https://github.com/SocialGouv/code-du-travail-numerique/issues/378)) ([bc1d6d8](https://github.com/SocialGouv/code-du-travail-numerique/commit/bc1d6d8))
* **frontend:** fix theme navigation ([#376](https://github.com/SocialGouv/code-du-travail-numerique/issues/376)) ([2bf4582](https://github.com/SocialGouv/code-du-travail-numerique/commit/2bf4582)), closes [#372](https://github.com/SocialGouv/code-du-travail-numerique/issues/372)


### Features

* add related content for faq ([#370](https://github.com/SocialGouv/code-du-travail-numerique/issues/370)) ([853ae51](https://github.com/SocialGouv/code-du-travail-numerique/commit/853ae51))
* **data:** add faq contribution ([#337](https://github.com/SocialGouv/code-du-travail-numerique/issues/337)) ([945726d](https://github.com/SocialGouv/code-du-travail-numerique/commit/945726d))
* **data:** ajout de nouveaux courriers ([#367](https://github.com/SocialGouv/code-du-travail-numerique/issues/367)) ([e60779f](https://github.com/SocialGouv/code-du-travail-numerique/commit/e60779f)), closes [#318](https://github.com/SocialGouv/code-du-travail-numerique/issues/318)
* **data:** ajout des fiches santé ministere-travail ([#366](https://github.com/SocialGouv/code-du-travail-numerique/issues/366)) ([572f62a](https://github.com/SocialGouv/code-du-travail-numerique/commit/572f62a)), closes [#121](https://github.com/SocialGouv/code-du-travail-numerique/issues/121)



## [1.5.2](https://github.com/SocialGouv/code-du-travail-numerique/compare/v1.5.1...v1.5.2) (2018-12-12)

**Note:** Version bump only for package @cdt/data





## [1.5.1](https://github.com/SocialGouv/code-du-travail-numerique/compare/ea229e5...v1.5.1) (2018-12-11)


### Bug Fixes

* **data:** [@jrduscher](https://github.com/jrduscher) fixes from old repo ([bfe58fa](https://github.com/SocialGouv/code-du-travail-numerique/commit/bfe58fa))
* **data:** add date in fiche ministere ([#288](https://github.com/SocialGouv/code-du-travail-numerique/issues/288)) ([212b94c](https://github.com/SocialGouv/code-du-travail-numerique/commit/212b94c))
* **data:** add date on  fiche minisitere ([#304](https://github.com/SocialGouv/code-du-travail-numerique/issues/304)) ([0cb0338](https://github.com/SocialGouv/code-du-travail-numerique/commit/0cb0338))
* **data:** add date to fiche service public ([#303](https://github.com/SocialGouv/code-du-travail-numerique/issues/303)) ([4c62d76](https://github.com/SocialGouv/code-du-travail-numerique/commit/4c62d76)), closes [#273](https://github.com/SocialGouv/code-du-travail-numerique/issues/273)
* **data:** add Q/R on ass-mat to faq ([#329](https://github.com/SocialGouv/code-du-travail-numerique/issues/329)) ([f943a73](https://github.com/SocialGouv/code-du-travail-numerique/commit/f943a73))
* **data:** better warnings ([58ad37f](https://github.com/SocialGouv/code-du-travail-numerique/commit/58ad37f))
* **data:** faq: use nested tags property ([#205](https://github.com/SocialGouv/code-du-travail-numerique/issues/205)) ([e8e27be](https://github.com/SocialGouv/code-du-travail-numerique/commit/e8e27be))
* **data:** fiches s-p : restore old data but add html ([6f8694d](https://github.com/SocialGouv/code-du-travail-numerique/commit/6f8694d))
* **data:** fix python indexing ([#342](https://github.com/SocialGouv/code-du-travail-numerique/issues/342)) ([73afc30](https://github.com/SocialGouv/code-du-travail-numerique/commit/73afc30))
* **data:** remove convention-collective 2121 from ES ([#289](https://github.com/SocialGouv/code-du-travail-numerique/issues/289)) ([d8c9225](https://github.com/SocialGouv/code-du-travail-numerique/commit/d8c9225))
* **data:** update faq.json ([#240](https://github.com/SocialGouv/code-du-travail-numerique/issues/240)) ([5788716](https://github.com/SocialGouv/code-du-travail-numerique/commit/5788716))
* **data:** update fiches service public ([#268](https://github.com/SocialGouv/code-du-travail-numerique/issues/268)) ([7548ae2](https://github.com/SocialGouv/code-du-travail-numerique/commit/7548ae2))
* **data:** update themes.csv ([#320](https://github.com/SocialGouv/code-du-travail-numerique/issues/320)) ([c285f05](https://github.com/SocialGouv/code-du-travail-numerique/commit/c285f05))
* **dev:** update dev in npm run script ([a34ee9a](https://github.com/SocialGouv/code-du-travail-numerique/commit/a34ee9a))
* **docker:** fix ES_PORT, move data docker scripts to data ([850dc5b](https://github.com/SocialGouv/code-du-travail-numerique/commit/850dc5b))
* **docker:** restore docker setup ([ea229e5](https://github.com/SocialGouv/code-du-travail-numerique/commit/ea229e5))
* **dockerify:** add missing .env ([c612762](https://github.com/SocialGouv/code-du-travail-numerique/commit/c612762))
* **frontend:** update convention modal to request elastic search  ([#319](https://github.com/SocialGouv/code-du-travail-numerique/issues/319)) ([0c91820](https://github.com/SocialGouv/code-du-travail-numerique/commit/0c91820))
* remove outils until fix bug ([#248](https://github.com/SocialGouv/code-du-travail-numerique/issues/248)) ([e089999](https://github.com/SocialGouv/code-du-travail-numerique/commit/e089999))
* typos in outils.json ([#292](https://github.com/SocialGouv/code-du-travail-numerique/issues/292)) ([013cbc6](https://github.com/SocialGouv/code-du-travail-numerique/commit/013cbc6))
* **faq:** add info provider(DGT, DIRRECTE) to faq ([#188](https://github.com/SocialGouv/code-du-travail-numerique/issues/188)) ([d287852](https://github.com/SocialGouv/code-du-travail-numerique/commit/d287852))


### Features

* **courrier-type:** add page and search for standard mail ([#147](https://github.com/SocialGouv/code-du-travail-numerique/issues/147)) ([#173](https://github.com/SocialGouv/code-du-travail-numerique/issues/173)) ([24b8175](https://github.com/SocialGouv/code-du-travail-numerique/commit/24b8175))
* **courrier-type:** index standart mail ([bf94971](https://github.com/SocialGouv/code-du-travail-numerique/commit/bf94971))
* **data:** add faq conventions collectives ([1d303d4](https://github.com/SocialGouv/code-du-travail-numerique/commit/1d303d4))
* **data:** add sub dataset module to the monorepo ([#295](https://github.com/SocialGouv/code-du-travail-numerique/issues/295)) ([3288499](https://github.com/SocialGouv/code-du-travail-numerique/commit/3288499))
* **frontend:** add annuaire search ([#357](https://github.com/SocialGouv/code-du-travail-numerique/issues/357)) ([dc7b5db](https://github.com/SocialGouv/code-du-travail-numerique/commit/dc7b5db))
* **search:** ajout conventions collectives fix [#99](https://github.com/SocialGouv/code-du-travail-numerique/issues/99) : ([204c08d](https://github.com/SocialGouv/code-du-travail-numerique/commit/204c08d))


### BREAKING CHANGES

* **data:** add sub dataset module to the monorepo

This might impact the build script as the newest in range dependencies are used now.

* ci: ignore @cdt/data* packages when testing
