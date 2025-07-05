// 1. Add your artist name
const artistName = "Xan0";

// 2. Add your profile links
// Simply add a new object for each platform.
const artistProfiles = [
    { platform: 'Spotify', url: 'https://open.spotify.com/intl-de/artist/0THZscMLeNuPZrs7TPgtaY' },
    { platform: 'Suno', url: 'https://suno.com/@xan0' },
    { platform: 'Youtube Music', url: 'https://music.youtube.com/channel/UCWCfBydShzkLovUU3Fv61jQ' },
    
];

// 3. Add your Spotify song embeds
// Go to a song on Spotify > Share > Embed track > Copy the 'src' URL.
const musicData = [
    { spotifyEmbedUrl: "https://open.spotify.com/embed/track/12YQElKvurVagIVMZMY8yZ?utm_source=generator" },
    { spotifyEmbedUrl: "https://open.spotify.com/embed/track/5fKfAzM9oJEaYq45VlSvpw?utm_source=generator" },
    { spotifyEmbedUrl: "https://open.spotify.com/embed/track/7HgW86emXaHyczRTLWN7dX?utm_source=generator" },
    { spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1E4zDK342GJCym?utm_source=generator" }
];

// ✨ --- NO NEED TO EDIT BELOW THIS LINE --- ✨

document.addEventListener('DOMContentLoaded', () => {
    // Set Artist Name
    const artistNameElement = document.querySelector('.artist-name');
    if (artistNameElement) {
        artistNameElement.textContent = artistName;
        document.title = artistName; // Also set the page title
    }

    // Generate Profile Links
    const profileContainer = document.getElementById('artist-profiles');
    if (profileContainer) {
        artistProfiles.forEach(profile => {
            const link = document.createElement('a');
            link.href = profile.url;
            link.textContent = profile.platform;
            link.className = 'profile-link';
            link.target = '_blank'; // Open in new tab
            link.rel = 'noopener noreferrer';
            profileContainer.appendChild(link);
        });
    }

    // Generate Music Embeds
    const musicContainer = document.getElementById('music-container');
    if (musicContainer) {
        musicData.forEach(music => {
            const card = document.createElement('div');
            card.className = 'music-card';

            const iframe = document.createElement('iframe');
            iframe.style.borderRadius = "20px";
            iframe.src = music.spotifyEmbedUrl;
            iframe.width = "100%";
            iframe.height = "152"; // Standard height for compact Spotify embed
            iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
            iframe.loading = "lazy";

            card.appendChild(iframe);
            musicContainer.appendChild(card);
        });
    }
});