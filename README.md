# Conner & Jillian Wedding Website

A beautiful, responsive wedding website built with HTML, CSS, and JavaScript. Inspired by the elegant Carmella wedding website template from Bliss & Bone.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Elegant Styling**: Beautiful typography, color scheme, and animations
- **Interactive Elements**:
  - Live countdown timer to wedding day
  - Smooth scrolling navigation
  - RSVP form with validation
  - Photo gallery with lightbox (optional)
  - Mobile-friendly hamburger menu

## Sections

1. **Hero Section**: Beautiful couple photo with names and countdown
2. **Wedding Details**: Ceremony and reception information with timeline
3. **Our Story**: Personalized love story sections
4. **Gallery**: Photo showcase of the couple
5. **RSVP**: Interactive form for guest responses
6. **Registry**: Links to wedding registries
7. **Footer**: Contact information and credits

## Customization Guide

### 1. Update Wedding Information

Edit `index.html` to customize:

- **Couple Names**: Replace "Conner & Jillian" with your names
- **Wedding Date**: Update the date in the hero section
- **Venue Information**: Add your ceremony and reception venues
- **Timeline**: Customize the schedule of events
- **Story Content**: Replace placeholder text with your actual story

### 2. Set Wedding Date for Countdown

In `js/script.js`, update the wedding date:

```javascript
// Line 60 - Set your actual wedding date and time
const weddingDate = new Date('2024-12-31T18:00:00').getTime();
```

### 3. Add Your Photos

Replace the placeholder images in the `images/` folder:

- `hero-couple.jpg` (500x600px recommended)
- `couple-story.jpg` (400x500px recommended)  
- `gallery1.jpg` through `gallery6.jpg` (300x300px recommended, square format)

### 4. Update Registry Links

In `index.html`, update the registry links in the Registry section:

```html
<a href="YOUR_REGISTRY_URL" class="registry-link">View Registry</a>
```

### 5. Customize Colors and Fonts

Edit `css/styles.css` to customize the color scheme:

```css
:root {
    --primary-color: #8B7355;    /* Main brown color */
    --secondary-color: #D4C4A8;  /* Light brown */
    --accent-color: #E8DCC6;     /* Cream accent */
    --gold: #B8860B;             /* Gold highlights */
}
```

### 6. Form Submission

The RSVP form currently shows a success message but doesn't actually submit data. To make it functional:

1. Set up a form handler (like Netlify Forms, Formspree, or custom backend)
2. Update the form submission logic in `js/script.js`
3. Add the appropriate action and method attributes to the form

## File Structure

```
ConnerAndJillian/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   └── script.js       # Interactive functionality
├── images/
│   ├── hero-couple.jpg
│   ├── couple-story.jpg
│   └── gallery1-6.jpg
└── README.md
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- Optimized CSS with minimal external dependencies
- Efficient JavaScript with event delegation
- Responsive images with proper sizing
- Smooth animations using CSS transitions
- Lazy loading ready (can be added)

## Getting Started

1. Clone or download this repository
2. Replace placeholder content with your information
3. Add your photos to the `images/` folder
4. Update the wedding date in the JavaScript
5. Test the website locally
6. Deploy to your preferred hosting service

## Hosting Suggestions

- **Netlify**: Great for static sites with form handling
- **Vercel**: Fast deployment with GitHub integration  
- **GitHub Pages**: Free hosting for public repositories
- **Firebase Hosting**: Google's hosting platform

## Credits

- Design inspired by Bliss & Bone's Carmella template
- Fonts: Playfair Display & Poppins from Google Fonts
- Icons: Bootstrap Icons
- Built with love for Conner & Jillian's special day

---

**Note**: This is a template website. Please customize all content, dates, and information to match your actual wedding details.