import re

def clean_file(path):
    print(f"Cleaning: {path}")
    try:
        # Read as binary to handle any encoding issues
        with open(path, "rb") as f:
            content_bytes = f.read()
        
        # Decode as utf-8, ignoring/replacing bad bytes
        content = content_bytes.decode("utf-8", errors="replace")
        
        # Replace non-ASCII dashes and broken placeholders
        # We target en-dash (u2013), em-dash (u2014), raw \x96 (often Win-1252 en-dash), and the replacement character (uFFFD)
        original_len = len(content)
        
        # Let's fix specific lines to have clean standard hyphens
        content = content.replace("Oct 2023 – Present", "Oct 2023 - Present")
        content = content.replace("Oct 2023 \ufffd Present", "Oct 2023 - Present")
        content = content.replace("Jan 2025 – Oct 2025", "Jan 2025 - Oct 2025")
        content = content.replace("Jan 2025 \ufffd Oct 2025", "Jan 2025 - Oct 2025")
        content = content.replace("Jan 2023 – Dec 2024", "Jan 2023 - Dec 2024")
        content = content.replace("Jan 2023 \ufffd Dec 2024", "Jan 2023 - Dec 2024")
        content = content.replace("2026 — CGPA: 7.0", "2026 - CGPA: 7.0")
        content = content.replace("2026 \ufffd CGPA: 7.0", "2026 - CGPA: 7.0")
        
        # General regex replacements for any remaining en/em dashes
        content = re.sub(r'[\u2013\u2014\u0096]', '-', content)
        content = content.replace("\ufffd", "-")
        
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Successfully cleaned: {path}")
    except Exception as e:
        print(f"Error cleaning {path}: {e}")

clean_file("constants.ts")
clean_file("Sandesh_Agrawal_Resume.html")
