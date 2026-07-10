import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = path.join(process.cwd(), 'public', 'images');

async function convert() {
  if (!fs.existsSync(dir)) {
    console.error('No existe la carpeta public/images');
    process.exit(1);
  }

  const files = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.png'));
  if (!files.length) {
    console.log('No hay PNGs para convertir.');
    return;
  }

  for (const file of files) {
    const input = path.join(dir, file);
    const basename = file.replace(/\.png$/i, '');
    const sizes = [600, 1200, 2400];
    try {
      // create a default webp (1200w) and size variants
      await sharp(input).webp({ quality: 80 }).toFile(path.join(dir, `${basename}.webp`));
      console.log(`Convertido: ${file} -> ${basename}.webp`);
      for (const w of sizes) {
        const out = path.join(dir, `${basename}-${w}.webp`);
        await sharp(input).resize({ width: w }).webp({ quality: 80 }).toFile(out);
        console.log(`Convertido variante: ${file} -> ${basename}-${w}.webp (${w}px)`);
      }
    } catch (err) {
      console.error('Error convirtiendo', file, err);
    }
  }
}

convert();
