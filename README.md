# MUSIC_ADVERTISEMENT Website

This is a beautiful, animated, single-page website to advertise your music. It's designed to be easily customizable just by editing a single JavaScript file.

## How to Use

1.  **Add Your Assets:**
    *   Replace `logo.png` with your own logo (preferably square).
    *   Replace `background.png` with your desired background image.
    *   Add your social/music platform icons to the `icons/` folder. They should be SVG or PNG files and named in lowercase without spaces (e.g., `spotify.svg`, `applemusic.svg`). If an icon is not found, it will be hidden gracefully.

2.  **Customize Your Content:**
    *   Open the `script.js` file.
    *   Inside the `config` object at the top of the file, change the values to match your information:
        *   `artistName`: Your artist or band name.
        *   `links`: Add or remove platforms. The key is the display name (e.g., "Spotify"), and the value is the full URL to your profile.
        *   `spotifyTrackIds`: A list of Spotify track IDs you want to feature. To get a track ID, go to the song on Spotify, click the "..." menu, go to "Share", and select "Copy Spotify URI". The ID is the string of characters after `spotify:track:`.

3.  **Open `index.html`:**
    *   That's it! Open the `index.html` file in your web browser to see your personalized site.

## File Structure

```
.
├── icons/
│   ├── applemusic.svg  (example)
│   ├── instagram.svg   (example)
│   ├── soundcloud.svg  (example)
│   ├── spotify.svg     (example)
│   └── youtube.svg     (example)
├── background.png      (Your background image)
├── index.html          (The main page)
├── logo.png            (Your logo)
├── script.js           (Your configuration file)
└── style.css           (Styling - no need to edit)
```