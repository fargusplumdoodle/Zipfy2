docker stop zipfyapi_0
docker rm zipfyapi_0
docker run -p 8000:8000 --name zipfyapi_0 zipfyapi
