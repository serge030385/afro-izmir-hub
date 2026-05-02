import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { deflateSync } from "node:zlib";

const width = 1400;
const height = 980;

const assets = [
  { file: "restaurant-africain", palette: ["#140907", "#7f1d1d", "#d97706"], scene: drawRestaurant },
  { file: "boutique-africaine", palette: ["#0b1b13", "#166534", "#d97706"], scene: drawBoutique },
  { file: "coiffure-afro", palette: ["#100a13", "#581c87", "#b91c1c"], scene: drawCoiffure },
  { file: "logement-izmir", palette: ["#0f172a", "#0f766e", "#eab308"], scene: drawLogement },
  { file: "etudiants-africains", palette: ["#0b1f18", "#065f46", "#d6a72b"], scene: drawEtudiants },
  { file: "transfert-argent", palette: ["#061c16", "#047857", "#facc15"], scene: drawTransfert },
  { file: "evenements-afro", palette: ["#120707", "#7f1d1d", "#f59e0b"], scene: drawEvenements },
  { file: "transport-izmir", palette: ["#0f172a", "#1d4ed8", "#f59e0b"], scene: drawTransport },
  { file: "documents-turquie", palette: ["#111827", "#065f46", "#d97706"], scene: drawDocuments },
  { file: "emploi-jobs", palette: ["#11110f", "#7f1d1d", "#15803d"], scene: drawEmploi },
];

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

function mix(a, b, t) {
  return {
    r: Math.round(a.r + (b.r - a.r) * t),
    g: Math.round(a.g + (b.g - a.g) * t),
    b: Math.round(a.b + (b.b - a.b) * t),
  };
}

function clamp(value, min = 0, max = 255) {
  return Math.max(min, Math.min(max, value));
}

function makeCanvas(palette) {
  const pixels = Buffer.alloc(width * height * 4);
  const c1 = hexToRgb(palette[0]);
  const c2 = hexToRgb(palette[1]);
  const c3 = hexToRgb(palette[2]);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const linear = (x / width) * 0.55 + (y / height) * 0.45;
      const base = linear < 0.58 ? mix(c1, c2, linear / 0.58) : mix(c2, c3, (linear - 0.58) / 0.42);
      const glow = Math.max(0, 1 - Math.hypot((x - width * 0.78) / 620, (y - height * 0.28) / 500));
      const grain = ((x * 13 + y * 7) % 23) - 11;
      const index = (y * width + x) * 4;
      pixels[index] = clamp(base.r + glow * 42 + grain * 0.5);
      pixels[index + 1] = clamp(base.g + glow * 34 + grain * 0.5);
      pixels[index + 2] = clamp(base.b + glow * 20 + grain * 0.5);
      pixels[index + 3] = 255;
    }
  }

  return pixels;
}

function blendPixel(pixels, x, y, color, alpha = 1) {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const index = (Math.floor(y) * width + Math.floor(x)) * 4;
  pixels[index] = clamp(pixels[index] * (1 - alpha) + color.r * alpha);
  pixels[index + 1] = clamp(pixels[index + 1] * (1 - alpha) + color.g * alpha);
  pixels[index + 2] = clamp(pixels[index + 2] * (1 - alpha) + color.b * alpha);
  pixels[index + 3] = 255;
}

function fillRect(pixels, x, y, w, h, color, alpha = 1) {
  for (let py = Math.max(0, y); py < Math.min(height, y + h); py += 1) {
    for (let px = Math.max(0, x); px < Math.min(width, x + w); px += 1) {
      blendPixel(pixels, px, py, color, alpha);
    }
  }
}

function fillCircle(pixels, cx, cy, radius, color, alpha = 1) {
  const r2 = radius * radius;
  for (let y = Math.max(0, cy - radius); y <= Math.min(height - 1, cy + radius); y += 1) {
    for (let x = Math.max(0, cx - radius); x <= Math.min(width - 1, cx + radius); x += 1) {
      const dx = x - cx;
      const dy = y - cy;
      if (dx * dx + dy * dy <= r2) blendPixel(pixels, x, y, color, alpha);
    }
  }
}

