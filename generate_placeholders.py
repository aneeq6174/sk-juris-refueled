from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path('e:/Aneeq - E/A to Z career pattern/wasiq/sk-juris-recovered - Copy')
files = [
    ('src/assets/SKJ logo.png', (600, 200), 'SKJ Logo'),
    ('src/assets/Hero Team.JPG', (1200, 800), 'Hero Team'),
    ('src/assets/Hero Services.jpg', (1200, 800), 'Hero Services'),
    ('src/assets/hero about us.JPG', (1200, 800), 'Hero About Us'),
    ('src/assets/Hero events and achievements.jpg', (1200, 800), 'Hero Events & Achievements'),
    ('src/assets/Hero contact us.jpg', (1200, 800), 'Hero Contact Us'),
    ('src/assets/Hero testimonials.jpg', (1200, 800), 'Hero Testimonials'),
    ('src/assets/home office 1.jpg', (1200, 800), 'Office'),
    ('src/team/Sheikh Khurram Shehzad - Advocate high court - Founder.jpg', (600, 800), 'Founder'),
    ('src/team/Muhammad Younas - Advocate High Court -member 1.jpg', (600, 800), 'Member 1'),
    ('src/team/Atif Raja Advocate - High Court - member 2.jpg', (600, 800), 'Member 2'),
    ('src/team/Amir Rasheed Bhatti - Advocate High Court - member 3.JPG', (600, 800), 'Member 3'),
    ('src/team/team hero.JPG', (1200, 800), 'Team Hero'),
    ('src/Recognitions/recognitions hero image.JPG', (1200, 800), 'Recognitions Hero'),
    ('src/assets/logos/logo-placeholder-1.png', (400, 200), 'Client Logo'),
    ('src/Recognitions/Awards/award-placeholder-1.jpg', (800, 600), 'Award'),
    ('src/Recognitions/Moments/moment-placeholder-1.jpg', (800, 600), 'Moment'),
    ('src/testimonials/testimonial-placeholder-1.jpg', (400, 400), 'Testimonial'),
    ('src/team/Partners/partner-placeholder-1.jpg', (600, 800), 'Partner'),
]

def make_image(path, size, text):
    path = root / path
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.exists():
        return
    img = Image.new('RGB', size, (230, 230, 230))
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype('arial.ttf', max(20, size[0] // 20))
    except Exception:
        font = ImageFont.load_default()
    text = text.strip() if text else path.stem
    lines = text.split('\n')
    if len(text) > 25:
        parts = text.split(' ')
        if len(parts) > 1:
            mid = len(parts) // 2
            lines = [' '.join(parts[:mid]), ' '.join(parts[mid:])]
    total_h = sum(draw.textbbox((0,0), line, font=font)[3] - draw.textbbox((0,0), line, font=font)[1] for line in lines)
    y = (size[1] - total_h) // 2
    for line in lines:
        bbox = draw.textbbox((0,0), line, font=font)
        w = bbox[2] - bbox[0]
        h = bbox[3] - bbox[1]
        draw.text(((size[0]-w)/2, y), line, fill=(40, 40, 40), font=font)
        y += h + 10
    img.save(path, quality=90)

for rel_path, size, label in files:
    make_image(rel_path, size, label)
print('Created placeholders for', len(files), 'images.')
