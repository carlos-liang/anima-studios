from fastapi import FastAPI, Response, Body
from fastapi.middleware.cors import CORSMiddleware
import torch
from torch import autocast
from diffusers import StableDiffusionPipeline, EulerDiscreteScheduler
from io import BytesIO
import base64


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

model_id = "model/dreamshaper_6BakedVae.safetensors"

pipe = StableDiffusionPipeline.from_pretrained('', torch_dtype=torch.float16)
pipe = pipe.to("cuda")


@app.get("/")
def generate_image(prompt: str):
    image = pipe(prompt, guidance_scale=8.5).images[0]
    buffer = BytesIO()
    image.save(buffer, format="PNG")
    image_bytes = base64.b64encode(buffer.getvalue())
    return Response(content=image_bytes, media_type="image/png")
