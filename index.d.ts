/// <reference path="./BumpWorld.d.ts"/>

/** @noResolution */
declare module "bump" {

    /**
     * bump.lua
     * @description Lua collision-detection library for axis-aligned rectangles
     * @link https://github.com/kikito/bump.lua
     * @version 3.1.7
     * @author kikito
     * @license MIT
     */
    namespace bump {
        /**
         * Creating a bump collision world
         * @param cell_size An optional number defaults to 64, representing the size of the sides of the (squared) cells that will be used internally to provide the data
         * @noSelf
         */
        function newWorld(cell_size?: number): BumpWorld
    }

    export = bump
}
