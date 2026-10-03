import fitz
import sys, os

def render_pages(pdf_path, out_dir, prefix, start_idx, end_idx):
    os.makedirs(out_dir, exist_ok=True)
    doc = fitz.open(pdf_path)
    for i in range(start_idx, end_idx + 1):
        if i >= len(doc):
            break
        page = doc[i]
        pix = page.get_pixmap(dpi=120)
        out_path = os.path.join(out_dir, f"{prefix}_{i}.png")
        pix.save(out_path)
        print(f"Saved {out_path}")

if __name__ == '__main__':
    render_pages(sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4]), int(sys.argv[5]))
