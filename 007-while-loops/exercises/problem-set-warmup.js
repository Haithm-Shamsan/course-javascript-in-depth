const express = require('express');
const multer = require('multer');
const { createClient } = require('@supabase/supabase-js');
const app = express();
const port = 3000;

// Initialize Supabase client
const supabaseUrl = 'https://rotktrdqgkzxexxoanfg.supabase.co';
const supabaseKey = 'your-public-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const { originalname, buffer } = req.file;
  const uniqueFileName = `${Date.now()}-${originalname}`;

  try {
    // Upload the file to Supabase
    const { data, error } = await supabase
      .storage
      .from('cabin-images')
      .upload(uniqueFileName, buffer);

    if (error) {
      throw error;
    }

    // Get the public URL
    const { publicURL, error: urlError } = supabase
      .storage
      .from('cabin-images')
      .getPublicUrl(uniqueFileName);

    if (urlError) {
      throw urlError;
    }

    // Respond with the file URL
    res.json({ fileUrl: publicURL });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload file' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
