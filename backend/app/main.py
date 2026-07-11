from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .experimental_ai_segments import router as experimental_ai_segments_router

app = FastAPI(title="AI Detector API")

app.add_middleware(
    CORSMiddleware,
     allow_origins=[
            "http://localhost:5173",
            "http://127.0.0.1:5173",
            "http://localhost:5174",
            "http://127.0.0.1:5174",
        ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check():
    return {"status": "ok"}


app.include_router(experimental_ai_segments_router)
