import { Video } from '../types/video';

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Morning Meditation by the Lake',
    description: 'Start your day with this calming meditation session with beautiful lake views.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=1200',
    videoUrl: 'https://example.com/video1.mp4',
    duration: '10:15',
    views: 15234,
    createdAt: '2024-03-15',
    creator: {
      name: 'Mindful Moments',
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
    }
  },
  {
    id: '2',
    title: 'Advanced React Patterns Tutorial',
    description: 'Learn advanced React patterns and best practices in this comprehensive guide.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200',
    videoUrl: 'https://example.com/video2.mp4',
    duration: '25:30',
    views: 45678,
    createdAt: '2024-03-14',
    creator: {
      name: 'Code Masters',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
    }
  },
  {
    id: '3',
    title: 'Urban Photography Tips',
    description: 'Master urban photography with these essential techniques and composition tips.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200',
    videoUrl: 'https://example.com/video3.mp4',
    duration: '18:45',
    views: 32198,
    createdAt: '2024-03-13',
    creator: {
      name: 'Creative Lens',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
    }
  }
];