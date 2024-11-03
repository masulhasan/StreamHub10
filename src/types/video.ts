export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  views: number;
  createdAt: string;
  creator: {
    name: string;
    avatarUrl: string;
  };
}