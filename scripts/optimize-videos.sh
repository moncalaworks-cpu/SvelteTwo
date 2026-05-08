#!/bin/bash
# Video optimization script - converts videos to optimized MP4 and WebM formats

set -e

INPUT_DIR="${1:-.}"
OUTPUT_DIR="${2:-./public/videos}"

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo "🎬 Video Optimization Script"
echo "Input directory: $INPUT_DIR"
echo "Output directory: $OUTPUT_DIR"
echo ""

# Check if FFmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ FFmpeg not found. Install it with:"
    echo "   macOS: brew install ffmpeg"
    echo "   Linux: sudo apt-get install ffmpeg"
    exit 1
fi

# Process each video file (case-insensitive)
shopt -s nocaseglob
for video in "$INPUT_DIR"/*.{mov,mp4,mkv,webm,avi,MOV,MP4,MKV,WEBM,AVI}; do
    [ -e "$video" ] || continue

    filename=$(basename "$video" | sed 's/\.[^.]*$//')

    echo "Processing: $filename"

    # MP4 optimized for web (background video)
    echo "  → Creating optimized MP4..."
    ffmpeg -i "$video" \
        -c:v libx264 \
        -preset fast \
        -crf 28 \
        -vf "scale=1920:trunc(ow/a/2)*2" \
        -c:a aac \
        -b:a 64k \
        -y \
        "$OUTPUT_DIR/${filename}.mp4"

    # WebM version for better compression
    echo "  → Creating WebM..."
    ffmpeg -i "$video" \
        -c:v libvpx-vp9 \
        -b:v 1500k \
        -vf "scale=1920:trunc(ow/a/2)*2" \
        -c:a libopus \
        -b:a 64k \
        -y \
        "$OUTPUT_DIR/${filename}.webm" 2>&1 | grep -E "error|Error" || true

    # Get file sizes
    mp4_size=$(du -h "$OUTPUT_DIR/${filename}.mp4" | cut -f1)
    webm_size=$(du -h "$OUTPUT_DIR/${filename}.webm" | cut -f1)
    echo "  ✓ MP4: $mp4_size | WebM: $webm_size"
    echo ""
done

echo "✅ All videos optimized!"
echo "Files are in: $OUTPUT_DIR"
