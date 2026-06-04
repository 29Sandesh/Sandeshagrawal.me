import os

search_terms = ["2025", "Present"]
extensions = [".ts", ".tsx", ".html", ".js", ".json"]
exclude_dirs = ["node_modules", "dist", ".git", "scratch"]

results = []

for root, dirs, files in os.walk("."):
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    for file in files:
        if any(file.endswith(ext) for ext in extensions):
            path = os.path.join(root, file)
            try:
                with open(path, "r", encoding="utf-8", errors="ignore") as f:
                    for line_num, line in enumerate(f, 1):
                        for term in search_terms:
                            if term in line:
                                results.append(f"{path}:{line_num}: {line.strip()}")
            except Exception as e:
                pass

print(f"Found {len(results)} matches:")
for r in results[:100]:
    print(r)
