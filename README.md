# Vibecode Mobile App Template

An AI-first Expo + React Native template designed for building production-grade mobile applications with Claude Code. This template enforces quality through automated testing, linting, and type checking, making it safe for AI-driven development.

## What is Vibecoding?

Vibecoding is a development approach where:
- **You describe what you want** (the "vibe")
- **Claude Code writes the code** (follows strict patterns)
- **The system enforces quality** (tests, types, linting)

No coding knowledge required. Just describe your idea, and Claude handles the implementation.

## Tech Stack

- **Expo 54** - Universal React framework for iOS, Android, and web
- **React Native 0.81** - Native mobile development with React
- **Expo Router** - File-based routing for native apps
- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe code (strict mode)
- **react-native-svg** - SVG support for mobile
- **Vitest** - Fast unit testing
- **ESLint** - Code quality enforcement
- **EAS** - Expo Application Services for builds and deployment
- **pnpm** - Fast, disk-efficient package manager

## Prerequisites

Before you start, you need:

1. **Node.js 20 or higher**
   ```bash
   node --version  # Should be v20.x.x or higher
   ```
   Download from [nodejs.org](https://nodejs.org/)

2. **pnpm package manager**
   ```bash
   corepack enable  # Enables pnpm
   pnpm --version   # Should be v10.x.x or higher
   ```

3. **Git**
   ```bash
   git --version
   ```

4. **Claude Code** (optional but recommended)
   - Install from [claude.com/claude-code](https://claude.com/claude-code)
   - Provides AI-powered development assistance

5. **Expo Account** (for EAS builds and deployment)
   - Sign up at [expo.dev](https://expo.dev)
   - Install EAS CLI (included as dev dependency)

6. **Mobile Development Setup**
   - **iOS**: macOS with Xcode installed
   - **Android**: Android Studio with Android SDK
   - **Quick Start**: Use Expo Go app for testing (no setup required)

## Getting Started

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd vibecode-mobile-app-template

# Install dependencies
pnpm install
```

### 2. Configure Environment Variables

```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your API URL:
# EXPO_PUBLIC_API_URL=https://your-api.example.com
```

**Note**: Only use `EXPO_PUBLIC_*` prefix for environment variables in Expo. They are accessible in your app via `lib/env.ts`.

### 3. Start Development

```bash
# Start Expo dev server
pnpm start
```

This will show a QR code. You can:
- **Scan with Expo Go app** (iOS/Android) - easiest way to test
- **Press `i`** to open iOS simulator (requires Xcode)
- **Press `a`** to open Android emulator (requires Android Studio)
- **Press `w`** to open in web browser

### 4. Verify Everything Works

```bash
# Run all quality checks
pnpm verify
```

This runs:
- ✓ ESLint (code quality)
- ✓ TypeScript (type checking)
- ✓ Vitest (all tests)

## Available Commands

```bash
pnpm start        # Start Expo dev server
pnpm android      # Run on Android device/emulator
pnpm ios          # Run on iOS simulator (macOS only)
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript compiler
pnpm test         # Run tests once
pnpm verify       # Run ALL checks (lint + typecheck + test)
```

## Project Structure

```
vibecode-mobile-app-template/
├── app/                    # Expo Router screens (routing only)
│   ├── index.tsx          # Home screen
│   └── _layout.tsx        # Root layout
├── components/
│   ├── ui/                # Reusable UI components
│   └── layout/            # Layout components (navigation, headers)
├── features/              # Feature modules (ALL business logic)
├── hooks/                 # Shared React hooks
├── lib/                   # Utilities and infrastructure
│   └── env.ts            # Environment variable validation
├── assets/                # Images, fonts, and static files
├── docs/                  # Project documentation
├── CLAUDE.md              # AI behavior guidelines (IMPORTANT!)
├── app.json              # Expo configuration
└── eas.json              # EAS build configuration
```

## Working with Claude Code

This template includes `CLAUDE.md`, which contains strict guidelines that Claude Code follows. Key behaviors:

- **Incremental development** - Large features are broken into small chunks
- **Tests are mandatory** - Every feature gets tests before completion
- **Quality checks** - Lint, typecheck, and test after every change
- **No guessing** - Claude asks questions when requirements are unclear

### Example Prompts

```
"Add a settings screen with theme toggle"
"Create a profile page with avatar picker"
"Build a todo list that saves to AsyncStorage"
"Add a camera screen with photo capture"
```

Claude will:
1. Break down the task into steps
2. Implement one step at a time
3. Write tests for each step
4. Verify everything passes
5. Show you progress and ask for confirmation

## Building and Deployment

This template uses Expo Application Services (EAS) for building and deploying.

### 1. Configure EAS

```bash
# Login to Expo
pnpm exec eas login

# Configure your project
pnpm exec eas build:configure
```

### 2. Development Build

For testing on physical devices:

```bash
# Build for iOS (requires Apple Developer account)
pnpm exec eas build --profile development --platform ios

# Build for Android
pnpm exec eas build --profile development --platform android
```

### 3. Production Build

For app store submission:

```bash
# Build for iOS App Store
pnpm exec eas build --profile production --platform ios

# Build for Google Play Store
pnpm exec eas build --profile production --platform android
```

### 4. Submit to App Stores

```bash
# Submit to iOS App Store
pnpm exec eas submit --platform ios

# Submit to Google Play Store
pnpm exec eas submit --platform android
```

**Note**: EAS builds run `pnpm verify` automatically. If tests, linting, or type checking fails, the build will fail. This is intentional - it keeps production quality high.

## Quality Guarantees

Every build must pass:

- ✅ **No ESLint errors or warnings** - Code quality enforced
- ✅ **No TypeScript errors** - 100% type-safe
- ✅ **All tests passing** - Behavior verified
- ✅ **Successful production build** - No runtime issues

If any check fails, the build is blocked.

## Platform-Specific Development

### iOS Development
- Requires macOS with Xcode
- Test on iOS Simulator or physical device
- Use Expo Go for quick testing without builds

### Android Development
- Works on macOS, Windows, or Linux
- Test on Android Emulator or physical device
- Use Expo Go for quick testing without builds

### Web Support
Expo Router supports web out of the box:
```bash
pnpm start
# Press 'w' to open in browser
```

## Working with Native Modules

When adding native dependencies:

1. **Check Expo compatibility**
   - Use [Expo SDK packages](https://docs.expo.dev/versions/latest/) when possible
   - Most common modules are included (Camera, Location, etc.)

2. **For custom native code**
   - Create a development build with `eas build`
   - Expo Go won't support custom native modules

3. **Always test before deployment**
   - Test on both iOS and Android
   - Verify on physical devices, not just simulators

## Learn More

- [Expo Documentation](https://docs.expo.dev)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [EAS Documentation](https://docs.expo.dev/eas/)
- [Vitest Testing](https://vitest.dev)

## Support

- Check `CLAUDE.md` for detailed development guidelines
- Check `docs/PROJECT_OVERVIEW.md` for architecture details
- Visit [Expo Forums](https://forums.expo.dev) for community support
- Open an issue on GitHub for bugs or questions

---

**Built for vibecoders. Powered by Claude Code.**
