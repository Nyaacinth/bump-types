import {BumpBulletInfo} from "./BumpBulletInfo"
import {BumpCollisionFilter} from "./BumpCollisionFilter"
import {BumpCollisionInfo} from "./BumpCollisionInfo"

/** Bump Collision World */
export interface IBumpWorld {
    /**
     * Insert a new item to the world
     * @param item Anything that matters to your collision, usually a game object or unique id
     * @param x Rectangle Position (X-axis)
     * @param y Rectangle Position (Y-axis)
     * @param width Rectangle Width
     * @param height Rectangle Height
     */
    add(item: any, x: number, y: number, width: number, height: number): void

    /**
     * Remove items from the world
     * @param item Something previously inserted in the world with `add`
     */
    remove(item: any): void

    /**
     * Changing the position and dimensions of items in the world
     * @param item Something previously inserted in the world with `add`
     * @param x New Position (X-axis)
     * @param y New Position (Y-axis)
     * @param width New Rectangle Width, defaults to previous width
     * @param height New Rectangle Height, defaults to previous height
     */
    update(item: any, x: number, y: number, width?: number, height?: number): void

    /**
     * Moving an item in the world with collision resolution
     * @see https://github.com/kikito/bump.lua#collision-resolution
     * @param item Something previously inserted in the world with `add`
     * @param goal_x Desired New Position (X-axis)
     * @param goal_y Desired New Position (Y-axis)
     * @param filter An optional function, by default, filter always returns "slide"
     * @returns
     * ```text
     * actual_x: The coordinates where the object ended up after colliding with other objects (X-axis)
     * actual_y: The coordinates where the object ended up after colliding with other objects (Y-axis)
     * colliables: An array of all the collisions that were detected, Each collision is a table
     *             The most important item in this table is `colliables[index: number].other`, which points to the item that collided with item
     * colliables_number: The amount of collisions produced, equivalent to colliables.length
     * ```
     * @see `colliables` [Collision info](https://github.com/kikito/bump.lua#collision-info)
     */
    move(
        item: any,
        goal_x: number,
        goal_y: number,
        filter?: BumpCollisionFilter
    ): LuaMultiReturn<[actual_x: number, actual_y: number, colliables: BumpCollisionInfo[], colliables_number: number]>

    /**
     * Checking for collisions without moving
     * @param item Something previously inserted in the world with `add`
     * @param goal_x Desired New Position (X-axis)
     * @param goal_y Desired New Position (Y-axis)
     * @param filter An optional function, by default, filter always returns "slide"
     * @returns
     * ```text
     * actual_x: The coordinates where the object ended up after colliding with other objects (X-axis)
     * actual_y: The coordinates where the object ended up after colliding with other objects (Y-axis)
     * colliables: An array of all the collisions that were detected, Each collision is a table
     *             The most important item in this table is `colliables[index: number].other`, which points to the item that collided with item
     * colliables_number: The amount of collisions produced, equivalent to colliables.length
     * ```
     * @see `colliables` [Collision info](https://github.com/kikito/bump.lua#collision-info)
     */
    check(
        item: any,
        goal_x: number,
        goal_y: number,
        filter?: BumpCollisionFilter
    ): LuaMultiReturn<[actual_x: number, actual_y: number, colliables: BumpCollisionInfo[], colliables_number: number]>

    /**
     * Querying with a point
     * @param x The coordinates of the point that is being checked (X-axis)
     * @param y The coordinates of the point that is being checked (Y-axis)
     * @param filter An optional function, , used to "filter out" which items are returned. If `filter(item)` returns false/null/undefined, that item is ignored. By default, all items are included
     * @returns
     * ```text
     * items: The list items from the ones inserted on the world, contain the point (x, y). If no items touch the point, items will be an empty table
     * items_number: The amount of items, equivalent to items.length
     * ```
     */
    queryPoint(x: number, y: number, filter?: BumpCollisionFilter): LuaMultiReturn<[items: unknown[], items_number: number]>

    /**
     * Querying with a rectangle
     * @param rect_x Rectangle Position (X-axis)
     * @param rect_y Rectangle Position (Y-axis)
     * @param rect_width Rectangle Width
     * @param rect_height Rectangle Height
     * @param filter An optional function, , used to "filter out" which items are returned. If `filter(item)` returns false/null/undefined, that item is ignored. By default, all items are included
     * @returns
     * ```text
     * items: The list items from the ones inserted on the world, contained by the rectangle. If no items contained, items will be an empty table
     * items_number: The amount of items, equivalent to items.length
     * ```
     */
    queryRect(
        rect_x: number,
        rect_y: number,
        rect_width: number,
        rect_height: number,
        filter?: BumpCollisionFilter
    ): LuaMultiReturn<[items: unknown[], items_number: number]>

