# MUSIC_ADVERTISEMENT Website

This is a beautiful, animated, single-page website to advertise your music. It's designed to be easily customizable just by editing a single JavaScript file.

## How to Use

1.  **Add Your Assets:**
    *   Replace `logo.png` with your own logo (preferably square).
    *   Replace `background.png` with your desired background image.

2.  **Customize Your Content:**
    *   Open the `script.js` file.
    *   Inside the `config` object at the top of the file, change the values to match your information:
        *   `artistName`: Your artist or band name.
        *   `links`: Add or remove platforms. The key is the display name (e.g., "Spotify"), and the value is the full URL to your profile.
        *   `spotifyTrackIds`: A list of Spotify track IDs you want to feature. To get a track ID, go to the song on Spotify, click the "..." menu, go to "Share", and select "Copy Spotify URI". The ID is the string of characters after `spotify:track:`.

3.  **Open `index.html`:**
    *   That's it! Open the `index.html` file in your web browser to see your personalized site.
