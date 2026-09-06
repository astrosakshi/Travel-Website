# Rudraa India travel website clone

A responsive, single-page travel website built with plain HTML, CSS, and JavaScript.

## Run locally

Open `index.html` directly in a browser, or run a local server:

```bash
python3 -m http.server 5500
```

Then visit `http://localhost:5500`.

## Deploy to Vercel

1. Create a new GitHub repository.
2. Upload the files inside this folder to the repository root.
3. In Vercel, choose **Add New Project** and import the GitHub repository.
4. Use these settings:
   - Framework preset: `Other`
   - Build command: leave blank
   - Output directory: `.`
5. Click **Deploy**.

The page uses remote Unsplash images, so it works immediately after deployment without an assets build step. Replace those URLs with your own licensed images before publishing a production travel business site.

## Customize

- Edit tour cards and content in `index.html`.
- Change colors and layout in `styles.css`.
- Update filters, testimonial slider, wishlist buttons, and enquiry form behavior in `script.js`.

The enquiry form is frontend-only. To receive real submissions, connect it to Formspree, FormSubmit, a serverless function, or your own backend.
