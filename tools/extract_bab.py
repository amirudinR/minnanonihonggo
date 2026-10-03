"""Ekstrak teks dari PDF hasil scan menggunakan PyMuPDF + rapidocr_onnxruntime.

Usage:
  python tools/extract_bab.py --pdf "path/to.pdf" --start 0 --end 10 --out tmp/ocr.txt
"""

import argparse
import io
from pathlib import Path

import fitz
from PIL import Image
from rapidocr_onnxruntime import RapidOCR


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--pdf", required=True)
    ap.add_argument("--start", type=int, default=0, help="index halaman (0-based)")
    ap.add_argument(
        "--end", type=int, default=None, help="index halaman terakhir (exclusive)"
    )
    ap.add_argument("--out", required=True)
    ap.add_argument("--scale", type=float, default=2.0)
    args = ap.parse_args()

    ocr = RapidOCR()
    doc = fitz.open(args.pdf)
    end = args.end if args.end is not None else doc.page_count
    lines = []
    for i in range(args.start, min(end, doc.page_count)):
        page = doc[i]
        pix = page.get_pixmap(matrix=fitz.Matrix(args.scale, args.scale))
        img = Image.open(io.BytesIO(pix.tobytes("png")))
        out, _ = ocr(img)
        txt = "\n".join(x[1] for x in out) if out else ""
        lines.append(f"\n===== PAGE {i + 1} =====\n{txt}")
        print(f"done page {i + 1}", flush=True)

    Path(args.out).parent.mkdir(parents=True, exist_ok=True)
    Path(args.out).write_text("\n".join(lines), encoding="utf-8")
    print(f"written {args.out}")


if __name__ == "__main__":
    main()
