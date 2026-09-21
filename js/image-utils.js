function createAdditionSvg(top, bottom, result, carries = []) {
  // Tweak these few numbers to resize the whole diagram — everything
  // else below is derived from them, so you don't have to hunt down
  // individual x/y values by hand.
  const fontSize = 9;
  const carryFontSize = 6;
  const digitSpacing = 14;
  const rowGap = 14;
  const padding = 8;

  const strokeWidth = Math.max(1.5, fontSize * 0.1);
  const lineOvershoot = digitSpacing * 0.33;
  const plusGap = digitSpacing * 0.8;
  const lineGap = rowGap * 0.55;

  const topDigits = top.split("");
  const bottomDigits = bottom.split("");
  const resultDigits = result.split("");

  const maxDigits = Math.max(
    topDigits.length,
    bottomDigits.length,
    resultDigits.length
  );

  const hasCarryRow = carries.length > 0;

  // Everything is first laid out around a temporary reference point
  // (rightX = 0). Once every element's x-position is known, the real
  // bounding box is measured and the whole diagram is shifted so it
  // sits centered inside a viewBox sized to fit.
  const refRightX = 0;
  const refStartX = refRightX - (maxDigits - 1) * digitSpacing;
  const plusX = refStartX - plusGap;
  const lineX1 = refStartX - lineOvershoot;
  const lineX2 = refRightX + lineOvershoot;

  const xPositions = [plusX, lineX1, lineX2, refStartX, refRightX];

  carries.forEach((carry, index) => {
    if (!carry) return;
    xPositions.push(refRightX - (index + 1) * digitSpacing);
  });

  const minX = Math.min(...xPositions);
  const maxX = Math.max(...xPositions);

  const offsetX = padding - minX;
  const width = maxX - minX + padding * 2;

  const rightX = refRightX + offsetX;

  // Vertical layout adapts to whether a carry row was passed in at all.
  let y = padding + carryFontSize;
  let carryY = 0;

  if (hasCarryRow) {
    carryY = y;
    y += rowGap;
  }

  const topY = y;
  y += rowGap;
  const bottomY = y;
  const lineY = bottomY + lineGap;
  const resultY = lineY + rowGap;
  const height = resultY + padding;

  let svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;

  svg += `<line x1="${lineX1 + offsetX}" y1="${lineY}" x2="${lineX2 + offsetX}" y2="${lineY}" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" />`;

  carries.forEach((carry, index) => {
    if (!carry) return;
    const x = rightX - (index + 1) * digitSpacing;
    svg += `<text x="${x}" y="${carryY}" fill="currentColor" font-size="${carryFontSize}" text-anchor="middle" opacity="0.75">${carry}</text>`;
  });

  topDigits.forEach((digit, index) => {
    const position = topDigits.length - index - 1;
    const x = rightX - position * digitSpacing;
    svg += `<text x="${x}" y="${topY}" fill="currentColor" font-size="${fontSize}" text-anchor="middle">${digit}</text>`;
  });

  bottomDigits.forEach((digit, index) => {
    const position = bottomDigits.length - index - 1;
    const x = rightX - position * digitSpacing;
    svg += `<text x="${x}" y="${bottomY}" fill="currentColor" font-size="${fontSize}" text-anchor="middle">${digit}</text>`;
  });

  svg += `<text x="${plusX + offsetX}" y="${bottomY}" fill="currentColor" font-size="${fontSize}" text-anchor="middle">+</text>`;

  resultDigits.forEach((digit, index) => {
    const position = resultDigits.length - index - 1;
    const x = rightX - position * digitSpacing;
    svg += `<text x="${x}" y="${resultY}" fill="currentColor" font-size="${fontSize}" text-anchor="middle">${digit}</text>`;
  });

  svg += `</svg>`;

  return svg;
}

function createSubtractionSvg(top, bottom, result, borrows = []) {
  // Tweak these few numbers to resize the whole diagram — everything
  // else below is derived from them, so you don't have to hunt down
  // individual x/y values by hand.
  const fontSize = 9;
  const borrowFontSize = 6;
  const digitSpacing = 14;
  const rowGap = 14;
  const padding = 8;

  const strokeWidth = Math.max(1.5, fontSize * 0.1);
  const lineOvershoot = digitSpacing * 0.33;
  const minusGap = digitSpacing * 0.8;
  const lineGap = rowGap * 0.55;

  const topDigits = top.split("");
  const bottomDigits = bottom.split("");
  const resultDigits = result.split("");

  const maxDigits = Math.max(
    topDigits.length,
    bottomDigits.length,
    resultDigits.length
  );

  const hasBorrowRow = borrows.length > 0;

  // Everything is first laid out around a temporary reference point
  // (rightX = 0). Once every element's x-position is known, the real
  // bounding box is measured and the whole diagram is shifted so it
  // sits centered inside a viewBox sized to fit.
  const refRightX = 0;
  const refStartX = refRightX - (maxDigits - 1) * digitSpacing;
  const minusX = refStartX - minusGap;
  const lineX1 = refStartX - lineOvershoot;
  const lineX2 = refRightX + lineOvershoot;

  const xPositions = [
    minusX,
    lineX1,
    lineX2,
    refStartX,
    refRightX
  ];

  borrows.forEach((borrow, index) => {
    if (!borrow) return;
    xPositions.push(
      refRightX - (index + 1) * digitSpacing
    );
  });

  const minX = Math.min(...xPositions);
  const maxX = Math.max(...xPositions);

  const offsetX = padding - minX;
  const width = maxX - minX + padding * 2;

  const rightX = refRightX + offsetX;

  // Vertical layout adapts to whether a borrow row was passed in at all.
  let y = padding + borrowFontSize;
  let borrowY = 0;

  if (hasBorrowRow) {
    borrowY = y;
    y += rowGap;
  }

  const topY = y;
  y += rowGap;
  const bottomY = y;
  const lineY = bottomY + lineGap;
  const resultY = lineY + rowGap;
  const height = resultY + padding;

  let svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;

  svg += `<line x1="${lineX1 + offsetX}" y1="${lineY}" x2="${lineX2 + offsetX}" y2="${lineY}" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" />`;

  borrows.forEach((borrow, index) => {
    if (!borrow) return;

    const x =
      rightX - (index + 1) * digitSpacing;

    svg += `<text x="${x}" y="${borrowY}" fill="currentColor" font-size="${borrowFontSize}" text-anchor="middle" opacity="0.75">${borrow}</text>`;
  });

  topDigits.forEach((digit, index) => {
    const position =
      topDigits.length - index - 1;

    const x =
      rightX - position * digitSpacing;

    svg += `<text x="${x}" y="${topY}" fill="currentColor" font-size="${fontSize}" text-anchor="middle">${digit}</text>`;
  });

  bottomDigits.forEach((digit, index) => {
    const position =
      bottomDigits.length - index - 1;

    const x =
      rightX - position * digitSpacing;

    svg += `<text x="${x}" y="${bottomY}" fill="currentColor" font-size="${fontSize}" text-anchor="middle">${digit}</text>`;
  });

  svg += `<text x="${minusX + offsetX}" y="${bottomY}" fill="currentColor" font-size="${fontSize}" text-anchor="middle">−</text>`;

  resultDigits.forEach((digit, index) => {
    if (digit === " ") {
      return;
    }

    const position =
      resultDigits.length - index - 1;

    const x =
      rightX - position * digitSpacing;

    svg += `<text x="${x}" y="${resultY}" fill="currentColor" font-size="${fontSize}" text-anchor="middle">${digit}</text>`;
  });

  svg += `</svg>`;

  return svg;
}