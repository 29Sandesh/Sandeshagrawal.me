import os
import sys

def extract_pdf_text():
    # Let's try importing pypdf or PyPDF2
    try:
        import pypdf
        print("Using pypdf")
        reader = pypdf.PdfReader("Sandesh Agrawal — Full Stack Developer.pdf")
        for i, page in enumerate(reader.pages):
            print(f"--- Page {i+1} ---")
            print(page.extract_text())
        return
    except ImportError:
        pass

    try:
        import PyPDF2
        print("Using PyPDF2")
        reader = PyPDF2.PdfReader("Sandesh Agrawal — Full Stack Developer.pdf")
        for i, page in enumerate(reader.pages):
            print(f"--- Page {i+1} ---")
            print(page.extract_text())
        return
    except ImportError:
        pass

    try:
        import pdfplumber
        print("Using pdfplumber")
        with pdfplumber.open("Sandesh Agrawal — Full Stack Developer.pdf") as pdf:
            for i, page in enumerate(pdf.pages):
                print(f"--- Page {i+1} ---")
                print(page.extract_text())
        return
    except ImportError:
        pass

    # If no library is installed, let's try to install pypdf via pip inside the script or print a message
    print("No PDF extraction libraries found. Attempting to install pypdf...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    import pypdf
    reader = pypdf.PdfReader("Sandesh Agrawal — Full Stack Developer.pdf")
    for i, page in enumerate(reader.pages):
        print(f"--- Page {i+1} ---")
        print(page.extract_text())

if __name__ == "__main__":
    extract_pdf_text()