    /**
     * Querying with a segment
     * @param x1 Start coordinates of the segment (X-axis)
     * @param y1 Start coordinates of the segment (Y-axis)
     * @param x2 End coordinates of the segment (X-axis)
     * @param y2 End coordinates of the segment (Y-axis)
     * @param filter An optional function, used to "filter out" which items are returned. If `filter(item)` returns false/null/undefined, that item is ignored. By default, all items are included
     * @returns
     * ```text
     * items: The list items from the ones inserted on the world, contained by the segment. If no items contained, items will be an empty table
     * items_number: The amount of items, equivalent to items.length
     * ```
     */
    querySegment(x1: number, y1: number, x2: number, y2: number, filter?: BumpCollisionFilter): LuaMultiReturn<[items: unknown[], items_number: number]>

    /**
     * Querying with a segment with more detailed info
     * @param x1 Start coordinates of the segment (X-axis)
     * @param y1 Start coordinates of the segment (Y-axis)
     * @param x2 End coordinates of the segment (X-axis)
     * @param y2 End coordinates of the segment (Y-axis)
     * @returns
     * ```text
     * item_infos: a list of BumpBulletInfo
     * item_infos_number: the length of item_infos
     * ```
     */
    querySegmentWithCoords(x1: number, y1: number, x2: number, y2: number): LuaMultiReturn<[item_infos: BumpBulletInfo[], item_infos_number: number]>

    /**
     * Check whether the world contains the given item or not
     * @param item Something might inserted in the world
     */
    hasItem(item: any): boolean

    /** Get the number of items inserted in the world */
    countItems(): number

    /**
     * Builds and returns an array containing all the items in the world and its length
     * @returns
     * ```text
     * items: The list of items in the world
     * items_number: The amount of items, equivalent to items.length
     * ```
     */
    getItems(): LuaMultiReturn<[items: unknown[], items_number: number]>

    /**
     * Given an item, obtain the coordinates of its bounding rect
     * @param item Something previously inserted in the world with `add`
     * @returns
     * ```text
     * x: Current Position (X-axis)
     * y: Current Position (Y-axis)
     * width: Rectangle Width
     * height: Rectangle Height
     * ```
     */
    getRect(item: any): LuaMultiReturn<[x: number, y: number, width: number, height: number]>

    /** Get the number of cells being used */
    countCells(): number

    /**
     * Given a point, return the coordinates of the cell that containg it using the world's cell_size
     * @param x Position (X-axis)
     * @param y Position (Y-axis)
     * @returns
     * ```text
     * cell_x: Cell Coordinate (X-axis)
     * cell_y: Cell Coordinate (Y-axis)
     * ```
     */
    toCell(x: number, y: number): LuaMultiReturn<[cell_x: number, cell_y: number]>

    /**
     * Given the coordinates of a cell, return the coordinates
     * @param x Cell Coordinate (X-axis)
     * @param y Cell Coordinate (Y-axis)
     * @returns
     * ```text
     * x: Position (X-axis)
     * y: Position (Y-axis)
     * ```
     */
    toWorld(x: number, y: number): LuaMultiReturn<[x: number, y: number]>

    /**
     * Moves a the given imaginary rectangle towards goalX and goalY, providing a list of collisions as they happen in that straight path
     * @param item Something previously inserted in the world with `add`
     * @param x Position (X-axis)
     * @param y Position (Y-axis)
     * @param width Rectangle Width
     * @param height Rectangle Height
     * @param goal_x Desired New Position (X-axis)
     * @param goal_y Desired New Position (Y-axis)
     * @param filter An optional function, by default, filter always returns "slide"
     * @returns
     * ```text
     * actual_x: The coordinates where the object ended up after colliding with other objects (X-axis)
     * actual_y: The coordinates where the object ended up after colliding with other objects (Y-axis)
     * colliables: An array of all the collisions that were detected, Each collision is a table
     *             The most important item in this table is `colliables[index: number].other`, which points to the item that collided with item
     * colliables_number: The amount of collisions produced, equivalent to colliables.length
     * ```
     * @see `colliables` [Collision info](https://github.com/kikito/bump.lua#collision-info)
     */
    project(
        item: any,
        x: number,
        y: number,
        width: number,
        height: number,
        goal_x: number,
        goal_y: number,
        filter?: BumpCollisionFilter
    ): LuaMultiReturn<[colliables: BumpCollisionInfo[], colliables_number: number]>
}
