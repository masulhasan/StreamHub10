import React from 'react';
import { useParams } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, Share2 } from 'lucide-react';
import { mockVideos } from '../data/mockVideos';

export function WatchPage() {
  const { id } = useParams();
  const video = mockVideos.find(v => v.id === id);

  if (!video) {
    return <div className="pt-24">Video not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white">Video Player Placeholder</span>
            </div>
          </div>
          
          <div className="mt-4">
            <h1 className="text-2xl font-bold">{video.title}</h1>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <img
                  src={video.creator.avatarUrl}
                  alt={video.creator.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium">{video.creator.name}</h3>
                  <p className="text-sm text-gray-500">
                    {video.views.toLocaleString()} views • {video.createdAt}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-gray-100">
                  <ThumbsUp className="w-5 h-5" />
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-gray-100">
                  <ThumbsDown className="w-5 h-5" />
                  <span>Dislike</span>
                </button>
                <button className="flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-gray-100">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800">{video.description}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-4">Up Next</h2>
          <div className="space-y-4">
            {mockVideos
              .filter(v => v.id !== video.id)
              .map(relatedVideo => (
                <div key={relatedVideo.id} className="flex space-x-3">
                  <img
                    src={relatedVideo.thumbnailUrl}
                    alt={relatedVideo.title}
                    className="w-40 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium line-clamp-2">{relatedVideo.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{relatedVideo.creator.name}</p>
                    <p className="text-sm text-gray-500">
                      {relatedVideo.views.toLocaleString()} views
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}