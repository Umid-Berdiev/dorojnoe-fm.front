export type MediaType = "photo" | "video";

export interface RadioProgramType {
  broadcastTime: string;
  description: string;
  digest: string;
  draft: boolean;
  id: number;
  linkVk: string | null;
  mainImage: ImageType;
  name: string;
  noSchedule: string | null;
  podcastLink: string;
  publishDate: string;
  slug: string;
}

export interface NewsCategoryType {
  createdAt: string;
  id: number;
  name: string;
  slug: string;
  updatedAt: string;
  weight: string;
}

export interface ImageType {
  created_at: string;
  dir: {
    image: string;
    horizontal: {
      desktop: string;
      mobile: string;
    };
    square: {
      desktop: string;
      mobile: string;
    };
  };
  disk_path: {
    image: string;
    horizontal: {
      desktop: string;
      mobile: string;
    };
    square: {
      desktop: string;
      mobile: string;
    };
  };
  filename: string;
  id: number;
  mime_type: string;
  name: string;
  updated_at: string;
}

export interface NewsType {
  broadcast: boolean;
  category: NewsCategoryType;
  createdAt: string;
  description: string | null;
  digest: string | null;
  draft: boolean;
  episodeLink: string | null;
  externalLink: string | null;
  id: number;
  locationShow: string | null;
  main: boolean;
  mainImage: ImageType;
  marks: any[];
  name: string;
  newsCategoryId: number;
  newsType: string | null;
  newsView: string;
  popular: boolean;
  program: RadioProgramType | null;
  programId: number | null;
  publishDate: string;
  publishEnd: string;
  showDate: null;
  slug: string;
  updatedAt: string;
  videoLink: string | null;
  widget: null;
  zen: boolean;
}

export interface NuxtListItemProps {
  title: string;
  subtitle: string;
  right_text: string;
  image: string;
}

export interface NewsItemProps {
  id: string | number;
  category: string;
  title: string;
  body: string;
  image: string;
  date: string;
}

export interface PresenterType {
  birthDate: string;
  birthPlace: string;
  createdAt: string;
  draft: boolean;
  id: number;
  images: ImageType[];
  mainImage: ImageType;
  name: string;
  programs: RadioProgramType[];
  regionId: number;
  slug: string;
  status: 0 | 1;
  weight: number;
}

export interface MediaInterface {
  digest: string;
  id: number;
  mainImage: ImageType;
  name: string;
  publishDate: string;
  slug: string;
}

export interface PaginationType {
  limit: number;
  page: number;
  pages: number;
  total: number;
}
