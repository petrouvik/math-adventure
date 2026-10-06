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

function createGeometrySvg({
    width,
    height,
    scale = 1,
    points = [],
    segments = [],
    lines = [],
    angles = [],
    rays = [],
    circles = [],
}) {
    const pointMap = new Map(
        points.map(point => [point.id, point])
    );

    function toSvg(point) {
        return {
            x: point.x * scale,
            y: point.y * scale
        };
    }

    function getPoint(id) {
        const point = pointMap.get(id);

        if (!point) {
            throw new Error(
                `Unknown point: ${id}`
            );
        }

        return point;
    }

    function renderPoint(point) {
        if (point.visible === false) {
            return "";
        }

        const { x, y } = toSvg(point);

        return `
            <circle
                cx="${x}"
                cy="${y}"
                r="4"
                fill="currentColor"
            />
        `;
    }

    function renderPointLabel(point) {
        if (!point.label) {
            return "";
        }

        const { x, y } = toSvg(point);

        return `
            <text
                x="${x + 8}"
                y="${y - 8}"
                fill="currentColor"
                font-size="16"
            >
                ${point.label}
            </text>
        `;
    }

    function renderSegment(segment) {
        const from = toSvg(
            getPoint(segment.from)
        );

        const to = toSvg(
            getPoint(segment.to)
        );

        const label = segment.label
            ? renderSegmentLabel(segment, from, to)
            : "";

        return `
            <line
                x1="${from.x}"
                y1="${from.y}"
                x2="${to.x}"
                y2="${to.y}"
                stroke="currentColor"
                stroke-width="2"
            />

            ${label}
        `;
    }

    function renderSegmentLabel(segment, from, to) {

    const dx = to.x - from.x;
    const dy = to.y - from.y;


    const length =
        Math.sqrt(dx * dx + dy * dy);


    if (length === 0) {
        return "";
    }


    const offset = 12;


    let x;
    let y;
    let angle;


    /*
     * Vertical segment.
     *
     * There is no meaningful "above" side, so the
     * direction from -> to determines which side
     * the label is placed on.
     */
    if (Math.abs(dx) < 0.001) {

        x =
            (from.x + to.x) / 2 +
            (dy > 0 ? -offset : offset);

        y =
            (from.y + to.y) / 2;


        /*
         * Rotate the text so that the bottom of the
         * letters faces the segment.
         *
         * Top -> bottom:
         *     label goes left  -> +90°
         *
         * Bottom -> top:
         *     label goes right -> -90°
         */
        angle =
            dy > 0
                ? 90
                : -90;

    } else {

        /*
         * For non-vertical segments, put the label
         * on the screen-top side of the segment.
         *
         * A perpendicular vector is:
         *
         *     (dy, -dx)
         *
         * Choose whichever of the two perpendicular
         * directions points upward on the screen.
         */
        let nx = dy / length;
        let ny = -dx / length;


        if (ny > 0) {
            nx = -nx;
            ny = -ny;
        }


        x =
            (from.x + to.x) / 2 +
            nx * offset;

        y =
            (from.y + to.y) / 2 +
            ny * offset;


        /*
         * Keep the text readable regardless of the
         * order in which the endpoints were specified.
         *
         * This makes the text's bottom edge face the
         * segment while avoiding upside-down labels.
         */
        angle =
            Math.atan2(dy, dx) *
            180 /
            Math.PI;


        if (angle > 90) {
            angle -= 180;
        }

        if (angle < -90) {
            angle += 180;
        }
    }


    return `
        <text
            x="${x}"
            y="${y}"
            text-anchor="middle"
            dominant-baseline="middle"
            fill="currentColor"
            font-size="16"
            transform="rotate(${angle} ${x} ${y})"
        >
            ${segment.label}
        </text>
    `;
}
    function renderLine(line) {

        const first =
            toSvg(getPoint(line.through[0]));

        const second =
            toSvg(getPoint(line.through[1]));

        const dx =
            second.x - first.x;

        const dy =
            second.y - first.y;


        if (dx === 0 && dy === 0) {
            return "";
        }


        /*
        * Find the range of t for which:
        *
        * x = first.x + dx * t
        * y = first.y + dy * t
        *
        * stays inside the SVG rectangle.
        */
        let tMin = -Infinity;
        let tMax = Infinity;


        function clip(p, q) {

            if (p === 0) {
                return q >= 0;
            }


            const r = q / p;


            if (p < 0) {

                if (r > tMax) {
                    return false;
                }

                if (r > tMin) {
                    tMin = r;
                }

            } else {

                if (r < tMin) {
                    return false;
                }

                if (r < tMax) {
                    tMax = r;
                }
            }


            return true;
        }


        /*
        * 0 <= x <= width
        */
        if (!clip(-dx, first.x)) {
            return "";
        }

        if (!clip(dx, width - first.x)) {
            return "";
        }


        /*
        * 0 <= y <= height
        */
        if (!clip(-dy, first.y)) {
            return "";
        }

        if (!clip(dy, height - first.y)) {
            return "";
        }


        if (
            !Number.isFinite(tMin) ||
            !Number.isFinite(tMax) ||
            tMin === tMax
        ) {
            return "";
        }


        const start = {
            x: first.x + dx * tMin,
            y: first.y + dy * tMin
        };


        const end = {
            x: first.x + dx * tMax,
            y: first.y + dy * tMax
        };


        const label =
            line.label
                ? renderLineLabel(
                    line,
                    start,
                    end,
                    { width, height }
                )
                : "";


        return `
            <line
                x1="${start.x}"
                y1="${start.y}"
                x2="${end.x}"
                y2="${end.y}"
                stroke="currentColor"
                stroke-width="2"
            />

            ${label}
        `;
    }
    function renderLineLabel(line, start, end, bounds) {
        const dx = end.x - start.x;
        const dy = end.y - start.y;

        const length = Math.sqrt(dx * dx + dy * dy);
        if (length === 0) return "";

        const ux = dx / length;
        const uy = dy / length;

        // Where the line runs inside the canvas, as distances measured from
        // `start` along the line (they can be negative, behind `start`).
        // Without bounds, the line is treated as just the segment start -> end.
        function visibleRange() {
            if (!bounds) return [0, length];

            let tMin = -Infinity;
            let tMax = Infinity;

            if (ux !== 0) {
                const t1 = (0 - start.x) / ux;
                const t2 = (bounds.width - start.x) / ux;
                tMin = Math.max(tMin, Math.min(t1, t2));
                tMax = Math.min(tMax, Math.max(t1, t2));
            }

            if (uy !== 0) {
                const t1 = (0 - start.y) / uy;
                const t2 = (bounds.height - start.y) / uy;
                tMin = Math.max(tMin, Math.min(t1, t2));
                tMax = Math.min(tMax, Math.max(t1, t2));
            }

            return tMin < tMax ? [tMin, tMax] : [0, length];
        }

        const [tMin, tMax] = visibleRange();

        const endMargin = 40;  // gap between the label and the end of the line
        const offset = 12;     // distance away from the line

        // Near the `end` side of the line, but never past the middle
        // of the visible part
        const t = Math.max(tMax - endMargin, (tMin + tMax) / 2);

        // Normal to the line, preferring the upper side of the screen
        let nx = -uy;
        let ny = ux;

        if (ny > 0) {
            nx = -nx;
            ny = -ny;
        }

        const x = start.x + ux * t + nx * offset;
        const y = start.y + uy * t + ny * offset;

        // Rotate so the top of the text points along the normal, away from
        // the line. The angle always lands in [-90°, 90°], so the text is
        // never upside down.
        const angle = Math.atan2(nx, -ny) * 180 / Math.PI;

        return `
            <text
                x="${x}"
                y="${y}"
                text-anchor="middle"
                dominant-baseline="middle"
                fill="currentColor"
                font-size="16"
                transform="rotate(${angle} ${x} ${y})"
            >
                ${line.label}
            </text>
        `;
    }
    function renderAngle(angle) {
        const vertex = toSvg(
            getPoint(angle.vertex)
        );

        const from = toSvg(
            getPoint(angle.from)
        );

        const to = toSvg(
            getPoint(angle.to)
        );

        const radius = 30;

        const startAngle =
            Math.atan2(
                from.y - vertex.y,
                from.x - vertex.x
            );

        const endAngle =
            Math.atan2(
                to.y - vertex.y,
                to.x - vertex.x
            );

        let difference =
            endAngle - startAngle;

        while (difference < 0) {
            difference += 2 * Math.PI;
        }

        while (difference >= 2 * Math.PI) {
            difference -= 2 * Math.PI;
        }

        /*
        * Choose the smaller or larger angle.
        */
        if (angle.large) {
            if (difference < Math.PI) {
                difference -= 2 * Math.PI;
            }
        } else {
            if (difference > Math.PI) {
                difference -= 2 * Math.PI;
            }
        }

        /*
        * Special case: straight angle.
        *
        * There are two possible semicircles.
        * `large` determines which side is used.
        */
        if (Math.abs(
            Math.abs(difference) - Math.PI
        ) < 0.0001) {
            difference =
                angle.large
                    ? -Math.PI
                    : Math.PI;
        }

        const endAngleActual =
            startAngle + difference;

        const startX =
            vertex.x +
            radius * Math.cos(startAngle);

        const startY =
            vertex.y +
            radius * Math.sin(startAngle);

        const endX =
            vertex.x +
            radius * Math.cos(endAngleActual);

        const endY =
            vertex.y +
            radius * Math.sin(endAngleActual);

        const largeArc =
            Math.abs(difference) > Math.PI
                ? 1
                : 0;

        const sweep =
            difference > 0
                ? 1
                : 0;

        const labelAngle =
            startAngle +
            difference / 2;

        const labelRadius =
            radius + 15;

        const labelX =
            vertex.x +
            labelRadius *
            Math.cos(labelAngle);

        const labelY =
            vertex.y +
            labelRadius *
            Math.sin(labelAngle);

        const label =
            angle.label
                ? `
                    <text
                        x="${labelX}"
                        y="${labelY}"
                        text-anchor="middle"
                        dominant-baseline="middle"
                        fill="currentColor"
                        font-size="16"
                    >
                        ${angle.label}
                    </text>
                `
                : "";

        return `
            <path
                d="
                    M ${startX} ${startY}
                    A ${radius} ${radius}
                    0 ${largeArc} ${sweep}
                    ${endX} ${endY}
                "
                fill="none"
                stroke="currentColor"
                stroke-width="2"
            />

            ${label}
        `;
    }
    function renderRay(ray) {
        const from = toSvg(
            getPoint(ray.from)
        );

        const through = toSvg(
            getPoint(ray.through)
        );

        const dx = through.x - from.x;
        const dy = through.y - from.y;

        const length =
            Math.sqrt(dx * dx + dy * dy);

        if (length === 0) {
            return "";
        }

        const ux = dx / length;
        const uy = dy / length;

        /*
        * Find where the ray exits the SVG.
        */
        const distances = [];

        if (ux > 0) {
            distances.push(
                (width - from.x) / ux
            );
        } else if (ux < 0) {
            distances.push(
                (0 - from.x) / ux
            );
        }

        if (uy > 0) {
            distances.push(
                (height - from.y) / uy
            );
        } else if (uy < 0) {
            distances.push(
                (0 - from.y) / uy
            );
        }

        const distance =
            Math.min(
                ...distances.filter(d => d >= 0)
            );

        const end = {
            x: from.x + ux * distance,
            y: from.y + uy * distance
        };

        const label = ray.label
            ? renderRayLabel(ray, from, through, { width, height })
            : "";

        return `
            <line
                x1="${from.x}"
                y1="${from.y}"
                x2="${end.x}"
                y2="${end.y}"
                stroke="currentColor"
                stroke-width="2"
            />

            ${label}
        `;
    }
    function renderRayLabel(ray, from, through, bounds) {
    const dx = through.x - from.x;
    const dy = through.y - from.y;

    const length = Math.sqrt(dx * dx + dy * dy);
    if (length === 0) return "";

    const ux = dx / length;
    const uy = dy / length;

    // How far the ray runs from its endpoint, i.e. the distance to the
    // edge of the canvas. Without bounds, the ray is treated as ending at
    // `through`.
    function distanceToEdge() {
        const ts = [];
        if (ux > 0) ts.push((bounds.width  - from.x) / ux);
        if (ux < 0) ts.push((0             - from.x) / ux);
        if (uy > 0) ts.push((bounds.height - from.y) / uy);
        if (uy < 0) ts.push((0             - from.y) / uy);
        return Math.max(0, Math.min(...ts));
    }

    const rayLength = bounds ? distanceToEdge() : length;

    const endMargin = 40;  // gap between the label and the end of the ray
    const offset = 12;     // distance away from the ray

    // Near the far end, but never closer to the endpoint than the middle
    const distance = Math.max(rayLength - endMargin, rayLength / 2);

    // Normal to the ray, preferring the upper side of the screen
    let nx = -uy;
    let ny = ux;

    if (ny > 0) {
        nx = -nx;
        ny = -ny;
    }

    const x = from.x + ux * distance + nx * offset;
    const y = from.y + uy * distance + ny * offset;

    // Rotate so the top of the text points along the normal, away from the
    // ray. The angle always lands in [-90°, 90°], so the text is never
    // upside down.
    const angle = Math.atan2(nx, -ny) * 180 / Math.PI;

    return `
        <text
            x="${x}"
            y="${y}"
            text-anchor="middle"
            dominant-baseline="middle"
            fill="currentColor"
            font-size="16"
            transform="rotate(${angle} ${x} ${y})"
        >
            ${ray.label}
        </text>
    `;
}
    function renderCircle(circle) {
        const center = toSvg(
            getPoint(circle.center)
        );

        const radius =
            circle.radius * scale;

        const label =
            circle.label
                ? renderCircleLabel(
                    circle,
                    center,
                    radius
                )
                : "";

        return `
            <circle
                cx="${center.x}"
                cy="${center.y}"
                r="${radius}"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
            />

            ${label}
        `;
    }
    function renderCircleLabel(
        circle,
        center,
        radius
    ) {
        const offset = 12;

        const x =
            center.x + radius + offset;

        const y =
            center.y;

        return `
            <text
                x="${x}"
                y="${y}"
                text-anchor="start"
                dominant-baseline="middle"
                fill="currentColor"
                font-size="16"
            >
                ${circle.label}
            </text>
        `;
    }
    
    const pointElements =
        points
            .map(renderPoint)
            .join("");

    const pointLabels =
        points
            .map(renderPointLabel)
            .join("");

    const segmentElements =
        segments
            .map(renderSegment)
            .join("");

    const lineElements =
        lines
            .map(renderLine)
            .join("");
    
    const angleElements =
        angles
            .map(renderAngle)
            .join("");
    
    const rayElements =
        rays
            .map(renderRay)
            .join("");
    const circleElements =
        circles
            .map(renderCircle)
            .join("");

    return `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${width}"
            height="${height}"
            viewBox="0 0 ${width} ${height}"
        >
            ${lineElements}
            ${segmentElements}
            ${rayElements}
            ${angleElements}
            ${circleElements}
            ${pointElements}
            ${pointLabels}
        </svg>
    `;
}
function createNumberLineSvg({
    width = 500,
    height = 120,

    min = -5,
    max = 5,

    step = 1,

    ticks = {},

    numbers = {},

    points = [],

    arrows = []
}) {

    const {
        majorEvery = step,
        mediumEvery = null
    } = ticks;


    const {
        every: numberEvery = majorEvery
    } = numbers;


    const slack = 0.6;

    const paddingLeft = 30;
    const paddingRight = 30;

    const lineY =
        height / 2;


    /*
     * Leave some room beyond min and max so the
     * number line can continue past the endpoints.
     */
    const displayMin =
        min - slack;

    const displayMax =
        max + slack;


    const usableWidth =
        width -
        paddingLeft -
        paddingRight;


    function toX(value) {

        return (
            paddingLeft +
            (
                (value - displayMin) /
                (displayMax - displayMin)
            ) *
            usableWidth
        );
    }


    function roundValue(value) {

        return Number(
            value.toFixed(10)
        );
    }


    function isMultiple(value, interval) {

        if (!interval) {
            return false;
        }

        const quotient =
            value / interval;

        return Math.abs(
            quotient -
            Math.round(quotient)
        ) < 0.000001;
    }


    function getTickType(value) {

        if (
            isMultiple(
                value,
                majorEvery
            )
        ) {
            return "major";
        }

        if (
            mediumEvery &&
            isMultiple(
                value,
                mediumEvery
            )
        ) {
            return "medium";
        }

        return "minor";
    }


    function getTickHeight(type) {

        switch (type) {

            case "major":
                return 24;

            case "medium":
                return 17;

            default:
                return 11;
        }
    }


    function getTickWidth(type) {

        switch (type) {

            case "major":
                return 3;

            case "medium":
                return 2;

            default:
                return 1;
        }
    }


    /*
     * Generate ticks from min to max, inclusive.
     */
    const tickValues = [];

    if (step > 0) {

        const firstTick =
            Math.ceil(
                min / step
            ) * step;

        for (
            let value = firstTick;
            value <= max + step * 0.000001;
            value += step
        ) {

            value =
                roundValue(value);

            if (
                value >= min &&
                value <= max
            ) {
                tickValues.push(value);
            }
        }
    }


    let svg = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${width}"
            height="${height}"
            viewBox="0 0 ${width} ${height}"
            style="overflow: visible"
        >

            <line
                x1="${paddingLeft}"
                y1="${lineY}"
                x2="${width - paddingRight}"
                y2="${lineY}"
                stroke="currentColor"
                stroke-width="2"
            />

            <polygon
                points="
                    ${paddingLeft},${lineY}
                    ${paddingLeft + 8},${lineY - 5}
                    ${paddingLeft + 8},${lineY + 5}
                "
                fill="currentColor"
            />

            <polygon
                points="
                    ${width - paddingRight},${lineY}
                    ${width - paddingRight - 8},${lineY - 5}
                    ${width - paddingRight - 8},${lineY + 5}
                "
                fill="currentColor"
            />
    `;


    /*
     * Draw ticks.
     */
    for (const value of tickValues) {

        const x =
            toX(value);

        const type =
            getTickType(value);

        const tickHeight =
            getTickHeight(type);

        const tickWidth =
            getTickWidth(type);

        svg += `
            <line
                x1="${x}"
                y1="${lineY - tickHeight / 2}"
                x2="${x}"
                y2="${lineY + tickHeight / 2}"
                stroke="currentColor"
                stroke-width="${tickWidth}"
            />
        `;
    }


    /*
     * Draw numerical labels.
     */
    if (numberEvery > 0) {

        const firstNumber =
            Math.ceil(
                min / numberEvery
            ) * numberEvery;

        for (
            let value = firstNumber;
            value <= max + numberEvery * 0.000001;
            value += numberEvery
        ) {

            value =
                roundValue(value);

            if (
                value < min ||
                value > max
            ) {
                continue;
            }

            const x =
                toX(value);

            svg += `
                <text
                    x="${x}"
                    y="${lineY + 42}"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    fill="currentColor"
                    font-size="16"
                >
                    ${value}
                </text>
            `;
        }
    }


    /*
     * Draw marked points.
     */
    for (const point of points) {

        if (
            point.value < min ||
            point.value > max
        ) {
            continue;
        }

        const x =
            toX(point.value);

        svg += `
            <circle
                cx="${x}"
                cy="${lineY}"
                r="4"
                fill="currentColor"
            />
        `;

        if (point.label !== undefined) {

            svg += `
                <text
                    x="${x}"
                    y="${lineY - 20}"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    fill="currentColor"
                    font-size="16"
                >
                    ${point.label}
                </text>
            `;
        }
    }


    /*
     * Draw arrows.
     */
    for (const arrow of arrows) {

        const from =
            Math.max(
                min,
                Math.min(
                    max,
                    arrow.from
                )
            );

        const to =
            Math.max(
                min,
                Math.min(
                    max,
                    arrow.to
                )
            );

        if (from === to) {
            continue;
        }

        const x1 =
            toX(from);

        const x2 =
            toX(to);

        const direction =
            x2 > x1
                ? 1
                : -1;

        const arrowY =
            lineY - 32;

        const arrowSize = 8;

        svg += `
            <line
                x1="${x1}"
                y1="${arrowY}"
                x2="${x2}"
                y2="${arrowY}"
                stroke="currentColor"
                stroke-width="2"
            />

            <polygon
                points="
                    ${x2},${arrowY}
                    ${x2 - direction * arrowSize},${arrowY - 5}
                    ${x2 - direction * arrowSize},${arrowY + 5}
                "
                fill="currentColor"
            />
        `;

        if (arrow.label !== undefined) {

            const labelX =
                (x1 + x2) / 2;

            svg += `
                <text
                    x="${labelX}"
                    y="${arrowY - 12}"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    fill="currentColor"
                    font-size="16"
                >
                    ${arrow.label}
                </text>
            `;
        }
    }


    svg += `
        </svg>
    `;


    return svg;
}