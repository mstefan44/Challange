import { describe, it, expect } from 'vitest';
import { getFontSize, getColor } from './utils';

describe('getFontSize', () => {
  it('returns correct font size index', () => {
    expect(getFontSize(0, 0, 100)).toBe('12px'); // index 0
    expect(getFontSize(50, 0, 100)).toBe('20px'); // index 2
    expect(getFontSize(100, 0, 100)).toBe('32px'); // index 5
  });
});

describe('getColor', () => {
  it('returns green for >60', () => {
    expect(getColor(80)).toBe('green');
  });

  it('returns red for <40', () => {
    expect(getColor(20)).toBe('red');
  });

  it('returns gray otherwise', () => {
    expect(getColor(50)).toBe('gray');
  });
});
