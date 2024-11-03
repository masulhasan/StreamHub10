import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { Video } from '../types/video';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link to={`/watch/${video.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-200 flex items-center justify-center">
          <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" size={48} />
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <div className="mt-3 flex gap-3">
        <img
          src={video.creator.avatarUrl}
          alt={video.creator.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600">
            {video.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{video.creator.name}</p>
          <div className="text-sm text-gray-500 mt-1">
            {video.views.toLocaleString()} views • {video.createdAt}
          </div>
        </div>
      </div>
    </Link>
  );
}