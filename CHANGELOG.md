# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- GitHub Actions workflows for CI/CD automation
- Comprehensive testing setup with Jest and React Testing Library
- Automated npm publishing on version tags
- Build artifact preservation

### Changed
- Improved TypeScript configuration for modern React development
- Enhanced build process with Rollup 4

## [2.1.0] - 2024-12-17

### Added
- Complete test coverage for all components
- Integration tests for component interactions
- Test utilities and mocking setup
- Coverage reporting and CI integration

### Changed
- Upgraded to React 19.1.1
- Upgraded to TypeScript 5.9.2
- Upgraded to Rollup 4.46.2
- Enhanced TypeScript strict mode compliance
- Improved component type safety

### Fixed
- TypeScript strict mode compatibility issues
- React 19 compatibility improvements
- Build system modernization

## [2.0.2] - 2024-12-17

### Changed
- Package name updates for npm registry compatibility
- Version increment for publishing

## [2.0.1] - 2024-12-17

### Changed
- Package name updates for npm registry compatibility
- Version increment for publishing

## [2.0.0] - 2024-12-17

### Breaking Changes
- Major version bump for React 19 compatibility
- TypeScript configuration modernization
- Build system overhaul

### Added
- React 19 support
- Modern TypeScript configuration
- Rollup 4 build system
- Enhanced type definitions

### Changed
- Minimum Node.js version: 18.x
- Build output format improvements
- Development dependencies modernization

## [1.0.7] - 2024-12-17

### Changed
- Package name updates for npm registry compatibility
- Version increment for publishing

## [1.0.6] - 2024-12-17

### Changed
- Package name updates for npm registry compatibility
- Version increment for publishing

## [1.0.5] - 2024-12-17

### Changed
- Package name updates for npm registry compatibility
- Version increment for publishing

## [1.0.0] - 2024-12-17

### Added
- Initial release of React Rough Notation wrapper
- `RoughNotation` component for individual annotations
- `RoughNotationGroup` component for coordinated animations
- TypeScript support with comprehensive type definitions
- Support for all Rough Notation animation types
- Customizable styling and animation options
- React 18+ compatibility

### Features
- **RoughNotation Component**:
  - All Rough Notation animation types (underline, box, circle, highlight, etc.)
  - Customizable colors, stroke width, and animation duration
  - Show/hide animations with smooth transitions
  - Custom element support
  - TypeScript interfaces for props

- **RoughNotationGroup Component**:
  - Coordinated show/hide animations for multiple annotations
  - Automatic timing management
  - Dynamic children support
  - Context-based animation coordination

- **Build System**:
  - ES Modules and CommonJS support
  - Tree-shaking friendly
  - Optimized bundle sizes
  - Source maps for debugging

## Migration Guide

### From v1.x to v2.x

#### Breaking Changes
- **React Version**: Requires React 18+ (React 19 recommended)
- **Node.js**: Minimum version 18.x
- **TypeScript**: Requires TypeScript 4.9+

#### Package Updates
```bash
# Update React
npm install react@^19.0.0 react-dom@^19.0.0

# Update TypeScript
npm install typescript@^5.9.0

# Update build dependencies
npm install --save-dev rollup@^4.46.0
```

#### Configuration Updates
- Update `tsconfig.json` for modern React and TypeScript
- Ensure build scripts use `npm run build`
- Update CI/CD pipelines for new Node.js requirements

### From v2.0.x to v2.1.x

#### New Features
- Comprehensive test coverage
- GitHub Actions automation
- Automated npm publishing
- Enhanced development workflow

#### No Breaking Changes
- All existing functionality preserved
- Improved development experience
- Better CI/CD integration

## Contributing

When contributing to this project, please:

1. Follow the existing changelog format
2. Add entries under the appropriate version section
3. Use clear, descriptive language
4. Include breaking changes prominently
5. Reference issue numbers when applicable

## Version History

- **v1.0.0**: Initial release with basic functionality
- **v1.0.5-v1.0.7**: Package name and registry compatibility updates
- **v2.0.0**: Major upgrade to React 19 and modern tooling
- **v2.0.1-v2.0.2**: Publishing and registry updates
- **v2.1.0**: Testing infrastructure and CI/CD automation

## Support

For questions, issues, or contributions:

- **Issues**: [GitHub Issues](https://github.com/turahe/react-rough-notation/issues)
- **Discussions**: [GitHub Discussions](https://github.com/turahe/react-rough-notation/discussions)
- **Documentation**: [README.md](./README.md)
- **Testing Guide**: [TESTING.md](./TESTING.md)
- **GitHub Actions Setup**: [GITHUB_ACTIONS_SETUP.md](./GITHUB_ACTIONS_SETUP.md)
