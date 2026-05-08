# Bulletin Management

Your church bulletin is available at `/bulletin` and supports weekly updates stored in Vercel Blob.

## Quick Setup

1. **Ensure Blob storage is configured** (from earlier video setup)
2. **Set your Blob token:**
   ```bash
   export BLOB_READ_WRITE_TOKEN=your_token_here
   ```

## Weekly Bulletin Upload

Each Sunday, upload the latest bulletin:

```bash
npm run bulletin:upload
```

This will:
1. Ask for the bulletin PDF file path
2. Ask for the date (YYYY-MM-DD format)
3. Upload to Vercel Blob
4. Automatically update `src/lib/data/bulletins.js`

**Example:**
```bash
npm run bulletin:upload
# Prompts:
# 📄 Enter bulletin PDF path: ~/Downloads/bulletin-2026-05-07.pdf
# 📅 Enter bulletin date: 2026-05-07
```

## Page Features

- **Latest Bulletin** – Featured with embedded PDF viewer and download button
- **Archive** – Past bulletins in a grid (appears after 2+ uploads)
- **Empty State** – Shows "No bulletins available" if none uploaded yet
- **Responsive** – Works on mobile, tablet, desktop

## Manual Entry

If you prefer, edit `src/lib/data/bulletins.js` directly:

```javascript
export const bulletins = [
  { date: '2026-05-07', url: 'https://your-blob-url.blob.vercel-storage.com/bulletins/bulletin-2026-05-07.pdf' },
  { date: '2026-04-30', url: 'https://your-blob-url.blob.vercel-storage.com/bulletins/bulletin-2026-04-30.pdf' },
]
```

The first entry in the array is always the **latest**.

## Troubleshooting

### Script can't find PDF
```bash
# Make sure to use ~ for home directory or absolute path
npm run bulletin:upload
# Enter: ~/Downloads/bulletin.pdf (not ~/Downloads/bulletin.pdf)
```

### Upload fails with BLOB error
- Check `BLOB_READ_WRITE_TOKEN` is set correctly
- Verify it has read/write permissions in Vercel dashboard
- Try uploading via Vercel dashboard directly to test token

### Want to remove an old bulletin
Edit `src/lib/data/bulletins.js` and delete the entry line for that date.

## File Organization

Bulletins are stored at:
```
https://your-blob-url.blob.vercel-storage.com/bulletins/bulletin-YYYY-MM-DD.pdf
```

The date format in `bulletins.js` should match your filename.
