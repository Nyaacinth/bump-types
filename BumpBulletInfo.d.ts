/** Detailed info returned by `BumpWorld.querySegmentWithCoords` */
export type BumpBulletInfo = {
    /** The item being intersected by the segment */
    item: unknown

    /** The coordinates of the first intersection between `item` and the segment (X-axis) */
    x1: number

    /** The coordinates of the first intersection between `item` and the segment (Y-axis) */
    y1: number

    /** The coordinates of the second intersection between item and the segment (X-axis) */
    x2: number

    /** The coordinates of the second intersection between item and the segment (Y-axis) */
    y2: number

    /** Numbers between 0 and 1 which say "how far from the starting point of the segment did the impact happen" */
    ti1: number

    /** Numbers between 0 and 1 which say "how far from the starting point of the segment did the impact happen" */
    ti2: number
}
