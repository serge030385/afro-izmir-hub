import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { deflateSync } from "node:zlib";

const root = process.cwd();
const publicDir = join(root, "public");

const colors = {
  black: [7, 8, 6, 255],
  blackSoft: [13, 15, 11, 255],
  gold: [245, 197, 66, 255],
  goldDeep: [196, 143, 31, 255],
  green: [0, 124, 70, 255],
  greenBright: [27, 163, 91, 255],
};

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 0);
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function createCanvas(size) {
  return {
    size,
    pixels: Buffer.alloc(size * size * 4),
  };
}

function setPixel(canvas, x, y, color) {
  if (x < 0 || y < 0 || x >= canvas.size || y >= canvas.size) {
    return;
  }
  const index = (y * canvas.size + x) * 4;
  canvas.pixels[index] = color[0];
  canvas.pixels[index + 1] = color[1];
  canvas.pixels[index + 2] = color[2];
  canvas.pixels[index + 3] = color[3];
}

function fillRect(canvas, x, y, width, height, color) {
  const startX = Math.max(0, Math.floor(x));
  const startY = Math.max(0, Math.floor(y));
  const endX = Math.min(canvas.size, Math.ceil(x + width));
  const endY = Math.min(canvas.size, Math.ceil(y + height));

  for (let yy = startY; yy < endY; yy += 1) {
    for (let xx = startX; xx < endX; xx += 1) {
      setPixel(canvas, xx, yy, color);
    }
  }
}

function fillRoundedRect(canvas, x, y, width, height, radius, color) {
  const startX = Math.floor(x);
  const startY = Math.floor(y);
  const endX = Math.ceil(x + width);
  const endY = Math.ceil(y + height);
  const r = Math.max(0, radius);

  for (let yy = startY; yy < endY; yy += 1) {
    for (let xx = startX; xx < endX; xx += 1) {
      const dx = xx < x + r ? x + r - xx : xx > x + width - r ? xx - (x + width - r) : 0;
      const dy = yy < y + r ? y + r - yy : yy > y + height - r ? yy - (y + height - r) : 0;
      if (dx * dx + dy * dy <= r * r) {
        setPixel(canvas, xx, yy, color);
      }
    }
  }
}

function strokeRoundedRect(canvas, x, y, width, height, radius, thickness, color) {
  fillRoundedRect(canvas, x, y, width, height, radius, color);
  fillRoundedRect(
    canvas,
    x + thickness,
    y + thickness,
    width - thickness * 2,
    height - thickness * 2,
    Math.max(0, radius - thickness),
    colors.black,
  );
}

function drawThickLine(canvas, x1, y1, x2, y2, thickness, color) {
  const radius = thickness / 2;
  const minX = Math.floor(Math.min(x1, x2) - radius);
  const maxX = Math.ceil(Math.max(x1, x2) + radius);
  const minY = Math.floor(Math.min(y1, y2) - radius);
  const maxY = Math.ceil(Math.max(y1, y2) + radius);
  const lengthSq = (x2 - x1) ** 2 + (y2 - y1) ** 2;

  for (let y = minY; y <= maxY; y += 1) {
    for (let x = minX; x <= maxX; x += 1) {
      const t = Math.max(0, Math.min(1, ((x - x1) * (x2 - x1) + (y - y1) * (y2 - y1)) / lengthSq));
      const projectionX = x1 + t * (x2 - x1);
      const projectionY = y1 + t * (y2 - y1);
      const distanceSq = (x - projectionX) ** 2 + (y - projectionY) ** 2;

      if (distanceSq <= radius ** 2) {
        setPixel(canvas, x, y, color);
      }
    }
  }
}