function strokeCircle(pixels, cx, cy, radius, thickness, color, alpha = 1) {
  const outer = radius * radius;
  const inner = (radius - thickness) * (radius - thickness);
  for (let y = Math.max(0, cy - radius); y <= Math.min(height - 1, cy + radius); y += 1) {
    for (let x = Math.max(0, cx - radius); x <= Math.min(width - 1, cx + radius); x += 1) {
      const d = (x - cx) ** 2 + (y - cy) ** 2;
      if (d <= outer && d >= inner) blendPixel(pixels, x, y, color, alpha);
    }
  }
}

function line(pixels, x1, y1, x2, y2, color, thickness = 8, alpha = 1) {
  const steps = Math.ceil(Math.hypot(x2 - x1, y2 - y1));
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    fillCircle(pixels, x1 + (x2 - x1) * t, y1 + (y2 - y1) * t, thickness / 2, color, alpha);
  }
}

function roundedRect(pixels, x, y, w, h, radius, color, alpha = 1) {
  fillRect(pixels, x + radius, y, w - radius * 2, h, color, alpha);
  fillRect(pixels, x, y + radius, radius, h - radius * 2, color, alpha);
  fillRect(pixels, x + w - radius, y + radius, radius, h - radius * 2, color, alpha);
  fillCircle(pixels, x + radius, y + radius, radius, color, alpha);
  fillCircle(pixels, x + w - radius, y + radius, radius, color, alpha);
  fillCircle(pixels, x + radius, y + h - radius, radius, color, alpha);
  fillCircle(pixels, x + w - radius, y + h - radius, radius, color, alpha);
}

function triangle(pixels, ax, ay, bx, by, cx, cy, color, alpha = 1) {
  const minX = Math.max(0, Math.floor(Math.min(ax, bx, cx)));
  const maxX = Math.min(width - 1, Math.ceil(Math.max(ax, bx, cx)));
  const minY = Math.max(0, Math.floor(Math.min(ay, by, cy)));
  const maxY = Math.min(height - 1, Math.ceil(Math.max(ay, by, cy)));
  const area = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
  for (let y = minY; y <= maxY; y += 1) {
    for (let x = minX; x <= maxX; x += 1) {
      const s = ((ay - cy) * (x - cx) + (cx - ax) * (y - cy)) / area;
      const t = ((cy - by) * (x - cx) + (bx - cx) * (y - cy)) / area;
      const u = 1 - s - t;
      if (s >= 0 && t >= 0 && u >= 0) blendPixel(pixels, x, y, color, alpha);
    }
  }
}

function addLeftShade(pixels) {
  const black = hexToRgb("#050505");
  for (let x = 0; x < width * 0.58; x += 1) {
    const alpha = 0.34 * (1 - x / (width * 0.58));
    fillRect(pixels, x, 0, 1, height, black, alpha);
  }
}

function drawRestaurant(pixels) {
  const cream = hexToRgb("#f7dfb0");
  fillCircle(pixels, 1010, 430, 205, cream, 0.96);
  strokeCircle(pixels, 1010, 430, 165, 18, hexToRgb("#ffffff"), 0.35);
  fillCircle(pixels, 950, 395, 48, hexToRgb("#7f1d1d"), 0.95);
  fillCircle(pixels, 1048, 455, 64, hexToRgb("#166534"), 0.95);
  fillCircle(pixels, 895, 505, 42, hexToRgb("#eab308"), 0.9);
  roundedRect(pixels, 770, 670, 520, 62, 31, hexToRgb("#2b1208"), 0.45);
}

function drawBoutique(pixels) {
  roundedRect(pixels, 760, 240, 430, 420, 28, hexToRgb("#f3d187"), 0.9);
  fillRect(pixels, 795, 355, 360, 18, hexToRgb("#6b3517"), 0.7);
  fillRect(pixels, 795, 505, 360, 18, hexToRgb("#6b3517"), 0.7);
  for (const [x, color] of [
    [825, "#7f1d1d"],
    [935, "#166534"],
    [1045, "#d97706"],
  ]) {
    roundedRect(pixels, x, 280, 72, 110, 18, hexToRgb(color), 0.95);
    roundedRect(pixels, x + 10, 256, 52, 28, 8, hexToRgb("#fff7d1"), 0.9);
  }
  for (let i = 0; i < 5; i += 1) {
    fillRect(pixels, 815 + i * 67, 535, 48, 96, hexToRgb(i % 2 ? "#0f766e" : "#b91c1c"), 0.9);
  }
  triangle(pixels, 1030, 675, 1260, 620, 1260, 790, hexToRgb("#facc15"), 0.9);
}

