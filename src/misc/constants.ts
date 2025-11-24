export const Constants = {
    DECORATION_COLORS : ["#FFED8A","#FFE55C","#FFDE2E","#FFD700","#D1B000", "#FF0000", "#00FF00", "#0000FF", "#FF00FF", "#00FFFF", "#FFA500"],
    RANDOM_INT_BETWEEN: (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    },
    CANVAS_WIDTH : 800,
    CANVAS_HEIGHT : 600,
    SNOW_DENSITY: 500,
    BRANCH_DISTANCE: 30,
    FPS: 30
}