from PIL import Image, ImageEnhance, ImageFilter

# Open the image
img = Image.open(r"C:\Users\sande\.gemini\antigravity\brain\4fc479ea-a116-4a19-8379-dc1b7c5cda3b\media__1779356274897.png")
width, height = img.size

# The dates column is on the right side of the experience section.
# Experiences start at roughly y = 35% to 65% of the height, and are on the right side (x = 55% to 68%).
crop_area = (int(width * 0.58), int(height * 0.36), int(width * 0.67), int(height * 0.56))
cropped_img = img.crop(crop_area)

# Let's upscale and enhance contrast for perfect readability
cropped_img = cropped_img.resize((cropped_img.width * 4, cropped_img.height * 4), Image.Resampling.LANCZOS)
enhancer = ImageEnhance.Contrast(cropped_img)
cropped_img = enhancer.enhance(3.0)

cropped_img.save(r"c:\Users\sande\Downloads\MyPortfolio-main\MyPortfolio-main\scratch\dates_cropped.png")
print("Cropped dates image saved!")
