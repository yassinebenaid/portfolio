export const getAccessToken = async () => {
  const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

  const url = new URL("https://accounts.spotify.com/api/token");
  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", refresh_token!);

  url.search = params.toString();


  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return response.json();
};

export const currentlyPlayingSong = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      tags: ['now-playing']
    }
  });
};

export type CurrentlyPlayingSong = {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}