# VIP Service Taxi - Frontend Website

A beautiful, responsive frontend website for VIP Service Taxi with multi-language support (i18n) and Google Forms integration.

## Features

- ✅ **Fully Responsive Design** - Works on all devices (desktop, tablet, mobile)
- ✅ **Multi-language Support** - English, French, and Arabic with RTL support
- ✅ **i18n Implementation** - Easy to add more languages
- ✅ **Google Forms Integration** - Booking form submits directly to Google Forms
- ✅ **Image Carousel** - Auto-rotating gallery with manual controls
- ✅ **Mobile Navigation** - Hamburger menu for mobile devices
- ✅ **Smooth Animations** - Scroll animations and transitions
- ✅ **No Backend Required** - Pure frontend implementation
- ✅ **Professional Design** - Modern and elegant UI

## Project Structure

```
frontend/
├── index.html           # Main HTML file
├── css/
│   └── styles.css       # Complete styling
├── js/
│   ├── i18n.js          # Internationalization system
│   └── script.js        # Main JavaScript functionality
└── lang/
    ├── en.json          # English translations
    ├── fr.json          # French translations
    └── ar.json          # Arabic translations
```

## Quick Start

### 1. Open the Website

Simply open `index.html` in your web browser:
```bash
open index.html
# or
start index.html
```

Or serve it with a local server (recommended for proper file loading):
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server
```

Then visit: `http://localhost:8000`

### 2. Configure Google Forms Integration

To enable the booking form:

1. **Create a Google Form** at https://forms.google.com
2. **Add fields** matching the form in index.html:
   - Name
   - Email
   - Phone
   - Travel Date
   - Number of Passengers
   - Pickup Location
   - Destination
   - Special Requests

3. **Get the Form ID**:
   - After creating the form, go to "Send" (share icon)
   - Copy the form ID from the URL
   - Or look at the form's action URL

4. **Update the form action URL** in `index.html`:
   - Find the `<form id="bookingForm">` element
   - Update the `action` attribute with your Google Form URL
   - Update the `name="entry.XXXXXXX"` values to match your Google Form field IDs

   **To find Google Form field IDs**:
   - Right-click on a form field → Inspect
   - Look for `name="entry.XXXXXXX"` in the HTML
   - Update each corresponding field in the form

### 3. Add/Change Languages

To add a new language:

1. **Create a new translation file** in `lang/` folder:
   ```
   lang/es.json  (for Spanish)
   ```

2. **Copy content from** `en.json` and translate all values

3. **Update** `i18n.js`:
   - Add to the `init()` method: `await this.loadLanguage('es');`

4. **Update** `index.html` language menu:
   - Add a new link in the language selector with `data-lang="es"`

## Language Support

### Current Languages
- 🇺🇸 **English** (en)
- 🇫🇷 **French** (fr)
- 🇸🇦 **Arabic** (ar) - with RTL support

### Adding New Languages
All text in the website uses the i18n system. Every translatable element has a `data-i18n="key"` attribute that maps to translation files.

## Customization

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #1a3a52;      /* Main color */
    --secondary-color: #d4af37;    /* Accent/Gold color */
    --accent-color: #2c5f8d;       /* Lighter main */
    /* ... more colors ... */
}
```

### Update Images

Replace placeholder images in `index.html`:

```html
<!-- Change this -->
<img src="https://via.placeholder.com/400x300?text=Hyundai+Staria+2025" alt="...">

<!-- To your image -->
<img src="path/to/your/image.jpg" alt="...">
```

### Update Contact Information

Edit contact details in `index.html`:
- Phone numbers
- Email addresses
- Social media links
- Address

## Features in Detail

### 1. Navigation
- Sticky navbar
- Smooth scroll to sections
- Mobile hamburger menu
- Language switcher with dropdown

### 2. Hero Section
- Eye-catching banner
- Call-to-action button
- Responsive typography

### 3. Services
- 4 service cards with icons
- Hover animations
- Grid layout

### 4. Vehicle Showcase
- Vehicle details and features
- Feature icons
- Responsive layout

### 5. Image Gallery
- Auto-rotating carousel
- Manual navigation buttons
- Smooth transitions
- Mobile-friendly

### 6. Booking Form
- All required fields
- Client-side validation
- Google Forms integration
- Mobile-optimized layout

### 7. Contact Section
- Contact information cards
- Social media links
- Review platform links (Google, TripAdvisor)

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## JavaScript Features

### i18n System
- Automatic language detection from browser
- Language persistence (localStorage)
- Dynamic text and placeholder translation
- RTL support for Arabic

### Interactivity
- Mobile menu toggle
- Language selector
- Image carousel with auto-rotation
- Smooth scroll navigation
- Form validation
- Scroll animations
- Navbar active link highlighting

## Performance

- ⚡ Lightweight CSS (< 20KB)
- ⚡ Minimal JavaScript
- ⚡ Optimized images (using placeholders)
- ⚡ No external dependencies (except Font Awesome icons)
- ⚡ Fast loading time

## SEO Friendly

- Proper semantic HTML
- Meta tags
- Structured content
- Mobile responsive

## File Sizes

- `index.html`: ~15KB
- `styles.css`: ~18KB
- `script.js`: ~8KB
- `i18n.js`: ~5KB
- Language files: ~3-4KB each

## Tips for Production

1. **Replace placeholder images** with real photos
2. **Set up proper Google Form** with your own field IDs
3. **Update all contact information**
4. **Test on multiple devices**
5. **Check form submissions** work correctly
6. **Set up SSL/HTTPS** for form security
7. **Add Google Analytics** if desired
8. **Compress images** for faster loading
9. **Add more languages** as needed

## Troubleshooting

### Google Form not submitting
- Verify the form action URL is correct
- Check that entry field IDs match your form
- Open browser console to check for errors
- Ensure CORS is not blocking the request (Google Forms handles this)

### Language not changing
- Check browser console for errors
- Verify JSON files are in correct `lang/` folder
- Ensure filenames match language codes (en.json, fr.json, etc.)

### Images not loading
- Replace placeholder URLs with local image paths
- Ensure images exist in the correct location
- Check file paths are relative to index.html

### Mobile menu not working
- Check JavaScript console for errors
- Verify screen width is below 768px
- Clear browser cache and reload

## License

This project is open source and available for modification and redistribution.

## Support

For issues or questions, please check the code comments and documentation.

---

**VIP Service Taxi - Luxury Transportation Excellence** ✨
