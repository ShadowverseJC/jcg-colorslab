const { isValidHexColor, formatColorName } = require('../src/colorUtils');

test('valid 6-digit hex color returns true', () => {
    expect(isValidHexColor('#ff0000')).toBe(true);
});

test('valid 3-digit hex color returns true', () => {
    expect(isValidHexColor('#f00')).toBe(true);
});

test('color name without hash returns false', () => {
    expect(isValidHexColor('red')).toBe(false);
});

test('invalid hex characters return false', () => {
    expect(isValidHexColor('#zzzzzz')).toBe(false);
});

test('formatColorName trims whitespace and lowercases', () => {
    expect(formatColorName('  Red  ')).toBe('red');
});

test('formatColorName returns empty string for empty input', () => {
    expect(formatColorName('')).toBe('');
});

test('formatColorName returns empty string for non-string input', () => {
    expect(formatColorName(null)).toBe('');
});
