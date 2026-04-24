function isValidHexColor(color) {
    return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color);
}

function formatColorName(name) {
    if (typeof name !== 'string') return '';
    return name.trim().toLowerCase();
}

module.exports = { isValidHexColor, formatColorName };
