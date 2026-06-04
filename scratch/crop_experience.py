from PIL import Image

# Open the image
img = Image.open(r"C:\Users\sande\.gemini\antigravity\brain\4fc479ea-a116-4a19-8379-dc1b7c5cda3b\media__1779356274897.png")
width, height = img.size

# The resume experiences are in the middle of the page.
# Let's crop that region.
# We will save several crops or a single crop of the middle section.
crop_area = (int(width * 0.3), int(height * 0.35), int(width * 0.7), int(height * 0.65))
cropped_img = img.crop(crop_area)
cropped_img.save(r"c:\Users\sande\Downloads\MyPortfolio-main\MyPortfolio-main\scratch\experience_cropped.png")
print(f"Image saved with size {cropped_img.size}")
