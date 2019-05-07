docker stop zipfyui_0
docker rm zipfyui_0
docker run -p 3000:3000 --name zipfyui_0 zipfyui