function drawMonogram(canvas, offsetX, offsetY, color) {
  const scale = canvas.size / 512;
  const letterHeight = 198 * scale;
  const stroke = 34 * scale;
  const gap = 30 * scale;
  const y = canvas.size * 0.5 - letterHeight / 2 - 5 * scale + offsetY;
  const aWidth = 112 * scale;
  const iWidth = 70 * scale;
  const hWidth = 116 * scale;
  const totalWidth = aWidth + iWidth + hWidth + gap * 2;
  let x = (canvas.size - totalWidth) / 2 + offsetX;

  drawThickLine(canvas, x + stroke * 0.45, y + letterHeight, x + aWidth / 2, y, stroke, color);
  drawThickLine(canvas, x + aWidth - stroke * 0.45, y + letterHeight, x + aWidth / 2, y, stroke, color);
  fillRoundedRect(canvas, x + stroke * 1.05, y + letterHeight * 0.58, aWidth - stroke * 2.1, stroke * 0.86, stroke * 0.22, color);

  x += aWidth + gap;
  fillRoundedRect(canvas, x, y, iWidth, stroke, stroke * 0.22, color);
  fillRoundedRect(canvas, x + iWidth / 2 - stroke / 2, y, stroke, letterHeight, stroke * 0.22, color);
  fillRoundedRect(canvas, x, y + letterHeight - stroke, iWidth, stroke, stroke * 0.22, color);

  x += iWidth + gap;
  fillRoundedRect(canvas, x, y, stroke, letterHeight, stroke * 0.22, color);
  fillRoundedRect(canvas, x + hWidth - stroke, y, stroke, letterHeight, stroke * 0.22, color);
  fillRoundedRect(canvas, x, y + letterHeight * 0.47, hWidth, stroke, stroke * 0.22, color);
}

function makePng(size) {
  const canvas = createCanvas(size);
  fillRect(canvas, 0, 0, size, size, colors.black);

  const outer = Math.max(6, Math.round(size * 0.035));
  const inset = Math.round(size * 0.07);
  const radius = Math.round(size * 0.16);
  strokeRoundedRect(canvas, inset, inset, size - inset * 2, size - inset * 2, radius, outer, colors.green);

  const innerInset = inset + outer + Math.round(size * 0.018);
  const innerThickness = Math.max(3, Math.round(size * 0.012));
  strokeRoundedRect(
    canvas,
    innerInset,
    innerInset,
    size - innerInset * 2,
    size - innerInset * 2,
    Math.round(size * 0.12),
    innerThickness,
    colors.goldDeep,
  );

  fillRoundedRect(
    canvas,
    Math.round(size * 0.22),
    Math.round(size * 0.69),
    Math.round(size * 0.56),
    Math.max(4, Math.round(size * 0.025)),
    Math.max(2, Math.round(size * 0.012)),
    colors.greenBright,
  );

  drawMonogram(canvas, size * 0.016, size * 0.016, colors.green);
  drawMonogram(canvas, 0, 0, colors.gold);

  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y += 1) {
    raw[y * (size * 4 + 1)] = 0;
    canvas.pixels.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0);
  header.writeUInt32BE(size, 4);
  header[8] = 8;
  header[9] = 6;
  header[10] = 0;
  header[11] = 0;
  header[12] = 0;

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function makeIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);

  const entries = [];
  let offset = 6 + pngs.length * 16;
  for (const { size, buffer } of pngs) {
    const entry = Buffer.alloc(16);
    entry[0] = size >= 256 ? 0 : size;
    entry[1] = size >= 256 ? 0 : size;
    entry[2] = 0;
    entry[3] = 0;
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buffer.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngs.map((item) => item.buffer)]);
}

mkdirSync(publicDir, { recursive: true });

const icon512 = makePng(512);
const apple180 = makePng(180);
const icoPngs = [16, 32, 48, 64, 128, 256].map((size) => ({ size, buffer: makePng(size) }));

for (const [file, buffer] of [
  ["icon.png", icon512],
  ["apple-touch-icon.png", apple180],
  ["favicon.ico", makeIco(icoPngs)],
]) {
  const output = join(publicDir, file);
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, buffer);
  console.log(`Created ${output}`);
}
