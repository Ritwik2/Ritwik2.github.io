# Resume Website

A professional, responsive resume website that displays your PDF resume in an interactive format.

## Features

- **PDF Integration**: Displays your resume PDF directly in the browser
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Controls**: Fullscreen viewing, zoom in/out, download, and external viewing
- **Professional Layout**: Clean, modern design with smooth animations
- **Mobile Optimized**: Special mobile interface for better PDF viewing experience
- **Accessible**: Keyboard navigation and screen reader friendly
- **Fast Loading**: Optimized for quick loading with fallback options

## File Structure

```
resume-website/
├── index.html          # Main HTML file
├── style.css           # Styling and responsive design
├── script.js           # Interactive functionality
├── Ritwik_Verma.pdf    # Your resume PDF file
└── README.md           # This file
```

## Setup Instructions

### 1. Basic Setup
1. Replace `Ritwik_Verma.pdf` with your own resume PDF file
2. Update the filename references in the HTML file if your PDF has a different name
3. Open `index.html` in a web browser to view your resume website

### 2. Customization

#### Personal Information
Edit the following sections in `index.html`:

```html
<!-- Update your name -->
<title>Your Name - Resume</title>
<h2>Your Name</h2>
<h1>Hi, I'm <span class="highlight">Your Name</span></h1>

<!-- Update contact information -->
<a href="mailto:your.email@example.com" class="contact-link">
<a href="https://linkedin.com/in/your-profile" class="contact-link">
<a href="https://github.com/yourusername" class="contact-link">
```

#### PDF File Reference
If your PDF has a different filename, update these references:
```html
<!-- Update all instances of "Ritwik_Verma.pdf" to your filename -->
src="your-resume.pdf#toolbar=1&navpanes=0&scrollbar=1&page=1&view=FitH"
href="your-resume.pdf"
```

#### Colors and Styling
Customize the color scheme in `style.css`:
```css
/* Primary color (blue theme) */
:root {
    --primary-color: #2563eb;  /* Change this to your preferred color */
    --primary-hover: #3b82f6;
}
```

#### Content
Update the about section and hero subtitle:
```html
<p class="hero-subtitle">Your Professional Title</p>
<!-- Update the about section content -->
```

### 3. Deployment Options

#### Option 1: Simple File Hosting
1. Upload all files to any web hosting service
2. Ensure the PDF file is in the same directory
3. Access via your domain/index.html

#### Option 2: GitHub Pages
1. Create a GitHub repository
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://yourusername.github.io/repository-name`

#### Option 3: Local Testing
1. Simply open `index.html` in your browser
2. All functionality will work locally (some browsers may require a local server for PDF viewing)

## Browser Compatibility

### Supported Browsers
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### PDF Viewing Notes
- Most modern browsers support inline PDF viewing
- Fallback options provided for browsers that don't support PDF viewing
- Mobile devices show alternative viewing options for better experience

## Features Explained

### PDF Viewer Controls
- **Fullscreen**: View your resume in fullscreen mode
- **Zoom In/Out**: Adjust the zoom level for better readability
- **Download**: Direct download of your PDF resume
- **External View**: Open PDF in a new tab

### Responsive Behavior
- **Desktop**: Full PDF viewer with all controls
- **Tablet**: Optimized layout with touch-friendly controls
- **Mobile**: Alternative interface with download/view options

### Accessibility Features
- Keyboard navigation support
- Screen reader compatible
- High contrast design
- Focus indicators

## Customization Tips

### 1. Adding Your Photo
Replace the profile placeholder with your photo:
```html
<!-- Replace this -->
<div class="profile-placeholder">
    <i class="fas fa-user"></i>
</div>

<!-- With this -->
<img src="your-photo.jpg" alt="Your Name" class="profile-image">
```

Then add CSS:
```css
.profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #e5e7eb;
}
```

### 2. Adding More Sections
You can add additional sections like portfolio or skills:
```html
<section id="portfolio" class="portfolio">
    <div class="container">
        <h2 class="section-title">Portfolio</h2>
        <!-- Your portfolio content -->
    </div>
</section>
```

### 3. Analytics Integration
Add Google Analytics or other tracking:
```javascript
// In script.js, replace the trackEvent function with actual analytics
function trackEvent(action, category = 'Resume Website') {
    gtag('event', action, {
        event_category: category
    });
}
```

## Troubleshooting

### PDF Not Loading
1. Check that the PDF file exists in the same directory
2. Verify the filename matches exactly (case-sensitive)
3. Try opening the PDF directly in the browser
4. Use the fallback download option if viewing fails

### Mobile Display Issues
1. The site automatically shows mobile-optimized interface
2. Use the "View PDF" or "Download" buttons on mobile
3. Some mobile browsers may require external PDF apps

### Styling Issues
1. Clear browser cache and reload
2. Check for console errors in browser developer tools
3. Verify all CSS files are loading correctly

## Performance Tips

1. **Optimize PDF**: Keep PDF file size under 5MB for faster loading
2. **Image Optimization**: Compress any images you add
3. **CDN Usage**: The site uses CDN for fonts and icons for faster loading

## Security Considerations

- All code runs client-side (no server required)
- PDF files are served directly (no processing)
- External links open in new tabs for security
- No sensitive data is transmitted

## License

This template is free to use and modify for personal and commercial purposes.

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Verify your PDF file is accessible
3. Test in different browsers
4. Check browser console for error messages

---

**Pro Tip**: Test your website on multiple devices and browsers to ensure the best experience for all visitors!
