# Morgan Kemp Portfolio

A modern static portfolio website for Morgan Kemp, built with plain HTML, CSS, and a small amount of JavaScript. The site is designed for GitHub Pages and focuses on professional experience, selected projects, technical skills, contact links, and a lightweight CV access challenge.

## Features

- Responsive one-page portfolio layout
- Editorial hero section with professional positioning
- Experience journey timeline
- Tech stack and selected project sections
- LinkedIn and GitHub contact links
- Lightweight CV unlock challenge
- Basic static-site hardening with CSP, referrer policy, and safe external links
- GitHub Pages-friendly `.nojekyll` file

## Project Structure

```text
.
|-- index.html
|-- assets/
|   |-- css/
|   |   `-- main.css
|   `-- js/
|       `-- security.js
|-- images/
|   |-- desktop.jpg
|   `-- techstack.jpg
|-- .nojekyll
|-- LICENSE.txt
`-- README.md
```

## Running Locally

From the project root:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## GitHub Pages Notes

This site is intended to be served directly from GitHub Pages.

Important deployment checks:

- Make sure `index.html` is in the repository root.
- Make sure GitHub Pages is configured to publish from the correct branch and folder.
- Keep image paths case-sensitive. GitHub Pages is case-sensitive, so `desktop.jpg` and `Desktop.jpg` are different files.
- The active image references are:
  - `./images/desktop.jpg`
  - `./images/techstack.jpg`

## Security Notes

This is a static portfolio, so there is no backend authentication or server-side access control. The CV challenge is a lightweight deterrent only.

Current preventative measures include:

- Content Security Policy meta tag
- Strict referrer policy
- No inline JavaScript
- External links use `rel="noopener noreferrer"`
- No forms posting data
- No cookies, local storage, or third-party tracking scripts

## Credits

Images are open-source assets sourced from Unsplash.
