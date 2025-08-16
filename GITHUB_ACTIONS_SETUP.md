# GitHub Actions Setup Guide

This guide explains how to set up GitHub Actions to automatically test and publish your package to npmjs.

## 🚀 What the Workflow Does

The GitHub Actions workflow will:

1. **On Pull Requests**: Run tests and build to ensure code quality
2. **On Tags (v*)**:
   - Run tests and build
   - Publish to npmjs (if tests pass)
   - Create a GitHub release

## ⚙️ Setup Steps

### 1. Create NPM Token

1. Go to [npmjs.com](https://www.npmjs.com/) and login
2. Click on your profile → "Access Tokens"
3. Click "Generate New Token"
4. Select "Automation" token type
5. Copy the generated token

### 2. Add NPM Token to GitHub Secrets

1. Go to your GitHub repository
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Name: `NPM_TOKEN`
5. Value: Your npm token from step 1
6. Click "Add secret"

### 3. Workflow Files

The repository now includes:
- `.github/workflows/npm-publish.yml` - Main workflow for testing and publishing
- `.github/workflows/ci-cd.yml` - Extended workflow with multiple Node.js versions

## 🔄 How to Use

### For Testing (Pull Requests)
- Push to any branch and create a PR
- GitHub Actions will automatically run tests
- Check the "Actions" tab to see results

### For Publishing (Releases)
1. Update version in `package.json`
2. Commit and push changes
3. Create and push a tag:
   ```bash
   git tag v2.1.1
   git push origin v2.1.1
   ```
4. GitHub Actions will automatically:
   - Run tests
   - Build the project
   - Publish to npmjs
   - Create a GitHub release

## 📋 Workflow Details

### Test Job
- Runs on Ubuntu with Node.js 22.x
- Installs dependencies with `npm ci`
- Runs tests with `npm run test:ci`
- Builds project with `npm run build`
- Uploads build artifacts

### Publish Job
- Only runs when a tag is pushed
- Requires test job to pass first
- Publishes to npmjs with `npm publish --access public`
- Uses NPM_TOKEN from GitHub secrets

## 🛠️ Troubleshooting

### Common Issues

1. **Tests Fail**: Check the test output in Actions tab
2. **Build Fails**: Verify all dependencies are in package.json
3. **Publish Fails**: Check NPM_TOKEN is set correctly
4. **Permission Denied**: Ensure you have write access to the repository

### Manual Trigger

You can manually trigger the workflow:
1. Go to "Actions" tab
2. Click on the workflow
3. Click "Run workflow"
4. Select branch and click "Run workflow"

## 🔒 Security Notes

- NPM_TOKEN is stored as a GitHub secret (encrypted)
- Only repository owners can see/edit secrets
- The token has minimal required permissions
- Workflow only publishes on tag pushes (not on every commit)

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [NPM Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
