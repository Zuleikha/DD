import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../config/firebase';
import { Image, Video, Upload, AlertCircle } from 'lucide-react';

interface MediaUploadProps {
  onMediaUploaded: (url: string, type: 'image' | 'video') => void;
}

const MediaUpload: React.FC<MediaUploadProps> = ({ onMediaUploaded }) => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError(null);
    const file = e.target.files?.[0];
    if (!file) return;
    
    setSelectedFile(file);
    
    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      setUploadError('File size must be less than 10MB');
      return;
    }
    
    // Determine file type
    const fileType = file.type.startsWith('image/') ? 'image' : 
                    file.type.startsWith('video/') ? 'video' : null;
    
    if (!fileType) {
      setUploadError('Only image or video files are allowed');
      return;
    }
    
    handleUpload(file, fileType);
  };

  const handleUpload = async (file: File, fileType: 'image' | 'video') => {
    try {
      setUploading(true);
      setUploadProgress(0);
      
      // Create a unique filename
      const timestamp = Date.now();
      const fileExtension = file.name.split('.').pop();
      const fileName = `forum_media/${timestamp}_${Math.random().toString(36).substring(2, 8)}.${fileExtension}`;
      
      // Create storage reference
      const storageRef = ref(storage, fileName);
      
      // Upload file with progress tracking
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress(progress);
        },
        (error) => {
          console.error('Upload error:', error);
          setUploadError(`Upload failed: ${error.message}`);
          setUploading(false);
        },
        async () => {
          // Upload completed successfully
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          onMediaUploaded(downloadURL, fileType);
          setUploading(false);
          setUploadProgress(100);
        }
      );
    } catch (error: any) {
      console.error('Error in upload process:', error);
      setUploadError(`Upload process error: ${error.message}`);
      setUploading(false);
    }
  };

  return (
    <div className="media-upload mt-4">
      <div className="flex items-center space-x-2 mb-2">
        <Image className="h-5 w-5 text-gray-600" />
        <Video className="h-5 w-5 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Add Media (Optional)</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <label className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 cursor-pointer">
          <Upload className="h-4 w-4 mr-2" />
          {selectedFile ? 'Change File' : 'Upload Media'}
          <input
            type="file"
            className="hidden"
            accept="image/jpeg,image/png,image/gif,image/webp,video/mp4,video/quicktime"
            onChange={handleFileChange}
            disabled={uploading}
          />
        </label>
        
        {selectedFile && (
          <span className="text-sm text-gray-500">
            {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
          </span>
        )}
      </div>
      
      {uploading && (
        <div className="mt-2">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-orange-600 h-2.5 rounded-full" 
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">Uploading: {uploadProgress}%</p>
        </div>
      )}
      
      {uploadError && (
        <div className="mt-2 flex items-center text-red-600 text-sm">
          <AlertCircle className="h-4 w-4 mr-1" />
          {uploadError}
        </div>
      )}
    </div>
  );
};

export default MediaUpload;
