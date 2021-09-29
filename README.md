## bump-types

Type declarations of [bump.lua](https://github.com/kikito/bump.lua), a collision detection library for Lua

**NOTE: This Declaration is Designed to be used with [TypeScriptToLua](https://typescripttolua.github.io), Not Common Typescript**

| Command | Description |
|-|-|
|`yarn add -D bump-types`| Install this declaration |
|`yarn add bump@kikito/bump.lua`| Install bump |

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

Make sure to append ";./node_modules/?/?.lua" to your package.path to assist where Lua looks for modules. (for love2d you will need to do this with [`love.filesystem.setRequirePath`](https://love2d.org/wiki/love.filesystem.setRequirePath))

```typescript
package.path += ";./node_modules/?/?.lua"

// ... or in love2d (main.ts, conf.ts won't work):

love.filesystem.setRequirePath(love.filesystem.getRequirePath() + ";node_modules/?/?.lua")
```
