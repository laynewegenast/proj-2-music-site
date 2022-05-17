const { Song } = require('../models');

const songData = [
    {
        Song_name: "Shape of You",
        artist: "Ed Sheeran",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7qiZfU4dY1lWllzX7mPBI3?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 1
    },
    {
        Song_name: "Blinding Lights",
        artist: "The Weeknd",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7qiZfU4dY1lWllzX7mPBI3?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 1
    },
    {
        Song_name: "Dance Monkey",
        artist: "Tones And I",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2N8m6CYs74qQO4mjVcXO30?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 1
    },
    {
        Song_name: "rockstar",
        artist: "Post Malone",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0e7ipj03S05BNilyu5bRzt?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 1
    },
    {
        Song_name: "rockstar",
        artist: "Post Malone",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0e7ipj03S05BNilyu5bRzt?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 1
    },
    {
        Song_name: "Someone You Loved",
        artist: "Lewis Capaldi",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7qEHsqek33rTcFNT9PFqLf?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 1
    },
    {
        Song_name: "One Dance",
        artist: "Drake",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/12VWzyPDBCc8fqeWCAfNwR?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 1
    },
    {
        Song_name: "Sunflower",
        artist: "Various Artists",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3KkXRkHbMCARz0aVfEt68P?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 1
    },
    {
        Song_name: "Closer",
        artist: "The Chainsmokers",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7crMiinWx373rNBZBaVske?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 1
    },
    {
        Song_name: "Believer",
        artist: "Imagine Dragons",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7crMiinWx373rNBZBaVske?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 1
    },
    {
        Song_name: "Perfect",
        artist: "Ed Sheeran",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 1
    },
    {
        Song_name: "bad guy",
        artist: "Billie Eilish",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2Fxmhks0bxGSBdJ92vM42m?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 1
    },
    {
        Song_name: "Say You Won't Let Go",
        artist: "James Arthur",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5uCax9HTNlzGybIStD3vDh?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 1
    },
    {
        Song_name: "STAY",
        artist: "The Kid LAROI",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5PjdY0CKGZdEuoNab3yDmX?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 2
    },
    {
        Song_name: "As It Was",
        artist: "Harry Styles",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4LRPiXqCikLlN15c3yImP7?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 2
    },
    {
        Song_name: "abcdefu",
        artist: "GAYLE",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4fouWK6XVHhzl78KzQ1UjL?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 2
    },
    {
        Song_name: "INDUSTRY BABY",
        artist: "Lil Nas X",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/27NovPIUIRrOZoCHxABJwK?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 2
    },
    {
        Song_name: "Shivers",
        artist: "Ed Sheeran",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6bQfNiqyCX7UaQSvVVGo4I?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 2
    },
    {
        Song_name: "Do It To It",
        artist: "ACRAZE",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/20on25jryn53hWghthWWW3?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 2
    },
    {
        Song_name: "Woman",
        artist: "Doja Cat",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6Uj1ctrBOjOas8xZXGqKk4?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 2
    },
    {
        Song_name: "BED",
        artist: "Doja Cat",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7jXQUrVhEpXdymfFWNDnQW?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 2
    },
    {
        Song_name: "Bam Bam",
        artist: "Camila Cabello",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0QBzMgT7NIeoCYy3sJCof1?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 2
    },
    {
        Song_name: "Said and Done",
        artist: "Johnning",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3jnMhpFIw1rtQh43XnNUxs?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 2
    },
    {
        Song_name: "Hell N Back",
        artist: "Bakar",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3NRql0A1Ef4RCvT473iqgD?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 3
    },
    {
        Song_name: "Head In The Clouds",
        artist: "BabyJake",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0oHivrvqAyEBDgjFF9JPXa?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 3
    },
    {
        Song_name: "Low Again",
        artist: "Hard Yes",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6pc0MSwfQ5etN4YOVjMh62?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 3
    },
    {
        Song_name: "Rawnald Gregory Erickson",
        artist: "STRFKR",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4j4pPKE3xAblPIbhxScC1j?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 3
    },
    {
        Song_name: "upside down",
        artist: "nothing,nowhere.",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6bfZzQWM6AJU8ER00jY2rx?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 3
    },
    {
        Song_name: "upside down",
        artist: "nothing,nowhere.",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6bfZzQWM6AJU8ER00jY2rx?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 3
    },
    {
        Song_name: "Goodie Bag",
        artist: "Still Woozy",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/297rZsBEjFw9d0Gl3iBLnd?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 3
    },
    {
        Song_name: "Moment In The Sun",
        artist: "Sunflower Bean",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3srgB1L9XfePDOIY4DrN2K?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 3
    },
    {
        Song_name: "Control",
        artist: "Aaron Taos",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6jKOxnQ1Pdsr4KblSSeA0j?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 3
    },
    {
        Song_name: "Remember When",
        artist: "Wallows",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5naar7XewEOAjOywIp6Jjq?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 3
    },
    {
        Song_name: "Weekend Friend",
        artist: "Goth Babe",
        embed_song: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2d3QlXE6FXFDeodiS66yjM?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
        playlist_id: 3
    }
]

const seedSongs = () => Song.bulkCreate(songdata, { individualHooks: true });

module.exports = seedSongs;