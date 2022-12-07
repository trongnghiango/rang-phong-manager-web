export const splitNumberFromString = (text: string) => text.match(/\d+/g);

export const angleToRadians = (angleInDeg: number) => (Math.PI / 180) * angleInDeg;
