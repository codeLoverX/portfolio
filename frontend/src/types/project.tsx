export interface Project {
  image: {
    asset: {
      _ref: string
    }
  };
  imageDetails?: {
    alt?: string, imageHeight?: string, imageWidth?: string
  };
  backendDemo?: string;
  liveDemo?: string;
  order?: string;
  github?: string;
  title: string;
  _createdAt?: Date;
  _id: string;
  description: Array<unknown>;
};