function drawCoiffure(pixels) {
  const skin = hexToRgb("#6b361f");
  fillCircle(pixels, 930, 455, 135, skin, 0.98);
  fillCircle(pixels, 835, 365, 62, hexToRgb("#0a0a0a"), 1);
  fillCircle(pixels, 900, 315, 78, hexToRgb("#0a0a0a"), 1);
  fillCircle(pixels, 988, 325, 78, hexToRgb("#0a0a0a"), 1);
  fillCircle(pixels, 1060, 380, 56, hexToRgb("#0a0a0a"), 1);
  line(pixels, 1058, 475, 1130, 735, hexToRgb("#0a0a0a"), 32, 1);
  roundedRect(pixels, 720, 690, 285, 34, 14, hexToRgb("#facc15"), 0.95);
  for (let i = 0; i < 13; i += 1) {
    line(pixels, 742 + i * 19, 722, 742 + i * 19, 835, hexToRgb("#facc15"), 8, 0.95);
  }
}

function drawLogement(pixels) {
  const buildings = [
    [735, 315, 150, 360, "#f4d58d"],
    [920, 250, 190, 425, "#b45309"],
    [1140, 345, 130, 330, "#166534"],
  ];
  for (const [x, y, w, h, color] of buildings) {
    roundedRect(pixels, x, y, w, h, 12, hexToRgb(color), 0.94);
    for (let row = 0; row < 5; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        roundedRect(pixels, x + 28 + col * 40, y + 45 + row * 60, 22, 30, 4, hexToRgb("#fff7d1"), 0.72);
      }
    }
  }
  fillRect(pixels, 660, 675, 690, 105, hexToRgb("#0b1220"), 0.35);
}

function drawEtudiants(pixels) {
  roundedRect(pixels, 775, 470, 250, 145, 24, hexToRgb("#f5d36a"), 0.96);
  roundedRect(pixels, 1030, 470, 250, 145, 24, hexToRgb("#fff7d1"), 0.88);
  line(pixels, 1025, 470, 1025, 640, hexToRgb("#6b7280"), 8, 0.28);
  triangle(pixels, 865, 325, 1030, 250, 1198, 325, hexToRgb("#111827"), 0.98);
  fillRect(pixels, 965, 348, 135, 82, hexToRgb("#1f2937"), 0.98);
  line(pixels, 1120, 338, 1185, 420, hexToRgb("#facc15"), 8, 0.95);
  fillCircle(pixels, 780, 760, 62, hexToRgb("#7f1d1d"), 0.92);
  fillCircle(pixels, 1110, 760, 62, hexToRgb("#065f46"), 0.92);
}

function drawTransfert(pixels) {
  roundedRect(pixels, 820, 265, 215, 405, 38, hexToRgb("#111111"), 1);
  roundedRect(pixels, 843, 310, 169, 315, 24, hexToRgb("#dcfce7"), 0.96);
  fillCircle(pixels, 1125, 425, 86, hexToRgb("#f5c542"), 0.95);
  strokeCircle(pixels, 1125, 425, 58, 10, hexToRgb("#fff7d1"), 0.45);
  fillCircle(pixels, 730, 545, 58, hexToRgb("#d97706"), 0.92);
  strokeCircle(pixels, 730, 545, 38, 8, hexToRgb("#fff7d1"), 0.42);
  line(pixels, 875, 440, 975, 440, hexToRgb("#047857"), 18, 0.95);
  triangle(pixels, 990, 440, 940, 408, 940, 472, hexToRgb("#047857"), 0.95);
}

function drawEvenements(pixels) {
  roundedRect(pixels, 755, 300, 190, 360, 24, hexToRgb("#111827"), 0.98);
  fillCircle(pixels, 850, 420, 58, hexToRgb("#374151"), 1);
  fillCircle(pixels, 850, 560, 78, hexToRgb("#1f2937"), 1);
  fillCircle(pixels, 850, 560, 33, hexToRgb("#facc15"), 0.9);
  line(pixels, 1065, 310, 1065, 535, hexToRgb("#facc15"), 24, 0.95);
  fillCircle(pixels, 1036, 555, 52, hexToRgb("#facc15"), 0.95);
  triangle(pixels, 1065, 310, 1240, 245, 1240, 365, hexToRgb("#facc15"), 0.88);
  fillCircle(pixels, 1120, 760, 78, hexToRgb("#15803d"), 0.72);
}

