export function getFontSize(volume: number, min: number, max: number): string {
  // Define 6 size steps in pixels
  const sizes = ['12px', '16px', '20px', '24px', '28px', '32px'];
  
  // Normalize volume to index (0-5)
  const index = Math.floor(((volume - min) / (max - min)) * (sizes.length - 1));
  return sizes[index];
}

export function getColor(score: number): string {
  if (score > 60) return 'green';
  if (score < 40) return 'red';
  return 'gray';
}
