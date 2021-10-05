/** Bump Collision Info */
export type BumpCollisionInfo = {
    /** The item being moved / checked */
    item: unknown

    /** An item colliding with the item being moved */
    other: unknown

    /** the result of `filter(other)`. It's usually "touch", "cross", "slide" or "bounce" */
    type: string

    /** True if item "was overlapping" other when the collision started, false if it didn't but "tunneled" through other */
    overlaps: boolean

    /** Between 0 and 1. How far along the movement to the goal did the collision occur */
    ti: number

    /** The difference between the original coordinates and the actual ones */
    move: {x: number; y: number}

    /** The collision normal. usually (-1, 0) or (1, 1) */
    normal: {x: number; y: number}

    /** The coordinates where item started touching other */
    touch: {x: number; y: number}

    /** The rectangle item occupied when the touch happened */
    itemRect: {x: number; y: number; w: number; h: number}

    /** The rectangle other occupied when the touch happened */
    otherRect: {x: number; y: number; w: number; h: number}
}