function drawTransport(pixels) {
  triangle(pixels, 675, 720, 1215, 720, 1370, 980, hexToRgb("#111827"), 0.58);
  triangle(pixels, 675, 720, 500, 980, 1370, 980, hexToRgb("#111827"), 0.48);
  line(pixels, 940, 760, 940, 940, hexToRgb("#facc15"), 10, 0.85);
  const yellow = hexToRgb("#facc15");
  roundedRect(pixels, 730, 485, 520, 150, 32, yellow, 0.95);
  triangle(pixels, 825, 485, 900, 390, 1125, 485, yellow, 0.95);
  fillCircle(pixels, 850, 650, 46, hexToRgb("#111827"), 1);
  fillCircle(pixels, 1150, 650, 46, hexToRgb("#111827"), 1);
  roundedRect(pixels, 910, 420, 165, 58, 12, hexToRgb("#bfdbfe"), 0.86);
  fillCircle(pixels, 1165, 315, 72, hexToRgb("#7f1d1d"), 0.94);
  triangle(pixels, 1093, 344, 1237, 344, 1165, 505, hexToRgb("#7f1d1d"), 0.94);
  fillCircle(pixels, 1165, 318, 28, hexToRgb("#fff7d1"), 0.95);
}

function drawDocuments(pixels) {
  roundedRect(pixels, 865, 230, 255, 360, 18, hexToRgb("#fff7ed"), 0.96);
  roundedRect(pixels, 735, 335, 205, 285, 18, hexToRgb("#e5e7eb"), 0.92);
  for (let i = 0; i < 5; i += 1) {
    line(pixels, 905, 315 + i * 48, 1060, 315 + i * 48, hexToRgb("#6b7280"), 10, 0.34);
  }
  for (let i = 0; i < 4; i += 1) {
    line(pixels, 765, 405 + i * 48, 890, 405 + i * 48, hexToRgb("#6b7280"), 9, 0.32);
  }
  fillCircle(pixels, 1115, 585, 70, hexToRgb("#7f1d1d"), 0.86);
  strokeCircle(pixels, 1115, 585, 45, 9, hexToRgb("#fff7d1"), 0.42);
}

function drawEmploi(pixels) {
  roundedRect(pixels, 775, 410, 425, 260, 32, hexToRgb("#d97706"), 0.95);
  line(pixels, 925, 410, 925, 350, hexToRgb("#f8e7bb"), 24, 0.9);
  line(pixels, 925, 350, 1055, 350, hexToRgb("#f8e7bb"), 24, 0.9);
  line(pixels, 1055, 350, 1055, 410, hexToRgb("#f8e7bb"), 24, 0.9);
  fillRect(pixels, 775, 505, 425, 38, hexToRgb("#111827"), 0.28);
  roundedRect(pixels, 1130, 360, 165, 150, 24, hexToRgb("#facc15"), 0.92);
  line(pixels, 1165, 435, 1198, 470, hexToRgb("#111827"), 14, 0.8);
  line(pixels, 1198, 470, 1260, 390, hexToRgb("#111827"), 14, 0.8);
  fillCircle(pixels, 850, 765, 70, hexToRgb("#065f46"), 0.72);
}

function crc32(buffer) {
  let crc = -1;
  for (const byte of buffer) {
    crc ^= byte;
    for (let i = 0; i < 8; i += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ -1) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function encodePng(pixels) {
  const header = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y += 1) {
    const rowStart = y * (width * 4 + 1);
    raw[rowStart] = 0;
    pixels.copy(raw, rowStart + 1, y * width * 4, (y + 1) * width * 4);
  }

  return Buffer.concat([
    header,
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 8 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

await Promise.all(
  assets.map(async (asset) => {
    const pixels = makeCanvas(asset.palette);
    asset.scene(pixels);
    addLeftShade(pixels);
    await writeFile(join("public/images/services", `${asset.file}.png`), encodePng(pixels));
  }),
);

console.log(`Created ${assets.length} text-free PNG service placeholders.`);
