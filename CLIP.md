# GTA 6 Clip (gta6-clipper-01)

## Clip Specs
- **Duration**: 30.0 seconds
- **Resolution**: 720x1280 (9:16 vertical)
- **Video Codec**: H.264 (yuv420p, 30 fps)
- **Audio Codec**: AAC (Stereo, 48kHz)
- **File Path**: `/home/hatch/workspace/makefun-audit/gta6-clipper-01-work/clip.mp4`
- **File Size**: ~5.4 MB

## FFmpeg Command Used (Fixed in S2b)
```bash
ffmpeg -y -ss 00:00:15 -i /home/hatch/workspace/makefun-audit/gta6-clipper-01-work/footage/trailer.mp4 -t 30 -vf "crop=608:1080:656:0,scale=720:1280,drawtext=fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf:text='GTA 6 IS FINALLY HERE':fontcolor=white:fontsize=40:box=1:boxcolor=black@0.6:boxborderw=10:x=(w-text_w)/2:y=(h-text_h)/2-100:enable='between(t,0,3)',drawtext=fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf:text='Make clips like this with AI':fontcolor=white:fontsize=32:box=1:boxcolor=black@0.6:boxborderw=8:x=(w-text_w)/2:y=h-320:enable='between(t,22,30)',drawtext=fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf:text='and earn money on make.fun':fontcolor=white:fontsize=32:box=1:boxcolor=black@0.6:boxborderw=8:x=(w-text_w)/2:y=h-260:enable='between(t,22,30)',drawtext=fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf:text='make.fun/bounty/gta6-clipper-01':fontcolor=white:fontsize=32:box=1:boxcolor=black@0.6:boxborderw=8:x=(w-text_w)/2:y=h-200:enable='between(t,22,30)'" -c:v libx264 -preset veryfast -pix_fmt yuv420p -c:a aac /home/hatch/workspace/makefun-audit/gta6-clipper-01-work/clip.mp4
```

## Note on Text Fix (Session S2b)
The on-screen text was updated and visually verified in session S2b. The hook font size was reduced from 48 to 40 so it fits comfortably within 720px without running off the edges. The single-line pitch was split into three separate lines at fontsize 32 ("Make clips like this with AI", "and earn money on make.fun", "make.fun/bounty/gta6-clipper-01"), each styled with a black background box (opacity 0.6, border 8), centered, and fully readable without being cut off. Verification frames extracted to `./frames/` confirm correct rendering.

## YouTube Details
- **Title**: GTA 6 is HERE - Lucia & Jason are back in Vice City
- **Description**:
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
makefun-buoy-marina-osprey
- **Tags**: #GTA6 #Shorts

## Upload Status
The clip is NOT uploaded yet (no YouTube channel access in this environment) and is handed to the user to upload.
