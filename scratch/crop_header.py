from PIL import Image, ImageEnhance

# Open the image
img = Image.open(r"C:\Users\sande\.gemini\antigravity\brain\4fc479ea-a116-4a19-8379-dc1b7c5cda3b\media__1779356274897.png")
width, height = img.size

# Crop the top portion of the resume
crop_area = (int(width * 0.3), 0, int(width * 0.7), int(height * 0.25))
cropped_img = img.crop(crop_area)

# Scale up for maximum clarity
cropped_img = cropped_img.resize((cropped_img.width * 4, cropped_img.height * 4), Image.Resampling.LANCZOS)
enhancer = ImageEnhance.Contrast(cropped_img)
cropped_img = enhancer.enhance(3.0)

cropped_img.save(r"c:\Users\sande\Downloads\MyPortfolio-main\MyPortfolio-main\scratch\header_cropped.png")
print("Cropped header image saved!")
