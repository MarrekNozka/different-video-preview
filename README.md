my Different video preview
===========================

This is raw JS implementation based on 
[How to Generate Better Video Previews with ffmpeg](https://www.binpress.com/generate-video-previews-ffmpeg/)
article and [Gist](https://gist.github.com/martinsik/5237977560ea7d60ad11#file-video_preview-sh)


```bash
$ video_preview.sh /storage/video.mkv 270 32 1 video_preview.jpg
capture every 4128th frame out of 132100  frames
/home/marek/Git/different-video-preview/video_preview.jpg

$ ls -l /storage/video.mkv
-rw-r--r-- 1 marek marek 116M 30. pro 20.18 /storage/video.mkv


$ ls -l video_preview.jpg
-rw-r--r-- 1 marek marek 778K  8. bře 21.26 video_preview.jpg

```
