# TypeScript

## What is TypeScript?

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It's a superset of JavaScript that adds static type definitions, making your code more predictable and easier to debug.

## Key Features

- **Static Type Checking**: Catch errors at compile time rather than runtime
- **Modern JavaScript Features**: Use the latest ECMAScript features
- **Rich IDE Support**: Enhanced autocomplete, navigation, and refactoring
- **Gradual Adoption**: Can be introduced incrementally to existing JavaScript projects
- **Compile-time Error Detection**: Find bugs before your code runs

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

```bash
# Install TypeScript globally
npm install -g typescript

# Or install locally in your project
npm install --save-dev typescript
```

### Basic Usage

1. Create a TypeScript file (`.ts` extension)
2. Write TypeScript code with type annotations
3. Compile to JavaScript using `tsc` command

```typescript
// example.ts
function greet(name: string): string {
    return `Hello, ${name}!`;
}

const message = greet("TypeScript");
console.log(message);
```

### Compilation

```bash
# Compile a single file
tsc example.ts

# Compile all TypeScript files
tsc

# Watch mode (recompile on changes)
tsc --watch
```

## Configuration

Create a `tsconfig.json` file to configure TypeScript compiler options:

```json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
}
```

## Resources

- [Official TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)

## License

This project is licensed under the MIT License.