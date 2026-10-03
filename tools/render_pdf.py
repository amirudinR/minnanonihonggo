"""Render halaman PDF menjadi JPG grayscale yang masih terbaca untuk teks CJK.

Pakai:  python tools/render_pdf.py <pdf> <out_dir> <prefix> <start> <end> [width] [quality]
Contoh: python tools/render_pdf.py "a.pdf" "tmp/x" "id" 100 107 1800 85

PENTING: width minimal 1500 supaya kana/kanji terbaca agent.
"""

import os
import sys

import fitz
from PIL import Image


def render(pdf, out_dir, prefix, start, end, width=1800, quality=85):
    os.makedirs(out_dir, exist_ok=True)
    doc = fitz.open(pdf)
    for i in range(start, end + 1):
        if i >= len(doc):
            break
        pix = doc[i].get_pixmap(dpi=100, colorspace=fitz.csGRAY)
        img = Image.frombytes("L", (pix.width, pix.height), pix.samples)
        if img.width > width:
            r = float(width) / img.width
            img = img.resize((width, int(img.height * r)), Image.Resampling.LANCZOS)
        out = os.path.join(out_dir, f"{prefix}_{i}.jpg")
        img.save(out, format="JPEG", quality=quality)
        print(out, os.path.getsize(out))


if __name__ == "__main__":
    a = sys.argv[1:]
    if len(a) < 5:
        print(__doc__)
        raise SystemExit(1)
    render(
        a[0],
        a[1],
        a[2],
        int(a[3]),
        int(a[4]),
        int(a[5]) if len(a) > 5 else 1800,
        int(a[6]) if len(a) > 6 else 85,
    )
