"""Crop + upscale bagian gambar agar teks CJK lebih terbaca.

Pakai: python tools/crop_zoom.py <img> <out> <left> <top> <right> <bottom> [scale]
Koordinat dalam persen (0-100) dari ukuran gambar.
"""

import os
import sys

from PIL import Image


def main() -> None:
    a = sys.argv[1:]
    src, out = a[0], a[1]
    l, t, r, b = (float(x) for x in a[2:6])
    scale = float(a[6]) if len(a) > 6 else 2.0
    img = Image.open(src)
    w, h = img.size
    box = (int(w * l / 100), int(h * t / 100), int(w * r / 100), int(h * b / 100))
    crop = img.crop(box)
    crop = crop.resize(
        (int(crop.width * scale), int(crop.height * scale)), Image.Resampling.LANCZOS
    )
    os.makedirs(os.path.dirname(out) or ".", exist_ok=True)
    crop.save(out, format="PNG")
    print(out, crop.size, os.path.getsize(out))


if __name__ == "__main__":
    main()
