## bump-types

Type declarations of [bump.lua](https://github.com/kikito/bump.lua), a collision detection library for Lua

**NOTE: This Declaration is Designed to be used with [TypeScriptToLua](https://typescripttolua.github.io), Not Common Typescript**

| Command | Description |
|-|-|
|`yarn add -D bump-types`| Install this declaration |
|`yarn add bump@git+https://github.com/kikito/bump.lua.git`| Install bump.lua as "bump" |

Upon installation this declaration package can be linked to a *tsconfig.json* file.

```json
{
    "compilerOptions": {
        "types": [
            "bump-types"
        ]
    }
}
```

And used anywhere like this:

```typescript
import * as bump from "bump"

let world = bump.newWorld(32)
```

Make sure to append ";./node_modules/?/?.lua" to your package.path in a conf.ts file (this is run first) to assist where Lua looks for modules. (for love2d you can just insert this to *conf.ts*)

```typescript
package.path += ";./node_modules/?/?.lua"
```
