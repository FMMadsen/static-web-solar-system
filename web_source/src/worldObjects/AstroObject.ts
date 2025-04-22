const GRAVITATIONAL_CONSTANT = 6.67430e-11; // Gravitational constant in m^3 kg^-1 s^-2

export class AstroObject {
    protected astroPositionX: number;
    protected astroPositionY: number;
    readonly astroRadius: number;
    readonly astroMass: number;
    protected astroColor: string;

    protected astroObjectsAttractedBy: AstroObject[] = [];

    protected velocity: number;
    private velocityX: number;
    private velocityY: number;

    constructor(astroPositionX: number, astroPositionY: number, astroMass: number, astoRadius: number, astroColor: string) {
        this.astroPositionX = astroPositionX;
        this.astroPositionY = astroPositionY;
        this.astroMass = astroMass;
        this.astroRadius = astoRadius;
        this.astroColor = astroColor;

        this.velocity = 0;
        this.velocityX = 0;
        this.velocityY = 0;
    }

    move(timeElapsedInSec: number): void {

        for (let i = 0; i < this.astroObjectsAttractedBy.length; i++) {
            const object = this.astroObjectsAttractedBy[i];

            // Calculate the gravitational force between this object and the other object
            const distanceX = (object.astroPositionX - this.astroPositionX) * 1000; // Convert to meters
            const distanceY = (object.astroPositionY - this.astroPositionY) * 1000; // Convert to meters
            const distanceSquared = distanceX * distanceX + distanceY * distanceY;
            // const distance = Math.sqrt(distanceSquared);

            const forceX = (GRAVITATIONAL_CONSTANT * this.astroMass * object.astroMass * distanceX) / distanceSquared;
            const forceY = (GRAVITATIONAL_CONSTANT * this.astroMass * object.astroMass * distanceY) / distanceSquared;
            const force = GRAVITATIONAL_CONSTANT * (this.astroMass * object.astroMass) / distanceSquared;

            const accelerationX = forceX / this.astroMass;
            const accelerationY = forceY / this.astroMass;
            const acceleration = force / this.astroMass;

            this.velocityX += accelerationX * timeElapsedInSec;
            this.velocityY += accelerationY * timeElapsedInSec;
            this.velocity += acceleration * timeElapsedInSec;

            this.astroPositionX += this.velocityX * timeElapsedInSec;
            this.astroPositionY += this.velocityY * timeElapsedInSec;

        }
    }
}